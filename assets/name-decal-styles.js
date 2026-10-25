/* Door name decal styles, shared by the Garage form, the 3D viewer and Drive.
   Five lettering styles chosen for vinyl door decals, three sizes. Fonts are
   bundled (OFL / Apache 2.0, licences beside each file) and loaded only when used. */
(function(root){
 const FONTS=[
  {id:'clean',label:'Clean',family:'Outfit',weight:800,file:'assets/fonts/outfit.ttf'},
  {id:'rally',label:'Rally',family:'Racing Sans One',weight:400,file:'assets/fonts/racing-sans-one.ttf'},
  {id:'stencil',label:'Stencil',family:'Saira Stencil One',weight:400,file:'assets/fonts/saira-stencil-one.ttf'},
  {id:'script',label:'Script',family:'Yellowtail',weight:400,file:'assets/fonts/yellowtail.ttf',boost:1.35},
  {id:'heritage',label:'Heritage',family:'Alfa Slab One',weight:400,file:'assets/fonts/alfa-slab-one.ttf'}
 ];
 // Decal height on the door as a share of the default; width follows the lettering.
 const SIZES=[{id:'small',label:'S',name:'Small',scale:.8},{id:'medium',label:'M',name:'Medium',scale:1},{id:'large',label:'L',name:'Large',scale:1.2}];
 const DEFAULT={font:'clean',size:'medium'};
 const byId=(list,id,fallback)=>list.find(x=>x.id===id)||list.find(x=>x.id===fallback);
 function clean(design={}){
  return {nameFont:byId(FONTS,design?.nameFont,DEFAULT.font).id,nameSize:byId(SIZES,design?.nameSize,DEFAULT.size).id};
 }
 function font(id){return byId(FONTS,id,DEFAULT.font);}
 function size(id){return byId(SIZES,id,DEFAULT.size);}
 // Script faces carry small lowercase letters, so they draw larger at the same size step.
 function css(id,px){const f=font(id);return `${f.weight} ${Math.round(px*(f.boost||1))}px "${f.family}", sans-serif`;}
 const loading=new Map();
 // Resolves once the face can be drawn on a canvas; never rejects, so a missing
 // file simply leaves the browser's fallback lettering.
 function load(id){
  const f=font(id);if(loading.has(f.id))return loading.get(f.id);
  let task=Promise.resolve(false);
  try{
   if(root.document?.fonts&&typeof root.FontFace==='function'){
    const face=new root.FontFace(f.family,`url(${f.file})`,{weight:String(f.weight),style:'normal'});
    task=face.load().then(loaded=>{root.document.fonts.add(loaded);return true;}).catch(()=>false);
   }
  }catch{/* Older browsers draw with the fallback face. */}
  loading.set(f.id,task);return task;
 }
 root.JimnyNameDecalStyles={FONTS,SIZES,DEFAULT,clean,font,size,css,load};
})(globalThis);
