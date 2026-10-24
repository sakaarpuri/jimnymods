/* All model-derived images follow the same release as Garage and Drive.
   Supplier photographs are deliberately not rewritten. */
(function(root){
 const revision=()=>root.JIMNY_VISUAL_RELEASE?.previewVersion||'development';
 function versioned(source){
  if(typeof source!=='string'||!/(?:^|\/)assets\/previews\//.test(source))return source;
  const url=new URL(source,document.baseURI);if(url.origin!==location.origin)return source;
  return source.split('?')[0]+'?v='+revision();
 }
 function preview(file,body='5door'){return versioned(`assets/previews/${body==='3door'?'swb/':''}${file.replace(/\.webp$/,'')}.webp`);}
 function modelImage(group,option,body){return preview(`design-${group}-${option}`,body);}
 function updateImage(img){const next=versioned(img.getAttribute('src'));if(next&&next!==img.getAttribute('src'))img.setAttribute('src',next);}
 function refreshBody(body=document.getElementById('bodySelect')?.value||'5door'){
  document.querySelectorAll('img[data-model-design-group]').forEach(img=>{img.src=modelImage(img.dataset.modelDesignGroup,img.dataset.modelDesignOption,body);});
  const fallback=document.getElementById('spinImg');if(fallback)fallback.src=preview('design-finish-oem',body);
 }
 Object.assign(root,{jimnyPreviewURL:preview,jimnyModelImage:modelImage,refreshJimnyVisualAssets:refreshBody});
 for(const id of ['mountain','sand','urban'])document.documentElement.style.setProperty(`--world-${id}-preview`,`url("${preview('world-'+id)}")`);
 new MutationObserver(records=>{for(const r of records){if(r.type==='attributes'){updateImage(r.target);continue;}for(const node of r.addedNodes){if(node.nodeType!==1)continue;if(node.matches('img'))updateImage(node);node.querySelectorAll?.('img').forEach(updateImage);}}}).observe(document.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:['src']});
 document.addEventListener('DOMContentLoaded',()=>{document.querySelectorAll('img').forEach(updateImage);refreshBody();});
 root.addEventListener('jimny-model-change',e=>refreshBody(e.detail));
})(window);
