import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {Raycaster,Vector3,DoubleSide,FrontSide} from 'three';

async function load(body){
 const b=await readFile(new URL(`../assets/models/jimny-${body}-blender.glb`,import.meta.url));
 const root=(await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'')).scene;
 root.updateMatrixWorld(true);return root;
}
for(const body of ['lwb','swb']){
 test(`${body}: bonnet reaches the nose and has defined shoulders around a shallow centre`,async()=>{
  const shell=(await load(body)).getObjectByName('BodyShell'),offset=body==='swb'?-.17:0;
  // Garage replaces Blender's double-sided material with single-sided car
  // lacquer. Test the actual runtime culling, not the forgiving source mat.
  shell.traverse(o=>{if(o.isMesh&&o.material.name==='BodyPaint')o.material.side=FrontSide;});
  const top=(x,z)=>new Raycaster(new Vector3(x,1.4,z+offset),new Vector3(0,-1,0),0,.30).intersectObject(shell,true).find(h=>h.object.material.name==='BodyPaint')?.point;
  const nose=top(0,1.81),centre=top(0,1.50),shoulder=top(.58,1.50);
  assert(nose&&nose.y>1.16&&nose.y<1.19,'Bonnet must roll forward over the painted nose, not stop behind it');
  assert(centre&&shoulder&&shoulder.y-centre.y>.016,'Stamped shoulder must rise clearly above the centre, not read as a soft padded lid');
  assert(shoulder.y-centre.y<.020,'Shoulder must not become an oversized scoop');
  const lipCentre=top(0,1.84),lipShoulder=top(.58,1.84);
  assert(lipCentre&&lipShoulder&&Math.abs(lipCentre.y-lipShoulder.y)<.006,'Shoulder pressings must fade into a near-level front lip rather than leave raised ears over the lamps');
  for(const side of [-1,1]){
   const edge=new Raycaster(new Vector3(side*1,1.174,1.10+offset),new Vector3(-side,0,0),0,.30).intersectObject(shell,true);
   assert.equal(edge[0]?.object.material.name,'BodyPaint','The folded bonnet side must face outward on both sides, without a see-through black slit');
  }
 });
 test(`${body}: rear hinge covers and continuous tailgate are visible with single-sided paint`,async()=>{
  const shell=(await load(body)).getObjectByName('BodyShell'),offset=body==='swb'?.17:0;
  shell.traverse(o=>{if(o.isMesh)o.material.side=FrontSide;});
  const rear=(x,y)=>new Raycaster(new Vector3(x,y,-1.95+offset),new Vector3(0,0,1),0,.35).intersectObject(shell,true)[0];
  for(const y of [.812,1.17])assert.equal(rear(-.665,y)?.object.material.name,'MouldedPlastic','Factory hinge covers must be visible at their actual tailgate positions');
  for(const side of [-1,1])for(const y of [.75,.90,1.08,1.12,1.40,1.61]){
   assert.equal(rear(side*.615,y)?.object.material.name,'BodyPaint',`Continuous rear skin must cover the belt and window shoulder at ${side}/${y}`);
  }
 });
 test(`${body}: rear bumper has rising end cheeks and recessed optical clear chambers`,async()=>{
  const shell=(await load(body)).getObjectByName('BodyShell'),offset=body==='swb'?.17:0;
  shell.traverse(o=>{if(o.isMesh)o.material.side=DoubleSide;});
  const rear=(x,y)=>new Raycaster(new Vector3(x,y,-1.95+offset),new Vector3(0,0,1),0,.20).intersectObject(shell,true);
  for(const side of [-1,1]){
   const corner=rear(side*.780,.498).filter(h=>h.distance<.165);
   assert(!corner.some(h=>h.object.material.name==='MouldedPlastic'),'Lower corner must rise, not remain a rectangular bumper beam');
   const optical=rear(side*(.578-.067),.606);
   assert(optical.some(h=>h.object.material.name.startsWith('RearClearReflector')),'Clear lamp must contain a readable optical backing');
   assert(optical[0].point.z-offset> -1.818,'Lamp must be inset behind the swept bumper face, not project as a slab');
  }
 });
 test(`${body}: rear glazing leaves proper painted shoulders around a narrower aperture`,async()=>{
  const shell=(await load(body)).getObjectByName('BodyShell'),offset=body==='swb'?.17:0;
  const hit=x=>new Raycaster(new Vector3(x,1.40,-1.95+offset),new Vector3(0,0,1),0,.30).intersectObject(shell,true)[0];
  for(const side of [-1,1]){
   assert.equal(hit(side*.54)?.object.material.name,'WindowGlass');
   assert.equal(hit(side*.62)?.object.material.name,'BodyPaint','Wide rear glazing must not replace the factory painted outer shoulder');
   const corner=new Raycaster(new Vector3(side*.58,1.62,-1.95+offset),new Vector3(0,0,1),0,.40).intersectObject(shell,true)[0];
   assert.equal(corner?.object.material.name,'BodyPaint','Painted aperture and rounded seal must meet without an open rectangular corner');
  }
 });
}
