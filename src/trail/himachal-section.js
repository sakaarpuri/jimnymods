import * as T from 'three';
import {rockGeometry,rockMaterial} from './rock-surfaces.js';
import {bridgeSurfaceMaterial} from './world-exploration.js';
import {createScannedRock} from './scanned-rocks.js';
import {sectionWaterMaterial} from './section-water.js';
import {attachRiverReflection} from './river-reflection.js';
const smooth=n=>{const t=Math.max(0,Math.min(1,n));return t*t*(3-2*t);};
export const HIMACHAL_SECTION=Object.freeze({id:'rock-river',groundSpacing:.65,bounds:{minX:-14,maxX:112,minZ:88,maxZ:205},spawn:{x:62,z:96,yaw:0},
 river:{centerX:22,minZ:110,maxZ:205,width:12,waterAtBridge:9.4,grade:.16},
 bridge:{x:22,z:130,length:24,width:6,deckTop:12.4},lookout:{x:60,z:190},lines:{
 technical:[[62,96],[65,108],[65,120],[65,151],[65,175],[60,190]],
 bypass:[[62,96],[48,106],[42,120],[40,149],[44,176],[60,190]],
 return:[[60,190],[45,195],[42,180],[42,160],[44,148],[43,139],[38,132],[28,130],[16,130],[-6,130]]}});
