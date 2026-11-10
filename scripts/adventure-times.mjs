// Drives every Himachal Adventure event with a simple autopilot in the play
// variant of the world and reports the time and ride roughness. Used to check
// the events can be finished and to set the star times in src/trail/adventure.js.
// A bot is not a human playthrough.
import {COURSES,getMission,makeWorld,makeGates} from '../src/trail/courses.js';
import {createVehicle} from '../src/trail/physics.js';
import {createRigidVehicle} from '../src/trail/rigid-vehicle.js';
import {ADVENTURE,ADVENTURE_EVENTS,adventureRoute,adventureDrive,adventureGateReached,adventureApples,collectApples,huntApples,nearestApple,Breadcrumbs} from '../src/trail/adventure.js';
const clamp=(x,a,b)=>Math.max(a,Math.min(b,x)),course=COURSES.find(c=>c.id==='mountain'),results=[];
for(const difficulty of (process.env.DIFFICULTY||'driver').split(',')){
 const world=makeWorld(course,difficulty,{adventure:true});const rocks=world.obstacles.filter(o=>o.type==='rock'&&o.radius>.6);
 for(const mission of ADVENTURE_EVENTS){
  if(process.env.MISSION&&mission.id!==process.env.MISSION)continue;
  const first=mission.spawn?{spawn:mission.spawn}:getMission(course,mission.chain[0]),state=createVehicle(process.env.BODY==='3door'?'3door':'5door');Object.assign(state,first.spawn||world.spawn);
  const engine=await createRigidVehicle(world,state),hunt=!!mission.hunt,apples=hunt?huntApples(world,mission.hunt):[],gates=hunt?apples.map(a=>({...a,radius:1.6})):adventureRoute(mission,id=>makeGates(course,difficulty,id)),taken=new Set(),crumbs=new Breadcrumbs();
  if(!hunt)apples.push(...adventureApples(state,gates,world));let wet=0,progressMark=null,progressTick=0,index=0,done=false,reason='time limit',stall=0,backing=0,recoveries=0,top=0,rough=0,ticks=0,lastPitch=0,lastRoll=0,maxClimb=-Infinity;const cruise=Number(process.env.CRUISE||(mission.tight?4:11));
  for(let tick=0;tick<60*900;tick++){
   let gate=hunt?nearestApple(state,apples,taken):gates[index];const next=hunt?null:gates[index+1];if(!gate){done=true;reason='completed';break;}
   // The hunt bot crosses the stream only at the bridge or a ford, as a player has to.
   if(hunt&&state.z>104&&state.z<206){const side=Math.sign(state.x-22)||1,want=Math.sign(gate.x-22)||1,inStream=Math.abs(state.x-22)<16;
    if(side!==want||inStream){const crossing=[130,158,188].reduce((best,z)=>Math.abs(state.z-z)+Math.abs(gate.z-z)<Math.abs(state.z-best)+Math.abs(gate.z-best)?z:best,130);
     gate=Math.abs(state.z-crossing)>3&&!inStream?{x:22+side*20,z:crossing}:{x:22+want*20,z:crossing};}}
   const distance=Math.hypot(gate.x-state.x,gate.z-state.z),bearing=Math.atan2(gate.x-state.x,gate.z-state.z);
   const error=Math.atan2(Math.sin(bearing-state.yaw),Math.cos(bearing-state.yaw));
   // Slow for the bend after this gate, and for large heading errors.
   const bend=next?Math.abs(Math.atan2(Math.sin(Math.atan2(next.x-gate.x,next.z-gate.z)-bearing),Math.cos(Math.atan2(next.x-gate.x,next.z-gate.z)-bearing))):0;
   const corner=clamp(cruise-bend*5.5,Math.min(4,cruise),cruise),target=Math.abs(error)>.5?Math.min(3.5,cruise):Math.min(cruise,Math.sqrt(corner*corner+2*3.5*Math.max(0,distance-6)));
   // Steer round a rock cluster in the way instead of ploughing into it.
   let avoid=0;for(const o of rocks){const ox=o.x-state.x,oz=o.z-state.z,along=ox*Math.sin(state.yaw)+oz*Math.cos(state.yaw),across=ox*Math.cos(state.yaw)-oz*Math.sin(state.yaw);if(along>0&&along<11&&along<distance&&Math.abs(across)<o.radius+1.5){avoid=across>=0?-.9:.9;break;}}
   let input={steer:clamp(error*2.2+avoid,-1,1),throttle:0,brake:0};
   if(backing>0){backing--;input={steer:-input.steer,throttle:0,brake:1};}
   else if(state.speed>target+.6)input.brake=clamp((state.speed-target)*.5,.2,1);else input.throttle=clamp(.3+(target-state.speed)*.5,.1,1);
   const level=world.waterSurface(state.x,state.z);state.wading=level==null?0:Math.max(0,level-state.y);state.extraDrag=Math.min(1,state.wading/.7);if(state.wading>.2)wet++;
   engine.step(adventureDrive(state,input,world.surface(state.x,state.z)));top=Math.max(top,state.speed);maxClimb=Math.max(maxClimb,state.y);crumbs.add(state);
   if(state.speed>4){rough+=((state.pitch-lastPitch)*60)**2+((state.roll-lastRoll)*60)**2;ticks++;}lastPitch=state.pitch;lastRoll=state.roll;
   for(const i of collectApples(state,apples,taken))taken.add(i);
   if(Math.abs(state.roll)>1.3||Math.abs(state.pitch)>1.3){recoveries++;const point=crumbs.back(state.elapsed)||first.spawn||world.spawn;Object.assign(state,{x:point.x,z:point.z,yaw:point.yaw});engine.reset(state);if(recoveries>8){reason='too many recoveries';break;}continue;}
   if(hunt){if(taken.size===apples.length){done=true;reason='completed';break;}}
   else if(adventureGateReached(state,gate)){index++;if(index===gates.length){done=true;reason='completed';break;}}
   // Like a player pressing Recover: staying within 8 m for 20 s puts the car back on its own recent track.
   if(!progressMark||Math.hypot(state.x-progressMark.x,state.z-progressMark.z)>8){progressMark={x:state.x,z:state.z};progressTick=tick;}
   else if(tick-progressTick>60*20){progressMark=null;progressTick=tick;recoveries++;const point=crumbs.back(state.elapsed,3)||first.spawn||world.spawn;Object.assign(state,{x:point.x,z:point.z,yaw:point.yaw});engine.reset(state);if(recoveries>8){reason='too many recoveries';break;}continue;}
   if(backing===0&&input.throttle>.3&&Math.abs(state.speed)<.25)stall++;else stall=Math.max(0,stall-1);
   if(stall>90){stall=0;backing=80;}
  }
  const seconds=+(state.elapsed+recoveries*ADVENTURE.recoverPenalty).toFixed(1);
  const result={event:mission.id,difficulty,passed:done,checkpoints:hunt?'hunt':`${index}/${gates.length}`,seconds,par:mission.par,recoveries,topKmh:Math.round(top*3.6),apples:`${taken.size}/${apples.length}`,wadingSeconds:+(wet/60).toFixed(1),climbM:Math.round(maxClimb-state.y*0-((first.spawn||world.spawn).y||0)),roughness:+Math.sqrt(rough/Math.max(1,ticks)).toFixed(3),reason};results.push(result);console.log(JSON.stringify(result));
  if(!done)console.log('  stopped at',state.x.toFixed(1),state.z.toFixed(1),'roll',state.roll.toFixed(2),'pitch',state.pitch.toFixed(2),'near:',[...world.obstacles,...world.sceneryObstacles].filter(o=>!o.ghost&&Math.hypot(o.x-state.x,o.z-state.z)<5).map(o=>`${o.id} ${o.type} ${o.x.toFixed(1)},${o.z.toFixed(1)}`).join(' | ')||'nothing','slope',[-3,3].map(d=>(world.height(state.x+d,state.z)-world.height(state.x,state.z)).toFixed(1)).join('/'),[-3,3].map(d=>(world.height(state.x,state.z+d)-world.height(state.x,state.z)).toFixed(1)).join('/'));
  engine.dispose();
 }
}
const failed=results.filter(r=>!r.passed);console.log(JSON.stringify({runs:results.length,failed:failed.length}));process.exitCode=failed.length?1:0;
