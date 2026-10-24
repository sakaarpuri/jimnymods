import * as T from 'three';

// Local Rajasthan composition pass. The dune/rut field is sampled by both
// driving physics and the render mesh; it does not replace the open world.
const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
const smooth=v=>{v=clamp(v);return v*v*(3-2*v);};
const hash=(x,z)=>{const n=Math.sin(x*127.1+z*311.7)*43758.5453;return n-Math.floor(n);};
const bell=(x,z,cx,cz,sx,sz)=>Math.exp(-(((x-cx)/sx)**2)-((z-cz)/sz)**2);
export const DESERT_ART_BOUNDS=Object.freeze({minX:-178,maxX:8,minZ:138,maxZ:292});
export const DESERT_FINE_PATCHES=Object.freeze([
 Object.freeze({minX:-126,maxX:-71,minZ:158,maxZ:282,spacing:.35}),
 Object.freeze({minX:-70,maxX:-49,minZ:162,maxZ:260,spacing:.30})
]);
export const DESERT_TRACKS=Object.freeze([
 Object.freeze({id:'saddle',knots:Object.freeze([[166,-83],[192,-110],[224,-113],[253,-105],[280,-73]].map(Object.freeze)),depth:.062}),
 Object.freeze({id:'crest',knots:Object.freeze([[170,-62],[195,-62],[220,-65],[248,-65]].map(Object.freeze)),depth:.074})
]);
function trackX(z,knots){
 let i=0;while(i<knots.length-2&&z>knots[i+1][0])i++;
 const a=knots[i],b=knots[i+1],previous=knots[Math.max(0,i-1)],next=knots[Math.min(knots.length-1,i+2)],length=b[0]-a[0],t=clamp((z-a[0])/length);
 const ma=(b[1]-previous[1])/(b[0]-previous[0]),mb=(next[1]-a[1])/(next[0]-a[0]);
 const x=(2*t**3-3*t*t+1)*a[1]+(t**3-2*t*t+t)*length*ma+(-2*t**3+3*t*t)*b[1]+(t**3-t*t)*length*mb;
 const slope=((6*t*t-6*t)*a[1]+(3*t*t-4*t+1)*length*ma+(-6*t*t+6*t)*b[1]+(3*t*t-2*t)*length*mb)/length;
 return {x,slope};
}
export function desertTrackCoordinates(x,z){
 let best={lateral:0,along:0,weight:0,distance:Infinity,depth:0};
 for(const track of DESERT_TRACKS){
  const start=track.knots[0][0],end=track.knots.at(-1)[0];if(z<start||z>end)continue;
  const p=trackX(z,track.knots),lateral=(x-p.x)/Math.hypot(1,p.slope),distance=Math.abs(lateral);
  if(distance<best.distance)best={lateral,along:z-start,weight:smooth((z-start)/9)*smooth((end-z)/9)*(1-smooth((distance-2.5)/2.5)),distance,depth:track.depth};
 }return best;
}
function localMask(x,z){const b=DESERT_ART_BOUNDS;return smooth((x-b.minX)/12)*smooth((b.maxX-x)/12)*smooth((z-b.minZ)/14)*smooth((b.maxZ-z)/14);}
export function desertShoulderWeight(x,z){
 let weight=1;
 for(const track of DESERT_TRACKS){
  const start=track.knots[0][0],end=track.knots.at(-1)[0];if(z<start||z>end)continue;
  const p=trackX(z,track.knots),distance=Math.abs(x-p.x)/Math.hypot(1,p.slope),along=smooth((z-start)/9)*smooth((end-z)/9);
  // The existing crest already approaches the stock vehicle's loose-sand
  // climbing limit. Art may shape the shoulders, not deepen or steepen its
  // marked driving corridor. A wide blend keeps the side slopes continuous.
  weight*=1-along*(1-smooth((distance-4)/16));
 }return weight;
}
export function desertRutHeight(x,z){
 const p=desertTrackCoordinates(x,z);if(!p.weight)return 0;
 const wander=Math.sin(p.along*.13)*.055+Math.sin(p.along*.31)*.023;
 const d=Math.abs(p.lateral-wander),groove=Math.exp(-(((d-.72)/.245)**2)),pushedSand=Math.exp(-(((d-1.11)/.20)**2));
 const usage=.73+.16*Math.sin(p.along*.16)+.11*Math.sin(p.along*.47);
 return p.weight*usage*(-p.depth*groove+.023*pushedSand);
}
export function desertHeightDelta(x,z){
 const mask=localMask(x,z);if(!mask)return 0;
 // Wind-built unequal shoulders flank, rather than barricade, the existing
 // crest and lower saddle. Their smooth lee slopes are actual driveable sand.
 const left=3.15*bell(x,z,-90,212,21,25),right=3.85*bell(x,z,-28,233,27,22);
 const foreground=1.05*bell(x,z,-103,173,15,21),exit=1.65*bell(x,z,-108,268,32,14);
 const saddle=-1.15*bell(x,z,-65,205,13,22)-.55*bell(x,z,-113,228,10,22);
 const rippleShoulder=(left+right)*(.95+.05*Math.sin(x*.095+z*.12));
 return mask*desertShoulderWeight(x,z)*(rippleShoulder+foreground+exit+saddle)+desertRutHeight(x,z);
}
export function desertCoarseRelief(x,z){
 // Recess only the interior of a fine patch. Edge height remains identical,
 // avoiding cracks where the original 4m mesh meets the finer rut surface.
 let amount=0;for(const b of DESERT_FINE_PATCHES)amount=Math.max(amount,.28*smooth((x-b.minX)/2)*smooth((b.maxX-x)/2)*smooth((z-b.minZ)/2)*smooth((b.maxZ-z)/2));return amount;
}
export function desertSurfaceMask(x,z){
 const p=desertTrackCoordinates(x,z),r=Math.abs(Math.abs(p.lateral)-.72),track=p.weight*Math.exp(-((r/.31)**2));
 let apron=0;for(const f of DESERT_ROCK_ISLANDS)apron=Math.max(apron,bell(x,z,f.x,f.z,f.width+3,f.length+2));
 return {track,apron:apron*localMask(x,z),local:localMask(x,z),lateral:p.lateral,along:p.along,weight:p.weight};
}
export const DESERT_ROCK_ISLANDS=Object.freeze([
 {x:-83,z:188,width:3.0,length:5.2,count:7},
 {x:-42,z:201,width:3.4,length:6.6,count:9},
 {x:-29,z:220,width:4.3,length:7.4,count:10},
 {x:-92,z:240,width:3.1,length:6.1,count:8},
 {x:-141,z:224,width:4.6,length:7.5,count:10},
 {x:-53,z:259,width:3.2,length:5.3,count:7}
].map(Object.freeze));
export function desertObstaclePlan(height,routeDistance){
 const out=[];
 for(const [f,island]of DESERT_ROCK_ISLANDS.entries())for(let i=0;i<island.count;i++){
  const angle=i*2.39996+f*.4,r=Math.sqrt((i+.4)/island.count),x=island.x+Math.cos(angle)*island.width*r,z=island.z+Math.sin(angle)*island.length*r;
  const radius=.62+hash(f+37,i+11)*1.1;
  if(routeDistance(x,z)<radius+3.8)continue;
  const y=height(x,z),floor=Math.min(y,height(x-radius*.65,z),height(x+radius*.65,z),height(x,z-radius*.65),height(x,z+radius*.65));
  out.push({id:`desert-art-island-${f}-${i}`,formation:`desert-art-island-${f}`,type:'rock',x,z,y:floor-.14,radius,height:.36+radius*.45,yaw:angle+.4});
 }return out;
}

