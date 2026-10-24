import test from 'node:test';
import assert from 'node:assert/strict';
import {createVehicle,shiftGear,shiftRange,stoppedForShift} from '../src/trail/physics.js';

test('parked hillside solver drift does not block selector or low range',()=>{
 for(const brake of ['parking','braking']){
  const s=createVehicle();s.parking=false;s[brake]=1;s.speed=-.03117;
  assert(stoppedForShift(s));assert.equal(shiftGear(s,'D'),'');
  assert.equal(shiftGear(s,'N'),'');assert.equal(shiftRange(s,'4H'),'');assert.equal(shiftRange(s,'4L'),'');
  assert.equal(s.speed,-.03117,'interlock never alters the simulated velocity');
 }
});
test('genuine motion still blocks reversal, Park and low range',()=>{
 for(const speed of [-.2,.2]){
  const s=createVehicle();s.speed=speed;
  assert(!stoppedForShift(s));assert(shiftGear(s,speed<0?'D':'R'));assert(shiftGear(s,'P'));
  s.range='4H';assert(shiftRange(s,'4L'));
 }
 const s=createVehicle();s.parking=false;s.speed=-.06;assert(shiftGear(s,'D'));
});
