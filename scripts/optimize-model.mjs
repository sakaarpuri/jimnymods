import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { meshopt } from '@gltf-transform/functions';
import { MeshoptDecoder, MeshoptEncoder } from 'meshoptimizer';
import { stat } from 'node:fs/promises';

// Preserve all named assemblies and material boundaries used by the configurator.
// Quantization changes only sub-millimetre coordinates, not the silhouette.
const path='assets/models/jimny-lwb-blender.glb';
await Promise.all([MeshoptDecoder.ready,MeshoptEncoder.ready]);
const io=new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({
  'meshopt.decoder':MeshoptDecoder,'meshopt.encoder':MeshoptEncoder,
});
const before=(await stat(path)).size;
const document=await io.read(path);
await document.transform(meshopt({
  encoder:MeshoptEncoder,level:'high',
  quantizePosition:16,quantizeNormal:12,quantizeTexcoord:12,
}));
await io.write(path,document);
console.log(`Jimny web geometry: ${before} → ${(await stat(path)).size} bytes; assembly names preserved.`);
