import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {Color,Group,Mesh,MeshStandardMaterial,BoxGeometry,Vector3,BufferGeometry,Float32BufferAttribute} from 'three';
import {applyWheelFinish,disposeWheelFinishes,WHEEL_FINISHES} from '../src/wheel-finishes.js';
async function model(body){const bytes=await readFile(new URL(`../assets/models/jimny-${body}-blender.glb`,import.meta.url));return (await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'')).scene;}
const close=(a,b)=>Math.abs(a-b)<1e-6;

test('both actual models change only wheel alloy batches, preserve other materials, and restore exact OEM references',async()=>{
 for(const body of ['lwb','swb']){const root=await model(body),before=new Map();root.traverse(m=>{if(m.isMesh)before.set(m,{material:m.material,geometry:m.geometry,color:m.material.color.clone()});});
  assert.equal(applyWheelFinish(root,'bronze'),3);const target=new Color(WHEEL_FINISHES.find(c=>c.id==='bronze').colour);
  for(const [mesh,original]of before){const changed=mesh.material!==original.material;if(changed){assert(/^(StockWheels|AllTerrainWheels|SpareWheel)__/.test(mesh.name));assert(['MachinedAlloy','WheelGunmetal'].includes(original.material.name));assert.deepEqual(mesh.material.userData.wheelFinishOriginal,{name:original.material.name,color:original.color.getHexString(),vertexColors:original.material.vertexColors});const color=mesh.geometry.attributes.color;let painted=0;for(let i=0;i<color.count;i++)if(close(color.getX(i),target.r)&&close(color.getY(i),target.g)&&close(color.getZ(i),target.b))painted++;assert(painted>20,mesh.name);}else{assert.equal(mesh.geometry,original.geometry);assert(mesh.material.color.equals(original.color));}}
  assert.equal(applyWheelFinish(root,'oem'),3);for(const [mesh,original]of before){assert.equal(mesh.material,original.material);assert.equal(mesh.geometry,original.geometry);}
 }
});

test('wheel emblems, hub hardware and the brake drum/disc regions retain their original pixel colours',async()=>{
 for(const body of ['lwb','swb']){const root=await model(body);root.updateMatrixWorld(true);const old=new Map();root.traverse(m=>{if(/^(StockWheels|AllTerrainWheels)__/.test(m.name))old.set(m,{geometry:m.geometry,material:m.material});});applyWheelFinish(root,'silver');let protectedVertices=0;
  for(const [mesh,source]of old){if(!['MachinedAlloy','WheelGunmetal'].includes(source.material.name))continue;const pos=source.geometry.attributes.position,color=source.geometry.attributes.color,after=mesh.geometry.attributes.color,at=mesh.name.startsWith('AllTerrain'),xCentre=at?.750:.705,cy=at?.368:.3465,half=body==='lwb'?1.295:1.125,v=new Vector3();
   for(let i=0;i<pos.count;i++){v.fromBufferAttribute(pos,i).applyMatrix4(mesh.matrixWorld);const radius=Math.hypot(v.y-cy,v.z-Math.sign(v.z)*half),axial=Math.abs(Math.abs(v.x)-xCentre);if(radius>.043&&!(radius<.15&&axial<.035))continue;protectedVertices++;
    for(let c=0;c<3;c++){const channel=['r','g','b'][c],expected=source.material.color[channel]*(source.material.vertexColors&&color?color.getComponent(i,c):1),actual=mesh.material.color[channel]*(mesh.material.vertexColors&&after?after.getComponent(i,c):1);assert(close(actual,expected),`${body} ${mesh.name} protected vertex ${i}`);}
   }
  }assert(protectedVertices>500);
 }
});

