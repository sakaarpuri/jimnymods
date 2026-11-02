import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import {applyVehicleVisualPose} from '../src/trail/vehicle-visual.js';

test('body and steered wheel share the rigid chassis tilt and centre', () => {
  const body=new T.Group(),wheel=new T.Group();
  const yaw=.7, worldRotation=new T.Quaternion().setFromEuler(new T.Euler(.3,yaw,.2,'YXZ'));
  const state={yaw,quaternion:{x:worldRotation.x,y:worldRotation.y,z:worldRotation.z,w:worldRotation.w},steer:.25};
  applyVehicleVisualPose(body,[{pivot:wheel}],state,.055);
  const heading=new T.Quaternion().setFromAxisAngle(new T.Vector3(0,1,0),yaw);
  const rendered=heading.clone().multiply(body.quaternion);
  assert.ok(rendered.angleTo(worldRotation)<1e-7,'body orientation matches physics');
  const chassisCentre=new T.Vector3(0,.72,0);
  const renderedCentre=chassisCentre.clone().applyQuaternion(body.quaternion).add(body.position);
  assert.ok(renderedCentre.distanceTo(new T.Vector3(0,.775,0))<1e-7,'body rotates around chassis centre while retaining lift');
  const expected=body.quaternion.clone().multiply(new T.Quaternion().setFromAxisAngle(new T.Vector3(0,1,0),.25));
  assert.ok(wheel.quaternion.angleTo(expected)<1e-7,'steering is applied after chassis tilt');
});

test('fallback orientation and straight rear wheels remain stable', () => {
  const body=new T.Group(),wheels=Array.from({length:4},()=>({pivot:new T.Group()}));
  applyVehicleVisualPose(body,wheels,{yaw:0,pitch:.2,roll:-.1,steer:.3},0);
  assert.ok(wheels[2].pivot.quaternion.angleTo(body.quaternion)<1e-7);
  assert.ok(wheels[0].pivot.quaternion.angleTo(body.quaternion)>.2);
});
