import {gateReached} from './courses.js';

// Adventure driving for the Himachal trails: an arcade layer over the same
// rigid-body world. It automates the selector and transfer lever, scales
// engine force and tyre grip, and scores by time. It is deliberately not a
// representation of a stock Jimny; Simulator style keeps the guarded controls.
export const ADVENTURE=Object.freeze({power:1.75,grip:1.15,recoverPenalty:5,appleBonus:2,appleRadius:2.8});
// Three events in one valley. Names cite Himachal areas as inspiration; the map is fictional.
// par = [three-star, two-star] seconds, set from scripts/adventure-times.mjs. They are not human-tested.
export const ADVENTURE_EVENTS=Object.freeze([
 {id:'grand-traverse',chain:['rock-river-bypass','mountain-ascent','mountain-tarmac'],name:'Himachal grand traverse',summary:'The whole expedition in one run: riverside climb, timber bridge, winding switchbacks to the prayer-flagged pass and the high road back down. Inspired by the Gramphu–Batal track and the climb to Kunzum La.',skill:'Endurance',mode:'4H',par:[205,285]},
 {id:'pass-road',chain:['mountain-ascent','mountain-tarmac'],name:'Pass road: up and over',summary:'Straight onto the mountain road: gravel switchbacks up to the pass, then flat out down the paved side. Inspired by the Rohtang road.',skill:'Road pace',mode:'4H',par:[170,235]},
 {id:'rock-garden',chain:['cross-axle'],tight:true,name:'Rock garden',summary:'Slow, technical and unforgiving: thread every pair of posts over the offset rock steps. Driving round them does not count. Inspired by the boulder beds of the Chandra river.',skill:'Wheel placement',mode:'4L',par:[65,95]}
]);
export const ADVENTURE_MISSIONS=Object.freeze(Object.fromEntries(ADVENTURE_EVENTS.map(event=>[event.id,event])));
export const adventureMission=mission=>ADVENTURE_MISSIONS[mission?.id]||null;
// Checkpoints become drive-through gates: no stop, range, gear or reverse conditions.
// A tight event keeps its wheel-placement gates, so the obstacle cannot be driven around.
export function adventureGates(gates,{tight=false}={}){
  const kept=gates.filter((gate,index)=>!gate.reverse||index===gates.length-1);
  return kept.map((gate,index)=>{
    const {stop,range,gear,reverse,precision,depth,headingTolerance,minSpeed,maxSpeed,...rest}=gate;
    if(tight&&precision)return {...rest,precision:true,depth:Math.max(depth||2.5,3)};
    return {...rest,radius:Math.max(gate.radius||4,index===kept.length-1?5.5:5)};
  });
}
// Gates for an event. makeGates is passed in so this module stays free of world state.
export function adventureRoute(mission,gatesFor){
  const parts=mission.chain.map(id=>adventureGates(gatesFor(id),mission));
  // Joining routes: drop a start gate that sits on top of the previous finish.
  return parts.flatMap((gates,index)=>index&&Math.hypot(gates[0].x-parts[index-1].at(-1).x,gates[0].z-parts[index-1].at(-1).z)<8?gates.slice(1):gates);
}
export const adventureGateReached=(state,gate)=>gateReached(state,gate);
// Arcade pedals: the brake becomes reverse once stopped, and the accelerator returns to Drive.
export function adventureDrive(state,input,surface='loose',dt=1/60){
  state.parking=false;state.powerScale=ADVENTURE.power;state.gripScale=ADVENTURE.grip;
  let throttle=input.throttle||0,brake=input.brake||0;
  if(state.gear!=='R'){
    state.gear='D';
    if(brake>.5&&throttle<.05&&state.speed<.35){state.reverseHold=(state.reverseHold||0)+dt;if(state.reverseHold>.18){state.gear='R';state.reverseHold=0;}}else state.reverseHold=0;
  }
  if(state.gear==='R'){
    if(throttle>.05&&brake<.05&&state.speed>-.35)state.gear='D';
    else [throttle,brake]=[brake,throttle];
  }
  // Automatic transfer: 2H on paved road, low range for slow steep work, otherwise 4H.
  const paved=surface==='tarmac'||surface==='wet-tarmac',speed=Math.abs(state.speed),steep=Math.abs(state.pitch||0)>.2;
  state.range=paved?'2H':state.range==='4L'?(speed>6.5||!steep&&speed>3?'4H':'4L'):(steep&&speed<2.2&&throttle>.5?'4L':'4H');
  return {...input,throttle,brake};
}
export function adventureStars(seconds,par=[90,130]){return seconds<=par[0]?3:seconds<=par[1]?2:1;}
export function formatRaceTime(seconds){const t=Math.max(0,Number.isFinite(seconds)?seconds:0),whole=Math.floor(t);return `${Math.floor(whole/60)}:${String(whole%60).padStart(2,'0')}.${Math.floor((t-whole)*10)}`;}
// A few apples per event, each a short detour off the direct line, never on it.
function appleSpot(world,x,z){
  if(world.contains&&!world.contains(x,z,14))return false;
  const ground=world.height(x,z);
  if(Math.abs(world.height(x+2,z)-world.height(x-2,z))>1.7||Math.abs(world.height(x,z+2)-world.height(x,z-2))>1.7)return false;
  for(const o of [...(world.obstacles||[]),...(world.sceneryObstacles||[])])if(Math.hypot(o.x-x,o.z-z)<(o.radius||Math.max(o.width||0,o.depth||0)/2)+2.4)return false;
  const level=world.waterSurface?.(x,z);
  return level==null||level-ground<.75;
}
export function adventureApples(spawn,gates,world,{max=7,spacing=150,offsets=[9,-9,6,-6,12,-12]}={}){
  const points=[{x:spawn.x,z:spawn.z},...gates],legs=[];let total=0;
  for(let i=1;i<points.length;i++){const a=points[i-1],b=points[i],length=Math.hypot(b.x-a.x,b.z-a.z);if(length>.5){legs.push({a,b,length,start:total});total+=length;}}
  const count=Math.max(2,Math.min(max,Math.round(total/spacing))),apples=[];
  for(let n=0;n<count;n++){
    const at=total*(n+.62)/count,leg=legs.find(l=>at<=l.start+l.length)||legs.at(-1),t=(at-leg.start)/leg.length,dx=(leg.b.x-leg.a.x)/leg.length,dz=(leg.b.z-leg.a.z)/leg.length,px=leg.a.x+(leg.b.x-leg.a.x)*t,pz=leg.a.z+(leg.b.z-leg.a.z)*t;
    for(let k=0;k<offsets.length;k++){
      const offset=offsets[(k+n)%offsets.length],x=px+dz*offset,z=pz-dx*offset;
      if(!appleSpot(world,x,z))continue;
      const ground=(world.supportHeight||world.height)(x,z),level=world.waterSurface?.(x,z);apples.push({x,z,y:level==null?ground:Math.max(ground,level)});break;
    }
  }
  return apples;
}
export function collectApples(state,apples,taken,radius=ADVENTURE.appleRadius){
  const found=[];
  apples.forEach((apple,index)=>{if(!taken.has(index)&&Math.hypot(state.x-apple.x,state.z-apple.z)<radius&&Math.abs(state.y-apple.y)<3.5)found.push(index);});
  return found;
}
// Recent safe positions, so Recover can put the car back where it got into trouble.
export class Breadcrumbs{
  constructor(){this.reset();}
  reset(){this.points=[];this.last=-Infinity;}
  add(state){
    if(state.elapsed-this.last<.5)return;
    const settled=state.wheelContacts?.every(Boolean)&&Math.abs(state.roll||0)<.45&&Math.abs(state.pitch||0)<.55&&(state.wading||0)<.45&&state.speed>1;
    if(!settled)return;
    this.last=state.elapsed;this.points.push({x:state.x,z:state.z,yaw:state.yaw,elapsed:state.elapsed});if(this.points.length>40)this.points.shift();
  }
  // The newest point at least \`age\` seconds old: far enough back to be clear of the hazard.
  back(now,age=1.6){
    for(let i=this.points.length-1;i>=0;i--)if(now-this.points[i].elapsed>=age){const point=this.points[i];this.points.length=i+1;return point;}
    return this.points[0]||null;
  }
}
// Which wheel the stuck camera should frame: an airborne wheel, else the most compressed corner.
export function stuckWheel(state){
  const airborne=state.wheelContacts?.findIndex(contact=>contact===false);
  if(airborne>=0)return airborne;
  const travel=state.suspension||[];let best=state.gear==='R'?2:0;
  for(let i=0;i<4;i++)if((travel[i]??1)<(travel[best]??1))best=i;
  return best;
}
