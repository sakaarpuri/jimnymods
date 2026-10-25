import test from 'node:test';
import assert from 'node:assert/strict';
import {drivingInput,PEDAL} from '../src/trail/controls.js';
import {COURSES,makeGates,makeWorld,checkpointStatus} from '../src/trail/courses.js';
import {createVehicle} from '../src/trail/physics.js';
import {createRigidVehicle} from '../src/trail/rigid-vehicle.js';

async function accelerate(body,range,surface,input,ticks=180){
  const state=createVehicle(body);
  state.range=range;
  const vehicle=await createRigidVehicle({
    height:()=>0,surface:()=>surface,
    bounds:{minX:-20,maxX:20,minZ:-20,maxZ:900}
  },state,{terrainStep:10});
  try{
    // Settle suspension with the parking brake applied before each fresh run.
    for(let i=0;i<60;i++)vehicle.step({});
    state.gear='D';state.parking=false;
    for(let i=0;i<ticks;i++)vehicle.step(input);
    return {speed:state.speed,distance:state.distance,throttle:state.throttle};
  }finally{vehicle.dispose();}
}

test('keyboard and touch expose steady, gentle and full pedal positions',()=>{
  assert(PEDAL.gentle<PEDAL.normal&&PEDAL.normal>=.6&&PEDAL.normal<PEDAL.full,'normal driving is a brisk pedal with headroom left for F');
  for(const key of ['ArrowUp','KeyW'])assert.equal(drivingInput(new Set([key])).throttle,PEDAL.normal);
  assert.equal(drivingInput(new Set(),new Set(['gas'])).throttle,PEDAL.normal);
  assert.equal(drivingInput(new Set(['ArrowUp','ShiftLeft'])).throttle,PEDAL.gentle);
  assert.equal(drivingInput(new Set(),new Set(['gas','gentle'])).throttle,PEDAL.gentle);
  assert.equal(drivingInput(new Set(['KeyF'])).throttle,1);
  assert.equal(drivingInput(new Set(['ArrowUp','KeyF'])).throttle,1);
  assert.equal(drivingInput(new Set(),new Set(['full-throttle'])).throttle,1);
  assert.equal(drivingInput(new Set(['KeyF','ShiftLeft'])).throttle,1);
  assert.equal(drivingInput(new Set(),new Set(['full-throttle','gentle'])).throttle,1);
  assert.equal(drivingInput().throttle,0);
});

test('releasing full pedal restores the held steady or gentle pedal, and brakes remain active with F',()=>{
  const keys=new Set(['ArrowUp','ShiftLeft','KeyF']);
  assert.equal(drivingInput(keys).throttle,1);
  keys.delete('KeyF');assert.equal(drivingInput(keys).throttle,PEDAL.gentle);
  keys.delete('ShiftLeft');assert.equal(drivingInput(keys).throttle,PEDAL.normal);
  keys.clear();assert.equal(drivingInput(keys).throttle,0);
  const braking=drivingInput(new Set(['KeyF','Space','KeyH']));
  assert.equal(braking.brake,1);assert.equal(braking.handbrake,true);
});

test('normal pedal is brisk in 2H, and F is a clear boost on firm and loose ground',async()=>{
  for(const body of ['5door','3door'])for(const surface of ['tarmac','loose']){
    const normal=await accelerate(body,'2H',surface,drivingInput(new Set(['KeyW'])),720);
    const full=await accelerate(body,'2H',surface,drivingInput(new Set(['KeyF'])),720);
    assert(normal.speed*3.6>=60,`${body} ${surface}: normal reaches ${normal.speed*3.6} km/h after 12s, expected cruising speed`);
    assert(normal.speed*3.6<=110,'normal top speed stays sensible');
    assert(full.speed>normal.speed*1.15,`${body} ${surface}: normal=${normal.speed*3.6} vs F=${full.speed*3.6} km/h after 12s`);
    assert(full.distance>normal.distance*1.04,'extra pedal must affect actual travel, not just the speed display');
    assert(normal.throttle<full.throttle);
  }
});

test('4H and 4L are slower than 2H at the same pedal, yet pull harder from a standstill in low range',async()=>{
  const top={};
  for(const range of ['2H','4H','4L'])top[range]=await accelerate('5door',range,'loose',drivingInput(new Set(['KeyF'])),1800);
  assert(top['4H'].speed<top['2H'].speed,`4H ${top['4H'].speed*3.6} vs 2H ${top['2H'].speed*3.6} km/h`);
  assert(top['4L'].speed<top['4H'].speed*.7,`4L ${top['4L'].speed*3.6} km/h`);
  const early={};
  for(const range of ['2H','4L'])early[range]=await accelerate('5door',range,'loose',drivingInput(new Set(['KeyW'])),120);
  assert(early['4L'].speed>early['2H'].speed,'low range accelerates harder from rest');
});

test('the hill and sand lessons are still completable with the normal pedal in the right range',async()=>{
  const school=COURSES.find(c=>c.id==='school'),normal=drivingInput(new Set(['KeyW'])).throttle;
  for(const lesson of ['lesson-hill','lesson-sand']){
    const world=makeWorld(school,'explorer'),gates=makeGates(school,'explorer',lesson),state=createVehicle('5door'),spawn=world.spawn||{x:0,z:0,yaw:0};
    Object.assign(state,{x:spawn.x,z:spawn.z,yaw:spawn.yaw||0,y:world.height(spawn.x,spawn.z)});
    const vehicle=await createRigidVehicle(world,state);
    try{
      for(let i=0;i<60;i++)vehicle.step({});
      state.gear='D';state.parking=false;let gate=0;
      for(let i=0;i<60*240&&gate<gates.length;i++){
        const target=gates[gate],range=target.range;
        if(range&&state.range!==range&&Math.hypot(target.x-state.x,target.z-state.z)<25)state.range=range;
        const heading=Math.atan2(target.x-state.x,target.z-state.z),error=Math.atan2(Math.sin(heading-state.yaw),Math.cos(heading-state.yaw)),distance=Math.hypot(target.x-state.x,target.z-state.z);
        const wanted=target.stop?Math.min(5,Math.sqrt(Math.max(0,distance-1.2)*3)+.3):target.precision?1.6:state.range==='2H'?6:3.2;
        const brake=state.speed>wanted+.6||(target.stop&&distance<1.8);
        vehicle.step({steer:Math.max(-1,Math.min(1,error*2.5)),throttle:state.speed<wanted-.2&&!brake?normal:0,brake:brake?1:0});
        if(checkpointStatus(state,target,'explorer').reached)gate++;
      }
      assert.equal(gate,gates.length,`${lesson} stopped at gate ${gate}/${gates.length}`);
      assert(state.penalty<5,`${lesson} penalty ${state.penalty}`);
    }finally{vehicle.dispose();}
  }
});

test('full key is exactly explicit 100% throttle, with no special boost or change to scripted driving',async()=>{
  const key=await accelerate('5door','2H','tarmac',drivingInput(new Set(['KeyF'])));
  const direct=await accelerate('5door','2H','tarmac',{throttle:1});
  assert.deepEqual(key,direct);
});
