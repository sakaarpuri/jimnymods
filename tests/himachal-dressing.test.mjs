import test from 'node:test';
import assert from 'node:assert/strict';
import {COURSES,makeWorld} from '../src/trail/courses.js';
import {groundGeometry} from '../src/trail/environment.js';
import {articulationBedRelief} from '../src/trail/adventure-terrain.js';
import {sectionWaterExclusion} from '../src/trail/himachal-section.js';
import {sectionShoulderDistance,sectionGreenWeight,inHimachalSection} from '../src/trail/himachal-dressing.js';
import {vegetationLayout} from '../src/trail/vegetation-layout.js';
test('section render uses the exact .65m physics lattice with articulation authority',()=>{
 const w=makeWorld(COURSES.find(c=>c.id==='mountain')),b=w.himachalSection.bounds,spacing=w.himachalSection.groundSpacing;
 const g=groundGeometry(w,b,spacing,.012),p=g.attributes.position,c=Math.ceil((b.maxX-b.minX)/spacing),r=Math.ceil((b.maxZ-b.minZ)/spacing);
 assert.equal(p.count,(c+1)*(r+1));
 for(let j=0;j<=r;j++)for(let i=0;i<=c;i++){
  const x=b.minX+i/c*(b.maxX-b.minX),z=b.minZ+j/r*(b.maxZ-b.minZ),index=j*(c+1)+i;
  assert(Math.abs(p.getY(index)-(w.height(x,z)+.012-articulationBedRelief(w.course,x,z)))<.00001);
 }
 for(let i=0;i<g.index.count;i+=3){const ids=[g.index.getX(i),g.index.getX(i+1),g.index.getX(i+2)];
  assert(!ids.every(k=>p.getX(k)>=56&&p.getX(k)<=74&&p.getZ(k)>=108&&p.getZ(k)<=181),'coarse section must not overlay fine technical bed');
 }
 g.dispose();
});
test('focused shoulders expose only the active technical lane while preserving bypass and bridge',()=>{
 const c=COURSES.find(c=>c.id==='mountain'),w=makeWorld(c,'driver');
 for(const [difficulty,lane]of [['explorer',60],['driver',65],['expert',70]]){
  const active=makeWorld(c,difficulty);
  for(const [x,z]of [[62,96],[lane,120],[lane,151],[lane,175],[42,120],[40,149],[28,130],[16,130]])assert(sectionShoulderDistance(active,x,z)<0);
  for(const other of [60,65,70].filter(x=>x!==lane))assert(sectionGreenWeight(active,other,151)>.65,'inactive row returns to green shoulder');
  assert.equal(sectionGreenWeight(active,lane,151),0);
 }
 assert(sectionShoulderDistance(w,82,145)>2);assert.equal(sectionShoulderDistance(w,65,230),null);
 assert.equal(sectionGreenWeight(w,82,145),1);assert.equal(sectionGreenWeight(w,65,151),0);assert.equal(sectionGreenWeight(w,22,240),0);
 for(const id of ['urban','sand'])assert.equal(inHimachalSection(makeWorld(COURSES.find(c=>c.id===id)),65,145),false);
});
test('all shared trunks leave the new river and bridge approaches unobstructed',()=>{
 const w=makeWorld(COURSES.find(c=>c.id==='mountain')),trees=vegetationLayout(w);
 assert(trees.some(t=>t.id.startsWith('section-forest-')));
 for(const t of trees)assert(!sectionWaterExclusion(t.x,t.z));
});
