import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {ADVENTURE,ADVENTURE_MISSIONS,ADVENTURE_EVENTS,adventureGates,adventureRoute,adventureDrive,adventureStars,formatRaceTime,adventureTokens,collectTokens,stuckWheel} from '../src/trail/adventure.js';
import {COURSES,getMissions,makeGates,makeWorld} from '../src/trail/courses.js';
import {createVehicle} from '../src/trail/physics.js';
import {createRigidVehicle} from '../src/trail/rigid-vehicle.js';
import {himachalLandmarkPlan,himachalLandmarkObstacles} from '../src/trail/himachal-landmark-plan.js';
import {DRIVING_CAMERAS,normalizeDrivingCamera} from '../src/trail/cockpit-camera.js';

const read=path=>readFileSync(new URL(`../${path}`,import.meta.url),'utf8');
const mountain=COURSES.find(c=>c.id==='mountain'),missions=getMissions(mountain);
const routes=difficulty=>[...missions,...ADVENTURE_EVENTS].map(mission=>adventureRoute(mission,id=>makeGates(mountain,difficulty,id)));

test('Adventure gates are plain drive-through checkpoints',()=>{
 const hairpin=makeGates(mountain,'explorer','hairpin'),gates=adventureGates(hairpin);
 assert(hairpin.some(g=>g.reverse)&&hairpin.some(g=>g.stop),'the simulator route has stop and reverse conditions');
 assert.equal(gates.length,hairpin.filter(g=>!g.reverse).length,'the reverse pocket is dropped');
 for(const gate of gates){for(const key of ['stop','range','gear','reverse','precision','headingTolerance'])assert(!(key in gate),key);assert(gate.radius>=5);}
 for(const route of routes('expert'))assert(route.length>=5&&route.every(g=>Number.isFinite(g.x)&&Number.isFinite(g.z)));
});

test('every Himachal trail has an Adventure name and rising star times; the traverse joins real routes',()=>{
 for(const mission of [...missions,...ADVENTURE_EVENTS]){const info=ADVENTURE_MISSIONS[mission.id];assert(info?.name&&info.summary,mission.id);assert(info.par[0]>10&&info.par[1]>info.par[0],mission.id);}
 const traverse=ADVENTURE_EVENTS[0],joined=adventureRoute(traverse,id=>makeGates(mountain,'explorer',id)),parts=traverse.chain.map(id=>adventureGates(makeGates(mountain,'explorer',id)));
 for(const id of traverse.chain)assert(missions.some(m=>m.id===id),id);
 assert(joined.length>parts[0].length+parts[1].length&&joined.length<=parts.reduce((sum,p)=>sum+p.length,0));
 // No leap between the joined routes that a driver could not follow.
 for(let i=1;i<joined.length;i++)assert(Math.hypot(joined[i].x-joined[i-1].x,joined[i].z-joined[i-1].z)<80,`gap before gate ${i}`);
 assert.equal(ADVENTURE_MISSIONS['grand-traverse'].par[0]>ADVENTURE_MISSIONS['mountain-ascent'].par[0],true);
});

test('arcade pedals: brake reverses once stopped and accelerate returns to Drive',()=>{
 const state=createVehicle();state.speed=0;
 let out=adventureDrive(state,{steer:0,throttle:1,brake:0},'loose');
 assert.deepEqual([state.gear,state.range,state.parking,out.throttle],['D','4H',false,1]);assert.equal(state.powerScale,ADVENTURE.power);assert.equal(state.gripScale,ADVENTURE.grip);
 state.speed=8;for(let i=0;i<60;i++)out=adventureDrive(state,{steer:0,throttle:0,brake:1},'loose');
 assert.equal(state.gear,'D','braking at speed never selects reverse');assert.equal(out.brake,1);
 state.speed=0;for(let i=0;i<20;i++)out=adventureDrive(state,{steer:0,throttle:0,brake:1},'loose');
 assert.equal(state.gear,'R');assert.deepEqual([out.throttle,out.brake],[1,0],'the held brake now drives backwards');
 state.speed=-4;out=adventureDrive(state,{steer:0,throttle:1,brake:0},'loose');
 assert.equal(state.gear,'R');assert.deepEqual([out.throttle,out.brake],[0,1],'accelerate brakes a reversing car first');
 state.speed=-.1;out=adventureDrive(state,{steer:0,throttle:1,brake:0},'loose');assert.equal(state.gear,'D');assert.equal(out.throttle,1);
 adventureDrive(state,{steer:0,throttle:1,brake:0},'tarmac');assert.equal(state.range,'2H');
 state.speed=1;state.pitch=-.3;adventureDrive(state,{steer:0,throttle:1,brake:0},'loose');adventureDrive(state,{steer:0,throttle:1,brake:0},'loose');assert.equal(state.range,'4L','slow steep climbs use low range');
 state.speed=8;adventureDrive(state,{steer:0,throttle:1,brake:0},'loose');assert.equal(state.range,'4H');
});

