import test from 'node:test';
import assert from 'node:assert/strict';
import {audioParameters,TrailAudio,DEFAULT_MIX} from '../src/trail/audio.js';
test('sound layers follow RPM, load, contacts, surface and cabin position',()=>{
  const base={speed:8,rpm:1800,throttle:.2,slip:.1,wheelLoads:[1,1,1,1]};
  const normal=audioParameters(base),fast=audioParameters({...base,rpm:3600,throttle:1}),cabin=audioParameters(base,{interior:true});
  assert.equal(fast.firing,normal.firing*2);assert.ok(fast.engine>normal.engine);assert.ok(cabin.cutoff<normal.cutoff);
  assert.equal(audioParameters({...base,wheelLoads:[0,0,0,0]}).tyre,0);
  assert.ok(audioParameters(base,{surface:'tarmac'}).tyre<normal.tyre);
  assert.ok(audioParameters(base,{coaching:true}).duck<normal.duck);
});
test('audio stays lazy and clamps saved mix levels without requesting microphone',()=>{
  const sound=new TrailAudio();assert.equal(sound.context,null);sound.setMix('master',9);assert.equal(sound.mix.master,1);sound.setMix('master',-1);assert.equal(sound.mix.master,0);
});
test('idle has audible upper harmonics and corrupted saved levels do not silence the engine',async()=>{
 const a=make({mix:{master:'broken',vehicle:NaN,environment:-2}});assert.equal(a.mix.master,DEFAULT_MIX.master);assert.equal(a.mix.vehicle,DEFAULT_MIX.vehicle);assert.equal(a.mix.environment,0);
 await a.enable(true);a.update({rpm:850,speed:0,throttle:0});assert(a.harmonics.filter(h=>h.osc.frequency.value>80).some(h=>h.gain.gain.value>.02));assert.equal(a.snapshot().state,'running');a.dispose();
});

class Param{
  constructor(){this.value=0;this.cancelled=0;}
  setTargetAtTime(v){this.value=v;}
  setValueAtTime(v){this.value=v;}
  exponentialRampToValueAtTime(v){this.value=v;}
  cancelScheduledValues(){this.cancelled++;}
}
class Node{
  constructor(){this.gain=new Param();this.frequency=new Param();this.threshold=new Param();this.ratio=new Param();this.connections=[];this.started=[];this.stopped=0;}
  connect(node){this.connections.push(node);}
  disconnect(){this.connections=[];}
  start(...args){this.started.push(args);}
  stop(){this.stopped++;}
}
class Context{
  constructor(){this.currentTime=1;this.sampleRate=8;this.destination=new Node();this.state='suspended';this.sources=[];this.decode=async()=>({duration:8});}
  createGain(){return new Node();}
  createDynamicsCompressor(){return new Node();}
  createMediaStreamDestination(){const n=new Node();n.stream={id:'test-stream'};return n;}
  createBiquadFilter(){return new Node();}
  createOscillator(){return new Node();}
  createBufferSource(){const n=new Node();this.sources.push(n);return n;}
  createBuffer(_,length){return{getChannelData:()=>new Float32Array(length)};}
  decodeAudioData(data){return this.decode(data);}
  async resume(){this.state='running';}
  async suspend(){this.state='suspended';}
  async close(){this.state='closed';}
}
const cue={id:'test',text:'Hold the brake.',src:'assets/audio/coaching/test.mp3'};
const response={ok:true,arrayBuffer:async()=>new ArrayBuffer(16)};
const tick=()=>new Promise(resolve=>setImmediate(resolve));
const deferred=()=>{let resolve,reject;const promise=new Promise((a,b)=>{resolve=a;reject=b;});return{promise,resolve,reject};};
const make=options=>new TrailAudio({Context,fetcher:async()=>response,...options});

