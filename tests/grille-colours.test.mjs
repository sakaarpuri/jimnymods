import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {Box3,Group} from 'three';
import {applyGrilleColours,validGrilleColour} from '../src/grille-colours.js';
import {fitSteeringBadge} from '../src/steering-badge.js';
import {extractFactoryBadge} from '../src/refined-parts.js';
import {separateCabinControls} from '../src/trail/cabin.js';
async function model(body){const bytes=readFileSync(new URL(`../assets/models/jimny-${body==='3door'?'swb':'lwb'}-blender.glb`,import.meta.url));return (await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'')).scene;}
test('grille colour values reject malformed input and preserve body matching',()=>{
 for(const value of ['body','#a8322e','#ABCDEF'])assert.equal(validGrilleColour(value),value);
 for(const value of [null,'red','url(x)','#123','original',{},['#123456']])assert.equal(validGrilleColour(value),'original');
});
for(const body of ['5door','3door']){
 test(`${body}: grille and badge paint independently without changing lamps or cavity materials`,async()=>{
  const scene=await model(body),root=scene.getObjectByName('OEMGrille'),headlamp=scene.getObjectByName('StockHeadlamps');const lamps=[];headlamp.traverse(o=>{if(o.isMesh)lamps.push([o.material,o.material.color.getHexString()]);});
  const originals=[];root.traverse(o=>{if(o.isMesh)originals.push([o.material.name,o.material.color.getHexString()]);});
  applyGrilleColours(root,{grilleColour:'body',badgeColour:'#a8322e'},'#697868',body);
  const badge=root.getObjectByName('FactoryGrilleEmblem');assert(badge);assert.equal(badge.material.color.getHexString(),'a8322e');
  root.traverse(o=>{if(o.isMesh&&o.material.name!=='IntakeShadow'&&o!==badge)assert.equal(o.material.color.getHexString(),'697868');});
  for(const [material,colour]of lamps)assert.equal(material.color.getHexString(),colour);
  applyGrilleColours(root,{grilleColour:'original',badgeColour:'original'},'#697868',body);
  root.traverse(o=>{if(o.isMesh)assert(originals.some(([name,hex])=>o.material.name===name&&o.material.color.getHexString()===hex));});
  for(const name of ['BlockGrille','RhinoGrille','ScriptGrille','GlossGrille','DeleteGrille','ClassicGrille','MeshGrille']){const group=scene.getObjectByName(name);applyGrilleColours(group,{grilleColour:'#202629',badgeColour:'#e6e5de'},'#fff',body);group.traverse(o=>{if(o.isMesh&&o.material.name==='GrilleLettering')assert.equal(o.material.color.getHexString(),'e6e5de');});}
 });
 test(`${body}: raised steering S faces the driver, clears the airbag and moves with the wheel`,async()=>{
  const scene=await model(body),badge=extractFactoryBadge(scene.getObjectByName('OEMGrille')),cabin=scene.getObjectByName('Cabin'),emblem=fitSteeringBadge(cabin,badge,body),bounds=new Box3().setFromObject(emblem,true),offset=body==='3door'?-.17:0;
  assert(Math.abs(bounds.max.x-bounds.min.x-.044)<.0001);assert(bounds.max.z<.229+offset);assert(bounds.min.z>.218+offset);assert.equal(fitSteeringBadge(cabin,badge,body),null,'must not duplicate badge');
  const parent=new Group();parent.add(cabin);const wheel=separateCabinControls(cabin,parent,body),moving=[];wheel.traverse(o=>{if(o.material?.name==='SteeringEmblem')moving.push(o);});assert.equal(moving.length,1);assert(moving[0].geometry.attributes.position.count>100);
  const normal=moving[0].geometry.attributes.normal;let facing=0;for(let i=0;i<normal.count;i++)if(normal.getZ(i)<-.8)facing++;assert(facing>20,'driver-facing facets must survive extraction');
 });
}
