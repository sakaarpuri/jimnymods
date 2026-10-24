import * as T from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {mergeVertices} from 'three/addons/utils/BufferGeometryUtils.js';

// Locally authored, photo/dimension-guided visualisations, not manufacturer CAD.
// Published dimensions are retained; mounting offsets and hidden folds are
// illustrative. A preview does not certify clearance, strength or installation.
const skinny='https://www.skinny-jim.com/shop/p/';
const suzuki='https://www.suzuki.co.jp/accessory_car/jimny_nomade-accessory.html';
export const CATALOGUE_PARTS=Object.freeze({
 skinnyjim_backbone:{sourceURL:skinny+'backbone-rear-door-cargo-mount',bodyStyles:['3door','5door'],width:.315,height:.585,doorClearance:.112},
 skinnyjim_jerry_tray:{sourceURL:skinny+'jerry-can-gas-cargo-carrier',bodyStyles:['3door','5door'],internalWidth:.370,internalDepth:.205,upstand:.075,requires:['skinnyjim_backbone']},
 suzuki_nomade_flatrack:{sourceURL:suzuki,bodyStyles:['5door'],width:1.430,length:1.509,height:.177},
 suzuki_nomade_steelwheel:{sourceURL:suzuki,bodyStyles:['5door'],diameter:.381,beadWidth:.1397,offset:null}
});
function mesh(group,geometry,material,name,position=[0,0,0]){const m=new T.Mesh(geometry,material);m.name=name;m.position.set(...position);m.castShadow=m.receiveShadow=true;group.add(m);return m;}
function block(g,size,position,mat,name,r=.002){return mesh(g,new RoundedBoxGeometry(...size,2,Math.min(r,...size.map(v=>v/3))),mat,name,position);}
function roundedPath(x,y,w,h,r=.006){const p=new T.Path(),l=x-w/2,b=y-h/2;r=Math.min(r,w/2,h/2);p.moveTo(l+r,b);p.lineTo(l+w-r,b);p.quadraticCurveTo(l+w,b,l+w,b+r);p.lineTo(l+w,b+h-r);p.quadraticCurveTo(l+w,b+h,l+w-r,b+h);p.lineTo(l+r,b+h);p.quadraticCurveTo(l,b+h,l,b+h-r);p.lineTo(l,b+r);p.quadraticCurveTo(l,b,l+r,b);return p;}
function plate(g,shape,mat,name,position=[0,0,0],depth=.004){return mesh(g,new T.ExtrudeGeometry(shape,{depth,bevelEnabled:true,bevelSize:.0007,bevelThickness:.0007,bevelSegments:1,curveSegments:6}),mat,name,position);}
function bolt(g,x,y,z,mat){const m=mesh(g,new T.CylinderGeometry(.0055,.0055,.006,6),mat,'Stainless mounting bolt',[x,y,z]);m.rotation.x=Math.PI/2;return m;}
function mark(g,id){g.name=id;g.userData.cataloguePart={...CATALOGUE_PARTS[id],id,previewKind:'representative',disclosure:'Locally authored from public product photos and dimensions; not exact CAD or certified fitment.'};return g;}

