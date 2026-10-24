import test from 'node:test';
import assert from 'node:assert/strict';
import {Box3,Vector3,Group,Raycaster} from 'three';
import {accessoryMaterials,accessoryBuilder} from '../src/accessories.js';
import {INTERIOR_STORAGE_PARTS,rearDoorMolle,halfMollyPockets,xlDrawerSystem} from '../src/interior-storage.js';
const mats=accessoryMaterials();
test('interior storage has primary sources, correct body scopes and actual open panel holes',()=>{
 assert.deepEqual(INTERIOR_STORAGE_PARTS.mod_reardoor_molle.bodyStyles,['3door','5door']);
 for(const id of ['mod_halfmolly_5door','exploresetups_drawer_5door'])assert.deepEqual(INTERIOR_STORAGE_PARTS[id].bodyStyles,['5door']);
 const door=rearDoorMolle(mats);door.updateMatrixWorld(true);
 const panels=door.children.filter(m=>m.name==='Rear-door perforated panel');assert.equal(panels.length,2);
 for(const p of panels){const size=new Box3().setFromObject(p).getSize(new Vector3());assert(Math.abs(size.x-.300)<.002);assert(Math.abs(size.y-.2675)<.002);const ray=new Raycaster(new Vector3(p.position.x,p.position.y+.0185,p.position.z+.1),new Vector3(0,0,-1));assert.equal(ray.intersectObject(p).length,0,'MOLLE opening must be real geometry, not a dark decal');}
 const short=rearDoorMolle(mats,'3door');assert(Math.abs(short.children[0].position.z-panels[0].position.z-.17)<1e-6);
 const pockets=halfMollyPockets(mats);assert.equal(pockets.children.length,2);for(const p of pockets.children){const base=p.getObjectByName('Folded pocket base');assert(base.position.z>0,'Return should reach the window, not project into the cargo space');}
});
test('cargo-only drawer retains published envelope and upright rear-seat clearance',()=>{
 const g=xlDrawerSystem(mats),bounds=new Box3().setFromObject(g);assert.deepEqual(g.userData.publishedEnvelope,[1.110,.250,.460]);assert(bounds.max.z<-1.20,'Drawer must not intersect the rear seat back at z=-1.055');assert(bounds.min.y>.67,'False floor must clear the actual cabin floor');assert(bounds.max.x<=.557&&bounds.min.x>=-.557);
 assert.equal(g.children.filter(m=>m.name==='Flush drawer front').length,2);assert.equal(g.children.filter(m=>m.name==='Cargo tie-down ring').length,4);assert.equal(g.children.filter(m=>m.name==='Removable carpeted wing').length,2);assert.match(g.userData.cataloguePart.requires,/false floor/);
});
test('storage selection clears geometry and its owned carpet material, and rejects LWB-only parts on SWB',()=>{
 const rig=new Group(),build=accessoryBuilder({accessoryRig:rig,mats,detailed:null,modelBody:'5door',colour:'#aaa',effectiveDesign:{},lampEmitters:{}});
 const ids=build(new Set(Object.keys(INTERIOR_STORAGE_PARTS)),{});assert.equal(ids.length,3);let count=0,disposed=0;rig.traverse(m=>{if(m.geometry){count++;m.geometry.addEventListener('dispose',()=>disposed++);}if(m.userData.disposableMaterial){count++;m.material.addEventListener('dispose',()=>disposed++);}});build(new Set(),{});assert.equal(count,disposed);assert.equal(rig.children.length,0);
 const swb=accessoryBuilder({accessoryRig:rig,mats,detailed:null,modelBody:'3door',colour:'#aaa',effectiveDesign:{},lampEmitters:{}});assert.deepEqual(swb(new Set(Object.keys(INTERIOR_STORAGE_PARTS)),{}),['mod_reardoor_molle']);
 let triangles=0;rig.traverse(m=>{if(!m.geometry)return;const p=m.geometry.attributes.position;for(const v of p.array)assert(Number.isFinite(v));triangles+=(m.geometry.index?.count||p.count)/3;});assert(triangles<20000);swb(new Set(),{});
});
