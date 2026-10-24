import test from 'node:test';
import assert from 'node:assert/strict';
import * as T from 'three';
import {QUARRY_RAMPS,quarryRampProfile,quarryRampHeight,quarryRampGeometry,quarryFaceGeometry,quarryBedMaterial,createQuarryArt} from '../src/trail/quarry-art.js';
import {COURSES,makeWorld} from '../src/trail/courses.js';
import {createVehicle} from '../src/trail/physics.js';
import {createRigidVehicle} from '../src/trail/rigid-vehicle.js';

test('quarry has eighteen bounded alternating flat-crown ramps without taller or wider collisions',()=>{
 assert.equal(QUARRY_RAMPS.length,18);assert.equal(new Set(QUARRY_RAMPS.map(r=>r.id)).size,18);
 for(const r of QUARRY_RAMPS){
  assert.equal(quarryRampProfile(r,r.x,r.z),1);assert.equal(quarryRampProfile(r,r.x+.20,r.z+.25),1);
  assert(quarryRampProfile(r,r.x+r.halfWidth,r.z)<1e-12);assert(quarryRampProfile(r,r.x,r.z+r.halfDepth)<1e-12);
  for(const scale of [.7,1,1.25]){
   assert(Math.abs(quarryRampHeight(r.x,r.z,scale)-.24*scale)<1e-9);
   for(let z=r.z-1.7;z<r.z+1.7;z+=.02){const grade=Math.abs(quarryRampHeight(r.x,z+.02,scale)-quarryRampHeight(r.x,z,scale))/.02;assert(grade<.23);}
  }
 }
 assert.equal(quarryRampHeight(0,0),0);assert.equal(quarryRampHeight(NaN,90),0);
});
test('concrete geometry follows the same contact height at every vertex and stays within draw budget',()=>{
 const world={height:(x,z)=>quarryRampHeight(x,z,1.25)+.003*z};const g=quarryRampGeometry(world),p=g.attributes.position;
 for(let i=0;i<p.count;i++)assert(Math.abs(p.getY(i)-world.height(p.getX(i),p.getZ(i))-.008)<.00001);
 assert(g.index.count/3<15000);assert.equal(g.userData.rampIds.length,18);assert(g.boundingSphere.radius<25);
 g.dispose();
});
test('flat casting crown and approach faces retain distinct normals at their actual shared edge',()=>{
 const g=quarryRampGeometry({height:quarryRampHeight}),p=g.attributes.position,n=g.attributes.normal,r=QUARRY_RAMPS[0],edge=[];
 for(let i=0;i<p.count;i++)if(Math.abs(p.getX(i)-r.x)<.001&&Math.abs(p.getZ(i)-(r.z-r.crownHalfDepth))<.001)edge.push(new T.Vector3().fromBufferAttribute(n,i));
 assert(edge.length>=2,'casting edge has independent shading normals');
 assert(edge.some(a=>edge.some(b=>a.dot(b)<.99)),'flat crown must not blend into the sloped approach');
 assert.equal(g.userData.castingEdges,true);g.dispose();
});
test('quarry face skin clips drivable corridors and samples physical slopes without moving terrain',()=>{
 const world={height:(x,z)=>Math.max(0,Math.abs(x+65)-9)*.55,routeDistance:x=>Math.abs(x+65)};
 const g=quarryFaceGeometry(world),p=g.attributes.position,idx=g.index;assert(idx.count>0);
 for(let i=0;i<idx.count;i+=3){let x=0,z=0;for(let j=0;j<3;j++){const k=idx.getX(i+j);x+=p.getX(k)/3;z+=p.getZ(k)/3;assert(Math.abs(p.getY(k)-world.height(p.getX(k),p.getZ(k))-.012)<.00001);}assert(world.routeDistance(x,z)>6);}
 g.dispose();
});
test('renderer uses one concrete mesh and no intersecting quarry bank skin or unrelated art',()=>{
 const world={course:{id:'urban',theme:'urban'},height:quarryRampHeight,routeDistance:()=>10};
 const parent=new T.Group(),root=createQuarryArt(world,parent);assert.equal(root.children.length,1);assert.equal(root.children[0].name,'ConcreteWheelRampCrowns');assert.equal(root.userData.rampCount,18);assert.equal(parent.children.length,1);assert(!world.obstacles);
 for(const id of ['mountain','sand','custom']){const other=new T.Group();createQuarryArt({...world,course:{id,theme:id==='custom'?'urban':id}},other);assert.equal(other.children.length,0);}
 root.traverse(m=>{m.geometry?.dispose();m.material?.bumpMap?.dispose();m.material?.dispose();});
});
test('soil mask preserves its existing shader and clips only concrete footprints with seam overlap',()=>{
 const mat=new T.MeshStandardMaterial();mat.customProgramCacheKey=()=> 'original-soil';
 mat.onBeforeCompile=shader=>{shader.uniforms.existing={value:3};shader.fragmentShader='// existing soil\n'+shader.fragmentShader;};
 quarryBedMaterial(mat);const shader={uniforms:{},vertexShader:'#include <begin_vertex>',fragmentShader:'#include <clipping_planes_fragment>'};mat.onBeforeCompile(shader);
 assert.equal(shader.uniforms.existing.value,3);assert.match(shader.fragmentShader,/existing soil/);assert.equal(mat.customProgramCacheKey(),'original-soil-quarry-bed-mask-v1');
 assert.match(shader.fragmentShader,/<\.5795/);assert.match(shader.fragmentShader,/<1\.6995/);assert.match(shader.fragmentShader,/discard/);
 for(const r of QUARRY_RAMPS){const lane=Math.floor((r.x+72.5)/5),step=Math.floor((r.z-87)/4.5+.5);assert.equal(-70+lane*5+(step%2?.7:-.7),r.x);assert.equal(87+step*4.5,r.z);}
 mat.dispose();
});
test('both Jimny bodies can physically crawl the expert concrete lane in low range',async()=>{
 for(const body of ['5door','3door']){
  const world=makeWorld(COURSES.find(c=>c.id==='urban'),'expert'),s=createVehicle(body);
  s.x=-70;s.z=80;s.gear='L';s.range='4L';s.parking=false;
  const engine=await createRigidVehicle(world,s);let maxRoll=0;
  try{
   engine.reset(s);
   for(let i=0;i<3000&&s.z<116;i++){
    engine.step({throttle:s.speed<1.5?.28:0,brake:s.speed>1.9?.4:0,steer:Math.max(-.6,Math.min(.6,(-70-s.x)*.35-s.yaw*1.2))});
    maxRoll=Math.max(maxRoll,Math.abs(s.roll));
   }
   assert(s.z>=116,`${body} stalled at ${s.z}`);assert(Math.abs(s.x+70)<.65,`${body} must not bypass ramp contacts`);
   assert(maxRoll>.015&&maxRoll<.45,`${body} must visibly articulate without tipping: ${maxRoll}`);
  }finally{engine.dispose();}
 }
});
