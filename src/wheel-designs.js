import * as T from 'three';
import {WHEEL_FINISHES} from './wheel-finishes.js';

// Spoke alloy faces built from the shared outlines in assets/wheel-designs.js.
// The modelled rim face (MachinedAlloy / WheelGunmetal) is hidden and a new face
// is placed at each wheel centre; tyre, barrel and brakes stay authored, so the
// brakes show through the windows. Representative styles, not product CAD.
const shapes=()=>globalThis.JimnyWheelDesigns;
const FACE_OFFSET=.07;// Lateral distance from the tyre centre to the back of the face.
const geometries=new Map(),states=new WeakMap();

function annulus(inner,outer){const s=new T.Shape();s.absarc(0,0,outer,0,Math.PI*2,false);const h=new T.Path();h.absarc(0,0,inner,0,Math.PI*2,true);s.holes.push(h);return s;}
function designGeometry(id){
 if(geometries.has(id))return geometries.get(id);
 const W=shapes(),d=W.design(id),face=new T.Shape();face.absarc(0,0,W.FACE,0,Math.PI*2,false);
 for(const w of W.windows(id))face.holes.push(new T.Path(w.map(([x,y])=>new T.Vector2(x,y))));
 const set={
  face:new T.ExtrudeGeometry(face,{depth:.014,bevelEnabled:true,bevelThickness:.003,bevelSize:.0022,bevelSegments:2,curveSegments:28}),
  lip:new T.ExtrudeGeometry(annulus(W.FACE-.004,W.LIP),{depth:.018,bevelEnabled:true,bevelThickness:.002,bevelSize:.0015,bevelSegments:1,curveSegments:48}),
  cap:new T.CylinderGeometry(.038,.041,.022,36).rotateX(Math.PI/2).translate(0,0,.026),
  nut:new T.CylinderGeometry(.0082,.0082,.012,6).rotateX(Math.PI/2),
  ring:d.ring?new T.ExtrudeGeometry(annulus(d.ring.inner,d.ring.outer),{depth:.008,bevelEnabled:true,bevelThickness:.0015,bevelSize:.0012,bevelSegments:1,curveSegments:48}).translate(0,0,.017):null,
  bolt:d.ring?new T.CylinderGeometry(.0042,.0042,.008,6).rotateX(Math.PI/2):null
 };
 geometries.set(id,set);return set;
}
function wheelFace(id,materials){
 const W=shapes(),d=W.design(id),geo=designGeometry(id),g=new T.Group();g.name=`Alloy ${d.name}`;g.userData.wheelDesign=id;
 g.add(new T.Mesh(geo.face,materials.face),new T.Mesh(geo.lip,materials.face),new T.Mesh(geo.cap,materials.face));
 for(let k=0;k<5;k++){const a=k*2*Math.PI/5-Math.PI/2,n=new T.Mesh(geo.nut,materials.nut);n.position.set(Math.cos(a)*W.PCD,Math.sin(a)*W.PCD,.022);g.add(n);}
 if(geo.ring){g.add(new T.Mesh(geo.ring,materials.ring));for(let k=0;k<d.ring.bolts;k++){const a=k*2*Math.PI/d.ring.bolts,b=new T.Mesh(geo.bolt,materials.nut);b.position.set(Math.cos(a)*d.ring.boltRadius,Math.sin(a)*d.ring.boltRadius,.029);g.add(b);}}
 g.traverse(m=>{if(m.isMesh){m.castShadow=true;m.receiveShadow=true;}});
 return g;
}
// Saved custom wheel colour, then the chosen finish, then the design's own colour.
export function wheelDesignColour(design={}){
 const custom=design.partColours?.wheels;if(/^#[0-9a-f]{6}$/i.test(custom||''))return custom;
 const finish=WHEEL_FINISHES.find(f=>f.id===design.wheelFinish);if(finish?.colour)return finish.colour;
 return shapes()?.design(design.wheelDesign).colour||'#b5b9bc';
}
function wheelFrames(root){
 const frames=[];root.traverse(g=>{if(['StockWheels','AllTerrainWheels','SpareWheel'].includes(g.name)||(!g.name&&g.children.some(m=>m.isMesh&&m.material?.name==='TyreRubber')))frames.push(g);});return frames;
}
export function applyWheelDesign(root,design={}){
 if(!root?.traverse||!shapes())return 0;
 const id=shapes().clean(design).wheelDesign,colour=wheelDesignColour({...design,wheelDesign:id});
 let state=states.get(root);
 if(state&&(state.id!==id||id==='factory')){for(const [m,visible] of state.hidden)m.visible=visible;for(const g of state.added)g.removeFromParent();Object.values(state.materials).forEach(m=>m.dispose());states.delete(root);state=null;}
 if(id==='factory')return 0;
 if(state){state.materials.face.color.set(colour);state.materials.ring.color.set(colour).multiplyScalar(.55);return state.added.length;}
 const materials={face:new T.MeshStandardMaterial({name:'SpokeAlloy',color:colour,metalness:.6,roughness:.32}),nut:new T.MeshStandardMaterial({name:'SpokeAlloyNut',color:'#2a2e31',metalness:.75,roughness:.32}),ring:new T.MeshStandardMaterial({name:'SpokeAlloyRing',color:colour,metalness:.55,roughness:.38})};
 materials.ring.color.multiplyScalar(.55);
 state={id,hidden:[],added:[],materials};
 for(const frame of wheelFrames(root)){
  const named=['StockWheels','AllTerrainWheels'].includes(frame.name),spare=frame.name==='SpareWheel';frame.updateWorldMatrix(true,true);
  const bounds=new T.Box3(),clusters=new Map(),v=new T.Vector3(),inverse=frame.matrixWorld.clone().invert();
  frame.traverse(m=>{
   if(!m.isMesh||m.userData.wheelDesign)return;
   if(['MachinedAlloy','WheelGunmetal'].includes(m.material?.name)){state.hidden.push([m,m.visible]);m.visible=false;}
   if(m.material?.name!=='TyreRubber')return;
   const p=m.geometry.attributes.position,matrix=inverse.clone().multiply(m.matrixWorld);
   for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i).applyMatrix4(matrix);bounds.expandByPoint(v);if(named){const key=`${Math.sign(v.x)},${Math.sign(v.z)}`;if(!clusters.has(key))clusters.set(key,new T.Box3());clusters.get(key).expandByPoint(v);}}
  });
  if(bounds.isEmpty())continue;
  let locations;
  if(named)locations=[...clusters.values()].map(b=>{const p=b.getCenter(new T.Vector3());return {side:Math.sign(p.x),p};});
  else{
   // The spare's axle is local X; its face looks rearwards. Drive's spin groups face their own side.
   const outward=spare?Math.sign(new T.Vector3(1,0,0).transformDirection(frame.matrixWorld).z)*-1||1:Math.sign(frame.parent?.position.x||1);
   locations=[{side:outward,p:bounds.getCenter(new T.Vector3())}];
  }
  for(const {side,p} of locations){const g=wheelFace(id,materials);g.position.set(p.x+side*FACE_OFFSET,p.y,p.z);g.rotation.y=side*Math.PI/2;frame.add(g);state.added.push(g);}
 }
 if(!state.added.length){for(const [m,visible] of state.hidden)m.visible=visible;Object.values(materials).forEach(m=>m.dispose());return 0;}
 states.set(root,state);return state.added.length;
}
export function disposeWheelDesigns(root){return applyWheelDesign(root,{wheelDesign:'factory'});}
