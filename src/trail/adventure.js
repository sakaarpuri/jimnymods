import {gateReached} from './courses.js';

// Adventure driving for the Himachal trails: an arcade layer over the same
// rigid-body world. It automates the selector and transfer lever, scales
// engine force and tyre grip, and scores by time. It is deliberately not a
// representation of a stock Jimny; Simulator style keeps the guarded controls.
export const ADVENTURE=Object.freeze({power:1.75,grip:1.15,recoverPenalty:5,tokenBonus:.5,tokenSpacing:22,tokenRadius:2.6});
// Himachal-inspired names. The trails remain fictional closed courses.
// par = [three-star, two-star] seconds, set from scripts/adventure-times.mjs: about 1.2× and 1.65× the
// autopilot's time at 40 km/h cruise after its token bonus. They are not human-tested.
export const ADVENTURE_MISSIONS=Object.freeze({
 'rock-river-technical':{name:'Nallah boulder climb',summary:'Charge the stone steps beside the stream, round the lookout and race back over the timber bridge. Inspired by the nallah crossings on the Gramphu–Batal track.',par:[34,48]},
 'rock-river-bypass':{name:'Riverside run',summary:'The fast line: sweep up the wide lane, round the lookout and finish across the bridge. Inspired by the Chandra valley tracks.',par:[38,54]},
 lookout:{name:'Lookout dash',summary:'Pick your own way up through the pines to the viewpoint. Inspired by the meadows above Hampta.',par:[44,62]},
 'cross-axle':{name:'Rock garden scramble',summary:'Keep your momentum over the offset rock steps. Inspired by the boulder beds of the Chandra river.',par:[29,42]},
 hairpin:{name:'Shelf-road hairpins',summary:'Climb the narrow shelf and swing round the hairpin. Inspired by the Sach Pass road.',par:[36,52]},
 descent:{name:'Ridge to valley drop',summary:'Up to the ridge, then all the way down to the valley floor. Inspired by the Jalori Pass descent.',par:[50,72]},
 'mountain-ascent':{name:'Switchbacks to the pass',summary:'The long gravel climb: traverses and switchbacks to the top. Inspired by the road up to Kunzum La.',par:[90,128]},
 'grand-traverse':{name:'Himachal grand traverse',summary:'The whole expedition in one run: riverside climb, timber bridge, switchbacks to the pass and the high road back down.',par:[180,250]},
 'mountain-tarmac':{name:'High-road downhill',summary:'Flat out down the paved mountain road. Brake before the bends. Inspired by the Rohtang road.',par:[56,80]}
});
// Adventure-only events built by joining existing routes end to end.
export const ADVENTURE_EVENTS=Object.freeze([
 {id:'grand-traverse',adventureOnly:true,chain:['rock-river-bypass','mountain-ascent','mountain-tarmac'],name:'Himachal grand traverse',summary:'The whole expedition in one run: riverside climb, timber bridge, switchbacks to the pass and the high road back down.',skill:'Endurance',mode:'4H'}
]);
export const adventureMission=mission=>ADVENTURE_MISSIONS[mission?.id]||null;
// Checkpoints become simple drive-through gates: no stop, range, gear or reverse conditions.
export function adventureGates(gates){
  const kept=gates.filter((gate,index)=>!gate.reverse||index===gates.length-1);
  return kept.map((gate,index)=>{const {stop,range,gear,reverse,precision,depth,headingTolerance,minSpeed,maxSpeed,...rest}=gate;return {...rest,radius:Math.max(gate.radius||4,index===kept.length-1?5.5:5)};});
}
// Gates for a mission or a chained event. makeGates is passed in so this module stays free of world state.
export function adventureRoute(mission,gatesFor){
  const parts=(mission.chain||[mission.id]).map(id=>adventureGates(gatesFor(id)));
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
// Bonus tokens strung along the route, alternating either side of the direct line.
export function adventureTokens(spawn,gates,{spacing=ADVENTURE.tokenSpacing,offset=2.2}={}){
  const points=[{x:spawn.x,z:spawn.z},...gates],tokens=[];let carried=spacing*.6,side=1;
  for(let i=1;i<points.length;i++){
    const a=points[i-1],b=points[i],length=Math.hypot(b.x-a.x,b.z-a.z);if(length<1)continue;
    const dx=(b.x-a.x)/length,dz=(b.z-a.z)/length;let at=spacing-carried;
    for(;at<length;at+=spacing){
      // Keep clear of the gates themselves so a token never hides inside the posts.
      if(at<4||length-at<4)continue;
      tokens.push({x:a.x+dx*at+dz*offset*side,z:a.z+dz*at-dx*offset*side});side=-side;
    }
    carried=length-(at-spacing);
  }
  return tokens;
}
export function collectTokens(state,tokens,taken,radius=ADVENTURE.tokenRadius){
  const found=[];
  tokens.forEach((token,index)=>{if(!taken.has(index)&&Math.hypot(state.x-token.x,state.z-token.z)<radius&&(token.y===undefined||Math.abs(state.y-token.y)<3.5))found.push(index);});
  return found;
}
// Which wheel the stuck camera should frame: an airborne wheel, else the most compressed corner.
export function stuckWheel(state){
  const airborne=state.wheelContacts?.findIndex(contact=>contact===false);
  if(airborne>=0)return airborne;
  const travel=state.suspension||[];let best=state.gear==='R'?2:0;
  for(let i=0;i<4;i++)if((travel[i]??1)<(travel[best]??1))best=i;
  return best;
}
