import * as T from 'three';
import {triangleSubset} from './grille-colours.js';
import {upholsteryMaterial,validFabric} from './interior-fabrics.js';

const states=new WeakMap();
// The source GLB batches seats, belts and headliner by material. Isolate only
// seating before changing fabric or folding it; leave cabin trim untouched.
export function prepareCabinUpgrades(root,body='5door'){
 if(!root||states.has(root))return states.get(root);
 root.updateWorldMatrix(true,true);const parentInverse=root.parent?.matrixWorld.clone().invert()||new T.Matrix4(),canonical=new T.Group();canonical.name='ConfigurableSeating';canonical.applyMatrix4(root.matrix.clone().invert());root.add(canonical);
 const state={groups:{},materials:[],fabricKey:'',body},sources=[];root.traverse(o=>{if(o.isMesh&&!o.userData.cabinUpgrade&&['WovenCabinFabric','CabinSeatInsert','BrightChrome'].includes(o.material?.name))sources.push(o);});
 const offset=body==='3door'?-.17:0,v=new T.Vector3();
 for(const mesh of sources){
  const source=mesh.geometry,p=source.attributes.position,index=source.index,transform=parentInverse.clone().multiply(mesh.matrixWorld),buckets={keep:[],rear:[],passengerBack:[],passengerHead:[],front:[]};
  for(let i=0;i<(index?.count||p.count);i+=3){const ids=[0,1,2].map(j=>index?index.getX(i+j):i+j);let x=0,y=0,z=0;for(const id of ids){v.fromBufferAttribute(p,id).applyMatrix4(transform);x+=v.x/3;y+=v.y/3;z+=v.z/3;}
   let role='keep';
   if(mesh.material.name==='BrightChrome'){if(x>.22&&x<.53&&y>1.20&&y<1.30&&Math.abs(z-(-.18+offset))<.035)role='passengerHead';}
   else if(y>.73&&y<1.46&&z<(body==='3door'?-.44:-.55))role='rear';
   else if(Math.abs(x)<.64&&Math.abs(x)>.10&&y>.74&&y<1.44&&z>-.32+offset&&z<.42+offset){role=x>0&&y>1.263?'passengerHead':x>0&&y>.88&&z<-.012+offset?'passengerBack':'front';}
   buckets[role].push(...ids);
  }
  mesh.geometry=triangleSubset(source,buckets.keep);
  for(const role of ['rear','passengerBack','passengerHead','front'])if(buckets[role].length){
   let g=state.groups[role];if(!g){g=new T.Group();g.name='Seating_'+role;canonical.add(g);state.groups[role]=g;}
   const geometry=triangleSubset(source,buckets[role]);geometry.applyMatrix4(transform);
   // Baking Cabin's mirror also requires reversing its triangle winding.
   if(transform.determinant()<0){const indices=[];for(let i=0;i<geometry.attributes.position.count;i+=3)indices.push(i,i+2,i+1);geometry.setIndex(indices);}
   const part=new T.Mesh(geometry,mesh.material.clone());part.name=mesh.material.name==='CabinSeatInsert'?'SeatWovenCentre':mesh.material.name==='BrightChrome'?'PassengerHeadrestPost':'SeatOuterBolster';part.userData.cabinUpgrade=true;part.userData.seatInsert=mesh.material.name==='CabinSeatInsert';part.userData.disposableMaterial=true;part.userData.originalMaterial=mesh.material;part.castShadow=part.receiveShadow=true;g.add(part);if(mesh.material.name!=='BrightChrome')state.materials.push(part);
  }
  source.dispose();
 }
 const back=state.groups.passengerBack;if(back){const pivot=new T.Vector3(.37,.84,-.11+offset);back.position.copy(pivot);back.children.forEach(m=>m.geometry.translate(-pivot.x,-pivot.y,-pivot.z));}
 const rear=state.groups.rear;if(rear){const pivot=new T.Vector3(0,.82,body==='3door'?-.88:-1.055);rear.position.copy(pivot);rear.children.forEach(m=>m.geometry.translate(-pivot.x,-pivot.y,-pivot.z));}
 states.set(root,state);return state;
}
export function applyCabinUpgrades(root,{body='5door',seats=false,fabric='canvas',colour='#a38b69',touring=false,camp=false}={}){
 const state=prepareCabinUpgrades(root,body);if(!state)return;
 const key=[seats,validFabric(fabric),colour].join(':');
 if(state.fabricKey!==key){
  for(const mesh of state.materials){
   const old=mesh.material;mesh.material=seats?upholsteryMaterial(mesh.userData.seatInsert?fabric:fabric==='leather'?'leather':'canvas',mesh.userData.seatInsert?colour:['canvas','leather'].includes(fabric)?colour:'#303536'):mesh.userData.originalMaterial.clone();mesh.material.name=mesh.userData.seatInsert?'CabinSeatInsert':'SeatCoverBolster';
   // Preserve the baseline clone independently of replaceable fabric maps.
   mesh.material.vertexColors=!!mesh.geometry.attributes.color;old.dispose();
  }state.fabricKey=key;
 }
 if(state.groups.rear){state.groups.rear.visible=!touring;}
 if(state.groups.passengerBack)state.groups.passengerBack.rotation.x=touring&&camp?-Math.PI/2:0;
 if(state.groups.passengerHead)state.groups.passengerHead.visible=!(touring&&camp);
 root.userData.interiorLayout={touring:!!touring,camp:!!(touring&&camp),fabric:validFabric(fabric),seats:!!seats};
 return state;
}
