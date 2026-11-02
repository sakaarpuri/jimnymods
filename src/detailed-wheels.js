import * as T from 'three';
import {mergeVertices} from 'three/addons/utils/BufferGeometryUtils.js';
import {EXTERIOR_PARTS} from './exterior-parts.js';
const finishes={black:'#23282c',graphite:'#50595e',bronze:'#8d6941',silver:'#b9c0c2'};
const defaults={wheel_alap:'#87623f',wheel_rpt1:'#949a9d',wheel_m9:'#32393d',wheel_dakar:'#394146',wheel_baja:'#394146',wheel_wildboar:'#353b40',wheel_dynamic_round:'#272d31',wheel_sunraysia:'#272d31'};
const add=(g,geometry,material,name,pos=[0,0,0])=>{const m=new T.Mesh(geometry,material);m.name=name;m.position.set(...pos);m.castShadow=m.receiveShadow=true;g.add(m);return m;};
function ring(g,profile,material,name){const m=add(g,new T.LatheGeometry(profile.map(p=>new T.Vector2(...p)),96),material,name);m.rotation.x=Math.PI/2;return m;}
function hole(x,y,r){const p=new T.Path();p.absarc(x,y,r,0,Math.PI*2,false);return p;}
function face(g,shape,material,name,depth=.009,bend=true){
 const geo=new T.ExtrudeGeometry(shape,{depth,bevelEnabled:true,bevelSize:.002,bevelThickness:.0015,bevelSegments:3,curveSegments:16});
 // Subdivide before forming a concave face, so long triangulation diagonals
 // cannot turn a smooth stamping into visible pyramids around the vent holes.
 const source=geo.attributes.position,normal=geo.attributes.normal,uv=geo.attributes.uv,vertices=[],normals=[],uvs=[];
 const mid=(a,b)=>a.map((v,i)=>(v+b[i])/2);
 function emit(a,b,c,d=0){
  const dist=(x,y)=>Math.hypot(x[0]-y[0],x[1]-y[1],x[2]-y[2]);
  if(bend&&d<4&&Math.max(dist(a,b),dist(b,c),dist(c,a))>.025){const ab=mid(a,b),bc=mid(b,c),ca=mid(c,a);emit(a,ab,ca,d+1);emit(ab,b,bc,d+1);emit(ca,bc,c,d+1);emit(ab,bc,ca,d+1);return;}
  for(const v of [a,b,c]){vertices.push(...v.slice(0,3));normals.push(...v.slice(3,6));uvs.push(...v.slice(6));}
 }
 for(let i=0;i<source.count;i+=3)emit(...[0,1,2].map(j=>[source.getX(i+j),source.getY(i+j),source.getZ(i+j),normal.getX(i+j),normal.getY(i+j),normal.getZ(i+j),uv.getX(i+j),uv.getY(i+j)]));geo.dispose();
 const raw=new T.BufferGeometry();raw.setAttribute('position',new T.Float32BufferAttribute(vertices,3));raw.setAttribute('normal',new T.Float32BufferAttribute(normals,3));raw.setAttribute('uv',new T.Float32BufferAttribute(uvs,2));const formed=mergeVertices(raw,1e-6);raw.dispose();
 if(bend){const p=formed.attributes.position,n=formed.attributes.normal;for(let i=0;i<p.count;i++){
  const x=p.getX(i),y=p.getY(i),r=Math.hypot(x,y),t=Math.max(0,Math.min(1,(r-.06)/.12));
  p.setZ(i,p.getZ(i)-.027*Math.sin(t*Math.PI)**2);
  const derivative=r>.06&&r<.18?-.027*Math.PI/.12*Math.sin(2*t*Math.PI):0,nz=n.getZ(i),nx=n.getX(i)-derivative*x/(r||1)*nz,ny=n.getY(i)-derivative*y/(r||1)*nz,l=Math.hypot(nx,ny,nz)||1;n.setXYZ(i,nx/l,ny/l,nz/l);
 }}
 return add(g,formed,material,name);
}
export function detailedWheel(id,finish='oem',custom=null){
 const p=EXTERIOR_PARTS[id];if(!p?.diameter)return null;
 const colour=/^#[0-9a-f]{6}$/i.test(custom||'')?custom:finishes[finish]||defaults[id];
 const steel=p.style.includes('steel')||p.style==='sunraysia';
 const coat=new T.MeshStandardMaterial({name:'Wheel coating',color:colour,metalness:steel?.38:.65,roughness:steel?.49:.34});
 const lip=new T.MeshStandardMaterial({name:'Machined rim edge',color:id==='wheel_wildboar'&&finish==='oem'?'#727d80':colour,metalness:.85,roughness:.25});
 const dark=new T.MeshStandardMaterial({name:'Wheel hub and valve',color:'#252b2e',metalness:.2,roughness:.58});
 const hardware=new T.MeshStandardMaterial({name:'Wheel lug hardware',color:'#b2bcc0',metalness:.85,roughness:.25});
 const g=new T.Group();g.name=p.name+' wheel';g.userData={wheelDesign:id,nominalDiameter:p.diameter*.0254,referenceURL:p.url,ownedMaterials:[coat,lip,dark,hardware],finishTarget:'wheels'};
 const radius=p.diameter*.0254/2,scale=radius/.1905;
 const outer=new T.Group();g.add(outer);outer.scale.setScalar(scale);
 ring(outer,[[.171,-.125],[.181,-.133],[.1905,-.131],[.1905,-.125],[.182,-.120],[.173,-.098],[.166,-.063],[.172,-.029],[.181,-.008],[.1905,.004],[.1905,.010],[.186,.012],[.180,.006],[.174,-.016]],coat,'Formed rim barrel and bead seats');
 ring(outer,[[.180,.007],[.186,.012],[.1905,.009],[.1905,.005],[.186,.006],[.180,.003]],lip,'Rolled outer lip');
 const cutout=['dish','round','steel-round','sunraysia'].includes(p.style);
 if(cutout){
  const shape=new T.Shape();shape.absarc(0,0,.178,0,Math.PI*2,false);shape.holes.push(hole(0,0,.048));
  for(let i=0;i<p.count;i++){
   const a=i*Math.PI*2/p.count+Math.PI/2;
   if(p.style==='sunraysia'){
    const path=new T.Path(),pts=[[.101,-.006],[.142,-.033],[.155,-.023],[.155,.023],[.142,.033],[.101,.006]].map(([x,y])=>new T.Vector2(x*Math.cos(a)-y*Math.sin(a),x*Math.sin(a)+y*Math.cos(a)));
    path.moveTo(pts[0].x,pts[0].y);for(const v of pts.slice(1))path.lineTo(v.x,v.y);path.closePath();shape.holes.push(path);
   }else shape.holes.push(hole(Math.cos(a)*.134,Math.sin(a)*.134,p.style==='dish'?.014:p.style==='round'?.030:.022));
  }
  face(outer,shape,coat,'Perforated concave '+p.style+' face',steel?.0035:.008);
  ring(outer,[[.084,-.007],[.087,-.003],[.092,-.003],[.095,-.009]],lip,'Stamped central reinforcement');
 }else{
  const hub=new T.Shape();hub.absarc(0,0,.088,0,Math.PI*2,false);hub.holes.push(hole(0,0,.046));face(outer,hub,coat,'Five-lug mounting pad',.015,false);
  function spoke(a,r0,r1,width0,width1,twist=0){
   const shape=new T.Shape();const points=[[r0,-width0/2],[r1,-width1/2+twist],[r1,width1/2+twist],[r0,width0/2]];
   const pnts=points.map(([x,y])=>new T.Vector2(x*Math.cos(a)-y*Math.sin(a),x*Math.sin(a)+y*Math.cos(a)));shape.setFromPoints(pnts);shape.closePath();face(outer,shape,coat,'Sculpted '+p.style+' spoke',.013);
  }
  for(let i=0;i<p.count;i++){
   const a=i*Math.PI*2/p.count+Math.PI/2;
   if(p.style==='paired'){spoke(a-.09,.079,.179,.011,.012);spoke(a+.09,.079,.179,.011,.012);}
   else if(p.style==='mesh'){spoke(a,.077,.135,.018,.016);spoke(a-.07,.119,.179,.012,.011,-.018);spoke(a+.07,.119,.179,.012,.011,.018);}
   else spoke(a,.073,.180,p.style==='rally'?.020:.016,p.style==='rally'?.026:.022);
  }
 }
 // Lug pattern stays 5 x 139.7 independently of the rim's nominal diameter.
 for(let i=0;i<5;i++){
  const a=i*Math.PI*2/5,x=Math.cos(a)*.06985,y=Math.sin(a)*.06985;
  const well=add(g,new T.CylinderGeometry(.010,.0085,.004,24),dark,'Lug recess',[x,y,.018*scale]);well.rotation.x=Math.PI/2;
  const lug=add(g,new T.CylinderGeometry(.0065,.0065,.010,6),hardware,'Hex wheel nut',[x,y,.023*scale]);lug.rotation.x=Math.PI/2;
 }
 ring(g,[[.046,-.012],[.047,.012],[.043,.017],[.037,.017],[.037,-.012]],coat,'Open centre hub collar');
 const hub=add(g,new T.CylinderGeometry(.035,.035,.027,40),dark,'Hub cap',[0,0,.002]);hub.rotation.x=Math.PI/2;
 if(p.style==='mesh')for(let i=0;i<24;i++){const a=i*Math.PI/12;const bolt=add(outer,new T.CylinderGeometry(.0028,.0028,.004,6),hardware,'Decorative rim fastener',[Math.cos(a)*.183,Math.sin(a)*.183,.012]);bolt.rotation.x=Math.PI/2;}
 const valve=add(outer,new T.CylinderGeometry(.0035,.004,.018,12),dark,'Valve stem',[.112,-.126,.018]);valve.rotation.x=Math.PI/2;
 return g;
}
