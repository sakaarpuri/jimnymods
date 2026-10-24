import test from 'node:test';
import assert from 'node:assert/strict';
import {Group,Vector3,PerspectiveCamera} from 'three';
import {cockpitPose,bonnetPose,DRIVING_CAMERAS,normalizeDrivingCamera} from '../src/trail/cockpit-camera.js';

test('composed cockpit shows the steering rim, both grips and forward road together',()=>{
 for(const body of ['5door','3door']){
  const offset=body==='3door'?-.17:0,root=new Group(),eye=new Vector3(-.37,1.52,.08+offset);
  const {position,target}=cockpitPose(root,eye,body),camera=new PerspectiveCamera(65,1440/690,.025,1500);
  camera.position.copy(position);camera.lookAt(target);camera.updateMatrixWorld(true);
  for(const p of [new Vector3(-.38,1.33,.26+offset),new Vector3(-.38,.99,.26+offset),new Vector3(-.54,1.16,.26+offset),new Vector3(-.22,1.16,.26+offset),new Vector3(0,0,20)]){
   const projected=p.project(camera);assert(Math.abs(projected.x)<1&&Math.abs(projected.y)<1&&Math.abs(projected.z)<1,`${body} key cockpit point clipped: ${projected.toArray()}`);
  }
 }
});
test('cockpit pose follows body yaw and slope while look-down preserves the anatomical eye',()=>{
 const root=new Group();root.position.set(9,2,8);root.rotation.set(.12,.8,-.07);root.updateMatrixWorld(true);
 const eye=root.localToWorld(new Vector3(-.37,1.52,.08));
 const pose=cockpitPose(root,eye);
 const local=root.worldToLocal(pose.position.clone());assert(local.distanceTo(new Vector3(-.27,1.42,-.15))<1e-8);
 const down=cockpitPose(root,eye,'5door','dashboard');assert(down.position.distanceTo(eye)<1e-8);
});

test('driving camera cycle has one cockpit, and old cabin choices normalize to it',()=>{
 assert.deepEqual(DRIVING_CAMERAS,['external','interior','bonnet','overview']);
 assert.equal(normalizeDrivingCamera('controls'),'interior');assert.equal(normalizeDrivingCamera('dashboard'),'interior');assert.equal(normalizeDrivingCamera('invalid'),'external');
});
test('bonnet camera stays ahead of the roof in body coordinates on uphill and downhill attitudes',()=>{
 for(const pitch of [-.45,0,.45]){
  const root=new Group();root.position.set(7,4,8);root.rotation.set(pitch,.8,.15);root.updateMatrixWorld(true);
  const pose=bonnetPose(root),local=root.worldToLocal(pose.position.clone()),target=root.worldToLocal(pose.target.clone());
  assert(local.z>1.5,'camera must be beyond the windscreen/roof');assert(local.y>1.35&&local.y<1.6);assert(target.z>15);assert(Math.abs(target.x)<1e-8);
 }
});
