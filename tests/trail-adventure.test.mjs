import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {ADVENTURE,ADVENTURE_MISSIONS,ADVENTURE_EVENTS,adventureGates,adventureRoute,adventureDrive,adventureStars,formatRaceTime,adventureApples,collectApples,huntApples,nearestApple,stuckWheel,Breadcrumbs} from '../src/trail/adventure.js';
import {SECTION_FORDS,sectionRiverCentre} from '../src/trail/himachal-section.js';
import {COURSES,getMissions,makeGates,makeWorld} from '../src/trail/courses.js';
import {createVehicle} from '../src/trail/physics.js';
import {createRigidVehicle} from '../src/trail/rigid-vehicle.js';
import {himachalLandmarkPlan,himachalLandmarkObstacles} from '../src/trail/himachal-landmark-plan.js';
import {DRIVING_CAMERAS,normalizeDrivingCamera} from '../src/trail/cockpit-camera.js';
import {capturePose,blendPose} from '../src/trail/pose.js';
import {gridHeights} from '../src/trail/height-grid.js';
import {MOUNTAIN_ROADS,MOUNTAIN_RELIEF} from '../src/trail/himachal-mountain.js';
import {DEFAULT_MIX,audioParameters} from '../src/trail/audio.js';
import {dustRate} from '../src/trail/dust.js';

const read=path=>readFileSync(new URL(`../${path}`,import.meta.url),'utf8');
const mountain=COURSES.find(c=>c.id==='mountain'),missions=getMissions(mountain);
const play=makeWorld(mountain,'driver',{adventure:true}),sim=makeWorld(mountain,'driver');
const routes=difficulty=>ADVENTURE_EVENTS.map(event=>adventureRoute(event,id=>makeGates(mountain,difficulty,id)));
const routeOf=(id,difficulty='driver')=>routes(difficulty)[ADVENTURE_EVENTS.findIndex(e=>e.id===id)];

test('Adventure offers five distinct events, with rising star times',()=>{
 assert.deepEqual(ADVENTURE_EVENTS.map(e=>e.id),['grand-traverse','pass-road','river-run','apple-hunt','rock-garden']);
 for(const event of ADVENTURE_EVENTS){
  assert(event.name&&event.summary&&ADVENTURE_MISSIONS[event.id]===event,event.id);assert(event.par[0]>20&&event.par[1]>event.par[0],event.id);
  assert.equal([event.chain,event.route,event.hunt].filter(Boolean).length,1,`${event.id} is a chain, an authored route or a hunt`);
  for(const id of event.chain||[])assert(missions.some(m=>m.id===id),id);
  if(!event.chain)assert(Number.isFinite(event.spawn.x)&&Number.isFinite(event.spawn.z),`${event.id} has its own start`);
 }
 const joined=routes('driver')[0],parts=ADVENTURE_EVENTS[0].chain.map(id=>adventureGates(makeGates(mountain,'driver',id)));
 assert(joined.length>parts[0].length+parts[1].length&&joined.length<=parts.reduce((sum,p)=>sum+p.length,0));
 // No leap between the joined routes that a driver could not follow.
 for(let i=1;i<joined.length;i++)assert(Math.hypot(joined[i].x-joined[i-1].x,joined[i].z-joined[i-1].z)<80,`gap before gate ${i}`);
});

