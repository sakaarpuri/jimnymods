import test from 'node:test';
import assert from 'node:assert/strict';
import {COURSES,makeWorld,makeGates,checkpointStatus} from '../src/trail/courses.js';
import {PRO_MISSIONS,proTrialPlan,proSupportHeight} from '../src/trail/pro-trials.js';
import {createVehicle} from '../src/trail/physics.js';
import {createRigidVehicle} from '../src/trail/rigid-vehicle.js';
const course=COURSES.find(c=>c.id==='urban');
test('four distinct optional trials fit the existing free-roam bounds',()=>{
 const world=makeWorld(course,'expert');assert.equal(PRO_MISSIONS.length,4);assert.equal(new Set(PRO_MISSIONS.map(m=>m.skill)).size,4);assert.equal(world.areaMultiplier,3);
 for(const m of PRO_MISSIONS){assert(world.contains(m.spawn.x,m.spawn.z,5));assert.equal(world.surface(m.spawn.x,m.spawn.z),'loose');for(const p of m.routes.expert)assert(world.contains(p.x,p.z,5));}
 assert.equal(makeWorld(COURSES[0]).proTrials.length,0);
});
test('precision gates retain explicit 4H, selector and speed requirements',()=>{
 const gates=makeGates(course,'expert','pro-surge'),g=gates[1];assert.equal(g.range,'4H');
 const s={x:g.x,z:g.z,y:g.elevation,yaw:0,gear:'2',range:'4H',speed:18/3.6,wheelContacts:[true,true,true,true]};
 assert(checkpointStatus(s,g,'expert').reached);
 for(const patch of [{speed:8/3.6},{speed:30/3.6},{gear:'L'},{range:'4L'},{wheelContacts:[false,false,false,false]}])assert(!checkpointStatus({...s,...patch},g,'expert').reached);
 const top=gates[3],stopped={...s,x:top.x,z:top.z,y:7,speed:0};assert(checkpointStatus(stopped,top,'expert').reached);
 for(const patch of [{y:0},{speed:.3},{wheelContacts:[false,false,false,false]}])assert(!checkpointStatus({...stopped,...patch},top,'expert').reached);
});
test('high pocket needs reverse, alignment, contact and a complete stop',()=>{
 const g=makeGates(course,'expert','pro-high-pocket')[3],s={x:g.x,z:g.z,y:5,yaw:g.heading,gear:'R',range:'4L',speed:0,wheelContacts:[true,true,true,true]};assert(checkpointStatus(s,g,'expert').reached);
 for(const patch of [{gear:'L'},{yaw:1.2},{speed:.1},{y:0}])assert(!checkpointStatus({...s,...patch},g,'expert').reached);
});
test('render/collider slab transform preserves authored top surfaces',()=>{
 for(const o of proTrialPlan().filter(o=>o.deck)){
  const q=o.quaternion,v={x:0,y:o.height/2,z:0};
  const tx=2*(q.y*v.z-q.z*v.y),ty=2*(q.z*v.x-q.x*v.z),tz=2*(q.x*v.y-q.y*v.x);
  const top={x:o.x+v.x+q.w*tx+q.y*tz-q.z*ty,y:o.y+o.height/2+v.y+q.w*ty+q.z*tx-q.x*tz,z:o.z+v.z+q.w*tz+q.x*ty-q.y*tx};
  assert(Math.abs(top.x-(o.a[0]+o.b[0])/2)<1e-6);assert(Math.abs(top.y-(o.a[1]+o.b[1])/2)<1e-6);assert(Math.abs(top.z-(o.a[2]+o.b[2])/2)<1e-6);
 }
 assert.equal(proSupportHeight(proTrialPlan(),140,-73),5);assert.equal(proSupportHeight(proTrialPlan(),150,-73),null);
});
test('real physics supports elevated decks and permits a genuine fall off an edge',async()=>{
 const world=makeWorld(course,'expert'),s=createVehicle('5door');Object.assign(s,{x:240,z:-60,yaw:Math.PI/2,range:'4H',gear:'2',parking:false});const engine=await createRigidVehicle(world,s);
 try{for(let i=0;i<120;i++)engine.step({brake:1});assert(Math.abs(s.y-5)<.3);let airborne=false;for(let i=0;i<420;i++){engine.step({throttle:1});if(s.wheelContacts.every(c=>!c)&&s.y>1)airborne=true;}assert(airborne,'unrailed deck must allow loss of contact');assert(s.y<2,'car must fall, not remain on invisible support');}finally{engine.dispose();}
});
