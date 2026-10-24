import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {Texture,TextureLoader,Group} from 'three';
import {preloadVegetationAssets,disposeVegetationAssets,vegetationAssetsReady,buildVegetationGeometry} from '../src/trail/vegetation-render.js';
import {COURSES,makeWorld} from '../src/trail/courses.js';

test('photographed pine maps are pinned CC0 sources with a bounded transfer budget',async()=>{
 const provenance=JSON.parse(await readFile(new URL('../assets/vegetation/pine-twig.provenance.json',import.meta.url),'utf8'));
 assert.equal(provenance.license,'CC0-1.0');assert.equal(provenance.source,'https://polyhaven.com/a/pine_tree_01');
 assert.equal(provenance.files.length,3);let bytes=0;
 for(const f of provenance.files){
  assert(f.source.startsWith('https://dl.polyhaven.org/file/ph-assets/Models/png/1k/pine_tree_01/'));
  const data=await readFile(new URL(`../${f.file}`,import.meta.url));
  assert.equal(data.length,f.bytes);assert.equal(createHash('sha256').update(data).digest('hex'),f.sha256);bytes+=data.length;
 }
 assert(bytes<650000,`pine transfer ${bytes} bytes`);
});

test('pine asset cache releases failed and canceled loads, cannot resurrect, and owns clone textures',async()=>{
 assert.equal(await preloadVegetationAssets(),false);
 const original=TextureLoader.prototype.loadAsync,documentBefore=globalThis.document;
 let pending=[];globalThis.document={};
 TextureLoader.prototype.loadAsync=function(){return new Promise((resolve,reject)=>pending.push({resolve,reject}));};
 const textures=()=>Array.from({length:3},()=>{const t=new Texture();t.userData.released=0;t.addEventListener('dispose',()=>t.userData.released++);return t;});
 try{
  const failed=preloadVegetationAssets();await Promise.resolve();const first=textures();
  pending[0].resolve(first[0]);pending[1].reject(Error('missing alpha'));pending[2].resolve(first[2]);
  assert.equal(await failed,false);assert.equal(first[0].userData.released,1);assert.equal(first[2].userData.released,1);assert.equal(vegetationAssetsReady(),false);
  pending=[];const canceled=preloadVegetationAssets();await Promise.resolve();const oldRequests=pending,oldTextures=textures();disposeVegetationAssets();
  pending=[];const current=preloadVegetationAssets();await Promise.resolve();const newRequests=pending,newTextures=textures();
  oldRequests.forEach((p,i)=>p.resolve(oldTextures[i]));assert.equal(await canceled,false);assert(oldTextures.every(t=>t.userData.released===1));
  assert.equal(preloadVegetationAssets(),current,'old completion must not clear a newer in-flight request');
  newRequests.forEach((p,i)=>p.resolve(newTextures[i]));assert.equal(await current,true);assert.equal(vegetationAssetsReady(),true);
  const world=makeWorld(COURSES.find(c=>c.id==='mountain'),'driver'),root=buildVegetationGeometry(world,new Group());
  const foliage=root.getObjectByName('Himachal fine needle branchlets');assert.equal(foliage.geometry.index.count/3,6);
  const trunks=root.getObjectByName('Shared collision trunks');assert.equal(trunks.geometry.parameters.radiusTop,.06,'Mountain pine must taper instead of ending in a blunt pole.');
  const firstTrunk=trunks.instanceMatrix.array,shoots=foliage.instanceMatrix.array,top=firstTrunk[13]+firstTrunk[5]/2;let terminalShoots=0;
  for(let i=0;i<foliage.count;i++){const offset=i*16;if(Math.hypot(shoots[offset+12]-firstTrunk[12],shoots[offset+14]-firstTrunk[14])<.75&&shoots[offset+13]>top-firstTrunk[5]*.055)terminalShoots++;}
  assert(terminalShoots>=4,'The first physical pine needs upright foliage around its terminal leader.');
  const uv=foliage.geometry.attributes.uv;
  for(let i=0;i<uv.count;i++){assert(uv.getX(i)>.03&&uv.getX(i)<.22);assert(uv.getY(i)>.55&&uv.getY(i)<.97);}
  assert.equal(foliage.material.userData.terrainTextures.length,3);
  foliage.material.userData.terrainTextures.forEach((t,i)=>assert.notEqual(t,newTextures[i]));
  let triangles=0;root.traverse(o=>{if(o.geometry)triangles+=o.geometry.index.count/3*o.count;});
  // A small photographic branchlet uses 6 triangles vs 4 in its fallback;
  // The1.5M ceiling also covers medium-detail photo crowns on the new1.47km
  // mountain drive, replacing its former opaque procedural foliage.
  assert(triangles<1500000,`photographic vegetation ${triangles} triangles`);
  root.traverse(o=>{o.geometry?.dispose();if(o.material){o.material.userData.terrainTextures?.forEach(t=>t.dispose());o.material.dispose();}if(o.isInstancedMesh)o.dispose();});
  assert(newTextures.every(t=>t.userData.released===0),'world disposal must not dispose cache textures');
  disposeVegetationAssets();assert.equal(vegetationAssetsReady(),false);assert(newTextures.every(t=>t.userData.released===1));
 }finally{TextureLoader.prototype.loadAsync=original;if(documentBefore===undefined)delete globalThis.document;else globalThis.document=documentBefore;disposeVegetationAssets();}
});
