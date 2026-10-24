import * as T from 'three';
import {PRO_MISSIONS} from './pro-trials.js';
export function createProTrials(world,parent){
 if(!world.proTrials?.length)return;
 const group=new T.Group();group.name='Pro trials / shared physical structures';parent.add(group);
 const concrete=new T.MeshStandardMaterial({color:'#85877f',roughness:.96}),steel=new T.MeshStandardMaterial({color:'#39484b',roughness:.66,metalness:.3}),paint=new T.MeshStandardMaterial({color:'#d8a444',roughness:.86}),white=new T.MeshStandardMaterial({color:'#ddd9c8',roughness:.9});
 concrete.onBeforeCompile=shader=>{
  shader.vertexShader='varying vec3 proPosition;\n'+shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nproPosition=(modelMatrix*vec4(transformed,1.0)).xyz;');
  shader.fragmentShader=`varying vec3 proPosition;
  float proHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
  float proNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(proHash(i),proHash(i+vec2(1,0)),f.x),mix(proHash(i+vec2(0,1)),proHash(i+vec2(1,1)),f.x),f.y);}
  `+shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
   vec2 concreteUV=proPosition.xz+proPosition.y*vec2(.27,.63);
   float broad=proNoise(concreteUV*.75),grain=proNoise(concreteUV*95.);
   diffuseColor.rgb*=.85+.20*broad+.09*grain;
  `);
 };concrete.customProgramCacheKey=()=> 'pro-concrete-1';
 for(const o of world.proTrials){
  const mesh=new T.Mesh(new T.BoxGeometry(o.width,o.height,o.depth),o.deck?concrete:steel);mesh.position.set(o.x,o.y+o.height/2,o.z);if(o.quaternion)mesh.quaternion.set(o.quaternion.x,o.quaternion.y,o.quaternion.z,o.quaternion.w);else mesh.rotation.y=o.yaw||0;mesh.castShadow=mesh.receiveShadow=true;mesh.userData.obstacleId=o.id;group.add(mesh);
  if(!o.deck)continue;
  // Thin paint only, not fake guardrails. Leave the tyres' contact surface visible.
  for(const side of [-1,1]){const edge=new T.Mesh(new T.BoxGeometry(.065,.006,o.depth),paint);edge.position.set(side*(o.width/2-.07),o.height/2+.005,0);mesh.add(edge);}
  if(o.depth>5)for(let z=-o.depth/2+1;z<o.depth/2;z+=3){const seam=new T.Mesh(new T.BoxGeometry(o.width-.16,.004,.025),steel);seam.position.set(0,o.height/2+.004,z);mesh.add(seam);}
 }
 for(const [i,m]of PRO_MISSIONS.entries()){
  const canvas=document.createElement('canvas');canvas.width=768;canvas.height=256;const ctx=canvas.getContext('2d');ctx.fillStyle='#243138';ctx.fillRect(0,0,768,256);ctx.fillStyle='#e7ad48';ctx.font='bold 40px sans-serif';ctx.fillText(`0${i+1} / PRO TRIAL`,32,55);ctx.fillStyle='#f3eee2';ctx.font='bold 48px sans-serif';ctx.fillText(m.name.split(' / ')[1].toUpperCase(),32,122);ctx.font='25px sans-serif';ctx.fillText(i===2?'4H / 2 → 4L / L · STOP AT SUMMIT':'4L / L · EXPOSED EDGES · NO GUARDRAILS',32,180);ctx.fillText('FICTIONAL CLOSED-COURSE CHALLENGE',32,222);
  const texture=new T.CanvasTexture(canvas);texture.colorSpace=T.SRGBColorSpace;
  const sign=new T.Mesh(new T.PlaneGeometry(5.4,1.8),new T.MeshStandardMaterial({map:texture,roughness:.9,side:T.DoubleSide}));sign.rotation.y=Math.PI;sign.position.set(m.spawn.x-4.5,2.5,m.spawn.z+6);group.add(sign);
  for(const dx of [-2.3,2.3]){const post=new T.Mesh(new T.BoxGeometry(.08,3.4,.08),steel);post.position.set(sign.position.x+dx,1.7,sign.position.z+.08);post.castShadow=true;group.add(post);}
  // Painted staging box and summit stopping targets use authored deck height.
  for(const p of m.routes.expert.filter(p=>p.stop)){const box=new T.Group();box.position.set(p.x,p.elevation+.016,p.z);box.rotation.y=p.heading||0;group.add(box);for(const side of [-1,1]){const edge=new T.Mesh(new T.BoxGeometry(.07,.008,2*p.depth),white);edge.position.x=side*p.radius;box.add(edge);const end=new T.Mesh(new T.BoxGeometry(2*p.radius,.008,.07),white);end.position.z=side*p.depth;box.add(end);}}
 }
}
