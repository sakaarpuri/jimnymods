import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFileSync} from 'node:fs';

const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
function setup(){
 const images=[],events={},observers=[];
 const document={documentElement:{},querySelectorAll:()=>images,addEventListener:(name,callback)=>events[name]=callback};
 const window={};
 class MutationObserver{constructor(callback){observers.push(callback);}observe(){}}
 vm.runInNewContext(read('assets/image-loading.js'),{window,document,MutationObserver,requestAnimationFrame:callback=>callback()});
 function img(src='assets/previews/preset-retro.webp'){
  const classes=new Set(),handlers={};
  const image={src,nodeType:1,dataset:{},complete:false,naturalWidth:0,visible:true,loading:'lazy',fetchPriority:'auto',
   classList:{add:(...names)=>names.forEach(name=>classes.add(name)),remove:(...names)=>names.forEach(name=>classes.delete(name)),contains:name=>classes.has(name)},
   matches:selector=>selector==='img',querySelectorAll:()=>[],getAttribute:()=>image.src,getClientRects:()=>image.visible?[{}]:[],
   addEventListener:(name,callback)=>(handlers[name]??=[]).push(callback),decode:()=>Promise.resolve(),
   fire:name=>handlers[name].forEach(callback=>callback()),handlers};
  images.push(image);return image;
 }
 return {img,start:()=>events.DOMContentLoaded(),change:image=>observers[0]([{type:'attributes',target:image}]),window};
}

test('a pending preview keeps its loading state until decoding completes',async()=>{
 const s=setup(),image=s.img();s.start();assert.equal(image.dataset.imageState,'loading');assert(image.classList.contains('image-pending'));
 let decoded;image.decode=()=>new Promise(resolve=>decoded=resolve);image.complete=true;image.naturalWidth=800;image.fire('load');
 assert.equal(image.dataset.imageState,'loading');decoded();await new Promise(resolve=>setImmediate(resolve));
 assert.equal(image.dataset.imageState,'loaded');assert(!image.classList.contains('image-pending'));
});
test('a failed image stops shimmering instead of pretending it is still loading',()=>{
 const s=setup(),image=s.img('assets/trips/spiti.jpg');s.start();image.complete=true;image.fire('error');
 assert.equal(image.dataset.imageState,'error');assert(image.classList.contains('image-failed'));assert(!image.classList.contains('image-pending'));
});
test('an older decode cannot clear the placeholder after a body-image change',async()=>{
 const s=setup(),image=s.img();s.start();let decoded;image.decode=()=>new Promise(resolve=>decoded=resolve);image.complete=true;image.naturalWidth=800;image.fire('load');
 image.src='assets/previews/swb/preset-retro.webp';image.complete=false;image.naturalWidth=0;s.change(image);decoded();await new Promise(resolve=>setImmediate(resolve));
 assert.equal(image.dataset.imageState,'loading');assert(image.classList.contains('image-pending'));assert.equal(image.handlers.load.length,1);
});
test('prioritization targets the visible first row while leaving other images lazy',()=>{
 const s=setup(),images=Array.from({length:7},()=>s.img());images[0].visible=false;s.start();
 assert.equal(images[0].loading,'lazy');assert(images.slice(1,5).every(image=>image.loading==='eager'&&image.fetchPriority==='high'));assert.equal(images[5].loading,'lazy');
});
test('supplier photos are not mistaken for model-preview loading placeholders',()=>{
 const s=setup(),image=s.img('assets/products/seller-photo.webp');s.start();assert.equal(image.dataset.imageState,undefined);assert.equal(image.loading,'lazy');
});
test('saved-build thumbnails can be rendered before the later Garage initialization',()=>{
 const html=read('index.html'),block=html.slice(html.indexOf('const GARAGE_CABIN_COLOURS='),html.indexOf('function garagePartCards('));
 const context={bodyStyle:'3door',modById:{tires:{}},garageCanPreview:()=>true,result:null};
 vm.runInNewContext("result=garagePartImage('tires');\n"+block,context);
 assert.equal(context.result,'assets/previews/swb/part-tires.webp');
});