test('stars, race clock and tokens',()=>{
 assert.deepEqual([adventureStars(30,[34,48]),adventureStars(34,[34,48]),adventureStars(40,[34,48]),adventureStars(90,[34,48])],[3,3,2,1]);
 assert.equal(formatRaceTime(75.26),'1:15.2');assert.equal(formatRaceTime(-3),'0:00.0');
 const gates=[{x:0,z:60},{x:0,z:120}],tokens=adventureTokens({x:0,z:0},gates);
 assert(tokens.length>=4);assert(tokens.some(t=>t.x>0)&&tokens.some(t=>t.x<0),'tokens alternate sides of the line');
 for(const token of tokens)for(const gate of gates)assert(Math.hypot(token.x-gate.x,token.z-gate.z)>3.9,'tokens keep clear of the gate posts');
 const taken=new Set(),state={x:tokens[0].x,z:tokens[0].z,y:0};
 assert.deepEqual(collectTokens(state,tokens,taken),[0]);taken.add(0);assert.deepEqual(collectTokens(state,tokens,taken),[]);
 assert.deepEqual(collectTokens({...state,y:20},tokens.map(t=>({...t,y:0})),new Set()),[],'a token on the valley floor is not collected from the bridge above');
});

test('the stuck camera frames the airborne wheel, otherwise the most compressed corner',()=>{
 assert.equal(stuckWheel({wheelContacts:[true,true,false,true],suspension:[.2,.2,.2,.2],gear:'D'}),2);
 assert.equal(stuckWheel({wheelContacts:[true,true,true,true],suspension:[.25,.11,.2,.2],gear:'D'}),1);
 assert.equal(stuckWheel({wheelContacts:[true,true,true,true],suspension:[.2,.2,.2,.2],gear:'R'}),2,'level and reversing: look at the rear');
 assert(DRIVING_CAMERAS.includes('wheels'));assert.equal(normalizeDrivingCamera('wheels'),'wheels');
});

test('Adventure power and grip make the same car climb harder; Simulator is unchanged',async()=>{
 const world=makeWorld(COURSES[0],'explorer');
 const run=async adventure=>{const state=createVehicle();Object.assign(state,{x:-60,z:60});const engine=await createRigidVehicle(world,state);state.parking=false;state.gear='D';state.range='4H';
  for(let i=0;i<150;i++){const input={steer:0,throttle:1,brake:0};engine.step(adventure?adventureDrive(state,input,world.surface(state.x,state.z)):input);}
  engine.dispose();return state;};
 const stock=await run(false),boosted=await run(true);
 assert.equal(stock.powerScale,undefined);assert(boosted.speed>stock.speed*1.25,`adventure ${boosted.speed.toFixed(1)} m/s vs stock ${stock.speed.toFixed(1)} m/s`);
});

test('Himachal roadside landmarks stand clear of every route',()=>{
 const plan=himachalLandmarkPlan();assert(plan.flags.length>=4&&plan.chortens.length>=2&&plan.milestones.length>=6);
 const obstacles=himachalLandmarkObstacles(()=>3);assert.equal(obstacles.length,plan.chortens.length);assert(obstacles.every(o=>o.type==='cylinder'&&o.y===3&&o.radius>1));
 for(const difficulty of ['explorer','driver','expert'])for(const route of routes(difficulty))for(const gate of route)for(const chorten of plan.chortens)assert(Math.hypot(gate.x-chorten.x,gate.z-chorten.z)>7,`${chorten.id} near a ${difficulty} gate`);
 assert(makeWorld(mountain,'explorer').sceneryObstacles.some(o=>o.id==='chorten-pass'));
 assert(!makeWorld(COURSES.find(c=>c.id==='sand'),'explorer').sceneryObstacles.some(o=>String(o.id).startsWith('chorten')));
});

test('Adventure is wired as the Himachal default without leaking into other courses',()=>{
 const game=read('src/trail-game.js'),scene=read('src/trail/scene.js'),css=read('assets/drive-controls.css');
 assert.match(game,/adventure=course\.id==='mountain'&&driveStyle==='adventure'/);
 assert.match(game,/if\(countdown>0\)\{[\s\S]{0,260}state\.parking=true/,'the car is held during the countdown');
 assert.match(game,/\}else input=adventureDrive\(state,input,world\.surface\(state\.x,state\.z\)\);/);
 assert.match(game,/if\(adventure\)\{finishAdventure\(\);return;\}/);assert.match(game,/location\.hash!=='#lessons'\)\{selected=COURSES\.find\(c=>c\.id==='mountain'\)/);
 assert.match(game,/timeTrialActive=!adventure&&/);assert.match(scene,/chaseYaw\+=Math\.atan2\(Math\.sin\(state\.yaw-chaseYaw\)/);assert.match(scene,/if\(course\.id==='mountain'\)worldRoot\.add\(createHimachalLandmarks\(world\)\)/);
 assert.match(css,/#game\[data-style=adventure\] :is\(\.drive-controls,\.key-hint\)\{display:none\}/);
 assert.doesNotMatch(read('src/trail/adventure.js'),/from '(three|@dimforge)/,'the Adventure rules stay renderer- and solver-free');
});
