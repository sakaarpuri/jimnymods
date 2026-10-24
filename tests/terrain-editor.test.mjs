import test from 'node:test';
import assert from 'node:assert/strict';
import {mapPoint} from '../src/trail/terrain-editor.js';

test('terrain editor map coordinates match the physical yard at corners, centre and spawn',()=>{
  const r={left:40,top:80,width:320,height:320};
  assert.deepEqual(mapPoint(40,80,r),{x:-160,z:256});
  assert.deepEqual(mapPoint(360,400,r),{x:160,z:-64});
  assert.deepEqual(mapPoint(200,240,r),{x:0,z:96});
  assert.deepEqual(mapPoint(200,336,r),{x:0,z:0});
});
test('terrain editor pointer mapping remains accurate on scaled phone map',()=>{
  assert.deepEqual(mapPoint(180,198,{left:20,top:70,width:320,height:320}),{x:0,z:128});
  assert.deepEqual(mapPoint(90,99,{left:10,top:35,width:160,height:160}),{x:0,z:128});
});
