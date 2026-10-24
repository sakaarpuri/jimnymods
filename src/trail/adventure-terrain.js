// Original terrain silhouettes. The renderer and Rapier both sample world.height;
// these are driveable landforms, not backdrop props or non-colliding ramps.
const bell=(x,z,cx,cz,sx,sz)=>Math.exp(-(((x-cx)/sx)**2)-((z-cz)/sz)**2);
const smooth=n=>{const t=Math.max(0,Math.min(1,n));return t*t*(3-2*t);};
const hash=(x,z)=>{const n=Math.sin(x*127.1+z*311.7)*43758.5453;return n-Math.floor(n);};
function noise(x,z){const ix=Math.floor(x),iz=Math.floor(z),a=smooth(x-ix),b=smooth(z-iz);return (hash(ix,iz)*(1-a)+hash(ix+1,iz)*a)*(1-b)+(hash(ix,iz+1)*(1-a)+hash(ix+1,iz+1)*a)*b;}
// Authored rock placements, shared by the fine physics bed and its surface mask.
// Every line retains alternating wheel contacts, but no two rocks have the same
// footprint or timing. The inner wheel-contact edge stays narrow, while broad
// outboard caps connect the visible stones into a convincing fractured shelf.
export const MOUNTAIN_STEPS=Object.freeze([60,65,70].flatMap((lane,li)=>Array.from({length:10},(_,i)=>{
 const n=i+li*13;
 return Object.freeze({lane,x:lane+(i%2?1:-1)*(.61+hash(n,2)*.18),z:115+i*6+(hash(n,3)-.5)*1.3,
  halfWidth:1.7+hash(n,4)*.4,innerHalfWidth:.58+hash(n,4)*.18,side:i%2?1:-1,halfDepth:1.25+hash(n,5)*.45,yaw:(hash(n,6)-.5)*.38,
  height:.21+hash(n,7)*.065,chamfer:.13+hash(n,8)*.12});
})));
function stoneProfile(p,x,z){
 const dx=x-p.x,dz=z-p.z,c=Math.cos(p.yaw),s=Math.sin(p.yaw),lateral=dx*c-dz*s,u=Math.abs(lateral),v=Math.abs(dx*s+dz*c),width=lateral*p.side>=0?p.halfWidth:p.innerHalfWidth;
 // A chamfered, skewed slab rather than an ellipsoid or rectangular speed bump.
 const distance=Math.min((width-u)/.33,(p.halfDepth-v)/.6,
  (width+p.halfDepth-p.chamfer-u-v)/.7);
 // Small oblique fractures affect the widened outer cap only. The previous
 // inner approach, articulation height and tyre contact profile are retained.
 const outside=smooth((lateral*p.side-1.15)/.55);
 const fracturedCap=1-outside*.065*smooth((Math.sin(v*3.3+lateral*.7+p.z)-.2)/.8);
 return smooth(distance)*fracturedCap;
}
export function mountainStoneMask(x,z,lane=null){
 if(x<56||x>74||z<112||z>172)return 0;
 let mask=0;for(const p of MOUNTAIN_STEPS)if(lane===null||p.lane===lane)mask=Math.max(mask,stoneProfile(p,x,z));return smooth(mask*5);
}
export function mountainStepHeight(x,z,scale=1,lane=null){
 if(x<56||x>74||z<112||z>172)return 0;
 let height=0;for(const p of MOUNTAIN_STEPS)if(lane===null||p.lane===lane)height+=p.height*stoneProfile(p,x,z);return height*scale;
}
// Quantised shelves with continuous rounded risers. The small noise shifts the
// contour itself, not just its colour, making broken ledges visible in silhouette.
function terrace(h,step,riser=.24){const level=Math.floor(h/step),fraction=h/step-level;return (level+smooth(fraction/riser))*step;}
export const DUNE_RIDGES=Object.freeze([
 {x:-180,z:135,yaw:-.28,length:74,width:25,height:4.2},
 {x:-235,z:215,yaw:.36,length:95,width:29,height:6.3},
 {x:12,z:295,yaw:-.38,length:88,width:27,height:5.4},
 {x:110,z:365,yaw:.24,length:96,width:31,height:6.8},
 {x:-145,z:385,yaw:-.15,length:106,width:28,height:6.1}
].map(Object.freeze));
export function offRouteDunes(x,z,routeDistance){
 const protectedLine=smooth((routeDistance-9)/25);if(!protectedLine)return 0;
 let h=0;for(const p of DUNE_RIDGES){
  const dx=x-p.x,dz=z-p.z,c=Math.cos(p.yaw),s=Math.sin(p.yaw),along=dx*c-dz*s;
  const across=dx*s+dz*c+(noise(along*.018,p.z*.01)-.5)*16;
  const width=p.width*(across<0?1.35:.85);
  h+=p.height*Math.exp(-((along/p.length)**4)-((across/width)**2));
 }return h*protectedLine;
}
export function articulationBedRelief(course,x,z){
 if(course.id==='custom'||!['mountain','urban'].includes(course.theme))return 0;
 const b=course.theme==='urban'?[-74,-56,82,117]:[56,74,108,181];
 const fade=n=>smooth(n/2);return .4*fade(x-b[0])*fade(b[1]-x)*fade(z-b[2])*fade(b[3]-z);
}
export function coarseBedRelief(course,x,z){
 const articulation=articulationBedRelief(course,x,z);
 if(course.id!=='mountain')return articulation;
 const section=.4*smooth((x+14)/2)*smooth((112-x)/2)*smooth((z-88)/2)*smooth((205-z)/2);
 return Math.max(articulation,section);
}
export function adventureHeight(course,x,z,routeDistance=Infinity){
 if(['school','custom'].includes(course.id))return 0;
 if(course.theme==='mountain'){
  // The added crown tapers out before the bridge approach, whose fixed deck
  // height cannot follow an arbitrary visual hill lift.
  const ascent=3.8*bell(x,z,67,153,32,46)+2.6*bell(x,z,67,153,36,46)*smooth((x-52)/10);
  const shoulderMask=smooth((routeDistance-5)/8);
  const shoulder=7*bell(x,z,98,148,16,42)+5*bell(x,z,25,155,19,40);
  const brokenContour=shoulder*(.83+noise(x*.075,z*.065)*.35);
  return ascent+shoulderMask*terrace(brokenContour,1.35,.34);
 }
 if(course.theme==='sand'){
  // A lower western saddle provides a genuine alternative to the steeper crest.
  return 1.8*bell(x,z,-62,226,55,34)-.8*bell(x,z,-62,175,65,40)-3.4*bell(x,z,-113,224,25,32)
   +4.6*bell(x,z,78,285,65,34)-2.4*bell(x,z,40,235,50,36)
   +5*bell(x,z,150,250,45,90)+6*bell(x,z,-190,295,55,80)+offRouteDunes(x,z,routeDistance);
 }
 if(course.id==='urban'){
  // A close, physical seven-metre crest connects directly to the wheel yard.
  // The broad longitudinal bell and long entrance fade retain a crawlable
  // grade; the narrow lateral envelope leaves workshop/container pads level.
  const earthCrest=7*bell(x,z,-65,160,13,27)*smooth((z-115)/22)*smooth((238-z)/12)*smooth((20-Math.abs(x+65))/5);
  const mask=smooth((routeDistance-8)/10)*smooth((z-135)/15)*smooth(-x/15);
  const quarry=11*bell(x,z,-117,159,20,68)+14*bell(x,z,-60,238,70,24)+8*bell(x,z,-12,178,17,42);
  const eroded=quarry*(.83+noise(x*.07,z*.055)*.3+noise(x*.19,z*.17)*.06);
  return earthCrest+mask*terrace(eroded,2.25,.27);
 }
 return 0;
}
export function adventureLines(course){
 if(course.id==='mountain')return [
  {id:'garden-bypass',name:'WIDE BYPASS',kind:'bypass',width:7,points:[[44,94],[42,120],[40,149],[44,176],[60,200]]},
  {id:'stone-line',name:'ROCK STEPS · 4L',kind:'technical',width:3,points:[[70,105],[70,132],[70,158],[70,180]]}
 ];
 if(course.id==='sand')return [
  {id:'lower-saddle',name:'LOWER SADDLE',kind:'bypass',width:8,points:[[-83,166],[-110,192],[-113,224],[-105,253],[-73,280]]},
  {id:'dune-crest',name:'CREST · STOP & LOOK',kind:'technical',width:4,points:[[-62,170],[-62,195],[-65,220],[-65,248]]}
 ];
 if(course.id==='urban')return [{id:'quarry-crest',name:'CREST · STOP & LOOK · 4L',kind:'technical',width:5,points:[[-65,128],[-65,143],[-65,160],[-65,184],[-65,214],[-65,265]]}];
 return [];
}
export function adventureMarkers(world){
 const markers=[];
 for(const line of world.adventure||[])for(let i=0;i<line.points.length;i++){
  const [x,z]=line.points[i],next=line.points[Math.min(i+1,line.points.length-1)],previous=line.points[Math.max(0,i-1)],yaw=Math.atan2(next[0]-previous[0],next[1]-previous[1]);
  for(const side of [-1,1]){const px=x+Math.cos(yaw)*side*(line.width/2+.6),pz=z-Math.sin(yaw)*side*(line.width/2+.6);if(world.routeDistance(px,pz)<1.25)continue;
   markers.push({id:`adventure-marker-${line.id}-${i}-${side}`,type:'cylinder',x:px,z:pz,y:world.height(px,pz),radius:.055,height:1.25,yaw:0,kind:line.kind});
  }
 }
 return markers;
}
