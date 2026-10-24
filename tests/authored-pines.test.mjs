import test from'node:test';import assert from'node:assert/strict';import * as T from'three';
import{preloadAuthoredPines,disposeAuthoredPineAssets,authoredPinesReady,authoredPineAngles,createAuthoredPines,attachAuthoredPineNearFade}from'../src/trail/authored-pines.js';

test('authored pines fail closed without browser assets and wrap all eight viewpoints',async()=>{
 disposeAuthoredPineAssets();assert.equal(await preloadAuthoredPines(),false);assert.equal(createAuthoredPines([{x:0,y:0,z:0,height:12}]),null);
 assert.deepEqual(authoredPineAngles(0),{first:0,second:1,blend:0});assert.deepEqual(authoredPineAngles(Math.PI/8),{first:0,second:1,blend:.5});
 assert.deepEqual(authoredPineAngles(-Math.PI/8),{first:7,second:0,blend:.5});
 for(let a=-10;a<10;a+=.13){const v=authoredPineAngles(a);assert(v.first>=0&&v.first<8);assert(v.second>=0&&v.second<8);assert(v.blend>=0&&v.blend<1);}
});
test('loaded instances retain physical tree anchors, shadow cutouts, clone ownership and finite bounds',async()=>{
 const original=T.TextureLoader.prototype.loadAsync,previous=globalThis.document;globalThis.document={};const sources=[];
 T.TextureLoader.prototype.loadAsync=async()=>{const t=new T.Texture();sources.push(t);return t;};
 try{
  assert.equal(await preloadAuthoredPines(),true);assert(authoredPinesReady());
  const trees=[{id:'first',x:15,y:4,z:-20,height:12,seed:.4,species:'pine'},{id:'second',x:-4,y:0,z:12,height:8,seed:.8,species:'pine'},{id:'wrong-species',x:1,y:0,z:2,height:5,species:'acacia'}];
  const group=createAuthoredPines(trees,{minDistance:45,maxDistance:400,fadeStart:55,fadeEnd:70}),mesh=group.children[0];assert.equal(mesh.count,2);assert.deepEqual(group.userData.treeIds,['first','second']);
  assert.equal(group.userData.triangles,4);assert.equal(mesh.geometry.index.count,6);assert.deepEqual([...mesh.geometry.attributes.pineRoot.array],[15,4,-20,-4,0,12]);
  assert(mesh.boundingSphere.radius>0&&Number.isFinite(mesh.boundingSphere.radius));assert(mesh.castShadow&&mesh.receiveShadow);assert(mesh.customDepthMaterial);assert(mesh.customDistanceMaterial);
  assert.notEqual(mesh.material.map,sources[0]);assert.equal(mesh.material.map.colorSpace,T.SRGBColorSpace);
  const camera=new T.PerspectiveCamera();camera.position.set(2,3,4);group.userData.update(camera);
  const shader={uniforms:{},vertexShader:'#include <begin_vertex>',fragmentShader:'#include <map_fragment>\n#include <normal_fragment_begin>'};mesh.material.onBeforeCompile(shader);
  assert.deepEqual(shader.uniforms.pineViewPosition.value.toArray(),[2,3,4]);assert.equal(shader.uniforms.pineMinDistance.value,45);assert.match(shader.fragmentShader,/mat3\(viewMatrix\)/);assert.match(shader.vertexShader,/pineTileUv/);
  const near=new T.InstancedMesh(new T.PlaneGeometry(1,1),new T.MeshStandardMaterial({map:mesh.material.map,alphaTest:.3}),2);
  const disposeFade=attachAuthoredPineNearFade(near,[[15,4,-20],[-4,0,12]],group),nearShader={uniforms:{},vertexShader:'#include <begin_vertex>',fragmentShader:'void main() { }'};near.material.onBeforeCompile(nearShader);
  assert.equal(nearShader.uniforms.pineViewPosition,shader.uniforms.pineViewPosition,'Main camera uniform must be shared, not the shadow camera.');assert.equal(nearShader.uniforms.pineFadeStart.value,55);assert.equal(nearShader.uniforms.pineFadeEnd.value,70);
  assert.match(nearShader.fragmentShader,/pineNoise<pineCoverage/);assert.match(shader.fragmentShader,/pineDither\(\)>=smoothstep/);
  const shadowShader={uniforms:{},vertexShader:'#include <begin_vertex>',fragmentShader:'void main() { }'};near.customDepthMaterial.onBeforeCompile(shadowShader);assert.equal(shadowShader.uniforms.pineViewPosition,shader.uniforms.pineViewPosition);assert.match(shadowShader.fragmentShader,/pineNoise<pineCoverage/);
  disposeFade();disposeFade();assert.equal(near.customDepthMaterial,null);near.geometry.dispose();near.material.dispose();near.dispose();
  let disposed=0,cachedDisposed=0;mesh.material.map.addEventListener('dispose',()=>disposed++);sources[0].addEventListener('dispose',()=>cachedDisposed++);
  group.userData.dispose();group.userData.dispose();assert.equal(disposed,1);assert.equal(cachedDisposed,0);disposeAuthoredPineAssets();assert.equal(cachedDisposed,1);
 }finally{disposeAuthoredPineAssets();T.TextureLoader.prototype.loadAsync=original;if(previous===undefined)delete globalThis.document;else globalThis.document=previous;}
});
test('failed and stale asynchronous loads release every successfully loaded atlas',async()=>{
 const original=T.TextureLoader.prototype.loadAsync,previous=globalThis.document;globalThis.document={};
 try{
  let disposed=0;const good=new T.Texture();good.addEventListener('dispose',()=>disposed++);
  T.TextureLoader.prototype.loadAsync=async path=>{if(path.includes('normal'))throw Error('offline');return good;};
  assert.equal(await preloadAuthoredPines(),false);assert.equal(disposed,1);assert.equal(authoredPinesReady(),false);
  const resolvers=[];T.TextureLoader.prototype.loadAsync=()=>new Promise(resolve=>resolvers.push(resolve));
  const old=preloadAuthoredPines();await Promise.resolve();disposeAuthoredPineAssets();
  for(const resolve of resolvers){const t=new T.Texture();t.addEventListener('dispose',()=>disposed++);resolve(t);}
  assert.equal(await old,false);assert.equal(disposed,3);assert.equal(authoredPinesReady(),false);
 }finally{disposeAuthoredPineAssets();T.TextureLoader.prototype.loadAsync=original;if(previous===undefined)delete globalThis.document;else globalThis.document=previous;}
});
