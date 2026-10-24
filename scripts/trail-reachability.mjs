// Automated feasibility check using actual physics and guarded controls. Not a
// substitute for a human playthrough, difficulty judgement or visual review.
import {COURSES,getMissions,makeWorld,makeGates,checkpointStatus} from '../src/trail/courses.js';
import {createVehicle,shiftGear,shiftRange} from '../src/trail/physics.js';
import {createRigidVehicle} from '../src/trail/rigid-vehicle.js';
const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
const results=[];
const body=process.env.BODY==='3door'?'3door':'5door';
for(const course of COURSES.filter(c=>c.id!=='school'||process.env.COURSE==='school'))for(const difficulty of ['explorer','driver','expert']){
 if(process.env.COURSE&&course.id!==process.env.COURSE)continue;
 if(process.env.DIFFICULTY&&difficulty!==process.env.DIFFICULTY)continue;
 const world=makeWorld(course,difficulty);let state=createVehicle(body),engine=await createRigidVehicle(world,state);
 for(const mission of getMissions(course)){
  if(process.env.MISSION&&mission.id!==process.env.MISSION)continue;
  state=createVehicle(body);Object.assign(state,mission.spawn||world.spawn);engine.reset(state);state.parking=false;shiftGear(state,'D');
  const gates=makeGates(course,difficulty,mission.id);let index=0,stalled=0,lastProgress=0,done=false,reason='time limit',detour=null;
  for(let tick=0;tick<60*900;tick++){
   const gate=gates[index],distance=Math.hypot(gate.x-state.x,gate.z-state.z),reverse=!!gate.reverse,gear=gate.gear||(reverse?'R':'L');
   const surface=world.surface(state.x,state.z),targetRange=gate.range||mission.mode||'2H',shouldShift=surface!=='tarmac'&&surface!=='wet-tarmac'&&state.range!==targetRange;
   const directionChange=state.gear!==gear;
   let input={steer:0,throttle:0,brake:0};
   if(shouldShift||directionChange){
    input.brake=1;
    if(Math.abs(state.speed)<.025&&Math.abs(state.steer)<.035){
     if(shouldShift){shiftGear(state,'N');const next=state.range==='2H'&&targetRange==='4L'?'4H':state.range==='4L'&&targetRange==='2H'?'4H':targetRange;shiftRange(state,next,surface);}
     if(!shouldShift||state.range===targetRange)shiftGear(state,gear);
    }
   }else{
    if(detour&&Math.hypot(detour.x-state.x,detour.z-state.z)<3)detour=null;
    if(!detour&&!reverse){const dx=(gate.x-state.x)/distance,dz=(gate.z-state.z)/distance;
     for(const o of world.obstacles){if(o.type!=='rock')continue;const ox=o.x-state.x,oz=o.z-state.z,along=ox*dx+oz*dz,across=ox*dz-oz*dx;if(along>0&&along<18&&along<distance&&Math.abs(across)<o.radius+2.2){const side=across>=0?-1:1;detour={x:o.x+dz*side*(o.radius+4.5)+dx*3,z:o.z-dx*side*(o.radius+4.5)+dz*3};break;}}
    }
    const targetPoint=detour||gate;
    let heading=Math.atan2(targetPoint.x-state.x,targetPoint.z-state.z)+(reverse?Math.PI:0),error=Math.atan2(Math.sin(heading-state.yaw),Math.cos(heading-state.yaw));
    const stop=gate.stop||index===gates.length-1,slow=mission.expertTrial?(gate.minSpeed?(gate.minSpeed+2)/3.6:gate.momentumClimb||mission.id==='pro-surge'&&index===2?4.4:Math.min((gate.maxSpeed||8)/3.6-.2,1.5)):(Math.abs(error)>.6?1.4:course.theme==='mountain'?2.7:3.3),target=stop?Math.min(slow,Math.sqrt(Math.max(0,distance-(mission.expertTrial?.3:.5))*1.8)):slow;
    input.steer=clamp(error*(reverse?-2.3:2.3),-1,1);
    input.brake=(stop&&distance<gate.radius*.65)||Math.abs(state.speed)>target+.25?1:0;
    input.throttle=input.brake?0:clamp(.27+(target-Math.abs(state.speed))*.4,.08,.9);
   }
   engine.step(input);
   if(world.recoveryReason?.(state)){reason='closed river access';break;}
   if(checkpointStatus(state,gate,difficulty).reached){index++;lastProgress=tick;stalled=0;detour=null;if(index===gates.length){done=true;reason='completed';break;}}
   if(Math.abs(state.roll)>1.2){reason='rollover';break;}
   if(tick-lastProgress>60*200){reason='no checkpoint progress';break;}
   if(input.throttle>.3&&Math.abs(state.speed)<.07)stalled++;else stalled=0;
   if(stalled>60*40){reason='stalled';break;}
  }
  const result={body,course:course.id,mission:mission.id,difficulty,passed:done,checkpoints:`${index}/${gates.length}`,seconds:Math.round(state.elapsed),x:+state.x.toFixed(2),z:+state.z.toFixed(2),speed:+state.speed.toFixed(2),reason};results.push(result);console.log(JSON.stringify(result));if(process.env.DEBUG&&!done)console.log(JSON.stringify(state));
 }
 engine.dispose();
}
const failed=results.filter(r=>!r.passed);console.log(JSON.stringify({runs:results.length,passed:results.length-failed.length,failed:failed.length}));process.exitCode=failed.length?1:0;
