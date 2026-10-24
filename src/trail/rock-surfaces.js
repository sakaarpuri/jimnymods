import * as T from 'three';
import {mergeVertices,toCreasedNormals} from 'three/addons/utils/BufferGeometryUtils.js';

const fract=x=>x-Math.floor(x);
function seedNumber(seed){
 if(typeof seed==='number'&&Number.isFinite(seed))return seed;
 let value=2166136261;for(const c of String(seed))value=Math.imul(value^c.charCodeAt(0),16777619);
 return value>>>0;
}
const random=(seed,n)=>fract(Math.sin(seed*.017+n*127.1+9.31)*43758.5453);

/** Original fractured rock, in a unit collision cylinder: radius <= 1,
 * bottom -0.5, top +0.5. No overhanging decorative collision surprises.
 * Pass the obstacle's stable id (or seed) to avoid identical silhouettes.
 */
export function rockGeometry(seed=0){
 const key=seedNumber(seed),planes=[],turn=random(key,1)*Math.PI*2;
 // Intersect an irregular mass with independent geological fracture planes.
 // Unequal distances/slopes create broad broken faces without a repeated
 // horizontal ring profile (which reads as a polygonal barrel, not a rock).
 for(let i=0;i<5;i++){
  const a=turn+i/5*Math.PI*2+(random(key,i+2)-.5)*.4;
  planes.push({n:new T.Vector3(Math.cos(a),(random(key,i+12)-.5)*.65,Math.sin(a)).normalize(),d:.68+random(key,i+22)*.27});
 }
 planes.push({n:new T.Vector3((random(key,40)-.5)*.55,1,(random(key,41)-.5)*.55).normalize(),d:.60+random(key,42)*.18});
 planes.push({n:new T.Vector3((random(key,43)-.5)*.3,-1,(random(key,44)-.5)*.3).normalize(),d:.65});
 planes.push({n:new T.Vector3(Math.cos(turn+1.3),.70,Math.sin(turn+1.3)).normalize(),d:.65+random(key,45)*.12});
 const source=new T.IcosahedronGeometry(1,3);source.deleteAttribute('normal');source.deleteAttribute('uv');
 const geometry=mergeVertices(source);source.dispose();const p=geometry.attributes.position,v=new T.Vector3();
 let minY=Infinity,maxY=-Infinity,maxR=0;
 for(let i=0;i<p.count;i++){
  v.fromBufferAttribute(p,i).normalize();
  let distance=.95+.04*Math.sin(v.x*8+key*.01)*Math.cos(v.z*7-v.y*3);
  for(const plane of planes){const facing=v.dot(plane.n);if(facing>.001)distance=Math.min(distance,plane.d/facing);}
  v.multiplyScalar(distance);p.setXYZ(i,v.x,v.y,v.z);
  minY=Math.min(minY,v.y);maxY=Math.max(maxY,v.y);maxR=Math.max(maxR,Math.hypot(v.x,v.z));
 }
 for(let i=0;i<p.count;i++)p.setXYZ(i,p.getX(i)/maxR,(p.getY(i)-minY)/(maxY-minY)-.5,p.getZ(i)/maxR);
 // Broad planes stay broad; only actual sharp fractures split normals. Fine
 // triangulation inside each plane does not produce an origami checkerboard.
 const creased=toCreasedNormals(geometry,Math.PI/7),result=mergeVertices(creased,1e-5);creased.dispose();geometry.dispose();
 result.computeBoundingBox();result.computeBoundingSphere();
 result.userData={rockSeed:String(seed),surface:'fractured-layered-v1',collisionEnvelope:{radius:1,minY:-.5,maxY:.5}};
 return result;
}

const ROCK_SHADER=`
varying vec3 rockSurfacePosition;
float rockHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}
float rockNoise(vec2 p){
 vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);
 return mix(mix(rockHash(i),rockHash(i+vec2(1,0)),f.x),mix(rockHash(i+vec2(0,1)),rockHash(i+1.0),f.x),f.y);
}
float rockTri(vec3 p,vec3 weights){return dot(vec3(rockNoise(p.yz),rockNoise(p.zx),rockNoise(p.xy)),weights);}
`;

