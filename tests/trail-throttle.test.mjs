import test from 'node:test';
import assert from 'node:assert/strict';
import {drivingInput} from '../src/trail/controls.js';
import {createVehicle} from '../src/trail/physics.js';
import {createRigidVehicle} from '../src/trail/rigid-vehicle.js';

async function accelerate(body,range,surface,input){
  const state=createVehicle(body);
  state.range=range;
  const vehicle=await createRigidVehicle({
    height:()=>0,surface:()=>surface,
    bounds:{minX:-20,maxX:20,minZ:-20,maxZ:160}
  },state,{terrainStep:10});
  try{
    // Settle suspension with the parking brake applied before each fresh run.
    for(let i=0;i<60;i++)vehicle.step({});
    state.gear='D';state.parking=false;
    for(let i=0;i<180;i++)vehicle.step(input);
    return {speed:state.speed,distance:state.distance,throttle:state.throttle};
  }finally{vehicle.dispose();}
}

test('keyboard and touch expose steady, gentle and full pedal positions',()=>{
  for(const key of ['ArrowUp','KeyW'])assert.equal(drivingInput(new Set([key])).throttle,.5);
  assert.equal(drivingInput(new Set(),new Set(['gas'])).throttle,.5);
  assert.equal(drivingInput(new Set(['ArrowUp','ShiftLeft'])).throttle,.22);
  assert.equal(drivingInput(new Set(),new Set(['gas','gentle'])).throttle,.22);
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
  keys.delete('KeyF');assert.equal(drivingInput(keys).throttle,.22);
  keys.delete('ShiftLeft');assert.equal(drivingInput(keys).throttle,.5);
  keys.clear();assert.equal(drivingInput(keys).throttle,0);
  const braking=drivingInput(new Set(['KeyF','Space','KeyH']));
  assert.equal(braking.brake,1);assert.equal(braking.handbrake,true);
});

test('full pedal gives noticeably stronger acceleration through the real rigid vehicle on firm and loose ground',async()=>{
  for(const body of ['5door','3door'])for(const [range,surface] of [['2H','tarmac'],['4L','loose']]){
    const steady=await accelerate(body,range,surface,drivingInput(new Set(['ArrowUp'])));
    const full=await accelerate(body,range,surface,drivingInput(new Set(['KeyF'])));
    assert(full.speed>steady.speed*1.45,`${body} ${range}: steady=${steady.speed*3.6} vs full=${full.speed*3.6} km/h after 3s`);
    assert(full.distance>steady.distance*1.4,'extra pedal must affect actual travel, not just the speed display');
    assert(steady.throttle<full.throttle);
  }
});

test('full key is exactly explicit 100% throttle, with no special boost or change to scripted driving',async()=>{
  const key=await accelerate('5door','2H','tarmac',drivingInput(new Set(['KeyF'])));
  const direct=await accelerate('5door','2H','tarmac',{throttle:1});
  assert.deepEqual(key,direct);
});