export function skinnyBackbone(mats){
 const g=mark(new T.Group(),'skinnyjim_backbone');
 g.position.z=.078;
 // Rear view right = negative X. Concave inner edge clears the spare tyre;
 // outer folded edge and two standoffs tie into the hinge side of the door.
 const outline=[[-.1575,-.2925],[.095,-.2925],[.1575,-.2475],[.100,-.17],[.080,-.07],[.080,.07],[.105,.18],[.1575,.215],[.035,.2925],[-.1575,.2925]];
 const shape=new T.Shape(outline.map(p=>new T.Vector2(...p)));
 for(const y of [-.19,-.04,.12,.22])shape.holes.push(roundedPath(-.045,y,.031,y===-.04?.072:.031));
 for(const y of [-.24,.15])for(const x of [-.115,-.077,-.039]){const p=new T.Path();p.absarc(x,y,.0035,0,Math.PI*2,false);shape.holes.push(p);}
 const main=plate(g,shape,mats.darkmetal,'Backbone perforated main plate',[-.5275,1.035,-1.928]);
 main.userData.publishedDimensions={width:.315,height:.585};
 block(g,[.004,.585,.018],[-.687,1.035,-1.918],mats.darkmetal,'Backbone folded hinge edge');
 for(const y of [.76,1.24]){
  block(g,[.055,.045,.112],[-.665,y,-1.868],mats.darkmetal,'Door hinge standoff');
  bolt(g,-.665,y,-1.935,mats.metal);
 }
 // Bridge plate reaches under the original spare mount, not the tyre face.
 const bridge=new T.Shape([[-.41,-.15],[-.08,-.15],[-.08,.15],[-.41,.15]].map(p=>new T.Vector2(...p)));
 for(const y of [-.085,0,.085])bridge.holes.push(roundedPath(-.27,y,.027,.033));
 plate(g,bridge,mats.darkmetal,'Spare mount attachment bridge',[0,1.005,-1.841]);
 block(g,[.040,.30,.086],[-.40,1.005,-1.882],mats.darkmetal,'Bridge folded offset');
 for(const y of [.90,1.11])bolt(g,-.12,y,-1.848,mats.metal);
 for(const y of [.80,1.28])bolt(g,-.49,y,-1.935,mats.metal);
 return g;
}

export function skinnyJerryTray(mats){
 const g=mark(new T.Group(),'skinnyjim_jerry_tray'),w=.370,d=.205,h=.075;
 // Empty tray deliberately shows its real openings and harness. The can is
 // sold separately and is not silently represented as included equipment.
 const base=block(g,[w,.004,d],[0,0,0],mats.darkmetal,'Jerry tray floor');
 const mat=block(g,[w-.014,.003,d-.014],[0,.0035,0],mats.rubber,'Neoprene tray pad');
 for(const side of [-1,1]){
  const s=new T.Shape(roundedPath(0,h/2,w,h,.012).getPoints(8));
  for(const x of [-.135,0,.135])s.holes.push(roundedPath(x,.039,x===0?.09:.035,.024));
  plate(g,s,mats.darkmetal,'Slotted tray upstand',[0,.002,side*(d/2+.002)]);
  const end=new T.Shape(roundedPath(0,h/2,d,h,.012).getPoints(8));end.holes.push(roundedPath(0,.040,.072,.025));
  const m=plate(g,end,mats.darkmetal,'Slotted tray end',[side*(w/2+.002),.002,0]);m.rotation.y=Math.PI/2;
 }
 for(const x of [-.12,.12]){
  block(g,[.025,.0025,d-.010],[x,.006,0],mats.canvas,'Webbing strap');
  block(g,[.034,.009,.029],[x,.011,-.032],mats.trim,'Cam buckle');
  block(g,[.019,.003,.015],[x,.016,-.032],mats.metal,'Buckle lever');
 }
 // Short mounting flanges contact the Backbone; tray does not float behind it.
 for(const x of [-.10,.10]){block(g,[.035,.066,.004],[x,.036,d/2+.009],mats.darkmetal,'Tray mounting flange');bolt(g,x,.049,d/2+.014,mats.metal);}
 g.position.set(-.520,.843,-1.961);
 base.userData.internalFootprint=[w,d];mat.userData.notIncluded='Fuel container';
 return g;
}

export function nomadeFlatRack(mats){
 const g=mark(new T.Group(),'suzuki_nomade_flatrack'),w=1.430,l=1.509,y=1.800,z=-.52;
 // Six gutter legs and five wide slats match the OEM product photograph.
 // Overall published height includes the mounting legs, not a .177m basket.
 for(const x of [-w/2+.019,w/2-.019])block(g,[.038,.035,l],[x,y,z],mats.darkmetal,'OEM rack perimeter',.008);
 for(const s of [-1,1])block(g,[w-.038,.035,.038],[0,y,z+s*(l/2-.019)],mats.darkmetal,'OEM rack perimeter',.008);
 for(let i=0;i<5;i++){
  const zz=z-l/2+.16+i*(l-.32)/4;
  block(g,[w-.075,.024,.120],[0,y-.004,zz],mats.darkmetal,'OEM rack slat');
  for(const dz of [-.037,0,.037])block(g,[w-.086,.002,.005],[0,y+.009,zz+dz],mats.trim,'Slat anti-slip channel',.0005);
 }
 for(const side of [-1,1])for(const zz of [z-l/2+.10,z,z+l/2-.10]){
  const leg=block(g,[.028,.142,.084],[side*.681,y-.088,zz],mats.darkmetal,'OEM gutter mounting leg');leg.rotation.z=side*.22;
  block(g,[.065,.013,.090],[side*.714,y-.153,zz],mats.rubber,'Gutter pad');
  block(g,[.012,.046,.080],[side*.752,y-.136,zz],mats.darkmetal,'Gutter clamp');
  const b=bolt(g,0,0,0,mats.metal);b.rotation.set(0,0,Math.PI/2);b.position.set(side*.763,y-.136,zz);
 }
 return g;
}

