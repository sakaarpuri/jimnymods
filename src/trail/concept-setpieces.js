// Original authored geological groups inspired by the course composition board.
// These are solid world obstacles, not inaccessible photographic set dressing.
const fract=n=>n-Math.floor(n);
const random=(seed,n)=>fract(Math.sin(seed*19.37+n*127.1+31.7)*43758.5453);
export const CONCEPT_FORMATIONS=Object.freeze({
 mountain:[
  {id:'garden-west-entry',x:-1,z:117,angle:.3,length:13,radius:3.2,height:1.8,count:9},
  {id:'garden-west-ledge',x:-1,z:151,angle:-.15,length:17,radius:3.6,height:2.6,count:12},
  {id:'garden-west-crown',x:-5,z:184,angle:.5,length:11,radius:3.4,height:2.3,count:8},
  {id:'garden-east-ledge',x:85,z:156,angle:.1,length:15,radius:2.8,height:2.1,count:11},
  {id:'garden-east-crown',x:96,z:192,angle:-.6,length:12,radius:3.5,height:2.8,count:10},
  {id:'garden-east-entry',x:104,z:113,angle:-.3,length:11,radius:3.1,height:1.9,count:8},
  {id:'garden-inner-shoulder',x:79,z:142,angle:.1,length:11,radius:1.8,height:1.5,count:7}
 ],
 urban:[
  {id:'quarry-west-toe',x:-108,z:142,angle:.15,length:20,radius:4.2,height:2.9,count:13},
  {id:'quarry-west-bench',x:-112,z:181,angle:-.1,length:23,radius:4.5,height:3.6,count:14},
  {id:'quarry-east-toe',x:-29,z:155,angle:-.25,length:18,radius:3.6,height:2.5,count:12},
  {id:'quarry-east-bench',x:-25,z:205,angle:.3,length:24,radius:4.2,height:3.4,count:14},
  {id:'quarry-back-ledge',x:-101,z:225,angle:1.3,length:17,radius:4.4,height:3.0,count:10},
  // Small fractured toes frame the exercise at vehicle scale. Their staggered
  // footprints use the same route-safe solid placement as the larger benches.
  {id:'quarry-entry-west-rubble',x:-85,z:99,angle:.72,length:8.4,radius:1.55,height:.9,count:7},
  {id:'quarry-entry-east-rubble',x:-46,z:114,angle:-.65,length:7.6,radius:1.7,height:1.0,count:6},
  {id:'quarry-climb-west-rubble',x:-85,z:133,angle:-.4,length:9.2,radius:1.6,height:.95,count:7},
  {id:'quarry-climb-east-rubble',x:-43,z:143,angle:.55,length:8.6,radius:1.85,height:1.0,count:7}
 ],
 sand:[
  {id:'saddle-west-island',x:-156,z:183,angle:.7,length:8,radius:1.45,height:.9,count:9},
  {id:'saddle-east-island',x:-78,z:205,angle:.2,length:11,radius:1.7,height:1.05,count:11},
  {id:'saddle-west-exit',x:-126,z:240,angle:-.5,length:10,radius:1.8,height:1.15,count:10}
 ]
});
for(const formations of Object.values(CONCEPT_FORMATIONS)){for(const p of formations)Object.freeze(p);Object.freeze(formations);}

export function conceptObstacles(course,height,routeDistance){
 if(!['mountain','urban','sand'].includes(course.id))return [];
 const obstacles=[];
 for(const [group,formation]of CONCEPT_FORMATIONS[course.id].entries()){
  const seed=group+course.id.length*19,c=Math.cos(formation.angle),s=Math.sin(formation.angle);
  for(let i=0;i<formation.count;i++){
   // Unequal overlapping blocks follow a fractured ledge. Three cross-ledger
   // offsets add depth and rubble feet, instead of an evenly spaced dotted row.
   const t=(i/(formation.count-1)-.5)*formation.length+(random(seed,i+2)-.5)*2.4;
   const across=(i%3-1)*formation.radius*.55+(random(seed,i+29)-.5)*1.3;
   const x=formation.x+c*across+s*t,z=formation.z-s*across+c*t;
   const radius=formation.radius*(.69+random(seed,i+43)*.46);
   if(routeDistance(x,z)<radius+4.5)continue;
   const ground=[height(x,z),height(x+radius*.6,z),height(x-radius*.6,z),height(x,z+radius*.6),height(x,z-radius*.6)];
   const floor=Math.min(...ground),relief=Math.max(...ground)-floor;
   // Embed every mass at the low side of its footprint; the top remains clear
   // of the high side. This avoids floating rocks on sloped quarry shelves.
   const mountain=course.id==='mountain';
   // A sloping footprint must not stretch a small scanned boulder into an
   // upright needle. Mountain outcrops are shallow overlapping bedrock ledges:
   // embed their lower portion in the local bank instead of matching its full
   // height difference. Footprints and every existing route clearance remain
   // unchanged; visual and physical rock heights still share this one plan.
   const h=mountain?Math.min(radius*.9,formation.height*(.62+random(seed,i+61)*.3)+relief*.16)
    :formation.height*(.68+random(seed,i+61)*.58)+relief*.72;
   obstacles.push({id:`concept-${formation.id}-${i}`,formation:formation.id,type:'rock',x,z,
    y:mountain?Math.max(floor-.16,ground[0]-h*.35):floor-.16,radius,height:h,yaw:formation.angle+(random(seed,i+83)-.5)*1.2});
  }
 }
 return obstacles;
}
