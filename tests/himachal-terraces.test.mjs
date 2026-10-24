import test from 'node:test';
import assert from 'node:assert/strict';
import {sectionTerraceField,sectionTerraceHeight,sectionTerraceStone} from '../src/trail/himachal-terraces.js';
import {COURSES,makeWorld,getMissions} from '../src/trail/courses.js';

test('fractured terraces preserve full active turning corridor at every difficulty',()=>{
 for(const lane of [60,65,70])for(let z=108;z<=190;z+=.3)for(let x=lane-3.2;x<=lane+3.2;x+=.4){
  assert.equal(sectionTerraceHeight(x,z,lane,Infinity),0);
  assert.equal(sectionTerraceHeight(x+6,z,lane,3.2),0,'other mission corridor is protected');
 }
});
test('nearby shoulder terraces are broad grounded positive relief, not isolated bumps',()=>{
 for(const lane of [60,65,70]){
  let area=0,max=0;const bands=new Set();
  for(let x=lane-11;x<lane+11;x+=.4)for(let z=110;z<187;z+=.4){
   const f=sectionTerraceField(x,z,lane,Infinity);assert(f.height>=0&&f.height<1.2);assert(f.stone>=0&&f.stone<=1);
   if(f.height>.15){area+=.16;bands.add(Math.floor((z-110)/13));}max=Math.max(max,f.height);
   assert.equal(f.height,sectionTerraceHeight(x,z,lane,Infinity));
  }
  assert(area>190&&area<270,`${area}m2 should provide distinct islands, not continuous walls`);
  assert(max>.85);assert(bands.size>=6);
 }
});
test('exposed stratum material crosses the trail without adding wheel obstacles',()=>{
 for(const lane of [60,65,70]){
  assert(sectionTerraceStone(lane,140,lane,0)>.4);
  assert.equal(sectionTerraceHeight(lane,140,lane,0),0);
  assert.equal(sectionTerraceStone(lane,110,lane,0),0);
 }
 for(const [x,z]of [[0,0],[65,105],[65,200],[-190,550],[120,150]])assert.deepEqual(sectionTerraceField(x,z,65),{height:0,stone:0});
});
test('all active Himachal mission paths stay unchanged with separated rock islands beyond them',()=>{
 for(const difficulty of ['explorer','driver','expert']){
  const world=makeWorld(COURSES.find(c=>c.id==='mountain'),difficulty),lane=world.activeStoneLane;
  const segments=getMissions(world.course).flatMap(m=>{const p=m.routes[world.settings.route];return p.slice(1).map((b,i)=>[p[i],b]);});
  const clearance=(x,z)=>Math.min(...segments.map(([a,b])=>{const dx=b.x-a.x,dz=b.z-a.z,t=Math.max(0,Math.min(1,((x-a.x)*dx+(z-a.z)*dz)/(dx*dx+dz*dz||1)));return Math.hypot(x-a.x-dx*t,z-a.z-dz*t);}));
  for(const [a,b]of segments)for(let i=0;i<=10;i++){
   const x=a.x+(b.x-a.x)*i/10,z=a.z+(b.z-a.z)*i/10;
   assert.equal(sectionTerraceHeight(x,z,lane,clearance(x,z)),0,`${difficulty} route at ${x},${z}`);
  }
  let area=0;for(let x=lane-11;x<=lane+11;x+=.5)for(let z=110;z<=187;z+=.5)if(sectionTerraceHeight(x,z,lane,clearance(x,z))>.15)area+=.25;
  assert(area>120&&area<250,`${difficulty} has ${area}m2 of low islands after route protection`);
 }
});
test('rock islands do not form mirrored road walls and retain long breaks',()=>{
 for(const lane of [60,65,70]){
  let both=0,empty=0;for(let z=110;z<187;z+=.5){
   let left=0,right=0;for(let x=lane-11;x<lane-4;x+=.5)left=Math.max(left,sectionTerraceHeight(x,z,lane));
   for(let x=lane+4;x<lane+11;x+=.5)right=Math.max(right,sectionTerraceHeight(x,z,lane));
   if(left>.2&&right>.2)both++;if(left<.1&&right<.1)empty++;
  }
  assert(both<5,'mirrored bilateral outcrops must not become a trench');
  assert(empty>35,'retain at least17.5m of open gaps along the section');
 }
});
