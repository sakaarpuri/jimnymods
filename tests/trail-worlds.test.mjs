import test from 'node:test';
import assert from 'node:assert/strict';
import {COURSES,DIFFICULTIES,getMissions,makeWorld,makeGates,checkpointStatus,gateHeading} from '../src/trail/courses.js';
import {createVehicle} from '../src/trail/physics.js';
import {createRigidVehicle} from '../src/trail/rigid-vehicle.js';
import {drivingInput,shortcutAction,isTypingTarget} from '../src/trail/controls.js';
import {MOUNTAIN_STEPS} from '../src/trail/adventure-terrain.js';
import {sectionTerraceHeight} from '../src/trail/himachal-terraces.js';

const flat=(obstacles=[])=>({height:()=>0,surface:()=> 'loose',bounds:{minX:-70,maxX:70,minZ:-70,maxZ:70},obstacles});
const ticks=(engine,input,n)=>{for(let i=0;i<n;i++)engine.step(input);};

test('three physical worlds retain existing expeditions and add four optional pro trials without shrinking roaming area',()=>{
 const destinations=COURSES.filter(c=>c.id!=='school');
 assert.deepEqual(destinations.map(c=>c.size),[600,800,320]);
 for(const course of destinations){const world=makeWorld(course),missions=getMissions(course);assert.equal(missions.length,{mountain:8,sand:4,urban:9}[course.id]);assert.equal(world.bounds.maxX-world.bounds.minX,world.size);assert(Math.abs((world.bounds.maxX-world.bounds.minX)*(world.bounds.maxZ-world.bounds.minZ)/(course.size**2)-3)<1e-12);assert(world.contains(90,20),'world is not a narrow route corridor');
  for(const mission of missions)for(const difficulty of Object.keys(DIFFICULTIES)){const gates=makeGates(course,difficulty,mission.id);assert(gates.length>=4);assert(gates.every(g=>world.contains(g.x,g.z)));assert(gates.at(-1).stop);assert(gates.every(g=>Number.isFinite(world.height(g.x,g.z))));}
 }
 assert.equal(new Set(destinations.flatMap(getMissions).map(m=>m.id)).size,21);
 assert.deepEqual(getMissions(destinations.find(c=>c.id==='urban')).filter(m=>m.expertTrial).map(m=>m.id),['pro-skyweave','pro-staircase','pro-surge','pro-high-pocket','pro-gorge-gauntlet']);
 assert.deepEqual(getMissions(destinations[0]).slice(0,2).map(m=>m.id),['rock-river-technical','rock-river-bypass']);
});
test('difficulty changes actual routes and terrain, not only checkpoint radius',()=>{
 for(const course of COURSES.filter(c=>c.id!=='school')){const missions=getMissions(course);assert(missions.filter(m=>JSON.stringify(m.routes.learn)!==JSON.stringify(m.routes.expert)).length>=3);}
 const urban=COURSES.find(c=>c.id==='urban');assert(makeWorld(urban,'expert').height(-60.7,87)>makeWorld(urban,'explorer').height(-60.7,87)*1.5);
 const mountain=COURSES.find(c=>c.id==='mountain'),learn=makeWorld(mountain,'explorer'),expert=makeWorld(mountain,'expert');
 for(const [lane,active,inactive,scale]of [[60,learn,expert,.72],[70,expert,learn,1.18]]){
  const p=MOUNTAIN_STEPS.find(p=>p.lane===lane),base=w=>w.height(p.x,p.z)-sectionTerraceHeight(p.x,p.z,w.activeStoneLane,w.sectionTerraceClearance(p.x,p.z));assert(Math.abs(base(active)-base(inactive)-p.height*scale)<1e-9,'only the selected lane has steps, at its genuine difficulty height, independently of the off-route rock islands');
 }
});
test('terrain and surfaces distinguish urban ramps, mountain elevation, soft sand and firm shoulders',()=>{
 const mountain=makeWorld(COURSES[1]),sand=makeWorld(COURSES[2]),urban=makeWorld(COURSES[3]);
 assert(mountain.height(35,250)>25);assert.equal(urban.height(0,120),0);assert(urban.height(-65.7,87)>.1);
 assert.equal(sand.surface(65,170),'soft-sand');assert.equal(sand.surface(120,170),'loose');assert.equal(urban.surface(-65,90),'loose');assert.equal(urban.surface(100,90),'wet-tarmac');assert.equal(urban.surface(0,20),'tarmac');
});
test('checkpoint criteria enforce stop, reverse and range rather than proximity alone',()=>{
 const s=createVehicle(),g={x:0,z:0,radius:3,stop:true,reverse:true,range:'4L'};
 assert.match(checkpointStatus(s,g).reason,/4L/);s.range='4L';assert.match(checkpointStatus(s,g).reason,/Reverse/);s.gear='R';s.speed=1;assert.match(checkpointStatus(s,g).reason,/Stop/);s.speed=0;assert(checkpointStatus(s,g).reached);s.x=5;assert(!checkpointStatus(s,g).reached);
});
test('checkpoint orientation follows authored route segments including lateral and reverse legs',()=>{
 const gates=[{x:10,z:0},{x:10,z:10},{x:10,z:5,reverse:true}];assert.equal(gateHeading(gates,0),Math.PI/2);assert.equal(gateHeading(gates,1),0);assert.equal(gateHeading(gates,2),Math.PI);
});
test('technical gates require whole-car wheel placement and low range, without narrowing navigation',()=>{
 for(const [id,mission] of [['urban','ramps'],['school','lesson-steps'],['mountain','cross-axle']]){
  const course=COURSES.find(c=>c.id===id);let previous=Infinity;
  for(const difficulty of ['explorer','driver','expert']){
   const gates=makeGates(course,difficulty,mission),precision=gates.filter(g=>g.precision);assert(precision.length>=2);
   assert(precision[0].radius<previous);previous=precision[0].radius;
   for(const g of precision){const s={x:g.x,z:g.z,speed:1,range:'4L',gear:'L'};assert(checkpointStatus(s,g,difficulty).reached);assert(!checkpointStatus({...s,x:g.x+2.1},g,difficulty).reached,'beside-ramp shortcut cannot clear');assert(!checkpointStatus({...s,range:'2H'},g,difficulty).reached);assert.equal(gateHeading(gates,g.index),0,'posts align with the ramp lane');assert(g.radius>.82,'vehicle fits between physical posts');}
   assert(gates[0].radius>2.8,'navigation remains generous');
  }
 }
});
test('F is full throttle, H is held rear brake, and shortcuts map to guarded state changes',()=>{
 assert.equal(drivingInput(new Set(['KeyF'])).throttle,1);assert.equal(drivingInput(new Set(['KeyF','ShiftLeft'])).throttle,1);assert(drivingInput(new Set(['KeyH'])).handbrake);assert.equal(shortcutAction('KeyE',{gear:'N'}).value,'D');assert.equal(shortcutAction('KeyQ',{gear:'N'}).value,'R');assert.equal(shortcutAction('Digit3').value,'4L');assert(isTypingTarget({tagName:'INPUT'}));assert(!isTypingTarget({tagName:'BUTTON'}));
});
test('actual beside-ramp drive is easier physically but no longer earns technical checkpoints',async()=>{
 const world=makeWorld(COURSES.find(c=>c.id==='urban'),'expert'),s=createVehicle('5door');s.x=-67.9;s.z=80;s.parking=false;s.gear='L';s.range='4L';
 const engine=await createRigidVehicle(world,s),gates=makeGates(world.course,'expert','ramps').filter(g=>g.precision);let cleared=false,maxRoll=0;
 try{engine.reset(s);for(let i=0;i<1500&&s.z<115;i++){engine.step({throttle:s.speed<2?.3:0,brake:s.speed>2.3?1:0});maxRoll=Math.max(maxRoll,Math.abs(s.roll));cleared ||= gates.some(g=>checkpointStatus(s,g,'expert').reached);}
  assert(s.z>114,'side path stays available for free exploration');assert(maxRoll<.04,'this is a physically much easier bypass');assert(!cleared,'the easy side path must not award a wheel-placement mission');
 }finally{engine.dispose();}
});
test('rigid chassis rests on four suspended contacts, drives forward, steers left and brakes',async()=>{
 const s=createVehicle(),engine=await createRigidVehicle(flat(),s);try{ticks(engine,{},120);assert.equal(s.physics,'rigid-body');assert(s.wheelContacts.every(Boolean));assert(s.suspension.every(n=>n>.1&&n<.4));assert(Math.abs(s.y)<.08);s.gear='D';s.parking=false;ticks(engine,{throttle:.6,steer:.35},180);assert(s.x>1);assert(s.z>1);assert(s.yaw>0);assert(s.speed>1);ticks(engine,{brake:1},180);assert(Math.abs(s.speed)<.03);}finally{engine.dispose();}
});
test('rigid-body collisions block the chassis and do not teleport it to a route',async()=>{
 const obstacle={id:'test-wall',type:'box',x:0,z:12,y:0,width:12,depth:1,height:2,yaw:0},s=createVehicle(),engine=await createRigidVehicle(flat([obstacle]),s);try{s.gear='D';s.parking=false;ticks(engine,{throttle:1},600);assert(s.z<11,`stopped before wall at ${s.z}`);assert(s.z>7);assert(Math.abs(s.x)<3);s.x=45;s.z=0;s.yaw=0;engine.reset(s);ticks(engine,{throttle:.3},120);assert(s.x>40,'off-route exploration remains in place');}finally{engine.dispose();}
});
test('rear handbrake retards motion, reverse uses negative speed, Neutral transmits no torque',async()=>{
 const a=createVehicle(),b=createVehicle(),c=createVehicle();const engines=await Promise.all([a,b,c].map(s=>createRigidVehicle(flat(),s)));try{a.gear=b.gear='D';a.parking=b.parking=c.parking=false;ticks(engines[0],{throttle:.6},180);ticks(engines[1],{throttle:.6},180);ticks(engines[0],{handbrake:true},90);ticks(engines[1],{},90);assert(Math.abs(a.speed)<Math.abs(b.speed));ticks(engines[2],{throttle:1},120);assert(Math.abs(c.z)<.01);c.gear='R';ticks(engines[2],{throttle:.35},180);assert(c.speed<-.1);assert(c.z<-.5);}finally{engines.forEach(e=>e.dispose());}
});
test('heightfield coordinates match visual terrain and suspension responds independently',async()=>{
 const w={...flat(),height:(x,z)=>.04*x+.06*z},s=createVehicle();s.x=20;s.z=20;const engine=await createRigidVehicle(w,s);try{ticks(engine,{},180);assert(Math.abs(s.y-w.height(s.x,s.z))<.15);assert(s.wheelHeights[1]>s.wheelHeights[0]);assert(s.wheelHeights[0]>s.wheelHeights[2]);assert(Math.abs(s.pitch)>.03);}finally{engine.dispose();}
});
test('wheel centres follow the suspended chassis when all wheels leave the ground',async()=>{
 const w={...flat(),height:(x,z)=>z<12?0:-3},s=createVehicle(),engine=await createRigidVehicle(w,s,{terrainStep:.5});try{s.parking=false;s.gear='D';let airborne=false;for(let i=0;i<600;i++){engine.step({throttle:.8});if(s.z>14&&s.wheelContacts.every(v=>!v)){airborne=true;assert(s.wheelCenters.every(p=>p.y>w.height(p.x,p.z)+.4));break;}}assert(airborne,'the cliff should produce real airborne wheel contacts');}finally{engine.dispose();}
});
test('repeated recovery clears accumulated forces and does not create a spurious rollover',async()=>{
 const w={...flat(),height:(x,z)=>.06*Math.sin(x*2)*Math.sin(z*.6)},s=createVehicle(),engine=await createRigidVehicle(w,s);try{for(let run=0;run<8;run++){s.x=s.z=s.yaw=0;s.parking=false;s.gear='D';engine.reset(s);ticks(engine,{throttle:.5,steer:run%2?.3:-.3},300);assert(Math.abs(s.roll)<.4);assert(s.wheelCenters.every(p=>Number.isFinite(p.y)));}}finally{engine.dispose();}
});
test('rigid-engine HDC controls a descent in gear and releases under accelerator input',async()=>{
 const w={...flat(),height:(x,z)=>-z*.17},s=createVehicle(),engine=await createRigidVehicle(w,s);try{s.parking=false;s.gear='L';s.range='4L';s.hdc=true;ticks(engine,{},720);assert(s.hdcActive);assert(s.speed>0);assert(s.speed*3.6<7);ticks(engine,{throttle:.5},120);assert.equal(s.hdcActive,false);}finally{engine.dispose();}
});
test('low range changes rigid-engine gearing, not an artificial maximum speed switch',async()=>{
 const high=createVehicle(),low=createVehicle(),world={...flat(),bounds:{minX:-100,maxX:100,minZ:-100,maxZ:500}},engines=await Promise.all([high,low].map(s=>createRigidVehicle(world,s,{terrainStep:5})));try{high.range='4H';low.range='4L';for(const s of [high,low]){s.gear='L';s.parking=false;}for(let i=0;i<900;i++){engines[0].step({throttle:.45});engines[1].step({throttle:.45});}assert(low.rpm>high.rpm);assert(low.speed<high.speed);assert(low.z>1&&high.z>1);}finally{engines.forEach(e=>e.dispose());}
});
