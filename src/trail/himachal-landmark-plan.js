import {HIMACHAL_SECTION,SECTION_FORDS,sectionRiverCentre} from './himachal-section.js';
import {MOUNTAIN_ROADS} from './himachal-mountain.js';

// Roadside details typical of Himachal's high roads: prayer-flag lines over
// the track, whitewashed chortens and yellow-capped distance stones. Positions
// are fictional and sit beside the marked routes, not on a mapped road.
const pointAt=(points,s)=>{let i=points.findIndex(p=>p.s>=s);if(i<1)i=1;const a=points[i-1],b=points[i];return {x:b.x,z:b.z,yaw:Math.atan2(b.x-a.x,b.z-a.z)};};
const beside=(p,distance)=>({x:p.x+Math.cos(p.yaw)*distance,z:p.z-Math.sin(p.yaw)*distance});
let cached;
export function himachalLandmarkPlan(){
  if(cached)return cached;
  const [gravel,paved]=MOUNTAIN_ROADS.map(road=>road.points),climb=gravel.at(-1).s,drop=paved.at(-1).s,pass=pointAt(gravel,climb-4),lookout={...HIMACHAL_SECTION.lookout,yaw:0},bridge=HIMACHAL_SECTION.bridge;
  const flags=[
    {id:'flags-lookout',...lookout,z:lookout.z-7,span:13},
    {id:'flags-bridge',x:bridge.x-bridge.length/2-5,z:bridge.z,yaw:-Math.PI/2,span:12},
    {id:'flags-climb',...pointAt(gravel,climb*.48),span:13},
    {id:'flags-pass',...pass,span:15},
    {id:'flags-pass-2',...pointAt(gravel,climb-22),span:14}
  ].map(line=>({height:5.2,...line}));
  const chortens=[
    {id:'chorten-lookout',...beside(lookout,-10),scale:1},
    {id:'chorten-pass',...beside(pass,10),scale:1.25},
    {id:'chorten-bridge',...beside({x:bridge.x-bridge.length/2-9,z:bridge.z,yaw:-Math.PI/2},-9),scale:.85}
  ];
  const milestones=[];
  for(let s=90;s<climb-40;s+=130){const p=pointAt(gravel,s);milestones.push({id:`stone-climb-${milestones.length}`,...beside(p,4.6),yaw:p.yaw,label:'PASS',value:`${((climb-s)/1000).toFixed(1)} km`});}
  for(let s=110;s<drop-40;s+=160){const p=pointAt(paved,s);milestones.push({id:`stone-road-${milestones.length}`,...beside(p,4.9),yaw:p.yaw,label:'VALLEY',value:`${((drop-s)/1000).toFixed(1)} km`});}
  return cached=Object.freeze({flags:Object.freeze(flags),chortens:Object.freeze(chortens),milestones:Object.freeze(milestones)});
}
// Marker stones on both banks of each ford. They exist only in the play world, where the fords do.
export const fordMarkers=()=>SECTION_FORDS.flatMap(z=>[-1,1].map(side=>({id:`stone-ford-${z}-${side}`,x:sectionRiverCentre(z)+side*19,z:z-8,yaw:0,label:'FORD',value:'0.8 m'})));
// Only the chortens are solid; flag poles and distance stones are too slight to stop a car fairly.
export function himachalLandmarkObstacles(height){
  return himachalLandmarkPlan().chortens.map(c=>({id:c.id,type:'cylinder',x:c.x,z:c.z,y:height(c.x,c.z),radius:1.45*c.scale,height:3.4*c.scale}));
}
