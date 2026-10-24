import test from 'node:test';
import assert from 'node:assert/strict';
import {rockGeometry,rockMaterial} from '../src/trail/rock-surfaces.js';

test('fractured rocks preserve finite cylinder collision envelopes and grounded height',()=>{
 for(const seed of [0,1,2,3,4,5,20,100,'mountain-rock-17','urban-ledge-3']){
  const g=rockGeometry(seed),p=g.attributes.position,n=g.attributes.normal;
  assert.ok(g.index&&p.count<g.index.count/2,'Indexed panels should remain inexpensive');
  assert.ok(p.count<600,'A small obstacle must not become a high-poly sculpture');
  assert.ok(Math.abs(g.boundingBox.min.y+.5)<1e-6);
  assert.ok(Math.abs(g.boundingBox.max.y-.5)<1e-6);
  for(let i=0;i<p.count;i++){
   assert.ok(Number.isFinite(p.getX(i)+p.getY(i)+p.getZ(i)));
   assert.ok(Math.hypot(p.getX(i),p.getZ(i))<=1.000001,'Visible rock exceeds physical radius');
   assert.ok(Math.abs(Math.hypot(n.getX(i),n.getY(i),n.getZ(i))-1)<1e-5,'Invalid shading normal');
  }
  let disposed=0;g.addEventListener('dispose',()=>disposed++);g.dispose();assert.equal(disposed,1);
 }
});

test('rock seed gives stable variants without random world regeneration',()=>{
 const a=rockGeometry('ledge-12'),b=rockGeometry('ledge-12'),c=rockGeometry('ledge-13');
 assert.deepEqual(a.attributes.position.array,b.attributes.position.array);
 assert.notDeepEqual(a.attributes.position.array,c.attributes.position.array);
 // Fracture panels have separate normals along a shared edge, rather than a
 // single continuously smoothed potato surface.
 const positions=new Map();let creases=0;
 for(let i=0;i<a.attributes.position.count;i++){
  const p=a.attributes.position,n=a.attributes.normal,key=[p.getX(i),p.getY(i),p.getZ(i)].map(v=>v.toFixed(5)).join(',');
  const normal=[n.getX(i),n.getY(i),n.getZ(i)],old=positions.get(key);
  if(old&&old.reduce((s,v,j)=>s+v*normal[j],0)<.85)creases++;
  positions.set(key,normal);
 }
 assert.ok(creases>20,'Broad fracture boundaries should survive geometry generation');
 for(const g of [a,b,c])g.dispose();
});

test('rock weathering uses instance/world positions, three-plane detail and disposable texture-free materials',()=>{
 const keys=new Set();
 for(const theme of ['mountain','urban','sand']){
  const m=rockMaterial(theme),shader={vertexShader:'#include <begin_vertex>',fragmentShader:'#include <color_fragment>\n#include <normal_fragment_maps>',uniforms:{}};
  m.onBeforeCompile(shader);keys.add(m.customProgramCacheKey());
  assert.match(shader.vertexShader,/instanceMatrix\*rockWorld/);
  assert.match(shader.fragmentShader,/rockTri/);assert.match(shader.fragmentShader,/rockDetail/);
  assert.match(shader.fragmentShader,/rockSeam/);assert.match(shader.fragmentShader,/rockSplit/);
  assert.equal(m.map,null);assert.equal(m.normalMap,null);assert.equal(m.metalness,0);assert.ok(m.roughness>=.9);
  let disposed=0;m.addEventListener('dispose',()=>disposed++);m.dispose();assert.equal(disposed,1);
 }
 assert.equal(keys.size,3);
});
