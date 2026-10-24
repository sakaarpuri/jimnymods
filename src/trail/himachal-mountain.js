// Authored closed-course mountain extension. Metres, shared by rendering and
// physical heightfields. No invented changes to vehicle traction or power.
const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
const smooth=v=>{const t=clamp(v);return t*t*(3-2*t);};
const bell=(x,z,cx,cz,sx,sz)=>Math.exp(-(((x-cx)/sx)**2)-(((z-cz)/sz)**2));
const control={
 gravel:[[-6,130],[-55,105],[-110,90],[-170,95],[-215,125],[-260,165],[-310,210],[-350,250],[-380,295],[-395,345],[-375,385],[-330,405],[-275,410],[-235,430],[-220,460],[-250,480],[-300,475],[-340,450]],
 asphalt:[[-340,450],[-390,470],[-445,455],[-478,420],[-482,370],[-460,325],[-440,280],[-450,230],[-475,195],[-480,145],[-450,110],[-405,100],[-370,120]]
};
function roundedPath(input){
 const points=[];let distance=0;
 // A uniform cubic curve with control points at least 30 m apart produces
 // broad traverses and rounded bends, rather than gate-to-gate sharp corners.
 for(let i=0;i<input.length-1;i++){
  const a=input[Math.max(0,i-1)],b=input[i],c=input[i+1],d=input[Math.min(input.length-1,i+2)],steps=Math.ceil(Math.hypot(c[0]-b[0],c[1]-b[1])/3);
  for(let j=0;j<steps;j++){
   const t=j/steps,t2=t*t,t3=t2*t;
   const p={x:0,z:0};for(const [axis,k]of[['x',0],['z',1]])p[axis]=.5*(2*b[k]+(-a[k]+c[k])*t+(2*a[k]-5*b[k]+4*c[k]-d[k])*t2+(-a[k]+3*b[k]-3*c[k]+d[k])*t3);
   if(points.length){const q=points.at(-1);distance+=Math.hypot(p.x-q.x,p.z-q.z);}points.push({...p,s:distance});
  }
 }
 const end=input.at(-1),previous=points.at(-1);distance+=Math.hypot(end[0]-previous.x,end[1]-previous.z);points.push({x:end[0],z:end[1],s:distance});return points;
}
export const MOUNTAIN_ROADS=Object.freeze(Object.entries(control).map(([kind,input])=>Object.freeze({id:`mountain-${kind}`,kind,width:kind==='gravel'?6:6.8,blendWidth:kind==='gravel'?27:32,points:roundedPath(input)})));
function gatesFor(road){let last=-99;const selected=road.points.filter((p,i)=>i>0&&(p.s-last>=18?(last=p.s,true):false));if(selected.at(-1)!==road.points.at(-1))selected.push(road.points.at(-1));return selected.map(p=>({x:p.x,z:p.z,radius:4.5}));}
export const MOUNTAIN_EXTENSION_MISSIONS=MOUNTAIN_ROADS.map((road,i)=>{
 const points=gatesFor(road),first=road.points[0],next=road.points[1];
 return {id:i?'mountain-tarmac':'mountain-ascent',extension:true,name:i?'Ridge road descent':'Bridge to high pass',summary:i?'From the gravel turnout, stop and select 2H before joining the paved mountain road. Follow its bends downhill; brake before corners. This is a fictional closed course.':'Continue from the river bridge onto the western gravel ascent. Climb long traverses and rounded switchbacks, then stop at the paved-road turnout. Around five minutes at a careful trail pace.',skill:i?'Paved mountain-road control':'Sustained off-road ascent',mode:i?'2H':'4L',speedLimit:i?30:18,spawn:{x:first.x,z:first.z,yaw:Math.atan2(next.x-first.x,next.z-first.z)},routes:Object.fromEntries(['learn','trail','expert'].map(k=>[k,points.map(p=>({...p}))]))};
});

