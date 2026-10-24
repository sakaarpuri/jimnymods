import * as T from 'three';
import {rockGeometry,rockMaterial} from './rock-surfaces.js';
import {createScannedRock} from './scanned-rocks.js';
export {rockGeometry} from './rock-surfaces.js';
import {centerAt} from './courses.js';
import {buildVegetationGeometry} from './vegetation-render.js';
import {createCourseLandmarks} from './course-landmarks.js';
import {createTerrainElements} from './terrain-builder.js';
import {createExplorationFeatures,riverCentre} from './world-exploration.js';
import {coarseBedRelief,articulationBedRelief,mountainStoneMask} from './adventure-terrain.js';
import {createHimachalSection,sectionWaterExclusion} from './himachal-section.js';
import {sectionShoulderDistance,sectionGreenWeight} from './himachal-dressing.js';
import {HIMACHAL_ELEVATION,himachalElevationNormalized} from './himachal-elevation.js';
import {createMountainRoads} from './mountain-road-render.js';
import {sectionTerraceStone} from './himachal-terraces.js';
import {createQuarryArt,quarryBedMaterial} from './quarry-art.js';
import {desertSurfaceMask,createDesertDressing} from './desert-art.js';
import {createProTrials} from './pro-trial-render.js';
import {createGorge} from './gorge-render.js';
const fract=x=>x-Math.floor(x),hash=(x,z)=>fract(Math.sin(x*127.1+z*311.7)*43758.5453);
const smooth=t=>t*t*(3-2*t);
export function clearRiverSurface(world,x,z){const r=world.river;return !!world.himachalSection&&sectionWaterExclusion(x,z)||!!r&&((x>r.minX-2&&x<r.maxX+2&&Math.abs(z-riverCentre(x))<r.width/2+7)||(Math.abs(x-r.bridgeX)<r.bridgeWidth/2+1&&Math.abs(z-r.bridgeZ)<220));}
function noise(x,z){const a=Math.floor(x),b=Math.floor(z),u=smooth(x-a),v=smooth(z-b);return T.MathUtils.lerp(T.MathUtils.lerp(hash(a,b),hash(a+1,b),u),T.MathUtils.lerp(hash(a,b+1),hash(a+1,b+1),u),v);}
// Signed coordinates survive interpolation across a road centre, unlike an
// unsigned nearest-route distance. These are visual wear only: no terrain,
// grip or collision data is changed and paved roads keep their own material.
export function himachalWearCoordinates(world,x,z,extension=world.mountainExtension?.nearestRoad(x,z)){
 if(world.course.theme!=='mountain')return [0,0,0];
 let best=extension?{distance:extension.distance,lateral:extension.signedDistance,along:extension.s,weight:extension.kind==='gravel'?1:0}:null;
 const bounds=world.himachalSection?.bounds;
 if(bounds&&x>=bounds.minX-6&&x<=bounds.maxX+6&&z>=bounds.minZ-6&&z<=bounds.maxZ+6){
  for(const [name,authored]of Object.entries(world.himachalSection.lines)){
   // Junctions have several competing nearest polylines. Interpolating their
   // unrelated signed coordinates draws false diagonal tracks across forks.
   // Keep wear on the single technical climb; leave its joining areas and
   // bypass to the irregular soil treatment rather than inventing tyre paths.
   if(name!=='technical')continue;
   const lane=world.activeStoneLane??65,line=name==='technical'?[[62,96],[62,108],[lane,120],[lane,151],[lane,175],[60,190]]:authored;
   let along=0;
   for(let i=1;i<line.length;i++){
    const a=line[i-1],b=line[i],dx=b[0]-a[0],dz=b[1]-a[1],length=Math.hypot(dx,dz);if(!length)continue;
    const t=T.MathUtils.clamp(((x-a[0])*dx+(z-a[1])*dz)/(length*length),0,1),px=x-a[0]-dx*t,pz=z-a[1]-dz*t,distance=Math.hypot(px,pz);
    const sectionFade=smooth(T.MathUtils.clamp((z-104)/8,0,1))*smooth(T.MathUtils.clamp((184-z)/8,0,1));
    if(!best||distance<best.distance)best={distance,lateral:(px*dz-pz*dx)/length,along:along+t*length,weight:sectionFade};
    along+=length;
   }
  }
 }
 if(!best)return [0,0,0];
 const fade=1-smooth(T.MathUtils.clamp((best.distance-2.2)/1.8,0,1));
 return [best.lateral,best.along,best.weight*fade];
}
export function groundGeometry(world,bounds=world.bounds,spacing=world.course.theme==='urban'?2.5:4,lift=0){
  const columns=Math.ceil((bounds.maxX-bounds.minX)/spacing),rows=Math.ceil((bounds.maxZ-bounds.minZ)/spacing),n=columns+1,pos=[],col=[],idx=[],uv=[],blends=[],stones=[],greens=[],wear=[],sand=world.course.theme==='sand',urban=world.course.theme==='urban';
  const track=new T.Color(sand?'#b88750':urban?'#515758':'#c8b693'),edge=new T.Color(sand?'#c29458':urban?'#626968':'#929b70'),soft=new T.Color('#cca970');
  const stepColour=new T.Color('#c7c7b9'),hillColour=new T.Color('#877758');
  const sectionPatch=bounds===world.himachalSection?.bounds;
  for(let j=0;j<=rows;j++){const z=bounds.minZ+j/rows*(bounds.maxZ-bounds.minZ);for(let i=0;i<=columns;i++){const x=bounds.minX+i/columns*(bounds.maxX-bounds.minX),y=world.height(x,z)+lift-(bounds===world.bounds?coarseBedRelief(world.course,x,z):sectionPatch?articulationBedRelief(world.course,x,z):0),distance=world.routeDistance(x,z),shoulder=sectionShoulderDistance(world,x,z),blend=smooth(T.MathUtils.clamp(shoulder===null?(distance-world.course.width/2+.45)/2.8:shoulder/3.2,0,1)),c=track.clone().lerp(edge,blend),surface=world.surface(x,z);
      if(surface==='soft-sand')c.copy(soft);else if(urban&&surface==='sand')c.set('#c3aa7e');else if(urban&&surface==='loose')c.set('#8b8271');else if(surface==='wet-tarmac')c.set('#424c51');
      // Contrast follows the actual heightfield, not decorative non-colliding rocks.
      if(urban&&x>=-74&&x<=-56&&z>=82&&z<=117)c.lerp(stepColour,T.MathUtils.clamp((y-lift)/.065,0,1));
      if(world.course.id==='school'&&x>=-124&&x<=-76&&z>=135&&z<=215)c.lerp(hillColour,T.MathUtils.clamp((y-lift)/.6,0,1));
      if(world.course.id==='urban'&&z>135&&x<-20)c.lerp(new T.Color('#94836b'),T.MathUtils.clamp(y/4,0,1));
      if(world.course.id==='urban'&&z>145&&Math.abs(x+65)>19)c.lerp(new T.Color('#87897f'),T.MathUtils.clamp((y-2)/5,0,1));
      let stone=0;
      if(world.course.theme==='mountain')stone=Math.max(mountainStoneMask(x,z,world.activeStoneLane??null),sectionTerraceStone(x,z,world.activeStoneLane,world.sectionTerraceClearance?.(x,z)));
      const extensionShoulder=world.mountainExtension?.nearestRoad(x,z);
      const extendedGreen=extensionShoulder?smooth(T.MathUtils.clamp((extensionShoulder.distance-extensionShoulder.halfWidth-1.1)/4.5,0,1))*smooth(T.MathUtils.clamp((extensionShoulder.halfWidth+extensionShoulder.blendWidth-extensionShoulder.distance)/12,0,1))*smooth(T.MathUtils.clamp((-x-15)/15,0,1)):0;
      greens.push(Math.max(sectionGreenWeight(world,x,z),extendedGreen));
      wear.push(...himachalWearCoordinates(world,x,z,extensionShoulder));
      const variation=(noise(x*6,z*6)-.5)*.12+(noise(x*.15,z*.15)-.5)*.14;c.multiplyScalar(1+variation);
      if(sand&&world.course.id==='sand'){
       const dune=desertSurfaceMask(x,z);c.lerp(new T.Color('#9d815d'),dune.apron*.42);c.multiplyScalar(1-dune.track*.13);
      }
      // Recess the soil under the separate paved wearing course, preventing
      // tessellation differences from showing as brown triangular road holes.
      const road=extensionShoulder,underPavement=road?.kind==='asphalt'&&road.s>12&&road.distance<road.halfWidth+1.5;
      pos.push(x,y-(underPavement?.16:0)-(bounds===world.bounds?(world.extraCoarseRelief?.(x,z)||0):0),z);col.push(c.r,c.g,c.b);uv.push(x*.32,z*.32);blends.push(blend);stones.push(stone);
    }}
  for(let j=0;j<rows;j++)for(let i=0;i<n-1;i++){const a=j*n+i;
    // The .3m articulation bed is authoritative here. Keep boundary cells so
    // meshes overlap without cracks, but omit the coarser interior entirely.
    if(sectionPatch&&pos[a*3]>=56&&pos[(a+1)*3]<=74&&pos[a*3+2]>=108&&pos[(a+n)*3+2]<=181)continue;
    idx.push(a,a+n,a+1,a+1,a+n,a+n+1);}
  const geo=new T.BufferGeometry();geo.setAttribute('position',new T.Float32BufferAttribute(pos,3));geo.setAttribute('color',new T.Float32BufferAttribute(col,3));geo.setAttribute('uv',new T.Float32BufferAttribute(uv,2));geo.setAttribute('trailBlend',new T.Float32BufferAttribute(blends,1));geo.setAttribute('trailStone',new T.Float32BufferAttribute(stones,1));geo.setAttribute('trailGreen',new T.Float32BufferAttribute(greens,1));geo.setAttribute('trailWear',new T.Float32BufferAttribute(wear,3));geo.setIndex(idx);geo.computeVertexNormals();
  // All dune resolutions use the same height-gradient normals. Otherwise a
  // coarse triangle and a fine tyre-rut patch shade as visibly separate planes.
  if(sand){const normals=geo.getAttribute('normal'),v=new T.Vector3();for(let i=0;i<pos.length/3;i++){const x=pos[i*3],z=pos[i*3+2];v.set(world.height(x-.16,z)-world.height(x+.16,z),.32,world.height(x,z-.16)-world.height(x,z+.16)).normalize();normals.setXYZ(i,v.x,v.y,v.z);}}
  return geo;
}
function instances(parent,geometry,material,transforms){if(!transforms.length){geometry.dispose();material.dispose();return;}const m=new T.InstancedMesh(geometry,material,transforms.length),dummy=new T.Object3D();transforms.forEach((p,i)=>{dummy.position.set(...p.pos);dummy.rotation.set(...(p.rot||[0,0,0]));dummy.scale.set(...p.scale);dummy.updateMatrix();m.setMatrixAt(i,dummy.matrix);if(p.color)m.setColorAt(i,new T.Color(p.color));});m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
export function groundMaterial(photographic,theme='mountain'){
  const m=new T.MeshStandardMaterial({vertexColors:true,roughness:1});let edge,slope,bedrock,bedrockHeight;
  photographic=photographic||(theme==='urban'&&typeof document!=='undefined');
  if(photographic){const loader=new T.TextureLoader(),load=(file,colour)=>{const t=loader.load(`assets/trail-textures/${file}.webp`);t.wrapS=t.wrapT=T.RepeatWrapping;t.anisotropy=4;if(colour)t.colorSpace=T.SRGBColorSpace;return t;};m.map=load('gravel',true);m.normalMap=load('gravel-normal',false);m.normalScale.set(.55,.55);edge=load('forest',true);slope=load('rocky-slope',true);bedrock=load('bedrock-face',true);bedrockHeight=load('bedrock-height',false);m.userData.terrainTextures=[m.map,m.normalMap,edge,slope,bedrock,bedrockHeight];}
  m.onBeforeCompile=s=>{
    if(bedrock){s.uniforms.trailBedrock={value:bedrock};s.uniforms.trailBedrockHeight={value:bedrockHeight};s.fragmentShader='uniform sampler2D trailBedrock;\nuniform sampler2D trailBedrockHeight;\n'+s.fragmentShader;}
    s.vertexShader='varying vec3 trailPosition;\nattribute float trailBlend;\nvarying float edgeBlend;\n'+s.vertexShader;s.vertexShader=s.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\ntrailPosition=(modelMatrix*vec4(position,1.0)).xyz;edgeBlend=trailBlend;');
    s.fragmentShader='varying vec3 trailPosition;\nvarying float edgeBlend;\nuniform sampler2D trailEdge;\nuniform sampler2D trailSlope;\nfloat grain(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}\nfloat terrainNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(grain(i),grain(i+vec2(1,0)),f.x),mix(grain(i+vec2(0,1)),grain(i+1.0),f.x),f.y);}\n'+s.fragmentShader;
    if(edge){s.uniforms.trailEdge={value:edge};s.uniforms.trailSlope={value:slope};s.fragmentShader=s.fragmentShader.replace('#include <map_fragment>','#ifdef USE_MAP\nvec2 p=vMapUv;float broad=terrainNoise(trailPosition.xz*.07);vec3 soil=mix(texture2D(map,p).rgb,texture2D(map,mat2(.8,-.6,.6,.8)*p*.71+vec2(.31,.73)).rgb,.4);vec3 litter=mix(texture2D(trailEdge,p*.83).rgb,texture2D(trailEdge,p*.41+vec2(.2,.6)).rgb,.35);vec3 earth=mix(soil,litter,edgeBlend*.70);vec3 vertexTint=clamp(diffuseColor.rgb/vec3(.48,.40,.25),vec3(.4),vec3(1.35));diffuseColor.rgb=earth*(.92+broad*.12);float exposed=smoothstep(.08,.27,1.0-abs(normalize(cross(dFdx(trailPosition),dFdy(trailPosition))).y));diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.24,.235,.20)*( .8+terrainNoise(trailPosition.xz*1.7)*.35),exposed*.75);\n#endif');}
    if(edge)s.fragmentShader=s.fragmentShader.replace('#include <color_fragment>',`#if defined(USE_COLOR_ALPHA)
      diffuseColor*=mix(vec4(1.0),vColor,.22);
      #elif defined(USE_COLOR)
      diffuseColor.rgb*=mix(vec3(1.0),vColor.rgb,.22);
      #endif`);
    else s.fragmentShader=s.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
      float detailFade=1.0-smoothstep(20.0,110.0,length(vViewPosition));
      float grit=grain(floor(trailPosition.xz*72.0));
      float broad=terrainNoise(trailPosition.xz*.11);
      ${theme==='sand'?`float ripple=sin(trailPosition.z*38.0+sin(trailPosition.x*.8)*1.8+terrainNoise(trailPosition.xz*.6)*3.0);
      diffuseColor.rgb*=.92+broad*.18+(grit-.5)*.12*detailFade+ripple*.035*detailFade;`:`float aggregate=terrainNoise(trailPosition.xz*5.0);
      diffuseColor.rgb*=.79+broad*.25+(aggregate-.5)*.15+(grit-.5)*.22*detailFade;
      float exposed=smoothstep(.06,.24,1.0-abs(normalize(cross(dFdx(trailPosition),dFdy(trailPosition))).y));float stratum=.85+.12*sin(trailPosition.y*4.0+terrainNoise(trailPosition.xz*.4)*3.0);
      diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.22,.21,.18)*stratum,exposed*.86);`}`);
    s.vertexShader='attribute float trailStone;varying float stoneBlend;\n'+s.vertexShader;s.vertexShader=s.vertexShader.replace('edgeBlend=trailBlend;','edgeBlend=trailBlend;stoneBlend=trailStone;');
    s.fragmentShader='varying float stoneBlend;\n'+s.fragmentShader;s.fragmentShader=s.fragmentShader.replace('#include <alphatest_fragment>','#include <alphatest_fragment>\ndiffuseColor.rgb=mix(diffuseColor.rgb,vec3(.18,.17,.145)*(.85+terrainNoise(trailPosition.xz*4.0)*.3),stoneBlend);');
    s.vertexShader='attribute float trailGreen;varying float sectionGreen;\n'+s.vertexShader;s.vertexShader=s.vertexShader.replace('stoneBlend=trailStone;','stoneBlend=trailStone;sectionGreen=trailGreen;');
    s.fragmentShader='varying float sectionGreen;\n'+s.fragmentShader;
    if(theme==='mountain'){
     s.vertexShader='attribute vec3 trailWear;varying vec3 roadWear;\n'+s.vertexShader;
     s.vertexShader=s.vertexShader.replace('sectionGreen=trailGreen;','sectionGreen=trailGreen;roadWear=trailWear;');
     s.fragmentShader='varying vec3 roadWear;\n'+s.fragmentShader;
    }
    // Smooth vertex normals prevent per-triangle colour seams on quarry slopes.
    // The rock tint is continuous across soil/stone patches and uses interrupted
    // strata, not evenly painted horizontal bands.
    s.vertexShader='varying vec3 terrainWorldNormal;\n'+s.vertexShader;
    s.vertexShader=s.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nterrainWorldNormal=normalize(mat3(modelMatrix)*normal);');
    s.fragmentShader='varying vec3 terrainWorldNormal;\n'+s.fragmentShader;
    s.fragmentShader=s.fragmentShader.replaceAll('normalize(cross(dFdx(trailPosition),dFdy(trailPosition)))','normalize(terrainWorldNormal)');
    s.fragmentShader=s.fragmentShader.replace('#include <roughnessmap_fragment>',`#include <roughnessmap_fragment>
      float erosion=terrainNoise(trailPosition.xz*.43);
      float layers=terrainNoise(vec2(trailPosition.y*3.4+erosion*2.8,(trailPosition.x+trailPosition.z)*.23));
      float fissure=smoothstep(.035,.105,abs(terrainNoise(trailPosition.xz*.64+trailPosition.y*.21)-.48));
      float rockSlope=smoothstep(.07,.29,1.0-abs(normalize(terrainWorldNormal).y));
      ${slope?`vec3 slopeWeights=pow(abs(normalize(terrainWorldNormal)),vec3(4.0));slopeWeights/=max(dot(slopeWeights,vec3(1.0)),.001);
      vec3 slopeColour=texture2D(trailSlope,trailPosition.yz*.12).rgb*slopeWeights.x+texture2D(trailSlope,trailPosition.xz*.12).rgb*slopeWeights.y+texture2D(trailSlope,trailPosition.xy*.12).rgb*slopeWeights.z;
      float slabLuminance=dot(slopeColour,vec3(.2126,.7152,.0722));
      slopeColour=mix(slopeColour,vec3(slabLuminance)*vec3(.94,.99,1.02),stoneBlend*.88);
      diffuseColor.rgb=mix(diffuseColor.rgb,slopeColour*(.8+erosion*.24),rockSlope*(1.0-stoneBlend)*.84);
      // A single slab needs continuous stone, not the loose-rock mosaic used
      // on soil slopes. The CC0 rock-face photograph tiles at its real 2.7m scale.
      vec3 bedrockColour=texture2D(trailBedrock,trailPosition.yz*.37).rgb*slopeWeights.x+texture2D(trailBedrock,trailPosition.xz*.37).rgb*slopeWeights.y+texture2D(trailBedrock,trailPosition.xy*.37).rgb*slopeWeights.z;
      float bedrockLuma=dot(bedrockColour,vec3(.2126,.7152,.0722));
      bedrockColour=mix(bedrockColour,vec3(bedrockLuma)*vec3(.96,1.0,1.025),.88);
      float bedrockMask=max(stoneBlend,${theme==='urban'?'rockSlope*.86':'0.0'});
      diffuseColor.rgb=mix(diffuseColor.rgb,bedrockColour*(.91+erosion*.13),bedrockMask);`:''}
      float exposedRock=max(stoneBlend,rockSlope);
      ${theme==='urban'?`float quarryLuma=dot(diffuseColor.rgb,vec3(.2126,.7152,.0722));
      diffuseColor.rgb=mix(diffuseColor.rgb,vec3(quarryLuma)*vec3(1.04,1.02,.96),.87);`:''}
      diffuseColor.rgb*=mix(1.0,.78+layers*.28+fissure*.13,exposedRock);
      // Existing forest photographs contain mostly brown litter. A local
      // living-ground layer must change the surface colour, not just place
      // isolated blades over that same brown texture. Keep exposed rock and
      // every driveable line untinted; this mask is zero in other worlds.
      float vegetationPatch=terrainNoise(trailPosition.xz*.34);
      float vegetationBreakup=terrainNoise(trailPosition.xz*.21+vec2(14.3,7.1));
      float unevenShoulder=clamp(sectionGreen+(vegetationBreakup-.5)*.72,0.0,1.0)*smoothstep(0.0,.15,sectionGreen);
      vec3 livingGround=mix(vec3(.065,.086,.033),vec3(.12,.155,.052),vegetationPatch);
      // Preserve the photograph's actual soil/needle variation under the green
      // cover; a flat colour replacement made the banks look like felt.
      float groundLuminance=dot(diffuseColor.rgb,vec3(.2126,.7152,.0722));
      livingGround*=clamp(groundLuminance*5.4,.48,1.55)*(.76+terrainNoise(trailPosition.xz*13.0)*.48);
      float barePockets=mix(.38,1.0,smoothstep(.25,.56,vegetationBreakup));
      diffuseColor.rgb=mix(diffuseColor.rgb,livingGround,unevenShoulder*barePockets*(.70+vegetationPatch*.18)*(1.0-exposedRock*.92));
      ${theme==='mountain'?`
      // Metre-scale eroded pockets interrupt both the road and its shoulders.
      // Keep the photographic grain beneath them; this is not extra geometry.
      float soilMosaic=terrainNoise(trailPosition.xz*.19+vec2(erosion*1.6,layers));
      float fineMosaic=terrainNoise(trailPosition.xz*.78+vec2(5.2,11.6));
      float gravelPocket=smoothstep(.48,.72,soilMosaic*.72+fineMosaic*.28);
      float localRoad=max(roadWear.z,sectionGreen*.55);
      float pocketLuma=dot(diffuseColor.rgb,vec3(.2126,.7152,.0722));
      vec3 mineralPatch=vec3(pocketLuma)*vec3(.98,1.0,.94);
      diffuseColor.rgb=mix(diffuseColor.rgb,mineralPatch,gravelPocket*localRoad*.48*(1.0-stoneBlend));
      diffuseColor.rgb*=1.0+(soilMosaic-.5)*.24*localRoad;
      // Soft paired wear follows the authored centreline, with mild lateral
      // wander and gaps. No repeated tread stamp or bright painted stripe.
      float trackWander=(terrainNoise(vec2(roadWear.y*.065,3.4))-.5)*.16;
      float trackDistance=abs(abs(roadWear.x-trackWander)-.72);
      float trackWidth=.27+terrainNoise(vec2(roadWear.y*.27,9.1))*.13;
      float trackBreak=smoothstep(.38,.66,terrainNoise(vec2(roadWear.y*.16,3.7)))
        *smoothstep(.22,.59,terrainNoise(vec2(roadWear.y*.43,roadWear.x*1.7)));
      float wornTrack=(1.0-smoothstep(trackWidth*.12,trackWidth,trackDistance))*trackBreak*roadWear.z*(1.0-stoneBlend*.9)*(1.0-sectionGreen);
      diffuseColor.rgb*=1.0-wornTrack*.13;
      `:''}
      roughnessFactor=clamp(.87+erosion*.12,0.0,1.0);
    `);
    s.fragmentShader=s.fragmentShader.replace('#include <normal_fragment_maps>',`vec3 beforeGroundNormal=normal;
      #include <normal_fragment_maps>
      normal=normalize(mix(normal,beforeGroundNormal,${bedrock?'bedrockMask':'stoneBlend'}*.94));
      float surfaceFade=1.0-smoothstep(12.0,65.0,length(vViewPosition));
      float surfaceRelief=${theme==='sand'?`sin(trailPosition.z*38.0+sin(trailPosition.x*.8)*1.8+terrainNoise(trailPosition.xz*.6)*3.0)*.0011`:`(terrainNoise(trailPosition.xz*19.0)-.5)*.003` }*surfaceFade;
      ${bedrock?`float bedrockBump=texture2D(trailBedrockHeight,trailPosition.yz*.37).r*slopeWeights.x+texture2D(trailBedrockHeight,trailPosition.xz*.37).r*slopeWeights.y+texture2D(trailBedrockHeight,trailPosition.xy*.37).r*slopeWeights.z;
      surfaceRelief=mix(surfaceRelief,(bedrockBump-.5)*.013*surfaceFade,bedrockMask);`:''}
      vec3 surfaceQx=dFdx(vViewPosition),surfaceQy=dFdy(vViewPosition);
      vec3 surfaceR1=cross(surfaceQy,normal),surfaceR2=cross(normal,surfaceQx);
      float surfaceDet=dot(surfaceQx,surfaceR1);
      vec3 surfaceGradient=sign(surfaceDet)*(dFdx(surfaceRelief)*surfaceR1+dFdy(surfaceRelief)*surfaceR2);
      normal=normalize(abs(surfaceDet)*normal-surfaceGradient);
    `);
  };m.customProgramCacheKey=()=>`trail-surface-v11-${photographic}-${theme}`;return m;
}
export function createLandscape(world,parent){
  createProTrials(world,parent);
  createGorge(world,parent);
  const course=world.course,sand=course.theme==='sand',urban=course.theme==='urban',terrain=new T.Mesh(groundGeometry(world,world.bounds,world.mountainExtension?2:undefined),groundMaterial(!sand&&!urban,course.theme));terrain.receiveShadow=true;terrain.castShadow=!['school','custom'].includes(course.id);parent.add(terrain);
  for(const b of world.finePatches||[]){const patch=new T.Mesh(groundGeometry(world,b,b.spacing,.012),groundMaterial(false,course.theme));patch.name='Shared fine dune contact surface';patch.castShadow=patch.receiveShadow=true;parent.add(patch);}
  if(course.id==='sand')parent.add(createDesertDressing(world));
  if(world.himachalSection){const patch=new T.Mesh(groundGeometry(world,world.himachalSection.bounds,world.himachalSection.groundSpacing,.012),groundMaterial(true,course.theme));patch.name='Himachal shared fine ground';patch.castShadow=patch.receiveShadow=true;parent.add(patch);}
  const rocks=[];
  for(let i=0;i<520;i++){
    const z=world.bounds.minZ+hash(i,1)*world.size,x=world.bounds.minX+hash(i,2)*world.size,off=world.routeDistance(x,z),y=world.height(x,z);
    if(off<7||Math.hypot(x,z)<35||clearRiverSurface(world,x,z))continue;
    // Only small surface stones are decorative; every large boulder has a collider.
    if(i<150){const scale=.04+hash(i,8)*.12;rocks.push({pos:[x,y+scale*.15,z],scale:[scale*1.6,scale*.65,scale],rot:[i*.12,i*.8,i*.31],color:sand?'#a98c6b':i%3?'#7f8274':'#a5a294'});}
    // Buildings belong to the service perimeter, never randomly block the yard.
  }
  // Palm-sized rubble establishes scale around the authored challenges. These
  // are surface dressing below tyre radius; every larger rock is a collider.
  if(!['school','custom'].includes(course.id)){
    const box=course.id==='mountain'?[15,112,88,205]:sand?[-175,-20,145,260]:[-135,5,65,238],spacing=urban?1.3:2.2;
    for(let x=box[0];x<box[1];x+=spacing)for(let z=box[2];z<box[3];z+=spacing){
      const n=hash(x,z),px=x+(n-.5)*1.8,pz=z+(hash(z,x)-.5)*1.8,d=world.routeDistance(px,pz);
      if(n>(urban?.66:.58)||d<(urban?1.7:2.2)||noise(x*.09,z*.09)<(urban?.47:.59)||clearRiverSurface(world,px,pz))continue;
      const scale=.035+hash(x+17,z+3)*.09;
      rocks.push({pos:[px,world.height(px,pz)+scale*.12,pz],scale:[scale*1.7,scale*.68,scale],rot:[0,n*6.28,0],color:sand?'#9b896d':n>.3?'#96958b':'#6e7168'});
    }
  }
  // Palm-sized gravel never needs the thousands of facets of a large scanned
  // boulder. A bounded low-poly instanced mesh permits denser local scree
  // without increasing the already large free-roam world's geometry budget.
  const gravelMaterial=rockMaterial(course.theme);gravelMaterial.color.set('#ffffff');
  instances(parent,new T.DodecahedronGeometry(1,0),gravelMaterial,rocks);
  if(world.himachalSection){
   // An uninterrupted scale hierarchy: pebbles in the road, loose fragments at
   // its edge, then the solid bedrock shoulders. Decorative stones stay <8cm
   // high, with larger masses exclusively in the shared collision plan.
   const scree=[];
   for(let x=34;x<105;x+=.78)for(let z=94;z<199;z+=.78){
    const n=hash(x+341,z),px=x+(n-.5)*.65,pz=z+(hash(z,x)-.5)*.65;
    const edge=sectionShoulderDistance(world,px,pz);
    if(n>(edge>0?.30:.12)||noise(x*.12,z*.12)<.49||clearRiverSurface(world,px,pz))continue;
    const scale=.035+hash(x,z+331)*.095;
    scree.push({pos:[px,world.height(px,pz)+scale*.10,pz],scale:[scale*1.8,scale*.55,scale],rot:[0,n*6.28,0],color:n>.16?'#756f62':'#5e625c'});
   }
   const screeMaterial=rockMaterial('mountain');screeMaterial.color.set('#ffffff');
   const fragments=instances(parent,new T.DodecahedronGeometry(1,0),screeMaterial,scree);
   fragments.name='Himachal trail scree';fragments.castShadow=false;
  }
  if(world.mountainExtension){
   const debris=[];
   // Small embedded surface gravel only: no decorative collision-sized rocks,
   // and none on the paved wearing course. Large roadside masses remain solid.
   for(const road of world.mountainExtension.roads)for(let i=1;i<road.points.length-1;i++){
    const p=road.points[i],next=road.points[i+1],length=Math.hypot(next.x-p.x,next.z-p.z)||1;
    const nx=(next.z-p.z)/length,nz=-(next.x-p.x)/length;
    for(let j=0;j<7;j++){
     const n=hash(i+729,j+road.length),side=j%2?1:-1;
     const offset=side*(road.kind==='asphalt'?road.width/2+.35+n*2.3:(n<.4?n*6:road.width/2+(n-.4)*4));
     const x=p.x+nx*offset,z=p.z+nz*offset;
     if(clearRiverSurface(world,x,z))continue;
     const radius=.028+hash(i+93,j+26)*.06;
     debris.push({pos:[x,world.height(x,z)+.006,z],scale:[radius*1.6,radius*.42,radius],rot:[0,n*6.28,0],color:n>.5?'#a4a296':'#73766e'});
    }
   }
   const material=rockMaterial('mountain');material.color.set('#ffffff');
   const stones=instances(parent,new T.DodecahedronGeometry(1,0),material,debris);stones.name='Mountain road surface gravel';stones.castShadow=false;
  }
  buildVegetationGeometry(world,parent);
  addCourseFurniture(world,parent);
  createCourseLandmarks(world,parent);
  createTerrainElements(world,parent);
  createExplorationFeatures(world,parent);
  createHimachalSection(world,parent);
  createMountainRoads(world,parent);
  addDistantLandscape(world,parent);
  // The old close-up corridor side planes are deliberately removed: they cut
  // through the new open worlds and appeared as giant flat walls at some angles.
  return terrain;
}

function addCourseFurniture(world,parent){
  const urban=world.course.theme==='urban',sand=world.course.theme==='sand';
  const material=rockMaterial(world.course.theme);
  const routePosts=world.adventureMarkers||[];
  instances(parent,new T.CylinderGeometry(1,1,1,7),new T.MeshStandardMaterial({color:'#e9e3cd',roughness:.9}),routePosts.map(p=>({pos:[p.x,p.y+p.height/2,p.z],scale:[p.radius,p.height,p.radius]})));
  instances(parent,new T.CylinderGeometry(1,1,1,7),new T.MeshStandardMaterial({color:'#303b38',roughness:.8}),routePosts.map(p=>({pos:[p.x,p.y+p.height-.16,p.z],scale:[p.radius*1.03,.3,p.radius*1.03]})));
  // Obstacles share the exact centre and dimensions used by the collision solver.
  for(const o of world.obstacles){
    const localStone=world.himachalSection&&o.x>=-14&&o.x<=112&&o.z>=88&&o.z<=205;
    const scanned=o.type==='rock'&&(o.radius>=.9||localStone)?createScannedRock(o.id||`${o.x}:${o.z}`,world.course.theme):null;
    const mesh=scanned||new T.Mesh(o.type==='rock'?rockGeometry(o.id||`${o.x}:${o.z}`):new T.BoxGeometry(o.width,o.height,o.depth),material);
    if(o.type==='rock')mesh.scale.set(o.radius,o.height,o.radius);
    mesh.position.set(o.x,o.y+o.height/2,o.z);mesh.rotation.y=o.yaw||0;mesh.castShadow=mesh.receiveShadow=true;mesh.userData.obstacleId=o.id;parent.add(mesh);
  }
  if(!sand&&world.course.id!=='custom'){const b=urban?{minX:-74,maxX:-56,minZ:82,maxZ:117}:{minX:56,maxX:74,minZ:108,maxZ:181},material=groundMaterial(!urban,world.course.theme);const patch=new T.Mesh(groundGeometry(world,b,.3,.012),urban?quarryBedMaterial(material):material);patch.receiveShadow=true;parent.add(patch);}
  if(world.course.id==='school'){
    const hill=new T.Mesh(groundGeometry(world,{minX:-125,maxX:-75,minZ:132,maxZ:218},.8,.012),groundMaterial(false));hill.receiveShadow=true;parent.add(hill);
  }
  const box=(w,h,d,x,y,z,color)=>{const mesh=new T.Mesh(new T.BoxGeometry(w,h,d),new T.MeshStandardMaterial({color,roughness:.72}));mesh.position.set(x,y,z);mesh.castShadow=mesh.receiveShadow=true;parent.add(mesh);return mesh;};
  const line=(points,color='#ddd9b4',width=.09)=>{for(let i=1;i<points.length;i++){const a=points[i-1],b=points[i],length=Math.hypot(b[0]-a[0],b[1]-a[1]),mesh=box(width,.012,length,(a[0]+b[0])/2,world.height((a[0]+b[0])/2,(a[1]+b[1])/2)+.024,(a[1]+b[1])/2,color);mesh.rotation.y=Math.atan2(b[0]-a[0],b[1]-a[1]);}};
  if(urban&&world.course.id!=='custom'){
    // Each wheel lane has a distinct concrete surface and edge markings. Its
    // elevation still comes from the exact same height sampler as physics.
    for(const lane of [-60,-65,-70]){
      line([[lane-1.45,82],[lane-1.45,117]],'#dbad59',.10);
      line([[lane+1.45,82],[lane+1.45,117]],'#dbad59',.10);
    }
    createQuarryArt(world,parent);
    // Painted practice areas establish scale and purpose from the first camera view.
    line([[-5,12],[-5,42],[5,42],[5,12]],'#eee8c7',.13);
    for(const [x,z]of [[48,54],[58,59],[68,64]])line([[x-1.65,z-3.5],[x-1.65,z+3.5],[x+1.65,z+3.5],[x+1.65,z-3.5]],'#eee8c7',.12);
    line([[16,55],[16,84],[43,84],[43,55]],'#d1b260',.14);
    for(let z=84;z<=162;z+=13){const cone=new T.Mesh(new T.ConeGeometry(.2,.65,12),new T.MeshStandardMaterial({color:'#ef702e',roughness:.85}));cone.position.set(z%26?40:20,.325,z);cone.castShadow=true;parent.add(cone);}
    // Original service architecture: a hangar with raised roof, glazing and garage bays.
    for(const x of [-100,-65,-30]){
      box(27,6,18,x,3,-38,'#a9aaa1');box(28.2,.32,19.2,x,6.1,-38,'#404c51');
      for(let k=-1;k<=1;k++){box(7.2,3.9,.08,x+k*8.4,2.05,-28.94,'#4e595e');box(6.5,.7,.10,x+k*8.4,4.65,-28.85,'#92aaa7');}
      for(let k=-12;k<=12;k+=3)box(.10,5.7,.08,x+k,3,-28.84,'#858c88');
    }
    for(const x of [-110,100]){box(.12,7,.12,x,3.5,25,'#5c6566');box(2,.10,.4,x,7,25,'#d2d4c9');}
    addSign(parent,'CONTROL SCHOOL',-7,2.4,11,'#f2a73f');addSign(parent,'4WD · LOOSE SURFACE',-38,2.2,44,'#f2a73f');addSign(parent,'REVERSE PARKING',43,2.2,43,'#e6e3cb');
    if(world.course.id==='school'){
      for(const [text,x,z]of [['WHEEL STEPS · 4L',-76,80],['TRAINING HILL · 4L',-110,132],['CREST · STOP & LOOK',-110,175],['SAND LANE · 4H',-35,108]])addSign(parent,text,x,world.height(x,z)+2.2,z,'#f2a73f');
      // Low stakes mark the practice lanes without blocking the wheel tracks.
      for(const x of [-106,-94])for(let z=134;z<=218;z+=12)box(.12,.7,.12,x,world.height(x,z)+.35,z,'#e7ad65');
      for(const x of [-33,0])for(let z=108;z<=180;z+=12)box(.12,.7,.12,x,world.height(x,z)+.35,z,'#e7ad65');
    }
  }else if(!urban){
    addSign(parent,sand?'RAJASTHAN · DUNE SURVEY':'HIMACHAL · TRAIL BASE',-6,2.4,13,'#e9d9ae');
    // Canvas shade at base, survey poles and a recognisable base-camp water tank.
    const base=box(6,.08,4,-11,2.8,4,sand?'#b59062':'#798570');base.rotation.z=.04;
    for(const dx of [-2.8,2.8])for(const dz of [-1.8,1.8])box(.08,2.8,.08,-11+dx,1.4,4+dz,'#68645b');
    const tank=new T.Mesh(new T.CylinderGeometry(.6,.6,1.4,20),new T.MeshStandardMaterial({color:'#67756b',roughness:.6}));tank.position.set(-15,.7,3);tank.castShadow=true;parent.add(tank);
    for(const feature of world.features){
     // The section already has trailhead signs and checkpoint markers. A
     // second full-width sign in the stone line obscured the actual challenge.
     if(world.himachalSection&&feature.type==='ruts')continue;
     addSign(parent,feature.name.toUpperCase(),feature.x-3,world.height(feature.x-3,feature.z)+1.9,feature.z,'#e9d9ae');
    }
  }
  // The physical world edge has visible posts, not a concealed collision wall.
  const posts=[];for(let i=0;i<=world.size/16;i++){const t=i/(world.size/16);for(const [x,z]of [[world.bounds.minX+t*world.size,world.bounds.minZ],[world.bounds.minX+t*world.size,world.bounds.maxZ],[world.bounds.minX,world.bounds.minZ+t*world.size],[world.bounds.maxX,world.bounds.minZ+t*world.size]])posts.push({pos:[x,world.height(x,z)+.65,z],scale:[.12,1.3,.12]});}
  instances(parent,new T.BoxGeometry(1,1,1),new T.MeshStandardMaterial({color:urban?'#e4a340':'#a19477',roughness:.95}),posts);
}
function addSign(parent,text,x,y,z,color){
  if(typeof document==='undefined')return;
  const canvas=document.createElement('canvas');canvas.width=768;canvas.height=128;const ctx=canvas.getContext('2d');ctx.fillStyle='#26312f';ctx.fillRect(0,0,768,128);ctx.fillStyle=color;ctx.font='bold 39px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(text,384,64,730);
  const texture=new T.CanvasTexture(canvas);texture.colorSpace=T.SRGBColorSpace;
  const sign=new T.Mesh(new T.PlaneGeometry(3.6,.6),new T.MeshStandardMaterial({map:texture,roughness:.9,side:T.DoubleSide}));sign.position.set(x,y,z);sign.rotation.y=Math.PI;parent.add(sign);
  const pole=new T.Mesh(new T.CylinderGeometry(.04,.04,1.7,8),new T.MeshStandardMaterial({color:'#6c7064',roughness:.9}));pole.position.set(x,y-1,z);pole.castShadow=true;parent.add(pole);
}

function addDistantLandscape(world,parent){
 const sand=world.course.theme==='sand',half=world.size/2,cz=(world.bounds.minZ+world.bounds.maxZ)/2;
 // One continuous outer heightfield: no billboard ring, depressed skirt or
 // angular-noise seam. The hole follows the playable square exactly.
 const mountain=world.course.theme==='mountain',spacing=mountain?12:20,extent=half+700,count=Math.round(extent*2/spacing),pos=[],colors=[],indices=[];
 // Insert the exact playable-boundary coordinates into the outer grid. Omitting
 // cells by their centre left up to one full grid cell of sky between meshes.
 const axis=(centre,min,max)=>[...new Set([...Array.from({length:count+1},(_,i)=>centre-extent+i/count*extent*2),min,max])].sort((a,b)=>a-b);
 const xs=axis(0,world.bounds.minX,world.bounds.maxX),zs=axis(cz,world.bounds.minZ,world.bounds.maxZ),stride=xs.length;
 const near=new T.Color(sand?'#aa8a59':'#536a4e'),far=new T.Color(sand?'#c6b8a1':'#9aaeb4');
 for(let j=0;j<zs.length;j++)for(let i=0;i<xs.length;i++){
  const x=xs[i],z=zs[j],dx=Math.max(0,Math.abs(x)-half),dz=Math.max(0,Math.abs(z-cz)-half),outside=Math.hypot(dx,dz);
  const bx=T.MathUtils.clamp(x,world.bounds.minX,world.bounds.maxX),bz=T.MathUtils.clamp(z,world.bounds.minZ,world.bounds.maxZ),edge=world.height(bx,bz);
  const rise=smooth(Math.min(1,outside/310)),broad=noise(x/270+13,z/270+7),fold=noise(x/110+31,z/110+17);
  // Unequal, broad summits leave valleys in the skyline instead of surrounding
  // the player with a constant-height rim.
  let summits=0;
  if(!sand)for(const [px,pz,h,w] of [[half+260,-half-100,17,160],[-half-300,-half-240,14,210],[60,half+420,19,230],[-half-400,half+220,15,180]])summits+=h*Math.exp(-((x-px)**2+(z-cz-pz)**2)/(w*w));
  const urban=world.course.theme==='urban';
  const ridge=1-Math.abs(noise(x/185+6,z/185+21)*2-1),brokenRidge=1-Math.abs(noise(x/65+19,z/65+3)*2-1);
  const hills=sand?8+47*broad*broad+13*fold:urban?12+42*broad*broad+28*fold+summits+(noise(x/28,z/28)-.5)*12:
    45+(himachalElevationNormalized(x/extent,(z-cz)/extent)-.24)*HIMACHAL_ELEVATION.range*(extent*2/HIMACHAL_ELEVATION.widthMeters);
  const height=edge*(1-rise)+hills*rise;
  pos.push(x,height,z);
  // Atmospheric perspective is distance-continuous, not a horizontal altitude band.
  const haze=smooth(Math.min(1,outside/800)),c=near.clone();
  if(!sand)c.lerp(new T.Color('#8f8a74'),Math.min(.8,Math.max(0,(height-65)/160))*noise(x/35,z/35));
  c.multiplyScalar(.72+noise(x/18,z/18)*.42+noise(x/85,z/85)*.16);c.lerp(far,haze*.85);colors.push(c.r,c.g,c.b);
 }
 for(let j=0;j<zs.length-1;j++)for(let i=0;i<xs.length-1;i++){
  if(xs[i]>=world.bounds.minX&&xs[i+1]<=world.bounds.maxX&&zs[j]>=world.bounds.minZ&&zs[j+1]<=world.bounds.maxZ)continue;
  const a=j*stride+i;indices.push(a,a+stride,a+1,a+1,a+stride,a+stride+1);
 }
 const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.Float32BufferAttribute(pos,3));geometry.setAttribute('color',new T.Float32BufferAttribute(colors,3));geometry.setIndex(indices);geometry.computeVertexNormals();
 const material=new T.MeshStandardMaterial({vertexColors:true,fog:false,roughness:1,flatShading:false});
 if(mountain){
  if(typeof document!=='undefined'){
   const texture=new T.TextureLoader().load('assets/trail-textures/rocky-slope.webp');texture.colorSpace=T.SRGBColorSpace;texture.wrapS=texture.wrapT=T.RepeatWrapping;texture.anisotropy=4;material.map=texture;material.userData.terrainTextures=[texture];
   geometry.setAttribute('uv',new T.Float32BufferAttribute(pos.flatMap((_,i)=>i%3===0?[pos[i]*.08,pos[i+2]*.08]:[]),2));
  }
  material.onBeforeCompile=shader=>{
   shader.vertexShader='varying vec3 ridgePosition;varying vec3 ridgeNormal;\n'+shader.vertexShader;
   shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nridgePosition=position;ridgeNormal=normal;');
   shader.fragmentShader=`varying vec3 ridgePosition;varying vec3 ridgeNormal;
    float ridgeHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
    float ridgeNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(ridgeHash(i),ridgeHash(i+vec2(1,0)),f.x),mix(ridgeHash(i+vec2(0,1)),ridgeHash(i+1.0),f.x),f.y);}
   `+shader.fragmentShader;
   shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
    float slope=1.0-abs(normalize(ridgeNormal).y);
    float strata=.7+ridgeNoise(ridgePosition.xz*.12)*.35+ridgeNoise(ridgePosition.xz*.65)*.12;
    #ifdef USE_MAP
     vec3 crag=texture2D(map,vec2(ridgePosition.x+ridgePosition.z*.4,ridgePosition.y)*.09).rgb;
     strata*=.65+dot(crag,vec3(.2126,.7152,.0722))*.85;
    #endif
    float rock=smoothstep(.16,.48,slope);
    diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.095,.115,.12)*strata,rock*.83);
    float woodland=smoothstep(.34,.58,ridgeNoise(ridgePosition.xz*.018))* (1.0-smoothstep(.25,.5,slope));
    vec3 forest=vec3(.063,.095,.045)*(.72+ridgeNoise(ridgePosition.xz*.11)*.62);
    diffuseColor.rgb=mix(diffuseColor.rgb,forest,woodland*.68);
    float distanceHaze=smoothstep(380.0,1500.0,length(vViewPosition));
    diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.12,.19,.24),distanceHaze*.32);
   `);
  };
  material.customProgramCacheKey=()=> 'himachal-ridgeline-v2';
 }
 const distant=new T.Mesh(geometry,material);distant.name='DistantLandform';
 if(mountain)distant.userData.elevation={source:'SRTM N32E077 via Mapzen',scale:extent*2/HIMACHAL_ELEVATION.widthMeters,playable:false};
 parent.add(distant);
}