test('effects mute and coaching gain are independent, including changes while muted',async()=>{
 const a=make();await a.enable(true);await a.enable(false);assert.equal(a.vehicle.gain.value,0);assert.equal(a.ambience.gain.value,0);assert.equal(a.coach.gain.value,.85);
 a.setMix('coaching',.4);a.setMix('vehicle',.9);assert.equal(a.coach.gain.value,.4);assert.equal(a.vehicle.gain.value,0);
 let starts=0;const h=await a.playCoaching(cue,{onStart:()=>starts++});assert.equal(starts,1);assert.equal(a.context.state,'running');assert.equal(a.monitor.gain.value,1);assert.equal(a.coachingSources.size,1);h.stop();assert.equal(a.coachingSources.size,0);a.dispose();
});
test('abort during fetch reaches the request and suppresses every playback callback',async()=>{
 const d=deferred();let requestSignal;const a=make({fetcher:(_,opts)=>{requestSignal=opts.signal;return d.promise;}}),controller=new AbortController(),calls=[];
 const pending=a.playCoaching(cue,{signal:controller.signal,onStart:()=>calls.push('start'),onEnd:()=>calls.push('end'),onError:()=>calls.push('error')});await tick();controller.abort();assert(requestSignal.aborted);d.resolve(response);await pending;
 assert.deepEqual(calls,[]);assert.equal(a.coachingBuffers.size,0);assert.equal(a.coachingSources.size,0);assert.equal(a.pendingCoaching.size,0);a.dispose();
});
test('abort during decode cannot cache or start a late buffer',async()=>{
 const a=make();a.init();const d=deferred();a.context.decode=()=>d.promise;const controller=new AbortController(),calls=[];
 const pending=a.playCoaching(cue,{signal:controller.signal,onStart:()=>calls.push('start'),onError:()=>calls.push('error')});await tick();controller.abort();d.resolve({duration:8});await pending;
 assert.deepEqual(calls,[]);assert.equal(a.coachingBuffers.size,0);assert.equal(a.coachingSources.size,0);a.dispose();
});
test('dispose during pending load never recreates a context or delivers late callbacks',async()=>{
 const d=deferred(),a=make({fetcher:()=>d.promise}),calls=[];const pending=a.playCoaching(cue,{onStart:()=>calls.push('start'),onEnd:()=>calls.push('end'),onError:()=>calls.push('error')});await tick();const c=a.context;a.dispose();d.resolve(response);await pending;
 assert.equal(c.state,'closed');assert.equal(a.context,null);assert.equal(a.coachingBuffers.size,0);assert.deepEqual(calls,[]);assert.equal(a.coachingPlaybacks.size,0);assert.equal(await a.enable(true),false);await assert.rejects(a.loadCoaching(cue),{name:'AbortError'});await assert.rejects(a.beginRecording(),{name:'AbortError'});
});
test('dispose during decode cannot repopulate the decoded buffer cache',async()=>{
 const a=make();a.init();const d=deferred();a.context.decode=()=>d.promise;const pending=a.loadCoaching(cue);await tick();a.dispose();d.resolve({duration:8});await assert.rejects(pending,{name:'AbortError'});assert.equal(a.coachingBuffers.size,0);
});
test('a live source stops on abort and stale onended callback cannot notify',async()=>{
 const a=make(),controller=new AbortController(),calls=[];await a.playCoaching(cue,{signal:controller.signal,onStart:()=>calls.push('start'),onEnd:()=>calls.push('end')});const source=[...a.coachingSources][0],stale=source.onended;controller.abort();stale();assert.deepEqual(calls,['start']);assert.equal(source.stopped,1);assert.equal(a.coachingSources.size,0);a.dispose();
});
test('narration-only recording excludes effects even when live effects are enabled',async()=>{
 const a=make();await a.enable(true);assert.equal((await a.beginRecording({effects:false})).id,'test-stream');
 for(const n of [a.vehicle,a.ambience,a.ui]){assert.equal(n.gain.value,0);assert(n.gain.cancelled>0);}assert.equal(a.coach.gain.value,.85);assert.equal(a.monitor.gain.value,1);
 a.setMix('vehicle',1);assert.equal(a.vehicle.gain.value,0);a.endRecording();assert.equal(a.vehicle.gain.value,1);assert.equal(a.context.state,'suspended');a.dispose();
});
test('sound-off recording captures chosen buses without becoming audible in the monitor',async()=>{
 const a=make();await a.beginRecording({effects:false});assert.equal(a.enabled,false);assert.equal(a.monitor.gain.value,0);assert.equal(a.vehicle.gain.value,0);assert.equal(a.coach.gain.value,.85);
 await a.playCoaching(cue);assert.equal(a.monitor.gain.value,0);a.setMix('coaching',.7);assert.equal(a.monitor.gain.value,0);a.endRecording();assert.equal(a.coachingSources.size,0);assert.equal(a.vehicle.gain.value,0);assert.equal(a.context.state,'suspended');
 await a.beginRecording();assert.equal(a.vehicle.gain.value,.65);assert.equal(a.monitor.gain.value,0);a.endRecording();a.dispose();
});
test('load errors notify once while cached and aborted loads obey cancellation',async()=>{
 const a=make({fetcher:async()=>({ok:false})}),calls=[];await a.playCoaching(cue,{onError:e=>calls.push(e.message)});assert.equal(calls.length,1);assert.equal(a.coachingSources.size,0);a.fetcher=async()=>response;await a.loadCoaching(cue);const c=new AbortController();c.abort();await assert.rejects(a.loadCoaching(cue,{signal:c.signal}),{name:'AbortError'});a.dispose();
});
test('ending or disposing a pending recording prevents a late stream handoff',async()=>{
 for(const action of ['endRecording','dispose']){const a=make();a.init();const d=deferred();a.context.resume=()=>d.promise;const pending=a.beginRecording({effects:false});a[action]();d.resolve();await assert.rejects(pending,{name:'AbortError'});a.dispose();assert.doesNotThrow(()=>a.setMix('master',.5));}
});