test('gates are drive-through, except in the rock garden where the posts must be threaded',()=>{
 const hairpin=makeGates(mountain,'explorer','hairpin'),gates=adventureGates(hairpin);
 assert.equal(gates.length,hairpin.filter(g=>!g.reverse).length,'a reverse pocket is dropped');
 for(const gate of gates){for(const key of ['stop','range','gear','reverse','precision','headingTolerance'])assert(!(key in gate),key);assert(gate.radius>=5);}
 const garden=routeOf('rock-garden');assert(garden.filter(g=>g.precision).length>=3,'the rock garden keeps its wheel-placement gates');
 for(const gate of garden)for(const key of ['stop','range','gear','reverse'])assert(!(key in gate),key);
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

test('stars and the race clock',()=>{
 assert.deepEqual([adventureStars(30,[34,48]),adventureStars(34,[34,48]),adventureStars(40,[34,48]),adventureStars(90,[34,48])],[3,3,2,1]);
 assert.equal(formatRaceTime(75.26),'1:15.2');assert.equal(formatRaceTime(-3),'0:00.0');
});

test('apples are few, sit off the direct line on drivable ground and are collected by driving through',()=>{
 for(const [index,event] of ADVENTURE_EVENTS.entries()){
  if(event.hunt)continue;
  const gates=routes('driver')[index],spawn=event.spawn||missions.find(m=>m.id===event.chain[0]).spawn||play.spawn,apples=adventureApples(spawn,gates,play),line=[spawn,...gates];
  // A compact loop such as the river run may have no spot that is a detour from every leg.
  assert(apples.length>=(event.route?0:2)&&apples.length<=7,`${event.id}: ${apples.length} apples`);if(!apples.length)continue;
  for(const apple of apples){
   let nearest=Infinity;for(let i=1;i<line.length;i++){const a=line[i-1],b=line[i],dx=b.x-a.x,dz=b.z-a.z,t=Math.max(0,Math.min(1,((apple.x-a.x)*dx+(apple.z-a.z)*dz)/(dx*dx+dz*dz||1)));nearest=Math.min(nearest,Math.hypot(apple.x-a.x-dx*t,apple.z-a.z-dz*t));}
   assert(nearest>3.5,`${event.id}: an apple sits on the racing line`);assert(play.contains(apple.x,apple.z,14));assert(Number.isFinite(apple.y));
   for(const o of play.obstacles)assert(Math.hypot(o.x-apple.x,o.z-apple.z)>(o.radius||1),'an apple is not inside a rock');
  }
  const taken=new Set(),state={x:apples[0].x,z:apples[0].z,y:apples[0].y};
  assert.deepEqual(collectApples(state,apples,taken),[0]);taken.add(0);assert.deepEqual(collectApples(state,apples,taken),[]);
  assert.deepEqual(collectApples({...state,y:apples[0].y+20},apples,new Set()),[],'not collected from a bridge far above');
 }
 assert.equal(ADVENTURE.appleBonus,2);
});

test('the river run uses graded fords and the hunt spreads apples over both banks',()=>{
 const run=routeOf('river-run'),wet=run.filter(g=>play.waterSurface(g.x,g.z)!==null);
 assert(wet.length>=4,'several checkpoints sit in the stream');assert.equal(run.at(-1).x,60);
 for(const z of SECTION_FORDS){
  const steepest=(world,from,to)=>{let most=0;for(let x=from;x<to;x+=2)most=Math.max(most,Math.abs(world.height(x+2,z)-world.height(x,z)));return most;},centre=sectionRiverCentre(z);
  assert(steepest(play,centre-22,centre)<.75,`west bank of the ford at z=${z} is a gentle ramp`);
  assert(play.height(centre+14,z)<sim.height(centre+14,z)-.3&&play.height(centre+16,z)<sim.height(centre+16,z)-.3,`the wall at the top of the east bank is cut back at z=${z}`);
  assert(Math.abs(play.height(centre+19,z)-sim.height(centre+19,z))<.05,'the riverside lane is not undercut');
  assert(!play.sectionProps.some(p=>p.id.startsWith('section-bank')&&Math.abs(p.z-z)<4),'no bank rocks block a ford');
 }
 assert(play.sceneryObstacles.some(o=>o.ghost)&&!sim.sceneryObstacles.some(o=>o.ghost),'marker posts are pass-through only in the play world');
 const hunt=ADVENTURE_MISSIONS['apple-hunt'].hunt,apples=huntApples(play,hunt);
 assert.equal(apples.length,hunt.count);assert.deepEqual(huntApples(play,hunt),apples,'the same scatter every run');
 assert(apples.some(a=>a.x<12)&&apples.some(a=>a.x>32),'apples lie on both banks');
 for(const [i,a] of apples.entries()){assert(!(a.x>hunt.avoid[0]&&a.x<hunt.avoid[1]&&a.z>hunt.avoid[2]&&a.z<hunt.avoid[3]));for(const b of apples.slice(i+1))assert(Math.hypot(a.x-b.x,a.z-b.z)>=14);}
 assert.deepEqual(adventureRoute(ADVENTURE_MISSIONS['apple-hunt'],()=>[]),[]);
 const taken=new Set([0]);assert.notEqual(nearestApple(apples[0],apples,taken),apples[0]);assert.equal(nearestApple(apples[1],apples,taken),apples[1]);
 assert.equal(nearestApple(apples[0],apples,new Set(apples.keys())),null);
});

test('recover returns to a recent safe position, not the start',()=>{
 const crumbs=new Breadcrumbs(),safe={wheelContacts:[true,true,true,true],roll:0,pitch:0,wading:0,speed:6,yaw:.3};
 for(let i=0;i<=20;i++)crumbs.add({...safe,x:i*3,z:0,elapsed:i*.5});
 crumbs.add({...safe,x:63,z:0,elapsed:10.5,roll:1.2});crumbs.add({...safe,x:66,z:0,elapsed:11,wheelContacts:[true,false,true,true]});crumbs.add({...safe,x:66,z:0,elapsed:11.5,speed:0});
 const point=crumbs.back(11.6);assert(point.x<=60&&point.x>=48,`recovered at x=${point.x}`);assert.equal(point.yaw,.3);
 assert(crumbs.back(11.6).x<=point.x,'repeated recoveries never move forward');
 crumbs.reset();assert.equal(crumbs.back(5),null);
});

test('the stuck camera frames the airborne wheel, otherwise the most compressed corner',()=>{
 assert.equal(stuckWheel({wheelContacts:[true,true,false,true],suspension:[.2,.2,.2,.2],gear:'D'}),2);
 assert.equal(stuckWheel({wheelContacts:[true,true,true,true],suspension:[.25,.11,.2,.2],gear:'D'}),1);
 assert.equal(stuckWheel({wheelContacts:[true,true,true,true],suspension:[.2,.2,.2,.2],gear:'R'}),2,'level and reversing: look at the rear');
 assert(DRIVING_CAMERAS.includes('wheels'));assert.equal(normalizeDrivingCamera('wheels'),'wheels');
});

test('the play world has fordable water and climbable rocks; the Simulator world is untouched',()=>{
 const rocks=world=>[...world.obstacles,...world.sceneryObstacles].filter(o=>o.type==='rock');
 assert(rocks(play).length>150&&rocks(play).every(o=>o.climbable&&o.height<=o.radius*.46+1e-9),'play rocks are low domes');
 assert(rocks(sim).every(o=>!o.climbable)&&rocks(sim).some(o=>o.height>o.radius*.6),'simulator rocks keep their shape');
 assert(rocks(play).length<rocks(sim).length&&rocks(play).length>rocks(sim).length-90,'only the ford bank rocks are missing');
 const river=play.river,mid=play.height(40,550+11*Math.sin(40/115));
 assert(river.minX<play.bounds.minX&&river.maxX>play.bounds.maxX,'the river runs off both edges of the map');
 assert(river.waterLevel-mid>.3&&river.waterLevel-mid<1,'the highland river is wadeable');assert.equal(sim.river.waterLevel,1.2);
 assert(!play.sceneryObstacles.some(o=>String(o.id).startsWith('river-bank-')));assert(sim.sceneryObstacles.some(o=>String(o.id).startsWith('river-bank-')));
 assert.equal(play.recoveryReason({x:22,z:160}),'');assert(sim.recoveryReason({x:22,z:160}),'the simulator river stays closed');
 const level=play.waterSurface(22,160);assert(level>play.height(22,160)&&level-play.height(22,160)<1.1);
 assert.equal(play.waterSurface(22,130),null,'no wading on the bridge deck');assert.equal(play.waterSurface(120,60),null);
});

test('Adventure power climbs harder, water drags, and a rock can be driven over',async()=>{
 const school=makeWorld(COURSES[0],'explorer');
 const sprint=async(adventure,drag=0)=>{const state=createVehicle();Object.assign(state,{x:-60,z:60});const engine=await createRigidVehicle(school,state);state.parking=false;state.gear='D';state.range='4H';state.extraDrag=drag;
  for(let i=0;i<150;i++){const input={steer:0,throttle:1,brake:0};engine.step(adventure?adventureDrive(state,input,school.surface(state.x,state.z)):input);}
  engine.dispose();return state.speed;};
 const stock=await sprint(false),boosted=await sprint(true),wading=await sprint(true,1);
 assert(boosted>stock*1.25,`adventure ${boosted.toFixed(1)} m/s vs stock ${stock.toFixed(1)} m/s`);assert(wading<boosted*.75,`wading ${wading.toFixed(1)} m/s vs dry ${boosted.toFixed(1)} m/s`);
 // Flat ground with one climbable rock straight ahead.
 const flat={bounds:{minX:-40,maxX:40,minZ:-40,maxZ:40},height:()=>0,surface:()=>'loose',obstacles:[{id:'dome',type:'rock',x:.7,z:12,y:0,radius:1.6,height:.7,climbable:true}]};
 const state=createVehicle();Object.assign(state,{x:0,z:0,yaw:0});const engine=await createRigidVehicle(flat,state);let highest=0;
 for(let i=0;i<60*8&&state.z<20;i++){engine.step(adventureDrive(state,{steer:0,throttle:.6,brake:0},'loose'));highest=Math.max(highest,state.y);}
 engine.dispose();assert(state.z>=18,`the car crossed the rock (reached z=${state.z.toFixed(1)})`);assert(highest>.12,'and rode up over it');assert(Math.abs(state.roll)<1);
});

test('the pass road winds and climbs more, within drivable grades',()=>{
 const [gravel,paved]=sim.mountainExtension.roads;
 assert(gravel.points.at(-1).height-gravel.points[0].height>60,'the gravel climb gains over 60 m');assert.equal(MOUNTAIN_RELIEF>1.2,true);
 for(const road of [gravel,paved]){let turning=0;const p=road.points;for(let i=4;i<p.length-4;i+=4){const a=Math.atan2(p[i].x-p[i-4].x,p[i].z-p[i-4].z),b=Math.atan2(p[i+4].x-p[i].x,p[i+4].z-p[i].z);turning+=Math.abs(Math.atan2(Math.sin(b-a),Math.cos(b-a)));}
  assert(turning>(road.kind==='gravel'?7:5),`${road.kind} turns ${turning.toFixed(1)} rad in total`);}
 assert.equal(MOUNTAIN_ROADS[0].points[0].x,-6);assert.equal(MOUNTAIN_ROADS[0].points[0].z,130,'the climb still starts at the bridge exit');
});

test('rendering blends physics poses and never sweeps across a recovery',()=>{
 const a={x:0,y:1,z:0,yaw:3.1,steer:0,quaternion:{x:0,y:0,z:0,w:1},wheelCenters:[{x:1,y:0,z:1}],wheelRotations:[0],wheelHeights:[0],speed:10},b={...a,x:1,y:2,z:0,yaw:-3.1,quaternion:{x:0,y:.1,z:0,w:.995},wheelCenters:[{x:2,y:0,z:1}],wheelRotations:[1],wheelHeights:[1]};
 const previous=capturePose(a),half=blendPose(previous,b,.5);
 assert.equal(half.x,.5);assert.equal(half.y,1.5);assert.equal(half.wheelCenters[0].x,1.5);assert.equal(half.wheelRotations[0],.5);assert.equal(half.speed,10);
 assert(Math.abs(Math.abs(half.yaw)-Math.PI)<.05,'yaw takes the short way round');assert(Math.abs(Math.hypot(half.quaternion.x,half.quaternion.y,half.quaternion.z,half.quaternion.w)-1)<1e-9);
 assert.equal(blendPose(previous,b,1),b);assert.equal(blendPose(null,b,.5),b);assert.equal(blendPose(previous,{...b,x:50},.5).x,50);
 a.wheelCenters[0].x=99;assert.equal(previous.wheelCenters[0].x,1,'a captured pose is a copy');
});

test('terrain heights are computed once and shared, and follow a replaced height function',()=>{
 let calls=0;const world={height:(x,z)=>{calls++;return x+z*10;}},bounds={minX:0,maxX:4,minZ:0,maxZ:2};
 const first=gridHeights(world,bounds,4,2);assert.equal(calls,15);assert.equal(first[1*5+3],3+10);
 assert.equal(gridHeights(world,bounds,4,2),first);assert.equal(calls,15);
 gridHeights(world,bounds,2,2);assert.equal(calls,24);
 world.height=()=>7;assert.equal(gridHeights(world,bounds,4,2)[0],7);
});

test('the engine is quieter and darker, and water throws spray',()=>{
 assert(DEFAULT_MIX.vehicle<.5&&DEFAULT_MIX.master<=.6);
 const flat=audioParameters({rpm:4000,speed:15,throttle:1});assert(flat.engine<.2&&flat.cutoff<=1500);
 assert(dustRate('water',6,0)>dustRate('loose',6,0));assert.equal(dustRate('water',0,0),0);
});

test('Himachal roadside landmarks stand clear of every route',()=>{
 const plan=himachalLandmarkPlan();assert(plan.flags.length>=4&&plan.chortens.length>=2&&plan.milestones.length>=6);
 const obstacles=himachalLandmarkObstacles(()=>3);assert.equal(obstacles.length,plan.chortens.length);assert(obstacles.every(o=>o.type==='cylinder'&&o.y===3&&o.radius>1));
 for(const difficulty of ['explorer','driver','expert'])for(const route of routes(difficulty))for(const gate of route)for(const chorten of plan.chortens)assert(Math.hypot(gate.x-chorten.x,gate.z-chorten.z)>7,`${chorten.id} near a ${difficulty} gate`);
 assert(sim.sceneryObstacles.some(o=>o.id==='chorten-pass'));
 assert(!makeWorld(COURSES.find(c=>c.id==='sand'),'explorer').sceneryObstacles.some(o=>String(o.id).startsWith('chorten')));
});

test('loading starts the model early, defers scenery that is not needed to drive, and can start unattended',()=>{
 const game=read('src/trail-game.js'),scene=read('src/trail/scene.js'),environment=read('src/trail/environment.js'),html=read('game.html');
 assert.match(html,/link\.rel='preload';link\.as='fetch';link\.crossOrigin='anonymous';link\.href='assets\/models\/jimny-'\+\(short\?'swb':'lwb'\)\+'-blender\.glb\.gz\?v='\+hashes\[short\?'3door':'5door'\]/,'the preload URL matches the one the loader requests');
 assert(html.indexOf('assets/visual-release.js')<html.indexOf("link.rel='preload'"),'the model hashes are loaded before the preload script runs');
 assert.match(game,/view\.setWorld\(world,gates,\{deferDecor:true\}\)/);assert.match(game,/view\.setWorld\(world,freeRoam\?\[\]:gates\);view\.finishWorld\(\);/,'nothing is still missing once driving starts');
 assert.match(scene,/finishWorld\(\{all=true\}=\{\}\)/);assert.match(environment,/if\(options\.deferDecor\)parent\.userData\.pendingDecor=decor;else\{parent\.userData\.pendingDecor=\[\];decor\.forEach\(step=>step\(\)\);\}/);
 assert.match(environment,/warmGround\.set\(world,groundGeometry\(world,world\.bounds/);assert.match(environment,/warmGround\.get\(world\)\|\|groundGeometry\(/);
 assert.match(game,/await Promise\.race\(\[setSound\(soundWanted\),new Promise\(resolve=>setTimeout\(resolve,700\)\)\]\);/,'a held audio context cannot stall an unattended start');
 assert.match(game,/const unattended=\$\('autoStart'\)\.checked;/);assert.match(game,/disabled=!sceneReady\|\|loading/);
});

test('Adventure is wired as the Himachal default without leaking into other courses',()=>{
 const game=read('src/trail-game.js'),scene=read('src/trail/scene.js'),css=read('assets/drive-controls.css');
 assert.match(game,/adventure=course\.id==='mountain'&&driveStyle==='adventure'/);
 assert.match(game,/if\(countdown>0\)\{[\s\S]{0,260}state\.parking=true/,'the car is held during the countdown');
 assert.match(game,/\}else input=adventureDrive\(state,input,world\.surface\(state\.x,state\.z\)\);/);
 assert.match(game,/if\(adventure\)\{finishAdventure\(\);return;\}/);assert.match(game,/location\.hash!=='#lessons'\)\{selected=COURSES\.find\(c=>c\.id==='mountain'\)/);
 assert.match(game,/timeTrialActive=!adventure&&/);assert.match(game,/makeWorld\(course,difficulty,\{adventure:nextAdventure\}\)/);assert.match(game,/&&!!world\.openWater===nextAdventure/);
 assert.match(game,/const crumb=adventure\|\|freeRoam\?crumbs\.back\(state\.elapsed\):null/);assert.match(game,/view\.render\(running\?blendPose\(previousPose,state,accumulator\*60\):state/);
 assert.match(game,/const review=freeRoam&&/,'the scenery review start is limited to free roam');
 assert.match(game,/if\(!freeRoam&&!hunt\)\{const status=adventure\?/);assert.match(game,/if\(hunt&&countdown<=0&&tokens\.length&&takenTokens\.size===tokens\.length\)\{finish\(\);return;\}/);
 assert.match(game,/view\.setTimeOfDay\(skyMode\(\)\)/);assert.match(scene,/lamp\.intensity=night\?270:dusk\?70:0/);assert.match(scene,/roadWash\.intensity=night\?2\.4:dusk\?\.45:0/,'a road wash carries the light well ahead at night');assert.match(scene,/new T\.SpotLight\('#fff0d2',0,0,\.52,\.8,1\.5\)/,'headlights fall off slowly enough to light the track well ahead');
 assert.match(scene,/chaseYaw\+=Math\.atan2\(Math\.sin\(state\.yaw-chaseYaw\)/);assert.match(scene,/if\(course\.id==='mountain'\)worldRoot\.add\(createHimachalLandmarks\(world\)\)/);
 assert.match(scene,/setTimeOfDay\(mode\)\{night=mode==='night';dusk=mode==='dusk'/);assert.match(read('src/trail/environment.js'),/parent\.add\(boundarySkirt\(world\)\)/);
 assert.match(css,/#game\[data-style=adventure\] :is\(\.drive-controls,\.key-hint\)\{display:none\}/);
 assert.doesNotMatch(read('src/trail/adventure.js'),/from '(three|@dimforge)/,'the Adventure rules stay renderer- and solver-free');
});
