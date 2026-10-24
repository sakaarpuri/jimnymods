import * as T from 'three';
const clamp=(n,a,b)=>Math.max(a,Math.min(b,n)),smooth=n=>{const t=clamp(n,0,1);return t*t*(3-2*t);};
export function explorationPlan(course){
 if(course.id==='school'||course.id==='custom')return {discoveries:[],elements:[],river:null};
 const presets={
  mountain:[['stone-pass','Stone-pass steps',350,365,'offset-steps','A fictional Himalayan maintenance track: alternating stone ledges outside the marked missions.'],['ridge-causeway','Highland dry causeway',-325,70,'rumble','A stone-surfaced side trail; inspect the low ribs and place the wheels carefully.']],
  sand:[['wadi-outpost','Dry wadi outpost',475,340,'rock-garden','A dry rock-lined desert bypass. Find the clear centre rather than climbing the boulders.'],['dune-station','Dune survey station',-485,385,'hill','A compact gravel training crest beyond the survey routes. Stop before committing to its far side.']],
  urban:[['estate-track','Estate-track challenge',200,160,'hill','A closed-course hill inspired by steep estate access tracks.'],['causeway-yard','Stone causeway yard',-205,40,'rumble','A low dry causeway inspired by rural road surfaces, with space to inspect and retry.']]
 };
 const entries=presets[course.id]||[],elements=entries.map(([id,name,x,z,type])=>({id,type,x,z,yaw:0})),discoveries=entries.map(([id,name,x,z,type,description])=>({id,name,x,z,type,description,radius:24}));
 let river=null;
 if(course.id==='mountain'){
  river={id:'highland-river',name:'Highland river bridge',minX:-475,maxX:475,width:18,waterLevel:1.2,bridgeX:-190,bridgeZ:riverCentre(-190),bridgeWidth:7,bridgeLength:48,deckTop:2.45};
  discoveries.push({id:'river-bridge',name:'Highland river bridge',x:river.bridgeX,z:river.bridgeZ-35,radius:25,type:'bridge',description:'Cross only on the guarded bridge. The river is closed to vehicles; this game does not establish real-water crossing capability.'});
 }
 return {elements,discoveries,river};
}
export function riverCentre(x){return 550+11*Math.sin(x/115);}
// Distance to the pre-existing graded approach envelope. The mountain overlay
// uses its normal 5 m exclusion / 15 m blend with this distance, preserving
// the full 12 m half-width roadbed and tapering over a further 15 m laterally.
export function riverApproachProtectionDistance(x,z,river){
 if(!river)return Infinity;
 return Math.hypot(Math.max(0,Math.abs(x-river.bridgeX)-7),Math.max(0,Math.abs(z-river.bridgeZ)-220));
}
export function riverHeight(base,x,z,river){
 if(!river||x<river.minX-25||x>river.maxX+25)return base;
 const along=smooth((x-river.minX+25)/25)*smooth((river.maxX+25-x)/25),d=Math.abs(z-riverCentre(x)),influence=along*smooth((45-d)/24);
 const distance=Math.abs(z-river.bridgeZ),bed=2.45*smooth((d-8)/15),crossing=smooth((24-Math.abs(x-river.bridgeX))/12),approach=crossing*smooth((220-distance)/60);
 const rise=Math.max(0,distance-30),grade=z<river.bridgeZ?.12:.025,profile=river.deckTop+rise*smooth(rise/12)*grade;
 // The actual riverbed remains below the bridge. Approach embankments meet
 // its deck at both ends; the bridge itself is a separate physical collider.
 // A graded road extends 160 m from each bank, blending into the hillside over
 // a further 60 m. Its 12% southern / 2.5% northern grade removes rough slopes.
 // An early exit at that mask's 45 m edge would create a cliff on the hillside.
 const shaped=base+(bed-base)*influence;
 return d>20?shaped+(profile-shaped)*approach:shaped;
}
export function riverCollisionPlan(world){
 const r=world.river;if(!r)return [];
 const props=[{id:'river-bridge-deck',type:'box',x:r.bridgeX,z:r.bridgeZ,y:r.deckTop-.3,width:r.bridgeWidth,depth:r.bridgeLength,height:.3,yaw:0,color:'#8d8069'}];
 for(const side of [-1,1]){
  props.push({id:`river-bridge-rail-${side}`,type:'box',x:r.bridgeX+side*(r.bridgeWidth/2+.1),z:r.bridgeZ,y:r.deckTop,width:.3,depth:r.bridgeLength,height:1.15,yaw:0,color:'#695e4f'});
  for(let x=r.minX;x<r.maxX;x+=8){const cx=x+4;if(Math.abs(cx-r.bridgeX)<r.bridgeWidth/2+5)continue;const z=riverCentre(cx)+side*13.5,derivative=11/115*Math.cos(cx/115),yaw=-Math.atan(derivative);
   props.push({id:`river-bank-${side}-${x}`,type:'box',x:cx,z,y:world.height(cx,z)-.15,width:8.2,depth:1.15,height:1.25,yaw,color:'#8e8c7a'});
  }
 }
 return props;
}
export function riverHazard(world,state){const r=world.river;if(!r)return '';const onBridge=Math.abs(state.x-r.bridgeX)<r.bridgeWidth/2&&Math.abs(state.z-r.bridgeZ)<r.bridgeLength/2;if(!onBridge&&state.x>r.minX&&state.x<r.maxX&&Math.abs(state.z-riverCentre(state.x))<r.width/2)return 'River access is closed. Returned to safety; use the guarded bridge.';return '';}
export function nearbyDiscoveries(world,state,seen=[]){const known=new Set(seen);return (world.discoveries||[]).filter(d=>!known.has(d.id)&&Math.hypot(state.x-d.x,state.z-d.z)<d.radius);}
export function discoveryCollisionPlan(world){return (world.discoveries||[]).flatMap(d=>{const x=d.x+9,z=d.z-13,y=world.height(x,z);return [{id:`discovery-${d.id}-post`,type:'box',x,z,y,width:.16,depth:.16,height:2.8,yaw:0,color:'#806644'},{id:`discovery-${d.id}-board`,type:'box',x,z,y:y+1.8,width:2.4,depth:.12,height:.75,yaw:0,color:'#bfa56e'}];});}
export function bridgeSurfaceMaterial(kind,river){
 const material=new T.MeshStandardMaterial({color:'#ffffff',roughness:kind==='deck'?.96:.9});material.userData.surfaceKind=kind;
 material.onBeforeCompile=shader=>{
  shader.uniforms.bridgeOrigin={value:new T.Vector2(river?.bridgeX||0,river?.bridgeZ||0)};
  shader.vertexShader='varying vec3 masonryPosition;\n'+shader.vertexShader;
  shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
   vec4 masonryLocal=vec4(transformed,1.0);
   #ifdef USE_INSTANCING
    masonryLocal=instanceMatrix*masonryLocal;
   #endif
   masonryPosition=(modelMatrix*masonryLocal).xyz;`);
  shader.fragmentShader=`varying vec3 masonryPosition;uniform vec2 bridgeOrigin;
   float stoneHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
   float stoneNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(stoneHash(i),stoneHash(i+vec2(1,0)),f.x),mix(stoneHash(i+vec2(0,1)),stoneHash(i+1.0),f.x),f.y);}
   `+shader.fragmentShader;
  shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
   vec3 masonryNormal=abs(normalize(cross(dFdx(masonryPosition),dFdy(masonryPosition))));
   vec2 masonryUv=masonryNormal.y>.65?masonryPosition.xz:masonryNormal.x>.65?masonryPosition.zy:masonryPosition.xy;
   float mottling=stoneNoise(masonryUv*.75),aggregate=stoneNoise(masonryUv*19.0),grain=stoneHash(floor(masonryUv*145.0));
   diffuseColor.rgb*=.83+mottling*.23+(aggregate-.5)*.13+(grain-.5)*.075;
   ${kind==='bank'?`float row=floor(masonryUv.y/.38);vec2 blocks=vec2((masonryUv.x+mod(row,2.0)*.43)/.86,masonryUv.y/.38);
    vec2 mortar=min(fract(blocks),1.0-fract(blocks));float joint=1.0-smoothstep(.012,.045,min(mortar.x,mortar.y));
    diffuseColor.rgb*=.88+stoneHash(floor(blocks))*.22;diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.27,.28,.25),joint*.65);`
    :kind==='deck'?`float deckZ=(masonryPosition.z-bridgeOrigin.y)/3.6;float seam=min(fract(deckZ),1.0-fract(deckZ))*3.6;
    float joint=1.0-smoothstep(.009,.027,seam);float track=exp(-pow((abs(masonryPosition.x-bridgeOrigin.x)-.72)/.28,2.0));
    diffuseColor.rgb*=1.0-joint*.38-track*.055;`
    :`float panel=fract((masonryPosition.z-bridgeOrigin.y)/3.6);float seam=1.0-smoothstep(.006,.014,min(panel,1.0-panel));
    diffuseColor.rgb*=1.0-seam*.22;float rain=stoneNoise(vec2(masonryUv.x*7.0,masonryUv.y*.35));diffuseColor.rgb*=.93+rain*.09;`}
  `);
 };material.customProgramCacheKey=()=>`bridge-original-surface-v1-${kind}`;return material;
}
function bridgeSurfaceDetails(river,parent){
 if(!river)return;const root=new T.Group();root.name='BridgeSurfaceDetails';root.userData.decorativeOnly=true;parent.add(root);
 const hazard=new T.MeshStandardMaterial({color:'#e6bd4b',roughness:.77,side:T.DoubleSide,polygonOffset:true,polygonOffsetFactor:-1});
 hazard.onBeforeCompile=shader=>{shader.vertexShader='varying vec2 hazardUv;\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <uv_vertex>','#include <uv_vertex>\nhazardUv=uv;');shader.fragmentShader='varying vec2 hazardUv;\n'+shader.fragmentShader;shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>','#include <color_fragment>\nfloat stripe=step(.5,fract(hazardUv.y*4.0+hazardUv.x*.7));diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.035,.04,.035),stripe);');};hazard.customProgramCacheKey=()=> 'bridge-end-hazard-v1';
 const ends=new T.InstancedMesh(new T.PlaneGeometry(.28,1.06),hazard,4),dummy=new T.Object3D();let index=0;
 for(const side of [-1,1])for(const end of [-1,1]){dummy.position.set(river.bridgeX+side*(river.bridgeWidth/2+.1),river.deckTop+.575,river.bridgeZ+end*(river.bridgeLength/2+.006));dummy.rotation.set(0,end<0?Math.PI:0,0);dummy.updateMatrix();ends.setMatrixAt(index++,dummy.matrix);}root.add(ends);
 const points=[];for(const side of [-1,1])for(let z=-river.bridgeLength/2+2;z<river.bridgeLength/2;z+=4)points.push({x:river.bridgeX+side*(river.bridgeWidth/2-.052),z:river.bridgeZ+z,side});
 const reflectorMaterial=new T.MeshStandardMaterial({color:'#f2ce86',emissive:'#7a591c',emissiveIntensity:.14,roughness:.3,side:T.DoubleSide});
 const reflectors=new T.InstancedMesh(new T.PlaneGeometry(.12,.18),reflectorMaterial,points.length);points.forEach((p,i)=>{dummy.position.set(p.x,river.deckTop+.88,p.z);dummy.rotation.set(0,p.side<0?Math.PI/2:-Math.PI/2,0);dummy.updateMatrix();reflectors.setMatrixAt(i,dummy.matrix);});root.add(reflectors);
 // Paint bands and concrete caps sit on the existing collision surfaces. They
 // add millimetre-scale surface detail, not new unmodelled driving obstacles.
 const caps=new T.InstancedMesh(new T.BoxGeometry(.30,.018,river.bridgeLength),new T.MeshStandardMaterial({color:'#bbb9ab',roughness:.85}),2);
 for(const [i,side]of [-1,1].entries()){dummy.position.set(river.bridgeX+side*(river.bridgeWidth/2+.1),river.deckTop+1.15-.009,river.bridgeZ);dummy.rotation.set(0,0,0);dummy.updateMatrix();caps.setMatrixAt(i,dummy.matrix);}caps.receiveShadow=true;root.add(caps);
}
export function createExplorationFeatures(world,parent){
 const root=new T.Group();root.name='ExplorationFeatures';parent.add(root);
 const props=[...(world.riverProps||[]),...(world.discoveryProps||[])];
 for(const kind of ['bank','deck','rail','sign']){const batch=props.filter(p=>(p.id.startsWith('river-bank-')?'bank':p.id==='river-bridge-deck'?'deck':p.id.startsWith('river-bridge-rail')?'rail':'sign')===kind);if(!batch.length)continue;
  const material=kind==='sign'?new T.MeshStandardMaterial({color:'#ffffff',roughness:.92}):bridgeSurfaceMaterial(kind,world.river),mesh=new T.InstancedMesh(new T.BoxGeometry(1,1,1),material,batch.length),dummy=new T.Object3D();batch.forEach((p,i)=>{dummy.position.set(p.x,p.y+p.height/2,p.z);dummy.scale.set(p.width,p.height,p.depth);dummy.rotation.set(0,p.yaw||0,0);dummy.updateMatrix();mesh.setMatrixAt(i,dummy.matrix);mesh.setColorAt(i,new T.Color(kind==='bank'?'#929489':kind==='deck'?'#aaa99e':kind==='rail'?'#9b9c93':p.color));});mesh.castShadow=mesh.receiveShadow=true;mesh.userData.explorationProps=batch;root.add(mesh);
 }
 bridgeSurfaceDetails(world.river,root);
 if(typeof document!=='undefined')for(const d of world.discoveries||[]){
  const canvas=document.createElement('canvas');canvas.width=1024;canvas.height=256;const ctx=canvas.getContext('2d');ctx.fillStyle='#352f24';ctx.font='bold 76px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(d.type==='bridge'?'RIVER · BRIDGE ONLY':d.name.toUpperCase(),512,128,980);
  const map=new T.CanvasTexture(canvas);map.colorSpace=T.SRGBColorSpace;const material=new T.MeshStandardMaterial({map,transparent:true,roughness:1,side:T.DoubleSide,depthWrite:false});material.addEventListener('dispose',()=>map.dispose());
  const board=world.discoveryProps.find(p=>p.id===`discovery-${d.id}-board`),label=new T.Mesh(new T.PlaneGeometry(2.3,.58),material);label.position.set(board.x,board.y+board.height/2,board.z-.065);label.rotation.y=Math.PI;root.add(label);
 }
 const r=world.river;
 if(r){const positions=[],uv=[],indices=[],steps=160;for(let i=0;i<=steps;i++){const x=r.minX+(r.maxX-r.minX)*i/steps,z=riverCentre(x);positions.push(x,r.waterLevel,z-r.width/2,x,r.waterLevel,z+r.width/2);uv.push(i/10,0,i/10,1);if(i<steps){const a=i*2;indices.push(a,a+1,a+2,a+1,a+3,a+2);}}
  const geometry=new T.BufferGeometry();geometry.setAttribute('position',new T.Float32BufferAttribute(positions,3));geometry.setAttribute('uv',new T.Float32BufferAttribute(uv,2));geometry.setIndex(indices);geometry.computeVertexNormals();const material=new T.MeshStandardMaterial({color:'#467e83',roughness:.27,metalness:.15,transparent:true,opacity:.87,side:T.DoubleSide});
  const flowTime={value:0};material.onBeforeCompile=shader=>{shader.uniforms.riverTime=flowTime;shader.vertexShader='varying vec2 waterUv;\n'+shader.vertexShader;shader.vertexShader=shader.vertexShader.replace('#include <uv_vertex>','#include <uv_vertex>\nwaterUv=uv;');shader.fragmentShader='varying vec2 waterUv;\nuniform float riverTime;\n'+shader.fragmentShader;shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>','#include <color_fragment>\nfloat ripple=sin(waterUv.x*93.0-riverTime*.8+sin(waterUv.y*26.0))*sin(waterUv.y*40.0+waterUv.x*14.0-riverTime*.35);diffuseColor.rgb*=.88+ripple*.12;');};
  const water=new T.Mesh(geometry,material);water.name='ClosedRiverWater';water.onBeforeRender=()=>{flowTime.value=performance.now()/1000;};root.add(water);
 }
 return root;
}
