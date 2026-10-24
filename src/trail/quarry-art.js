import * as T from 'three';
import {mergeVertices,toCreasedNormals} from 'three/addons/utils/BufferGeometryUtils.js';

// One geometric contract for the wheel exercise and its concrete skin. The
// footprint, centres and maximum height retain the existing three lesson lanes.
export const QUARRY_RAMPS=Object.freeze([-60,-65,-70].flatMap((lane,li)=>Array.from({length:6},(_,i)=>Object.freeze({
 id:`quarry-wheel-ramp-${li}-${i}`,lane,x:lane+(i%2?.7:-.7),z:87+i*4.5,
 halfWidth:.58,halfDepth:1.7,crownHalfWidth:.28,crownHalfDepth:.34,height:.24
}))));
const clamp=t=>Math.max(0,Math.min(1,t));
const hash=(x,z)=>{const n=Math.sin(x*127.1+z*311.7)*43758.5453;return n-Math.floor(n);};
const noise=(x,z)=>{const ix=Math.floor(x),iz=Math.floor(z),sx=x-ix,sz=z-iz,fx=sx*sx*(3-2*sx),fz=sz*sz*(3-2*sz);return (hash(ix,iz)*(1-fx)+hash(ix+1,iz)*fx)*(1-fz)+(hash(ix,iz+1)*(1-fx)+hash(ix+1,iz+1)*fx)*fz;};

export function quarryRampProfile(r,x,z){
 const u=Math.abs(x-r.x),v=Math.abs(z-r.z);
 // A flat cast-concrete crown, four sloping faces, and clipped corners. This
 // has no vertical collision face and cannot raise the stock height ceiling.
 return clamp(Math.min((r.halfWidth-u)/(r.halfWidth-r.crownHalfWidth),
  (r.halfDepth-v)/(r.halfDepth-r.crownHalfDepth),
  (r.halfWidth+r.halfDepth-.10-u-v)/.55));
}
export function quarryRampHeight(x,z,scale=1){
 if(!Number.isFinite(x)||!Number.isFinite(z)||x<-72||x>-58||z<85.3||z>111.2)return 0;
 const heightScale=Number.isFinite(scale)?Math.max(0,scale):1;
 let h=0;for(const r of QUARRY_RAMPS)h+=r.height*heightScale*quarryRampProfile(r,x,z);return h;
}

/** The existing fine soil bed and the cast ramps must not draw through each
 * other. Clip only the soil material, within the exact concrete footprint;
 * a 0.5 mm inset retains a seam overlap. Neither heightfield is changed. */
export function quarryBedMaterial(material){
 const baseCompile=material.onBeforeCompile,baseKey=material.customProgramCacheKey.bind(material);
 const originalKey=baseKey();
 material.onBeforeCompile=function(shader,renderer){
  baseCompile.call(this,shader,renderer);
  shader.vertexShader='varying vec2 quarryBedXZ;\n'+shader.vertexShader;
  shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nquarryBedXZ=(modelMatrix*vec4(position,1.0)).xz;');
  shader.fragmentShader='varying vec2 quarryBedXZ;\n'+shader.fragmentShader;
  shader.fragmentShader=shader.fragmentShader.replace('#include <clipping_planes_fragment>',`#include <clipping_planes_fragment>
   float quarryLane=floor((quarryBedXZ.x+72.5)/5.0);
   float quarryStep=floor((quarryBedXZ.y-87.0)/4.5+.5);
   float quarryCentreX=-70.0+quarryLane*5.0+(mod(quarryStep,2.0)>.5?.7:-.7);
   float quarryCentreZ=87.0+quarryStep*4.5;
   if(quarryLane>=0.0&&quarryLane<3.0&&quarryStep>=0.0&&quarryStep<6.0
    &&abs(quarryBedXZ.x-quarryCentreX)<.5795&&abs(quarryBedXZ.y-quarryCentreZ)<1.6995)discard;
  `);
 };
 material.customProgramCacheKey=()=>`${originalKey}-quarry-bed-mask-v1`;
 material.userData.quarryRampMask=true;material.needsUpdate=true;return material;
}

function geometry(positions,indices,colours,uv){
 const g=new T.BufferGeometry();g.setAttribute('position',new T.Float32BufferAttribute(positions,3));
 if(colours)g.setAttribute('color',new T.Float32BufferAttribute(colours,3));
 if(uv)g.setAttribute('uv',new T.Float32BufferAttribute(uv,2));
 g.setIndex(indices);g.computeVertexNormals();g.computeBoundingSphere();return g;
}

/** Reads the integrated physics sampler, including any existing earth beneath
 * the ramps. Only an 8 mm anti-z-fighting skin separates it from contact height. */
