import {EXTERIOR_PARTS,WHEEL_PARTS,normalizeExteriorParts} from '../exterior-parts.js';
import {companionVehicle} from './companions.js';
import * as T from 'three';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {MeshoptDecoder} from 'three/addons/libs/meshopt_decoder.module.js';
import {loadBodyModel} from '../model-loader.js';
import {applyMaterialProfile,paintFinish} from '../physical-materials.js';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {RGBELoader} from 'three/addons/loaders/RGBELoader.js';
import {Sky} from 'three/addons/objects/Sky.js';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {projectBodyDecals} from '../decals.js';
import {gateHeading} from './courses.js';
import {createNameDecals} from './player.js';
import {applyCabinMaterials,applySeatCoverPalette} from './cabin-materials.js';
import {applyCabinUpgrades} from '../cabin-upgrades.js';
import {accessoryBuilder,accessoryMaterials} from '../accessories.js';
import {resolvePreviewParts,LIGHT_PROFILES} from '../lighting.js';
import {extractFactoryBadge} from '../refined-parts.js';
import {createLandscape} from './environment.js';
import {preloadRockAssets,disposeRockAssets,rockAssetsReady} from './scanned-rocks.js';
import {preloadVegetationAssets,disposeVegetationAssets} from './vegetation-render.js';
import {preloadAuthoredPines,disposeAuthoredPineAssets} from './authored-pines.js';
import {separateCabinControls,createCabinControls} from './cabin.js';
import {cockpitPose,bonnetPose,DRIVING_CAMERAS,normalizeDrivingCamera,OVERVIEW} from './cockpit-camera.js';
import {createVehicleMirrors} from './mirrors.js';
import {applyWheelFinish,applyWheelColour} from '../wheel-finishes.js';
import {applyWheelDesign,disposeWheelDesigns} from '../wheel-designs.js';
import {createSurfaceStyler,protectMirrorSurfaces} from '../surface-finishes.js';
import {applyGrilleColours} from '../grille-colours.js';
import {configureScriptGrille} from '../grille-scripts.js';
import {separateSpareEmblem,updateSpareEmblem} from '../spare-badge.js';
import {fitSteeringBadge} from '../steering-badge.js';
import {applyCatalogueWheel,disposeCatalogueWheels} from '../catalogue-parts.js';
import {resolveTyreType,applyTyreType,disposeTyreTypes} from '../tyre-types.js';
import {courseLighting} from './course-lighting.js';
import {applyVehicleVisualPose} from './vehicle-visual.js';
import {createDust} from './dust.js';
import {createHimachalLandmarks} from './himachal-landmarks.js';

export function wheelPreviewPose(state,index,actualCenter){
  if(!Number.isInteger(index)||index<0||index>3)return null;
  const point=actualCenter||state.wheelCenters?.[index];if(!point)return null;
  const side=index%2?1:-1,angle=state.yaw+(index<2?(state.steer||0):0),c=Math.cos(angle),s=Math.sin(angle),fore=index<2?.55:-.55;
  const target=new T.Vector3(point.x,point.y+.04,point.z);
  return {target,position:new T.Vector3(point.x+side*1.45*c+fore*s,point.y+.6,point.z-side*1.45*s+fore*c)};
}

