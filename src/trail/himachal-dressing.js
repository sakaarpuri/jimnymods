// Visual route shoulders share the playable section's authored lines. No
// independent obstacles or height changes are introduced by this module.
export function inHimachalSection(world,x,z){
 const b=world.himachalSection?.bounds;
 return !!b&&x>=b.minX&&x<=b.maxX&&z>=b.minZ&&z<=b.maxZ;
}
function segmentDistance(x,z,a,b){
 const dx=b[0]-a[0],dz=b[1]-a[1],t=Math.max(0,Math.min(1,((x-a[0])*dx+(z-a[1])*dz)/(dx*dx+dz*dz||1)));
 return Math.hypot(x-a[0]-dx*t,z-a[1]-dz*t);
}
export function sectionShoulderDistance(world,x,z){
 if(!inHimachalSection(world,x,z))return null;
 let distance=Infinity;
 for(const [name,authoredLine]of Object.entries(world.himachalSection.lines)){
  const lane=world.activeStoneLane??65;
  const line=name==='technical'?[[62,96],[62,108],[lane,120],[lane,151],[lane,175],[60,190]]:authoredLine;
  // The chosen challenge is a single trail. Its soil edge wanders slightly;
  // inactive difficulty lines return to the same grass shoulder as the hillside.
  const halfWidth=name==='technical'?2.8+Math.sin(z*.19)*.18+Math.sin(x*.37+z*.08)*.16:name==='bypass'?2.7:3.1;
  for(let i=1;i<line.length;i++)distance=Math.min(distance,segmentDistance(x,z,line[i-1],line[i])-halfWidth);
 }
 return distance;
}
export function sectionGreenWeight(world,x,z){
 const d=sectionShoulderDistance(world,x,z);if(d===null)return 0;
 const b=world.himachalSection.bounds,smooth=n=>{const t=Math.max(0,Math.min(1,n));return t*t*(3-2*t);};
 const edge=Math.min(x-b.minX,b.maxX-x,z-b.minZ,b.maxZ-z);
 return smooth(d/2.7)*smooth(edge/4);
}
export const SECTION_FOREST_STANDS=Object.freeze([
 [-7,104],[-5,151],[1,180],[5,202],[101,100],[106,135],[103,174],[86,207]
].map(Object.freeze));

const smooth=n=>{const t=Math.max(0,Math.min(1,n));return t*t*(3-2*t);};
const hash=(x,z)=>{const n=Math.sin(x*127.1+z*311.7)*43758.5453;return n-Math.floor(n);};
// Shaped shoulders give the section a geological enclosure. The same sampled
// height reaches Rapier and the ground mesh. Mission corridors are unmodified.
export function sectionShoulderRelief(x,z,routeDistance){
 const fade=smooth((x-32)/7)*smooth((112-x)/7)*smooth((z-94)/9)*smooth((205-z)/10)*smooth((routeDistance-5)/4);
 if(!fade)return 0;
 const mound=(cx,cz,sx,sz,h)=>h*Math.exp(-(((x-cx)/sx)**2)-((z-cz)/sz)**2);
 const mass=mound(84,139,12,24,2.4)+mound(88,178,18,19,3)+mound(53,150,5,24,1.2)+mound(76,197,12,10,1.4);
 // Unequal strata, not a smooth green bank. Rounded transitions avoid seams.
 const height=mass*(.91+.09*Math.sin(x*.41+z*.13)*Math.sin(z*.37));
 const level=Math.floor(height/1.25),fraction=height/1.25-level;
 return (level+smooth(fraction/.58))*1.25*fade;
}

