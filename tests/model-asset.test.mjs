import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { zstdDecompressSync } from 'node:zlib';

const binary=readFileSync(new URL('../assets/models/jimny-lwb-blender.glb',import.meta.url));
const asset=JSON.parse(binary.subarray(20,20+binary.readUInt32LE(12)).toString('utf8'));
const assemblies=['BodyShell','RoofShell','OEMGrille','BlockGrille','RhinoGrille','ScriptGrille','GlossGrille','DeleteGrille','ClassicGrille','MeshGrille','StockBumper','StockWheels','AllTerrainWheels','Cabin','SpareWheel'];

test('web model is a valid compressed glTF binary within its mobile transfer budget',()=>{
  assert.equal(binary.toString('ascii',0,4),'glTF');
  assert.equal(binary.readUInt32LE(4),2);
  assert.equal(binary.readUInt32LE(8),binary.length);
  assert.ok(asset.extensionsRequired.includes('EXT_meshopt_compression'));
  assert.ok(binary.length<3_000_000,`Model grew to ${binary.length} bytes`);
});

test('every live configurator assembly is exported separately with geometry',()=>{
  for(const name of assemblies){const node=asset.nodes.find(node=>node.name===name);assert.ok(node,`Missing assembly: ${name}`);assert.ok(node.children?.length,`Empty assembly: ${name}`);}
  assert.ok(asset.meshes.length<100,'Material batching regressed');
});

test('paint, roof and transparent glazing retain separate PBR materials',()=>{
  const materials=Object.fromEntries(asset.materials.map(mat=>[mat.name,mat]));
  for(const name of ['BodyPaint','RoofPaint','WindowGlass','TyreRubber','BrightChrome','GrilleLettering'])assert.ok(materials[name],`Missing material ${name}`);
  assert.equal(materials.WindowGlass.alphaMode,'BLEND');
  assert.ok(materials.BodyPaint.extensions.KHR_materials_clearcoat.clearcoatFactor>0);
  assert.equal(asset.images?.length||0,0,'A reference photo should not become a vehicle texture');
});

test('native editable source is a Blender project, not just a renamed export',()=>{
  const source=readFileSync(new URL('../modeling/jimny-lwb.blend',import.meta.url));
  const blend=source.readUInt32LE(0)===0xfd2fb528?zstdDecompressSync(source):source;
  assert.equal(blend.toString('ascii',0,7),'BLENDER');
});

test('build fingerprints the exact model for returning visitors',()=>{
  const hash=createHash('sha256').update(binary).digest('hex').slice(0,12);
  const viewer=readFileSync(new URL('../assets/viewer3d.js',import.meta.url),'utf8');
  assert.ok(viewer.includes(`assets/models/jimny-lwb-blender.glb?v=${hash}`),'Rebuild the viewer after changing the model');
});