export const sectionRiverCentre=z=>22+Math.sin((z-130)/30)*.8;
export const sectionWaterLevel=z=>9.4+(z-130)*.16;
export function sectionRiverEdges(z){
 const centre=sectionRiverCentre(z),nearBridge=1-smooth((Math.abs(z-130)-4)/6),taper=smooth((z-110)/6)*smooth((205-z)/6);
 const left=5.1+Math.sin(z*.23+.7)*.55+Math.sin(z*.61)*.28,right=5.1+Math.sin(z*.19+2.3)*.52+Math.sin(z*.53+.8)*.31;
 return {left:centre-(left+(6-left)*nearBridge)*taper,right:centre+(right+(6-right)*nearBridge)*taper};
}
export function sectionWaterExclusion(x,z){return (z>108&&z<207&&Math.abs(x-sectionRiverCentre(z))<13)||(Math.abs(z-130)<8&&x>-14&&x<50);}
export function sectionRiverHeight(base,x,z){
 const r=HIMACHAL_SECTION.river,b=HIMACHAL_SECTION.bridge;
 const d=Math.abs(x-sectionRiverCentre(z)),along=smooth((z-r.minZ)/10)*smooth((r.maxZ-z)/10);
 const cut=along*smooth((17-d)/9),bed=sectionWaterLevel(z)-.85+smooth((d-5)/9)*2;
 let result=base+(Math.min(base,bed)-base)*cut;
 // Only the bridge approaches are graded. The channel beneath its collider is
 // left visibly lower; it is never a painted-on water texture over a road.
 const outside=Math.max(0,Math.abs(x-b.x)-b.length/2);
 const road=smooth((8-Math.abs(z-b.z))/4)*smooth((18-outside)/10);
 if(outside>0)result+=(b.deckTop-result)*road;
 else result+=(b.deckTop-result)*road*smooth((Math.abs(x-b.x)-(b.length/2-2))/2);
 return result;
}
export function sectionSupportHeight(x,z){const b=HIMACHAL_SECTION.bridge;return Math.abs(x-b.x)<b.length/2&&Math.abs(z-b.z)<b.width/2?b.deckTop:null;}
export function sectionHazard(state){const r=HIMACHAL_SECTION.river;return state.z>r.minZ+5&&state.z<r.maxZ-5&&Math.abs(state.x-sectionRiverCentre(state.z))<r.width/2&&sectionSupportHeight(state.x,state.z)===null?'This river is closed to vehicles. Cross on the guarded bridge.':'';}
const finish=[{x:60,z:190,stop:true},{x:45,z:195},{x:42,z:180},{x:42,z:160},{x:44,z:148,stop:true},{x:43,z:139},{x:38,z:132,radius:1.8},{x:28,z:130,precision:true,heading:-Math.PI/2,depth:2.5,range:'4L'},{x:16,z:130},{x:-6,z:130}];
export const HIMACHAL_MISSIONS=[
 {id:'rock-river-technical',name:'Rock & river · technical line',summary:'Crawl over the stone climb, pause at the lookout, descend the wider return lane and finish across the guarded river bridge.',skill:'Wheel placement, descent and bridge alignment',mode:'4L',speedLimit:12,spawn:HIMACHAL_SECTION.spawn,
  routes:Object.fromEntries([['learn',60],['trail',65],['expert',70]].map(([level,x])=>[level,[{x:62,z:108,stop:true,range:'4L'},{x,z:120,precision:true,heading:0,depth:2.5,range:'4L'},{x,z:151,precision:true,heading:0,depth:2.5,range:'4L'},{x,z:175,precision:true,heading:0,depth:2.5,range:'4L'},...finish.map(p=>({...p}))]]))},
 {id:'rock-river-bypass',name:'Rock & river · wider bypass',summary:'Choose the broad climbing lane instead of the stone steps. Share the lookout, controlled descent and guarded bridge finish.',skill:'Choosing a lower-risk line',mode:'4L',speedLimit:12,spawn:HIMACHAL_SECTION.spawn,
  routes:Object.fromEntries(['learn','trail','expert'].map(level=>[level,[{x:48,z:106,stop:true,range:'4L'},{x:42,z:120},{x:40,z:149},{x:44,z:176},...finish.map(p=>({...p}))]]))}
];
export function sectionCollisionPlan(world){
 const b=HIMACHAL_SECTION.bridge,props=[{id:'section-bridge-deck',type:'box',x:b.x,z:b.z,y:b.deckTop-.24,width:b.length,depth:b.width,height:.24,yaw:0,material:'deck'}];
 for(const side of [-1,1]){
  for(const h of [.5,1.02])props.push({id:`section-rail-${side}-${h}`,type:'box',x:b.x,z:b.z+side*(b.width/2+.12),y:b.deckTop+h,width:b.length,depth:.16,height:.14,yaw:0,material:'rail'});
  for(let x=b.x-b.length/2;x<=b.x+b.length/2;x+=4)props.push({id:`section-post-${side}-${x}`,type:'box',x,z:b.z+side*(b.width/2+.12),y:b.deckTop,width:.19,depth:.19,height:1.22,yaw:0,material:'rail'});
  for(let z=116;z<201;z+=1.9){if(Math.abs(z-b.z)<5.5)continue;const pz=z+Math.sin(z*2.31)*.25,x=sectionRiverCentre(pz)+side*(8.4+Math.sin(z*.17+side)*.6+Math.sin(z*.39)*.2),y=world.height(x,pz)-.2;
   props.push({id:`section-bank-${side}-${z}`,type:'rock',x,z:pz,y,radius:1.2+(Math.sin(z*3.9)+1)*.15,height:1.22+(Math.sin(z*1.37+side)+1)*.4,yaw:z*.4,material:'bank'});
   if(Math.sin(z*3.7+side)>.05){const toeZ=pz+.5,edges=sectionRiverEdges(toeZ),toeX=edges[side<0?'left':'right']+side*.18,floor=world.height(toeX,toeZ)-.15;
    props.push({id:`section-shore-${side}-${z}`,type:'rock',x:toeX,z:toeZ,y:floor,radius:.32+(Math.sin(z*1.29)+1)*.22,height:Math.max(.3,sectionWaterLevel(toeZ)+.05+(Math.cos(z*.9)+1)*.13-floor),yaw:z*.9,material:'bank',wet:true});
   }
  }
 }
 // A few overlapping, riverbed-seated outcrops divide the current inside the
 // already closed-water area. They never intrude on the bridge approaches.
 for(const [cluster,[offset,z]]of [[2.4,118],[-2.2,148],[2.4,164],[-1.7,182],[2.7,195]].entries())for(let i=0;i<3;i++){
  const pz=z+(i-1)*.92,x=sectionRiverCentre(pz)+offset+Math.sin(cluster*2.3+i)*.62,y=world.height(x,pz)-.12,radius=1.05+(.5+.5*Math.sin(cluster*1.7+i*2.1))*.48;
  props.push({id:`section-shoal-${cluster}-${i}`,type:'rock',x,z:pz,y,radius,height:Math.max(.5,sectionWaterLevel(pz)+.35+(Math.sin(i*2.8+cluster)+1)*.18-y),yaw:cluster*1.4+i*.9,material:'bank',wet:true,shoal:true});
 }
 for(const x of [12,32]){const y=world.height(x,b.z);props.push({id:`section-pier-${x}`,type:'box',x,z:b.z,y,width:1,depth:b.width-.5,height:Math.max(.2,b.deckTop-y-.24),yaw:0,material:'deck'});}
 for(const side of [-1,1])props.push({id:`section-stringer-${side}`,type:'box',x:b.x,z:b.z+side*2.4,y:b.deckTop-.6,width:b.length,depth:.28,height:.36,yaw:0,material:'rail'});
 return props;
}
function timberMaterial(rail=false){
 const material=new T.MeshStandardMaterial({color:'#c7b49b',roughness:.86,metalness:0});
 material.name='WeatheredBridgeTimber';
 if(typeof document!=='undefined'){
  const loader=new T.TextureLoader(),textures=[];
  for(const [key,file]of [['map','timber.webp'],['normalMap','timber-normal.webp'],['roughnessMap','timber-rough.webp']]){
   const texture=loader.load(`assets/trail-textures/${file}`);texture.wrapS=texture.wrapT=T.RepeatWrapping;
   if(key==='map')texture.colorSpace=T.SRGBColorSpace;texture.anisotropy=4;material[key]=texture;textures.push(texture);
  }
  material.normalScale.set(.55,.55);material.addEventListener('dispose',()=>textures.forEach(t=>t.dispose()));
  // World-metre UVs continue across instanced planks: each board samples its
  // own grain instead of repeating the same photograph on every narrow strip.
  material.onBeforeCompile=shader=>{shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
   vec4 timberPoint=vec4(transformed,1.0);
   #ifdef USE_INSTANCING
    timberPoint=instanceMatrix*timberPoint;
   #endif
   vec3 timberWorld=(modelMatrix*timberPoint).xyz;
   vec2 timberUV=${rail?'vec2(timberWorld.z+timberWorld.y,timberWorld.x+timberWorld.y)*.5':'timberWorld.xz*.5'};
   #ifdef USE_MAP
    vMapUv=timberUV;
   #endif
   #ifdef USE_NORMALMAP
    vNormalMapUv=timberUV;
   #endif
   #ifdef USE_ROUGHNESSMAP
    vRoughnessMapUv=timberUV;
   #endif
  `);};
  material.customProgramCacheKey=()=> `world-metre-bridge-timber-v2-${rail}`;
 }
 return material;
}
export function createHimachalSection(world,parent){
 if(!world.himachalSection)return null;const root=new T.Group();root.name='HimachalRockRiverSection';parent.add(root);
 const props=world.sectionProps||[],dummy=new T.Object3D();
 for(const kind of ['deck','rail','bank']){
  const group=props.filter(p=>p.material===kind&&p.id!=='section-bridge-deck');if(!group.length)continue;
  if(kind==='bank'){
   for(let variant=0;variant<6;variant++){
    const wet=variant>=4,subset=group.filter((p,i)=>Boolean(p.wet)===wet&&i%(wet?2:4)===variant-(wet?4:0)),scan=createScannedRock(`river-bank-${variant}`,'mountain');if(!subset.length)continue;
    const mesh=new T.InstancedMesh(scan?.geometry||rockGeometry(`river-bank-${variant}`),scan?.material||rockMaterial('mountain'),subset.length);
    if(wet){mesh.material.color.set('#626e67');mesh.material.roughness=.48;mesh.material.envMapIntensity=.65;}
    subset.forEach((p,i)=>{dummy.position.set(p.x,p.y+p.height/2,p.z);dummy.scale.set(p.radius,p.height,p.radius);dummy.rotation.set(0,p.yaw,0);dummy.updateMatrix();mesh.setMatrixAt(i,dummy.matrix);});
    mesh.name=wet?`SectionShoreStone${variant}`:`SectionRockBank${variant}`;mesh.castShadow=mesh.receiveShadow=true;mesh.userData.sectionProps=subset;mesh.userData.scannedRock=scan?.userData.scannedRock||null;root.add(mesh);
   }
   continue;
  }
  const material=kind==='rail'?timberMaterial(true):bridgeSurfaceMaterial('bank');
  if(kind==='deck')material.color.set('#9a9789');
  const mesh=new T.InstancedMesh(kind==='bank'?rockGeometry('local-river-bank'):new T.BoxGeometry(1,1,1),material,group.length);
  group.forEach((p,i)=>{dummy.position.set(p.x,p.y+p.height/2,p.z);dummy.scale.set(p.type==='rock'?p.radius:p.width,p.height,p.type==='rock'?p.radius:p.depth);dummy.rotation.set(0,p.yaw,0);dummy.updateMatrix();mesh.setMatrixAt(i,dummy.matrix);});
  mesh.castShadow=mesh.receiveShadow=true;mesh.userData.sectionProps=group;root.add(mesh);
 }
 const deck=props.find(p=>p.id==='section-bridge-deck');
 if(deck){
  const count=Math.ceil(deck.width/.28),pitch=deck.width/count,thickness=.14;
  const mesh=new T.InstancedMesh(new T.BoxGeometry(pitch-.006,thickness,deck.depth),timberMaterial(),count);
  for(let i=0;i<count;i++){dummy.position.set(deck.x-deck.width/2+(i+.5)*pitch,deck.y+deck.height-thickness/2,deck.z);dummy.rotation.set(0,0,0);dummy.scale.set(1,1,1);dummy.updateMatrix();mesh.setMatrixAt(i,dummy.matrix);const tone=.78+(Math.sin(i*3.71)+1)*.1;mesh.setColorAt(i,new T.Color(tone,tone*.99,tone*.95));}
  mesh.name='SectionTimberDeck';mesh.castShadow=mesh.receiveShadow=true;mesh.userData.sectionProps=[deck];mesh.userData.timberDeck={count,pitch,top:deck.y+deck.height,thickness};root.add(mesh);
 }
 const pos=[],uv=[],indices=[],r=HIMACHAL_SECTION.river,n=80;
 for(let i=0;i<=n;i++){const z=r.minZ+(r.maxZ-r.minZ)*i/n,y=sectionWaterLevel(z),edges=sectionRiverEdges(z);pos.push(edges.left,y,z,edges.right,y,z);uv.push(0,i*.3,1,i*.3);if(i<n){const a=i*2;indices.push(a,a+2,a+1,a+1,a+2,a+3);}}
 const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.Float32BufferAttribute(pos,3));geometry.setAttribute('uv',new T.Float32BufferAttribute(uv,2));geometry.setIndex(indices);geometry.computeVertexNormals();
 const waterMaterial=sectionWaterMaterial(props.filter(p=>p.shoal));
 const water=new T.Mesh(geometry,waterMaterial);water.name='SectionClosedRiverWater';water.receiveShadow=true;water.onBeforeRender=()=>{waterMaterial.userData.flowTime.value=performance.now()/1000;};root.add(water);
 attachRiverReflection(water,{origin:new T.Vector3(r.centerX,sectionWaterLevel(130),130),normal:new T.Vector3(0,1,-r.grade)});return root;
}
