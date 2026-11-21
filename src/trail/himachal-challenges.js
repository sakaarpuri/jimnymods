import {MOUNTAIN_ROADS} from './himachal-mountain.js';

const gravel = MOUNTAIN_ROADS.find(road => road.kind === 'gravel').points;

// Distances run uphill along the existing road. A negative offset is the cut bank.
export function station(distance, offset = 0) {
  let lo = 1, hi = gravel.length - 1;
  while (lo < hi) {
    const mid = (lo + hi) >>> 1;
    if (gravel[mid].s < distance) lo = mid + 1;
    else hi = mid;
  }
  const a = gravel[lo - 1], b = gravel[lo];
  const fraction = Math.max(0, Math.min(1, (distance - a.s) / (b.s - a.s)));
  const heading = Math.atan2(b.x - a.x, b.z - a.z);
  return {
    x: a.x + fraction * (b.x - a.x) + offset * Math.cos(heading),
    z: a.z + fraction * (b.z - a.z) - offset * Math.sin(heading),
    heading
  };
}

const roadStart = distance => {
  const p = station(distance);
  return {x:p.x, z:p.z, yaw:p.heading};
};
export const BAY = {...station(366, -4.25), length:13, width:3.8};
export const TECHNICAL_EVENTS = [
  {id:'rock-garden', name:'Rock Garden · Two Lines', skill:'Wheel placement', technical:true,
    spawn:{x:62,z:96,yaw:0}, summary:'Pick a line at the fork. Left takes the stone steps. Right follows the bank and turns tightly below the lookout. Both earn full stars.'},
  {id:'hairpin-delivery', name:'Hairpin Delivery', skill:'Cargo handling', technical:true,
    spawn:roadStart(612), summary:'Carry a case of camera equipment around the upper gravel switchbacks. Bring it to a complete stop at the ridge camp. Reverse whenever you need room.'},
  {id:'passing-place', name:'Passing Place', skill:'Reverse parking', technical:true,
    spawn:roadStart(337), summary:'Drive past the marked lay-by to meet a downhill convoy. Reverse fully into the bay, let both vehicles pass, then rejoin the shelf road.'}
];

export const rockLineNames = {steps:'Stone steps', bank:'Riverbank'};
export function challengeRoute(event, gatesFor, line = 'steps') {
  if (event.id === 'rock-garden') {
    const steps = gatesFor('rock-river-technical');
    const bank = gatesFor('rock-river-bypass');
    const entry = {...steps[0], radius:4, alternate:{x:bank[0].x,z:bank[0].z,radius:4}};
    const route = line === 'steps'
      ? steps.slice(1,4).map(g => ({x:g.x,z:g.z,radius:Math.max(1.85,g.radius),precision:true,heading:0,depth:1.8}))
      : [{x:42,z:120,radius:3.3},{x:40,z:149,radius:3.3},{x:42,z:174,radius:3.3},
         {x:42,z:187,radius:2.8},{x:49,z:195,radius:2.8}];
    return [line==='bank' ? entry.alternate : {x:entry.x,z:entry.z,radius:entry.radius,alternate:entry.alternate}, ...route,
      {x:60,z:190,radius:3.5,action:'park',hint:'Stop between the lookout markers.'}];
  }
  if (event.id === 'hairpin-delivery') {
    const end = gravel.at(-1).s;
    const gates = [];
    for (let s = 628; s < end - 10; s += 13) gates.push({...station(s),radius:3.7});
    gates.push({...station(end),radius:3,action:'park',hint:'Bring the camera case to a stop at the ridge camp.'});
    return gates;
  }
  return [
    {...station(366),radius:3.2,hint:'Remember the marked bay on your right. Continue up to the convoy.'},
    {...station(386),radius:3.1,hint:'Meet the waiting convoy on the road above the bay.'},
    {...BAY,radius:BAY.width/2,action:'reverse',hint:'Reverse into the bay and straighten up between the corner posts.'},
    {...BAY,radius:BAY.width/2,action:'yield',hint:'Hold position while both vehicles pass.'},
    {...station(386),radius:3.2,hint:'The road is clear. Rejoin the gravel and drive uphill.'},
    {...station(408),radius:3.5}
  ];
}

export function insideBay(state) {
  const dx = state.x - BAY.x, dz = state.z - BAY.z;
  const c = Math.cos(BAY.heading), s = Math.sin(BAY.heading);
  const lateral = Math.abs(dx*c - dz*s), along = Math.abs(dx*s + dz*c);
  const angle = state.yaw - BAY.heading, side = Math.abs(Math.sin(angle)), front = Math.abs(Math.cos(angle));
  const halfLength = state.body === '3door' ? 1.83 : 2.00;
  const halfWidth = .83;
  return Math.cos(angle) > .87 &&
    lateral + halfWidth*front + halfLength*side <= BAY.width/2 &&
    along + halfLength*front + halfWidth*side <= BAY.length/2;
}