test('repeated colour changes reuse clones and cleanup/OEM restoration disposes them once without disposing restored originals',async()=>{
 const root=(await model('lwb')).getObjectByName('StockWheels'),mesh=root.getObjectByName('StockWheels__MachinedAlloy'),originalMaterial=mesh.material,originalGeometry=mesh.geometry;let oldDisposals=0;originalMaterial.addEventListener('dispose',()=>oldDisposals++);originalGeometry.addEventListener('dispose',()=>oldDisposals++);
 applyWheelFinish(root,'bronze');const material=mesh.material,geometry=mesh.geometry;let disposals=0;material.addEventListener('dispose',()=>disposals++);geometry.addEventListener('dispose',()=>disposals++);
 for(let i=0;i<30;i++)applyWheelFinish(root,['bronze','silver','graphite','black'][i%4]);assert.equal(mesh.material,material);assert.equal(mesh.geometry,geometry);assert.equal(disposals,0);assert.equal(disposeWheelFinishes(root),1);assert.equal(disposals,2);assert.equal(oldDisposals,0);assert.equal(mesh.material,originalMaterial);assert.equal(mesh.geometry,originalGeometry);assert.equal(disposeWheelFinishes(root),0);
 applyWheelFinish(root,'black');mesh.geometry.dispose();mesh.material.dispose();assert.equal(oldDisposals,2,'outer scene disposal releases retained OEM resources once');
});

test('unknown values restore OEM and non-wheel shared materials never change',()=>{
 const root=new Group(),grille=new Group();grille.name='OEMGrille';root.add(grille);const material=new MeshStandardMaterial({color:'#444444'});material.name='WheelGunmetal';const mesh=new Mesh(new BoxGeometry(),material);grille.add(mesh);assert.equal(applyWheelFinish(root,'bronze'),0);assert.equal(mesh.material,material);assert.equal(applyWheelFinish(null,'bronze'),0);assert.equal(applyWheelFinish(root,'not-a-finish'),0);
});

test('driving-renderer extracted unnamed wheels retain the same finish and protected centre hardware',async()=>{
 const source=await model('lwb');source.updateMatrixWorld(true);const root=new Group();root.position.set(25,8,32);root.rotation.y=.7;
 for(const side of [-1,1])for(const front of [-1,1]){
  const pivot=new Group(),spin=new Group();pivot.position.set(side*.705,.3465,front*1.295);pivot.add(spin);root.add(pivot);
  source.getObjectByName('StockWheels').traverse(mesh=>{if(!mesh.isMesh||!['MachinedAlloy','WheelGunmetal'].includes(mesh.material.name))return;const input=mesh.geometry.toNonIndexed(),position=input.attributes.position,values=[],v=new Vector3();
   for(let i=0;i<position.count;i+=3){const triangle=[0,1,2].map(j=>v.fromBufferAttribute(position,i+j).applyMatrix4(mesh.matrixWorld).clone());if(Math.sign(triangle[0].x)!==side||Math.sign(triangle[0].z)!==front)continue;for(const p of triangle)values.push(p.x-side*.705,p.y-.3465,p.z-front*1.295);}
   const geometry=new BufferGeometry();geometry.setAttribute('position',new Float32BufferAttribute(values,3));const material=mesh.material.clone();material.vertexColors=false;material.userData.testOriginalRGB=material.color.toArray();spin.add(new Mesh(geometry,material));input.dispose();
  });
 }
 assert.equal(applyWheelFinish(root,'bronze'),4);const tint=new Color('#987345');let changed=0,protectedCount=0;
 root.traverse(mesh=>{if(!mesh.isMesh)return;const p=mesh.geometry.attributes.position,c=mesh.geometry.attributes.color,original=mesh.material.userData.testOriginalRGB;for(let i=0;i<p.count;i++){const rgb=['r','g','b'].map((key,j)=>mesh.material.color[key]*(mesh.material.vertexColors&&c?c.getComponent(i,j):1)),radius=Math.hypot(p.getY(i),p.getZ(i));if(radius<.043){protectedCount++;assert(close(rgb[0],original[0]));}if(close(rgb[0],tint.r)&&close(rgb[1],tint.g)&&close(rgb[2],tint.b))changed++;}});
 assert(changed>500);assert(protectedCount>100);assert.equal(applyWheelFinish(root,'unknown'),4);
});
