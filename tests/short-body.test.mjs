import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {Box3,Vector3} from 'three';
const bytes=readFileSync(new URL('../assets/models/jimny-swb-blender.glb',import.meta.url));
const model=new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'');
test('JB74 is a separate, mobile-budget asset with a 2.250 m wheelbase',async()=>{
 // Match the documented 3.30 MB rebuilt cabin/optics budget shared by both bodies.
 const {scene}=await model;scene.updateMatrixWorld(true);assert.ok(bytes.length<3_300_000);
 assert.equal(scene.getObjectByName('BodyShell').userData.wheelbase_m,2.25);
 assert.equal(scene.getObjectByName('BodyShell').userData.body_style,'3-door JB74 wide-body');
 const front=new Box3(),rear=new Box3(),v=new Vector3();scene.getObjectByName('StockWheels').traverse(o=>{if(!o.isMesh)return;const p=o.geometry.attributes.position;for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i).applyMatrix4(o.matrixWorld);(v.z>0?front:rear).expandByPoint(v);}});
 assert.ok(Math.abs(front.getCenter(new Vector3()).z-rear.getCenter(new Vector3()).z-2.25)<.003);
 assert.ok(Math.abs(front.getSize(new Vector3()).y-.693)<.003,'Tyres must not be scaled with the wheelbase');
});
test('SWB retains factory assembly dimensions and correct front/rear translation',async()=>{
 const {scene}=await model;scene.updateMatrixWorld(true);
 const lamps=new Box3().setFromObject(scene.getObjectByName('StockHeadlamps'),true);
 assert.ok(Math.abs(lamps.getSize(new Vector3()).y-.221)<.008);
 assert.ok(lamps.getCenter(new Vector3()).z>1.65&&lamps.getCenter(new Vector3()).z<1.8);
 const roof=new Box3().setFromObject(scene.getObjectByName('RoofShell'),true);
 assert.ok(Math.abs(roof.getSize(new Vector3()).z-1.795)<.006,'Roof follows the revised upper rear taper and meets the aligned front header');
});
test('all three-door look thumbnails come from the matching SWB model',()=>{
 const manifest=JSON.parse(readFileSync(new URL('../assets/previews/manifest.json',import.meta.url)));
 assert.equal(manifest.swbModelSha256,createHash('sha256').update(bytes).digest('hex'));assert.equal(manifest.swbPresets.length,10);assert.deepEqual(manifest.swbPresets,manifest.presets,'Both bodies must cover the same ten curated looks');
 for(const id of manifest.swbPresets){const image=readFileSync(new URL(`../assets/previews/swb/preset-${id}.webp`,import.meta.url));assert.equal(image.toString('ascii',8,12),'WEBP');assert.ok(image.length>8000);}
});
