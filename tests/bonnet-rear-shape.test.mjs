import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {Raycaster,Vector3,DoubleSide,FrontSide,Box3} from 'three';

async function load(body){
 const b=await readFile(new URL(`../assets/models/jimny-${body}-blender.glb`,import.meta.url));
 const root=(await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'')).scene;
 root.updateMatrixWorld(true);return root;
}
for(const body of ['lwb','swb']){
 test(`${body}: bonnet thins toward the nose and the fixed wing follows its taper without a shelf`,async()=>{
  const shell=(await load(body)).getObjectByName('BodyShell');let hood;
  shell.traverse(o=>{if(o.name.endsWith('tapered_smooth_clamshell_bonnet'))hood=o;});assert(hood);
  const box=new Box3().setFromObject(hood,true),length=box.max.z-box.min.z;
  const top=(x,z)=>new Raycaster(new Vector3(x,1.4,z),new Vector3(0,-1,0),0,.35).intersectObject(hood,true)[0]?.point.y;
  for(const side of [-1,1]){
   const hinge=top(side*.69,box.min.z+length*.13),front=top(side*.69,box.min.z+length*.82);
   assert(hinge>1.184&&hinge<1.194,'Keep the raised hinge end and cowl fit');
   assert(front>1.14&&front<1.16&&hinge-front>.025&&hinge-front<.055,'Nose shoulder must remain thinner than hinge end');
   for(const f of [.65,.80,.90]){
    const z=box.min.z+length*f;
    const edge=new Raycaster(new Vector3(side,1.095,z),new Vector3(-side,0,0),0,.4).intersectObject(shell,true)[0];
    assert(edge&&edge.object.material.name==='BodyPaint','Fixed wing must close beneath the bonnet');
    assert(Math.abs(edge.point.x)<.740,'Broad protruding landing has returned near the bonnet nose');
   }
  }
 });
 test(`${body}: bonnet has the approved raised centre, shallow slope and shortened rolled nose`,async()=>{
  const shell=(await load(body)).getObjectByName('BodyShell'),offset=body==='swb'?-.17:0;
  const noseOffset=body==='swb'?-.065770106:0;
  const bonnetZ=z=>body==='swb'?z-.17+.104229894*((t)=>t*t*(3-2*t))(Math.max(0,Math.min(1,(z-.78)/.82))):z;
  // Garage replaces Blender's double-sided material with single-sided car
  // lacquer. Test the actual runtime culling, not the forgiving source mat.
  shell.traverse(o=>{if(o.isMesh&&o.material.name==='BodyPaint')o.material.side=FrontSide;});
  const top=(x,z)=>new Raycaster(new Vector3(x,1.4,bonnetZ(z)),new Vector3(0,-1,0),0,.30).intersectObject(shell,true).find(h=>h.object.material.name==='BodyPaint')?.point;
  const nose=top(0,1.70),centre=top(0,1.50),shoulder=top(.58,1.50),hinge=top(0,1.10);
  assert(nose&&nose.y>1.15&&nose.y<1.18,'Rolled bonnet nose height drifted');
  assert(centre&&shoulder&&centre.y-shoulder.y>.006&&centre.y-shoulder.y<.014,'Centre stamping must rise subtly above the shoulders, not be recessed');
  // Thinning the upper lid toward the unchanged lower seam adds about 7mm
  // of fall over this 400mm span, while leaving the hinge tangent unchanged.
  assert(hinge&&hinge.y-centre.y>.010&&hinge.y-centre.y<.020,'Tapered bonnet should retain a gentle, continuous slope');
  assert.equal(new Raycaster(new Vector3(0,1.4,1.81+noseOffset),new Vector3(0,-1,0),0,.30).intersectObject(shell,true).find(h=>h.object.material.name==='BodyPaint'),undefined,'Bonnet must finish behind the forward headlamp face, not overhang it');
  for(const side of [-1,1]){
   const edge=new Raycaster(new Vector3(side*1,1.174,1.10+offset),new Vector3(-side,0,0),0,.30).intersectObject(shell,true);
   assert.equal(edge[0]?.object.material.name,'BodyPaint','The folded bonnet side must face outward on both sides, without a see-through black slit');
  }
 });
 test(`${body}: rear hinge covers and continuous tailgate are visible with single-sided paint`,async()=>{
  const shell=(await load(body)).getObjectByName('BodyShell'),offset=body==='swb'?.17:0;
  shell.traverse(o=>{if(o.isMesh)o.material.side=FrontSide;});
  const rear=(x,y)=>new Raycaster(new Vector3(x,y,-1.95+offset),new Vector3(0,0,1),0,.35).intersectObject(shell,true)[0];
  // The new five-door places the lower hinge cover at y=.700–.751;
  // retain the earlier datum for the independently modelled three-door.
  for(const y of (body==='lwb'?[.73,1.13]:[.812,1.17]))assert.equal(rear(-.665,y)?.object.material.name,'MouldedPlastic','Factory hinge covers must be visible at their actual tailgate positions');
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
   if(body==='lwb'){
    assert(optical.some(h=>h.object.material.name==='BrightChrome')&&optical.some(h=>h.object.material.name==='LampLens'),'The revised clear lamp retains both its lens and reflective backing');
    assert(optical[0].point.z> -1.95&&optical[0].point.z< -1.93,'Revised lamp optics stay within the rear bumper envelope');
   }else{
    assert(optical.some(h=>h.object.material.name.startsWith('RearClearReflector')),'Clear lamp must contain a readable optical backing');
    assert(optical[0].point.z-offset> -1.818,'Lamp must be inset behind the swept bumper face, not project as a slab');
   }
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
