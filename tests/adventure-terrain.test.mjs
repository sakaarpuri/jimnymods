import test from 'node:test';
import assert from 'node:assert/strict';
import {COURSES,makeWorld,makeGates} from '../src/trail/courses.js';
import {adventureHeight,adventureLines,coarseBedRelief,articulationBedRelief,MOUNTAIN_STEPS,mountainStoneMask,mountainStepHeight,offRouteDunes,DUNE_RIDGES} from '../src/trail/adventure-terrain.js';
import {groundGeometry} from '../src/trail/environment.js';
import {sectionTerraceStone} from '../src/trail/himachal-terraces.js';

test('adventure silhouettes leave the shared school and custom builder unchanged',()=>{
 for(const id of ['school','custom'])for(const [x,z]of [[-65,184],[67,153],[-65,225]])assert.equal(adventureHeight({id,theme:'urban'},x,z,100),0);
 assert.equal(adventureLines({id:'school',theme:'urban'}).length,0);
});
test('quarry links physical wheel ramps to a crest stop and graded exit',()=>{
 const c=COURSES.find(c=>c.id==='urban'),w=makeWorld(c),g=makeGates(c,'expert','ramps');
 assert.equal(w.height(-65,160),7);assert(w.height(-117,159)>7);assert(w.height(-65,245)<.1,'the far quarry wall has a driveable opening');
 assert(g.some(p=>p.z===160&&p.stop));assert.equal(g.at(-1).z,214);assert.equal(w.surface(-65,160),'loose');
 assert(w.adventure.find(l=>l.id==='quarry-crest').points.some(([x,z])=>x===-65&&z===160),'visible markers include the actual summit');
 for(let z=115;z<240;z+=.25)assert(Math.abs(w.height(-65,z+.25)-w.height(-65,z))/.25<.35,'earth crest has graded approaches');
 for(const [x,z]of [[-100,94],[-36,128],[-86,101]])assert.equal(adventureHeight(c,x,z,0),0,'workshop and container pads are not lifted');
});
test('Thar bowl has meaningful relief with a lower western saddle',()=>{
 const w=makeWorld(COURSES.find(c=>c.id==='sand'));
 const relief=w.height(-65,226)-w.height(-65,175);assert(relief>8&&relief<13,`relief ${relief}`);
 assert(w.height(-113,224)<w.height(-65,224)-2,'lower saddle is a physical alternative');
 assert(w.adventure.some(l=>l.kind==='bypass'));
});
test('new route markers and shoulder outcrops have shared collision entries',()=>{
 for(const c of COURSES.filter(c=>c.id!=='school')){
  const w=makeWorld(c);assert(w.adventureMarkers.length>0);
  for(const p of w.adventureMarkers){assert(w.sceneryObstacles.includes(p));assert.equal(p.y,w.height(p.x,p.z));assert(w.routeDistance(p.x,p.z)>=1.25);}
  for(const p of w.obstacles.filter(p=>p.id.startsWith('adventure-outcrop')))assert(w.routeDistance(p.x,p.z)>=p.radius+5);
 }
});
test('visible quarry terrain samples the same physical heightfield',()=>{
 const w=makeWorld(COURSES.find(c=>c.id==='urban')),g=groundGeometry(w,{minX:-80,maxX:-50,minZ:150,maxZ:220},2);
 const p=g.attributes.position;for(let i=0;i<p.count;i++)assert(Math.abs(p.getY(i)-w.height(p.getX(i),p.getZ(i)))<1e-4);g.dispose();
});
test('coarse underlay relief matches the fine section and articulation contact beds',()=>{
 const mountain=COURSES.find(c=>c.id==='mountain'),urban=COURSES.find(c=>c.id==='urban');
 assert.equal(coarseBedRelief(mountain,65,145),.4);assert.equal(coarseBedRelief(urban,-65,95),.4);
 assert.equal(coarseBedRelief(mountain,22,130),.4);assert.equal(articulationBedRelief(mountain,22,130),0);
 assert.equal(articulationBedRelief(mountain,65,145),.4);
 assert.equal(coarseBedRelief(mountain,22,210),0);
 for(const p of [[0,0],[70,200],[-65,184]])assert.equal(coarseBedRelief(urban,...p),0);
 assert.equal(coarseBedRelief({id:'custom',theme:'urban'},-65,95),0);
 assert.equal(coarseBedRelief({id:'other'},65,145),0);
});
test('mountain slabs use varied physical footprints within the fine collision bed',()=>{
 assert.equal(MOUNTAIN_STEPS.length,30);assert(Object.isFrozen(MOUNTAIN_STEPS));
 assert(new Set(MOUNTAIN_STEPS.map(p=>p.halfDepth.toFixed(3))).size>20);
 assert(new Set(MOUNTAIN_STEPS.map(p=>p.yaw.toFixed(3))).size>20);
 for(const p of MOUNTAIN_STEPS){
  assert(Object.isFrozen(p));assert(p.x-p.halfWidth>56&&p.x+p.halfWidth<74);
  assert(p.z-p.halfDepth>108&&p.z+p.halfDepth<181);
  assert.equal(mountainStoneMask(p.x,p.z),1);
  assert(Math.abs(mountainStepHeight(p.x,p.z)-p.height)<1e-9);
  assert(Math.abs(mountainStepHeight(p.x,p.z,1.18)-p.height*1.18)<1e-9);
  const outside={x:p.x+Math.cos(p.yaw)*(p.halfWidth+.1),z:p.z-Math.sin(p.yaw)*(p.halfWidth+.1)};
  assert.equal(mountainStepHeight(outside.x,outside.z),0);
 }
 for(const [x,z]of [[0,0],[55,145],[75,145],[65,182]])assert.equal(mountainStepHeight(x,z),0);
});
test('selected mountain lane keeps original slab heights and the rendered mask uses precisely that lane',()=>{
 for(const [difficulty,lane]of [['explorer',60],['driver',65],['expert',70]]){
  const w=makeWorld(COURSES.find(c=>c.id==='mountain'),difficulty);assert.equal(w.activeStoneLane,lane);
  for(const p of MOUNTAIN_STEPS){
   assert.equal(mountainStoneMask(p.x,p.z,lane),p.lane===lane?1:0);
   assert(Math.abs(mountainStepHeight(p.x,p.z,1,lane)-(p.lane===lane?p.height:0))<1e-9);
   const g=groundGeometry(w,{minX:p.x-.1,maxX:p.x+.1,minZ:p.z-.1,maxZ:p.z+.1},.1),stone=g.attributes.trailStone;
   assert(stone);const positions=g.attributes.position;for(let i=0;i<stone.count;i++){const x=positions.getX(i),z=positions.getZ(i),expected=Math.max(mountainStoneMask(x,z,lane),sectionTerraceStone(x,z,lane,w.sectionTerraceClearance(x,z)));assert(Math.abs(stone.getX(i)-expected)<1e-4,'rendered stone combines only the active steps with the separately authored mineral islands');}g.dispose();
  }
 }
});
test('quarry shoulders contain real level benches, with the centre exit still open',()=>{
 const c=COURSES.find(c=>c.id==='urban'),w=makeWorld(c);
 assert.equal(w.height(-117,175),11.25,'a physical shelf, not a smooth rounded hill');
 assert.equal(w.height(-117,176),11.25);
 assert(w.height(-117,145)<w.height(-117,175)-2);
 for(let z=140;z<=265;z+=5)assert.equal(adventureHeight(c,-65,z,0),w.height(-65,z),'benches do not spill into the protected crest line');
});
test('overlapping dune ridges keep mission and bypass corridors unchanged',()=>{
 const c=COURSES.find(c=>c.id==='sand'),w=makeWorld(c);
 assert.equal(DUNE_RIDGES.length,5);assert(offRouteDunes(-180,135,w.routeDistance(-180,135))>3);
 assert(offRouteDunes(-235,215,w.routeDistance(-235,215))>5);
 assert(offRouteDunes(-145,385,w.routeDistance(-145,385))>4);
 for(let x=-300;x<=300;x+=10)for(let z=50;z<=500;z+=10){
  const d=w.routeDistance(x,z);if(d<=9)assert.equal(offRouteDunes(x,z,d),0);
 }
 for(const p of DUNE_RIDGES){assert.equal(offRouteDunes(p.x,p.z,0),0);assert.equal(offRouteDunes(p.x,p.z,9),0);assert(offRouteDunes(p.x,p.z,9.001)<1e-6,'protected edge joins continuously');}
});
