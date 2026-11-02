import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {Group,MeshStandardMaterial,Box3,Vector3} from 'three';
import {accessoryBuilder,accessoryMaterials} from '../src/accessories.js';
import {LIGHT_PROFILES} from '../src/lighting.js';
test('Garage and Drive import the same accessory geometry implementation',()=>{
  for(const path of ['../src/viewer3d.js','../src/trail/scene.js'])assert.match(readFileSync(new URL(path,import.meta.url),'utf8'),/accessoryBuilder/);
});
test('roof light bar sits above the five-door roof, with mounting feet',()=>{
  const mats=accessoryMaterials(),emitters=Object.fromEntries(Object.keys(LIGHT_PROFILES).map(k=>[k,new MeshStandardMaterial()]));
  const rig=new Group(),build=accessoryBuilder({accessoryRig:rig,mats,detailed:true,modelBody:'5door',colour:'#586a45',effectiveDesign:{},lampEmitters:emitters});
  build(new Set(['led']),{grille:'oem',decal:'none'});
  const bar=rig.children.filter(o=>o.userData.finishTarget==='led');
  const bounds=new Box3();for(const o of bar)bounds.union(new Box3().setFromObject(o));
  assert(bounds.max.z<.51,'Light bar projects in front of the roof edge');
  const feet=bar.filter(o=>o.material===mats.rubber);assert.equal(feet.length,2);
  assert(feet.every(o=>new Box3().setFromObject(o).min.y<1.733),'Feet must meet the roof');
});
test('wide wheel arches have an inner return and match each body wheelbase',()=>{
 for(const [body,axle] of [['5door',1.295],['3door',1.125]]){
  const rig=new Group(),mats=accessoryMaterials();
  accessoryBuilder({accessoryRig:rig,mats,detailed:null,modelBody:body,colour:'#586a45',effectiveDesign:{},lampEmitters:{}})(new Set(['flares']),{});
  const arches=rig.children.filter(o=>o.userData.finishTarget==='flares');assert.equal(arches.length,4);
  for(const arch of arches){const p=arch.geometry.getAttribute('position');assert.equal(p.count,7*65,'The moulding must return to the body');
   for(let i=0;i<65;i++){assert(Math.abs(Math.abs(p.getX(5*65+i))-.890)<.001);assert(Math.abs(Math.abs(p.getX(6*65+i))-.752)<.001);}
   const center=new Box3().setFromObject(arch).getCenter(new Vector3());assert(Math.abs(Math.abs(center.z)-axle)<.02,'The arch must be centred on the matching axle');
  }
 }
});
test('each supported exterior accessory creates finite visible geometry',()=>{
  const mats=accessoryMaterials(),emitters=Object.fromEntries(Object.keys(LIGHT_PROFILES).map(k=>[k,new MeshStandardMaterial()]));
  for(const id of ['rack','bull','autostylenn_bumper_v1','snorkel','led','pods','lamp_cube','lamp_round_spot','lamp_round_flood','lamp_fog','lamp_dual','lamp_work','lamp_compact_bar','winch','sliders','flares','ladder','rtt','awning','boards','mudflaps','sparecover','bonnetguard','spoiler','visors','cladding','skid','headlamps']){
    const group=new Group(),build=accessoryBuilder({accessoryRig:group,mats,detailed:null,modelBody:'5door',colour:'#586a45',effectiveDesign:{},lampEmitters:emitters});
    const ids=build(new Set([id]),{grille:'oem',decal:'none'});assert.ok(ids.includes(id),id);assert.ok(group.children.length,id+' has no geometry');
    const size=new Box3().setFromObject(group).getSize(new Vector3());assert.ok([size.x,size.y,size.z].every(Number.isFinite),id+' has invalid bounds');assert.ok(size.length()>.03,id+' is invisible');
    group.traverse(o=>o.geometry?.dispose());
  }
});
