import * as T from 'three';

// Optional distant LOD. The caller must retain existing vegetation on failure
// and decide which physical tree records are replaced; this module adds none.
let cache=null,pending=null,generation=0;
export function preloadAuthoredPines({baseUrl='assets/vegetation/authored-pine/'}={}){
 if(cache)return Promise.resolve(true);
 if(typeof document==='undefined')return Promise.resolve(false);
 if(pending)return pending;
 const ticket=generation;
 const request=Promise.allSettled(['pine-tree-b-atlas.webp','pine-tree-b-atlas-normal.webp'].map(file=>Promise.resolve().then(()=>new T.TextureLoader().loadAsync(baseUrl+file)))).then(results=>{
  const maps=results.filter(r=>r.status==='fulfilled').map(r=>r.value);
  if(ticket!==generation||maps.length!==2){maps.forEach(t=>t.dispose());return false;}
  maps[0].colorSpace=T.SRGBColorSpace;maps.forEach(t=>{t.anisotropy=4;t.wrapS=t.wrapT=T.ClampToEdgeWrapping;});cache=maps;return true;
 }).finally(()=>{if(pending===request)pending=null;});pending=request;return request;
}
export function disposeAuthoredPineAssets(){generation++;cache?.forEach(t=>t.dispose());cache=null;pending=null;}
export function authoredPinesReady(){return !!cache;}
export function authoredPineAngles(angle){const turns=((angle/(Math.PI/4))%8+8)%8,first=Math.floor(turns);return{first,second:(first+1)%8,blend:turns-first};}

const VARYING=`
varying vec2 vPineUvA;
varying vec2 vPineUvB;
varying float vPineBlend;
varying float vPineYaw;
varying float vPineDistance;
`;
const VERTEX=VARYING+`
attribute vec3 pineRoot;
attribute float pineHeight;
attribute float pineYaw;
uniform vec3 pineViewPosition;
uniform float pineFadeStart;
uniform float pineFadeEnd;
vec2 pineTileUv(vec2 p,float index){return vec2((mod(index,4.0)+p.x)*.25,(1.0-floor(index/4.0)+p.y)*.5);}
`;
const POSITION=`
vec2 facing=pineViewPosition.xz-pineRoot.xz;
float angle=atan(facing.x,facing.y);
float relative=mod((angle-pineYaw)/.78539816339+80.0,8.0);
float first=floor(relative);
vPineUvA=pineTileUv(uv,first);vPineUvB=pineTileUv(uv,mod(first+1.0,8.0));
vPineBlend=fract(relative);vPineYaw=pineYaw;vPineDistance=length(facing);
float scale=pineHeight/14.880114;
vec3 transformed=pineRoot+vec3(cos(angle)*position.x*8.15*scale,(position.y*16.3+7.65)*scale,-sin(angle)*position.x*8.15*scale);
if(pineFadeEnd>pineFadeStart && vPineDistance<=pineFadeStart)transformed=pineRoot;
`;
const FRAGMENT=VARYING+`
uniform sampler2D pineNormalAtlas;
uniform float pineMinDistance;
uniform float pineMaxDistance;
uniform float pineNeedleBalance;
uniform float pineFadeStart;
uniform float pineFadeEnd;
float pineDither(){return fract(sin(dot(floor(gl_FragCoord.xy),vec2(12.9898,78.233)))*43758.5453);}
`;
const ALBEDO=`
vec4 pineA=texture2D(map,vPineUvA),pineB=texture2D(map,vPineUvB);
// Premultiplied interpolation avoids dark fringes around changing silhouettes.
float pineAlpha=mix(pineA.a,pineB.a,vPineBlend);
vec3 pineRgb=mix(pineA.rgb*pineA.a,pineB.rgb*pineB.a,vPineBlend)/max(pineAlpha,.0001);
diffuseColor*=vec4(pineRgb,pineAlpha);
float needle=smoothstep(.004,.035,diffuseColor.g-diffuseColor.b)*pineNeedleBalance;
diffuseColor.rgb=mix(diffuseColor.rgb,diffuseColor.rgb*vec3(.68,1.05,.70),needle);
if(vPineDistance<pineMinDistance||vPineDistance>pineMaxDistance)discard;
if(pineFadeEnd>pineFadeStart && pineDither()>=smoothstep(pineFadeStart,pineFadeEnd,vPineDistance))discard;
`;
function patchMaterial(material,uniforms,{depth=false}={}){
 material.onBeforeCompile=shader=>{
  Object.assign(shader.uniforms,uniforms);
  shader.vertexShader=VERTEX+shader.vertexShader;
  shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',POSITION);
  shader.fragmentShader=FRAGMENT+shader.fragmentShader;
  shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>',ALBEDO);
  if(!depth)shader.fragmentShader=shader.fragmentShader.replace('#include <normal_fragment_begin>',`#include <normal_fragment_begin>
   vec3 na=texture2D(pineNormalAtlas,vPineUvA).rgb*2.0-1.0;
   vec3 nb=texture2D(pineNormalAtlas,vPineUvB).rgb*2.0-1.0;
   vec3 objectNormal=normalize(na*pineA.a*(1.0-vPineBlend)+nb*pineB.a*vPineBlend);
   float c=cos(vPineYaw),s=sin(vPineYaw);
   vec3 worldNormal=vec3(c*objectNormal.x+s*objectNormal.z,objectNormal.y,-s*objectNormal.x+c*objectNormal.z);
   normal=normalize(mat3(viewMatrix)*worldNormal);nonPerturbedNormal=normal;
  `);
 };
 material.customProgramCacheKey=()=>`authored-pine-impostor-v1-${depth}`;
}

