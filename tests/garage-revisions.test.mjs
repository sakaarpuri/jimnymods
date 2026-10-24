import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {Vector3,Group} from 'three';
import {applyWheelColour} from '../src/wheel-finishes.js';
import {createSurfaceStyler} from '../src/surface-finishes.js';
import {applyGrilleColours} from '../src/grille-colours.js';
import {insidePose,INTERIOR_VIEWS,CUTAWAY_VIEWS} from '../src/garage-cameras.js';
import {separateCabinControls} from '../src/trail/cabin.js';
async function model(body){const b=await readFile(new URL(`../assets/models/jimny-${body}-blender.glb`,import.meta.url));return (await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'')).scene;}
test('cabin offers driver, passenger and both front doors with body-specific eye positions',()=>{
 assert.equal(insidePose('interior').eye[0],-.38);assert.equal(insidePose('passenger').eye[0],.38);
 assert.equal(insidePose('driver-door').yaw,-Math.PI/2);assert.equal(insidePose('passenger-door').yaw,Math.PI/2);
 assert(INTERIOR_VIEWS.has('driver-door'));assert(INTERIOR_VIEWS.has('passenger-door'));assert(CUTAWAY_VIEWS.has('cargo'));assert(CUTAWAY_VIEWS.has('doors-cutaway'));
 assert(Math.abs(insidePose('interior','3door').eye[2]-insidePose('interior').eye[2]+.17)<1e-9);
});
for(const body of ['lwb','swb']){
 test(body+': blackout is a base, not a permanent grille or badge colour lock',async()=>{
  const root=await model(body),grille=root.getObjectByName('OEMGrille'),s=createSurfaceStyler();
  applyGrilleColours(grille,{grilleColour:'#be4937',badgeColour:'#eeeeea'},'#171b1d',body==='swb'?'3door':'5door');
  const explicit=[];grille.traverse(m=>{if(m.material?.userData.explicitSurfaceColour)explicit.push([m,m.material.color.getHexString()]);});assert(explicit.length>1);
  s.apply([root],{allBlack:true,partFinishes:{grille:'matte'}});for(const [m,colour]of explicit){assert.equal(m.material.color.getHexString(),colour);assert.equal(m.material.roughness,.85);}s.clear();
  applyGrilleColours(grille,{grilleColour:'original',badgeColour:'original'},'#171b1d',body==='swb'?'3door':'5door');const factory=[];grille.traverse(m=>{if(m.material?.userData.explicitSurfaceColour)factory.push([m,m.material.color.getHexString()]);});s.apply([root],{allBlack:true});for(const [m,colour]of factory)assert.equal(m.material.color.getHexString(),colour,'Original finish must remain selectable after blackout');s.clear();
 });
 test(body+': custom rim tint plus blackout never tints rear drums behind the spokes',async()=>{
  const root=await model(body),wheel=root.getObjectByName('StockWheels'),saved=[];root.updateMatrixWorld(true);
  wheel.traverse(m=>{if(m.isMesh)saved.push({mesh:m,geometry:m.geometry,material:m.material});});
  assert(applyWheelColour(wheel,'#be4937')>0);const s=createSurfaceStyler();s.apply([root],{allBlack:true,partColours:{wheels:'#be4937'},partFinishes:{wheels:'gloss'}});let preserved=0,coloured=0;
  for(const {mesh,geometry,material}of saved){const p=geometry.attributes.position,c=geometry.attributes.color,out=mesh.geometry.attributes.color,v=new Vector3(),half=body==='swb'?1.125:1.295;
   for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i).applyMatrix4(mesh.matrixWorld);const radius=Math.hypot(v.y-.3465,v.z+half),axial=Math.abs(Math.abs(v.x)-.705);if(v.z>0||radius>.13||axial>.035)continue;preserved++;
    for(let j=0;j<3;j++){const channel=['r','g','b'][j],before=material.color[channel]*(material.vertexColors&&c?c.getComponent(i,j):1),after=mesh.material.color[channel]*(mesh.material.vertexColors&&out?out.getComponent(i,j):1);assert(Math.abs(before-after)<1e-6,'rear drum colour changed');}
   }
   for(let i=0;i<(out?.count||0);i++)if(out.getX(i)>.3&&out.getY(i)<.1)coloured++;
  }assert(preserved>100);assert(coloured>100);s.clear();
 });
 test(body+': steering keeps a fixed column rake and an independent turn axis',async()=>{
  const root=await model(body),parent=new Group();parent.add(root);parent.updateMatrixWorld(true);const wheel=separateCabinControls(root.getObjectByName('Cabin'),parent,body==='swb'?'3door':'5door');assert(wheel.children.length>2);assert.equal(wheel.rotation.x,.27);wheel.rotation.z=.3;assert.equal(wheel.rotation.x,.27);
 });
}
