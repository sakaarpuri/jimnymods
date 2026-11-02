import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {Box3,Vector3,Raycaster,Mesh,MeshBasicMaterial,DoubleSide,FrontSide} from 'three';
import {extractFactoryBadge} from '../src/refined-parts.js';
const bytes=readFileSync(process.env.JIMNY_TEST_MODEL||new URL('../assets/models/jimny-lwb-blender.glb',import.meta.url));
const {scene}=await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(bytes.buffer.slice(bytes.byteOffset,bytes.byteOffset+bytes.byteLength),'');scene.updateMatrixWorld(true);
test('bonnet nose tapers inside the grille, while its hinge width stays fitted',()=>{
 let bonnet;scene.traverse(o=>{if(o.name.endsWith('tapered_smooth_clamshell_bonnet'))bonnet=o;});assert(bonnet,'Tapered bonnet required');
 let nose=0,rear=0;const p=new Vector3();bonnet.traverse(o=>{if(!o.isMesh)return;const a=o.geometry.attributes.position;for(let i=0;i<a.count;i++){p.fromBufferAttribute(a,i).applyMatrix4(o.matrixWorld);if(p.z>1.70)nose=Math.max(nose,Math.abs(p.x));if(p.z<.80)rear=Math.max(rear,Math.abs(p.x));}});
 assert(nose<.720,`Nose too wide: ${nose}`);assert(rear>.756&&rear<.760);
 const body=scene.getObjectByName('BodyShell'),paint=[];body.traverse(o=>{if(o.isMesh&&o.material.name==='BodyPaint'){o.material.side=FrontSide;paint.push(o);}});
 // The fixed wing rolls inward below the tapered lid. A wide horizontal
 // landing outside the lid was the rejected R39 defect, not an invariant.
 for(const side of [-1,1])for(const z of [1.40,1.55,1.65]){
  const smooth=t=>{t=Math.max(0,Math.min(1,t));return t*t*(3-2*t);};let sourceZ=z;
  for(let k=0;k<8;k++)sourceZ=z+.022*(1-smooth((1.77-sourceZ)/.996));
  const width=.713+.045*smooth((1.77-sourceZ)/.996),hem=1.1125+.018*Math.max(0,Math.min(1,(1.735-sourceZ)/.961));
  const h=new Raycaster(new Vector3(side,hem-.006,z),new Vector3(-side,0,0),0,.4).intersectObjects(paint,false)[0];
  assert(h,`Open fixed wing at ${side}/${z}`);
  assert(Math.abs(h.point.x)<width+.012,`Projecting shelf at ${side}/${z}`);
 }
 let returns;scene.traverse(o=>{if(o.name.endsWith('recessed_bonnet_seam_returns'))returns=o;});assert(returns);
 for(const side of [-1,1])for(const z of [1.2,1.4,1.55]){
  const hem=1.1125+.018*Math.max(0,Math.min(1,(1.735-z)/.961));
  const hits=new Raycaster(new Vector3(side,hem-.001,z),new Vector3(-side,0,0),0,.32).intersectObject(returns,true);
  assert(hits.length,'Seam must have opaque recessed backing');
 }
});
test('ALLGRIP retains original pre-import raised lettering proportions',()=>{
 const o=scene.getObjectByName('AllGripTailgateWordmark');assert(o);assert.match(o.userData.restored_from,/Pre-Kimi/);
 const b=new Box3().setFromObject(o),s=b.getSize(new Vector3());assert(Math.abs(s.x-.130)<.001);assert(Math.abs(s.y-.02682)<.001);assert(Math.abs(b.getCenter(new Vector3()).x+.5295)<.001);
});
test('rear hub Suzuki S reads in the same orientation as the factory front emblem',()=>{
 const geo=extractFactoryBadge(scene.getObjectByName('OEMGrille')),front=new Mesh(geo,new MeshBasicMaterial({side:DoubleSide}));geo.computeBoundingBox();const box=geo.boundingBox,centre=box.getCenter(new Vector3()),size=box.getSize(new Vector3());front.updateMatrixWorld(true);
 const spare=scene.getObjectByName('SpareWheel__MachinedAlloy');assert(spare);spare.material.side=DoubleSide;
 let count=0,mismatch=0,filled=0;
 for(let y=.03;y<1;y+=.04)for(let x=.03;x<1;x+=.04){
  const a=new Raycaster(new Vector3(box.min.x+x*size.x,box.min.y+y*size.y,box.max.z+.01),new Vector3(0,0,-1),0,.03).intersectObject(front).length>0;
  const b=new Raycaster(new Vector3(-(-.0126193+x*.0252446),.982399+y*.025233,-2.0192),new Vector3(0,0,1),0,.0008).intersectObject(spare).length>0;
  count++;filled+=Number(b);mismatch+=Number(a!==b);
 }
 assert(filled>200);assert(mismatch/count<.08,`${mismatch}/${count} emblem samples disagree`);
});

test('refitted wing paint retains normals and surface coordinates',()=>{
 let count=0;scene.traverse(o=>{if(o.isMesh&&o.name.includes('continuous_upper_wing_and_nose')){assert(o.geometry.attributes.uv);assert(o.geometry.attributes.normal);count++;}});assert(count);
});

test('bonnet nose stops behind the grille face rather than overhanging it',()=>{
 let hood;scene.traverse(o=>{if(o.name.endsWith('tapered_smooth_clamshell_bonnet'))hood=o;});
 const h=new Box3().setFromObject(hood,true),g=new Box3().setFromObject(scene.getObjectByName('OEMGrille'),true);
 assert(h.max.z<1.749&&h.max.z>1.747,`Bonnet front ${h.max.z}`);assert(g.max.z-h.max.z>.019);
});
test('continuous upper pressing replaces the old overlapping landing and closes the cowl',()=>{
 const pressing=scene.getObjectByName('Revision_43_—_continuous_upper_wing_and_nose');assert(pressing);
 assert(!scene.getObjectByName('Revision_37_—_continuous_upper_nose_and_wing_landing'),'Do not restore the rejected shelf');
 const body=scene.getObjectByName('BodyShell');body.traverse(o=>{if(o.isMesh)o.material.side=FrontSide;});
 for(const side of [-1,1])for(const z of [.9,1.1,1.3,1.5,1.65]){
  const h=new Raycaster(new Vector3(side,1.095,z),new Vector3(-side,0,0),0,.4).intersectObject(body,true)[0];
  assert(h,`Open upper wing ${side}/${z}`);assert.equal(h.object,pressing,'Old wing or duplicated landing protrudes through continuous pressing');
 }
 for(const side of [-1,1])for(const y of [1.108,1.116,1.123])for(const z of [.66,.68,.70,.72,.74,.76,.78,.80]){
  const h=new Raycaster(new Vector3(side,y,z),new Vector3(-side,0,0),0,.4).intersectObject(body,true)[0];
  assert(h&&!h.object.material.transparent,`Open cowl return ${side}/${y}/${z}`);
 }
});
