import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {Group,Box3,Vector3} from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {prepareCabinUpgrades,applyCabinUpgrades} from '../src/cabin-upgrades.js';
import {upholsteryMaterial,fabricTextures} from '../src/interior-fabrics.js';
import {doorInserts,touringInterior,TOURING_LAYOUT} from '../src/touring-interior.js';
import {accessoryMaterials,accessoryBuilder} from '../src/accessories.js';
async function model(body){const bytes=readFileSync(new URL(`../assets/models/jimny-${body==='3door'?'swb':'lwb'}-blender.glb`,import.meta.url));return (await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'')).scene;}
for(const body of ['5door','3door'])test(`${body}: material-batched seats retain position, fold independently and restore`,async()=>{
 const scene=await model(body),cabin=scene.getObjectByName('Cabin'),bounds=new Box3().setFromObject(cabin,true),state=prepareCabinUpgrades(cabin,body);
 const after=new Box3().setFromObject(cabin,true);assert(bounds.min.distanceTo(after.min)<.001&&bounds.max.distanceTo(after.max)<.001);assert(state.groups.rear&&state.groups.passengerBack&&state.groups.passengerHead);
 const headliner=cabin.children.find(m=>m.material?.name==='WovenCabinFabric'),before=headliner.material.color.getHexString();
 applyCabinUpgrades(cabin,{body,seats:true,fabric:'houndstooth',colour:'#a38b69',touring:true,camp:true});
 assert.equal(state.groups.rear.visible,false);assert.equal(state.groups.passengerHead.visible,false);assert.equal(state.groups.passengerBack.rotation.x,-Math.PI/2);assert.equal(headliner.material.color.getHexString(),before);
 const front=state.materials.find(m=>m.userData.seatInsert);assert.equal(front.material.userData.ownsTextures,true);assert.equal(front.material.metalness,0);
 applyCabinUpgrades(cabin,{body,seats:false,touring:false,camp:false});assert.equal(state.groups.rear.visible,true);assert.equal(state.groups.passengerHead.visible,true);assert.equal(state.groups.passengerBack.rotation.x,0);assert.equal(front.material.map,front.userData.originalMaterial.map);
});
test('fabrics have distinct colour-managed albedo and independently disposed surface data',()=>{
 const hashes=new Set();for(const kind of ['canvas','tweed','houndstooth','leather']){const m=upholsteryMaterial(kind);hashes.add(Buffer.from(m.map.image.data).toString('base64'));assert.equal(m.map.colorSpace,'srgb');assert.notEqual(m.map,m.bumpMap);let n=0;m.map.addEventListener('dispose',()=>n++);m.bumpMap.addEventListener('dispose',()=>n++);m.dispose();assert.equal(n,2);}assert.equal(hashes.size,4);
});
test('door inserts fit inside source door cards below the pull handles',()=>{
 const mats=accessoryMaterials();for(const body of ['5door','3door']){const g=doorInserts(mats,{body,fabric:'tweed'}),panels=g.children.filter(m=>m.name==='Padded door insert');assert.equal(panels.length,body==='3door'?2:4);for(const p of panels){const b=new Box3().setFromObject(p);assert(b.max.y<1.005);assert(Math.max(Math.abs(b.min.x),Math.abs(b.max.x))<.69);}assert(g.children.some(m=>m.name==='Door top stitch'));}
});
test('tourer uses actual split deck size and a supported single berth beyond that deck',()=>{
 const mats=accessoryMaterials(),travel=touringInterior(mats),camp=touringInterior(mats,{camp:true});assert.equal(travel.getObjectByName('Single sleeping mat 183 x 65 x 7.5 cm'),undefined);const mat=camp.getObjectByName('Single sleeping mat 183 x 65 x 7.5 cm'),size=new Box3().setFromObject(mat).getSize(new Vector3());assert(Math.abs(size.x-.65)<.001&&Math.abs(size.z-1.83)<.001);assert.equal(TOURING_LAYOUT.rearDeckLength,1.165);assert(camp.getObjectByName('Custom passenger bed extension'));assert.equal(camp.children.filter(m=>m.name==='Extension support leg').length,2);assert.equal(camp.children.filter(m=>m.name==='Split carpeted rear platform').length,2);
 const bounds=new Box3().setFromObject(camp);assert(bounds.max.x<.72&&bounds.min.x>-.72);assert(bounds.min.z>-1.77&&bounds.max.z<.25);
});
test('touring replaces overlapping cargo parts and disposes owned fabric maps',()=>{
 const rig=new Group(),build=accessoryBuilder({accessoryRig:rig,mats:accessoryMaterials(),detailed:null,modelBody:'5door',lampEmitters:{}});build(new Set(['touring','drawer','shelf','doortrim']),{seatFabric:'canvas',touringMode:'camp'});assert(rig.getObjectByName('TouringInterior'));assert(!rig.children.some(o=>o.name==='shelf'));const resources=new Set();rig.traverse(o=>o.userData.ownedMaterials?.forEach(m=>{resources.add(m);resources.add(m.map);resources.add(m.bumpMap);}));resources.delete(undefined);resources.delete(null);let disposed=0;resources.forEach(r=>r.addEventListener('dispose',()=>disposed++));build(new Set(),{});assert.equal(disposed,resources.size);
});
