import test from 'node:test';
import assert from 'node:assert/strict';
import {createVehicle,shiftRange,shiftGear,toggleHdc,stepVehicle,contacts} from '../src/trail/physics.js';
import {COURSES,makeWorld,makeGates,gateReached,resultFor,centerAt} from '../src/trail/courses.js';
const flat={height:()=>0,surface:()=> 'loose'};
const run=(s,input,seconds,world=flat)=>{for(let i=0;i<seconds*60;i++)stepVehicle(s,input,world);return s;};
test('low range must pass through 4H, stop and use Neutral',()=>{
 const s=createVehicle();assert.match(shiftRange(s,'4L'),/4H first/);assert.equal(shiftRange(s,'4H'),'');s.gear='D';assert.match(shiftRange(s,'4L'),/Neutral/);s.gear='N';s.speed=.1;assert.match(shiftRange(s,'4L'),/Stop/);s.speed=0;assert.equal(shiftRange(s,'4L'),'');assert.match(shiftRange(s,'2H'),/4H first/);assert.equal(shiftRange(s,'4H'),'');assert.equal(shiftRange(s,'2H'),'');
});
test('4WD blocked on dry tarmac, with turned wheels, or wheelspin',()=>{
 const s=createVehicle();assert.match(shiftRange(s,'4H','tarmac'),/tarmac/);s.steer=.1;assert.match(shiftRange(s,'4H'),/Straighten/);s.steer=0;s.slip=.4;assert.match(shiftRange(s,'4H'),/spinning/);assert.equal(s.range,'2H');
});
test('reverse and Park cannot be selected while moving forwards',()=>{const s=createVehicle();s.speed=1;assert.match(shiftGear(s,'R'),/Stop/);assert.match(shiftGear(s,'P'),/Stop/);assert.equal(shiftGear(s,'N'),'');s.speed=0;assert.equal(shiftGear(s,'R'),'');});
test('HDC requires 4WD, a driving gear and less than 25 km/h',()=>{const s=createVehicle();assert.match(toggleHdc(s),/4H/);s.range='4L';assert.match(toggleHdc(s),/gear/);s.gear='L';s.speed=8;assert.match(toggleHdc(s),/25/);s.speed=0;assert.equal(toggleHdc(s),'');assert.equal(s.hdc,true);assert.equal(toggleHdc(s),'');assert.equal(s.hdc,false);});
test('parking brake holds; Neutral does not transmit engine torque',()=>{const s=createVehicle();s.gear='D';run(s,{throttle:1},5);assert.equal(s.z,0);s.parking=false;s.gear='N';run(s,{throttle:1},5);assert.equal(s.z,0);});
test('braking stops without accidentally reversing',()=>{const s=createVehicle();s.parking=false;s.gear='D';run(s,{throttle:.4},4);assert(s.z>1);run(s,{brake:1},5);assert.equal(s.speed,0);assert(s.z>1);});
test('low range is slower at the same first-gear input',()=>{const h=createVehicle(),l=createVehicle();for(const s of [h,l]){s.parking=false;s.gear='L';}h.range='4H';l.range='4L';run(h,{throttle:.45},15);run(l,{throttle:.45},15);assert(l.speed<h.speed);});
test('3-door turns more tightly with identical controls',()=>{const a=createVehicle('3door'),b=createVehicle('5door');for(const s of [a,b]){s.gear='D';s.parking=false;run(s,{throttle:.25,steer:.5},4);}assert(a.yaw>b.yaw);});
test('fixed-step physics stays finite under extended varied inputs',()=>{for(const c of COURSES){const w=makeWorld(c),s=createVehicle();s.parking=false;s.gear='D';for(let i=0;i<12000;i++)stepVehicle(s,{throttle:(i%200)/250,steer:Math.sin(i/200),brake:i%300>260?1:0},w);for(const key of ['x','z','yaw','speed','pitch','roll','rpm'])assert(Number.isFinite(s[key]),key);}});
test('hill descent acts only with accelerator released and cannot add grip',()=>{const s=createVehicle();s.range='4L';s.gear='L';s.parking=false;s.hdc=true;s.speed=2;s.vz=2;const slope={height:(x,z)=>-z*.17,surface:()=> 'loose'};run(s,{},8,slope);assert(s.hdcActive);assert(Math.abs(s.speed)*3.6<7);run(s,{throttle:.4},1,slope);assert.equal(s.hdcActive,false);});
test('courses, gate spacing and wheel contacts are coherent',()=>{for(const c of COURSES){const w=makeWorld(c);for(const d of ['explorer','driver','expert']){const gates=makeGates(c,d);assert.equal(gates.at(-1).z,c.length);assert(gates.every(g=>Number.isFinite(w.height(g.x,g.z))));assert(gateReached(gates[0],gates[0]));}assert.equal(contacts(createVehicle(),w.height).length,4);}});
test('score rewards control not faster elapsed time',()=>{const a=createVehicle(),b=createVehicle();a.elapsed=120;b.elapsed=180;assert.equal(resultFor(a,COURSES[0],'driver').score,resultFor(b,COURSES[0],'driver').score);b.recoveries=2;assert.equal(resultFor(b,COURSES[0],'driver').score,84);});
test('every course can be driven through all precision gates and stopped at its finish using physics inputs',()=>{
 for(const course of COURSES){const s=createVehicle(),w=makeWorld(course),gates=makeGates(course,'expert');s.parking=false;s.gear='L';s.range=course.surface==='tarmac'?'2H':course.surface==='sand'?'4H':'4L';let gate=0,finished=false;
  for(let i=0;i<60*600;i++){
   const last=gate===gates.length-1,distance=Math.hypot(s.x-gates.at(-1).x,s.z-course.length);
   const targetZ=Math.min(s.z+5,course.length),targetX=centerAt(course,targetZ),heading=Math.atan2(targetX-s.x,targetZ-s.z),error=Math.atan2(Math.sin(heading-s.yaw),Math.cos(heading-s.yaw));
   const targetSpeed=last?Math.min(3,Math.sqrt(Math.max(0,distance-1)*2)):3,brake=last&&distance<1.6?1:s.speed>targetSpeed+.2?.4:0;
   stepVehicle(s,{steer:Math.max(-1,Math.min(1,error*2.8)),throttle:brake?0:Math.max(0,Math.min(.8,.28+(targetSpeed-s.speed)*.4)),brake},w);
   if(gateReached(s,gates[gate])){if(last&&Math.abs(s.speed)<.08){finished=true;break;}else if(!last)gate++;}
  }
  assert(finished,`${course.id}: stopped at ${s.x.toFixed(2)},${s.z.toFixed(2)}, gate ${gate}/${gates.length}, speed ${s.speed}`);
 }
});
