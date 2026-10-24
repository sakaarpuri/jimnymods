import test from 'node:test';
import assert from 'node:assert/strict';
import {COURSES,makeWorld,getMissions,makeGates} from '../src/trail/courses.js';
import {MOUNTAIN_ROADS,createMountainExtension} from '../src/trail/himachal-mountain.js';

const course=COURSES.find(c=>c.id==='mountain');
test('bridge continuation provides a substantial gravel ascent and connected asphalt road inside existing bounds',()=>{
 const world=makeWorld(course,'driver'),extension=world.mountainExtension;
 assert(extension.offroadLength>800&&extension.offroadLength<1000);assert(extension.asphaltLength>550);
 assert.deepEqual(MOUNTAIN_ROADS[0].points[0],{x:-6,z:130,s:0});
 for(const road of extension.roads)for(const p of road.points){assert(world.contains(p.x,p.z,20));assert(p.z<490,'old guarded river stays separate');assert(Number.isFinite(world.height(p.x,p.z)));}
 const a=extension.roads[0].points.at(-1),b=extension.roads[1].points[0];assert.equal(a.x,b.x);assert.equal(a.z,b.z);assert.equal(a.height,b.height);
 const missions=getMissions(course);assert.deepEqual(missions.slice(0,2).map(m=>m.id),['rock-river-technical','rock-river-bypass']);assert.equal(makeGates(course,'driver','rock-river-technical').length,14);
 assert.deepEqual(missions.slice(-2).map(m=>m.id),['mountain-ascent','mountain-tarmac']);
});
test('shared road cuts have actual graded physical profiles and broad vehicle-width benches',()=>{
 const world=makeWorld(course,'driver'),extension=world.mountainExtension;
 for(const road of extension.roads){let maxGrade=0;
  for(let i=1;i<road.points.length;i++){
   const a=road.points[i-1],b=road.points[i],d=Math.hypot(b.x-a.x,b.z-a.z);maxGrade=Math.max(maxGrade,Math.abs(world.height(b.x,b.z)-world.height(a.x,a.z))/d);
   if(b.x>-185)continue;
   assert(Math.abs(world.height(b.x,b.z)-b.height)<.03,'render and collision height follow the authored centre profile');
   const dx=(b.z-a.z)/d,dz=-(b.x-a.x)/d;
   for(const side of [-1,1])assert(Math.abs(world.height(b.x+dx*side*.85,b.z+dz*side*.85)-b.height)<.13,'both tyre tracks remain on a bench, not a sideways cliff');
  }
  assert(maxGrade<(road.kind==='gravel'?.24:.06),`${road.kind} grade ${maxGrade}`);
 }
 assert(world.height(-310,315)>25,'the hillside remains actual collision terrain');
});
test('traverse shoulders rise on one side and fall on the other instead of forming symmetric trenches',()=>{
 const world=makeWorld(course),extension=world.mountainExtension;
 for(const road of extension.roads)for(const i of road.kind==='gravel'?[100,135,170,205,240]:[65,100,135,170]){
  const p=road.points[i],a=road.points[i-1],d=Math.hypot(p.x-a.x,p.z-a.z),nx=(p.z-a.z)/d,nz=-(p.x-a.x)/d;
  const sides=[-20,20].map(s=>world.height(p.x+nx*s,p.z+nz*s)-p.height);
  assert(Math.min(...sides)<-1,`${road.kind} ${i} needs a valley shoulder: ${sides}`);
  assert(Math.max(...sides)>1,`${road.kind} ${i} needs an uphill bank: ${sides}`);
  assert(Math.max(...sides.map(Math.abs))<12,'no towering 70-metre walls adjacent to the bench');
 }
});
test('terrain remains continuous across the road-end normal and spatial index boundaries',()=>{
 const world=makeWorld(course);
 // The asphalt end has a long tangential offset. A sign(distance) formula
 // would switch its full bank height abruptly when this normal is crossed.
 for(let z=136;z<141;z+=.25)assert(Math.abs(world.height(-342,z+.25)-world.height(-342,z))<.5);
 // Between the upper hairpin arms, nearest-segment changes must not create a
 // 10 m discontinuity between two valid but differently elevated roads.
 for(let z=434;z<440;z+=.25)assert(Math.abs(world.height(-310,z+.25)-world.height(-310,z))<.5);
 for(const x of [-480,-448,-416,-384,-352,-320,-288])for(let z=100;z<460;z+=20){
  assert(Math.abs(world.height(x+.01,z)-world.height(x-.01,z))<.1,'index cell boundary is not a terrain seam');
 }
});
test('surface classification uses 2H asphalt only after a gravel transition turnout',()=>{
 const world=makeWorld(course),road=world.mountainExtension.roads[1];
 assert.equal(world.surface(road.points[0].x,road.points[0].z),'loose');
 for(const p of road.points.filter(p=>p.s>20)){assert.equal(world.surface(p.x,p.z),'tarmac');const n=world.mountainExtension.nearestRoad(p.x,p.z);assert.equal(n.kind,'asphalt');assert(n.distance<1e-8);}
 const gravel=world.mountainExtension.roads[0];for(const p of gravel.points.filter(p=>p.s<gravel.length-20))assert.equal(world.surface(p.x,p.z),'loose');
});
test('extension preserves protected routes and distant river heights, with no solid objects across its driving lane',()=>{
 const base=(x,z)=>7+.001*x+.004*z,extension=createMountainExtension(base,()=>0);
 for(const[x,z]of [[-310,315],[-240,420],[-55,105],[-190,550],[22,130],[65,151]])assert.equal(extension.height(x,z),base(x,z));
 const world=makeWorld(course);for(const o of [...world.obstacles,...world.sceneryObstacles]){
  const n=world.mountainExtension.nearestRoad(o.x,o.z);if(!n)continue;
  const radius=o.radius||Math.max(o.width||0,o.depth||0)/2;
  assert(n.distance>radius+2.2,`${o.id} obstructs new mountain lane`);
 }
 for(const id of ['school','sand','urban'])assert.equal(makeWorld(COURSES.find(c=>c.id===id)).mountainExtension,null);
});