export function nomadeSteelWheel(material){
 const g=new T.Group();g.name='Nomade pressed steel wheel';
 const shape=new T.Shape();shape.absarc(0,0,.179,0,Math.PI*2,false);
 const centre=new T.Path();centre.absarc(0,0,.042,0,Math.PI*2,false);shape.holes.push(centre);
 for(let i=0;i<10;i++){const a=i*Math.PI/5,p=new T.Path();p.absellipse(Math.cos(a)*.127,Math.sin(a)*.127,.024,.027,a,a+Math.PI*2,false);shape.holes.push(p);}
 for(let i=0;i<5;i++){const a=i*Math.PI*2/5,p=new T.Path();p.absarc(Math.cos(a)*.06985,Math.sin(a)*.06985,.008,0,Math.PI*2,false);shape.holes.push(p);}
 const flat=new T.ExtrudeGeometry(shape,{depth:.003,bevelEnabled:true,bevelSize:.0015,bevelThickness:.0015,bevelSegments:2,curveSegments:12});
 // A perforated face has long triangulation diagonals. Bending only their
 // endpoints makes false creases across a stamped disc. Subdivide in the flat
 // surface first; preserve original boundary normals when welding so the lip
 // and punched hole bevels remain crisp while the broad dish shades smoothly.
 const positions=[],normals=[],uvs=[],p=flat.attributes.position,n=flat.attributes.normal,uv=flat.attributes.uv;
 const midway=(a,b)=>a.map((v,i)=>(v+b[i])/2);
 const subdivide=(a,b,c,depth=0)=>{
  const distance=(x,y)=>Math.hypot(x[0]-y[0],x[1]-y[1],x[2]-y[2]);
  if(depth<4&&Math.max(distance(a,b),distance(b,c),distance(c,a))>.028){const ab=midway(a,b),bc=midway(b,c),ca=midway(c,a);subdivide(a,ab,ca,depth+1);subdivide(ab,b,bc,depth+1);subdivide(ca,bc,c,depth+1);subdivide(ab,bc,ca,depth+1);return;}
  for(const v of [a,b,c]){positions.push(...v.slice(0,3));normals.push(...v.slice(3,6));uvs.push(...v.slice(6));}
 };
 for(let i=0;i<p.count;i+=3)subdivide(...[0,1,2].map(j=>[p.getX(i+j),p.getY(i+j),p.getZ(i+j),n.getX(i+j),n.getY(i+j),n.getZ(i+j),uv.getX(i+j),uv.getY(i+j)]));
 const subdivided=new T.BufferGeometry();subdivided.setAttribute('position',new T.Float32BufferAttribute(positions,3));subdivided.setAttribute('normal',new T.Float32BufferAttribute(normals,3));subdivided.setAttribute('uv',new T.Float32BufferAttribute(uvs,2));
 const disc=mergeVertices(subdivided,1e-6);flat.dispose();subdivided.dispose();
 const pos=disc.attributes.position,dn=disc.attributes.normal;
 for(let i=0;i<pos.count;i++){
  const x=pos.getX(i),y=pos.getY(i),r=Math.hypot(x,y),t=Math.min(1,Math.max(0,(r-.067)/.112));
  pos.setZ(i,pos.getZ(i)-.023*Math.sin(t*Math.PI)**2);
  // Analytic inverse-transpose normals avoid shading seams at adaptive
  // subdivision T-junctions, retaining smooth pressings and sharp hole edges.
  const derivative=r>.067&&r<.179?-.023*Math.PI/.112*Math.sin(2*Math.PI*t):0;
  const nx=dn.getX(i)-derivative*x/(r||1)*dn.getZ(i),ny=dn.getY(i)-derivative*y/(r||1)*dn.getZ(i),nz=dn.getZ(i),length=Math.hypot(nx,ny,nz)||1;
  dn.setXYZ(i,nx/length,ny/length,nz/length);
 }
 mesh(g,disc,material,'Ten-hole pressed steel disc');
 const profile=[[.177,-.014],[.181,-.007],[.187,.005],[.1905,.007],[.1905,.002],[.187,-.003],[.180,-.015],[.173,-.045],[.169,-.083],[.181,-.132],[.1905,-.133]];
 const barrel=mesh(g,new T.LatheGeometry(profile.map(p=>new T.Vector2(...p)),96),material,'Rolled steel lip and barrel');barrel.rotation.x=Math.PI/2;
 for(let i=0;i<5;i++){const a=i*Math.PI*2/5,n=mesh(g,new T.CylinderGeometry(.0068,.0068,.010,6),material,'Steel wheel lug',[Math.cos(a)*.06985,Math.sin(a)*.06985,.006]);n.rotation.x=Math.PI/2;}
 const hub=mesh(g,new T.CylinderGeometry(.035,.035,.029,48),material,'Exposed centre hub',[0,0,-.004]);hub.rotation.x=Math.PI/2;
 return g;
}

