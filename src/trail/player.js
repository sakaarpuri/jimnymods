import * as T from 'three';
import {DecalGeometry} from 'three/addons/geometries/DecalGeometry.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {clone as cloneSkeleton} from 'three/addons/utils/SkeletonUtils.js';
import {applyDriverMaterialDetails} from './driver-materials.js';

const driverAssets=new Map();let driverAssetPromise;
const driverVersions={man:'c0f03a53c77a',woman:'4c61a8a27f3e'};
// Explicit async preflight lets the game wait before declaring itself ready.
// A network failure retains the existing original fallback, never a blank seat.
export async function preloadDriverAssets({loader}={}){
  if(driverAssets.size===2)return true;
  if(!driverAssetPromise){
    const assetLoader=loader||new GLTFLoader().setMeshoptDecoder(MeshoptDecoder);
    driverAssetPromise=Promise.all(['man','woman'].map(async kind=>{
      const gltf=await assetLoader.loadAsync(`/assets/models/drivers/${kind}.glb?v=${driverVersions[kind]}`);
      driverAssets.set(kind,gltf.scene);
    })).then(()=>true).catch(()=>false).finally(()=>{driverAssetPromise=undefined;});
  }
  return driverAssetPromise;
}
export function createRiggedDriver(template,kind,body){
  const root=new T.Group();root.name='PlayerDriver';root.position.set(-.37,0,body==='3door'?-.17:0);
  const model=cloneSkeleton(template);root.add(model);const heads=[];
  model.traverse(o=>{
    if(!o.isMesh)return;o.material=o.material.clone();applyDriverMaterialDetails(o.material);o.castShadow=true;o.receiveShadow=true;o.frustumCulled=false;
    if(/^Driver(Head|Hair|Eye|Iris|Pupil)/.test(o.name))heads.push(o);
  });
  root.updateMatrixWorld(true);
  const arms=[];
  for(const [suffix,side] of [['L',1],['R',-1]]){
    const upper=model.getObjectByName(`upperarm01${suffix}`),lower=model.getObjectByName(`lowerarm01${suffix}`),wrist=model.getObjectByName(`wrist${suffix}`);
    if(!upper||!lower||!wrist)continue;
    const local=o=>root.worldToLocal(o.getWorldPosition(new T.Vector3()));
    const shoulder=local(upper),elbow=local(lower),hand=local(wrist);
    const palmBase=model.getObjectByName(`metacarpal1${suffix}`),knuckle=model.getObjectByName(`finger3-1${suffix}`);
    const gripOffset=palmBase&&knuckle?local(palmBase).add(local(knuckle)).multiplyScalar(.5).sub(hand):new T.Vector3(0,-.048,.05);
    arms.push({side,upper,lower,wrist,palmBase,knuckle,gripOffset,shoulder,elbow,upperLength:shoulder.distanceTo(elbow),lowerLength:elbow.distanceTo(hand),
      upperPosition:upper.position.clone(),upperRest:upper.quaternion.clone(),lowerRest:lower.quaternion.clone(),wristRest:wrist.quaternion.clone(),wristOrientation:wrist.getWorldQuaternion(new T.Quaternion())});
  }
  root.userData.head=heads.find(o=>o.name==='DriverHead')||heads[0];root.userData.headParts=heads;
  root.userData.firstPersonHiddenParts=[...heads,...['DriverShirt','DriverShirtHem'].map(n=>model.getObjectByName(n)).filter(Boolean)];
  root.userData.sleeveCaps=model.getObjectByName('DriverSleeveCaps');
  if(root.userData.sleeveCaps)root.userData.sleeveCaps.material.side=T.DoubleSide;
  root.userData.riggedArms=arms;root.userData.rigged=true;root.userData.kind=kind;
  updateDriver(root,{},false);return root;
}

// World-space eye position, derived from anatomical eye bones when available.
// The former fixed 1.43m camera was inside the new driver's shirt collar.
export function getDriverViewpoint(driver){
  driver.updateWorldMatrix(true,true);
  const left=driver.getObjectByName('eyeL'),right=driver.getObjectByName('eyeR');
  if(left&&right){
    const eyes=left.getWorldPosition(new T.Vector3()).add(right.getWorldPosition(new T.Vector3())).multiplyScalar(.5);
    return eyes.add(new T.Vector3(0,0,1).transformDirection(driver.matrixWorld).multiplyScalar(.018));
  }
  // No avatar still uses the same adult seating eye point. The old capsule
  // height put a composed rearward-offset camera inside the driver's seat.
  return driver.localToWorld(driver.userData.kind==='none'?new T.Vector3(0,1.52,.08):new T.Vector3(0,1.43,.035));
}

