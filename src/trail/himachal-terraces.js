// Shared heightfield geology, not decorative rocks placed in a wheel path.
// Render the same world.height samples used by Rapier. Bounds are deliberately
// local: this does not remove or shrink any of the surrounding roaming basin.
const clamp=v=>Math.max(0,Math.min(1,v));
const smooth=v=>{const t=clamp(v);return t*t*(3-2*t);};
export const HIMACHAL_TERRACE_BOUNDS=Object.freeze({minX:48,maxX:82,minZ:110,maxZ:187});
// Offset, along, half-width, half-depth, exposed height, rotation. Alternating
// irregular groups deliberately do not mirror either side of the trail.
const islands=Object.freeze([
 [-7.3,118.5,4.1,3.2,.88,-.28], [7.8,129,3.6,4.0,1.04,.46],
 [-8.0,141.5,4.0,3.4,1.12,.36], [6.4,153.5,3.0,3.7,.75,-.42],
 [9.1,163,3.0,3.1,.95,.20], [-7.0,170,3.7,4.1,1.06,-.49],
 [7.4,181.5,3.9,2.5,.91,.31]
]);
const exposures=Object.freeze([[-1.6,117,2.7,1.3],[1.3,126,2.6,1.5],[-.6,140,3.2,1.8],[1.7,154,2.4,1.1],[-1.2,168,2.8,1.7],[.6,178,3.1,1.3]]);

/** Clearance is measured to ALL missions at the active difficulty, including
 * lookout/descent, not the unused lines belonging to other difficulties.
 * The current wheel/turning corridor is unchanged for its full 6.4m width. */
export function sectionTerraceField(x,z,lane=65,routeClearance=Infinity){
 if(!Number.isFinite(lane)||x<lane-12||x>lane+12||z<110||z>187)return {height:0,stone:0};
 const lateral=Math.abs(x-lane),protectedRoad=smooth((routeClearance-3.2)/1.6);
 let height=0,stone=0;
 // Mineral exposures are irregular patches, not full-width transverse bands.
 // They reveal existing ground, never add extra steps under the tyres.
 for(const [ox,cz,rx,rz]of exposures){
  const u=(x-lane-ox)/rx,v=(z-cz-(x-lane)*.19)/rz;
  const edge=Math.hypot(u,v)+.12*Math.sin(x*1.6+z*.73);
  stone=Math.max(stone,(1-smooth((edge-.28)/.72))*.70);
 }
 for(const [ox,cz,rx,rz,crest,angle]of islands){
  const px=x-lane-ox,pz=z-cz,c=Math.cos(angle),s=Math.sin(angle);
  const u=(px*c+pz*s)/rx,v=(-px*s+pz*c)/rz;
  // Three oblique fracture planes clip a rounded mass. This avoids the long,
  // axis-aligned flat caps and parallel walls of the previous mirrored bands.
  const shape=Math.max(Math.hypot(u*.88,v*.92),u*.86+v*.28,-u*.74+v*.53,-v*.94-u*.21)
   +.045*Math.sin(x*1.71+z*.53)+.03*Math.sin(z*1.37-x*.21);
  const footprint=1-smooth((shape-.38)/.62),inner=smooth((lateral-3.3)/1.05);
  const topTilt=clamp(.88+u*.08-v*.10);
  const h=crest*footprint*topTilt*inner*protectedRoad;
  height=Math.max(height,h);
  stone=Math.max(stone,footprint*inner*protectedRoad);
 }
 return {height,stone:clamp(stone)};
}
export function sectionTerraceHeight(x,z,lane,routeClearance){return sectionTerraceField(x,z,lane,routeClearance).height;}
export function sectionTerraceStone(x,z,lane,routeClearance){return sectionTerraceField(x,z,lane,routeClearance).stone;}
