import * as T from 'three';

// Original procedural river shading, in metres rather than a repeated zigzag
// painted across the strip. Surface motion is visual only: this is closed water,
// not a simulated ford or a claim about the vehicle's wading capability.
export function riverWakeWeight(x,z,shoals){
 let wake=0;const smooth=n=>{const t=Math.max(0,Math.min(1,n));return t*t*(3-2*t);};
 for(const rock of shoals){const downstream=rock.z-z;if(downstream<=0)continue;const width=rock.radius*.55+downstream*.16,length=rock.radius*6+2;
  wake=Math.max(wake,Math.exp(-(((x-rock.x)/width)**2))*smooth(downstream/.7)*(1-smooth(downstream/length)));
 }return wake;
}
export function sectionWaterMaterial(shoals=[]){
 const material=new T.MeshPhysicalMaterial({color:'#4b706b',roughness:.32,metalness:0,ior:1.333,clearcoat:.5,clearcoatRoughness:.22,envMapIntensity:.7,side:T.DoubleSide});
 material.name='HimachalFlowingRiver';
 const reflection={map:{value:null},matrix:{value:new T.Matrix4()},strength:{value:0}};material.userData.localReflection=reflection;
 const time={value:0},sources=shoals.slice(0,15).map(p=>new T.Vector3(p.x,p.z,p.radius));while(sources.length<15)sources.push(new T.Vector3(0,0,0));material.userData.flowTime=time;material.userData.foamSources=shoals.slice(0,15).map(p=>({x:p.x,z:p.z,radius:p.radius}));
 material.onBeforeCompile=shader=>{
  shader.uniforms.riverTime=time;
  shader.uniforms.riverRocks={value:sources};
  shader.uniforms.riverReflection=reflection.map;shader.uniforms.riverReflectionMatrix=reflection.matrix;shader.uniforms.riverReflectionStrength=reflection.strength;
  shader.vertexShader='varying vec3 riverPosition;varying vec2 riverUv;varying vec4 riverProjection;uniform mat4 riverReflectionMatrix;\n'+shader.vertexShader;
  shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nriverPosition=(modelMatrix*vec4(transformed,1.0)).xyz;riverUv=uv;riverProjection=riverReflectionMatrix*vec4(riverPosition,1.0);');
  shader.fragmentShader=`varying vec3 riverPosition;varying vec2 riverUv;varying vec4 riverProjection;uniform sampler2D riverReflection;uniform float riverReflectionStrength;uniform float riverTime;uniform vec3 riverRocks[15];
   float riverHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
   float riverNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(riverHash(i),riverHash(i+vec2(1.,0.)),f.x),mix(riverHash(i+vec2(0.,1.)),riverHash(i+vec2(1.,1.)),f.x),f.y);}
   float riverFbm(vec2 p){return riverNoise(p)*.57+riverNoise(p*2.13+17.2)*.28+riverNoise(p*4.61+5.7)*.15;}
   float riverRipple(vec2 p){vec2 flow=vec2(.11,.7)*riverTime;return riverNoise(p*2.8+flow)*.012+riverNoise(p*7.2+flow*1.3)*.004+sin(p.x*5.1+p.y*7.6+riverTime*2.1)*.002;}
   float riverWake(vec2 p){float wake=0.;for(int i=0;i<15;i++){vec3 rock=riverRocks[i];float downstream=rock.y-p.y;if(rock.z>.0&&downstream>.0){float width=rock.z*.55+downstream*.16;float length=rock.z*6.+2.;float across=(p.x-rock.x)/width;wake=max(wake,exp(-across*across)*smoothstep(0.,.7,downstream)*(1.-smoothstep(0.,length,downstream)));}}return wake;}
  `+shader.fragmentShader;
  shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
   vec2 waterP=riverPosition.xz;
   float shore=pow(abs(riverUv.x*2.0-1.0),3.0);
   float current=riverFbm(vec2(waterP.x*.7,waterP.y*.29+riverTime*.22));
   float breakup=riverFbm(vec2(waterP.x*2.7,waterP.y*.92+riverTime*.62));
   float wake=riverWake(waterP);
   float foam=smoothstep(.35,.72,breakup)*wake*.82+smoothstep(.7,.88,breakup)*shore*.22;
   float curl=riverNoise(waterP*.31+vec2(0.,-riverTime*.08));
   diffuseColor.rgb=mix(vec3(.035,.095,.09),vec3(.15,.26,.215),current*.72+shore*.28);
   diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.67,.74,.69),foam*(.55+curl*.45));
  `);
  shader.fragmentShader=shader.fragmentShader.replace('#include <normal_fragment_maps>',`#include <normal_fragment_maps>
   float riverBase=riverRipple(riverPosition.xz);
   vec2 riverSlope=vec2(riverRipple(riverPosition.xz+vec2(.04,0.))-riverBase,riverRipple(riverPosition.xz+vec2(0.,.04))-riverBase)/.04;
   riverSlope*=1.0-smoothstep(16.0,95.0,length(vViewPosition))*.8;
   normal=normalize(normal+mat3(viewMatrix)*vec3(-riverSlope.x,0.,-riverSlope.y));
  `);
  shader.fragmentShader=shader.fragmentShader.replace('#include <clearcoat_normal_fragment_maps>','#include <clearcoat_normal_fragment_maps>\n#ifdef USE_CLEARCOAT\nclearcoatNormal=normal;\n#endif');
  shader.fragmentShader=shader.fragmentShader.replace('#include <opaque_fragment>',`
   if(riverReflectionStrength>.0&&riverProjection.w>.0){
    vec2 reflectionUv=riverProjection.xy/riverProjection.w+riverSlope*.012;
    float reflectionEdge=smoothstep(0.,.025,reflectionUv.x)*smoothstep(0.,.025,reflectionUv.y)*(1.-smoothstep(.975,1.,reflectionUv.x))*(1.-smoothstep(.975,1.,reflectionUv.y));
    vec3 riverView=normalize(cameraPosition-riverPosition),riverNormal=normalize(vec3(-riverSlope.x,1.,-.16-riverSlope.y));
    float riverFresnel=.02+.98*pow(1.-clamp(abs(dot(riverView,riverNormal)),0.,1.),5.);
    vec2 blur=vec2(.8/512.,.8/512.);vec3 localImage=texture2D(riverReflection,reflectionUv).rgb*.5;
    localImage+=(texture2D(riverReflection,reflectionUv+blur).rgb+texture2D(riverReflection,reflectionUv-blur).rgb)*.25;
    outgoingLight=mix(outgoingLight,localImage,(.08+riverFresnel*.85)*riverReflectionStrength*reflectionEdge*(1.-foam*.85));
   }
   #include <opaque_fragment>`);
 };
 material.customProgramCacheKey=()=> 'himachal-shoal-local-reflection-v3';
 return material;
}
