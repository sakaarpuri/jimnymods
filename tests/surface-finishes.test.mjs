import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {Group,Mesh,BoxGeometry,MeshStandardMaterial,MeshPhysicalMaterial,Texture} from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {createSurfaceStyler,markSurfaceMaterials,protectMirrorSurfaces} from '../src/surface-finishes.js';
import {accessoryBuilder,accessoryMaterials} from '../src/accessories.js';
const styles=globalThis.JimnySurfaceStyles;
const part=(root,name,material)=>{const m=new Mesh(new BoxGeometry(),material);m.name=name;root.add(m);return m;};
test('surface schema rejects malformed keys/values and legacy builds retain no overrides',()=>{
 assert.deepEqual(styles.clean(),{allBlack:false,partFinishes:{},partColours:{}});
 assert.deepEqual(styles.clean({allBlack:'true',partFinishes:{wheels:'matte',body:'gloss',roof:'url(x)',constructor:'matte','<x>':'gloss'},partColours:{rack:'#AABBCC',roof:'red',constructor:'#abcdef','<x>':'#112233'}}),{allBlack:false,partFinishes:{wheels:'matte',body:'gloss'},partColours:{rack:'#aabbcc'}});
 assert.equal(styles.target('tires'),'wheels');assert.equal(styles.target('autostylenn_big_suzuki_grille'),'grille');
});
test('individual colours isolate shared hardware while protecting textiles, tyres and optics',()=>{
 const root=new Group(),a=new Group(),b=new Group(),base=new MeshStandardMaterial({color:'#333333'}),mats=accessoryMaterials();markSurfaceMaterials(mats);a.userData.finishTarget='rack';b.userData.finishTarget='snorkel';root.add(a,b);
 const painted=part(a,'rack',base),untouched=part(b,'snorkel',base),tyre=part(a,'tyre',mats.rubber),cloth=part(a,'cloth',mats.upholstery),lens=part(a,'lens',mats.lens),s=createSurfaceStyler();
 s.apply([root],{partColours:{rack:'#ef3412'},partFinishes:{rack:'gloss'}});assert.equal(painted.material.color.getHexString(),'ef3412');assert.equal(painted.material.roughness,.14);assert.equal(untouched.material,base);assert.equal(tyre.material,mats.rubber);assert.equal(cloth.material,mats.upholstery);assert.equal(lens.material,mats.lens);s.clear();assert.equal(painted.material,base);
});
test('matte/gloss are independent per target, preserve paint and do not leak shared materials',()=>{
 const root=new Group(),body=new Group(),rack=new Group(),base=new MeshPhysicalMaterial({color:'#884422',roughness:.3,clearcoat:.7});body.name='BodyShell';rack.userData.finishTarget='rack';root.add(body,rack);base.userData.vehiclePaint=true;
 const a=part(body,'panel',base),b=part(rack,'rack',base),s=createSurfaceStyler();
 s.apply([root],{partFinishes:{body:'matte',rack:'gloss'}});
 assert.equal(a.material.roughness,.85);assert.equal(a.material.clearcoat,.02);assert.equal(b.material.roughness,.14);assert.equal(b.material.clearcoat,.95);assert.equal(a.material.color.getHexString(),'884422');assert.equal(base.roughness,.3);assert.notEqual(a.material,b.material);
 s.clear();assert.equal(a.material,base);assert.equal(b.material,base);assert.equal(s.snapshot().materials,0);
});
test('blackout leaves optics, tyres, readable artwork and emissive surfaces untouched',()=>{
 const root=new Group();root.name='Cabin';const mats=accessoryMaterials();markSurfaceMaterials(mats);
 const hardware=part(root,'hardware',mats.chrome),lens=part(root,'lens',mats.lens),rubber=part(root,'tyre',mats.rubber),reflector=part(root,'reflector',mats.reflector),cloth=part(root,'cloth',mats.upholstery),display=part(root,'screen',new MeshStandardMaterial({map:new Texture()}));
 const s=createSurfaceStyler(),originals=[lens,rubber,reflector,display].map(m=>m.material);s.apply([root],{allBlack:true,partFinishes:{cabin:'gloss'}});
 assert.equal(hardware.material.color.getHexString(),'171b1d');assert.equal(hardware.material.roughness,.14);assert.equal(cloth.material.color.getHexString(),'171b1d');assert.equal(cloth.material.roughness,mats.upholstery.roughness);
 [lens,rubber,reflector,display].forEach((m,i)=>assert.equal(m.material,originals[i]));s.clear();assert.equal(hardware.material,mats.chrome);
});
test('clearing styles disposes only owned clones, never original materials or shared maps',()=>{
 const root=new Group();root.userData.finishTarget='roof';const map=new Texture(),base=new MeshPhysicalMaterial({bumpMap:map});const m=part(root,'roof',base);let originals=0,textures=0,clones=0;base.addEventListener('dispose',()=>originals++);map.addEventListener('dispose',()=>textures++);const s=createSurfaceStyler();s.apply([root],{partFinishes:{roof:'matte'}});m.material.addEventListener('dispose',()=>clones++);s.clear();s.clear();assert.deepEqual([originals,textures,clones],[0,0,1]);assert.equal(m.material,base);
});
test('a later upholstery palette is not locked black by the blackout starting point',()=>{
 const root=new Group();root.name='Cabin';const mats=accessoryMaterials();markSurfaceMaterials(mats);mats.upholstery.color.set('#b3b1a5');const cloth=part(root,'SeatCover',mats.upholstery),s=createSurfaceStyler();s.apply([root],{allBlack:true,cabin:'stone'});assert.equal(cloth.material.color.getHexString(),'b3b1a5');s.clear();
});
test('shared accessory builders tag separate surfaces even when they use the same material',()=>{
 const rig=new Group(),mats=accessoryMaterials(),build=accessoryBuilder({accessoryRig:rig,mats,detailed:true,modelBody:'5door',colour:'#abcabc',effectiveDesign:{},lampEmitters:{}});build(new Set(['snorkel','rack']),{});
 assert(rig.children.some(c=>c.userData.finishTarget==='snorkel'));assert(rig.children.some(c=>c.userData.finishTarget==='rack'));
 const s=createSurfaceStyler();s.apply([rig],{partFinishes:{rack:'gloss',snorkel:'matte'}});
 rig.traverse(m=>{if(!m.material?.userData.surfaceStyle)return;const st=m.material.userData.surfaceStyle;assert.equal(m.material.roughness,st.target==='rack'?.14:.85);});s.clear();build(new Set(),{});assert.equal(rig.children.length,0);
});
for(const body of ['lwb','swb'])test(`${body}: actual car preserves mirror optics and restoration across all-black styling`,async()=>{
 const b=await readFile(new URL(`../assets/models/jimny-${body}-blender.glb`,import.meta.url)),root=(await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'')).scene;
 protectMirrorSurfaces(root,body==='swb'?'3door':'5door');const mirrors=[];root.traverse(m=>{if(m.name.startsWith('ProtectedMirror-'))mirrors.push(m);});assert.equal(mirrors.length,3);
 const before=mirrors.map(m=>m.material),reflectors=[];root.getObjectByName('StockHeadlamps').traverse(m=>{if(m.material?.name==='BrightChrome')reflectors.push([m,m.material]);});const s=createSurfaceStyler();s.apply([root],{allBlack:true,partFinishes:{grille:'matte',wheels:'gloss'}});assert(s.snapshot().targets.includes('grille'));assert(s.snapshot().targets.includes('wheels'));assert(s.snapshot().targets.includes('trim'));mirrors.forEach((m,i)=>assert.equal(m.material,before[i]));for(const [mesh,material]of reflectors)assert.equal(mesh.material,material,'Do not blacken lamp reflectors');s.clear();assert.equal(s.snapshot().materials,0);
});