function updateRiggedArms(driver,state,firstPerson=false){
  const angle=T.MathUtils.clamp(-(state.steer||0)*14,-1.05,1.05);
  const worldRotation=driver.getWorldQuaternion(new T.Quaternion());
  const localPosition=o=>driver.worldToLocal(o.getWorldPosition(new T.Vector3()));
  const aim=(bone,end,target)=>{
    const head=bone.getWorldPosition(new T.Vector3()),tail=end.getWorldPosition(new T.Vector3()),destination=driver.localToWorld(target.clone());
    const rotation=new T.Quaternion().setFromUnitVectors(tail.sub(head).normalize(),destination.sub(head).normalize());
    const world=rotation.multiply(bone.getWorldQuaternion(new T.Quaternion()));
    bone.quaternion.copy(bone.parent.getWorldQuaternion(new T.Quaternion()).invert().multiply(world));bone.updateWorldMatrix(false,true);
  };
  for(const arm of driver.userData.riggedArms){
    arm.upper.position.copy(arm.upperPosition);
    if(firstPerson){
      // The composed cockpit camera is behind the anatomical eye. Its near
      // plane used to cut the upper sleeves open, exposing their brown inner
      // faces. Lower the first-person shoulder origin into the unseen torso;
      // IK still solves the exact same palm targets on the steering rim.
      const origin=driver.localToWorld(arm.shoulder.clone().add(new T.Vector3(0,-.22,0)));
      arm.upper.position.copy(arm.upper.parent.worldToLocal(origin));
    }
    arm.upper.quaternion.copy(arm.upperRest);arm.lower.quaternion.copy(arm.lowerRest);arm.wrist.quaternion.copy(arm.wristRest);driver.updateMatrixWorld(true);
    const grip=new T.Vector3(-.01+arm.side*.16*Math.cos(angle),1.16+arm.side*.16*Math.sin(angle),.255);
    const target=grip.sub(arm.gripOffset.clone().applyAxisAngle(new T.Vector3(0,0,1),angle));
    const shoulder=localPosition(arm.upper),axis=target.clone().sub(shoulder),distance=T.MathUtils.clamp(axis.length(),.001,arm.upperLength+arm.lowerLength-.001);axis.normalize();
    const a=(arm.upperLength**2-arm.lowerLength**2+distance**2)/(2*distance),height=Math.sqrt(Math.max(0,arm.upperLength**2-a*a));
    const bend=arm.elbow.clone().sub(arm.shoulder);bend.addScaledVector(axis,-bend.dot(axis)).normalize();
    const elbow=shoulder.clone().addScaledVector(axis,a).addScaledVector(bend,height);
    aim(arm.upper,arm.lower,elbow);aim(arm.lower,arm.wrist,target);
    const wristWorld=worldRotation.clone().multiply(new T.Quaternion().setFromAxisAngle(new T.Vector3(0,0,1),angle)).multiply(arm.wristOrientation);
    arm.wrist.quaternion.copy(arm.wrist.parent.getWorldQuaternion(new T.Quaternion()).invert().multiply(wristWorld));arm.wrist.updateWorldMatrix(false,true);
  }
}

