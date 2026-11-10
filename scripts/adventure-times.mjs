// Drives every Himachal mission in Adventure style with a simple autopilot and
// reports the time. Used to check the missions can be finished and to set the
// star times in src/trail/adventure.js. A bot is not a human playthrough.
import {COURSES,getMissions,makeWorld,makeGates} from '../src/trail/courses.js';
import {createVehicle} from '../src/trail/physics.js';
import {createRigidVehicle} from '../src/trail/rigid-vehicle.js';
import {adventureRoute,adventureDrive,adventureGateReached,adventureTokens,collectTokens,ADVENTURE_MISSIONS,ADVENTURE_EVENTS} from '../src/trail/adventure.js';
const clamp=(x,a,b)=>Math.max(a,Math.min(b,x)),course=COURSES.find(c=>c.id==='mountain'),results=[];
for(const difficulty of (process.env.DIFFICULTY||'explorer').split(',')){
 const world=makeWorld(course,difficulty);
 for(const mission of [...getMissions(course),...ADVENTURE_EVENTS]){
  if(process.env.MISSION&&mission.id!==process.env.MISSION)continue;
  const first=mission.chain?getMissions(course).find(m=>m.id===mission.chain[0]):mission,state=createVehicle(process.env.BODY==='3door'?'3door':'5door');Object.assign(state,first.spawn||world.spawn);
  const engine=await createRigidVehicle(world,state),gates=adventureRoute(mission,id=>makeGates(course,difficulty,id)),tokens=adventureTokens(state,gates),taken=new Set();
  let index=0,done=false,reason='time limit',stall=0,backing=0,recoveries=0,top=0;
  for(let tick=0;tick<60*600;tick++){
   const gate=gates[index],next=gates[index+1],distance=Math.hypot(gate.x-state.x,gate.z-state.z);
   const error=Math.atan2(Math.sin(Math.atan2(gate.x-state.x,gate.z-state.z)-state.yaw),Math.cos(Math.atan2(gate.x-state.x,gate.z-state.z)-state.yaw));
   // Slow for the bend after this gate, and for large heading errors.
   const bend=next?Math.abs(Math.atan2(Math.sin(Math.atan2(next.x-gate.x,next.z-gate.z)-Math.atan2(gate.x-state.x,gate.z-state.z)),Math.cos(Math.atan2(next.x-gate.x,next.z-gate.z)-Math.atan2(gate.x-state.x,gate.z-state.z)))):0;
   const cruise=Number(process.env.CRUISE||11),corner=clamp(cruise-bend*5.5,4,cruise),target=Math.abs(error)>.5?3.5:Math.min(cruise,Math.sqrt(corner*corner+2*3.5*Math.max(0,distance-6)));
   let input={steer:clamp(error*2.2,-1,1),throttle:0,brake:0};
   if(backing>0){backing--;input={steer:-input.steer,throttle:0,brake:1};}
   else if(state.speed>target+.6)input.brake=clamp((state.speed-target)*.5,.2,1);else input.throttle=clamp(.3+(target-state.speed)*.5,.1,1);
   engine.step(adventureDrive(state,input,world.surface(state.x,state.z)));top=Math.max(top,state.speed);
   for(const i of collectTokens(state,tokens,taken))taken.add(i);
   if(world.recoveryReason?.(state)||Math.abs(state.roll)>1.3){recoveries++;const point=index?gates[index-1]:(first.spawn||world.spawn);Object.assign(state,{x:point.x,z:point.z,yaw:Math.atan2(gate.x-point.x,gate.z-point.z)});engine.reset(state);if(recoveries>6){reason='too many recoveries';break;}continue;}
   if(adventureGateReached(state,gate)){index++;if(index===gates.length){done=true;reason='completed';break;}}
   if(backing===0&&input.throttle>.3&&Math.abs(state.speed)<.25)stall++;else stall=Math.max(0,stall-1);
   if(stall>90){stall=0;backing=80;}
  }
  const seconds=+(state.elapsed+recoveries*5).toFixed(1),par=ADVENTURE_MISSIONS[mission.id]?.par;
  const result={mission:mission.id,difficulty,passed:done,checkpoints:`${index}/${gates.length}`,seconds,par,recoveries,topKmh:Math.round(top*3.6),tokens:`${taken.size}/${tokens.length}`,reason};results.push(result);console.log(JSON.stringify(result));engine.dispose();
 }
}
const failed=results.filter(r=>!r.passed);console.log(JSON.stringify({runs:results.length,failed:failed.length}));process.exitCode=failed.length?1:0;
