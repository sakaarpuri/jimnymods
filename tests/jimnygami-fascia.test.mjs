import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {Box3,Raycaster,Vector3} from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {correctFrontEnd,stockHeadlampCentre} from '../src/front-end-correction.js';
// Probe points were authored on the original fascia; map them through the Brief 4
// front-end correction so each test still checks the same feature.
const face=(x,y)=>correctFrontEnd([x,y,0],{rigid:true});

async function model(body){
 const b=await readFile(new URL(`../assets/models/jimny-${body}-blender.glb`,import.meta.url));
 const root=(await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(b.buffer.slice(b.byteOffset,b.byteOffset+b.byteLength),'')).scene;
 root.updateMatrixWorld(true);return root;
}
for(const body of ['lwb','swb']){
 test(`${body}: every grille follows the tapered factory envelope rather than a rectangle`,async()=>{
  const root=await model(body),z=body==='swb'?-.17:0;
  for(const name of ['OEMGrille','BlockGrille','RhinoGrille','ScriptGrille','GlossGrille','DeleteGrille','ClassicGrille','MeshGrille']){
   const grille=root.getObjectByName(name);
   const hit=(x0,y0)=>{const [x,y]=face(x0,y0);return new Raycaster(new Vector3(x,y,2.05+z),new Vector3(0,0,-1),0,.28).intersectObject(grille,true).length>0;};
   assert(hit(0,.854),`${name}: lower central lip missing`);
   assert(!hit(.66,.854),`${name}: lower outer corner still rectangular`);
   assert(hit(.67,1.105),`${name}: flat upper shoulder missing`);
   assert(!hit(.744,1.110),`${name}: upper outer corner not clipped`);
  }
 });
 // The correction narrows the grille to 90%: 132 mm slots become 119 mm, closer to
 // Suzuki's studio photos; the height and the cut corners are unchanged.
 test(`${body}: stock chrome slots are 119 by 178 mm with cut corners`,async()=>{
  const root=await model(body),grille=root.getObjectByName('OEMGrille'),b=new Box3(),v=new Vector3(),chrome=[];
  grille.traverse(o=>{if(o.isMesh&&o.material.name==='BrightChrome'&&o.name!=='FactoryGrilleEmblem'){chrome.push(o);const a=o.geometry.attributes.position;for(let i=0;i<a.count;i++){v.fromBufferAttribute(a,i).applyMatrix4(o.matrixWorld);if(v.x>-.36&&v.x<-.225)b.expandByPoint(v);}}});
  const size=b.getSize(new Vector3());assert(Math.abs(size.x-.1188)<.002,`slot width ${size.x}`);assert(Math.abs(size.y-.178)<.002);
  const z=body==='swb'?-.17:0;
  const hit=(x0,y0)=>{const [x,y]=face(x0,y0);return new Raycaster(new Vector3(x,y,2+z),new Vector3(0,0,-1),0,.2).intersectObjects(chrome,false).length>0;};
  assert(hit(-.32,1.069));assert(!hit(-.258,1.069),'Upper slot corner must be cut away');
 });
 test(`${body}: painted A-pillars follow the windscreen rake throughout their height`,async()=>{
  const root=await model(body),shell=root.getObjectByName('BodyShell'),offset=body==='swb'?-.17:0;
  for(const side of [-1,1])for(const y of [1.24,1.36,1.48,1.59]){
   const z=.689-(y-1.181)*(.2075/.466)+offset;
   const hits=new Raycaster(new Vector3(side*1.1,y,z),new Vector3(-side,0,0),0,.45).intersectObject(shell,true);
   assert(hits.some(h=>h.object.material.name==='BodyPaint'),`Painted frame detached at ${side}/${y}`);
  }
 });
}

test('Jimnygami uses the supplied artwork, licensed rounded type and one accent without migrating saves',async()=>{
 const read=p=>readFile(new URL('../'+p,import.meta.url),'utf8');
 assert.match(await read('assets/site-header.js'),/jimnygami-logo\.webp/);
 for(const file of ['index.html','game.html']){const html=await read(file);assert.match(html,/assets\/site-header\.js/);assert.match(html,/assets\/jimnygami-brand\.css/);assert(!/jimny mods|jimnylife/.test(html));}
 const css=await read('assets/jimnygami-brand.css');assert.match(css,/--brand-acid:#d4d9d6/);assert.doesNotMatch(css,/#dfff00/);assert.match(css,/outfit\.ttf/);assert.match(css,/focus-visible/);
 assert.match(await read('assets/fonts/outfit-OFL.txt'),/SIL OPEN FONT LICENSE/);
});
