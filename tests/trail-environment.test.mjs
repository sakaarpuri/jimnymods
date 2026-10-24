import test from 'node:test';
import assert from 'node:assert/strict';
import {rockGeometry,groundGeometry,groundMaterial,clearRiverSurface} from '../src/trail/environment.js';
import {COURSES,makeWorld} from '../src/trail/courses.js';
test('river and bridge approach have no decorative grass or stones through their surfaces',()=>{const world=makeWorld(COURSES.find(c=>c.id==='mountain'));assert(clearRiverSurface(world,-190,514));assert(clearRiverSurface(world,-190,440));assert(clearRiverSurface(world,0,550));assert(!clearRiverSurface(world,80,90));});

test('rock obstacles touch their terrain base and stay within authored height',()=>{
  const geometry=rockGeometry();
  assert.ok(Math.abs(geometry.boundingBox.min.y+.5)<1e-6);
  assert.ok(Math.abs(geometry.boundingBox.max.y-.5)<1e-6);
  for(const height of [.45,.7,1.6])assert.ok(Math.abs(height/2+geometry.boundingBox.min.y*height)<1e-6);
  assert.ok(geometry.index,'shared vertices must be indexed for smooth normals');
  assert.ok(geometry.attributes.position.count<geometry.index.count/2);
  for(const value of geometry.attributes.normal.array)assert.ok(Number.isFinite(value));
  geometry.dispose();
});

test('visible course ground and concrete pads follow physical heights',()=>{
 for(const id of ['mountain','sand','urban','school']){
  const world=makeWorld(COURSES.find(c=>c.id===id),'driver');
  const bounds=id==='urban'||id==='school'?{minX:-67,maxX:-63,minZ:85,maxZ:90}:{minX:58,maxX:66,minZ:110,maxZ:120};
  const g=groundGeometry(world,bounds,.3,.018),p=g.attributes.position;
  for(let i=0;i<p.count;i++)assert.ok(Math.abs(p.getY(i)-world.height(p.getX(i),p.getZ(i))-.018)<.0001,`${id} vertex${i}`);
  for(const n of g.attributes.normal.array)assert.ok(Number.isFinite(n));g.dispose();
 }
});

test('sand ripple and asphalt materials use different cached shader programs',()=>{
 const sand=groundMaterial(false,'sand'),urban=groundMaterial(false,'urban');
 assert.notEqual(sand.customProgramCacheKey(),urban.customProgramCacheKey());
 for(const [material,word]of [[sand,'ripple'],[urban,'aggregate']]){
  const shader={vertexShader:'#include <begin_vertex>',fragmentShader:'#include <color_fragment>',uniforms:{}};
  material.onBeforeCompile(shader);assert.ok(shader.fragmentShader.includes(word));assert.ok(shader.fragmentShader.includes('detailFade'));material.dispose();
 }
});

test('terrain slope colour uses interpolated normals, with distance-limited surface relief',()=>{
 const material=groundMaterial(false,'urban');
 const shader={vertexShader:'#include <begin_vertex>',fragmentShader:'#include <color_fragment>\n#include <roughnessmap_fragment>\n#include <normal_fragment_maps>',uniforms:{}};
 material.onBeforeCompile(shader);
 assert.ok(shader.vertexShader.includes('terrainWorldNormal=normalize(mat3(modelMatrix)*normal)'));
 assert.ok(!shader.fragmentShader.includes('cross(dFdx(trailPosition),dFdy(trailPosition))'));
 assert.ok(shader.fragmentShader.includes('surfaceFade'));
 assert.ok(shader.fragmentShader.includes('surfaceGradient'));
 material.dispose();
});