/** Returns null if loading failed. Pass only existing physical pine records:
 * {id,x,y,z,height,seed}. Height is the full tree height; y is ground level.
 * Call group.userData.update(camera) once before render, also before shadows.
 * The default distance range does not hide trees unexpectedly. Caller owns LOD
 * overlap/near substitution; no invisible colliders are introduced here.
 */
export function createAuthoredPines(trees,{minDistance=0,maxDistance=Infinity,needleBalance=1,fadeStart=0,fadeEnd=0}={}){
 if(!cache||!trees.length)return null;
 const valid=trees.filter(t=>[t.x,t.y,t.z,t.height].every(Number.isFinite)&&t.height>0&&(!t.species||t.species==='pine'));
 if(!valid.length)return null;
 const textures=cache.map(t=>t.clone());textures.forEach(t=>t.needsUpdate=true);
 const geometry=new T.PlaneGeometry(1,1),roots=[],heights=[],yaws=[],box=new T.Box3();
 for(const t of valid){
  roots.push(t.x,t.y,t.z);heights.push(t.height);yaws.push((Number.isFinite(t.seed)?t.seed:0)*Math.PI*2);
  const width=t.height*8.15/14.880114/2;
  box.expandByPoint(new T.Vector3(t.x-width,t.y-t.height*.04,t.z-width));box.expandByPoint(new T.Vector3(t.x+width,t.y+t.height*1.06,t.z+width));
 }
 geometry.setAttribute('pineRoot',new T.InstancedBufferAttribute(new Float32Array(roots),3));geometry.setAttribute('pineHeight',new T.InstancedBufferAttribute(new Float32Array(heights),1));geometry.setAttribute('pineYaw',new T.InstancedBufferAttribute(new Float32Array(yaws),1));
 const uniforms={pineViewPosition:{value:new T.Vector3()},pineNormalAtlas:{value:textures[1]},pineMinDistance:{value:Math.max(0,minDistance)},pineMaxDistance:{value:Number.isFinite(maxDistance)?maxDistance:1e9},pineNeedleBalance:{value:T.MathUtils.clamp(needleBalance,0,1)},pineFadeStart:{value:fadeStart},pineFadeEnd:{value:fadeEnd}};
 const material=new T.MeshStandardMaterial({name:'Authored CC0 pine distant LOD',map:textures[0],alphaTest:.24,roughness:1,metalness:0,side:T.DoubleSide,shadowSide:T.DoubleSide,envMapIntensity:.12});
 material.userData.terrainTextures=textures;patchMaterial(material,uniforms);
 const depth=new T.MeshDepthMaterial({map:textures[0],alphaTest:.24,depthPacking:T.RGBADepthPacking,side:T.DoubleSide});patchMaterial(depth,uniforms,{depth:true});
 const distance=new T.MeshDistanceMaterial({map:textures[0],alphaTest:.24,side:T.DoubleSide});patchMaterial(distance,uniforms,{depth:true});
 const mesh=new T.InstancedMesh(geometry,material,valid.length);mesh.name='Authored pine atlas instances';mesh.castShadow=true;mesh.receiveShadow=true;mesh.customDepthMaterial=depth;mesh.customDistanceMaterial=distance;mesh.boundingBox=box;mesh.boundingSphere=box.getBoundingSphere(new T.Sphere());
 const identity=new T.Matrix4();for(let i=0;i<valid.length;i++)mesh.setMatrixAt(i,identity);
 const group=new T.Group();group.name='Authored distant pines';group.add(mesh);group.userData.treeIds=valid.map(t=>t.id);group.userData.triangles=valid.length*2;
 group.userData.lodUniforms=uniforms;
 const cameraPosition=new T.Vector3();let disposed=false;
 group.userData.update=camera=>{camera.getWorldPosition(cameraPosition);group.updateWorldMatrix(true,false);uniforms.pineViewPosition.value.copy(group.worldToLocal(cameraPosition));};
 group.userData.dispose=()=>{if(disposed)return;disposed=true;textures.forEach(t=>t.dispose());geometry.dispose();material.dispose();depth.dispose();distance.dispose();mesh.dispose();group.removeFromParent();};
 return group;
}