/** Seam-free, world-scale weathering; no downloaded images, UV stretching,
 * canvas allocations, or owned textures requiring special disposal. */
export function rockMaterial(theme='mountain'){
 const kind=['mountain','urban','sand'].includes(theme)?theme:'mountain';
 const material=new T.MeshStandardMaterial({color:kind==='sand'?'#92795b':kind==='urban'?'#77766c':'#797b70',roughness:.97,metalness:0});
 material.userData.surface='fractured-layered-v1';
 material.onBeforeCompile=shader=>{
  shader.vertexShader='varying vec3 rockSurfacePosition;\n'+shader.vertexShader;
  shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
   vec4 rockWorld=vec4(transformed,1.0);
   #ifdef USE_INSTANCING
    rockWorld=instanceMatrix*rockWorld;
   #endif
   rockSurfacePosition=(modelMatrix*rockWorld).xyz;
  `);
  shader.fragmentShader=ROCK_SHADER+shader.fragmentShader;
  shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
   vec3 rockP=rockSurfacePosition;
   vec3 rockN=normalize(cross(dFdx(rockP),dFdy(rockP)));
   vec3 rockWeights=pow(abs(rockN),vec3(4.0));rockWeights/=max(dot(rockWeights,vec3(1.0)),.0001);
   float rockDistance=length(vViewPosition);
   float rockDetail=1.0-smoothstep(12.0,85.0,rockDistance);
   float rockBroad=rockTri(rockP*.47,rockWeights),rockMedium=rockTri(rockP*3.7,rockWeights);
   float rockFine=rockTri(rockP*39.0,rockWeights);
   // Irregular sedimentary bedding follows world metres, not stretched UVs.
   float rockLayer=rockP.y*3.6+rockP.x*.17-rockP.z*.11+(rockMedium-.5)*.38;
   float rockSeam=(1.0-smoothstep(.016,.065,abs(fract(rockLayer)-.5)))*smoothstep(.25,.62,rockBroad);
   float rockJoint=1.0-smoothstep(.018,.065,abs(fract(rockP.x*.57+rockP.z*.39+rockP.y*.23+rockBroad*.48)-.5));
   float rockSplit=rockJoint*smoothstep(.28,.62,rockMedium);
   float rockTop=abs(rockN.y);
   float rockTone=.78+rockBroad*.36+(rockMedium-.5)*.26+(rockFine-.5)*.17*rockDetail;
   diffuseColor.rgb*=rockTone*(1.0-rockSeam*.19-rockSplit*.24);
   vec3 rockDust=${kind==='sand'?'vec3(.31,.23,.14)':kind==='urban'?'vec3(.26,.245,.20)':'vec3(.225,.235,.17)'};
   diffuseColor.rgb=mix(diffuseColor.rgb,rockDust,smoothstep(.57,.94,rockTop)*(.14+rockBroad*.12));
  `);
  // Fine relief affects highlights only; never offsets the collision surface.
  shader.fragmentShader=shader.fragmentShader.replace('#include <normal_fragment_maps>',`#include <normal_fragment_maps>
   float rockMicro=rockTri(rockSurfacePosition*23.0,rockWeights);
   float rockRelief=(rockMicro-.5)*.0015*rockDetail;
   vec3 rockQx=dFdx(vViewPosition),rockQy=dFdy(vViewPosition);
   vec3 rockR1=cross(rockQy,normal),rockR2=cross(normal,rockQx);
   float rockDet=dot(rockQx,rockR1);
   vec3 rockGradient=sign(rockDet)*(dFdx(rockRelief)*rockR1+dFdy(rockRelief)*rockR2);
   normal=normalize(max(abs(rockDet),1e-7)*normal-rockGradient);
  `);
 };
 material.customProgramCacheKey=()=>`fractured-rock-v1-${kind}`;
 return material;
}
