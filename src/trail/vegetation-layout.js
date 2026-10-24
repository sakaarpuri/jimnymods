// Deterministic placements shared by renderer and collision generation.
// Keep trunks away from every mission line; low groundcover is non-solid.
import {sectionWaterExclusion} from './himachal-section.js';
import {SECTION_FOREST_STANDS} from './himachal-dressing.js';
const fract=n=>n-Math.floor(n);
export const vegetationHash=(x,z)=>fract(Math.sin(x*127.1+z*311.7)*43758.5453);
export function vegetationLayout(world){
 const {course,bounds,routeDistance,height}=world,trees=[];
 if(course.theme==='urban'){
  // A tree belt beyond the closed facility replaces the old flat photo skyline.
  // All trunks are outside the playable boundary, including their canopy margin.
  for(let row=0;row<3;row++)for(let i=0;i<Math.ceil((bounds.maxX-bounds.minX)/12);i++){
   const p=i*12,offset=14+row*12,seed=vegetationHash(i,row);
   for(const [x,z]of [[bounds.minX+p,bounds.maxZ+offset],[bounds.minX-offset,bounds.minZ+p],[bounds.maxX+offset,bounds.minZ+p]])
    trees.push({id:`perimeter-${row}-${i}-${x}`,x,z,y:height(x,z),height:9+seed*7,radius:.22+seed*.12,seed,species:'pine'});
  }
  return trees;
 }
 const sand=course.theme==='sand',step=sand?38:22;
 function allowed(x,z){
  if(routeDistance(x,z)<9||Math.hypot(x,z)<24)return false;
  if(world.himachalSection&&sectionWaterExclusion(x,z))return false;
  if(world.river&&Math.abs(z-(550+11*Math.sin(x/115)))<45)return false;
  if(world.terrainElements?.some(e=>Math.hypot(x-e.x,z-e.z)<24))return false;
  if(world.obstacles?.some(o=>Math.hypot(x-o.x,z-o.z)<(o.radius||Math.max(o.width||0,o.depth||0)/2)+3))return false;
  if(world.landmarks?.some(l=>l.parts.some(p=>p.solid&&Math.hypot(x-p.x,z-p.z)<Math.hypot(p.width,p.depth)/2+3)))return false;
  return x>bounds.minX+3&&x<bounds.maxX-3&&z>bounds.minZ+3&&z<bounds.maxZ-3;
 }
 for(let gx=bounds.minX+8;gx<bounds.maxX-8;gx+=step)for(let gz=bounds.minZ+8;gz<bounds.maxZ-8;gz+=step){
  const x=gx+(vegetationHash(gx,gz)-.5)*step*(sand?.72:.38),z=gz+(vegetationHash(gz,gx+17)-.5)*step*(sand?.72:.38);
  const distance=routeDistance(x,z),r=vegetationHash(gx+93,gz);
  if(r>(sand?.16:distance<65?.72:.23)||!allowed(x,z))continue;
  // Small overlapping stands, with irregular gaps between stands. This is a
  // shared physical layout, not extra visual-only trunks without colliders.
  const count=sand?1:2+Math.floor(vegetationHash(gx+7,gz)*3);
  for(let i=0;i<count;i++){
   const angle=i*2.39996+vegetationHash(gx,gz+22)*Math.PI*2,radiusFromCentre=i===0?0:4.8+vegetationHash(gx+i,gz)*2.4;
   const tx=x+Math.sin(angle)*radiusFromCentre,tz=z+Math.cos(angle)*radiusFromCentre;
   if(!allowed(tx,tz))continue;
   const seed=vegetationHash(gx+i,gz+81),h=sand?2.6+r*5.5:8+seed*7.5,radius=sand?.12+r*.16:.17+seed*.17;
   trees.push({id:`vegetation-${gx}-${gz}-${i}`,x:tx,z:tz,y:height(tx,tz),height:h,radius,seed,species:sand?'acacia':'pine',cluster:`${gx}-${gz}`});
  }
 }
 // Near-entry framing stands use the same collision/route checks as every
 // other trunk. Their irregular spacing leaves the playable valley open.
 if(world.himachalSection)for(const [stand,[x,z]]of [...SECTION_FOREST_STANDS,[96,86],[40,84],[-10,92]].entries())for(let i=0;i<3;i++){
  const angle=i*2.39996+stand*.7,tx=x+Math.sin(angle)*4.6,tz=z+Math.cos(angle)*4.6;
  if(!allowed(tx,tz)||trees.some(t=>Math.hypot(t.x-tx,t.z-tz)<3.7))continue;
  const seed=vegetationHash(stand+43,i+31);
  trees.push({id:`section-forest-${stand}-${i}`,x:tx,z:tz,y:height(tx,tz),height:9+seed*6.5,radius:.19+seed*.14,seed,species:'pine',cluster:`section-${stand}`});
 }
 return trees;
}