export function desertGroundcoverPlan(world){
 if(world.course.id!=='sand')return [];
 const result=[],patches=[...DESERT_ROCK_ISLANDS.map(p=>[p.x,p.z,p.width+4,p.length+3]),[-91,180,7,10],[-100,208,5,16],[-49,232,6,15],[-118,260,9,10],[-30,261,11,8]];
 for(const [patch,[cx,cz,sx,sz]]of patches.entries())for(let i=0;i<100;i++){
  const angle=hash(patch+91,i)*Math.PI*2,r=Math.sqrt(hash(i+37,patch+11)),x=cx+Math.cos(angle)*sx*r,z=cz+Math.sin(angle)*sz*r;
  // Broad irregular colonies with bare sand between them, never a uniform
  // evenly spaced grid or shrub line across an existing driving corridor.
  if(hash(Math.floor(x/2),Math.floor(z/3))<.28||world.routeDistance(x,z)<2.5)continue;
  if(world.obstacles?.some(o=>Math.hypot(x-o.x,z-o.z)<(o.radius||.5)*.82))continue;
  result.push({x,z,y:world.height(x,z),yaw:hash(i,patch+73)*Math.PI*2,height:.22+hash(patch,i+13)*.34,width:.35+hash(patch+6,i)*.50,seed:hash(i+17,patch+19)});
 }return result;
}
export function desertShrubPlan(world){
 if(world.course.id!=='sand')return [];
 const out=[],patches=[...DESERT_ROCK_ISLANDS.map(p=>[p.x,p.z,p.width+2,p.length+2]),[-47,185,4,5],[-83,177,4,6],[-102,210,4,5],[-70,191,1.5,7],[-55,195,2,7]];
 // Spend the same bounded shrub budget on fuller crowns and the two near
 // shoulders, rather than scattering more tiny stems over distant islands.
 for(const [patch,[cx,cz,sx,sz]]of patches.entries())for(let i=0;i<(patch<9?4:7);i++){
  const a=i*2.39996+patch*.71,r=.45+hash(patch,i)*.55,x=cx+Math.cos(a)*sx*r,z=cz+Math.sin(a)*sz*r;
  if(world.routeDistance(x,z)<3.2||world.obstacles?.some(o=>Math.hypot(x-o.x,z-o.z)<(o.radius||.5)+.40))continue;
  out.push({x,z,y:world.height(x,z),height:.54+hash(patch+19,i)*.40,width:.76+hash(patch,i+51)*.7,yaw:a});
 }return out;
}
function shrubGeometry(){
 const pos=[],color=[],brown=new T.Color('#6b5940'),leaf=new T.Color();
 const triangle=(a,b,c,tint)=>{for(const p of [a,b,c]){pos.push(...p.toArray());color.push(tint.r,tint.g,tint.b);}};
 function stem(a,b,r,sides=3){const axis=b.clone().sub(a).normalize(),u=new T.Vector3(0,1,0).cross(axis).normalize(),w=axis.clone().cross(u);for(let i=0;i<sides;i++){const k=i/sides*Math.PI*2,n=(i+1)/sides*Math.PI*2,pa=a.clone().addScaledVector(u,Math.cos(k)*r).addScaledVector(w,Math.sin(k)*r),pb=a.clone().addScaledVector(u,Math.cos(n)*r).addScaledVector(w,Math.sin(n)*r),pc=b.clone().addScaledVector(u,Math.cos(k)*r*.55).addScaledVector(w,Math.sin(k)*r*.55),pd=b.clone().addScaledVector(u,Math.cos(n)*r*.55).addScaledVector(w,Math.sin(n)*r*.55);triangle(pa,pb,pc,brown);triangle(pb,pd,pc,brown);}}
 // Multiple short radial shoots form a rounded three-dimensional crown.
 // A single long shoot per node reads as a flat fern/herringbone at distance.
 for(let branch=0;branch<3;branch++){
  const a=branch*2.39996,h=.68+hash(branch,41)*.20,tip=new T.Vector3(Math.cos(a)*.20,h,Math.sin(a)*.20),root=new T.Vector3(0,0,0);stem(root,tip,.008,5);
  for(let j=0;j<3;j++)for(let arm=0;arm<4;arm++){
   const t=.42+j*.22,base=tip.clone().multiplyScalar(t),aa=a+j*.81+arm*1.5708+hash(branch+j,arm)*.35,length=.20+hash(arm+branch,j+18)*.14,end=base.clone().add(new T.Vector3(Math.cos(aa)*length,.07+hash(j,arm)*.09,Math.sin(aa)*length));stem(base,end,.0035);
   for(let k=0;k<4;k++)for(const side of [-1,1]){
    const center=base.clone().lerp(end,(k+.5)/4),angle=aa+side*.9,along=new T.Vector3(Math.cos(angle)*.065,.025,Math.sin(angle)*.065),across=new T.Vector3(-Math.sin(angle)*.028,.012,Math.cos(angle)*.028);
    leaf.set(['#677139','#85884b','#566330'][(branch+j+k)%3]);
    const p=center.clone().addScaledVector(along,-.22),q=center.clone().add(across),r=center.clone().add(along),s=center.clone().sub(across);triangle(p,q,r,leaf);triangle(p,r,s,leaf);
   }
  }
 }
 const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(pos,3));g.setAttribute('color',new T.Float32BufferAttribute(color,3));g.computeVertexNormals();return g;
}
function tuftGeometry(){
 const positions=[],colours=[],tint=new T.Color();
 for(let i=0;i<17;i++){
  const a=i*2.39996,r=.04+hash(i,6)*.19,bx=Math.cos(a)*r,bz=Math.sin(a)*r,h=.38+hash(i,7)*.62,lean=.22+hash(i,8)*.28,w=.012+hash(i,9)*.012;
  tint.set(i%4?'#9b9660':'#737544');
  const direction=new T.Vector3(Math.cos(a),0,Math.sin(a)),side=new T.Vector3(-direction.z,0,direction.x);
  const verts=[];for(const t of [0,.46,1]){const x=bx+direction.x*t*t*lean,z=bz+direction.z*t*t*lean,ww=w*(1-t*.94);verts.push([x-side.x*ww,t*h,z-side.z*ww],[x+side.x*ww,t*h,z+side.z*ww]);}
  for(const [a,b,c]of [[0,1,2],[1,3,2],[2,3,4],[3,5,4]])for(const n of [a,b,c]){positions.push(...verts[n]);colours.push(tint.r,tint.g,tint.b);}
 }
 const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(positions,3));g.setAttribute('color',new T.Float32BufferAttribute(colours,3));g.computeVertexNormals();return g;
}
export function createDesertDressing(world){
 const group=new T.Group();group.name='Rajasthan clustered dune groundcover';if(world.course.id!=='sand')return group;
 const plan=desertGroundcoverPlan(world);if(!plan.length)return group;
 const geometry=tuftGeometry(),material=new T.MeshStandardMaterial({vertexColors:true,roughness:.96,side:T.DoubleSide}),plants=new T.InstancedMesh(geometry,material,plan.length),dummy=new T.Object3D();
 const up=new T.Vector3(0,1,0),normal=new T.Vector3();
 plan.forEach((p,i)=>{
  // Root planes follow dune slopes, avoiding the floating lower blades that
  // result when a broad clump is placed horizontally on an inclined shoulder.
  normal.set(world.height(p.x-.15,p.z)-world.height(p.x+.15,p.z),.30,world.height(p.x,p.z-.15)-world.height(p.x,p.z+.15)).normalize();
  dummy.position.set(p.x,p.y-.015,p.z);dummy.quaternion.setFromUnitVectors(up,normal);dummy.rotateY(p.yaw);dummy.scale.set(p.width,p.height,p.width);dummy.updateMatrix();plants.setMatrixAt(i,dummy.matrix);
 });plants.castShadow=false;plants.receiveShadow=true;plants.name='Clustered fine desert grass';plants.computeBoundingSphere();group.add(plants);
 const shrubPlan=desertShrubPlan(world),shrub=shrubGeometry(),shrubs=new T.InstancedMesh(shrub,material,shrubPlan.length);
 shrubPlan.forEach((p,i)=>{dummy.position.set(p.x,p.y-.025,p.z);dummy.rotation.set(0,p.yaw,0);dummy.scale.set(p.width,p.height,p.width);dummy.updateMatrix();shrubs.setMatrixAt(i,dummy.matrix);});shrubs.name='Low branching desert shrubs';shrubs.castShadow=shrubs.receiveShadow=true;shrubs.computeBoundingSphere();group.add(shrubs);
 group.userData={clumps:plan.length,shrubs:shrubPlan.length,triangles:plan.length*68+shrub.attributes.position.count/3*shrubPlan.length,decorativeHeightLimit:1.04,softFoliage:true};return group;
}
