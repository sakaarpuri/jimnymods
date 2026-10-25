import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {Box3,Raycaster,Vector3} from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';

const artwork=JSON.parse(await readFile(new URL('../assets/models/jimny-wordmark.json',import.meta.url),'utf8'));
function inside(x,y,polygon){
  let hit=false;
  for(let i=0,j=polygon.length-1;i<polygon.length;j=i++){
    const [xi,yi]=polygon[i],[xj,yj]=polygon[j];
    if((yi>y)!==(yj>y)&&x<(xj-xi)*(y-yi)/(yj-yi)+xi)hit=!hit;
  }
  return hit;
}
function edgeDistance(x,y,polygon){
  return Math.min(...polygon.map(([ax,ay],i)=>{
    const [bx,by]=polygon[(i+1)%polygon.length],dx=bx-ax,dy=by-ay;
    const t=Math.max(0,Math.min(1,((x-ax)*dx+(y-ay)*dy)/(dx*dx+dy*dy)));
    return Math.hypot(x-ax-t*dx,y-ay-t*dy);
  }));
}
for(const body of ['lwb','swb'])test(`${body} tailgate wordmark preserves the official silhouette and readable orientation`,async()=>{
  const data=await readFile(new URL(`../assets/models/jimny-${body}-blender.glb`,import.meta.url));
  const gltf=await new GLTFLoader().setMeshoptDecoder(MeshoptDecoder).parseAsync(data.buffer.slice(data.byteOffset,data.byteOffset+data.byteLength),'');
  gltf.scene.updateMatrixWorld(true);
  const badge=gltf.scene.getObjectByName('JimnyTailgateWordmark');
  assert(badge,'The emblem must remain independent raised geometry');
  assert.equal(badge.userData.source_url,artwork.source);
  assert.equal(badge.parent.name,'BodyShell');
  const box=new Box3().setFromObject(badge),size=box.getSize(new Vector3());
  assert(Math.abs(size.x-.184)<.001);
  assert(Math.abs(size.y-.184*artwork.height/artwork.width)<.001);
  assert(size.z>.0005&&size.z<.003);
  assert(Math.abs(box.min.z-(-1.7357+(body==='swb'?.17:0)))<.001);
  let checked=0,mismatches=0,filled=0;
  const scale=.184/artwork.width;
  for(let y=4;y<artwork.height;y+=7)for(let x=4;x<artwork.width;x+=7){
    // Avoid bevel edges and mesh-compression rounding; test the letter faces and gaps.
    if(Math.min(...artwork.polygons.map(p=>edgeDistance(x,y,p)))<3)continue;
    const expected=artwork.polygons.some(p=>inside(x,y,p));
    const ray=new Raycaster(new Vector3(-.53-(x-artwork.width/2)*scale,.826-y*scale,-2),new Vector3(0,0,1),0,.5);
    const actual=ray.intersectObject(badge,true).length>0;
    checked++;filled+=Number(actual);mismatches+=Number(expected!==actual);
  }
  assert(checked>500&&filled>150,'Sample all letters and negative spaces');
  assert(mismatches/checked<.015,`${mismatches}/${checked} official-outline samples differ`);
});
test('jimnygami identity changes do not abandon saved builds or the configured website address',async()=>{
  const html=await readFile(new URL('../index.html',import.meta.url),'utf8');
  assert.match(html,/<title>jimnygami —/);
  // The logo lives in the shared header that every page renders.
  const header=await readFile(new URL('../assets/site-header.js',import.meta.url),'utf8');
  assert.match(header,/aria-label="jimnygami Garage"/);
  assert.match(header,/jimnygami-logo-sticker\.webp/);
  assert.match(html,/<header data-site-header data-page="garage">/);
  assert.match(html,/readJSON\("thatsuvmod-build"/);
  assert.match(html,/rel="canonical" href="https:\/\/thatsuvmod.com\/"/);
  assert(!html.includes('that SUV Mod'));
  const game=await readFile(new URL('../game.html',import.meta.url),'utf8');
  assert.match(game,/<header data-site-header data-page="drive">/);
  assert(!game.includes('jimny<strong>life'));
});
