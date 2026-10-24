import test from 'node:test';
import assert from 'node:assert/strict';
import {COURSES,DIFFICULTIES,getMissions,makeWorld,makeGates} from '../src/trail/courses.js';
import {adventureHeight} from '../src/trail/adventure-terrain.js';

const school=COURSES.find(c=>c.id==='school');
test('lessons share one training ground and are separate from destination challenges',()=>{
 const lessons=getMissions(school);
 assert.equal(lessons.length,4);
 assert.deepEqual(lessons.map(m=>m.id),['lesson-controls','lesson-steps','lesson-hill','lesson-sand']);
 const challengeIds=new Set(COURSES.filter(c=>c!==school).flatMap(getMissions).map(m=>m.id));
 assert(lessons.every(m=>!challengeIds.has(m.id)));
 assert.notEqual(school.worldId,COURSES.find(c=>c.id==='urban').worldId,'lesson records must not overwrite previous challenge records');
 for(const difficulty of Object.keys(DIFFICULTIES))for(const lesson of lessons){
  const world=makeWorld(school,difficulty),gates=makeGates(school,difficulty,lesson.id);
  assert(gates.every(g=>world.contains(g.x,g.z)));
  assert(gates.at(-1).stop);
  assert(gates.some(g=>g.range),'each lesson explicitly teaches or requires its transfer range');
 }
});
test('the school has physical wheel steps, an elevated training hill and different sand grip',()=>{
 const world=makeWorld(school);
 assert(world.height(-60.7,87)>.1);
 assert.equal(world.height(-100,130),0);
 assert(world.height(-100,175)>3);
 assert(world.height(-100,195)>0);
 assert.equal(world.height(-100,220),0);
 assert.equal(world.surface(-100,175),'loose');
 assert.equal(world.surface(-28,145),'sand');
 assert.equal(world.surface(-14,145),'soft-sand');
 assert.equal(world.surface(0,20),'tarmac');
 const provingCourse=COURSES.find(c=>c.id==='urban');
 for(const difficulty of Object.keys(DIFFICULTIES)){
  const proving=makeWorld(provingCourse,difficulty);
  for(const z of [130,150,175,195,220]){
   const quarry=adventureHeight(provingCourse,-100,z,proving.routeDistance(-100,z));
   assert.equal(proving.height(-100,z)-quarry,0,'only the intentional quarry relief belongs here; the separate school hill must not leak into destination terrain');
  }
 }
});
test('4WD checkpoints and subsequent lesson lines stay off dry tarmac',()=>{
 for(const difficulty of Object.keys(DIFFICULTIES))for(const mission of getMissions(school)){
  const world=makeWorld(school,difficulty),gates=makeGates(school,difficulty,mission.id);
  let engaged=false;
  for(let i=0;i<gates.length;i++){
   if(gates[i].range)engaged=true;
   if(!engaged)continue;
   assert(!['tarmac','wet-tarmac'].includes(world.surface(gates[i].x,gates[i].z)));
   const next=gates[i+1];if(!next)continue;
   for(let j=0;j<=30;j++){
    const x=gates[i].x+(next.x-gates[i].x)*j/30,z=gates[i].z+(next.z-gates[i].z)*j/30;
    assert(!['tarmac','wet-tarmac'].includes(world.surface(x,z)),`${mission.id} crosses tarmac in 4WD at ${x}, ${z}`);
   }
  }
 }
});
