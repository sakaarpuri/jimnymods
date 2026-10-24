import test from 'node:test';
import assert from 'node:assert/strict';
import {drivingInput} from '../src/trail/controls.js';
import {createVehicle,stepVehicle} from '../src/trail/physics.js';
import {cabinPose,GEAR_STOPS,RANGE_STOPS,separateCabinControls} from '../src/trail/cabin.js';
import {readFile} from 'node:fs/promises';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {Box3,Group} from 'three';
const flat={height:()=>0,surface:()=> 'loose'};
test('left/right keyboard and touch steer toward the driver-relative side in both bodies',()=>{
  for(const body of ['3door','5door'])for(const [key,touch,direction] of [['ArrowLeft','left',1],['KeyA','left',1],['ArrowRight','right',-1],['KeyD','right',-1]])for(const method of ['keyboard','touch']){
    const input=method==='keyboard'?drivingInput(new Set([key,'KeyW','ShiftLeft'])):drivingInput(new Set(['ShiftLeft']),new Set([touch,'gas']));
    const s=createVehicle(body);s.gear='D';s.parking=false;for(let i=0;i<120;i++)stepVehicle(s,input,flat);
    assert(s.x*direction>0,`${body} ${method} ${key} driver-relative displacement`);assert(s.yaw*direction>0);assert(s.steer*direction>0);
  }
});
test('opposing steering inputs cancel and reversing preserves steering wheel direction',()=>{
  assert.equal(drivingInput(new Set(['ArrowLeft','KeyD'])).steer,0);
  assert.equal(drivingInput(new Set(),new Set(['left','right'])).steer,0);
  const s=createVehicle();s.gear='R';s.parking=false;const input=drivingInput(new Set(['ArrowLeft','KeyW','ShiftLeft']));for(let i=0;i<120;i++)stepVehicle(s,input,flat);
  assert(s.steer>0);assert(s.yaw<0);assert(s.speed<0);
});
test('cabin controls use accepted vehicle state, distinct gear/range stops and driver-correct wheel rotation',()=>{
  assert.equal(new Set(Object.values(GEAR_STOPS)).size,6);assert.equal(new Set(Object.values(RANGE_STOPS)).size,3);
  const s=createVehicle();s.steer=.2;const pose=cabinPose(s);assert(pose.wheel<0,'left steering turns the wheel counterclockwise when viewed by the driver');assert.equal(pose.gearZ,GEAR_STOPS.N);assert.equal(pose.rangeZ,RANGE_STOPS['2H']);assert(pose.parking<0);
  s.parking=false;s.gear='R';s.range='4L';s.hdc=true;s.hdcActive=true;const next=cabinPose(s);assert.equal(next.parking,0);assert.equal(next.gearZ,GEAR_STOPS.R);assert.equal(next.rangeZ,RANGE_STOPS['4L']);assert.equal(next.hdc,'ACTIVE');
  s.speed=10;s.rpm=3500;assert(cabinPose(s).tachometer>next.tachometer);assert(cabinPose(s).speedometer>next.speedometer);
});
test('both actual GLBs provide a separate animatable steering wheel at the correct cabin location',async()=>{
  for(const [body,file]of [['5door','lwb'],['3door','swb']]){
    const bytes=await readFile(new URL(`../assets/models/jimny-${file}-blender.glb`,import.meta.url));
    const gltf=await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'');
    const cabin=gltf.scene.getObjectByName('Cabin'),root=new Group();root.attach(cabin);
    const wheel=separateCabinControls(cabin,root,body),bounds=new Box3().setFromObject(wheel);
    assert(wheel.children.length>0);assert(bounds.max.x<-.19&&bounds.min.x>-.57);assert(bounds.max.y>1.32&&bounds.min.y<1.00);assert(Math.abs((bounds.max.z+bounds.min.z)/2-(body==='3door'?.09:.26))<.03);
    root.traverse(o=>o.geometry?.dispose());
  }
});