export function sectionGeologyPlan(world){
 if(!world.himachalSection)return [];
 const rocks=[],formations=[
  [97,124,11,2.5,1.2,5],[81,140,11,2.6,1.3,6],
  [84,151,13,3.2,1.6,7],[87,161,12,3.0,1.5,7],
  [99,179,10,2.6,1.2,5],[53,162,8,1.6,.9,7],
  [53,174,8,1.6,.9,7]
 ];
 for(const [f,[cx,cz,length,size,height,count]]of formations.entries())for(let i=0;i<count;i++){
  // Follow a contour across the hillside, not a pile running straight uphill.
  // Overlapping broad scans expose one broken shelf face with irregular ends.
  const across=(i/(count-1)-.5)*length;
  const x=cx+across,z=cz+(i%3-1)*size*.44+(hash(f,i)-.5)*1.2+across*.11;
  const radius=size*(.76+hash(i,f+2)*.45);
  if(world.routeDistance(x,z)<radius+2.5)continue;
  const ys=[[x,z],[x-radius*.7,z],[x+radius*.7,z],[x,z-radius*.7],[x,z+radius*.7]].map(([px,pz])=>world.height(px,pz));
  const low=Math.min(...ys),high=Math.max(...ys);
  // A boulder scan stretched across the entire hillside height difference
  // becomes a needle-shaped crag. Keep its geological aspect ratio and seat
  // its base at the lower footprint: the uphill portion disappears into the
  // bank, exposing a connected ledge face rather than a floating shelf.
  const rockHeight=Math.min(radius*.62,height*(.78+hash(f+5,i)*.3)+(high-low)*.08);
  rocks.push({id:`section-geology-${f}-${i}`,formation:`section-${f}`,type:'rock',x,z,y:low-.18,
   radius,height:rockHeight,yaw:.28+(hash(i+10,f)-.5)*1.15});
 }
 rocks.push(...sectionCloseRockPlan(world,rocks));
 return rocks;
}

/** Low connected fractures beside the active line. Each group is authored as
 * two or three intersecting fragments, never a vertically stacked rock pile.
 * Existing outer geology retains its all-difficulty route rules above. */
export function sectionCloseRockPlan(world,outer=[]){
 const lane=world.activeStoneLane,clearance=world.sectionTerraceClearance;
 if(!Number.isFinite(lane)||!world.himachalSection||typeof clearance!=='function')return [];
 const result=[],existing=[...(world.obstacles||[]),...outer].filter(o=>o.type==='rock');
 const groups=[[1,111.5],[-1,117.5],[1,127],[-1,137.5],[1,149],[-1,160],[1,171],[-1,179]];
 for(const [group,[preferred,z0]]of groups.entries()){
  let accepted=[];
  // The lookout cuts diagonally across some shoulders; try the opposite bank
  // or a short offset, rather than placing a hidden collision on that route.
  for(const [side,dz]of [[preferred,0],[-preferred,0],[preferred,3],[-preferred,-3]]){
   const x0=(group===0?62:lane)+side*(5.0+hash(group,902)*.8),z=z0+dz;
   const members=[];
   for(let i=0;i<3;i++){
    const x=x0+(group===0?(i-1)*1.35:(i===1?.56:-.26)*side),zp=z+(group===0?(i%2)*.35:(i-1)*1.45)+(hash(i,group+81)-.5)*.4;
    const radius=1.2+hash(group+59,i)*.5,exposure=.7+hash(group+22,i)*.3;
    if(x<45||x>85||zp<110||zp>183||clearance(x,zp)<radius+2.1)continue;
    if([...existing,...result].some(o=>Math.hypot(x-o.x,zp-o.z)<radius+o.radius+.12))continue;
    const centre=world.height(x,zp),floor=Math.min(centre,...Array.from({length:8},(_,j)=>world.height(x+Math.cos(j*Math.PI/4)*radius*.7,zp+Math.sin(j*Math.PI/4)*radius*.7)));
    // The old low-floor seat consumed nearly the whole height on a slope.
    // Keep the bottom embedded, but include that buried portion in the solid
    // height so a real .65–1m fractured face remains above the centre ground.
    const y=Math.min(centre-exposure*.2,floor-.05),height=Math.min(1.4,exposure+centre-y);
    if(y+height-centre<.65)continue;
    members.push({id:`section-close-fracture-${group}-${i}`,formation:`close-fracture-${group}`,type:'rock',x,z:zp,y,radius,height,yaw:(side<0?.2:-.25)+(hash(group,i+73)-.5)*.7});
   }
   if(members.length>=2){accepted=members;break;}
  }
  result.push(...accepted);
 }
 return result;
}
