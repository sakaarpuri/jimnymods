import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const read=path=>readFileSync(new URL('../'+path,import.meta.url),'utf8');

test('game entry is visible in the header and welcome explains controls',()=>{
 const header=read('assets/site-header.js'),welcome=read('assets/welcome.js');
 assert.match(header,/Play 4×4 game/);assert.match(header,/site-game-mobile/);
 assert.match(welcome,/Play & learn Jimny 4×4 controls/);
 assert.match(welcome,/not real-world training/);
});
test('returning users cannot automatically enable voice and transient airborne wheels do not trigger coaching',()=>{
 const game=read('src/trail-game.js');
 assert.match(game,/voiceWanted=false/);
 assert.match(game,/function enableVoice\(\)\{voiceWanted=false;voice\.setEnabled\(false\)/);
 assert.doesNotMatch(game,/return cueText\('wheel-airborne'\)/);
 assert.match(game,/automaticWheelPreview\(state,spotter\.problem,spotter\.lowProgress\)/);
});
