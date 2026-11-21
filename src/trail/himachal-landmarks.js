import * as T from 'three';
import {himachalLandmarkPlan,fordMarkers} from './himachal-landmark-plan.js';

// Original procedural props. The five flag colours follow the traditional
// blue, white, red, green, yellow order; no text or imagery is reproduced.
const FLAG_COLOURS=['#2f6fc4','#f3f0e4','#c9392c','#3d9150','#e8b624'];
const solid=(colour,roughness=.9)=>new T.MeshStandardMaterial({color:colour,roughness});
function part(parent,geometry,material,x,y,z){const mesh=new T.Mesh(geometry,material);mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;parent.add(mesh);return mesh;}
function milestoneTexture(label,value){
  const canvas=document.createElement('canvas');canvas.width=128;canvas.height=192;const c=canvas.getContext('2d');
  c.fillStyle='#f2efe6';c.fillRect(0,0,128,192);c.fillStyle='#e8b624';c.fillRect(0,0,128,62);c.fillStyle='#1c1f1d';c.textAlign='center';
  c.font='700 30px sans-serif';c.fillText(label,64,42,116);c.font='700 34px sans-serif';c.fillText(value,64,124,116);
  const texture=new T.CanvasTexture(canvas);texture.colorSpace=T.SRGBColorSpace;return texture;
}
export function createHimachalLandmarks(world){
  const plan=himachalLandmarkPlan(),root=new T.Group(),textures=[];root.name='Himachal roadside landmarks';
  const pole=solid('#6b5a45'),white=solid('#ece7da',.82),gold=new T.MeshStandardMaterial({color:'#c79a3a',roughness:.45,metalness:.5}),stone=solid('#e9e6dc',.85);
  // Prayer-flag lines: one instanced mesh for every flag in the valley.
  const flagCount=plan.flags.reduce((sum,line)=>sum+Math.floor(line.span/.42),0);
  const flags=new T.InstancedMesh(new T.PlaneGeometry(.36,.3),new T.MeshStandardMaterial({roughness:1,side:T.DoubleSide}),flagCount),matrix=new T.Matrix4(),rotation=new T.Quaternion(),euler=new T.Euler(),scale=new T.Vector3(1,1,1),colour=new T.Color();
  flags.castShadow=true;flags.name='Prayer flags';root.add(flags);let index=0;
  for(const line of plan.flags){
    const ax=Math.cos(line.yaw),az=-Math.sin(line.yaw),ends=[-1,1].map(side=>({x:line.x+ax*side*line.span/2,z:line.z+az*side*line.span/2})),tops=ends.map(p=>world.height(p.x,p.z)+line.height),points=[];
    ends.forEach((p,i)=>part(root,new T.CylinderGeometry(.045,.06,line.height,6),pole,p.x,tops[i]-line.height/2,p.z));
    const count=Math.floor(line.span/.42);
    for(let i=0;i<=count;i++){const t=i/count,sag=Math.sin(t*Math.PI)*line.span*.07,x=ends[0].x+(ends[1].x-ends[0].x)*t,z=ends[0].z+(ends[1].z-ends[0].z)*t,y=tops[0]+(tops[1]-tops[0])*t-sag;points.push(new T.Vector3(x,y,z));
      if(i<count){euler.set((i*37%11-5)*.03,line.yaw+(i*53%7-3)*.05,(i*29%9-4)*.035);rotation.setFromEuler(euler);matrix.compose(new T.Vector3(x+(ends[1].x-ends[0].x)/count/2,y-.17,z+(ends[1].z-ends[0].z)/count/2),rotation,scale);flags.setMatrixAt(index,matrix);flags.setColorAt(index,colour.set(FLAG_COLOURS[i%5]));index++;}
    }
    root.add(new T.Line(new T.BufferGeometry().setFromPoints(points),new T.LineBasicMaterial({color:'#4a4033'})));
  }
  flags.count=index;flags.instanceMatrix.needsUpdate=true;if(flags.instanceColor)flags.instanceColor.needsUpdate=true;
  // Chortens: stepped plinth, dome and spire.
  for(const c of plan.chortens){
    const g=new T.Group();g.position.set(c.x,world.height(c.x,c.z)-.05,c.z);g.scale.setScalar(c.scale);root.add(g);
    part(g,new T.BoxGeometry(2.6,.5,2.6),white,0,.25,0);part(g,new T.BoxGeometry(2.05,.45,2.05),white,0,.72,0);part(g,new T.BoxGeometry(1.5,.4,1.5),white,0,1.14,0);
    const dome=part(g,new T.SphereGeometry(.72,18,12),white,0,1.86,0);dome.scale.y=.92;part(g,new T.BoxGeometry(.46,.3,.46),white,0,2.62,0);
    part(g,new T.ConeGeometry(.2,1.05,10),gold,0,3.28,0);part(g,new T.SphereGeometry(.11,10,8),gold,0,3.86,0);
  }
  // Distance stones face oncoming traffic on the climb and the descent.
  for(const m of [...plan.milestones,...(world.openWater?fordMarkers():[])]){
    const g=new T.Group();g.position.set(m.x,world.height(m.x,m.z),m.z);g.rotation.y=m.yaw+Math.PI;root.add(g);
    part(g,new T.BoxGeometry(.5,.78,.2),stone,0,.39,0);const texture=milestoneTexture(m.label,m.value);textures.push(texture);
    const face=new T.Mesh(new T.PlaneGeometry(.46,.7),new T.MeshStandardMaterial({map:texture,roughness:.8}));face.position.set(0,.4,.102);g.add(face);
  }
  root.userData.dispose=()=>textures.forEach(texture=>texture.dispose());
  return root;
}