export function createChallengeRun() {
  return {line:null, hardHits:0, cuts:0, lastHit:-Infinity, outsideTime:0, outside:false,
    airTime:0, fallSpeed:0, backedIn:false, convoyTime:0, motion:[]};
}

const convoySpeed = 4;
export const convoyDuration = 16;
export function convoyPose(index, time, world) {
  const distance = 401 + index*10 - convoySpeed*Math.min(time,convoyDuration);
  const p = station(distance, .3);
  const yaw=p.heading + Math.PI;
  const ground=world.height(p.x,p.z);
  const ahead=world.height(p.x+Math.sin(yaw),p.z+Math.cos(yaw));
  return {x:p.x,y:ground,z:p.z,yaw,pitch:-Math.atan(ahead-ground)};
}

export function convoyClockAt(motion,elapsed) {
  for(let i=motion.length-1;i>=0;i--){
    const segment=motion[i];
    if(elapsed>=segment.start)return Math.min(convoyDuration,segment.from+Math.min(segment.end,elapsed)-segment.start);
  }
  return 0;
}

export function chooseRockLine(state, fork) {
  if (Math.hypot(state.x-fork.x,state.z-fork.z) < fork.radius) return 'steps';
  if (Math.hypot(state.x-fork.alternate.x,state.z-fork.alternate.z) < fork.alternate.radius) return 'bank';
  return null;
}

function segmentDistance(state, a, b) {
  const dx = b.x-a.x, dz = b.z-a.z;
  const t = Math.max(0,Math.min(1, ((state.x-a.x)*dx + (state.z-a.z)*dz)/(dx*dx+dz*dz || 1)));
  return Math.hypot(state.x-a.x-t*dx,state.z-a.z-t*dz);
}

// Count an excursion once. The previous and following segments leave space to
// reverse, set up a turn, or approach a marker from a different angle.
export function updateChallenge(run, event, gates, index, state, dt) {
  const grounded = state.wheelContacts.some(Boolean);
  const landedHard = grounded && run.airTime > .18 && run.fallSpeed < -3.3;
  if (grounded) { run.airTime=0; run.fallSpeed=0; }
  else { run.airTime+=dt; run.fallSpeed=Math.min(run.fallSpeed,state.verticalSpeed||0); }
  if ((state.impact > 1.8 || landedHard) && state.elapsed-run.lastHit > .9) {
    run.hardHits++;
    run.lastHit=state.elapsed;
  }

  const goal = gates[index];
  if (event.id === 'passing-place') {
    if (goal.action === 'reverse' && !insideBay(state)) run.backedIn=false;
    if (goal.action === 'reverse' && insideBay(state) && state.gear === 'R' && state.speed < -.08) run.backedIn=true;
    if (goal.action === 'yield' && insideBay(state) && Math.abs(state.speed)<.45 && run.convoyTime<convoyDuration) {
      let stretch=run.motion.at(-1);
      if(!stretch || state.elapsed-stretch.end>dt*1.5){
        stretch={start:state.elapsed-dt,end:state.elapsed,from:run.convoyTime};
        run.motion.push(stretch);
      }
      stretch.end=state.elapsed;
      run.convoyTime=Math.min(convoyDuration,run.convoyTime+dt);
    }
    return;
  }
  if (event.id === 'rock-garden' && !run.line) return;
  const threshold = event.id==='rock-garden' && run.line==='steps' ? 3.1 : 5.2;
  let nearest=Infinity;
  for(let i=Math.max(0,index-2);i<=Math.min(gates.length-1,index+1);i++)
    nearest=Math.min(nearest,segmentDistance(state,i?gates[i-1]:event.spawn,gates[i]));
  if(nearest<=threshold){run.outsideTime=0;run.outside=false;return;}
  run.outsideTime+=dt;
  if(run.outsideTime>.65 && !run.outside){run.cuts++;run.outside=true;}
}

export function challengeGateReached(run, state, goal, positionReached) {
  if (state.wheelContacts.filter(Boolean).length < 2) return false;
  if (goal.action === 'reverse') return run.backedIn && insideBay(state) && Math.abs(state.speed)<.9;
  if (goal.action === 'yield') return run.convoyTime>=convoyDuration && insideBay(state);
  if (!positionReached) return false;
  return goal.action !== 'park' || Math.abs(state.speed)<.35;
}

export function technicalStars(run, recoveries) {
  return recoveries ? 1 : run.hardHits || run.cuts ? 2 : 3;
}

export function technicalRecord(previous, seconds, stars) {
  return {seconds:Math.min(previous?.seconds ?? Infinity,seconds),stars:Math.max(previous?.stars ?? 0,stars)};
}
