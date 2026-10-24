import test from 'node:test';
import assert from 'node:assert/strict';
import {Group,Matrix4,Vector3,Quaternion,SRGBColorSpace} from 'three';
import {COURSES,makeWorld} from '../src/trail/courses.js';
import {vegetationLayout} from '../src/trail/vegetation-layout.js';
import {buildVegetationGeometry,vegetationClearsRiver} from '../src/trail/vegetation-render.js';
import {clearRiverSurface} from '../src/trail/environment.js';
import {sectionShoulderDistance} from '../src/trail/himachal-dressing.js';

function dispose(root){root.traverse(o=>{o.geometry?.dispose();if(o.material){o.material.userData.terrainTextures?.forEach(t=>t.dispose());o.material.dispose();}if(o.isInstancedMesh)o.dispose();});}
test('new vegetation keeps the exact shared trunk layout and collision scale',()=>{
 for(const id of ['mountain','sand','urban']){
  const world=makeWorld(COURSES.find(c=>c.id===id),'driver'),trees=vegetationLayout(world),root=buildVegetationGeometry(world,new Group()),mesh=root.getObjectByName('Shared collision trunks');
  assert.equal(mesh.count,trees.length);assert.deepEqual(mesh.userData.trunkIds,trees.map(t=>t.id));
  const colliders=new Map(world.sceneryObstacles.map(o=>[o.id,o]));
  for(const t of trees){const collider=colliders.get(t.id);assert(collider,`${t.id} has no collision trunk`);assert.equal(collider.x,t.x);assert.equal(collider.z,t.z);assert.equal(collider.radius,t.radius);assert.equal(collider.height,t.height);}
  const matrix=new Matrix4(),position=new Vector3(),scale=new Vector3(),rotation=new Quaternion();
  trees.forEach((t,i)=>{mesh.getMatrixAt(i,matrix);matrix.decompose(position,rotation,scale);assert(Math.abs(position.x-t.x)<.0001);assert(Math.abs(position.z-t.z)<.0001);assert(Math.abs(position.y-t.y-t.height/2)<.0001);assert(Math.abs(scale.x-t.radius)<.00001);assert(Math.abs(scale.y-t.height)<.00001);});
  // Three instanced batches are reserved for the section's needle sprays,
  // physical boughs and bent grass blades; other courses retain their budget.
  // Local crowns use overlapping twig-sized clusters, not giant canopy cards.
  // The1.5M ceiling includes photographed crowns along the added1.47km
  // mountain drive and the dense section grass. Other worlds stay unchanged.
  assert(root.children.length<=(world.himachalSection?7:5));let triangles=0;root.traverse(o=>{if(o.geometry)triangles+=o.geometry.index.count/3*o.count;});assert(triangles<(world.himachalSection?1500000:820000),`${id}: ${triangles}`);dispose(root);
 }
});
test('cutouts have empty space, opaque depth-writing foliage, correct colour, and owned textures',()=>{
 const world=makeWorld(COURSES.find(c=>c.id==='mountain'),'driver'),root=buildVegetationGeometry(world,new Group());
 for(const name of ['Layered evergreen sprays','Himachal fine needle branchlets','Clustered shrubs','Clustered groundcover']){
  const mesh=root.getObjectByName(name),m=mesh.material,data=m.map.image.data;
  assert.equal(m.transparent,false);assert.equal(m.depthWrite,true);assert(m.alphaTest>=.3);assert.equal(m.map.colorSpace,SRGBColorSpace);assert.deepEqual(m.userData.terrainTextures,[m.map]);
  let opaque=0,clear=0;for(let i=3;i<data.length;i+=4){if(data[i]>200)opaque++;if(data[i]===0)clear++;}
  assert(opaque>400,'cutout lost its leaves');assert(clear>data.length/4*.15,'cutout became a solid rectangular card');
  if(name==='Clustered shrubs'||name==='Clustered groundcover')assert.equal(mesh.castShadow,false);
 }
 dispose(root);
});
test('groundcover preserves route, river, bridge and landmark clearances',()=>{
 const world=makeWorld(COURSES.find(c=>c.id==='mountain'),'driver'),root=buildVegetationGeometry(world,new Group()),matrix=new Matrix4();
 for(const name of ['Clustered shrubs','Clustered groundcover','Himachal grass tussocks']){
  const mesh=root.getObjectByName(name);for(let i=0;i<mesh.count;i++){
   mesh.getMatrixAt(i,matrix);const x=matrix.elements[12],z=matrix.elements[14];
   if(world.routeDistance(x,z)<world.course.width*.5+1.29){
    assert(['Clustered groundcover','Himachal grass tussocks'].includes(name));assert(sectionShoulderDistance(world,x,z)>=1.09);
    assert(Math.hypot(matrix.elements[4],matrix.elements[5],matrix.elements[6])<=.36,'section shoulders permit ankle-high cover only');
   }
   assert(!vegetationClearsRiver(world,x,z));
   for(const landmark of world.landmarks||[])for(const p of landmark.parts.filter(p=>p.solid))assert(Math.hypot(x-p.x,z-p.z)>=Math.hypot(p.width,p.depth)/2+1.09);
  }
 }
 for(let x=-470;x<470;x+=17)for(let z=320;z<700;z+=13)assert.equal(vegetationClearsRiver(world,x,z),clearRiverSurface(world,x,z));
 for(let x=-14;x<112;x+=3)for(let z=88;z<205;z+=3)assert.equal(vegetationClearsRiver(world,x,z),clearRiverSurface(world,x,z));
 dispose(root);
});
test('procedural tree and groundcover geometry is reproducible',()=>{
 const world=makeWorld(COURSES.find(c=>c.id==='sand'),'driver'),a=buildVegetationGeometry(world,new Group()),b=buildVegetationGeometry(world,new Group());
 assert.deepEqual(a.userData,b.userData);
 a.children.forEach((mesh,i)=>{assert.deepEqual(mesh.instanceMatrix.array,b.children[i].instanceMatrix.array);assert.deepEqual(mesh.material.map.image.data,b.children[i].material.map.image.data);});
 dispose(a);dispose(b);
});
test('fine pine branchlets are local to Himachal, small enough to avoid canopy-size flat cards',()=>{
 const mountain=makeWorld(COURSES.find(c=>c.id==='mountain'),'driver'),root=buildVegetationGeometry(mountain,new Group());
 const fine=root.getObjectByName('Himachal fine needle branchlets'),boughs=root.getObjectByName('Himachal tapered boughs'),matrix=new Matrix4(),position=new Vector3(),scale=new Vector3(),rotation=new Quaternion(),bounds=mountain.himachalSection.bounds;
 assert(fine.count>10000);assert(boughs.count>1000);assert.equal(fine.geometry.index.count/3,4,'two small branchlet planes, not intersecting canopy-size cards');
 // At driving distance a branchlet is only about16pixels tall. Thin isolated
 // needles previously averaged below alphaTest and the whole crown vanished.
 const pixels=fine.material.map.image.data;let survivingCells=0;
 for(let y=0;y<16;y++)for(let x=0;x<16;x++){let alpha=0;for(let j=0;j<16;j++)for(let i=0;i<16;i++)alpha+=pixels[((y*16+j)*256+x*16+i)*4+3];if(alpha/(256*255)>fine.material.alphaTest)survivingCells++;}
 assert(survivingCells>64&&survivingCells<160,'mip-filtered crown must retain leaf masses and visible negative space');
 for(let i=0;i<fine.count;i++){fine.getMatrixAt(i,matrix);matrix.decompose(position,rotation,scale);assert(Math.max(scale.x,scale.y,scale.z)<2.1);assert(position.x>bounds.minX-32&&position.x<bounds.maxX+32);assert(position.z>bounds.minZ-32&&position.z<bounds.maxZ+32);}
 dispose(root);
 for(const id of ['sand','urban']){const world=makeWorld(COURSES.find(c=>c.id===id),'driver'),other=buildVegetationGeometry(world,new Group());assert(!other.getObjectByName('Himachal fine needle branchlets'));assert(!other.getObjectByName('Himachal tapered boughs'));dispose(other);}
});

test('Himachal grass grows in dense narrow-blade patches with soil gaps',()=>{
 const world=makeWorld(COURSES.find(c=>c.id==='mountain'),'driver'),root=buildVegetationGeometry(world,new Group()),mesh=root.getObjectByName('Himachal grass tussocks');
 assert(mesh.count>=4000&&mesh.count<=5500,`${mesh.count} grass clumps`);
 assert.equal(mesh.geometry.index.count/3,48,'12 two-segment blades per clump');
 const matrix=new Matrix4(),bins=new Map();
 for(let i=0;i<mesh.count;i++){mesh.getMatrixAt(i,matrix);const x=matrix.elements[12],z=matrix.elements[14],key=`${Math.floor(x/6)},${Math.floor(z/6)}`;bins.set(key,(bins.get(key)||0)+1);}
 assert(Math.max(...bins.values())>40,'patch cores should be visibly dense');
 assert([...bins.values()].some(n=>n<4),'patch edges must taper into open soil');
 dispose(root);
});
