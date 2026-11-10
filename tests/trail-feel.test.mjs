import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {waypointMarker,formatDistance} from '../src/trail/waypoint.js';
import {gamepadInput,mergeInputs,GamepadDriver,GAMEPAD_ACTIONS} from '../src/trail/gamepad.js';
import {createLossLedger,attributeVehiclePenalty,lossSummary,coachingTip} from '../src/trail/score-breakdown.js';
import {createResolutionGovernor} from '../src/trail/adaptive-quality.js';
import {dustRate} from '../src/trail/dust.js';
import {resultFor,COURSES} from '../src/trail/courses.js';
import {drivingInput} from '../src/trail/controls.js';

const read=path=>readFileSync(new URL(`../${path}`,import.meta.url),'utf8');
const padWith=(buttons={},axes=[0,0,0,0],mapping='standard')=>({connected:true,mapping,axes,buttons:Array.from({length:17},(_,i)=>({value:buttons[i]||0}))});

test('the checkpoint marker sits on a visible gate and slides to the edge for one that is not',()=>{
 const visible=waypointMarker({ndcX:.3,ndcY:-.2,bearing:.2});
 assert.deepEqual([visible.x,visible.y,visible.offscreen],[.3,-.2,false]);
 const right=waypointMarker({ndcX:2.4,ndcY:.1,bearing:1.1}),left=waypointMarker({ndcX:-2.4,ndcY:.1,bearing:-1.1});
 assert(right.offscreen&&right.x>0&&right.rotation>0,'a gate to the right pins to the right edge');
 assert(left.offscreen&&left.x<0&&left.rotation<0,'a gate to the left pins to the left edge');
 // Behind the camera the projected coordinates mirror, so only the bearing can be trusted.
 const behind=waypointMarker({ndcX:.1,ndcY:.1,bearing:3});
 assert(behind.offscreen&&behind.y<right.y,'a gate behind drops down the edge');
 const crest=waypointMarker({ndcX:.1,ndcY:1.7,bearing:.05});
 assert(crest.offscreen&&crest.y>0&&crest.rotation===0,'a gate above the frame points up');
 for(const marker of [visible,right,left,behind,crest])assert(Math.abs(marker.x)<=.84&&Math.abs(marker.y)<=.84,'markers stay inside the frame');
 assert.equal(formatDistance(18.4),'18 m');assert.equal(formatDistance(1260),'1.3 km');assert.equal(formatDistance(NaN),'0 m');
});

test('a standard controller produces the same input shape and steering sign as the keyboard',()=>{
 const right=gamepadInput(padWith({7:1},[.9,0,0,0])),keyboard=drivingInput(new Set(['ArrowRight','ArrowUp']));
 assert.equal(Math.sign(right.steer),Math.sign(keyboard.steer));assert.equal(right.throttle,1);assert.equal(right.brake,0);
 assert.equal(gamepadInput(padWith({},[.1,0,0,0])).steer,0,'stick drift inside the dead zone is ignored');
 assert(Math.abs(gamepadInput(padWith({},[.5,0,0,0])).steer)<.5,'the stick curve favours small corrections');
 assert.equal(gamepadInput(padWith({14:1})).steer,1);assert.equal(gamepadInput(padWith({6:.6})).brake>.5,true);
 assert.equal(gamepadInput(padWith({7:1},[0,0,0,0],'')),null,'unknown layouts are not guessed');
 assert.deepEqual(mergeInputs({steer:1,throttle:.22,brake:0,handbrake:false},{steer:-.2,throttle:.8,brake:.4,handbrake:true}),{steer:1,throttle:.8,brake:.4,handbrake:true});
 const base={steer:0,throttle:.65,brake:0,handbrake:false};assert.equal(mergeInputs(base,null),base);
});

test('controller buttons fire once per press and report connection changes',()=>{
 let pad=null;const driver=new GamepadDriver(()=>[pad]);
 assert.deepEqual(driver.poll(),{input:null,pressed:[],connected:false,changed:false});
 pad=padWith({5:1});let result=driver.poll();
 assert(result.changed&&result.connected);assert.deepEqual(result.pressed,['gearUp']);
 result=driver.poll();assert.deepEqual(result.pressed,[],'a held button does not repeat');assert.equal(result.changed,false);
 pad=padWith({});driver.poll();pad=padWith({5:1,9:1});assert.deepEqual(driver.poll().pressed.sort(),['gearUp','pause']);
 pad=null;assert.equal(driver.poll().changed,true);
 assert.doesNotThrow(()=>driver.rumble(1,100));
 assert.equal(new Set(Object.values(GAMEPAD_ACTIONS)).size,Object.keys(GAMEPAD_ACTIONS).length);
});

