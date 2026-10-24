import test from 'node:test';
import assert from 'node:assert/strict';
import {COURSES,makeWorld} from '../src/trail/courses.js';
import {vegetationLayout} from '../src/trail/vegetation-layout.js';
test('course vegetation is deterministic, route-safe and has plausible scale',()=>{
 for(const id of ['mountain','sand']){
  const world=makeWorld(COURSES.find(c=>c.id===id),'driver'),trees=vegetationLayout(world);
  assert.deepEqual(trees,vegetationLayout(world));
  assert.ok(trees.length>(id==='mountain'?150:4));
  for(const t of trees){assert.ok(world.routeDistance(t.x,t.z)>=9);assert.equal(t.y,world.height(t.x,t.z));assert.ok(t.height>2&&t.height<16);assert.ok(Number.isFinite(t.radius));}
 }
});
test('mountain trees form overlapping stands instead of a uniform single-tree grid',()=>{
 const world=makeWorld(COURSES.find(c=>c.id==='mountain'),'driver'),trees=vegetationLayout(world),groups=new Map();
 for(const t of trees){if(!groups.has(t.cluster))groups.set(t.cluster,[]);groups.get(t.cluster).push(t);}
 const clustered=[...groups.values()].filter(g=>g.length>=2);assert(clustered.length>groups.size*.7);
 assert(clustered.filter(group=>group.some(t=>Math.abs(t.height-group[0].height)>.1)).length>clustered.length*.95);
 for(const group of clustered){assert(group.length<=4);for(const t of group)assert(Math.hypot(t.x-group[0].x,t.z-group[0].z)<15);}
});
