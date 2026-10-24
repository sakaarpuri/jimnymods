import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {Group,MeshStandardMaterial,Box3,Vector3} from 'three';
import {accessoryBuilder,accessoryMaterials} from '../src/accessories.js';
import {LIGHT_PROFILES} from '../src/lighting.js';
test('Garage and Drive import the same accessory geometry implementation',()=>{
  for(const path of ['../src/viewer3d.js','../src/trail/scene.js'])assert.match(readFileSync(new URL(path,import.meta.url),'utf8'),/accessoryBuilder/);
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