test('the score breakdown adds up to exactly the points dropped',()=>{
 const ledger=createLossLedger();ledger.speeding=20;ledger.impacts=12;
 attributeVehiclePenalty(ledger,3,{slip:.5,roll:.4});attributeVehiclePenalty(ledger,6,{surface:'tarmac',range:'4H'});attributeVehiclePenalty(ledger,-1,{slip:1});
 assert.deepEqual([ledger.wheelspin,ledger.tilt,ledger.driveline],[1,2,6]);
 const state={penalty:Object.values(ledger).reduce((a,b)=>a+b,0),recoveries:2,elapsed:90},score=resultFor(state,COURSES[0],'explorer','x').score;
 const items=lossSummary(ledger,state.recoveries,score);
 assert.equal(items.reduce((sum,item)=>sum+item.points,0),100-score);
 assert.equal(items[0].id,'recoveries');assert(items.every(item=>item.points>0&&item.label));
 assert.match(coachingTip(items),/Recoveries cost the most/);
 assert.deepEqual(lossSummary(createLossLedger(),0,100),[]);assert.equal(coachingTip([]),'');
 // A score floored at zero still explains itself without exceeding 100 points.
 const heavy=createLossLedger();heavy.impacts=600;assert.equal(lossSummary(heavy,5,0).reduce((sum,item)=>sum+item.points,0),100);
});

test('automatic graphics lower resolution only on sustained low frame rates and recover cautiously',()=>{
 // A fill-rate-bound device: the frame rate rises as resolution falls.
 const governor=createResolutionGovernor(),bound=base=>base/governor.scale**2;
 assert.equal(governor.sample(5),1,'the first sample after a start is ignored');
 assert.equal(governor.sample(35),1,'one slow sample is not enough');
 assert(governor.sample(35)<1,'two slow samples step down');
 const lowered=governor.scale;assert.equal(governor.sample(48),lowered,'an adequate frame rate holds steady');
 assert(governor.sample(20)<lowered,'a very low sample steps down at once');
 for(let i=0;i<40;i++)governor.sample(bound(12));
 assert.equal(governor.scale,.6);assert.equal(governor.exhausted,true);assert.equal(governor.locked,false);
 let steps=0;for(let i=0;i<400&&governor.scale<1;i++){governor.sample(60);steps++;}
 assert.equal(governor.scale,1);assert(steps>20,'resolution returns gradually, not in one jump');
 governor.settle();assert.equal(governor.sample(5),1,'a resume hitch is ignored');
 governor.sample(10);governor.reset();assert.equal(governor.scale,1);
});

test('a capped frame rate restores full detail instead of blurring for nothing',()=>{
 // Battery-saver browsers hold 30 fps whatever the resolution.
 const governor=createResolutionGovernor();
 for(let i=0;i<12;i++)governor.sample(30);
 assert.equal(governor.scale,1);assert.equal(governor.locked,true);assert.equal(governor.exhausted,false);
 assert.equal(governor.sample(10),1,'a locked governor stays at full detail');
 governor.reset();assert.equal(governor.locked,false);
});

test('dust is raised by loose ground and sand, never by paved surfaces or a stationary car',()=>{
 assert.equal(dustRate('tarmac',20,1,true),0);assert.equal(dustRate('wet-tarmac',20,1),0);
 assert.equal(dustRate('sand',0,0),0);assert(dustRate('loose',0,.6)>0,'wheelspin from rest throws dust');
 assert(dustRate('sand',10,0)>dustRate('loose',10,0));assert(dustRate('soft-sand',10,.4)>dustRate('soft-sand',10,0));
 assert(dustRate('sand',-8,0)>0,'reversing raises dust too');
});

test('the feel layer is wired into the game without touching the physics or the score formula',()=>{
 const game=read('src/trail-game.js'),scene=read('src/trail/scene.js'),css=read('assets/drive-controls.css'),bundle=read('assets/trail-game.js');
 assert.match(game,/function currentInput\(\)\{return mergeInputs\(drivingInput\(keys,touch\),padInput\);\}/);
 assert.match(game,/rigidVehicle\?rigidVehicle\.step\(input,1\/60\):stepVehicle\(state,input,world\);/);
 assert.match(game,/padInput=running\?input:null/,'a controller cannot drive a paused game');
 assert.match(game,/if\(action==='pause'\)\{if\(running\)showDialog\('pause'\);else if\(\$\('pause'\)\.open\)resume\(\);continue;\}\n    if\(!running\)continue;/);
 assert.match(game,/document\.querySelector\(`\[data-range="\$\{next\}"\]`\)\.click\(\)/,'controller range requests reuse the guarded buttons');
 assert.match(game,/lossSummary\(losses,state\.recoveries,r\.score\)/);assert.match(game,/waypoint\.setAttribute\('aria-hidden','true'\)/);
 assert.match(scene,/dust\.update\(state,world,dt,camera,renderer\.domElement\.height\)/);assert.match(scene,/endCapture\(\)\{capturing=false;renderer\.setPixelRatio\(pixelRatio\(\)\)/);
 assert.match(scene,/prefers-reduced-motion:reduce/);
 for(const file of ['src/trail/dust.js','src/trail/gamepad.js','src/trail/waypoint.js','src/trail/score-breakdown.js','src/trail/adaptive-quality.js'])assert.doesNotMatch(read(file),/rapier|physics\.js|state\.penalty|state\.speed\s*=/i,file);
 assert.match(css,/#stage #waypoint\{[^}]*pointer-events:none/);assert.match(css,/#stage #driveToast\{[^}]*pointer-events:none/);
 assert(bundle.includes('Checkpoint beacon')&&bundle.includes('jimnygami-graphics-v1'),'the committed bundle includes the feel layer');
});
