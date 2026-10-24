import test from 'node:test';
import assert from 'node:assert/strict';
import {himachalWearCoordinates,groundGeometry,groundMaterial} from '../src/trail/environment.js';
import {COURSES,makeWorld} from '../src/trail/courses.js';

test('paired wear follows only the active technical line with signed coordinates',()=>{
 for(const lane of [60,65,70]){
  const world={course:{theme:'mountain'},activeStoneLane:lane,himachalSection:{bounds:{minX:30,maxX:100,minZ:90,maxZ:200},lines:{technical:[]}}};
  const left=himachalWearCoordinates(world,lane-.72,140),right=himachalWearCoordinates(world,lane+.72,140);
  assert.ok(Math.abs(left[0]+.72)<1e-8);assert.ok(Math.abs(right[0]-.72)<1e-8);
  assert.equal(left[1],right[1]);assert.equal(left[2],1);assert.equal(right[2],1);
  assert.equal(himachalWearCoordinates(world,lane+8,140)[2],0);
 }
});
test('gravel wear follows curved extension samples but does not tint asphalt or other worlds',()=>{
 const world=makeWorld(COURSES.find(c=>c.id==='mountain'),'driver');
 for(const road of world.mountainExtension.roads)for(const p of road.points.filter((_,i)=>i%25===0).slice(1)){
  const nearest=world.mountainExtension.nearestRoad(p.x,p.z),wear=himachalWearCoordinates(world,p.x,p.z,nearest);
  assert.ok(wear.every(Number.isFinite));assert.ok(Math.abs(wear[0])<.001);
  assert.equal(wear[2],road.kind==='gravel'?1:0);
 }
 assert.deepEqual(himachalWearCoordinates({course:{theme:'sand'}},0,0),[0,0,0]);
});
test('section forks and bypass do not interpolate unrelated paired track coordinates',()=>{
 const world={course:{theme:'mountain'},activeStoneLane:65,himachalSection:{bounds:{minX:30,maxX:100,minZ:90,maxZ:200},lines:{technical:[],bypass:[[62,96],[38,130],[60,190]]}}};
 assert.equal(himachalWearCoordinates(world,62,100)[2],0,'junction is untinted');
 assert.equal(himachalWearCoordinates(world,38,130)[2],0,'bypass does not supply a second signed coordinate frame');
 assert.equal(himachalWearCoordinates(world,60,189)[2],0,'upper merging turn is untinted');
 assert.equal(himachalWearCoordinates(world,65.72,140)[2],1,'technical climb still has coherent wear');
});
test('wear adds attributes without changing shared physical surface or index count',()=>{
 const world=makeWorld(COURSES.find(c=>c.id==='mountain'),'driver');
 const bounds={minX:60,maxX:70,minZ:120,maxZ:125},g=groundGeometry(world,bounds,1),p=g.attributes.position;
 assert.equal(g.attributes.trailWear.count,p.count);assert.equal(g.index.count,10*5*6);
 for(let i=0;i<p.count;i++)assert.ok(Math.abs(p.getY(i)-world.height(p.getX(i),p.getZ(i)))<.00001);
 assert.ok(g.attributes.trailWear.array.every(Number.isFinite));g.dispose();
});
test('mountain shader uses soft broken wear and soil mosaics without extra maps',()=>{
 for(const theme of ['mountain','urban','sand']){
  const material=groundMaterial(false,theme),shader={vertexShader:'#include <begin_vertex>',fragmentShader:'#include <roughnessmap_fragment>',uniforms:{}};
  material.onBeforeCompile(shader);
  assert.equal(shader.fragmentShader.includes('float wornTrack'),theme==='mountain');
  assert.equal(shader.fragmentShader.includes('float gravelPocket'),theme==='mountain');
  assert.equal(Object.keys(shader.uniforms).length,0);
  if(theme==='mountain'){assert.match(shader.vertexShader,/roadWear=trailWear/);assert.match(shader.fragmentShader,/1\.0-stoneBlend\*\.9/);}
  material.dispose();
 }
});
