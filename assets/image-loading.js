/* Reserve the image's existing dimensions and show feedback until it decodes. */
(() => {
 const sources=new WeakMap(),listening=new WeakSet();
 const isPreview=img=>/(?:^|\/)assets\/(?:previews|trips)\//.test(img.getAttribute('src')||'');
 function watch(img){
  if(!isPreview(img))return;
  const src=img.getAttribute('src');if(sources.get(img)===src)return;
  sources.set(img,src);img.classList.add('image-pending');img.classList.remove('image-failed');img.dataset.imageState='loading';
  if(!listening.has(img)){
   listening.add(img);img.addEventListener('load',()=>finish(img));img.addEventListener('error',()=>finish(img));
  }
  if(img.complete)finish(img);
 }
 async function finish(img){
  const src=sources.get(img);if(!img.complete)return;
  if(img.naturalWidth){try{await img.decode();}catch{}if(sources.get(img)!==src)return;img.dataset.imageState='loaded';}
  else{img.dataset.imageState='error';img.classList.add('image-failed');}
  img.classList.remove('image-pending');
 }
 function scan(root){if(root.matches?.('img'))watch(root);root.querySelectorAll?.('img').forEach(watch);}
 function prioritize(root=document,count=4){
  [...root.querySelectorAll('img')].filter(img=>isPreview(img)&&img.getClientRects().length).slice(0,count).forEach(img=>{img.loading='eager';img.fetchPriority='high';});
 }
 new MutationObserver(records=>{for(const r of records){if(r.type==='attributes')watch(r.target);else r.addedNodes.forEach(n=>{if(n.nodeType===1)scan(n);});}}).observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:['src']});
 document.addEventListener('DOMContentLoaded',()=>{scan(document);prioritize();});
 document.addEventListener('click',e=>{if(e.target.closest('[data-garage-category],[data-mode-select],[data-welcome-go]'))requestAnimationFrame(()=>prioritize());});
 window.JimnyImageLoading={prioritize};
})();
