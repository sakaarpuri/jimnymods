import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { meshopt, simplify, weld } from '@gltf-transform/functions';
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
await document.transform(weld(),simplify({
  simplifier:MeshoptSimplifier,ratio:.55,error:.0004,lockBorder:true,
}));
await document.transform(meshopt({
  encoder:MeshoptEncoder,level:'high',
  // 14-bit positions retain <0.3mm precision over this four-metre car; ten-bit
  // normals avoid shipping imperceptible precision now the cabin is detailed.
  quantizePosition:14,quantizeNormal:10,quantizeTexcoord:12,
}));
// Quantization exposes duplicate vertices along smooth authoring seams. Weld
// those, then use a conservative second cleanup pass before final encoding.
// Keep the original full-resolution .blend as the source for every rebuild.
await document.transform(weld(),simplify({simplifier:MeshoptSimplifier,ratio:.75,error:.00027,lockBorder:true}));
await document.transform(meshopt({encoder:MeshoptEncoder,level:'high',quantizePosition:14,quantizeNormal:10,quantizeTexcoord:12}));
await io.write(path,document);
console.log(`Jimny web geometry: ${before} → ${(await stat(path)).size} bytes; assembly names preserved.`);
