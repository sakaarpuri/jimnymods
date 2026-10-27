import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { compactPrimitive, dequantize, meshopt, prune, simplifyPrimitive, weld } from '@gltf-transform/functions';
import { MeshoptDecoder, MeshoptEncoder, MeshoptSimplifier } from 'meshoptimizer';
import { stat } from 'node:fs/promises';

// Preserve all named assemblies and material boundaries used by the configurator.
// Quantization changes only sub-millimetre coordinates, not the silhouette.
const path=process.argv.includes('--three-door')?'assets/models/jimny-swb-blender.glb':'assets/models/jimny-lwb-blender.glb';
await Promise.all([MeshoptDecoder.ready,MeshoptEncoder.ready,MeshoptSimplifier.ready]);
const io=new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({
  'meshopt.decoder':MeshoptDecoder,'meshopt.encoder':MeshoptEncoder,
});
const before=(await stat(path)).size;
const document=await io.read(path);
// Runtime roof finishes ignore baked vertex colours. Omit only this unused
// roof attribute; preserve body cavity data for the asset's standalone use
// and its regression contract, plus all cabin/tyre occlusion. Near-black
// IntakeShadow surfaces (including glass ceramic frit) need no additional
// baked darkening. Omitting that stream retains the revised surfaces within
// the existing mobile transfer budget without coarsening their geometry.
for (const mesh of document.getRoot().listMeshes()) {
  for (const primitive of mesh.listPrimitives()) {
    if (['RoofPaint','IntakeShadow'].includes(primitive.getMaterial()?.getName())) {
      primitive.setAttribute('COLOR_0',null);
    }
  }
}
// Keep the editable Blender master at full resolution. On the web, collapse
// redundant subdivisions with a 0.04%-of-radius error bound and locked borders.
// Thin seams, aperture edges and named configurable assemblies stay intact.
await document.transform(weld());
// Preserve the separately batched bonnet mesh, not the entire body, so its
// normals stay intact without retaining every other body subdivision.
const protectedMeshes=new Set(document.getRoot().listNodes()
  .filter(node=>node.getName().endsWith('__ProtectedBonnet'))
  .map(node=>node.getMesh()).filter(Boolean));
const grilleSheets=new Set(document.getRoot().listNodes()
  .filter(node=>/Grille__/.test(node.getName()))
  .map(node=>node.getMesh()).filter(Boolean));
function simplifyWithNormals(primitive,ratio,error){
  const positions=primitive.getAttribute('POSITION'),normals=primitive.getAttribute('NORMAL'),indices=primitive.getIndices();
  if(!positions||!normals||!indices)throw new Error('Reflective surface requires indexed positions and normals');
  const [result]=MeshoptSimplifier.simplifyWithAttributes(new Uint32Array(indices.getArray()),positions.getArray(),3,normals.getArray(),3,[1,1,1],null,Math.floor(indices.getCount()*ratio/3)*3,error,['LockBorder']);
  primitive.setIndices(indices.clone().setArray(result));compactPrimitive(primitive);
}
function simplifyOtherSurfaces(ratio,error){
  for(const mesh of document.getRoot().listMeshes())for(const primitive of mesh.listPrimitives()){
    if(protectedMeshes.has(mesh))continue;
    if(grilleSheets.has(mesh))simplifyWithNormals(primitive,ratio,error);
    else simplifyPrimitive(primitive,{simplifier:MeshoptSimplifier,ratio,error,lockBorder:true});
  }
}
simplifyOtherSurfaces(.55,.0004);
await document.transform(meshopt({
  encoder:MeshoptEncoder,level:'high',
  // 14-bit positions retain <0.3mm precision over this four-metre car; ten-bit
  // normals avoid shipping imperceptible precision now the cabin is detailed.
  quantizePosition:14,quantizeNormal:10,quantizeTexcoord:12,
}));
// Quantization exposes duplicate vertices along smooth authoring seams. Weld
// those, then use a conservative second cleanup pass before final encoding.
// Keep the original full-resolution .blend as the source for every rebuild.
await document.transform(dequantize(),weld());
simplifyOtherSurfaces(.75,.00027);
await document.transform(meshopt({encoder:MeshoptEncoder,level:'high',quantizePosition:14,quantizeNormal:10,quantizeTexcoord:12}));
// A position-only simplifier preserves the bonnet silhouette but not its
// reflected highlights. Retain the normal field as an explicit error metric.
// This keeps the approved painted surface smooth within the mobile budget.
await document.transform(dequantize(),weld());
for(const mesh of document.getRoot().listMeshes())for(const primitive of mesh.listPrimitives()){
  if(protectedMeshes.has(mesh)){
    const positions=primitive.getAttribute('POSITION');
    const normals=primitive.getAttribute('NORMAL');
    const indices=primitive.getIndices();
    if(!positions||!normals||!indices)throw new Error('Protected bonnet requires indexed positions and normals');
    const [result]=MeshoptSimplifier.simplifyWithAttributes(
      new Uint32Array(indices.getArray()),positions.getArray(),3,normals.getArray(),3,
      [1,1,1],null,Math.floor(indices.getCount()*.30/3)*3,.0005,['LockBorder'],
    );
    primitive.setIndices(indices.clone().setArray(result));compactPrimitive(primitive);
  }else if(primitive.getMaterial()?.getName()==='TyreRubber'){
    // Sub-pixel rubber detail can lose subdivisions; wheel shape and painted
    // rims cannot. Keep borders and the original authoring files intact.
    simplifyPrimitive(primitive,{simplifier:MeshoptSimplifier,ratio:.55,error:.001,lockBorder:true});
  }
  // Garage and Drive explicitly ignore baked colour on these reflective
  // surfaces. Do not ship the unused stream, nor sacrifice their normals.
  if(['BrightChrome','MachinedAlloy','GrilleLettering','OpticalGlass'].includes(primitive.getMaterial()?.getName()))primitive.setAttribute('COLOR_0',null);
}
await document.transform(prune({keepAttributes:true,keepLeaves:true}),meshopt({encoder:MeshoptEncoder,level:'high',quantizePosition:14,quantizeNormal:10,quantizeTexcoord:12}));
await io.write(path,document);
console.log(`Jimny web geometry: ${before} → ${(await stat(path)).size} bytes; assembly names preserved.`);
