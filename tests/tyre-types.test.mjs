import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {Box3,Group,Vector3,BufferGeometry,Float32BufferAttribute,Mesh} from 'three';
import {mudTerrainGeometry,resolveTyreType,applyTyreType,disposeTyreTypes} from '../src/tyre-types.js';
import {accessoryBuilder,accessoryMaterials} from '../src/accessories.js';

test('tyre type defaults follow legacy builds; explicit choices are authoritative',()=>{
 assert.equal(resolveTyreType({},new Set()),'highway');assert.equal(resolveTyreType({},new Set(['tires'])),'allterrain');
 for(const type of ['highway','allterrain','mudterrain'])assert.equal(resolveTyreType({tyreType:type},new Set(['tires'])),type);
 assert.equal(resolveTyreType({tyreType:'invalid'},new Set(['tires'])),'allterrain');
});
test('mud tread is finite, has open lug geometry and preserves requested rolling radius',()=>{
 for(const r of [.3465,.368]){
  const g=mudTerrainGeometry(r,.235),p=g.attributes.position;
  assert(p.count>3000);assert(p.count<60000);
  for(let i=0;i<p.count;i++){assert(Number.isFinite(p.getX(i)+p.getY(i)+p.getZ(i)));assert(Math.hypot(p.getY(i),p.getZ(i))<=r+.000001);}
  assert(g.boundingBox.max.y>r-.001);assert(g.boundingBox.min.y< -r+.001);g.dispose();
 }
});
test('both actual body models replace only four rubber tyres, retain rim materials and restore original geometry',async()=>{
 for(const body of ['lwb','swb']){
  const bytes=await readFile(new URL(`../assets/models/jimny-${body}-blender.glb`,import.meta.url));
  const gltf=await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'');
  const wheels=gltf.scene.getObjectByName('AllTerrainWheels'),rubber=[],rims=[];
  wheels.traverse(o=>{if(o.isMesh)(o.material.name==='TyreRubber'?rubber:rims).push(o);});
  const original=new Box3().setFromObject(wheels);assert.equal(applyTyreType(wheels,'mudterrain'),4);
  assert(rubber.every(o=>!o.visible));assert(rims.every(o=>o.visible));
  const generated=wheels.getObjectByName('MudTerrainTyres'),after=new Box3().setFromObject(generated);
  assert(Math.abs(after.min.y-original.min.y)<.001);assert(Math.abs(after.max.y-original.max.y)<.001);
  assert.equal(applyTyreType(wheels,'mudterrain'),0,'reapplying must not duplicate tyres');
  let disposed=0;generated.traverse(o=>o.geometry?.addEventListener('dispose',()=>disposed++));
  disposeTyreTypes(wheels);assert.equal(disposed,4);assert(rubber.every(o=>o.visible));assert(!wheels.getObjectByName('MudTerrainTyres'));
  gltf.scene.traverse(o=>{o.geometry?.dispose();o.material?.dispose();});
 }
});
test('mudflaps sit behind the full AT swept envelope, rather than through the tyres',()=>{
 const root=new Group(),mats=accessoryMaterials();accessoryBuilder({accessoryRig:root,mats,detailed:null,modelBody:'5door',colour:'#fff',effectiveDesign:{},lampEmitters:{}})(new Set(['mudflaps']),{grille:'oem',decal:'none'});
 const flaps=root.children.filter(o=>o.name==='Mudflap rubber');assert.equal(flaps.length,4);
 for(const flap of flaps){const b=new Box3().setFromObject(flap),axle=flap.position.z>0?1.295:-1.295;assert(b.max.z<axle-.368);assert(b.min.y>.16);assert(b.max.y>.5);assert(b.getSize(new Vector3()).z<.05);}
 root.traverse(o=>o.geometry?.dispose());Object.values(mats).forEach(m=>m.dispose());
});

test('game spin pivots receive four independently rotating MT tyres at the existing axle centres',async()=>{
 const bytes=await readFile(new URL('../assets/models/jimny-lwb-blender.glb',import.meta.url));
 const gltf=await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'');
 gltf.scene.updateMatrixWorld(true);const root=new Group();root.position.set(12,4,28);root.rotation.y=.6;
 for(const side of [-1,1])for(const front of [-1,1]){
  const pivot=new Group(),spin=new Group();pivot.position.set(side*.705,.368,front*1.295);pivot.add(spin);root.add(pivot);
  gltf.scene.getObjectByName('AllTerrainWheels').traverse(o=>{
   if(o.material?.name!=='TyreRubber')return;
   const source=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone(),p=source.attributes.position,values=[],v=new Vector3();
   for(let i=0;i<p.count;i+=3){const triangle=[0,1,2].map(j=>v.fromBufferAttribute(p,i+j).applyMatrix4(o.matrixWorld).clone());if(Math.sign(triangle[0].x)!==side||Math.sign(triangle[0].z)!==front)continue;for(const pt of triangle)values.push(pt.x-side*.705,pt.y-.368,pt.z-front*1.295);}
   const geometry=new BufferGeometry();geometry.setAttribute('position',new Float32BufferAttribute(values,3));spin.add(new Mesh(geometry,o.material.clone()));source.dispose();
  });
 }
 assert.equal(applyTyreType(root,'mudterrain'),4);
 for(const pivot of root.children){const spin=pivot.children[0],tyre=spin.getObjectByName('MudTerrainTyres').children[0];assert(Math.abs(tyre.position.y)<.001);assert(Math.abs(tyre.position.z)<.001);spin.rotation.x=.4;assert.equal(tyre.parent.parent,spin);}
 disposeTyreTypes(root);root.traverse(o=>{o.geometry?.dispose();o.material?.dispose();});gltf.scene.traverse(o=>{o.geometry?.dispose();o.material?.dispose();});
});