const wheelStates=new WeakMap();
export function applyCatalogueWheel(root,enabled=false){
 if(!root?.traverse)return 0;
 let state=wheelStates.get(root);
 if(!enabled){if(!state)return 0;for(const [m,visible]of state.hidden)m.visible=visible;for(const g of state.added){g.removeFromParent();g.traverse(m=>m.geometry?.dispose());}state.material.dispose();wheelStates.delete(root);return state.added.length;}
 if(state)return state.added.length;
 // Satin black paint is a coating, not exposed dark metal: enough diffuse
 // reflectance to reveal the pressings, with restrained broad reflections.
 state={hidden:[],added:[],material:new T.MeshStandardMaterial({name:'CatalogueSteelWheel',color:'#303438',roughness:.58,metalness:.30})};
 const frames=[];root.traverse(g=>{if(['StockWheels','AllTerrainWheels'].includes(g.name)||(!g.name&&g.children.some(m=>m.isMesh&&m.material?.name==='TyreRubber')))frames.push(g);});
 for(const frame of frames){
  const named=!!frame.name;frame.updateWorldMatrix(true,true);
  const bounds=new T.Box3(),clusters=new Map(),v=new T.Vector3(),inverse=frame.matrixWorld.clone().invert();
  frame.traverse(m=>{if(!m.isMesh)return;if(['MachinedAlloy','WheelGunmetal'].includes(m.material?.name)){state.hidden.push([m,m.visible]);m.visible=false;}if(m.material?.name!=='TyreRubber')return;const p=m.geometry.attributes.position,matrix=inverse.clone().multiply(m.matrixWorld);for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i).applyMatrix4(matrix);bounds.expandByPoint(v);if(named){const key=`${Math.sign(v.x)},${Math.sign(v.z)}`;if(!clusters.has(key))clusters.set(key,new T.Box3());clusters.get(key).expandByPoint(v);}}});
  if(bounds.isEmpty())continue;
  const c=bounds.getCenter(new T.Vector3());
  // Geometry extraction retains a small lateral offset for the wider AT
  // wheel. Its actual tyre bounds, not the spin pivot, determine the centre.
  const locations=named?[...clusters.values()].map(b=>{const p=b.getCenter(new T.Vector3());return {side:Math.sign(p.x),x:p.x,y:p.y,z:p.z};}):[{side:Math.sign(frame.parent?.position.x||1),x:c.x,y:c.y,z:c.z}];
  for(const p of locations){const g=nomadeSteelWheel(state.material);g.position.set(p.x+p.side*.086,p.y,p.z);g.rotation.y=p.side*Math.PI/2;frame.add(g);state.added.push(g);}
 }
 if(!state.added.length){state.material.dispose();return 0;}wheelStates.set(root,state);return state.added.length;
}
export function disposeCatalogueWheels(root){return applyCatalogueWheel(root,false);}
