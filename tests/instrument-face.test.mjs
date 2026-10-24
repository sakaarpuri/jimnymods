import test from 'node:test';
import assert from 'node:assert/strict';
import {instrumentAngle,cabinPose} from '../src/trail/cabin.js';
test('instrument faces and moving needles share the same zero, half and full sweep',()=>{
  for(const t of [0,.25,.5,.75,1]){
    const pose=cabinPose({rpm:t*7000,speed:t*50});
    assert.equal(pose.tachometer,instrumentAngle(t*7,7));
    assert.equal(pose.speedometer,instrumentAngle(t*180,180));
  }
  assert.equal(instrumentAngle(-100,180),-40*Math.PI/180);
  assert.equal(instrumentAngle(250,180),220*Math.PI/180);
  assert.equal(cabinPose({speed:-25}).speedometer,cabinPose({speed:25}).speedometer);
});
