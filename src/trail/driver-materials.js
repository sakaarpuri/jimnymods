import * as T from 'three';

// Original, deterministic material swatches. No photographs, AI imagery or
// third-party skin textures. UV-based details move with the skinned surface.
export function createDriverDetailTextures(kind){
  const size=256,data=new Uint8Array(size*size*4),height=new Uint8Array(size*size*4);
  let seed=15731;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
  for(let y=0;y<size;y++)for(let x=0;x<size;x++){
    const i=(y*size+x)*4,n=random(),fine=random();let value,h;
    if(kind==='cotton'){
      const rib=.5+.5*Math.cos(x*Math.PI/4),stitch=.5+.5*Math.sin((y+(x%8<4?0:4))*Math.PI/4);
      value=.79+.105*rib+.075*n+.025*stitch;h=.22+.54*rib+.13*stitch+.11*fine;
    }else if(kind==='denim'){
      const diagonal=((x+y)%8)/7;value=.76+.13*diagonal+.11*n;h=.26+.44*diagonal+.3*fine;
    }else if(kind==='hair'){
      const strand=.5+.5*Math.sin(x*Math.PI/2+.4*Math.sin(y*Math.PI/64));
      value=.65+.22*strand+.13*n;h=.2+.65*strand+.15*fine;
    }else{
      // Very small, low-contrast pores: avoid noisy freckle/pox appearance.
      value=.94+.06*n;h=.44+.12*fine;
    }
    for(let c=0;c<3;c++){data[i+c]=Math.round(value*255);height[i+c]=Math.round(h*255);}data[i+3]=height[i+3]=255;
  }
  // The garment helper occupies only 0.07 of the MakeHuman UV atlas; using
  // skin's scale here turns millimetre knitting into broad smooth stripes.
  const repeat=kind==='skin'?14:kind==='hair'?5:128;
  const texture=bytes=>{const t=new T.DataTexture(bytes,size,size,T.RGBAFormat);t.wrapS=t.wrapT=T.RepeatWrapping;t.magFilter=T.LinearFilter;t.minFilter=T.LinearMipmapLinearFilter;t.generateMipmaps=true;t.repeat.set(repeat,kind==='hair'?3:repeat);t.anisotropy=4;t.needsUpdate=true;return t;};
  // These are linear reflectance multipliers, not sRGB photographs.
  return {map:texture(data),bumpMap:texture(height)};
}

export function applyDriverMaterialDetails(material){
  const kind=({DriverCotton:'cotton',DriverDenim:'denim',DriverHair:'hair',DriverSkin:'skin'})[material.name.replace(/\.\d+$/,'')];
  if(!kind)return;
  const textures=createDriverDetailTextures(kind);material.map=textures.map;material.bumpMap=textures.bumpMap;
  material.bumpScale=kind==='skin'?.00035:kind==='hair'?.0006:.00024;
  material.roughness=kind==='skin'?.67:kind==='hair'?.83:.92;
  // Each cloned material owns its maps: replacing a player cannot invalidate
  // another scene, and disposing it releases both maps, including bump detail.
  material.addEventListener('dispose',()=>{textures.map.dispose();textures.bumpMap.dispose();});
  material.needsUpdate=true;
}