const mat=(color,roughness=.9)=>new T.MeshStandardMaterial({color,roughness});
function mesh(g,m,parent,x=0,y=0,z=0){const o=new T.Mesh(g,m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;}
function box(parent,w,h,d,x,y,z,m){return mesh(new RoundedBoxGeometry(w,h,d,2,.035),m,parent,x,y,z);}
function dispose(root){const cleanups=[];root.traverse(o=>{if(o.userData.dispose)cleanups.push(o.userData.dispose);});cleanups.forEach(cleanup=>cleanup());const materials=new Set(),geometries=new Set();root.traverse(o=>{if(o.geometry)geometries.add(o.geometry);if(o.material)materials.add(o.material);o.userData.ownedMaterials?.forEach(m=>materials.add(m));if(o.isInstancedMesh)o.dispose();});geometries.forEach(g=>g.dispose());materials.forEach(m=>{m.userData.terrainTextures?.forEach(t=>t.dispose());m.dispose();});root.clear();}

function companion(parent,x,z,long=false){const g=companionVehicle(long);parent.add(g);g.position.set(x,0,z);g.rotation.y=long?-.24:.4;return g;}

export function createTrailScene(mount){
  const surfaceStyler=createSurfaceStyler();
  // Resolution can be scaled down while driving to hold a smooth frame rate.
  let resolutionScale=1;const pixelRatio=()=>Math.min(devicePixelRatio,1.5)*resolutionScale,reducedMotion=matchMedia('(prefers-reduced-motion:reduce)').matches;
  const renderer=new T.WebGLRenderer({antialias:true,powerPreference:'high-performance'});renderer.setPixelRatio(pixelRatio());renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFSoftShadowMap;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;
  mount.append(renderer.domElement);renderer.domElement.setAttribute('aria-label','Live 3D Jimny on a closed practice course. WASD or arrows to drive, Space to brake, Escape to pause.');renderer.domElement.setAttribute('role','img');renderer.domElement.tabIndex=0;
  const scene=new T.Scene(),camera=new T.PerspectiveCamera(47,1,.1,1600);scene.background=new T.Color('#c3d2d0');scene.fog=new T.Fog('#c3d2d0',180,450);
  const skies=new Map();let skyRequest=0,disposed=false;
  // Analytic sky and real outer landforms replace the enlarged photograph
  // horizon: buildings in a panorama previously appeared hundreds of metres tall.
  const skyDome=new Sky();skyDome.scale.setScalar(2400);skyDome.renderOrder=-1000;
  // Sky radiance is independently exposed so the vehicle does not have to be
  // underexposed simply to retain blue sky and cloud detail.
  skyDome.material.fragmentShader=skyDome.material.fragmentShader.replace('vec4( texColor, 1.0 )','vec4( texColor * .18, 1.0 )');
  const skyUniforms=skyDome.material.uniforms;
  skyUniforms.sunPosition.value.set(-50,58,-32);skyUniforms.turbidity.value=3;
  skyUniforms.rayleigh.value=1.8;skyUniforms.mieCoefficient.value=.004;
  skyUniforms.cloudCoverage.value=.27;skyUniforms.cloudDensity.value=.35;
  scene.add(skyDome);
  function loadSky(theme){
    const request=++skyRequest,file=theme==='sand'?'desert':theme==='urban'?'urban':'mountains';
    const apply=entry=>{if(request!==skyRequest)return;scene.environment=daylightEnvironment?.texture||entry.environment.texture;scene.environmentIntensity=lighting().environment;};
    skyUniforms.turbidity.value=courseLighting(theme).turbidity;
    skyUniforms.cloudCoverage.value=courseLighting(theme).clouds;
    if(skies.has(file)){apply(skies.get(file));return;}
    new T.TextureLoader().load(`assets/environments/india-${file}.webp`,texture=>{if(disposed){texture.dispose();return;}texture.colorSpace=T.SRGBColorSpace;const generator=new T.PMREMGenerator(renderer),environment=generator.fromEquirectangular(texture);generator.dispose();const old=skies.get(file);old?.texture.dispose();old?.environment.dispose();const entry={texture,environment};skies.set(file,entry);apply(entry);},undefined,()=>{});
  }
  const pmrem=new T.PMREMGenerator(renderer),room=new RoomEnvironment(),env=pmrem.fromScene(room,.05);scene.environment=env.texture;scene.environmentIntensity=.45;room.dispose();pmrem.dispose();
  // The low-resolution illustrated backdrop is not a suitable paint reflection.
  // Locally hosted CC0 daylight HDR supplies continuous, colour-neutral highlights.
  let paintEnvironment=env.texture,daylightEnvironment=null;
  // Requested after the first vehicle load so it never competes with the model download.
  let daylightRequested=false;const loadDaylight=()=>new RGBELoader().load('assets/environments/rostock-laage-airport-1k.hdr',texture=>{
    if(disposed){texture.dispose();return;}
    const generator=new T.PMREMGenerator(renderer);daylightEnvironment=generator.fromEquirectangular(texture);generator.dispose();texture.dispose();paintEnvironment=daylightEnvironment.texture;scene.environment=paintEnvironment;scene.environmentIntensity=lighting().environment;
    bodyRig.traverse(o=>{if(o.material?.userData?.vehiclePaint){o.material.envMap=paintEnvironment;o.material.needsUpdate=true;}});
  },undefined,()=>{});
  const hemisphere=new T.HemisphereLight('#e9f2ff','#5a594b',.55);scene.add(hemisphere);const sun=new T.DirectionalLight('#fff7e8',2.4);sun.castShadow=true;const shadowSize=innerWidth<700?2048:4096;sun.shadow.mapSize.set(shadowSize,shadowSize);Object.assign(sun.shadow.camera,{left:-78,right:78,top:78,bottom:-78,near:1,far:250});sun.shadow.bias=-.00008;sun.shadow.normalBias=.012;scene.add(sun,sun.target);
  const worldRoot=new T.Group(),car=new T.Group(),bodyRig=new T.Group(),wheelRoot=new T.Group();scene.add(worldRoot,car);car.add(bodyRig,wheelRoot);
  const contactCanvas=document.createElement('canvas');contactCanvas.width=contactCanvas.height=64;const context=contactCanvas.getContext('2d'),gradient=context.createRadialGradient(32,32,4,32,32,32);gradient.addColorStop(0,'rgba(22,27,23,.36)');gradient.addColorStop(1,'rgba(22,27,23,0)');context.fillStyle=gradient;context.fillRect(0,0,64,64);const contact=new T.Mesh(new T.PlaneGeometry(2.1,4.1),new T.MeshBasicMaterial({map:new T.CanvasTexture(contactCanvas),transparent:true,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-1}));contact.rotation.x=-Math.PI/2;scene.add(contact);
  // Cosmetic driving feedback only: neither the dust nor the checkpoint beacon touches physics or scoring.
  const dust=createDust(scene);
  const beaconCanvas=document.createElement('canvas');beaconCanvas.width=4;beaconCanvas.height=128;{const g=beaconCanvas.getContext('2d'),fade=g.createLinearGradient(0,0,0,128);fade.addColorStop(0,'#000');fade.addColorStop(1,'#fff');g.fillStyle=fade;g.fillRect(0,0,4,128);}
  const beaconGeometry=new T.CylinderGeometry(1,1,60,20,1,true);beaconGeometry.translate(0,30,0);
  const beacon=new T.Mesh(beaconGeometry,new T.MeshBasicMaterial({color:'#ff9a4d',alphaMap:new T.CanvasTexture(beaconCanvas),transparent:true,opacity:.4,depthWrite:false,side:T.DoubleSide,fog:false,toneMapped:false}));beacon.visible=false;beacon.renderOrder=5;beacon.name='Checkpoint beacon';scene.add(beacon);
  const projected=new T.Vector3();let speedFov=0,shake=0,chaseYaw=0,chaseZoom=1,focusWheel=0;
  // Bonus tokens for Adventure runs: shared geometry, one spinning coin each.
  // Apples for Adventure runs: shared geometry and materials, one small group each.
  const tokenRoot=new T.Group(),tokenGeometry=new T.SphereGeometry(.46,20,14),tokenMaterial=new T.MeshStandardMaterial({color:'#d2302a',emissive:'#5a0d0a',emissiveIntensity:.5,roughness:.35}),stemGeometry=new T.CylinderGeometry(.03,.04,.26,6),stemMaterial=new T.MeshStandardMaterial({color:'#5b3d22',roughness:.9}),leafGeometry=new T.SphereGeometry(.16,10,6),leafMaterial=new T.MeshStandardMaterial({color:'#4f9a3a',emissive:'#17360f',emissiveIntensity:.4,roughness:.6});tokenGeometry.scale(1,.9,1);leafGeometry.scale(1,.22,.55);tokenRoot.name='Adventure apples';scene.add(tokenRoot);
  // Night: a moonlit valley, stars and working headlights. The lamps exist in daylight at zero intensity so toggling never recompiles materials.
  let night=false,dusk=false,beaconTarget=null,brakeGlow=0,skyColour='#c3d2d0';
  const starPositions=[];for(let i=0;i<900;i++){const u=Math.random()*2-1,a=Math.random()*Math.PI*2,r=Math.sqrt(1-u*u);starPositions.push(Math.cos(a)*r*1400,Math.abs(u)*1400+30,Math.sin(a)*r*1400);}
  const starGeometry=new T.BufferGeometry();starGeometry.setAttribute('position',new T.Float32BufferAttribute(starPositions,3));
  const stars=new T.Points(starGeometry,new T.PointsMaterial({color:'#dfe6ff',size:1.8,sizeAttenuation:false,fog:false,depthWrite:false,toneMapped:false}));stars.visible=false;stars.frustumCulled=false;stars.renderOrder=-900;scene.add(stars);
  // Lamps ride on a rig that copies the body's pitch and roll, so beams follow the car over crests.
  // Long-range beams: a slower fall-off than physical, aimed 45 m ahead, so the track is readable at speed.
  const lampRig=new T.Group();lampRig.name='Vehicle lamps';car.add(lampRig);
  const glowCanvas=document.createElement('canvas');glowCanvas.width=glowCanvas.height=64;{const g=glowCanvas.getContext('2d'),r=g.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,'rgba(255,255,255,1)');r.addColorStop(.25,'rgba(255,255,255,.55)');r.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=r;g.fillRect(0,0,64,64);}
  const glowTexture=new T.CanvasTexture(glowCanvas),beamCanvas=document.createElement('canvas');beamCanvas.width=4;beamCanvas.height=64;{const g=beamCanvas.getContext('2d'),fade=g.createLinearGradient(0,0,0,64);fade.addColorStop(0,'#fff');fade.addColorStop(1,'#000');g.fillStyle=fade;g.fillRect(0,0,4,64);}
  const beamGeometry=new T.ConeGeometry(2.6,16,20,1,true);beamGeometry.translate(0,-8,0);beamGeometry.rotateX(-Math.PI/2);
  const beamMaterial=new T.MeshBasicMaterial({color:'#fff1d0',alphaMap:new T.CanvasTexture(beamCanvas),transparent:true,opacity:.07,blending:T.AdditiveBlending,depthWrite:false,side:T.DoubleSide,fog:false,toneMapped:false});
  const glow=(colour,size)=>{const sprite=new T.Sprite(new T.SpriteMaterial({map:glowTexture,color:colour,blending:T.AdditiveBlending,depthWrite:false,transparent:true,opacity:0,fog:false,toneMapped:false}));sprite.scale.setScalar(size);lampRig.add(sprite);return sprite;};
  const headlights=[-1,1].map(side=>{const lamp=new T.SpotLight('#fff0d2',0,0,.52,.8,1.5),beam=new T.Mesh(beamGeometry,beamMaterial),flare=glow('#fff3d8',.95);lamp.userData={side,beam,flare};beam.visible=false;beam.rotation.y=side*.03;lampRig.add(lamp,lamp.target,beam);return lamp;}),tailLight=new T.PointLight('#ff3626',0,7,2),brakeLamps=[-1,1].map(()=>glow('#ff2a1c',.6));lampRig.add(tailLight);
  // Road wash: real beams meet the ground at a grazing angle and light it poorly in a renderer. A soft lamp
  // high above the car, with no distance fall-off, carries the pool of light from about 8 m to 50 m ahead.
  const roadWash=new T.SpotLight('#ffeccc',0,0,.5,.9,0);roadWash.position.set(0,9,1);roadWash.target.position.set(0,0,23);car.add(roadWash,roadWash.target);
  const snowCount=420,snowBox=[44,18,44],snowPositions=new Float32Array(snowCount*3),snowGeometry=new T.BufferGeometry();for(let i=0;i<snowCount*3;i++)snowPositions[i]=(Math.random()-.5)*snowBox[i%3];
  snowGeometry.setAttribute('position',new T.BufferAttribute(snowPositions,3));const snow=new T.Points(snowGeometry,new T.PointsMaterial({color:'#ffffff',size:.12,transparent:true,opacity:0,depthWrite:false}));snow.frustumCulled=false;snow.visible=false;snow.name='Pass snow flurries';scene.add(snow);
  const lighting=()=>{const base=courseLighting(world?.course.theme);return night?{...base,sun:[38,72,-26],sunColour:'#b4c4ff',sunIntensity:.55,hemisphere:.22,environment:.06,exposure:.98,fog:'#080d18',near:90,far:820}:dusk?{...base,sun:[-80,15,-32],sunColour:'#ffae78',sunIntensity:2.5,hemisphere:.3,environment:.24,exposure:1.05,fog:'#d3a385',near:180,far:980,turbidity:7}:base;};
  function applyLighting(){
    const l=lighting();scene.fog.color.set(l.fog);scene.fog.near=l.near;scene.fog.far=l.far;hemisphere.intensity=l.hemisphere;hemisphere.color.set(night?'#93a7d6':dusk?'#ffd4b0':'#e9f2ff');sun.intensity=l.sunIntensity;sun.color.set(l.sunColour);scene.environmentIntensity=l.environment;
    skyUniforms.sunPosition.value.set(...l.sun);skyUniforms.turbidity.value=l.turbidity;skyUniforms.rayleigh.value=dusk?2.9:1.8;
    scene.background.set(night?'#060a14':dusk?'#e2b08b':skyColour);skyDome.visible=!night;stars.visible=night;
    for(const lamp of headlights){lamp.intensity=night?270:dusk?70:0;lamp.userData.beam.visible=night;lamp.userData.flare.material.opacity=night?.95:dusk?.45:0;}tailLight.intensity=night?1.6:0;roadWash.intensity=night?2.4:dusk?.45:0;
  }
  renderer.domElement.addEventListener('wheel',event=>{if(cameraMode!=='external')return;event.preventDefault();chaseZoom=Math.max(.7,Math.min(1.9,chaseZoom*(event.deltaY>0?1.1:.91)));},{passive:false});
  let wheels=[],gates=[],world,currentBody='',currentBuildKey='',cameraMode='external',firstCamera=true,paintMeshes=[],playerObjects=[],capturing=false,lastShot='',wheelTravel=0,inspectionWheel=null,inspecting=false,cabinControls=null,thumbnailElapsed=1,cabinMaterials=null,visualWheelRadius=.3465,visualBodyLift=0,visibleParts=[],mirrors=null,windowMaterials=[];
  let wheelPreview=null,thumbnailVisible=true,thumbnailFrames=0,tyreType='highway',vegetation=null;
  const cabinCamera=new T.PerspectiveCamera(68,16/10,.025,750),cabinTarget=new T.WebGLRenderTarget(384,240),pixels=new Uint8Array(384*240*4),flipped=new Uint8ClampedArray(pixels.length);
  cabinTarget.texture.colorSpace=T.SRGBColorSpace;
  const cameraPosition=new T.Vector3(),look=new T.Vector3(),aim=new T.Vector3();
  function resize(){if(capturing)return;const {width,height}=mount.getBoundingClientRect();if(!width||!height)return;renderer.setSize(width,height,false);camera.aspect=width/height;camera.updateProjectionMatrix();}
  const observer=new ResizeObserver(resize);observer.observe(mount);
  // Mountain pines are irrelevant to the urban training ground and desert.
  // Prepare only the selected scenery before constructing its landscape.
  async function prepareWorld(course){
    const tasks=[preloadRockAssets()];
    if(course.theme==='mountain')tasks.push(preloadVegetationAssets(),preloadAuthoredPines());
    await Promise.all(tasks);
  }
  async function loadVehicle(body,build={}){
    const {nameDecal,...visualDesign}=build.design||{};
    const buildKey=JSON.stringify({parts:build.parts||[],colour:build.colour,design:visualDesign});if(currentBody===body&&currentBuildKey===buildKey)return;
    const path=body==='3door'?__JIMNY_SWB_URL__:__JIMNY_MODEL_URL__;
    const gltf=await loadBodyModel(path);gltf.scene.updateMatrixWorld(true);surfaceStyler.clear();wheelRoot.userData.finishTarget='wheels';
mirrors?.dispose();mirrors=null;cabinControls?.dispose();cabinMaterials?.dispose();disposeCatalogueWheels(bodyRig.getObjectByName('SpareWheel'));dispose(bodyRig);disposeCatalogueWheels(wheelRoot);disposeWheelDesigns(wheelRoot);disposeTyreTypes(wheelRoot);dispose(wheelRoot);wheels=[];windowMaterials=[];car.position.set(0,0,0);car.rotation.set(0,0,0);bodyRig.position.set(0,0,0);bodyRig.rotation.set(0,0,0);car.updateMatrixWorld(true);
    const design={...(build.design||{}),drivingPreview:true},colour=typeof build.colour==='string'&&/^#[\da-f]{6}$/i.test(build.colour)?build.colour:'#728773';
    const paint=new T.MeshPhysicalMaterial({color:colour,...paintFinish(design.finish),metalness:['#727973','#8a9099'].includes(colour.toLowerCase())?.35:['#364b72','#5a6fd6','#8d1c25'].includes(colour.toLowerCase())?.10:0});
    paint.envMap=paintEnvironment;paint.envMapIntensity=.40;paint.userData.vehiclePaint=true;
    const roof=paint.clone();if(design.finish==='twotone'){roof.color.set(/^#[0-9a-f]{6}$/i.test(design.roofColour||'')?design.roofColour:'#141b22');roof.envMapIntensity=.18;}
    const parts=new Set(normalizeExteriorParts(resolvePreviewParts(build.parts||[],window.JIMNY_MARKET_PRODUCTS||[]).filter(id=>body!=='3door'||['tires','flares','snorkel','mod_reardoor_molle','skinnyjim_backbone','skinnyjim_jerry_tray','seats','doortrim'].includes(id)||globalThis.JimnyPracticalParts?.[id]?.bodyStyles.includes(body)||EXTERIOR_PARTS[id]?.bodyStyles.includes(body)),body));
    tyreType=resolveTyreType(design,parts);if(tyreType==='highway')parts.delete('tires');else parts.add('tires');
    // Geometry follows the saved Garage stance. The solver deliberately retains
    // representative stock mechanics; this is not a measured aftermarket tune.
    visualWheelRadius=parts.has('tires')?.368:.3465;
    visualBodyLift=(parts.has('lift')?.055:0)+(visualWheelRadius-.3465);
    const grille=parts.has('autostylenn_big_suzuki_grille')?'block':parts.has('autostylenn_cursive_grille')?'script-loop':parts.has('autostylenn_s_grille')?'smesh':design.grille;
    const selectedGrille={oem:'OEMGrille',block:'BlockGrille',rhino:'RhinoGrille',script:'ScriptGrille','script-loop':'ScriptGrille','script-modern':'ScriptGrille',chrome:'GlossGrille',delete:'DeleteGrille',classic:'ClassicGrille',mesh:'MeshGrille',smesh:'MeshGrille'}[grille]||'OEMGrille';
    gltf.scene.traverse(o=>{if(!o.isMesh)return;const material=o.material;applyMaterialProfile(material);if(['BrightChrome','MachinedAlloy','GrilleLettering','OpticalGlass'].includes(material.name))material.vertexColors=false;if(material.name==='BodyPaint')o.material=paint;else if(material.name==='RoofPaint')o.material=roof;else if(material.name==='WindowGlass'){o.material=new T.MeshPhysicalMaterial({color:'#3f585b',roughness:.09,metalness:0,transparent:true,opacity:.63,depthWrite:false});o.material.name='WindowGlass';}o.castShadow=!o.material.transparent&&material.name!=='IntakeShadow';o.receiveShadow=true;});
    const stock=gltf.scene.getObjectByName(parts.has('tires')?'AllTerrainWheels':'StockWheels'),wb=body==='3door'?2.25:2.59;
    // Split the baked four-wheel assembly spatially, retaining authored rims/tyres.
    for(let i=0;i<4;i++){
      const side=i%2?1:-1,front=i<2?1:-1,halfTrack=parts.has('tires')?.750:front>0?.6975:.7025,pivot=new T.Group(),spin=new T.Group();pivot.position.set(side*halfTrack,visualWheelRadius,front*wb/2);pivot.add(spin);wheelRoot.add(pivot);
      const marker=new T.Mesh(new T.TorusGeometry(.374,.009,8,64),new T.MeshBasicMaterial({color:'#e5ac56'}));marker.rotation.y=Math.PI/2;marker.position.x=side*.115;marker.visible=false;pivot.add(marker);wheels.push({pivot,spin,side,front,marker});
      stock.traverse(o=>{if(!o.isMesh)return;const source=o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone(),geo=new T.BufferGeometry();
        // Meshopt uses normalized integer attributes. Decode via accessors before
        // baking world transforms; writing transformed floats into int16 loses wheels.
        for(const [name,attr] of Object.entries(source.attributes)){const values=[];for(let k=0;k<attr.count;k++)for(let n=0;n<attr.itemSize;n++)values.push(attr.getComponent(k,n));geo.setAttribute(name,new T.Float32BufferAttribute(values,attr.itemSize));}
        source.dispose();geo.applyMatrix4(o.matrixWorld);const p=geo.attributes.position,keep=[];
        for(let j=0;j<p.count;j+=3){const x=(p.getX(j)+p.getX(j+1)+p.getX(j+2))/3,z=(p.getZ(j)+p.getZ(j+1)+p.getZ(j+2))/3;if(Math.sign(x)===side&&Math.sign(z)===front)keep.push(j,j+1,j+2);}
        if(keep.length){const out=new T.BufferGeometry();for(const [name,attr] of Object.entries(geo.attributes)){const values=[];for(const k of keep)for(let n=0;n<attr.itemSize;n++)values.push(attr.array[k*attr.itemSize+n]);out.setAttribute(name,new T.Float32BufferAttribute(values,attr.itemSize));}out.translate(-side*halfTrack,-visualWheelRadius,-front*wb/2);const item=new T.Mesh(out,o.material.clone());item.castShadow=true;item.receiveShadow=true;spin.add(item);}geo.dispose();
      });
    }
    if(design.partColours?.wheels)applyWheelColour(wheelRoot,design.partColours.wheels);else applyWheelFinish(wheelRoot,design.wheelFinish);
    const selectedWheel=WHEEL_PARTS.find(p=>parts.has(p.visual))?.visual||(body==='5door'&&parts.has('suzuki_nomade_steelwheel'));applyCatalogueWheel(wheelRoot,selectedWheel,design.wheelFinish,design.partColours?.wheels);if(!selectedWheel)applyWheelDesign(wheelRoot,design);
    applyTyreType(wheelRoot,tyreType);
    const badge=extractFactoryBadge(gltf.scene.getObjectByName('OEMGrille'));
    if(selectedGrille==='ScriptGrille')configureScriptGrille(gltf.scene.getObjectByName(selectedGrille),grille);
    applyGrilleColours(gltf.scene.getObjectByName(selectedGrille),design,colour,body);
    fitSteeringBadge(gltf.scene.getObjectByName('Cabin'),badge,body);
    for(const name of ['BodyShell','RoofShell',selectedGrille,...(parts.has('bull')||parts.has('autostylenn_bumper_v1')?[]:['StockBumper']),...(parts.has('headlamps')?[]:['StockHeadlamps']),'Cabin','SpareWheel']){const o=gltf.scene.getObjectByName(name);if(o)bodyRig.attach(o);}
    const spare=bodyRig.getObjectByName('SpareWheel');separateSpareEmblem(spare,body);if(design.partColours?.wheels)applyWheelColour(spare,design.partColours.wheels);else applyWheelFinish(spare,design.wheelFinish);if(selectedWheel)applyCatalogueWheel(spare,selectedWheel,design.wheelFinish,design.partColours?.wheels);else applyWheelDesign(spare,design);updateSpareEmblem(spare,body,{...design,grille});
    const accessories=new T.Group();accessories.name='GarageAccessories';bodyRig.add(accessories);const materials=accessoryMaterials();materials.upholstery.color.set(({tan:'#a38b69',saddle:'#854d31',olive:'#59624d',stone:'#b3b1a5',black:'#303332'})[design.cabin]||'#a38b69');
    const emitters=Object.fromEntries(Object.entries(LIGHT_PROFILES).map(([id,p])=>[id,new T.MeshStandardMaterial({color:p.colour,roughness:.12,metalness:.1})]));
    visibleParts=accessoryBuilder({accessoryRig:accessories,mats:materials,detailed:{sBadgeGeometry:badge},modelBody:body,colour,effectiveDesign:design,lampEmitters:emitters})(parts,{...design,grille});
    if(body==='5door'&&parts.has('suzuki_nomade_steelwheel'))visibleParts.push('suzuki_nomade_steelwheel');
    visibleParts.push(...WHEEL_PARTS.filter(p=>parts.has(p.visual)).map(p=>p.visual));
    if(grille==='smesh'){const emblem=new T.Mesh(badge,materials.chrome);emblem.userData.grilleBadge=true;accessories.add(emblem);applyGrilleColours(emblem,design,colour,body);}else badge.dispose();
    cabinMaterials=applyCabinMaterials(bodyRig.getObjectByName('Cabin'));
    applyCabinUpgrades(bodyRig.getObjectByName('Cabin'),{body,seats:parts.has('seats'),fabric:design.seatFabric,colour:'#'+materials.upholstery.color.getHexString(),touring:parts.has('touring'),camp:false});
    const cabin=bodyRig.getObjectByName('Cabin');cabinControls=createCabinControls(bodyRig,separateCabinControls(cabin,bodyRig,body),body);
    bodyRig.traverse(o=>{if(o.isMesh&&o.material.name==='WindowGlass'&&o.material.transparent)windowMaterials.push(o.material);});
    mirrors=createVehicleMirrors({renderer,scene,vehicleRoot:bodyRig,body});
    protectMirrorSurfaces(bodyRig,body);
    const cabinFill=new T.PointLight('#f3eee0',.22,2.1,2);cabinFill.position.set(0,1.5,-.08+(body==='3door'?-.17:0));bodyRig.add(cabinFill);
    paintMeshes=[];playerObjects=[];bodyRig.traverse(o=>{if(o.isMesh&&o.material===paint)paintMeshes.push(o);});projectBodyDecals(paintMeshes,bodyRig,design.decal,colour,design.decalColour);
    // Dispose unused alternative assemblies after the visible geometry is detached.
    const used=new Set();bodyRig.traverse(o=>{if(o.material)used.add(o.material);});gltf.scene.traverse(o=>{o.geometry?.dispose();if(o.material&&!used.has(o.material))o.material.dispose();});
    surfaceStyler.apply([bodyRig,wheelRoot],design);
    bodyRig.position.y=visualBodyLift;currentBody=body;currentBuildKey=buildKey;firstCamera=true;thumbnailElapsed=1;
    if(!daylightRequested){daylightRequested=true;loadDaylight();}
  }
  function setPlayer(profile){
    for(const o of playerObjects){o.traverse(m=>m.material?.map?.dispose());bodyRig.remove(o);dispose(o);}
    // DecalGeometry expects an unposed vehicle while projecting into local space.
    const cp=car.position.clone(),cr=car.rotation.clone(),br=bodyRig.rotation.clone();car.position.set(0,0,0);car.rotation.set(0,0,0);bodyRig.rotation.set(0,0,0);car.updateMatrixWorld(true);
    // Human avatars are deliberately retired from this phase. Keep player
    // identity/name decals, but never load a saved avatar or a fallback body.
    playerObjects=[createNameDecals(profile.decal?profile.name:'',currentBody,paintMeshes,bodyRig,profile.nameStyle||{})];bodyRig.add(...playerObjects);car.position.copy(cp);car.rotation.copy(cr);bodyRig.rotation.copy(br);car.updateMatrixWorld(true);
  }
  let gateRoot=null,gateKey='';
  function setWorld(nextWorld,nextGates){
    const sameWorld=world===nextWorld,nextGateKey=JSON.stringify(nextGates);
    if(sameWorld&&gateKey===nextGateKey)return;
    if(!sameWorld){dispose(worldRoot);gateRoot=null;world=nextWorld;}
    if(gateRoot){dispose(gateRoot);worldRoot.remove(gateRoot);gateRoot=null;}
    gates=[];const course=world.course,isSand=course.theme==='sand',isUrban=course.theme==='urban';
    if(!sameWorld){
    const sky=isSand?'#dfc7aa':isUrban?'#cad3d2':'#c3d2d0';skyColour=sky;scene.background=new T.Color(sky);
    // A near-white450m fog wall bleached the valley/trees beneath an unfogged
    // mountain backdrop. Extend aerial perspective across the whole valley.
    const daylight=courseLighting(course.theme);scene.fog.color.set(daylight.fog);
    scene.fog.near=daylight.near;scene.fog.far=daylight.far;loadSky(course.theme);
    // Cloud-filtered daylight: broad sky fill keeps shadow-side rock and tread
    // readable without lifting the exposure or bleaching the sunlit gravel.
    hemisphere.intensity=daylight.hemisphere;sun.intensity=daylight.sunIntensity;scene.environmentIntensity=daylight.environment;
    sun.color.set(daylight.sunColour);skyUniforms.sunPosition.value.set(...daylight.sun);
    createLandscape(world,worldRoot);
    if(course.id==='mountain')worldRoot.add(createHimachalLandmarks(world));
    vegetation=worldRoot.getObjectByName('Layered vegetation');
    // Base camp remains outside the drivable line.
    const a=companion(worldRoot,-10,-8),b=companion(worldRoot,10,-11,true);a.position.y=world.height(-10,-8);b.position.y=world.height(10,-11);
    for(let i=0;i<7;i++){const x=-13+i*4;mesh(new T.ConeGeometry(.18,.5,8),mat('#b8643c'),worldRoot,x,world.height(x,-3)+.25,-3);}
    }
    gateRoot=new T.Group();worldRoot.add(gateRoot);gateKey=nextGateKey;
    const post=mat('#eae7ce'),active=mat('#d37740'),inactive=mat('#736d55');
    nextGates.forEach((gate,i)=>{const g=new T.Group();gateRoot.add(g);const yaw=gateHeading(nextGates,i);g.position.set(gate.x,gate.elevation??world.height(gate.x,gate.z),gate.z);g.rotation.y=yaw;
      for(const side of [-1,1]){mesh(new T.CylinderGeometry(.035,.035,1.45,6),post,g,side*gate.radius,.725,0);box(g,.36,.33,.035,side*gate.radius,.98,0,(i===0?active:inactive).clone());}
      gates.push(g);
    });
    const end=nextGates.at(-1);if(end){const yaw=gateHeading(nextGates,nextGates.length-1),c=Math.cos(yaw),s=Math.sin(yaw),stripe=(x,z,w,d)=>{const wx=end.x+x*c+z*s,wz=end.z-x*s+z*c,o=box(gateRoot,w,.025,d,wx,world.height(wx,wz)+.025,wz,post);o.rotation.y=yaw;};for(let i=-4;i<=4;i++)for(const side of [-1,1])stripe(side*end.radius,i,.08,.9);for(const offset of [-4,4])stripe(0,offset,end.radius*2,.08);}
    applyLighting();
    firstCamera=true;
  }
  function render(state,index,dt,shot=''){
    car.position.set(state.x,state.y,state.z);car.rotation.y=state.yaw;applyVehicleVisualPose(bodyRig,wheels,state,visualBodyLift);contact.position.set(state.x,(world?.height(state.x,state.z)||0)+.015,state.z);contact.rotation.set(-Math.PI/2,0,-state.yaw);
    wheelTravel=state.wheelTravel??(wheelTravel+state.speed*dt);
    wheels.forEach(({pivot,spin,marker},i)=>{const point=state.wheelCenters?.[i];if(point){const dx=point.x-state.x,dz=point.z-state.z,c=Math.cos(state.yaw),n=Math.sin(state.yaw);pivot.position.set(dx*c-dz*n,point.y-state.y+visualWheelRadius-.3465,dx*n+dz*c);}else pivot.position.y=visualWheelRadius+state.wheelHeights[i]-state.y;spin.rotation.x=state.wheelRotations?.[i]??wheelTravel/visualWheelRadius;marker.visible=inspectionWheel===i||(cameraMode==='wheels'&&!shot&&focusWheel===i);if(marker.visible)marker.material.color.set(state.wheelContacts?.[i]===false?'#ff5a4d':'#e5ac56');});
    cabinControls?.update(state);
    // Lamps: follow the body, sit at the real lamp positions for this wheelbase, and brighten the rear on braking.
    {const half=(currentBody==='3door'?2.25:2.59)/2;lampRig.position.copy(bodyRig.position);lampRig.quaternion.copy(bodyRig.quaternion);
     for(const lamp of headlights){const side=lamp.userData.side;lamp.position.set(side*.53,.94,half+.6);lamp.target.position.set(side*.9,.55,half+46);lamp.userData.beam.position.copy(lamp.position);lamp.userData.flare.position.set(side*.53,.94,half+.72);}
     brakeGlow+=((state.braking>.05||state.gear==='R'&&state.throttle>.05?1:night?.3:0)-brakeGlow)*Math.min(1,dt*14||1);brakeLamps.forEach((lampGlow,i)=>{lampGlow.position.set((i?1:-1)*.6,.66,-half-.82);lampGlow.material.opacity=brakeGlow;});tailLight.position.set(0,.7,-half-.9);}
    gates.forEach((g,i)=>{g.visible=i>=index||(inspecting&&i===index-1);g.children.forEach(o=>{if(o.geometry?.type==='RoundedBoxGeometry')o.material.color.set(i===index?'#d37740':'#736d55');});});
    const yaw=state.yaw,c=Math.cos(yaw),n=Math.sin(yaw),portrait=camera.aspect<1;
    const internal=['interior','dashboard','controls'].includes(cameraMode)&&!shot,bonnet=cameraMode==='bonnet';
    // The chase view opens slightly with speed; it is a camera effect, not a speed boost.
    speedFov+=((cameraMode==='external'&&!shot&&!reducedMotion?Math.min(1,Math.max(0,Math.abs(state.speed)*3.6-25)/55)*7:0)-speedFov)*Math.min(1,dt*2.5);
    const fov=(internal?(cameraMode==='interior'&&!portrait?65:76):cameraMode==='external'||shot==='chase'?54:47)+(speedFov>.02?speedFov:0),near=internal?.025:bonnet?.05:.1;
    if(camera.fov!==fov||camera.near!==near){camera.fov=fov;camera.near=near;camera.updateProjectionMatrix();}
    const wheelsView=cameraMode==='wheels'&&!shot,wheelSide=focusWheel%2?1:-1,wheelEnd=focusWheel<2?1:-1,wheelbase=currentBody==='3door'?2.25:2.59;
    if(cameraMode==='external'||internal){
      // The orbit angle is smoothed, not the position, so the car cannot pull away from the camera under acceleration.
      if(firstCamera)chaseYaw=state.yaw;else chaseYaw+=Math.atan2(Math.sin(state.yaw-chaseYaw),Math.cos(state.yaw-chaseYaw))*(1-Math.exp(-dt*4.5));
      const pace=Math.min(1,Math.abs(state.speed)/18),back=((portrait?7.6:6.4)+pace*1.6)*chaseZoom,cn=Math.sin(chaseYaw),cc=Math.cos(chaseYaw);
      cameraPosition.set(state.x-cn*back+cc*.4,state.y+((portrait?3.5:2.5)+pace*.4)*Math.max(.85,chaseZoom),state.z-cc*back-cn*.4);
    }
    // Low three-quarter view of one corner, for seeing what a wheel is hung up on.
    else if(wheelsView){const lx=wheelSide*3.3,lz=wheelEnd*(wheelbase/2+2.3);cameraPosition.set(state.x+lx*c+lz*n,state.y+1.2,state.z+lz*c-lx*n);}
    else if(bonnet)cameraPosition.set(state.x+n*1.2,state.y+1.8,state.z+c*1.2);
    else{const o=portrait?OVERVIEW.portrait:OVERVIEW.landscape;cameraPosition.set(state.x+c*o.side-n*o.back,state.y+o.height,state.z-n*o.side-c*o.back);}
    cameraPosition.y=Math.max(cameraPosition.y,(world?.height(cameraPosition.x,cameraPosition.z)||0)+1);
    const ahead=bonnet?12:cameraMode==='overview'?(portrait?OVERVIEW.portrait:OVERVIEW.landscape).ahead:portrait?2:5;
    aim.set(state.x+n*ahead,state.y+(bonnet?1.1:cameraMode==='external'?1.4:1.6),state.z+c*ahead);
    if(wheelsView){const lx=wheelSide*.35,lz=wheelEnd*wheelbase*.35;aim.set(state.x+lx*c+lz*n,state.y+.35,state.z+lz*c-lx*n);}
    // Lift the chase camera over a crest or bank that would hide the car.
    if(cameraMode==='external'&&!shot&&world){let lift=0;for(const t of [.3,.55,.8]){const need=world.height(state.x+(cameraPosition.x-state.x)*t,state.z+(cameraPosition.z-state.z)*t)+.5,line=state.y+1.3+(cameraPosition.y-state.y-1.3)*t;if(need>line)lift=Math.max(lift,(need-line)/t);}cameraPosition.y+=Math.min(6,lift);}
    if(bonnet){bodyRig.updateWorldMatrix(true,true);const pose=bonnetPose(bodyRig);cameraPosition.copy(pose.position);aim.copy(pose.target);}
    if(internal){bodyRig.updateWorldMatrix(true,true);const offset=currentBody==='3door'?-.17:0;if(cameraMode==='controls'){cameraPosition.copy(bodyRig.localToWorld(new T.Vector3(.03,1.52,-.24+offset)));aim.copy(bodyRig.localToWorld(new T.Vector3(-.18,1.055,.27+offset)));}else{const pose=cockpitPose(bodyRig,null,currentBody,cameraMode);cameraPosition.copy(pose.position);aim.copy(pose.target);}}
    if(shot){
      const wb=currentBody==='3door'?2.25:2.59,poses={chase:[.5,3.1,-10,0,1.6,5],front:[-4,2.1,6,0,.85,.3],side:[-6.8,1.65,.3,0,.85,0],overview:[8,7,-8,0,.5,0],'front-wheel':[-2.2,.65,wb/2+.75,-.7,.48,wb/2],'rear-wheel':[-2.2,.58,-wb/2-.7,-.7,.48,-wb/2]};
      poses['front-wheel-left']=[2.2,.65,wb/2+.75,.7,.48,wb/2];poses['rear-wheel-left']=[2.2,.58,-wb/2-.7,.7,.48,-wb/2];
      const wi={'front-wheel':0,'front-wheel-left':1,'rear-wheel':2,'rear-wheel-left':3}[shot];if(wi!==undefined){const lift=state.wheelHeights[wi]-state.y;poses[shot][1]+=lift;poses[shot][4]+=lift;}
      const p=poses[shot]||poses.chase,wide=camera.aspect<1&&!shot.includes('wheel')?1.32:1;
      cameraPosition.set(state.x+(p[0]*c+p[2]*n)*wide,state.y+p[1],state.z+(p[2]*c-p[0]*n)*wide);cameraPosition.y=Math.max(cameraPosition.y,world.height(cameraPosition.x,cameraPosition.z)+.16);
      aim.set(state.x+p[3]*c+p[5]*n,state.y+p[4],state.z+p[5]*c-p[3]*n);if(lastShot!==shot)firstCamera=true;
    }
    lastShot=shot;
    // Tracking shots are vehicle-relative. Different camera/target damping
    // otherwise drags the wheel out of frame as the vehicle accelerates.
    if(firstCamera||shot||internal||bonnet){camera.position.copy(cameraPosition);look.copy(aim);firstCamera=false;}// The chase view follows closely in plan but eases vertically, so bumps move the car and not the whole picture.
    else if(cameraMode==='external'){const k=1-Math.exp(-dt*12),ky=1-Math.exp(-dt*5);camera.position.x+=(cameraPosition.x-camera.position.x)*k;camera.position.z+=(cameraPosition.z-camera.position.z)*k;camera.position.y+=(cameraPosition.y-camera.position.y)*ky;look.x+=(aim.x-look.x)*k;look.z+=(aim.z-look.z)*k;look.y+=(aim.y-look.y)*ky;}
    else{camera.position.lerp(cameraPosition,1-Math.exp(-dt*5));look.lerp(aim,1-Math.exp(-dt*7));}
    shake*=Math.exp(-dt*9);
    if(shake>.002&&!shot){const t=performance.now()*.06;camera.lookAt(look.x+Math.sin(t*1.7)*shake,look.y+Math.cos(t*2.3)*shake,look.z+Math.sin(t*1.1)*shake);}else camera.lookAt(look);
    skyDome.position.copy(camera.position);stars.position.copy(camera.position);const sunOffset=lighting().sun;sun.position.set(state.x+sunOffset[0],state.y+sunOffset[1],state.z+sunOffset[2]);sun.target.position.set(state.x,state.y,state.z);
    windowMaterials.forEach(material=>material.opacity=internal?.16:.63);
    renderer.toneMappingExposure=internal?1.08:lighting().exposure;
    vegetation?.userData.update?.(camera);
    mirrors?.setEnabled(internal);mirrors?.update(camera,dt);
    camera.userData.skipRiverReflection=internal;
    dust.update(state,world,dt,camera,renderer.domElement.height);
    // Light flurries high on the pass. Flakes live in world space and wrap round the camera.
    {const amount=world.course.theme==='mountain'&&!internal?Math.min(1,Math.max(0,(camera.position.y-46)/16)):0;snow.visible=amount>.02;
     if(snow.visible){snow.material.opacity=.85*amount;if(dt>0){for(let i=0;i<snowCount;i++){const k=i*3;snowPositions[k]+=dt*(.9+(i%5)*.12);snowPositions[k+1]-=dt*(1.5+(i%7)*.16);snowPositions[k+2]+=dt*.35;
        for(let axis=0;axis<3;axis++){const centre=axis===0?camera.position.x:axis===1?camera.position.y+2:camera.position.z,size=snowBox[axis];let offset=snowPositions[k+axis]-centre;if(offset>size/2||offset<-size/2){offset=((offset+size/2)%size+size)%size-size/2;snowPositions[k+axis]=centre+offset;}}}
       snowGeometry.attributes.position.needsUpdate=true;}}}
    if(dt>0)for(const token of tokenRoot.children){token.rotation.y+=dt*1.8;if(!token.userData.taken)token.position.y=token.userData.baseY+Math.sin(performance.now()*.003+token.position.x)*.12;else{token.scale.multiplyScalar(Math.max(0,1-dt*9));token.position.y+=dt*4;if(token.scale.x<.05)token.visible=false;}}
    const target=!shot&&!inspecting?(gates[index]||beaconTarget):null;beacon.visible=false;
    if(target){const distance=Math.hypot(target.position.x-state.x,target.position.z-state.z),fade=Math.min(1,Math.max(0,(distance-10)/22)),width=Math.max(.55,distance*.009);beacon.position.copy(target.position);beacon.scale.set(width,1,width);beacon.material.opacity=fade*(reducedMotion?.38:.34+.1*Math.sin(performance.now()*.004));beacon.visible=fade>.01;}
    renderer.render(scene,camera);
    thumbnailElapsed+=dt;
    const thumbnail=document.getElementById('cabinThumbnail');
    if(!capturing&&thumbnailVisible&&thumbnail&&thumbnailElapsed>=.1){thumbnailElapsed=0;const offset=currentBody==='3door'?-.17:0;
      const wheel=wheels[wheelPreview],pose=wheelPreview!==null&&wheel?wheelPreviewPose(state,wheelPreview,wheel.pivot.getWorldPosition(new T.Vector3())):null;
      cabinCamera.fov=pose?47:68;cabinCamera.near=pose?.04:.025;cabinCamera.updateProjectionMatrix();
      if(pose){cabinCamera.position.copy(pose.position);cabinCamera.position.y=Math.max(cabinCamera.position.y,(world?.height(pose.position.x,pose.position.z)??-Infinity)+.12);cabinCamera.lookAt(pose.target);}
      else{cabinCamera.position.copy(bodyRig.localToWorld(new T.Vector3(.03,1.52,-.24+offset)));cabinCamera.lookAt(bodyRig.localToWorld(new T.Vector3(-.18,1.055,.27+offset)));}
      const autoShadow=renderer.shadowMap.autoUpdate;renderer.shadowMap.autoUpdate=false;
      windowMaterials.forEach(material=>material.opacity=pose?.63:.16);
      renderer.toneMappingExposure=pose?1.05:1.08;renderer.setRenderTarget(cabinTarget);renderer.render(scene,cabinCamera);renderer.readRenderTargetPixels(cabinTarget,0,0,384,240,pixels);renderer.setRenderTarget(null);renderer.shadowMap.autoUpdate=autoShadow;renderer.toneMappingExposure=internal?1.08:1.05;windowMaterials.forEach(material=>material.opacity=internal?.16:.63);
      for(let y=0;y<240;y++)flipped.set(pixels.subarray(y*384*4,(y+1)*384*4),(239-y)*384*4);
      thumbnail.getContext('2d').putImageData(new ImageData(flipped,384,240),0,0);
      thumbnailFrames++;
    }
  }
  return {loadVehicle,prepareWorld,setPlayer,setWorld,render,canvas:renderer.domElement,setInspection(index,active=true){inspectionWheel=index;inspecting=active;},
    setWheelPreview(index){const next=Number.isInteger(index)&&index>=0&&index<4?index:null;if(next!==wheelPreview)thumbnailElapsed=1;wheelPreview=next;return wheelPreview;},
    setThumbnailVisible(visible){thumbnailVisible=Boolean(visible);if(thumbnailVisible)thumbnailElapsed=1;return thumbnailVisible;},
    beginCapture(width,height){capturing=true;renderer.setPixelRatio(1);renderer.setSize(width,height,false);camera.aspect=width/height;camera.updateProjectionMatrix();firstCamera=true;},
    endCapture(){capturing=false;renderer.setPixelRatio(pixelRatio());resize();firstCamera=true;lastShot='';},
    setCamera(mode){cameraMode=normalizeDrivingCamera(mode);firstCamera=true;return cameraMode;},
    // Screen position and horizontal bearing (positive = screen right) of a world point, from the last rendered frame.
    project(x,y,z){projected.set(x,y,z).applyMatrix4(camera.matrixWorldInverse);const bearing=Math.atan2(projected.x,-projected.z);projected.applyMatrix4(camera.projectionMatrix);return {ndcX:projected.x,ndcY:projected.y,bearing};},
    impact(strength){if(!reducedMotion)shake=Math.min(.3,shake+Math.max(0,strength));},
    setResolutionScale(value){const next=Math.max(.5,Math.min(1,value));if(Math.abs(next-resolutionScale)<.005)return resolutionScale;resolutionScale=next;if(!capturing)renderer.setPixelRatio(pixelRatio());return resolutionScale;},
    setShadowSize(size){if(sun.shadow.mapSize.x===size)return;sun.shadow.mapSize.set(size,size);sun.shadow.map?.dispose();sun.shadow.map=null;},
    defaultShadowSize:shadowSize,
    setTokens(list=[]){tokenRoot.clear();for(const item of list){const token=new T.Group(),body=new T.Mesh(tokenGeometry,tokenMaterial),stem=new T.Mesh(stemGeometry,stemMaterial),leaf=new T.Mesh(leafGeometry,leafMaterial);stem.position.y=.5;leaf.position.set(.15,.56,0);leaf.rotation.z=-.5;body.castShadow=true;token.add(body,stem,leaf);token.userData.baseY=item.y+1.2;token.position.set(item.x,item.y+1.2,item.z);tokenRoot.add(token);}},
    setTimeOfDay(mode){night=mode==='night';dusk=mode==='dusk';if(world)applyLighting();return night?'night':dusk?'dusk':'day';},
    // A free-standing beacon for events without gates. Pass null to clear it.
    setBeaconTarget(point){beaconTarget=point?{position:new T.Vector3(point.x,point.y,point.z)}:null;},
    takeToken(index){const token=tokenRoot.children[index];if(token)token.userData.taken=true;},
    setFocusWheel(index){focusWheel=Number.isInteger(index)&&index>=0&&index<4?index:0;return focusWheel;},
    setChaseZoom(value){chaseZoom=Math.max(.7,Math.min(1.9,value));return chaseZoom;},
    cycleCamera(){const modes=DRIVING_CAMERAS;cameraMode=modes[(modes.indexOf(cameraMode)+1)%modes.length];firstCamera=true;return cameraMode;},
    cameraState:()=>({scannedRocks:rockAssetsReady(),mode:cameraMode,timeOfDay:night?'night':dusk?'dusk':'day',snow:snow.visible,headlights:headlights[0].intensity,roadWash:roadWash.intensity,focusWheel,chaseZoom,tokens:tokenRoot.children.filter(token=>!token.userData.taken).length,distance:camera.position.distanceTo(car.position),position:camera.position.toArray(),target:look.toArray(),cabin:cabinControls?.snapshot(),mirrors:mirrors?.snapshot(),body:currentBody,parts:[...visibleParts],wheelRadius:visualWheelRadius,bodyLift:bodyRig.position.y,tyreType,surfaceStyles:surfaceStyler.snapshot(),thumbnail:{visible:thumbnailVisible,wheel:wheelPreview,frames:thumbnailFrames,position:cabinCamera.position.toArray()}}),resetCamera(){firstCamera=true;},info:()=>({...renderer.info.render,resolutionScale,shadowSize:sun.shadow.mapSize.x,dust:dust.active,beacon:beacon.visible}),dispose(){surfaceStyler.clear();disposed=true;dust.dispose();for(const item of [tokenGeometry,tokenMaterial,stemGeometry,stemMaterial,leafGeometry,leafMaterial,starGeometry,stars.material,snowGeometry,snow.material,beamGeometry,beamMaterial.alphaMap,beamMaterial,glowTexture])item.dispose();beacon.geometry.dispose();beacon.material.alphaMap.dispose();beacon.material.dispose();skyRequest++;skies.forEach(entry=>{entry.texture.dispose();entry.environment.dispose();});skies.clear();skyDome.geometry.dispose();skyDome.material.dispose();observer.disconnect();mirrors?.dispose();cabinControls?.dispose();cabinMaterials?.dispose();cabinTarget.dispose();dispose(worldRoot);disposeCatalogueWheels(bodyRig.getObjectByName('SpareWheel'));dispose(bodyRig);disposeCatalogueWheels(wheelRoot);disposeWheelDesigns(wheelRoot);disposeTyreTypes(wheelRoot);dispose(wheelRoot);disposeRockAssets();disposeVegetationAssets();disposeAuthoredPineAssets();env.dispose();daylightEnvironment?.dispose();renderer.dispose();}};
}
