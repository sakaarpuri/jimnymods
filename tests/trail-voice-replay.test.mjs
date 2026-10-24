import test from 'node:test';
import assert from 'node:assert/strict';
import {voiceReplaySegments,ReplayCoaching} from '../src/trail/voice-replay.js';

test('recap narration trims both boundaries and keeps interrupted speech duration',()=>{
  const events=[{id:'first',time:2,end:8},{id:'second',time:11,end:13},{id:'last',time:14,end:22},{id:'pending',time:18}];
  assert.deepEqual(voiceReplaySegments(events,5,16),[{id:'first',start:0,end:3,offset:3},{id:'second',start:6,end:8,offset:0},{id:'last',start:9,end:11,offset:0}]);
  assert.deepEqual(voiceReplaySegments(events,5,5),[]);
});
test('recap clock does not replay a cue every frame and aborts at recorded interruption',()=>{
  const calls=[],player=new ReplayCoaching([{id:'one',start:0,end:2,offset:3},{id:'two',start:4,end:7,offset:0}],(id,args)=>calls.push({id,...args}));
  player.tick(.1);player.tick(.5);assert.equal(calls.length,1);assert.equal(calls[0].offset,3.1);
  player.tick(2);assert.equal(calls[0].signal.aborted,true);
  player.tick(4.2);assert.equal(calls.length,2);assert.ok(Math.abs(calls[1].offset-.2)<1e-6);
  player.stop();assert.equal(calls[1].signal.aborted,true);player.tick(5);assert.equal(calls.length,2);
});
test('late frame jumps never queue old instructions',()=>{
  const calls=[],player=new ReplayCoaching([{id:'old',start:0,end:2,offset:0},{id:'now',start:5,end:9,offset:0}],(id,args)=>calls.push({id,...args}));
  player.tick(7);assert.equal(calls.length,1);assert.equal(calls[0].id,'now');assert.equal(calls[0].offset,2);
});
