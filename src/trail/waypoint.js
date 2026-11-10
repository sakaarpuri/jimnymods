// On-screen guidance to the next checkpoint. Pure maths so it can be tested
// without a renderer: the scene supplies normalised device coordinates and the
// horizontal bearing of the target in camera space (positive = screen right).
export function waypointMarker({ndcX=0,ndcY=0,bearing=0}={},{margin=.84,halfFov=.6}={}){
  const front=Math.abs(bearing)<Math.PI/2;
  // In view: sit on the target and point down at it.
  if(front&&Math.abs(ndcX)<=margin&&Math.abs(ndcY)<=margin)return {x:ndcX,y:ndcY,offscreen:false,rotation:Math.PI};
  // Ahead, but above or below the frame (crests and steep descents).
  if(front&&Math.abs(ndcX)<=margin)return {x:ndcX,y:Math.sign(ndcY)*margin,offscreen:true,rotation:ndcY>0?0:Math.PI};
  // Off to one side or behind: slide down the nearer edge as the target swings behind.
  const side=Math.sign(bearing)||1,turn=Math.min(1,Math.max(0,(Math.abs(bearing)-halfFov)/(Math.PI-halfFov)));
  return {x:side*margin,y:-turn*margin*.7,offscreen:true,rotation:side*(Math.PI/2+turn*Math.PI/2)};
}
export function formatDistance(metres){
  const m=Math.max(0,Number.isFinite(metres)?metres:0);
  return m<1000?`${Math.round(m)} m`:`${(m/1000).toFixed(1)} km`;
}
