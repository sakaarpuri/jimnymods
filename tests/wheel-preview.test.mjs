import test from 'node:test';
import assert from 'node:assert/strict';
import {automaticWheelPreview,Spotter} from '../src/trail/spotter.js';
import {wheelPreviewPose} from '../src/trail/scene.js';

const state=()=>({speed:.1,throttle:.5,parking:false,handbrake:false,gear:'D',range:'4L',yaw:0,steer:0,wheelContacts:[true,true,true,true],wheelHeights:[1,2,3,2],wheelCenters:[{x:-.7,y:3,z:1.3},{x:.7,y:3.2,z:1.3},{x:-.7,y:2.9,z:-1.3},{x:.7,y:3.1,z:-1.3}]});
test('automatic live preview requires persistent slow progress under power and no brake/neutral/park',()=>{
 for(const patch of [{speed:.8},{speed:-.8},{parking:true},{handbrake:true},{gear:'P'},{gear:'N'},{throttle:.1},{finished:true}])assert.equal(automaticWheelPreview({...state(),...patch},{wheel:1},3),null);
 assert.equal(automaticWheelPreview(state(),{wheel:1},2.5),null);assert.equal(automaticWheelPreview(state(),{wheel:1},2.6),1);
});
test('airborne contact takes priority; otherwise inspect supplied wheel or lowest driven contact',()=>{
 assert.equal(automaticWheelPreview({...state(),wheelContacts:[true,true,false,true]},{wheel:1},3),2);
 assert.equal(automaticWheelPreview(state(),null,3),0);
 assert.equal(automaticWheelPreview({...state(),range:'2H'},{wheel:0},3),3);
 assert.equal(automaticWheelPreview({...state(),range:'2H'},{wheel:2},3),2);
});
test('holding the handbrake cannot accumulate a false stalled-driving trigger',()=>{
 const spotter=new Spotter(),s={...state(),handbrake:true,elapsed:4};
 for(let i=0;i<240;i++)spotter.update(s,{throttle:1},{},1/60);
 assert.equal(spotter.lowProgress,0);
});
test('after an impact the close-up faces travel direction, unless a wheel is airborne',()=>{
 assert.equal(automaticWheelPreview({...state(),range:'2H'},{id:'contact'},3),0);
 assert.equal(automaticWheelPreview({...state(),gear:'R'},{id:'contact'},3),2);
 assert.equal(automaticWheelPreview({...state(),wheelContacts:[true,false,true,true]},{id:'contact'},3),1);
});
test('wheel camera follows current suspension centre and steering without modifying vehicle/main camera state',()=>{
 const s=state(),before=JSON.stringify(s);
 for(let i=0;i<4;i++){
  const p=wheelPreviewPose(s,i);assert.equal(p.target.x,s.wheelCenters[i].x);assert.equal(p.target.z,s.wheelCenters[i].z);assert.equal(p.target.y,s.wheelCenters[i].y+.04);
  assert((p.position.x-p.target.x)*(i%2?1:-1)>1);
 }
 const p=wheelPreviewPose({...s,yaw:Math.PI/2},0);assert(Math.abs(p.position.z-p.target.z-1.45)<1e-9);
 const visual=wheelPreviewPose(s,0,{x:9,y:8,z:7});assert.deepEqual(visual.target.toArray(),[9,8.04,7]);
 assert.equal(wheelPreviewPose(s,9),null);assert.equal(wheelPreviewPose({},0),null);assert.equal(JSON.stringify(s),before);
});
