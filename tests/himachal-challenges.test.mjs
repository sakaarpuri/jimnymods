import test from 'node:test';
import assert from 'node:assert/strict';
import {BAY,TECHNICAL_EVENTS,challengeRoute,chooseRockLine,createChallengeRun,insideBay,technicalRecord,technicalStars,updateChallenge,challengeGateReached,convoyClockAt,convoyDuration,convoyPose,station} from '../src/trail/himachal-challenges.js';
import {COURSES,makeGates} from '../src/trail/courses.js';

const mountain=COURSES.find(course=>course.id==='mountain');
const gatesFor=id=>makeGates(mountain,'driver',id);
const ground={height:()=>1};
const car=(overrides={})=>({x:BAY.x,z:BAY.z,yaw:BAY.heading,body:'5door',speed:0,gear:'D',
  impact:0,verticalSpeed:0,elapsed:3,wheelContacts:[true,true,true,true],...overrides});

test('both lines have distinct entrances and reconverge at the lookout',()=>{
  const event=TECHNICAL_EVENTS[0],steps=challengeRoute(event,gatesFor),bank=challengeRoute(event,gatesFor,'bank');
  assert.equal(chooseRockLine(event.spawn,steps[0]),null);
  assert.equal(chooseRockLine(steps[0],steps[0]),'steps');
  assert.equal(chooseRockLine(bank[0],steps[0]),'bank');
  assert.deepEqual(steps.at(-1),bank.at(-1));
  assert(steps.filter(g=>g.precision).length>=3);
  const run=createChallengeRun(),finish=steps.at(-1);
  assert.equal(challengeGateReached(run,car({speed:3}),finish,true),false);
  assert.equal(challengeGateReached(run,car(),finish,true),true);
  assert.equal(challengeGateReached(run,car({wheelContacts:[false,false,false,false]}),finish,true),false);
});

test('a shallow or sideways park cannot release the convoy; time advances only while fully clear',()=>{
  const event=TECHNICAL_EVENTS[2],gates=challengeRoute(event,gatesFor);
  for(const body of ['3door','5door']){
    const run=createChallengeRun(),state=car({body});
    const shallow=car({x:BAY.x+1.5*Math.cos(BAY.heading),z:BAY.z-1.5*Math.sin(BAY.heading),body});
    assert(!insideBay(shallow));assert(!insideBay(car({yaw:BAY.heading+Math.PI/2,body})));
    assert(!challengeGateReached(run,state,gates[2],true),'arriving forwards cannot satisfy reversing');
    state.gear='R';state.speed=-.4;
    updateChallenge(run,event,gates,2,state,1/60);
    assert(challengeGateReached(run,state,gates[2],true));
    state.speed=0;
    for(let i=0;i<60;i++){state.elapsed+=1/60;updateChallenge(run,event,gates,3,state,1/60);}
    let before=run.convoyTime;
    for(let i=0;i<60;i++){state.elapsed+=1/60;updateChallenge(run,event,gates,3,{...state,x:shallow.x,z:shallow.z},1/60);}
    assert.equal(run.convoyTime,before);
    assert(!challengeGateReached(run,state,gates[3],true));
    for(let i=0;i<1000;i++){state.elapsed+=1/60;updateChallenge(run,event,gates,3,state,1/60);}
    assert.equal(run.convoyTime,convoyDuration);assert(challengeGateReached(run,state,gates[3],true));
    assert.equal(run.motion.length,2);assert(Math.abs(convoyClockAt(run.motion,4.5)-1)<.01);
    for(let i=0;i<2;i++){
      const start=convoyPose(i,0,ground),end=convoyPose(i,convoyDuration,ground);
      assert(Math.hypot(start.x-end.x,start.z-end.z)>40);
    }
    const lane=station(366,.3);assert(Math.hypot(lane.x-BAY.x,lane.z-BAY.z)>4);
  }
});

test('technical stars reward care and store best stars independently from fastest time',()=>{
  const run=createChallengeRun(),event=TECHNICAL_EVENTS[1],gates=challengeRoute(event,gatesFor);
  const state=car({...gates[0],elapsed:8});
  updateChallenge(run,event,gates,0,state,1/60);assert.equal(technicalStars(run,0),3);
  state.impact=2.6;updateChallenge(run,event,gates,0,state,1/60);updateChallenge(run,event,gates,0,state,1/60);
  assert.equal(run.hardHits,1);assert.equal(technicalStars(run,0),2);assert.equal(technicalStars(run,1),1);
  state.impact=0;state.elapsed+=2;state.verticalSpeed=-4;state.wheelContacts.fill(false);
  for(let i=0;i<16;i++)updateChallenge(run,event,gates,0,state,1/60);
  state.wheelContacts.fill(true);updateChallenge(run,event,gates,0,state,1/60);assert.equal(run.hardHits,2);
  const off=car({x:0,z:500});for(let i=0;i<120;i++)updateChallenge(run,event,gates,1,off,1/60);
  assert.equal(run.cuts,1);
  assert.deepEqual(technicalRecord({stars:2,seconds:40},65,3),{stars:3,seconds:40});
  assert.deepEqual(technicalRecord({stars:3,seconds:65},40,1),{stars:3,seconds:40});
});
