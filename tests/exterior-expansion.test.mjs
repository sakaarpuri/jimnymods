import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import * as T from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {EXTERIOR_PARTS,WHEEL_PARTS,buildExteriorPart,normalizeExteriorParts} from '../src/exterior-parts.js';
import {detailedWheel} from '../src/detailed-wheels.js';
import {applyCatalogueWheel,disposeCatalogueWheels} from '../src/catalogue-parts.js';
import {accessoryBuilder,accessoryMaterials} from '../src/accessories.js';
async function model(body){const b=await readFile(`assets/models/jimny-${body==='3door'?'swb':'lwb'}-blender.glb`);return(await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'')).scene;}
const dispose=g=>g.traverse(o=>{o.geometry?.dispose();o.userData.ownedMaterials?.forEach(m=>m.dispose());});
test('all 18 approved additions have finite bounded geometry and explicit body scope',()=>{
 assert.equal(Object.keys(EXTERIOR_PARTS).length,18);assert.equal(WHEEL_PARTS.length,8);
 for(const p of Object.values(EXTERIOR_PARTS))for(const body of ['3door','5door']){
  const g=p.diameter?detailedWheel(p.visual):buildExteriorPart(p.visual,body);
  if(!p.diameter&&!p.bodyStyles.includes(body)){assert.equal(g,null);continue;}
  let vertices=0;g.traverse(m=>{const pos=m.geometry?.attributes.position;if(pos){vertices+=pos.count;for(const x of pos.array)assert(Number.isFinite(x),p.visual);assert(m.geometry.attributes.normal);}});assert(vertices>100);
  const size=new T.Box3().setFromObject(g).getSize(new T.Vector3());assert(size.length()<4,p.visual);assert(size.length()>.1,p.visual);dispose(g);
 }
});
test('conflicting wheels and trim normalize consistently including stale saved selections',()=>{
 assert.deepEqual(normalizeExteriorParts(['wheel_alap','wheel_m9'],'5door'),['wheel_m9']);
 assert.deepEqual(normalizeExteriorParts(['suzuki_nomade_steelwheel','wheel_alap'],'5door'),['wheel_alap']);
 assert.deepEqual(normalizeExteriorParts(['wheel_alap','suzuki_nomade_steelwheel'],'5door'),['suzuki_nomade_steelwheel']);
 assert.deepEqual(normalizeExteriorParts(['msga_rugged_cladding','wheel_dynamic_round','suzuki_sill_3door'],'3door'),['suzuki_sill_3door']);
 assert.deepEqual(normalizeExteriorParts(['msga_tread_skid','bull'],'5door'),['bull']);
 assert.deepEqual(normalizeExteriorParts(['msga_front_fender','msga_rear_fender'],'5door'),['msga_front_fender','msga_rear_fender']);
});
test('every wheel replaces all four wheels and spare on actual bodies, restores stock and disposes owned resources',async()=>{
 for(const body of ['3door','5door']){
  const root=await model(body),stock=root.getObjectByName('StockWheels'),spare=root.getObjectByName('SpareWheel');
  const tyres=[];stock.traverse(m=>{if(m.material?.name==='TyreRubber')tyres.push([m,m.geometry,m.material]);});
  for(const p of WHEEL_PARTS.filter(p=>p.bodyStyles.includes(body))){
   assert.equal(applyCatalogueWheel(stock,p.visual,'bronze'),4,p.visual);assert.equal(applyCatalogueWheel(spare,p.visual,'bronze'),1,p.visual+' spare');
   const wheels=[];stock.traverse(g=>{if(g.userData.wheelDesign)wheels.push(g);});assert.equal(wheels.length,4);
   for(const g of wheels){const radius=g.userData.nominalDiameter/2;assert.equal(radius,p.diameter*.0254/2);assert(Math.abs(Math.abs(g.position.z)-(body==='3door'?1.125:1.295))<.002);}
   for(const [m,geo,mat]of tyres){assert.equal(m.geometry,geo);assert.equal(m.material,mat);assert(m.visible);}
  }
  let disposed=0;stock.traverse(g=>g.userData.ownedMaterials?.forEach(m=>m.addEventListener('dispose',()=>disposed++)));
  assert.equal(disposeCatalogueWheels(stock),4);assert.equal(disposeCatalogueWheels(spare),1);assert.equal(disposed,16);assert.equal(disposeCatalogueWheels(stock),0);
 }
});
test('perforated wheel faces have open vents, not black patches',()=>{
 for(const [id,count]of [['wheel_wildboar',16],['wheel_baja',8],['wheel_dynamic_round',10]]){
  const g=detailedWheel(id);g.updateMatrixWorld(true);const face=g.children[0].children.find(m=>m.name.startsWith('Perforated'));
  for(let i=0;i<count;i++){const a=i*Math.PI*2/count+Math.PI/2;assert.equal(new T.Raycaster(new T.Vector3(Math.cos(a)*.134,Math.sin(a)*.134,.2),new T.Vector3(0,0,-1)).intersectObject(face).length,0,id);}
  dispose(g);
 }
});
test('changing accessories frees raised tread meshes and material textures',()=>{
 const rig=new T.Group(),build=accessoryBuilder({accessoryRig:rig,mats:accessoryMaterials(),modelBody:'5door',detailed:null,colour:'#fff',effectiveDesign:{},lampEmitters:{}});
 const ids=build(new Set(['msga_front_fender','msga_rear_fender','msga_rugged_cladding']),{});assert(ids.includes('msga_front_fender'));let resources=0,disposed=0;
 rig.traverse(g=>{for(const m of g.userData.ownedMaterials||[]){resources++;m.addEventListener('dispose',()=>disposed++);}});build(new Set(),{});assert(resources>0);assert.equal(resources,disposed);assert.equal(rig.children.length,0);
});
test('JimnyworX guards follow the tall front/rear corner profiles without cutting into the painted body',async()=>{
 const g=buildExteriorPart('jimnyworx_corners','3door'),panels=g.children.filter(m=>m.userData.cornerGuard),root=await model('3door');root.updateMatrixWorld(true);g.updateMatrixWorld(true);
 assert.equal(panels.length,4);assert.equal(g.children.filter(m=>m.isInstancedMesh&&m.name.includes('diamond')).length,4);
 for(const m of panels){const {side,end,height}=m.userData.cornerGuard;assert(height>(end===1?.25:.48),'Guard must extend down alongside the arch');
  const positions=m.geometry.attributes.position;let checked=0;
  // Sample the outer skin in the corner bend, where the old flat rectangles
  // and disconnected tabs either floated or cut through the painted shell.
  for(let i=0;i<positions.count/2;i+=13){const x=positions.getX(i),y=positions.getY(i),z=positions.getZ(i);
   const hits=new T.Raycaster(new T.Vector3(side*2,y,z),new T.Vector3(-side,0,0)).intersectObject(root.getObjectByName('BodyShell'),true);
   const hit=hits.find(h=>h.object.material?.name==='BodyPaint'&&h.point.x*side>0);
   if(hit){assert(side*(x-hit.point.x)>.0005,`Corner skin penetrates paint at ${x},${y},${z}`);checked++;}
  }assert(checked>15);
 }
 dispose(g);
});

test('five-door rugged cladding has an outward-facing wordmark on each long front insert',()=>{
 const part=buildExteriorPart('msga_rugged_cladding','5door');
 const marks=part.children.filter(m=>m.name==='Jimny wordmark · front door');
 assert.equal(marks.length,2);
 assert.deepEqual(marks.map(m=>Math.sign(m.position.x)).sort(),[-1,1]);
 for(const mark of marks){
  assert.ok(mark.position.z>-.275 && mark.position.z<.64);
  const normal=new T.Vector3(0,0,1).applyQuaternion(mark.quaternion);
  assert.ok(normal.x*mark.position.x>0);
 }
 assert.equal(buildExteriorPart('msga_rugged_cladding','3door'),null);
});