export function quarryRampGeometry(world){
 const pos=[],index=[],col=[],uv=[],nx=12,nz=34;
 for(const [ri,r]of QUARRY_RAMPS.entries()){
  const start=pos.length/3;
  // Sample the casting's real break lines exactly. A uniform grid straddles
  // the crown and then averaged normals round it into an inflated-looking
  // mound, despite the collision sampler already having planar faces.
  const lateral=Array.from({length:nx+1},(_,i)=>i<=3?-r.halfWidth+(r.halfWidth-r.crownHalfWidth)*i/3:i<=9?-r.crownHalfWidth+r.crownHalfWidth*2*(i-3)/6:r.crownHalfWidth+(r.halfWidth-r.crownHalfWidth)*(i-9)/3);
  const longitudinal=Array.from({length:nz+1},(_,j)=>j<=12?-r.halfDepth+(r.halfDepth-r.crownHalfDepth)*j/12:j<=22?-r.crownHalfDepth+r.crownHalfDepth*2*(j-12)/10:r.crownHalfDepth+(r.halfDepth-r.crownHalfDepth)*(j-22)/12);
  for(let j=0;j<=nz;j++)for(let i=0;i<=nx;i++){
   const x=r.x+lateral[i],z=r.z+longitudinal[j];
   const edge=1-quarryRampProfile(r,x,z),dust=.94-hash(ri,19)*.08;
   // Dirt gathers unevenly on the chamfer and base, rather than a perfectly
   // uniform dark outline. This changes colour only, not contact geometry.
   const edgeWear=noise(x*5+ri*3,z*5);
   const tone=dust-edge*(.055+edgeWear*.13)+(hash(i+ri*17,j)-.5)*.035;
   pos.push(x,world.height(x,z)+.008,z);col.push(tone,tone*.985,tone*.95);uv.push(lateral[i]+r.halfWidth,longitudinal[j]+r.halfDepth);
  }
  for(let j=0;j<nz;j++)for(let i=0;i<nx;i++){const a=start+j*(nx+1)+i;index.push(a,a+nx+1,a+1,a+1,a+nx+1,a+nx+2);}
 }
 const source=geometry(pos,index,col,uv),creased=toCreasedNormals(source,.07),g=mergeVertices(creased,1e-5);
 source.dispose();creased.dispose();g.computeBoundingSphere();
 g.userData={surface:'quarry-concrete-crowns',rampIds:QUARRY_RAMPS.map(r=>r.id),contactOffset:.008,castingEdges:true};return g;
}

function concreteMaterial(){
 // Original, small deterministic cast-aggregate pattern: dispersed stone,
 // faint coarse cement variation, and sparse pores. No geometry displacement.
 const size=128,data=new Uint8Array(size*size*4);
 for(let z=0;z<size;z++)for(let x=0;x<size;x++){
  const fine=hash(x,z),grain=hash(Math.floor(x/3),Math.floor(z/3)),stain=noise(x/19,z/19);
  const v=Math.round(202+fine*23+grain*14+stain*12-(fine>.985?42:0)),i=(z*size+x)*4;
  data[i]=v;data[i+1]=Math.max(0,v-2);data[i+2]=Math.max(0,v-6);data[i+3]=255;
 }
 const texture=new T.DataTexture(data,size,size,T.RGBAFormat);texture.wrapS=texture.wrapT=T.RepeatWrapping;
 texture.repeat.set(2,2);texture.colorSpace=T.SRGBColorSpace;texture.magFilter=T.LinearFilter;texture.minFilter=T.LinearMipmapLinearFilter;texture.generateMipmaps=true;texture.needsUpdate=true;
 const mat=new T.MeshStandardMaterial({color:'#bbb9ae',vertexColors:true,roughness:.96,metalness:0,map:texture,bumpMap:texture,bumpScale:.005});
 mat.userData.surface='original-cast-concrete';mat.userData.terrainTextures=[texture];return mat;
}

/** Exposed quarry rock follows the real heightfield. Route clearance clips the
 * triangles; no rock skin is painted over the driving lane or level yard. */
export function quarryFaceGeometry(world){
 const b={minX:-140,maxX:-12,minZ:125,maxZ:266},spacing=.85;
 const nx=Math.ceil((b.maxX-b.minX)/spacing),nz=Math.ceil((b.maxZ-b.minZ)/spacing),pos=[],idx=[];
 const xs=(b.maxX-b.minX)/nx,zs=(b.maxZ-b.minZ)/nz;
 for(let j=0;j<=nz;j++)for(let i=0;i<=nx;i++){
  const x=b.minX+i*xs,z=b.minZ+j*zs;pos.push(x,world.height(x,z)+.012,z);
 }
 for(let j=0;j<nz;j++)for(let i=0;i<nx;i++){
  const x=b.minX+(i+.5)*xs,z=b.minZ+(j+.5)*zs,h=world.height(x,z);
  const dx=(world.height(x+.4,z)-world.height(x-.4,z))/.8,dz=(world.height(x,z+.4)-world.height(x,z-.4))/.8;
  const routeDistance=world.landmarkRouteDistance?.(x,z)??world.routeDistance(x,z);
  // Use metre-scale irregular edges, not horizontal stripes across all banks.
  if(routeDistance<6||h<1.4||Math.hypot(dx,dz)<.24+hash(Math.floor(x/3),Math.floor(z/3))*.12)continue;
  const a=j*(nx+1)+i;idx.push(a,a+nx+1,a+1,a+1,a+nx+1,a+nx+2);
 }
 const g=geometry(pos,idx);g.userData={surface:'quarry-exposed-heightfield',contactOffset:.012};return g;
}

export function createQuarryArt(world,parent){
 const root=new T.Group();root.name='QuarryChallengeArt';
 if(world.course.theme!=='urban'||world.course.id==='custom')return root;
 const ramps=new T.Mesh(quarryRampGeometry(world),concreteMaterial());ramps.name='ConcreteWheelRampCrowns';ramps.receiveShadow=true;root.add(ramps);
 // Quarry banks use the existing terrain material's continuous rock/slope
 // shading. A second, differently sampled skin intersects the coarse terrain
 // and reveals triangular patches; do not float another surface above it.
 root.userData={heightfieldMatched:true,decorativeCollision:false,rampCount:QUARRY_RAMPS.length};parent.add(root);return root;
}
