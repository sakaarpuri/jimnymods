import test from 'node:test';
import assert from 'node:assert/strict';
import {COURSES,makeWorld} from '../src/trail/courses.js';

test('close fractured rock groups are shared solids with active-route clearance and no existing rock piles',()=>{
 for(const difficulty of ['explorer','driver','expert']){
  const world=makeWorld(COURSES.find(c=>c.id==='mountain'),difficulty),rocks=world.obstacles.filter(o=>o.id.startsWith('section-close-fracture-'));
  const groups=Map.groupBy(rocks,r=>r.formation);
  assert(groups.size>=5&&groups.size<=8,`${difficulty}: ${groups.size} connected groups`);
  assert(rocks.some(r=>r.z>=110&&r.z<116),'one entry group must visibly frame the first climb');
  for(const members of groups.values()){
   assert(members.length>=2&&members.length<=3);
   for(const r of members){
    assert(r.height>=.7&&r.height<=1.4);assert(r.radius>=1.2&&r.radius<=1.8);
    const exposed=r.y+r.height-world.height(r.x,r.z);assert(exposed>=.65&&exposed<=1.01,'rock face must not disappear into the slope');
    assert(world.sectionTerraceClearance(r.x,r.z)>=r.radius+2.1);
    assert(r.y<world.height(r.x,r.z));
    for(let j=0;j<8;j++)assert(r.y<world.height(r.x+Math.cos(j*Math.PI/4)*r.radius*.7,r.z+Math.sin(j*Math.PI/4)*r.radius*.7),'rock bottom must remain embedded around its footprint');
    assert(members.some(other=>other!==r&&Math.hypot(r.x-other.x,r.z-other.z)<r.radius+other.radius),'fragments should connect, not form a dotted fringe');
    for(const other of world.obstacles.filter(o=>o.type==='rock'&&o.formation!==r.formation))assert(Math.hypot(r.x-other.x,r.z-other.z)>=r.radius+other.radius+.119,'new clusters should not pile onto existing scans');
   }
  }
 }
});
