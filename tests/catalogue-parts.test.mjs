import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {Box3,Vector3,Raycaster,Group,Mesh,BufferGeometry,Float32BufferAttribute} from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {accessoryMaterials,accessoryBuilder} from '../src/accessories.js';
import {CATALOGUE_PARTS,skinnyBackbone,skinnyJerryTray,nomadeFlatRack,nomadeSteelWheel,applyCatalogueWheel,disposeCatalogueWheels} from '../src/catalogue-parts.js';
import {applyWheelFinish,disposeWheelFinishes} from '../src/wheel-finishes.js';
async function model(){const b=await readFile(new URL('../assets/models/jimny-lwb-blender.glb',import.meta.url));return (await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'')).scene;}
const mats=accessoryMaterials();
test('catalogue geometry retains source dimensions and meaningful distinct open constructions',()=>{
 const mount=skinnyBackbone(mats),tray=skinnyJerryTray(mats),rack=nomadeFlatRack(mats),wheel=nomadeSteelWheel(mats.darkmetal);
 assert.equal(CATALOGUE_PARTS.suzuki_nomade_steelwheel.offset,null,'Unverified offset must not become a fitment fact');
 for(const g of [mount,tray,rack,wheel])g.traverse(m=>{const p=m.geometry?.attributes.position;if(!p)return;for(const x of p.array)assert(Number.isFinite(x));assert(m.geometry.attributes.normal);});
 const plate=mount.getObjectByName('Backbone perforated main plate'),s=new Box3().setFromObject(plate).getSize(new Vector3());assert(Math.abs(s.x-.315)<.002);assert(Math.abs(s.y-.585)<.002);
 assert(mount.getObjectByName('Spare mount attachment bridge'));assert.equal(mount.children.filter(c=>c.name==='Door hinge standoff').length,2);
 assert.deepEqual(tray.getObjectByName('Jerry tray floor').userData.internalFootprint,[.370,.205]);assert.equal(tray.children.filter(c=>c.name==='Webbing strap').length,2);
 assert.equal(rack.children.filter(c=>c.name==='OEM gutter mounting leg').length,6);assert.equal(rack.children.filter(c=>c.name==='OEM rack slat').length,5);
 const rails=new Box3();for(const m of rack.children.filter(c=>c.name==='OEM rack perimeter'))rails.union(new Box3().setFromObject(m));const rs=rails.getSize(new Vector3());assert(Math.abs(rs.x-1.430)<.001);assert(Math.abs(rs.z-1.509)<.001);
 wheel.updateMatrixWorld(true);const disc=wheel.getObjectByName('Ten-hole pressed steel disc');
 const dp=disc.geometry.attributes.position,di=disc.geometry.index;for(let i=0;i<di.count;i+=3){const v=[0,1,2].map(j=>new Vector3().fromBufferAttribute(dp,di.getX(i+j)));for(let j=0;j<3;j++)assert(v[j].distanceTo(v[(j+1)%3])<.032,'Dish must be subdivided before bending, not triangulated into long false creases');}
 for(let i=0;i<10;i++){const a=i*Math.PI/5,ray=new Raycaster(new Vector3(Math.cos(a)*.127,Math.sin(a)*.127,.2),new Vector3(0,0,-1));assert.equal(ray.intersectObject(disc).length,0,'Vent must be a real hole, not painted black');}
 assert(new Raycaster(new Vector3(.08,0,.2),new Vector3(0,0,-1)).intersectObject(disc).length>0);
 const ws=new Box3().setFromObject(wheel).getSize(new Vector3());assert(Math.abs(ws.x-.381)<.0001);assert(Math.abs(ws.y-.381)<.0001);
});
test('carrier dependency draws one connected mount and removes all geometry cleanly',()=>{
 const rig=new Group(),build=accessoryBuilder({accessoryRig:rig,mats,detailed:null,modelBody:'5door',colour:'#aaa',effectiveDesign:{},lampEmitters:{}});
 const ids=build(new Set(['skinnyjim_backbone','skinnyjim_jerry_tray']),{});assert.equal(ids.filter(x=>x==='skinnyjim_backbone').length,1);assert.equal(rig.children.filter(c=>c.name==='skinnyjim_backbone').length,1);
 let resources=0,disposed=0;rig.traverse(m=>{if(m.geometry){resources++;m.geometry.addEventListener('dispose',()=>disposed++);}});build(new Set(),{});assert.equal(disposed,resources);assert.equal(rig.children.length,0);
 build(new Set(['suzuki_nomade_flatrack','fr_slimline2']),{});assert(rig.getObjectByName('suzuki_nomade_flatrack'));assert(!rig.getObjectByName('Slimline II reference'));
});
test('actual four-wheel geometry changes to steel without changing tyres, brakes or finish restoration',async()=>{
 const root=(await model()).getObjectByName('StockWheels'),old=new Map();root.traverse(m=>{if(m.isMesh)old.set(m,{visible:m.visible,geometry:m.geometry,material:m.material});});
 // The live viewer replaces authored rubber with its shared palette material.
 root.traverse(m=>{if(m.isMesh&&m.material.name==='TyreRubber')m.material=mats.rubber;});assert.equal(mats.rubber.name,'TyreRubber');
 for(const [m,state]of old)if(state.material.name==='TyreRubber')state.material=mats.rubber;
 applyWheelFinish(root,'bronze');assert.equal(applyCatalogueWheel(root,true),4);assert.equal(applyCatalogueWheel(root,true),4);
 for(const [m,state]of old)if(['MachinedAlloy','WheelGunmetal'].includes(m.material.name))assert.equal(m.visible,false);else{assert.equal(m.visible,state.visible);assert.equal(m.geometry,state.geometry);assert.equal(m.material,state.material);}
 const steel=root.children.filter(c=>c.name==='Nomade pressed steel wheel');assert.equal(steel.length,4);for(const g of steel){assert(Math.abs(Math.abs(g.position.x)-(g.position.z>0?.6975:.7025)-.086)<.001);assert(Math.abs(Math.abs(g.position.z)-1.295)<.001);assert(Math.abs(g.position.y-.3465)<.001);}
 let disposed=0;for(const g of steel)g.traverse(m=>m.geometry?.addEventListener('dispose',()=>disposed++));assert.equal(disposeCatalogueWheels(root),4);assert(disposed>20);assert.equal(disposeCatalogueWheels(root),0);
 disposeWheelFinishes(root);for(const [m,state]of old){assert.equal(m.visible,state.visible);assert.equal(m.geometry,state.geometry);assert.equal(m.material,state.material);}
});
test('extracted driving wheel keeps steel attached to the actual rotating pivot',async()=>{
 const original=await model();original.updateMatrixWorld(true);const root=new Group(),pivot=new Group(),spin=new Group();pivot.position.set(-.6975,.3465,1.295);pivot.add(spin);root.add(pivot);
 original.getObjectByName('StockWheels').traverse(m=>{if(!m.isMesh)return;const source=m.geometry.index?m.geometry.toNonIndexed():m.geometry.clone(),p=source.attributes.position,values=[],v=new Vector3();for(let i=0;i<p.count;i+=3){const tri=[0,1,2].map(j=>v.fromBufferAttribute(p,i+j).applyMatrix4(m.matrixWorld).clone());if(tri.some(p=>p.x>0||p.z<0))continue;for(const p of tri)values.push(p.x+.6975,p.y-.3465,p.z-1.295);}if(values.length){const geo=new BufferGeometry();geo.setAttribute('position',new Float32BufferAttribute(values,3));spin.add(new Mesh(geo,m.material.clone()));}source.dispose();});
 assert.equal(applyCatalogueWheel(root,true),1);const steel=spin.getObjectByName('Nomade pressed steel wheel');assert(steel);assert(Math.abs(steel.position.x+.086)<.001);assert(Math.abs(steel.position.y)<.001);assert(Math.abs(steel.position.z)<.001);disposeCatalogueWheels(root);
});
