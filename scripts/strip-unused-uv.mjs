import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { meshopt, prune } from '@gltf-transform/functions';
import { MeshoptDecoder, MeshoptEncoder } from 'meshoptimizer';
import { stat } from 'node:fs/promises';

// No material in the configurator or the game reads a second UV set (the
// models carry no baked textures), so TEXCOORD_1 is dead weight in the web
// assets. Re-encoding keeps the same quantisation as optimize-model.mjs and
// does not simplify, so it is safe to run once per asset after optimisation.
const targets=process.argv.slice(2);
if(!targets.length)targets.push('assets/models/jimny-lwb-blender.glb','assets/models/jimny-swb-blender.glb');
await Promise.all([MeshoptDecoder.ready,MeshoptEncoder.ready]);
const io=new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({'meshopt.decoder':MeshoptDecoder,'meshopt.encoder':MeshoptEncoder});
for(const path of targets){
  const before=(await stat(path)).size,document=await io.read(path);let stripped=0;
  for(const mesh of document.getRoot().listMeshes())for(const primitive of mesh.listPrimitives()){
    if(primitive.getAttribute('TEXCOORD_1')){primitive.setAttribute('TEXCOORD_1',null);stripped++;}
    // These authored solid materials use neither maps nor UV-based procedural
    // textures in Garage or Drive. Retain UV0 on paint, rubber and fabrics.
    if(['MouldedPlastic','GrilleAnthracite','GlossBlackGrille'].includes(primitive.getMaterial()?.getName())&&primitive.getAttribute('TEXCOORD_0')){
      primitive.setAttribute('TEXCOORD_0',null);stripped++;
    }
  }
  if(!stripped){console.log(`${path}: no second UV set, unchanged.`);continue;}
  await document.transform(prune({keepAttributes:true,keepLeaves:true}),meshopt({encoder:MeshoptEncoder,level:'high',quantizePosition:14,quantizeNormal:10,quantizeTexcoord:12}));
  await io.write(path,document);
  console.log(`${path}: removed ${stripped} unused UV streams, ${before} → ${(await stat(path)).size} bytes.`);
}
