import test from 'node:test';
import assert from 'node:assert/strict';
import {VoiceCoach,spokenText,englishVoices} from '../src/trail/voice.js';
import {Spotter,diagnose,WHEEL_SHOTS} from '../src/trail/spotter.js';
import {createVehicle,stepVehicle} from '../src/trail/physics.js';
import {COURSES,makeWorld,centerAt} from '../src/trail/courses.js';
const world=makeWorld(COURSES[0]);
test('spoken control names use intelligible words; only local English voices are eligible',()=>{assert.match(spokenText('2H, 4H, 4L; N then D at 5 km/h'),/two high, four high, four low; Neutral then Drive/);assert.equal(englishVoices({getVoices:()=>[{lang:'en-GB',localService:true},{lang:'en-US',localService:false},{lang:'fr-FR',localService:true}]}).length,1);});
test('voice is opt-in, deduplicated, interruptible and cancelled without queued speech',()=>{let now=0,cancels=0;const spoken=[],statuses=[],synth={getVoices:()=>[{lang:'en-GB',localService:true,voiceURI:'local'}],cancel:()=>cancels++,speak:u=>{spoken.push(u);u.onstart();}},coach=new VoiceCoach({synth,Utterance:class{constructor(text){this.text=text;}},now:()=>now,onStatus:s=>statuses.push(s)});assert.equal(coach.say('Select D','gear'),false);assert.equal(coach.setEnabled(true),true);assert.equal(coach.say('Select D','gear'),true);assert.equal(coach.say('Select D','gear'),false);assert.equal(spoken[0].text,'Select Drive');spoken[0].onend();now=8000;assert.equal(coach.say('Select D','gear'),false);assert.equal(coach.say('Hold the brake','brake'),true);coach.stop();assert.equal(coach.active,null);assert(cancels>=3);coach.setEnabled(false);assert.equal(coach.say('hello','test',{force:true}),false);assert.ok(statuses.at(-1).includes('off'));});
test('no device voice or failed speech never disables text coaching',()=>{const status=[],coach=new VoiceCoach({synth:{getVoices:()=>[],cancel:()=>{}},Utterance:class{},onStatus:s=>status.push(s)});assert.equal(coach.setEnabled(true),false);assert.match(status[0],/Captions/);coach.stop();});
test('spotter does not call parking, neutral or deliberate braking a stuck tyre',()=>{for(const scenario of ['parking','neutral','brake']){const s=createVehicle(),spot=new Spotter();s.parking=scenario==='parking';s.gear=scenario==='neutral'?'N':'D';for(let i=0;i<300;i++){s.elapsed+=1/60;spot.update(s,{throttle:.7,brake:scenario==='brake'?1:0},world);}assert.equal(spot.lowProgress,0);assert.equal(spot.shouldPause(s,true),false);}});
test('persistent lack of progress triggers once, respects opt-out, and never diagnoses a specific wedged tyre',()=>{const s=createVehicle(),spot=new Spotter();s.parking=false;s.gear='D';for(let i=0;i<220;i++){s.elapsed+=1/60;spot.update(s,{throttle:.7},world);}assert.equal(spot.problem.id,'low-progress');assert.match(spot.problem.advice,/cannot identify/);assert.equal(spot.shouldPause(s,false),false);assert.equal(spot.shouldPause(s,true),true);assert.equal(spot.shouldPause(s,true),false);s.speed=3;s.elapsed+=45;assert.equal(spot.shouldPause(s,true),false);});
test('contact and actual uneven terrain choose relevant views without changing vehicle state',()=>{const s=createVehicle();s.parking=false;s.gear='L';s.wheelHeights=[.2,.3,.05,.4];const before=structuredClone(s),d=diagnose(s,world);assert.equal(d.id,'uneven');assert.equal(d.wheel,2);assert.equal(d.shot,WHEEL_SHOTS[2]);assert.deepEqual(s,before);const spot=new Spotter();s.elapsed=2;spot.contact(2);spot.update(s,{},world);assert.equal(spot.problem.id,'contact');assert.equal(spot.shouldPause(s,true),true);spot.reset();assert.equal(spot.problem,null);});
test('authored soft bowls and firmer gravel shoulders correspond to lower traction',()=>{const sand=makeWorld(COURSES.find(c=>c.id==='sand'));assert.equal(sand.surface(0,40),'sand');assert.equal(sand.surface(65,170),'soft-sand');assert.equal(sand.surface(120,170),'loose');const firm=createVehicle(),soft=createVehicle();for(const s of [firm,soft]){s.parking=false;s.gear='L';s.range='4H';}for(let i=0;i<240;i++){stepVehicle(firm,{throttle:.55},{height:()=>0,surface:()=> 'sand'});stepVehicle(soft,{throttle:.55},{height:()=>0,surface:()=> 'soft-sand'});}assert(soft.distance<firm.distance);});
test('practice yard stays flat outside its authored ramps, while each active mountain rock lane articulates the axle',()=>{
 assert.equal(world.height(0,87),0);
 assert(world.features.some(f=>f.type==='ruts'));
 assert(Math.abs(world.height(-65.7,87)-world.height(-64.3,87))>.1);
 for(const difficulty of ['explorer','driver','expert']){
  const mountain=makeWorld(COURSES.find(c=>c.id==='mountain'),difficulty),lane=mountain.activeStoneLane;
  assert(mountain.features.some(f=>f.type==='descent'));
  assert(Math.abs(mountain.height(lane-.7,115)-mountain.height(lane+.7,115))>.05,`${difficulty} active line must articulate the axle`);
 }
});