/** Attach the complementary coverage to one existing instanced near-tree
 * batch. Roots must match its instance order, not individual twig positions.
 * Main and shadow shaders share the same main-camera distance uniforms.
 * Returns a disposer for the additional shadow materials only; ordinary mesh
 * geometry/material/map cleanup stays with the existing world disposer.
 */
export function attachAuthoredPineNearFade(mesh,roots,controller){
 if(!mesh||!controller||roots.length!==mesh.count)return()=>{};
 const uniforms=controller.userData.lodUniforms;
 mesh.geometry.setAttribute('pineLodRoot',new T.InstancedBufferAttribute(new Float32Array(roots.flat()),3));
 const apply=material=>{
  const previous=material.onBeforeCompile,oldKey=material.customProgramCacheKey.bind(material);
  material.onBeforeCompile=shader=>{
   previous.call(material,shader);Object.assign(shader.uniforms,uniforms);
   shader.vertexShader='attribute vec3 pineLodRoot;\nuniform vec3 pineViewPosition;\nuniform float pineFadeEnd;\nvarying float pineNearDistance;\n'+shader.vertexShader;
   shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\npineNearDistance=length(pineViewPosition.xz-pineLodRoot.xz);\nif(pineNearDistance>=pineFadeEnd)transformed=vec3(0.0);');
   shader.fragmentShader='varying float pineNearDistance;\nuniform float pineFadeStart;\nuniform float pineFadeEnd;\n'+shader.fragmentShader;
   shader.fragmentShader=shader.fragmentShader.replace('void main() {',`void main() {
    float pineCoverage=smoothstep(pineFadeStart,pineFadeEnd,pineNearDistance);
    float pineNoise=fract(sin(dot(floor(gl_FragCoord.xy),vec2(12.9898,78.233)))*43758.5453);
    if(pineNoise<pineCoverage)discard;
   `);
  };
  material.customProgramCacheKey=()=>oldKey()+'-authored-near-fade-v1';material.needsUpdate=true;
 };
 apply(mesh.material);
 const options={map:mesh.material.map,alphaMap:mesh.material.alphaMap,alphaTest:mesh.material.alphaTest,side:T.DoubleSide};
 const depth=new T.MeshDepthMaterial({...options,depthPacking:T.RGBADepthPacking}),distance=new T.MeshDistanceMaterial(options);apply(depth);apply(distance);
 mesh.customDepthMaterial=depth;mesh.customDistanceMaterial=distance;
 let disposed=false;return()=>{if(disposed)return;disposed=true;depth.dispose();distance.dispose();mesh.customDepthMaterial=null;mesh.customDistanceMaterial=null;};
}