export function createMountainExtension(localHeight,legacyRouteDistance){
 const anchor=MOUNTAIN_ROADS[0].points.find(p=>p.x<-175),anchorHeight=localHeight(anchor.x,anchor.z),length=MOUNTAIN_ROADS[0].points.at(-1).s;
 const gravelHeight=p=>p.s<anchor.s?localHeight(p.x,p.z):anchorHeight+(p.s-anchor.s)*.075;
 const summit=gravelHeight(MOUNTAIN_ROADS[0].points.at(-1));
 const roads=MOUNTAIN_ROADS.map(road=>({...road,length:road.points.at(-1).s,points:road.points.map(p=>({...p,height:road.kind==='gravel'?gravelHeight(p):summit-p.s*.046}))}));
 // Local spatial index avoids an O(path-length) search for each of the
 // hundreds of thousands of physics/terrain samples.
 const cells=new Map(),cellSize=32;
 for(const road of roads)for(let i=1;i<road.points.length;i++){
  const a=road.points[i-1],b=road.points[i],reach=68,segment={a,b,road};
  for(let ix=Math.floor((Math.min(a.x,b.x)-reach)/cellSize);ix<=Math.floor((Math.max(a.x,b.x)+reach)/cellSize);ix++)for(let iz=Math.floor((Math.min(a.z,b.z)-reach)/cellSize);iz<=Math.floor((Math.max(a.z,b.z)+reach)/cellSize);iz++){
   const key=`${ix},${iz}`;if(!cells.has(key))cells.set(key,[]);cells.get(key).push(segment);
  }
 }
 const roadSamples=(x,z,profiles=false)=>{
  const best=new Map(),banks=new Map();for(const {a,b,road}of cells.get(`${Math.floor(x/cellSize)},${Math.floor(z/cellSize)}`)||[]){
   const dx=b.x-a.x,dz=b.z-a.z,n=dx*dx+dz*dz,t=clamp(((x-a.x)*dx+(z-a.z)*dz)/n),px=a.x+dx*t,pz=a.z+dz*t,distance=Math.hypot(x-px,z-pz);
   const signedDistance=((x-px)*dz-(z-pz)*dx)/Math.sqrt(n),height=a.height+(b.height-a.height)*t;
   if(profiles){
    const lateral=Math.sign(signedDistance)*Math.max(0,Math.abs(signedDistance)-road.width/2);
    const weight=(1-smooth(Math.max(0,distance-road.width/2)/62))**3*Math.sqrt(n);
    const bank=banks.get(road.id)||{sum:0,weight:0};
    bank.sum+=(height+(road.kind==='gravel'?-.42:.48)*lateral)*weight;bank.weight+=weight;banks.set(road.id,bank);
   }
   if(best.has(road.id)&&distance>=best.get(road.id).distance)continue;
   best.set(road.id,{id:road.id,kind:road.kind,x:px,z:pz,distance,signedDistance,height,s:a.s+(b.s-a.s)*t,halfWidth:road.width/2,blendWidth:road.blendWidth,heading:Math.atan2(dx,dz)});
  }return [...best.values()].map(p=>({...p,bankHeight:banks.get(p.id)?.weight?banks.get(p.id).sum/banks.get(p.id).weight:p.height}));
 };
 const nearestRoad=(x,z)=>roadSamples(x,z).reduce((best,p)=>!best||p.distance<best.distance?p:best,null);
 const height=(x,z)=>{
  const base=localHeight(x,z);if(x>-8||x<-650||z<35||z>515)return base;
  // Continue the uphill mass beyond the western playable boundary. Fading it
  // inside the outer asphalt bend would leave a raised causeway at that bend.
  const protectedWeight=smooth((legacyRouteDistance(x,z)-5)/15),west=smooth((-x-125)/85),north=smooth((515-z)/28),south=smooth((z-35)/65),edge=smooth((x+650)/110);
  // The broad hillside follows the elevation envelope of the fixed traverses.
  // The previous overlapping peaks were up to 100 m above the bench: cutting
  // both sides back to the road produced a trench, not a mountainside road.
  const hillside=-.071*x+.086*z-9.2
    +12*bell(x,z,-474,395,100,155)-8*bell(x,z,-270,260,125,120)
    +2.6*Math.sin(x*.021+z*.009)*Math.sin(z*.026);
  const envelope=west*north*south*edge;
  const foundation=base+(hillside-base)*envelope;
  const samples=roadSamples(x,z,true);let correction=0,total=0;
  for(const p of samples){
   const away=Math.max(0,p.distance-p.halfWidth),weight=1-smooth(away/62);
   if(!weight)continue;
   // Climbing gravel faces across the slope; descending asphalt faces the
   // other way. This leaves a valley shoulder and a rising cut bank, while
   // blending adjacent traverses instead of switching between nearest roads.
   correction+=(p.bankHeight-foundation)*weight;total+=weight;
  }
  const shaped=foundation+envelope*correction/Math.max(1,total);
  let result=base+(shaped-base)*protectedWeight;
  const road=samples.reduce((best,p)=>!best||p.distance<best.distance?p:best,null);if(!road)return result;
  // Only the immediate shoulder needs an exact nearest-road cut. Farther out,
  // the weighted bank field joins hairpin arms without a Voronoi cliff.
  const blend=1-smooth((road.distance-road.halfWidth)/5);
  // Preserve old mission intersections and the bridge exit exactly; the
  // eastern connector follows their existing terrain rather than cutting it.
  const cut=blend*protectedWeight*edge*north*south;
  const crown=road.kind==='asphalt'?-.012*Math.min(road.distance,road.halfWidth):.025*Math.sin(road.s*.21)*Math.sin(road.distance*.9);
  return result+(road.height+crown-result)*cut;
 };
 return {roads,nearestRoad,height,offroadLength:length,asphaltLength:roads[1].length,transition:{x:-340,z:450,height:summit},surface:(x,z)=>{const r=nearestRoad(x,z);return r&&r.kind==='asphalt'&&r.s>14&&r.distance<r.halfWidth?'tarmac':null;}};
}
