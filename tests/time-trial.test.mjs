import test from 'node:test';
import assert from 'node:assert/strict';
import {formatTrialTime,trialResult} from '../src/trail/time-trial.js';
test('time trial formats times and ignores invalid values',()=>{
 assert.equal(formatTrialTime(62.9),'1:02');assert.equal(formatTrialTime(NaN),'0:00');
});
test('only clean enough completed runs establish or improve a personal best',()=>{
 assert.deepEqual(trialResult(45,69,40),{eligible:false,best:40,isNew:false});
 assert.deepEqual(trialResult(45,70,null),{eligible:true,best:45,isNew:true});
 assert.deepEqual(trialResult(48,100,45),{eligible:true,best:45,isNew:false});
 assert.deepEqual(trialResult(42,90,45),{eligible:true,best:42,isNew:true});
});
