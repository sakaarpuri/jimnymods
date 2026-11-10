// Physics runs at a fixed 60 Hz; screens do not. Rendering a blend of the last
// two physics poses removes the judder that shows up at speed.
export function capturePose(s){
  return {x:s.x,y:s.y,z:s.z,yaw:s.yaw,steer:s.steer,quaternion:s.quaternion?{...s.quaternion}:null,wheelCenters:s.wheelCenters?.map(p=>({...p})),wheelRotations:s.wheelRotations?[...s.wheelRotations]:null,wheelHeights:s.wheelHeights?[...s.wheelHeights]:null};
}
const mix=(a,b,t)=>a+(b-a)*t;
export function blendPose(previous,state,amount){
  const t=Math.max(0,Math.min(1,amount));
  // A recovery or restart moves the car instantly; never sweep it across the map.
  if(!previous||t>=1||Math.hypot(state.x-previous.x,state.z-previous.z)>3)return state;
  const out={...state,x:mix(previous.x,state.x,t),y:mix(previous.y,state.y,t),z:mix(previous.z,state.z,t),steer:mix(previous.steer||0,state.steer||0,t)};
  out.yaw=previous.yaw+Math.atan2(Math.sin(state.yaw-previous.yaw),Math.cos(state.yaw-previous.yaw))*t;
  if(previous.quaternion&&state.quaternion){
    const a=previous.quaternion,b=state.quaternion,sign=a.x*b.x+a.y*b.y+a.z*b.z+a.w*b.w<0?-1:1,q={x:mix(a.x,b.x*sign,t),y:mix(a.y,b.y*sign,t),z:mix(a.z,b.z*sign,t),w:mix(a.w,b.w*sign,t)},length=Math.hypot(q.x,q.y,q.z,q.w)||1;
    out.quaternion={x:q.x/length,y:q.y/length,z:q.z/length,w:q.w/length};
  }
  if(previous.wheelCenters&&state.wheelCenters)out.wheelCenters=state.wheelCenters.map((p,i)=>{const a=previous.wheelCenters[i];return a?{x:mix(a.x,p.x,t),y:mix(a.y,p.y,t),z:mix(a.z,p.z,t)}:p;});
  if(previous.wheelRotations&&state.wheelRotations)out.wheelRotations=state.wheelRotations.map((r,i)=>mix(previous.wheelRotations[i]??r,r,t));
  if(previous.wheelHeights&&state.wheelHeights)out.wheelHeights=state.wheelHeights.map((h,i)=>mix(previous.wheelHeights[i]??h,h,t));
  return out;
}
