export function cleanPlayerName(value){return Array.from(String(value||'').normalize('NFC').replace(/[^\p{L}\p{M}\p{N} ._'’-]/gu,'').trim()).slice(0,20).join('');}
export function playerProfile(value={}){return {name:cleanPlayerName(value.name),driver:['man','woman'].includes(value.driver)?value.driver:'none',decal:value.decal===true};}
const fields=['x','y','z','yaw','pitch','roll','steer','speed','rpm','wheelTravel','throttle','braking'];
export class TrailReplay{
  constructor(){this.reset();}
  reset(){this.frames=[];this.tick=0;this.travel=0;this.segment=0;}
  cut(){this.segment++;}
  add(state,gate){this.travel+=state.speed/60;if(this.tick++%3)return;this.frames.push({...state,wheelHeights:[...state.wheelHeights],wheelCenters:state.wheelCenters?.map(p=>({...p})),wheelRotations:state.wheelRotations?[...state.wheelRotations]:undefined,loads:state.loads?[...state.loads]:undefined,wheelTravel:this.travel,gate,segment:this.segment});if(this.frames.length>2401)this.frames.shift();}
  get duration(){return this.frames.length>1?this.frames.at(-1).elapsed-this.frames[0].elapsed:0;}
  clip(seconds){const end=this.frames.at(-1)?.elapsed||0;return this.frames.filter(f=>f.elapsed>=end-seconds);}
}
export function sampleReplay(frames,t){
  if(!frames.length)return null;
  const at=frames[0].elapsed+t;let lo=0,hi=frames.length-1;while(lo<hi){const mid=Math.ceil((lo+hi)/2);if(frames[mid].elapsed<=at)lo=mid;else hi=mid-1;}
  const a=frames[lo],b=frames[Math.min(lo+1,frames.length-1)],p=a.segment!==b.segment?0:Math.max(0,Math.min(1,(at-a.elapsed)/(b.elapsed-a.elapsed||1))),out={...a};
  for(const key of fields)if(Number.isFinite(a[key])&&Number.isFinite(b[key]))out[key]=a[key]+(b[key]-a[key])*p;
  // Yaw can cross ±π; take the short arc.
  out.yaw=a.yaw+Math.atan2(Math.sin(b.yaw-a.yaw),Math.cos(b.yaw-a.yaw))*p;
  out.wheelHeights=a.wheelHeights.map((h,i)=>h+(b.wheelHeights[i]-h)*p);
  if(a.wheelCenters&&b.wheelCenters)out.wheelCenters=a.wheelCenters.map((v,i)=>Object.fromEntries(['x','y','z'].map(k=>[k,v[k]+(b.wheelCenters[i][k]-v[k])*p])));
  if(a.wheelRotations&&b.wheelRotations)out.wheelRotations=a.wheelRotations.map((v,i)=>v+(b.wheelRotations[i]-v)*p);return out;
}
export function recapShot(style,t){const shots=style==='wheels'?['front-wheel','rear-wheel','side','front-wheel']:style==='chase'?['chase']:['front','side','front-wheel','chase','rear-wheel','overview'];return shots[Math.floor(t/3)%shots.length];}
