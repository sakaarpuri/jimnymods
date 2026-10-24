// Render quality tiers. Phones, touch-first and low-memory or low-core devices get
// the light tier: a 2k HDRI, no ambient occlusion pass and smaller shadow maps.
// `?quality=low|high` overrides detection for testing.
export const QUALITY=Object.freeze({
  high:Object.freeze({id:'high',hdri:'4k',ambientOcclusion:true,shadowMapSize:2048,shadowBlurSamples:16,contactResolution:512,maxPixelRatio:1.7}),
  low:Object.freeze({id:'low',hdri:'2k',ambientOcclusion:false,shadowMapSize:1024,shadowBlurSamples:8,contactResolution:256,maxPixelRatio:1.5}),
});
export function detectQuality({override,width=1440,coarsePointer=false,deviceMemory,cores}={}){
  if(override==='low'||override==='high')return QUALITY[override];
  const slow=(deviceMemory!==undefined&&deviceMemory<=4)||(cores!==undefined&&cores<=4);
  return width<900||coarsePointer||slow?QUALITY.low:QUALITY.high;
}
export function browserQuality(){
  let override=null;try{override=new URLSearchParams(location.search).get('quality');}catch{/* No URL in tests. */}
  return detectQuality({override,width:Math.min(screen.width||innerWidth,innerWidth),coarsePointer:matchMedia('(pointer:coarse)').matches,deviceMemory:navigator.deviceMemory,cores:navigator.hardwareConcurrency});
}
