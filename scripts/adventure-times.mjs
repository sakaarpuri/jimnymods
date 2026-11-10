// Drives every Himachal Adventure event with a simple autopilot in the play
// variant of the world and reports the time and ride roughness. Used to check
// the events can be finished and to set the star times in src/trail/adventure.js.
// A bot is not a human playthrough.
import {COURSES,getMission,makeWorld,makeGates} from '../src/trail/courses.js';
import {createVehicle} from '../src/trail/physics.js';
import {createRigidVehicle} from '../src/trail/rigid-vehicle.js';
import {ADVENTURE,ADVENTURE_EVENTS,adventureRoute,adventureDrive,adventureGateReached,adventureApples,collectApples,Breadcrumbs} from '../src/trail/adventure.js';
const clamp=(x,a,b)=>Math.max(a,Math.min(b,x)),course=COURSES.find(c=>c.id==='mountain'),results=[];
for(const difficulty of (process.env.DIFFICULTY||'driver').split(',')){
 const world=makeWorld(course,difficulty,{adventure:true});
 for(const mission of ADVENTURE_EVENTS){
  if(process.env.MISSION&&mission.id!==process.env.MISSION)continue;
  const first=getMission(course,mission.chain[0]),state=createVehicle(process.env.BODY==='3door'?'3door':'5door');Object.assign(state,first.spawn||world.spawn);
  const engine=await createRigidVehicle(world,state),gates=adventureRoute(mission,id=>makeGates(course,difficulty,id)),apples=adventureApples(state,gates,world),taken=new Set(),crumbs=new Breadcrumbs();
  let index=0,done=false,reason='time limit',stall=0,backing=0,recoveries=0,top=0,rough=0,ticks=0,lastPitch=0,lastRoll=0,maxClimb=-Infinity;const cruise=Number(process.env.CRUISE||(mission.tight?4:11));
  for(let tick=0;tick<60*900;tick++){
   const gate=gates[index],next=gates[index+1],distance=Math.hypot(gate.x-state.x,gate.z-state.z),bearing=Math.atan2(gate.x-state.x,gate.z-state.z);
   const error=Math.atan2(Math.sin(bearing-state.yaw),Math.cos(bearing-state.yaw));
   // Slow for the bend after this gate, and for large heading errors.
   const bend=next?Math.abs(Math.atan2(Math.sin(Math.atan2(next.x-gate.x,next.z-gate.z)-bearing),Math.cos(Math.atan2(next.x-gate.x,next.z-gate.z)-bearing))):0;
   const corner=clamp(cruise-bend*5.5,Math.min(4,cruise),cruise),target=Math.abs(error)>.5?Math.min(3.5,cruise):Math.min(cruise,Math.sqrt(corner*corner+2*3.5*Math.max(0,distance-6)));
   let input={steer:clamp(error*2.2,-1,1),throttle:0,brake:0};
   if(backing>0){backing--;input={steer:-input.steer,throttle:0,brake:1};}
   else if(state.speed>target+.6)input.brake=clamp((state.speed-target)*.5,.2,1);else input.throttle=clamp(.3+(target-state.speed)*.5,.1,1);
   const level=world.waterSurface(state.x,state.z);state.wading=level==null?0:Math.max(0,level-state.y);state.extraDrag=Math.min(1,state.wading/.7);
   engine.step(adventureDrive(state,input,world.surface(state.x,state.z)));top=Math.max(top,state.speed);maxClimb=Math.max(maxClimb,state.y);crumbs.add(state);
   if(state.speed>4){rough+=((state.pitch-lastPitch)*60)**2+((state.roll-lastRoll)*60)**2;ticks++;}lastPitch=state.pitch;lastRoll=state.roll;
   for(const i of collectApples(state,apples,taken))taken.add(i);
   if(Math.abs(state.roll)>1.3||Math.abs(state.pitch)>1.3){recoveries++;const point=crumbs.back(state.elapsed)||first.spawn||world.spawn;Object.assign(state,{x:point.x,z:point.z,yaw:point.yaw});engine.reset(state);if(recoveries>8){reason='too many recoveries';break;}continue;}
   if(adventureGateReached(state,gate)){index++;if(index===gates.length){done=true;reason='completed';break;}}
   if(backing===0&&input.throttle>.3&&Math.abs(state.speed)<.25)stall++;else stall=Math.max(0,stall-1);
   if(stall>90){stall=0;backing=80;}
  }
  const seconds=+(state.elapsed+recoveries*ADVENTURE.recoverPenalty).toFixed(1);
  const result={event:mission.id,difficulty,passed:done,checkpoints:`${index}/${gates.length}`,seconds,par:mission.par,recoveries,topKmh:Math.round(top*3.6),apples:`${taken.size}/${apples.length}`,climbM:Math.round(maxClimb-state.y*0-((first.spawn||world.spawn).y||0)),roughness:+Math.sqrt(rough/Math.max(1,ticks)).toFixed(3),reason};results.push(result);console.log(JSON.stringify(result));engine.dispose();
 }
}
const failed=results.filter(r=>!r.passed);console.log(JSON.stringify({runs:results.length,failed:failed.length}));process.exitCode=failed.length?1:0;
