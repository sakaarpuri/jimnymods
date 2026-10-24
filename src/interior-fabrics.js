import * as T from 'three';

export const FABRICS=Object.freeze(['canvas','tweed','houndstooth','leather']);
export const validFabric=value=>FABRICS.includes(value)?value:'canvas';
export function metreFabricUV(root){root.traverse(mesh=>{if(!mesh.isMesh||!mesh.material?.userData.ownsTextures)return;const p=mesh.geometry.attributes.position,n=mesh.geometry.attributes.normal,uv=mesh.geometry.attributes.uv;if(!uv||!n)return;for(let i=0;i<p.count;i++){const x=Math.abs(n.getX(i)),y=Math.abs(n.getY(i)),z=Math.abs(n.getZ(i));uv.setXY(i,x>y&&x>z?p.getZ(i):p.getX(i),y>x&&y>z?p.getZ(i):p.getY(i));}uv.needsUpdate=true;});return root;}
// Original tileable material data. UVs are metres, so pattern pitch stays the
// same on a seat, a door insert and a sleeping mat. No product artwork copied.
export function fabricTextures(kind='canvas'){
 kind=validFabric(kind);const size=256,albedo=new Uint8Array(size*size*4),surface=new Uint8Array(size*size*4);let seed=741;
 for(let y=0;y<size;y++)for(let x=0;x<size;x++){
  seed=(Math.imul(seed,1664525)+1013904223)>>>0;const noise=(seed/4294967296-.5),warp=Math.sin(x*Math.PI/2),weft=Math.cos(y*Math.PI/2),cellX=Math.floor(x/8),cellY=Math.floor(y/8);
  let value=222+noise*16+warp*8+weft*6,rough=238,height=128+warp*19+weft*16+noise*22;
  // A 2/2 twill across alternating four-thread stripes creates the broken
  // diagonal tooth; it is not a checkerboard printed onto flat cloth.
  if(kind==='houndstooth'){const over=(cellX+cellY)%4<2,dark=over?cellX%8<4:cellY%8<4;value=(dark?64:238)+warp*7+weft*5+noise*12;}
  if(kind==='tweed'){value=174+((cellX+cellY)%3===0?37:0)+warp*16+weft*14+noise*28;}
  if(kind==='leather'){const pore=noise>.44?-36:0;value=231+noise*9+pore*.25;height=141+noise*40+pore;rough=157+noise*28;}
  const i=(y*size+x)*4;for(let k=0;k<3;k++){albedo[i+k]=T.MathUtils.clamp(value,0,255);surface[i+k]=T.MathUtils.clamp(k===1?rough:height,0,255);}albedo[i+3]=surface[i+3]=255;
 }
 function texture(data,colourSpace){const map=new T.DataTexture(data,size,size);map.colorSpace=colourSpace;map.wrapS=map.wrapT=T.RepeatWrapping;map.repeat.set(kind==='leather'?10:kind==='houndstooth'?5:14,kind==='leather'?10:kind==='houndstooth'?5:14);map.generateMipmaps=true;map.minFilter=T.LinearMipmapLinearFilter;map.anisotropy=4;map.needsUpdate=true;return map;}
 return {map:texture(albedo,T.SRGBColorSpace),bump:texture(surface,T.NoColorSpace)};
}
export function upholsteryMaterial(kind='canvas',colour='#a38b69'){
 kind=validFabric(kind);const maps=fabricTextures(kind),mat=new T.MeshPhysicalMaterial({name:'UpgradeFabric_'+kind,color:colour,map:maps.map,bumpMap:maps.bump,bumpScale:kind==='leather'?.00018:.00045,roughnessMap:maps.bump,roughness:kind==='leather'?.85:1,metalness:0,sheen:kind==='leather'?0:.25,sheenRoughness:.85,sheenColor:'#aaa69c',clearcoat:kind==='leather'?.08:0,envMapIntensity:.25});
 mat.userData.ownsTextures=true;mat.addEventListener('dispose',()=>{maps.map.dispose();maps.bump.dispose();});return mat;
}
