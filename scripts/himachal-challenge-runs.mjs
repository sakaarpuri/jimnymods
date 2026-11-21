// Input-driven checks for the Himachal precision events. Each button below is
// available on the touch HUD. The car always moves through the game's physics.
import {COURSES,makeWorld,makeGates,gateReached} from '../src/trail/courses.js';
import {createVehicle} from '../src/trail/physics.js';
import {createRigidVehicle} from '../src/trail/rigid-vehicle.js';
import {drivingInput,PEDAL} from '../src/trail/controls.js';
import {technicalDrive} from '../src/trail/adventure.js';
import {TECHNICAL_EVENTS,challengeRoute,createChallengeRun,updateChallenge,challengeGateReached,chooseRockLine,technicalStars,convoyPose,station,insideBay} from '../src/trail/himachal-challenges.js';

const mountain=COURSES.find(course=>course.id==='mountain');
const world=makeWorld(mountain,'driver',{adventure:true});
const gatesFor=id=>makeGates(mountain,'driver',id);
const distance=(a,b)=>Math.hypot(a.x-b.x,a.z-b.z);
const angle=value=>Math.atan2(Math.sin(value),Math.cos(value));
const none=new Set();
let failed=0;
for(const body of ['3door','5door'])for(const event of TECHNICAL_EVENTS){
  for(const line of event.id==='rock-garden'?['steps','bank']:[null]){
    const run=createChallengeRun(),state=createVehicle(body);
    Object.assign(state,event.spawn,{gear:'D',range:'4H',parking:false});
    const passing=event.id==='passing-place';
    const traffic=()=>[0,1].map(i=>convoyPose(i,run.convoyTime,world));
    const engine=await createRigidVehicle(world,state,{convoy:passing?traffic():[]});
    let gates=challengeRoute(event,gatesFor,line || 'steps'),index=0,finished=false;
    const reverseLine=[station(378,-1.4),station(373,-3.4),gates[2]];
    let reverseIndex=0;
    try{
      for(let tick=0;tick<60*350;tick++){
        const gate=gates[index],reverse=gate.action==='reverse';
        let aim=gate,touch=new Set();
        if(reverse){
          if(reverseIndex<2 && distance(state,reverseLine[reverseIndex])<1.5)reverseIndex++;
          aim=reverseLine[reverseIndex];
        }
        const bearing=Math.atan2(aim.x-state.x,aim.z-state.z);
        const error=angle(bearing-state.yaw+(reverse?Math.PI:0));
        if(Math.abs(error)>.032)touch.add(error*(reverse?-1:1)>0?'left':'right');
        const stop=(gate.action==='park'&&distance(state,gate)<2.4) || (reverse&&insideBay(state)&&run.backedIn);
        if(gate.action==='yield')touch.clear();
        else if(stop)touch.add(reverse?'gas':'brake');
        else{
          const target=reverse?1.45:event.id==='rock-garden'?2.3:3.1;
          if(reverse ? state.gear!=='R'||state.speed>-target : state.gear==='R'||state.speed<target)touch.add(reverse?'brake':'gas');
          else if(Math.abs(state.speed)>target+.65)touch.add(reverse?'gas':'brake');
        }
        const input=drivingInput(none,touch);
        if(input.throttle===PEDAL.normal)input.throttle=PEDAL.full;
        if(passing)engine.setConvoy(traffic());
        engine.step(technicalDrive(state,input,world.surface(state.x,state.z),gate));
        if(line&&!run.line){
          const entry=challengeRoute(event,gatesFor)[0];
          run.line=chooseRockLine(state,entry);
          if(run.line&&run.line!==line)throw Error('Entered the wrong line');
        }
        updateChallenge(run,event,gates,index,state,1/60);
        if((!line||run.line)&&challengeGateReached(run,state,gate,gateReached(state,gate))){
          if(++index===gates.length){finished=true;break;}
        }
      }
      const stars=finished?technicalStars(run,state.recoveries):0;
      console.log(JSON.stringify({body,event:event.id,line,finished,stars,gates:index+'/'+gates.length,hits:run.hardHits,cuts:run.cuts,
        seconds:+state.elapsed.toFixed(1),position:[state.x,state.z,state.yaw].map(v=>+v.toFixed(2)),reverseIndex}));
      if(stars!==3)failed++;
    }finally{engine.dispose();}
  }
}
process.exitCode=failed?1:0;