// Original seated avatars, not scans or likenesses of real people. Rigged
// first-person sleeves/hands/legs remain visible; head and upper torso hide.
export function createDriver(kind,body){
  if(kind!=='none'&&driverAssets.has(kind))return createRiggedDriver(driverAssets.get(kind),kind,body);
  const root=new T.Group();root.name='PlayerDriver';root.userData.kind=kind;root.position.set(-.37,0,body==='3door'?-.17:0);if(kind==='none')return root;
  const skin=new T.MeshStandardMaterial({color:'#b7815f',roughness:.9}),shirt=new T.MeshStandardMaterial({color:kind==='woman'?'#a85d48':'#4a6961',roughness:1}),trousers=new T.MeshStandardMaterial({color:'#303c45'}),hair=new T.MeshStandardMaterial({color:'#302720'}),belt=new T.MeshStandardMaterial({color:'#242925'});
  const head=new T.Group();head.name='DriverHead';root.add(head);
  function ellipsoid(x,y,z,sx,sy,sz,material,parent=root){const m=new T.Mesh(new T.SphereGeometry(1,20,14),material);m.position.set(x,y,z);m.scale.set(sx,sy,sz);m.castShadow=true;parent.add(m);return m;}
  function limb(a,b,r,material){const aa=new T.Vector3(...a),bb=new T.Vector3(...b),d=bb.clone().sub(aa),m=new T.Mesh(new T.CapsuleGeometry(r,Math.max(.001,d.length()-r*2),5,12),material);m.position.copy(aa.add(bb).multiplyScalar(.5));m.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.normalize());m.castShadow=true;root.add(m);return m;}
  ellipsoid(0,1.10,-.065,.17,.235,.105,shirt);ellipsoid(0,.85,.015,.17,.10,.13,trousers);
  limb([0,1.27,-.035],[0,1.34,-.02],.055,skin);ellipsoid(0,1.425,-.025,.083,.105,.079,skin,head);
  ellipsoid(0,1.485,-.043,.087,.057,.078,hair,head);ellipsoid(0,1.418,.050,.015,.022,.016,skin,head);
  if(kind==='woman'){ellipsoid(0,1.405,-.085,.085,.095,.04,hair,head);ellipsoid(0,1.35,-.15,.036,.083,.038,hair,head);}
  const arms=[];
  for(const s of [-1,1]){
    ellipsoid(s*.031,1.443,.049,.006,.004,.003,belt,head);
    ellipsoid(s*.077,1.425,-.021,.012,.024,.014,skin,head);
    limb([s*.10,.85,.04],[s*.105,.80,.31],.068,trousers);limb([s*.105,.80,.31],[s*.10,.735,.54],.053,trousers);ellipsoid(s*.1,.718,.58,.055,.028,.10,belt);
    const shoulder=[s*.16,1.23,-.025],elbow=[s*.21,1.06,.10],hand=[-.01+s*.16,1.16,.255];
    limb(shoulder,elbow,.045,shirt);const forearm=limb(elbow,hand,.032,skin),palm=ellipsoid(...hand,.029,.023,.037,skin);
    // Rounded finger segments wrap around the steering rim rather than float.
    for(let f=0;f<4;f++){const finger=new T.Mesh(new T.CapsuleGeometry(.005,.022,3,6),skin);finger.position.set((s*.010+(f-1.5)*.006)/.029,-.007/.023,.021/.037);finger.rotation.x=Math.PI/2;palm.add(finger);finger.scale.set(1/.029,1/.023,1/.037);}
    arms.push({side:s,elbow:new T.Vector3(...elbow),forearm,palm,length:new T.Vector3(...elbow).distanceTo(new T.Vector3(...hand))});
  }
  // Diagonal shoulder belt, above clothing and across the seated torso.
  limb([-.145,1.29,.02],[.12,.89,.13],.012,belt);
  root.userData.head=head;root.userData.arms=arms;return root;
}
export function updateDriver(driver,state={},firstPerson=false){
  if(!driver)return;driver.visible=true;
  if(driver.userData.rigged){
    // A game-style composed cockpit hides the camera-intersecting upper torso,
    // not the whole driver: sleeves, hands, trousers and shoes stay in view.
    for(const part of driver.userData.firstPersonHiddenParts)part.visible=!firstPerson;
    if(driver.userData.sleeveCaps)driver.userData.sleeveCaps.visible=firstPerson;
    driver.updateMatrixWorld(true);updateRiggedArms(driver,state,firstPerson);return;
  }
  if(driver.userData.head)driver.userData.head.visible=!firstPerson;
  // A driver regrips beyond a quarter turn. Keep the simplified seated rig on
  // the rim without twisting elbows through the torso at full steering lock.
  const angle=Math.max(-1.05,Math.min(1.05,-(state.steer||0)*14));
  for(const arm of driver.userData.arms||[]){
    const hand=new T.Vector3(-.01+arm.side*.16*Math.cos(angle),1.16+arm.side*.16*Math.sin(angle),.255),delta=hand.clone().sub(arm.elbow);
    arm.palm.position.copy(hand);arm.palm.rotation.z=angle;
    arm.forearm.position.copy(hand).add(arm.elbow).multiplyScalar(.5);arm.forearm.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),delta.clone().normalize());arm.forearm.scale.y=delta.length()/arm.length;
  }
}
export function createNameDecals(name,body,paintMeshes,parent){
  const root=new T.Group();root.name='PlayerNameDecals';if(!name)return root;
  const canvas=document.createElement('canvas');canvas.width=1024;canvas.height=192;const ctx=canvas.getContext('2d');ctx.textAlign='center';ctx.textBaseline='middle';ctx.font='700 100px sans-serif';ctx.lineJoin='round';ctx.strokeStyle='#182622';ctx.lineWidth=9;ctx.strokeText(name,512,96,960);ctx.fillStyle='#fffdf2';ctx.fillText(name,512,96,960);
  const texture=new T.CanvasTexture(canvas);texture.colorSpace=T.SRGBColorSpace;
  const material=new T.MeshStandardMaterial({map:texture,transparent:true,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-5,roughness:.65});parent.updateMatrixWorld(true);
  material.userData.disposableMaterial=true;
  for(const side of [-1,1])for(const target of paintMeshes){
    const position=parent.localToWorld(new T.Vector3(side*.748,.99,body==='3door'?-.07:.13)),orientation=new T.Euler(0,side*Math.PI/2,0),geo=new DecalGeometry(target,position,orientation,new T.Vector3(.69,.13,.13));geo.applyMatrix4(parent.matrixWorld.clone().invert());if(geo.attributes.position.count){const m=new T.Mesh(geo,material);m.renderOrder=5;root.add(m);}else geo.dispose();
  }
  return root;
}
