import test from 'node:test';
import assert from 'node:assert/strict';
import {gauntletEquipment,gauntletRecovery,GORGE_GAUNTLET,GORGE_PATCH,gorgeDepth,gorgeHazard} from '../src/trail/gorge-gauntlet.js';
import {COURSES,makeWorld,makeGates,checkpointStatus} from '../src/trail/courses.js';
import {PRO_MISSIONS,proTrialPlan} from '../src/trail/pro-trials.js';
import {createVehicle} from '../src/trail/physics.js';
import {createRigidVehicle} from '../src/trail/rigid-vehicle.js';
const urban=COURSES.find(c=>c.id==='urban');
test('equipment checks include canonical and sourced snorkels without inventing capability',()=>{
 assert.deepEqual(gauntletEquipment().missing,['All-terrain or mud-terrain tyres','Raised intake / snorkel']);
 assert(gauntletEquipment({parts:['snorkel','tires']}).ready);
 assert(!gauntletEquipment({parts:['snorkel','tires'],design:{tyreType:'highway'}}).ready);
 assert(gauntletEquipment({parts:['market_intake'],design:{tyreType:'mudterrain'}},[{id:'market_intake',visual:'snorkel'}]).ready);
 assert(!gauntletEquipment({parts:['research_snorkel','tires']},[{id:'research_snorkel',visual:null}]).ready);
});
test('chain retains all physical challenge gates plus navigable links and explicit control changes',()=>{
 const world=makeWorld(urban),gates=makeGates(urban,'expert',GORGE_GAUNTLET.id);
 assert.equal(gates.length,51);assert.equal(new Set(gates.map(g=>g.chapter)).size,4);
 for(let chapter=0;chapter<4;chapter++){
  const original=PRO_MISSIONS[chapter].routes.expert,actual=gates.filter(g=>g.chapter===chapter&&!g.link);assert.equal(actual.length,original.length);
  original.forEach((p,i)=>{for(const key of ['x','z','elevation','range','gear','stop','reverse'])assert.equal(actual[i][key],key==='stop'?!!p[key]:p[key]);});
  const restart=gauntletRecovery(gates,gates.findIndex(g=>g.chapter===chapter));assert.equal(restart.chapter,chapter);assert.equal(gates[restart.gate].link,undefined);assert.deepEqual(restart.spawn,PRO_MISSIONS[chapter].spawn);
 }
 for(const g of gates){assert(world.contains(g.x,g.z,5));if(g.link)assert.equal(world.height(g.x,g.z),0);}
 const ramp=gates.find(g=>g.momentumClimb);assert.equal(ramp.range,'4H');assert.equal(ramp.gear,'2');
});
test('gorge is a shared deep bed, not a painted river; preserves ramp approaches and ground bypass',()=>{
 const world=makeWorld(urban,'expert');assert.deepEqual(world.finePatches,[GORGE_PATCH]);assert.equal(world.height(140,-50),-4.4);assert.equal(world.supportHeight(144,-49),5);
 for(const [x,z]of [[140,-98],[140,25],[120,-50],[177,-50]])assert.equal(world.height(x,z),0);
 assert(gorgeHazard({x:140,z:-50,y:-1}));assert.equal(gorgeHazard({x:140,z:-50,y:5}),'');assert.equal(gorgeHazard({x:120,z:-50,y:-1}),'');
 for(const o of world.proTrials.filter(o=>o.id.startsWith('pro-pier-')&&gorgeDepth(o.x,o.z)>0))assert(o.y<world.height(o.x,o.z));
 const unchanged=proTrialPlan().filter(o=>o.deck);assert.deepEqual(world.proTrials.filter(o=>o.deck),unchanged,'gorge must not change tested deck geometry');
 assert(world.gorgeSolids.length>=7);for(const o of world.gorgeSolids){assert(world.sceneryObstacles.includes(o));assert.equal(o.type,'mesh');assert(o.vertices.every(Number.isFinite));assert(o.indices.every(i=>i>=0&&i<o.vertices.length/3));for(let i=0;i<o.vertices.length;i+=3){const x=o.x+o.vertices[i];assert(x>150&&x<165,'fractured wall stays clear of bridge and transfer lane');}}
});
test('a genuine elevated fall reaches the forbidden pool; no below-deck checkpoint loophole',async()=>{
 // Start aligned on the deck. Spawning sideways straddles it and beaches the
 // chassis before the driver has any opportunity to steer off an edge.
 const world=makeWorld(urban,'expert'),s=createVehicle('5door');Object.assign(s,{x:144,z:-51,yaw:0,range:'4H',gear:'2',parking:false});
 const engine=await createRigidVehicle(world,s);try{
  for(let i=0;i<150;i++)engine.step({brake:1});assert(Math.abs(s.y-5)<.3);
  let airborne=false,wet=false;for(let i=0;i<420;i++){engine.step({throttle:.8,steer:1});airborne||=s.wheelContacts.every(c=>!c)&&s.y>1;if(world.recoveryReason(s)){wet=true;break;}}
  assert(airborne);assert(wet,'physical fall enters the no-driving pool, not flat dry ground');
  const g=makeGates(urban,'expert','pro-skyweave')[3];assert(!checkpointStatus({...s,x:g.x,z:g.z,y:-1},g,'expert').reached);
 }finally{engine.dispose();}
});
