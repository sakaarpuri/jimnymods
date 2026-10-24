import {accessoryBuilder} from './accessories.js';
import {applyCabinMaterials,applySeatCoverPalette} from './trail/cabin-materials.js';
import {applyCabinUpgrades} from './cabin-upgrades.js';
import {separateCabinControls,createCabinControls} from './trail/cabin.js';
import {applyWheelFinish,applyWheelColour} from './wheel-finishes.js';
import {createSurfaceStyler,markSurfaceMaterials,protectMirrorSurfaces} from './surface-finishes.js';
import {applyGrilleColours} from './grille-colours.js';
import {fitSteeringBadge} from './steering-badge.js';
import {INTERIOR_VIEWS,CUTAWAY_VIEWS,insidePose} from './garage-cameras.js';
import {createNameDecals} from './trail/player.js';
import {cleanPlayerName} from './trail/replay.js';
import {installPartPicker} from './part-picking.js';
import {applyCatalogueWheel,disposeCatalogueWheels} from './catalogue-parts.js';
import {applyTyreType,resolveTyreType} from './tyre-types.js';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { GroundedSkybox } from 'three/addons/objects/GroundedSkybox.js';
import { UltraHDRLoader } from 'three/addons/loaders/UltraHDRLoader.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';
import { loadBodyModel } from './model-loader.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { LIGHT_PROFILES, resolvePreviewParts, activeLightProfiles } from './lighting.js';
import { SCENERIES, validScenery, sceneryMessage, sceneryURL } from './scenery.js';
import { applyMaterialProfile, paintFinish } from './physical-materials.js';
import { createContactShadow } from './contact-shadow.js';
import { browserQuality } from './quality.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { projectBodyDecals } from './decals.js';
import { slimlineRack, fittedVisors, mouldedSpareCover, extractFactoryBadge } from './refined-parts.js';

// Original, dimensionally approximate Jimny planning geometry. No third-party vehicle asset.
const mount=document.getElementById('viewer3d');
const status=document.getElementById('viewerStatus');
// Orbit stays well inside the smallest projected scenery floor (the garage).
const CAMERA_RADIUS=8.1;
const canvasLabel='Interactive Jimny modification preview. Click a part to edit; drag to orbit, scroll or pinch to zoom.';
let renderer;
try {renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'low-power'});}
catch {mount.classList.add('unavailable');status.textContent='3D is unavailable in this browser. Your parts list and estimates still work.';}

if(renderer){
  const scene=new THREE.Scene();scene.background=new THREE.Color('#efefed');
  const camera=new THREE.PerspectiveCamera(28,1,.1,250);camera.position.set(4.25,1.62,5.35);
  const quality=browserQuality();mount.dataset.quality=quality.id;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,quality.maxPixelRatio));
  renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.VSMShadowMap;
  // ACES filmic rolls highlights off instead of clipping them. Measured against the
  // paint swatches it kept hue and saturation closest; AgX greyed yellows and reds.
  renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=.95;
  renderer.domElement.setAttribute('aria-label',canvasLabel);renderer.domElement.setAttribute('role','img');renderer.domElement.tabIndex=0;
  mount.appendChild(renderer.domElement);
  // A neutral generated room lights the car until the photographed garage arrives,
  // and remains the fallback if an HDRI fails and the neutral night test ground.
  const pmrem=new THREE.PMREMGenerator(renderer);const env=new RoomEnvironment();
  const fallbackEnvironment=pmrem.fromScene(env,.04);scene.environment=fallbackEnvironment.texture;scene.environmentIntensity=.7;env.dispose();pmrem.dispose();
  const hemi=new THREE.HemisphereLight('#f6f8fa','#747572',1.35);scene.add(hemi);
  // The photographed scenery carries the light. This light restores the sun the
  // HDRI encoding clipped, or in sunless scenes only supplies the floor's shadow mask.
  const sun=new THREE.DirectionalLight('#fffdf8',2.2);sun.position.set(3,7,5);sun.castShadow=true;
  sun.shadow.mapSize.set(quality.shadowMapSize,quality.shadowMapSize);sun.shadow.radius=12;sun.shadow.blurSamples=quality.shadowBlurSamples;Object.assign(sun.shadow.camera,{left:-2.8,right:2.8,top:2.8,bottom:-2.8,near:.1,far:20});sun.shadow.bias=-.00015;sun.shadow.normalBias=.004;scene.add(sun);
  // Post-processing: multisampled half-float render, ambient occlusion so panel gaps,
  // arches and the underside read as depth, then tone mapping and sRGB output.
  const composer=new EffectComposer(renderer,new THREE.WebGLRenderTarget(1,1,{type:THREE.HalfFloatType,samples:4}));
  composer.addPass(new RenderPass(scene,camera));
  const aoPass=new GTAOPass(scene,camera,1,1);aoPass.blendIntensity=.9;
  aoPass.updateGtaoMaterial({radius:.45,distanceExponent:1,thickness:1,distanceFallOff:1,scale:1.6,samples:16});
  aoPass.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:16});
  // The projected backdrop is a photograph with its own shading: keep it out of the
  // AO depth and normals, or its far walls read as fully occluded.
  const renderOcclusion=aoPass.render.bind(aoPass);
  aoPass.render=(...args)=>{
    const backdrops=[...sceneryCache.values()].map(entry=>entry.skybox).filter(sky=>sky?.visible);
    backdrops.forEach(sky=>{sky.visible=false;});renderOcclusion(...args);backdrops.forEach(sky=>{sky.visible=true;});
  };
  composer.addPass(aoPass);composer.addPass(new OutputPass());
  function setRenderSize(width,height,ratio=renderer.getPixelRatio()){
    renderer.setPixelRatio(ratio);renderer.setSize(width,height,false);composer.setPixelRatio(ratio);composer.setSize(width,height);
  }
  function draw(){
    if(contactDirty){contactShadow.update(car);contactDirty=false;}
    // The light tier skips the post-processing chain: tone mapping and native
    // multisampling then happen in the one scene render.
    if(quality.ambientOcclusion)composer.render();else renderer.render(scene,camera);
  }
  let cameraView='orbit';
  const controls=new OrbitControls(camera,renderer.domElement);controls.target.set(0,.9,0);controls.enableDamping=true;controls.dampingFactor=.09;controls.enablePan=false;controls.minDistance=3.3;controls.maxDistance=CAMERA_RADIUS;controls.maxPolarAngle=Math.PI*.49;controls.minPolarAngle=.15;
  const interiorViews=INTERIOR_VIEWS;
  const cutawayViews=CUTAWAY_VIEWS;
  const insideCamera={yaw:0,pitch:-.18,eye:new THREE.Vector3(),drag:null};
  function isInside(){return interiorViews.has(cameraView);}
  function configureCameraControls(){
    const inside=isInside();camera.near=inside?.018:.1;camera.updateProjectionMatrix();
    controls.enableZoom=!inside;controls.enableRotate=!inside;controls.enablePan=false;
    controls.minDistance=['doors-cutaway','touring'].includes(cameraView)?1.2:2;
    controls.maxDistance=CAMERA_RADIUS;
    controls.minPolarAngle=.15;controls.maxPolarAngle=cameraView==='underside'?Math.PI*.75:Math.PI*.49;
    updateInputMode();
  }
  function applyInsideCamera(){
    camera.position.copy(insideCamera.eye);
    controls.target.copy(camera.position).add(new THREE.Vector3(Math.sin(insideCamera.yaw)*Math.cos(insideCamera.pitch),Math.sin(insideCamera.pitch),Math.cos(insideCamera.yaw)*Math.cos(insideCamera.pitch)));
    camera.lookAt(controls.target);dirty=true;
  }
  function updateCameraControls(){if(!isInside())controls.update();}
  function captureInsideCamera(){return {eye:insideCamera.eye.clone(),yaw:insideCamera.yaw,pitch:insideCamera.pitch};}
  function restoreInsideCamera(saved){insideCamera.eye.copy(saved.eye);insideCamera.yaw=saved.yaw;insideCamera.pitch=saved.pitch;}
  function resetInsideCamera(){
    const pose=insidePose(cameraView,modelBody);insideCamera.eye.set(...pose.eye);insideCamera.yaw=pose.yaw;insideCamera.pitch=pose.pitch;
    applyInsideCamera();
  }
  function updateInputMode(){
    const compact=window.matchMedia('(max-width:899px)').matches&&!mount.parentElement.classList.contains('expanded');
    controls.enabled=!compact&&!isInside();renderer.domElement.style.touchAction=compact?'pan-y':'none';mount.dataset.touchMode=compact?'scroll':isInside()?'look-around':'orbit';
    renderer.domElement.setAttribute('aria-label',(isInside()?'Enclosed 3D Jimny cabin. Drag to look around, Shift-drag to move within the cabin, scroll to zoom.':canvasLabel)+(compact?' Expand the preview for touch rotation.':''));
    if(status.textContent.startsWith('Live 3D'))status.textContent=compact?'Live 3D · expand to rotate':'Click a part · drag to rotate';
  }
  new MutationObserver(updateInputMode).observe(mount.parentElement,{attributes:true,attributeFilter:['class']});
  window.matchMedia('(max-width:899px)').addEventListener('change',updateInputMode);updateInputMode();
  const floor=new THREE.Mesh(new THREE.PlaneGeometry(200,200),new THREE.ShadowMaterial({color:'#303536',opacity:.19}));floor.rotation.x=-Math.PI/2;floor.position.y=-.003;floor.receiveShadow=true;scene.add(floor);
  // The car's own underside, rendered from the floor, grounds tyres and bumpers.
  const contactShadow=createContactShadow(renderer,{resolution:quality.contactResolution});scene.add(contactShadow.plane);let contactDirty=true;
  const car=new THREE.Group();scene.add(car);
  const bodyRig=new THREE.Group();car.add(bodyRig);
  const wheels=new THREE.Group();car.add(wheels);
  const accessoryRig=new THREE.Group();bodyRig.add(accessoryRig);
  const beams=[-.550,.550].map(x=>{const light=new THREE.SpotLight('#fff2cd',0,35,.30,.7,1.3);light.position.set(x,.977,1.96);light.target.position.set(x,.05,13);bodyRig.add(light,light.target);return light;});
  const lightingPrefs={headlights:true,auxiliary:true,dualAmber:true};
  const lightRig=new THREE.Group();bodyRig.add(lightRig);
  const auxiliaryBeams=Array.from({length:8},()=>{const light=new THREE.SpotLight('#fff',0,35,.3,.72,1.3);lightRig.add(light,light.target);return light;});
  const dayFloor=floor.material,nightFloor=new THREE.MeshStandardMaterial({color:'#303431',roughness:.96});
  // An actual lit ground surface is necessary: ShadowMaterial alone cannot show lamp spill.
  const road=new THREE.Group();scene.add(road);road.visible=false;
  const roadSurface=new THREE.Mesh(new THREE.PlaneGeometry(5.4,45),new THREE.MeshStandardMaterial({color:'#424747',roughness:.94}));roadSurface.rotation.x=-Math.PI/2;roadSurface.position.set(0,.002,16);road.add(roadSurface);
  for(let z=3;z<36;z+=3){for(const x of [-2.5,2.5]){const marker=new THREE.Mesh(new THREE.BoxGeometry(.035,.32,.05),new THREE.MeshStandardMaterial({color:'#e6e3cd',roughness:.5}));marker.position.set(x,.16,z);road.add(marker);}}
  // Glossy clear-coated paint at full environment strength: the lacquer carries
  // the photographed reflections while the base coat keeps the chosen colour.
  const finishMaterial=new THREE.MeshPhysicalMaterial({color:'#d9b744',roughness:.32,metalness:.025,clearcoat:1,clearcoatRoughness:.035});
  const roofMaterial=finishMaterial.clone();
  finishMaterial.userData.vehiclePaint=true;roofMaterial.userData.vehiclePaint=true;
  const surfaceStyler=createSurfaceStyler();
  const mats={paint:finishMaterial,roof:roofMaterial,trim:new THREE.MeshStandardMaterial({color:'#232a2a',roughness:.7}),rubber:new THREE.MeshStandardMaterial({color:'#1b2020',roughness:.98}),glass:new THREE.MeshStandardMaterial({color:'#213c45',roughness:.12,metalness:.55,transparent:true,opacity:.91}),metal:new THREE.MeshStandardMaterial({color:'#adb4b0',metalness:.8,roughness:.3}),darkmetal:new THREE.MeshStandardMaterial({color:'#39403b',metalness:.6,roughness:.5}),white:new THREE.MeshStandardMaterial({color:'#fff7de',emissive:'#fff3c4',emissiveIntensity:.25,roughness:.2}),red:new THREE.MeshStandardMaterial({color:'#b72d27',emissive:'#951d19',emissiveIntensity:.2}),orange:new THREE.MeshStandardMaterial({color:'#d88132',roughness:.5}),seat:new THREE.MeshStandardMaterial({color:'#343a36',roughness:.94}),accent:new THREE.MeshStandardMaterial({color:'#cb593a',roughness:.7}),canvas:new THREE.MeshStandardMaterial({color:'#a39a79',roughness:1})};
  const baseRig=new THREE.Group();bodyRig.add(baseRig);
  const detailRig=new THREE.Group();bodyRig.add(detailRig);
  let detailed=null,garageCabinControls=null,assetError=false,modelBody='5door',modelLoading=false,modelRequest=0;
  // Small, original surface maps, shared across rebuilds. No downloaded vehicle textures.
  function surfaceMap(kind){
    const canvas=document.createElement('canvas');canvas.width=canvas.height=256;const ctx=canvas.getContext('2d');ctx.fillStyle='#888';ctx.fillRect(0,0,256,256);
    let seed=73;for(let i=0;i<12000;i++){seed=(seed*16807)%2147483647;const x=seed%256;seed=(seed*16807)%2147483647;const y=seed%256;ctx.fillStyle=`rgba(${kind==='paint'?'220,220,220':'40,40,40'},${kind==='paint'?.12:.15})`;ctx.fillRect(x,y,1,1);}
    if(kind==='tyre'){ctx.strokeStyle='#252525';ctx.lineWidth=3;for(let x=-256;x<512;x+=24){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x+40,90);ctx.lineTo(x+22,168);ctx.lineTo(x+62,256);ctx.stroke();}}
    const texture=new THREE.CanvasTexture(canvas);texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.repeat.set(kind==='paint'?8:12,kind==='paint'?8:1);texture.anisotropy=Math.min(4,renderer.capabilities.getMaxAnisotropy());return texture;
  }
  const grain=surfaceMap('paint');
  finishMaterial.bumpMap=grain;finishMaterial.bumpScale=.00035;
  mats.rubber.name='TyreRubber';mats.rubber.bumpMap=grain;mats.rubber.bumpScale=.0002;mats.rubber.color.set('#171919');mats.rubber.roughness=.9;
  // Smooth tinted glass: a full-strength reflection over a partly see-through cabin.
  mats.glass=new THREE.MeshPhysicalMaterial({color:'#101b1d',roughness:.02,metalness:0,ior:1.52,specularIntensity:1,transparent:true,opacity:.6,depthWrite:false,side:THREE.DoubleSide});
  mats.lens=new THREE.MeshPhysicalMaterial({color:'#e0e7e7',metalness:.05,roughness:.08,clearcoat:1,transparent:true,opacity:.40,depthWrite:false});
  mats.chrome=new THREE.MeshStandardMaterial({color:'#e8eeed',metalness:1,roughness:.17});
  mats.reflector=new THREE.MeshStandardMaterial({color:'#d4d9d7',metalness:1,roughness:.24});
  mats.brake=new THREE.MeshStandardMaterial({color:'#737976',metalness:.85,roughness:.46});
  mats.textured=new THREE.MeshStandardMaterial({color:'#30362f',roughness:.96,bumpMap:grain,bumpScale:.008});
  mats.upholstery=new THREE.MeshStandardMaterial({color:'#a38b69',roughness:.86,bumpMap:grain,bumpScale:.0006});
  mats.darkmetal.color.set('#25292b');mats.darkmetal.metalness=.4;mats.darkmetal.roughness=.55;
  mats.ambient=new THREE.MeshStandardMaterial({color:'#386588',emissive:'#2f90d0',emissiveIntensity:.35,roughness:.5});
  mats.smoked=new THREE.MeshPhysicalMaterial({color:'#11191b',roughness:.18,clearcoat:.7,transparent:true,opacity:.85,depthWrite:false,side:THREE.DoubleSide});
  const cabinFill=new THREE.PointLight('#f2f3ee',0,2.3,2);cabinFill.position.set(0,1.48,-.15);bodyRig.add(cabinFill);
  let dirty=true,visible=true,night=false,stock=false,colour='#d9b744',current={parts:[],design:{finish:'oem',decal:'none',grille:'oem'},colour:'#d9b744'};
  let visiblePartIds=[],effectiveDesign={finish:'oem',decal:'none',grille:'oem'};
  let selectedLightProfiles=[];
  let previewRestore=null;
  let scenery='studio',sceneryLoading=false,sceneryFailed=false,sceneryRequest=0;
  const sceneryCache=new Map();
  function updateSceneryUI(){
    document.querySelectorAll('[data-scenery-select]').forEach(select=>{select.value=scenery;});
    document.querySelectorAll('[data-scenery-status]').forEach(el=>{el.textContent=sceneryMessage(scenery,{loading:sceneryLoading,failed:sceneryFailed,night});});
    mount.dataset.scenery=scenery;mount.dataset.sceneryLoading=String(sceneryLoading);
  }
  const sunDirection=new THREE.Vector3();
  function applyEnvironment(){
    const loaded=sceneryCache.get(scenery),active=!!loaded&&!sceneryLoading&&!sceneryFailed&&!night,config=SCENERIES[scenery];
    // Previews switch scenery without reloading, so each panorama keeps its own floor.
    for(const [id,entry] of sceneryCache)if(entry.skybox)entry.skybox.visible=active&&id===scenery;
    scene.environment=active?loaded.environment.texture:fallbackEnvironment.texture;
    scene.environmentRotation.set(0,active?config.rotation:0,0);
    // Exposure is the photograph's own: background and car share one scale.
    renderer.toneMappingExposure=active?config.exposure:.95;
    scene.background.set(night?'#10191f':'#20272b');
    floor.material=night?nightFloor:dayFloor;road.visible=false;
    dayFloor.opacity=active?config.shadow:.19;
    hemi.groundColor.set('#747572');
    hemi.intensity=night?.12:active?0:1.35;
    // The sun's measured direction, turned with the panorama.
    if(active&&config.sun)sunDirection.fromArray(config.sun.direction);else if(active)sunDirection.fromArray(config.key);else sunDirection.set(3,7,5).normalize();
    sunDirection.applyAxisAngle(THREE.Object3D.DEFAULT_UP,active?config.rotation:0);
    sun.position.copy(sunDirection).multiplyScalar(9);
    if(active&&config.sun){const [r,g,b]=config.sun.irradiance,peak=Math.max(r,g,b);sun.color.setRGB(r/peak,g/peak,b/peak,THREE.LinearSRGBColorSpace);sun.intensity=peak*config.sunScale;}
    // Sunless scenes: the light only feeds the shadow-catcher floor, not the car.
    else {sun.color.set('#fffdf8');sun.intensity=night?.06:active?.0001:2.2;}
    // A real sun casts a firmer edge; overhead garage panels and shade only a soft one.
    sun.shadow.radius=active&&config.sun?5:16;sun.shadow.normalBias=.004;sun.shadow.bias=-.00015;
    scene.environmentIntensity=night?.12:active?1:.7;
    updateSceneryUI();dirty=true;
  }
  new MutationObserver(applyEnvironment).observe(document.documentElement,{attributes:true,attributeFilter:['data-ui-theme']});
  async function setScenery(value){
    const id=validScenery(value),request=++sceneryRequest;
    scenery=id;sceneryFailed=false;sceneryLoading=!sceneryCache.has(id);
    applyEnvironment();
    try{
      if(sceneryLoading){
        // Ultra HDR JPEG: SDR image plus gain map, decoded to half-float radiance.
        const texture=await new UltraHDRLoader().setDataType(THREE.HalfFloatType).loadAsync(sceneryURL(id,quality.hdri));
        texture.mapping=THREE.EquirectangularReflectionMapping;texture.needsUpdate=true;
        if(request!==sceneryRequest){texture.dispose();return;}
        const generator=new THREE.PMREMGenerator(renderer);
        const environment=generator.fromEquirectangular(texture);generator.dispose();
        sceneryCache.set(id,{texture,environment});
      }
      if(request!==sceneryRequest)return;
      const config=SCENERIES[id],entry=sceneryCache.get(id);
      if(!entry.skybox){
        // Project the panorama's floor at its camera height so the car stands on it.
        const skybox=new GroundedSkybox(entry.texture,config.height,config.radius,96);
        skybox.position.y=config.height-.004;skybox.material.envMapRotation.set(0,config.rotation,0);
        skybox.renderOrder=-1;scene.add(skybox);entry.skybox=skybox;
      }
      sceneryLoading=false;
      try{localStorage.setItem('thatsuvmod-scenery',id);}catch{/* Storage can be disabled. */}
    }catch{
      if(request!==sceneryRequest)return;
      sceneryLoading=false;sceneryFailed=true;
    }
    applyEnvironment();
    fitViewport(camera.aspect);controls.target.copy(fitCameraToVehicle());updateCameraControls();
  }
  document.querySelectorAll('[data-scenery-select]').forEach(select=>select.addEventListener('change',()=>setScenery(select.value)));
  const lampEmitters=Object.fromEntries(Object.entries(LIGHT_PROFILES).map(([id,p])=>[id,new THREE.MeshStandardMaterial({color:p.colour,emissive:p.colour,emissiveIntensity:0,roughness:.12,metalness:.1})]));
  const headlightGlow=new THREE.Group();bodyRig.add(headlightGlow);
  const glowCanvas=document.createElement('canvas');glowCanvas.width=glowCanvas.height=64;
  const glowContext=glowCanvas.getContext('2d'),glowGradient=glowContext.createRadialGradient(32,32,0,32,32,32);
  glowGradient.addColorStop(0,'rgba(255,251,222,1)');glowGradient.addColorStop(.18,'rgba(255,251,222,.6)');glowGradient.addColorStop(1,'rgba(255,251,222,0)');glowContext.fillStyle=glowGradient;glowContext.fillRect(0,0,64,64);
  const glowTexture=new THREE.CanvasTexture(glowCanvas);glowTexture.colorSpace=THREE.SRGBColorSpace;
  const glowMaterial=new THREE.SpriteMaterial({map:glowTexture,transparent:true,opacity:.65,depthWrite:false,blending:THREE.AdditiveBlending});
  for(const x of [-.550,.550]){const glow=new THREE.Sprite(glowMaterial);glow.position.set(x,.977,1.94);glow.scale.set(.19,.19,1);headlightGlow.add(glow);}headlightGlow.visible=false;
  const mesh=(geometry,material,parent,x=0,y=0,z=0)=>{const obj=new THREE.Mesh(geometry,material);obj.position.set(x,y,z);obj.castShadow=true;obj.receiveShadow=true;parent.add(obj);return obj;};
  const box=(parent,w,h,d,x,y,z,mat=mats.trim)=>mesh(Math.min(w,h,d)>.065?new RoundedBoxGeometry(w,h,d,2,Math.min(w,h,d)*.14):new THREE.BoxGeometry(w,h,d),mat,parent,x,y,z);
  const cylinder=(parent,rTop,rBottom,length,x,y,z,mat=mats.trim,axis='y',segments=24)=>{const obj=mesh(new THREE.CylinderGeometry(rTop,rBottom,length,segments),mat,parent,x,y,z);if(axis==='x')obj.rotation.z=Math.PI/2;if(axis==='z')obj.rotation.x=Math.PI/2;return obj;};
  const tube=(parent,points,r=.025,mat=mats.darkmetal)=>mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p)),false,'centripetal',.1),Math.max(12,points.length*3),r,8,false),mat,parent);
  const lineTube=(parent,points,r=.01,mat=mats.trim)=>{const vectors=points.map(p=>new THREE.Vector3(...p));const path=new THREE.CurvePath();for(let i=1;i<vectors.length;i++)path.add(new THREE.LineCurve3(vectors[i-1],vectors[i]));return mesh(new THREE.TubeGeometry(path,points.length*2,r,6,false),mat,parent);};
  function clear(group){while(group.children.length){const obj=group.children[0];obj.traverse(child=>{child.geometry?.dispose();if(child.isInstancedMesh)child.dispose();if(child.userData.disposableMaterial){child.material.map?.dispose();child.material.dispose();}});group.remove(obj);}}
  function label(parent,text,w,h,x,y,z,rotationY=0,foreground='#e9e9df',background='#222827',italic=false){
    const canvas=document.createElement('canvas');canvas.width=512;canvas.height=128;const ctx=canvas.getContext('2d');ctx.fillStyle=background;ctx.fillRect(0,0,512,128);ctx.fillStyle=foreground;ctx.font=`${italic?'italic ':''}700 ${text.length>8?'52':'72'}px Arial`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(text,256,68,490);
    const tex=new THREE.CanvasTexture(canvas);tex.colorSpace=THREE.SRGBColorSpace;const material=new THREE.MeshStandardMaterial({map:tex,roughness:.6,transparent:false});const obj=mesh(new THREE.PlaneGeometry(w,h),material,parent,x,y,z);obj.rotation.y=rotationY;obj.userData.disposableMaterial=true;return obj;
  }
  function sideShape(parent,points,side,material=mats.paint,holes=[],inset=0){
    const shape=new THREE.Shape(points.map(([z,y])=>new THREE.Vector2(-z,y)));
    holes.forEach(points=>shape.holes.push(new THREE.Path(points.map(([z,y])=>new THREE.Vector2(-z,y)))));
    const geo=new THREE.ShapeGeometry(shape,24),position=geo.attributes.position;
    for(let i=0;i<position.count;i++){const z=-position.getX(i),y=position.getY(i);position.setXYZ(i,side*(.768-Math.max(0,y-1.14)*.115+inset),y,z);}geo.computeVertexNormals();
    if(side<0){const index=geo.index;for(let i=0;i<index.count;i+=3){const a=index.getX(i);index.setX(i,index.getX(i+2));index.setX(i+2,a);}geo.computeVertexNormals();}
    return mesh(geo,material,parent);
  }
  function arch(parent,x,z,wide=false){
    if(detailed&&wide){
      const side=x<0?-1:1;
      const outer=[[-.49,.38],[-.49,.58],[-.45,.77],[-.36,.90],[-.22,.95],[0,.96],[.22,.95],[.36,.90],[.45,.77],[.49,.58],[.49,.38]];
      const inner=[[-.40,.38],[-.39,.53],[-.35,.66],[-.28,.75],[-.18,.795],[0,.815],[.18,.795],[.28,.75],[.35,.66],[.39,.53],[.40,.38]];
      const positions=[],indices=[],segments=64;
      const curves=[outer,inner].map(points=>new THREE.CatmullRomCurve3(points.map(([depth,height])=>new THREE.Vector3(0,height,depth))));
      for(const [t,width] of [[0,.750],[.14,.815],[.30,.866],[.55,.896],[.80,.902],[1,.890]])for(let i=0;i<=segments;i++){
        const point=curves[0].getPoint(i/segments).lerp(curves[1].getPoint(i/segments),t);
        positions.push(side*width,point.y,z+point.z);
      }
      for(let row=0;row<5;row++)for(let i=0;i<segments;i++){const a=row*(segments+1)+i;indices.push(a,a+1,a+segments+2,a,a+segments+2,a+segments+1);}
      if(side<0)for(let i=0;i<indices.length;i+=3)[indices[i+1],indices[i+2]]=[indices[i+2],indices[i+1]];
      const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geometry.setIndex(indices);geometry.computeVertexNormals();
      mesh(geometry,mats.trim,parent);return;
    }
    // Flared moulding follows a real open wheel well, rather than sitting over a solid box.
    const side=x<0?-1:1,inner=.385,outer=wide?.462:.432,points=[];
    for(let i=0;i<=32;i++){const a=Math.PI*i/32;points.push([z-Math.cos(a)*outer,.335+Math.sin(a)*outer]);}
    for(let i=32;i>=0;i--){const a=Math.PI*i/32;points.push([z-Math.cos(a)*inner,.335+Math.sin(a)*inner]);}
    sideShape(parent,points,side,mats.trim,[],wide?.137:.075);
    const arc=[];for(let i=0;i<=32;i++){const a=i*Math.PI/32;arc.push([side*(wide?.91:.843),.335+Math.sin(a)*outer,z-Math.cos(a)*outer]);}tube(parent,arc,.014,mats.trim);
    for(const direction of [-1,1])box(parent,wide?.15:.09,.18,.055,side*(wide?.84:.80),.42,z+direction*.404,mats.trim);
  }
  function buildBase(){
    if(detailed)return;
    // Metre-scale body, 2.590m wheelbase. Side shells are actually cut around each tyre.
    const lower=[[-1.78,.54],[-1.78,1.13],[.69,1.15],[1.79,1.10],[1.84,.88],[1.84,.52],[1.69,.52]];
    for(let i=0;i<=30;i++){const a=i*Math.PI/30;lower.push([1.295+Math.cos(a)*.392,.335+Math.sin(a)*.392]);}
    lower.push([.903,.535],[-.903,.535]);
    for(let i=0;i<=30;i++){const a=i*Math.PI/30;lower.push([-1.295+Math.cos(a)*.392,.335+Math.sin(a)*.392]);}
    lower.push([-1.687,.54]);
    box(baseRig,1.43,.075,2.30,0,1.125,-.53,mats.paint);
    const hood=box(baseRig,1.48,.075,1.11,0,1.13,1.235,mats.paint);hood.rotation.x=.026;
    box(baseRig,1.46,.035,.15,0,1.163,.635,mats.paint);
    // Rounded pressed roof and narrow gutters, not a thick floating slab.
    box(baseRig,1.46,.085,2.43,0,1.665,-.505,mats.roof);
    for(const x of [-.746,.746])tube(baseRig,[[x,1.647,.70],[x,1.684,.53],[x,1.684,-1.63],[x,1.65,-1.75]],.012,mats.roof);
    for(const x of [-.48,-.24,0,.24,.48])box(baseRig,.018,.009,1.93,x,1.709,-.55,mats.roof);
    box(baseRig,1.48,.53,.045,0,1.355,-1.75,mats.paint);
    box(baseRig,1.30,.375,.015,0,1.412,-1.778,mats.trim);
    box(baseRig,1.25,.33,.017,0,1.422,-1.790,mats.glass);
    tube(baseRig,[[.52,1.28,-1.805],[.11,1.29,-1.805]],.009,mats.trim);
    // Separate flush door skins, tapered pillars and rounded, recessed window seals.
    [-1,1].forEach(side=>{
      sideShape(baseRig,lower,side);
      const windows=[[[.57,1.20],[.51,1.59],[-.24,1.59],[-.24,1.20]],[[-.34,1.20],[-.34,1.59],[-1.06,1.59],[-1.06,1.20]],[[-1.15,1.20],[-1.15,1.59],[-1.65,1.59],[-1.65,1.20]]];
      sideShape(baseRig,[[.69,1.12],[.59,1.65],[-1.74,1.65],[-1.76,1.12]],side,mats.paint,windows);
      windows.forEach(points=>{sideShape(baseRig,points,side,mats.glass,[],-.008);const outline=points.concat([points[0]]).map(([z,y])=>[side*(.768-Math.max(0,y-1.14)*.115+.002),y,z]);lineTube(baseRig,outline,.011,mats.trim);});
      for(const z of [.665,-.285,-1.105])tube(baseRig,[[side*.772,.56,z],[side*.773,1.15,z],[side*.716,1.63,z-.035]],.0035,mats.trim);
      tube(baseRig,[[side*.773,.58,.67],[side*.773,.57,-1.07]],.003,mats.trim);
      tube(baseRig,[[side*.774,1.104,.64],[side*.774,1.104,-1.72]],.005,mats.paint);
      [-.13,-.93].forEach(z=>{box(baseRig,.025,.045,.16,side*.785,1.085,z,mats.trim);box(baseRig,.028,.017,.115,side*.799,1.092,z,mats.darkmetal);});
      [.63,-.32].forEach(z=>[.72,1.04].forEach(y=>{box(baseRig,.025,.048,.065,side*.785,y,z,mats.paint);cylinder(baseRig,.009,.009,.065,side*.806,y,z,mats.darkmetal,'y',8);}));
      tube(baseRig,[[side*.77,1.22,.54],[side*.89,1.24,.55]],.018,mats.trim);
      box(baseRig,.17,.15,.24,side*.91,1.285,.56,mats.trim);box(baseRig,.012,.105,.18,side*.999,1.29,.54,mats.glass);
      box(baseRig,.05,.065,1.83,side*.78,.55,-.08,mats.trim);
      [-1.295,1.295].forEach(z=>arch(baseRig,side===1?.80:-.875,z));
      for(const z of [-1.295,1.295]){const lining=[];for(let i=0;i<=24;i++){const a=Math.PI*i/24;lining.push([z-Math.cos(a)*.395,.335+Math.sin(a)*.395]);}for(let i=24;i>=0;i--){const a=Math.PI*i/24;lining.push([z-Math.cos(a)*.333,.335+Math.sin(a)*.333]);}sideShape(baseRig,lining,side,mats.rubber,[],-.06);}
      box(baseRig,.055,.035,.12,side*.791,1.035,1.07,mats.orange);
      if(side===-1){sideShape(baseRig,[[-1.48,1.01],[-1.48,1.12],[-1.66,1.12],[-1.66,1.01]],side,mats.trim,[],.003);sideShape(baseRig,[[-1.49,1.02],[-1.49,1.11],[-1.65,1.11],[-1.65,1.02]],side,mats.paint,[],.004);}
    });
    const windshield=box(baseRig,1.395,.465,.026,0,1.397,.644,mats.trim);windshield.rotation.x=-.17;
    const glass=box(baseRig,1.315,.393,.028,0,1.405,.661,mats.glass);glass.rotation.x=-.17;
    [-.726,.726].forEach(x=>{const pillar=box(baseRig,.06,.515,.06,x,1.392,.634,mats.paint);pillar.rotation.x=-.17;});
    for(const x of [-.43,.21]){tube(baseRig,[[x,1.20,.703],[x+.08,1.24,.704]],.007,mats.trim);tube(baseRig,[[x-.14,1.245,.705],[x+.22,1.26,.704]],.009,mats.trim);}
    box(baseRig,1.50,.23,.10,0,.975,1.811,mats.paint);
    box(baseRig,1.62,.19,.22,0,.645,1.825,mats.trim);box(baseRig,1.62,.17,.18,0,.64,-1.795,mats.trim);
    box(baseRig,1.57,.08,.085,0,.775,1.83,mats.trim);
    [-.602,.602].forEach(x=>{
      cylinder(baseRig,.153,.153,.035,x,.976,1.868,mats.trim,'z',48);
      cylinder(baseRig,.128,.12,.027,x,.976,1.889,mats.chrome,'z',48);
      const reflector=mesh(new THREE.SphereGeometry(.116,32,16,0,Math.PI*2,0,Math.PI/2),mats.reflector,baseRig,x,.976,1.895);reflector.rotation.x=Math.PI/2;reflector.scale.y=.30;
      cylinder(baseRig,.032,.032,.018,x,.976,1.908,mats.white,'z');
      cylinder(baseRig,.118,.118,.012,x,.976,1.927,mats.lens,'z',48);
      for(let i=-3;i<=3;i++)tube(baseRig,[[x+i*.025,.89,1.934],[x+i*.025,1.06,1.934]],.0015,mats.lens);
      box(baseRig,.128,.049,.025,x,1.146,1.813,mats.trim);box(baseRig,.11,.032,.029,x,1.146,1.83,mats.orange);
      cylinder(baseRig,.065,.065,.014,x,.64,1.945,mats.trim,'z');cylinder(baseRig,.045,.045,.018,x,.64,1.956,mats.lens,'z');
      box(baseRig,.23,.12,.025,x,.65,-1.901,mats.red);box(baseRig,.08,.057,.028,x+.052,.652,-1.918,mats.lens);
    });
    box(baseRig,.46,.11,.018,0,.65,1.949,mats.trim);
    for(let x=-.28;x<=.28;x+=.055)box(baseRig,.032,.055,.015,x,.766,1.884,mats.trim);
    box(baseRig,1.13,.075,2.94,0,.43,-.1,mats.darkmetal);
    [-1.295,1.295].forEach(z=>cylinder(baseRig,.055,.055,1.65,0,.35,z,mats.darkmetal,'x'));
    for(const z of [-1.295,1.295])cylinder(baseRig,.105,.11,.15,0,.35,z,mats.darkmetal,'z');
    label(baseRig,'Jimny',.19,.055,-.49,1.075,-1.783,Math.PI,'#c8cfcb','#36443c',true);
    // Spare tyre mounted to tailgate.
    const spare=new THREE.Group();spare.position.set(.12,1.00,-1.94);spare.rotation.y=Math.PI/2;makeWheel(spare,0,0,0,.335,false);baseRig.add(spare);
    // Interior is intentionally schematic, rather than a product-specific promise.
    [-.38,.38].forEach(x=>{box(baseRig,.46,.12,.48,x,.85,.33,mats.seat);const seat=box(baseRig,.46,.48,.12,x,1.08,.09,mats.seat);seat.rotation.x=-.1;box(baseRig,.25,.14,.12,x,1.37,.08,mats.seat);});
    box(baseRig,1.25,.12,.46,0,.85,-.70,mats.seat);box(baseRig,1.25,.40,.10,0,1.05,-.98,mats.seat);
    box(baseRig,1.36,.12,.26,0,1.12,.50,mats.trim);
    cylinder(baseRig,.075,.075,.012,.39,1.19,.355,mats.trim,'z');
    cylinder(baseRig,.065,.065,.014,.24,1.19,.355,mats.trim,'z');
    const steering=mesh(new THREE.TorusGeometry(.127,.014,8,32),mats.trim,baseRig,.38,1.16,.30);steering.rotation.x=-.32;
  }
  function makeWheel(parent,x,y,z,r=.335,alloy=false){
    const side=x<0?-1:1,half=alloy?.115:.098,rim=.191,outer=x+side*(half+.003);
    const profile=[[rim,-half*.92],[r*.82,-half],[r*.93,-half*.88],[r*.99,-half*.63],[r,-half*.32],[r,half*.32],[r*.99,half*.63],[r*.93,half*.88],[r*.82,half],[rim,half*.92]].map(([radius,axial])=>new THREE.Vector2(radius,axial));
    const tyre=mesh(new THREE.LatheGeometry(profile,64),mats.rubber,parent,x,y,z);tyre.rotation.z=Math.PI/2;
    for(const offset of [-1,1]){const bead=mesh(new THREE.TorusGeometry(r*.81,.002,4,64),mats.trim,parent,x+offset*half,y,z);bead.rotation.y=Math.PI/2;}
    if(alloy){
      const tread=new THREE.InstancedMesh(new THREE.BoxGeometry(.062,.009,.036),mats.rubber,180),dummy=new THREE.Object3D();
      for(let i=0;i<60;i++)for(let row=0;row<3;row++){const a=(i+(row===1?.4:0))/60*Math.PI*2;dummy.position.set(x+(row-1)*.071,y+Math.cos(a)*(r-.002),z+Math.sin(a)*(r-.002));dummy.rotation.set(a,0,(row-1)*.18);dummy.updateMatrix();tread.setMatrixAt(i*3+row,dummy.matrix);}tread.castShadow=true;parent.add(tread);
    }
    cylinder(parent,rim,rim,.15,x,y,z,mats.darkmetal,'x',48);
    cylinder(parent,.157,.157,.012,x+side*.076,y,z,mats.brake,'x',48);
    const lip=mesh(new THREE.TorusGeometry(rim-.005,.009,8,48),alloy?mats.darkmetal:mats.chrome,parent,outer,y,z);lip.rotation.y=Math.PI/2;
    for(let i=0;i<5;i++){
      const a=i*Math.PI*2/5;
      for(const split of [-1,1]){const angle=a+split*.105;const spoke=box(parent,.018,.11,.022,outer,y+Math.cos(angle)*.119,z+Math.sin(angle)*.119,alloy?mats.darkmetal:mats.metal);spoke.rotation.x=angle;}
      cylinder(parent,.009,.009,.016,outer+side*.014,y+Math.cos(a)*.044,z+Math.sin(a)*.044,mats.chrome,'x',6);
    }
    cylinder(parent,.056,.056,.027,outer,y,z,alloy?mats.darkmetal:mats.metal,'x',32);
    cylinder(parent,.025,.025,.031,outer,y,z,mats.trim,'x',24);
  }
  function buildWheels(parts){clear(wheels);const r=parts.has('tires')?.368:detailed?.3465:.335;if(detailed){detailed.stockWheels.visible=!parts.has('tires');detailed.atWheels.visible=parts.has('tires');return r;}const wide=parts.has('tires')?.765:.715;for(const x of [-wide,wide])for(const z of [-1.295,1.295])makeWheel(wheels,x,r,z,r,parts.has('tires'));return r;}
  function roofRack(parent,basket=false){
    const group=new THREE.Group();parent.add(group);
    const front=.61,rear=-1.62;
    [-.72,.72].forEach(x=>box(group,.035,.055,2.25,x,1.82,-.50,mats.darkmetal));
    [front,rear].forEach(z=>box(group,1.46,.055,.035,0,1.82,z,mats.darkmetal));
    for(let z=-1.56;z<.62;z+=.14)box(group,1.43,.022,.072,0,1.825,z,mats.trim);
    [-.68,.68].forEach(x=>[-1.38,.38].forEach(z=>{box(group,.055,.095,.11,x,1.755,z,mats.darkmetal);box(group,.10,.02,.15,x,1.715,z,mats.rubber);cylinder(group,.012,.012,.06,x,1.77,z,mats.metal,'x',8);}));
    const fairing=box(group,1.38,.13,.018,0,1.77,.64,mats.trim);fairing.rotation.x=-.5;
    if(basket){[-.72,.72].forEach(x=>lineTube(group,[[x,1.83,front],[x,1.96,front-.12],[x,1.96,rear+.06],[x,1.83,rear]],.018));for(const z of [-1.55,.49])box(group,1.44,.025,.025,0,1.955,z,mats.darkmetal);}
    else for(const x of [-.72,.72])for(const z of [-1.5,-.8,-.1,.5])box(group,.018,.014,.045,x,1.86,z,mats.metal);
  }
  function suzukiBadge(parent,x,y,z,size=.115){
    // Raised angular S emblem, not a typeset letter pasted onto the grille.
    const polygons=[[[.48,.44],[.14,.64],[-.48,.20],[-.16,-.03],[.19,.23],[.34,.14],[.48,.25]],[[.16,.03],[-.19,-.23],[-.34,-.14],[-.48,-.25],[-.48,-.44],[-.14,-.64],[.48,-.20]]];
    for(const points of polygons){const shape=new THREE.Shape(points.map(([a,b])=>new THREE.Vector2(a*size,b*size)));mesh(new THREE.ExtrudeGeometry(shape,{depth:.008,bevelEnabled:true,bevelSegments:1,steps:1,bevelSize:.001,bevelThickness:.001}),mats.chrome,parent,x,y,z);}
  }
  function buildGrille(parent,id){
    if(detailed){Object.entries(detailed.grilles).forEach(([key,group])=>group.visible=key===(id==='smesh'?'mesh':id));if(id==='smesh'&&detailed.sBadgeGeometry){const badge=mesh(detailed.sBadgeGeometry.clone(),mats.chrome,parent);badge.userData.grilleBadge=true;applyGrilleColours(badge,effectiveDesign,colour,modelBody);}return;}
    box(parent,1.49,.286,.038,0,.977,1.855,mats.trim);
    if(id==='mesh'||id==='delete'||id==='rhino'){
      for(let y=.866;y<1.09;y+=.028)box(parent,.88,.009,.012,0,y,1.882,mats.darkmetal);
      for(let x=-.43;x<.45;x+=.035)box(parent,.008,.22,.012,x,.977,1.885,mats.darkmetal);
      if(id==='rhino')suzukiBadge(parent,0,.98,1.907,.13);
    }else if(id==='oem'||id==='chrome'){
      for(const x of [-.35,-.175,0,.175,.35]){box(parent,.11,.20,.018,x,.977,1.88,mats.darkmetal);box(parent,.075,.162,.021,x,.977,1.893,mats.trim);for(const edge of [-1,1])box(parent,.008,.18,.015,x+edge*.048,.977,1.901,id==='chrome'?mats.chrome:mats.darkmetal);}
      suzukiBadge(parent,0,.98,1.92,.125);
    }else{
      for(let y=.89;y<1.08;y+=.047)box(parent,.88,.014,.012,0,y,1.887,mats.darkmetal);
      label(parent,id==='script'?'Suzuki':'SUZUKI',.68,.12,0,.98,1.908,0,'#e2e5dd','#252e2d',id==='script');
    }
  }
  function addDecals(parent,id){
    // A shell-removed engineering view must not leave projected vinyl sheets
    // floating in mid-air. The saved design is untouched and returns outside.
    if(cutawayViews.has(cameraView))return;
    if(id==='none')return;
    if(detailed){projectBodyDecals(detailed.paintMeshes,parent,id,colour,effectiveDesign.decalColour);return;}
    const sideX=detailed?.756:.773;
    [-1,1].forEach(side=>{
      if(id==='heritage'||id==='safari'){
        const colours=id==='heritage'?['#b24d25','#d58d43','#e6c58f']:['#d7c18f','#655e47','#3d4836'];
        colours.forEach((color,i)=>{const material=new THREE.MeshStandardMaterial({color,roughness:.7});const obj=box(parent,.006,.045,2.70,side*sideX,.87+i*.052,-.36,material);obj.userData.disposableMaterial=true;});
      }else if(id==='geo'||id==='mountain'){
        const shape=new THREE.Shape();shape.moveTo(-1.45,0);shape.lineTo(-.85,.20);shape.lineTo(-.45,.06);shape.lineTo(.05,.24);shape.lineTo(.65,0);shape.closePath();
        const obj=mesh(new THREE.ShapeGeometry(shape),mats.darkmetal,parent,side*(sideX+.001),.67,-.25);obj.rotation.y=side*Math.PI/2;
        for(let z=-1.4;z<.4;z+=.19){const stripe=box(parent,.007,.05,.11,side*(sideX+.003),.77,z,mats.trim);stripe.rotation.x=-.45;}
      }else if(id==='topo'){
        for(let i=0;i<6;i++){const points=[];for(let z=-1.52;z<.8;z+=.13)points.push([side*(sideX+.002),.72+i*.035+Math.sin(z*4+i)*.017,z]);tube(parent,points,.003,mats.darkmetal);}
      }
    });
  }
  function buildAccessories(parts,design){
    visiblePartIds=accessoryBuilder({accessoryRig,mats,detailed,modelBody,colour,effectiveDesign,lampEmitters,buildGrille,addDecals,arch})(parts,design);
    if(detailed&&design.nameDecal)accessoryRig.add(createNameDecals(cleanPlayerName(design.nameDecal),modelBody,detailed.paintMeshes,bodyRig));
  }
  function sync(payload=current){
    contactDirty=true;
    surfaceStyler.clear();
    mount.dataset.cameraMode=isInside()?'inside':cutawayViews.has(cameraView)?'cutaway':'exterior';mount.dataset.cameraView=cameraView;
    current={...current,...payload};if(payload.colour)colour=payload.colour;
    for(const [id,on] of [['viewStock',stock],['viewBuild',!stock]]){const button=document.getElementById(id);button?.classList.toggle('active',on);button?.setAttribute('aria-pressed',String(on));}
    const resolved=resolvePreviewParts(stock?[]:current.parts||[],window.JIMNY_MARKET_PRODUCTS||[]);
    // SWB launch scope: body finishes, original vinyl, authored grilles and
    // tyres. Do not display a long-wheelbase rack/interior as a JB74 product.
    const shortBodyVisuals=new Set(['tires','snorkel','skinnyjim_backbone','skinnyjim_jerry_tray','mod_reardoor_molle','seats','doortrim']);
    for(const product of window.JIMNY_MARKET_PRODUCTS||[])if(product.visual&&product.bodyStyles?.includes('3door'))shortBodyVisuals.add(product.visual);
    const parts=new Set(modelBody==='3door'?resolved.filter(id=>shortBodyVisuals.has(id)):resolved);const design=stock?{finish:'oem',decal:'none',grille:'oem'}:{...current.design};
    design.tyreType=stock?'highway':resolveTyreType(design,parts);
    if(design.tyreType==='highway')parts.delete('tires');else parts.add('tires');
    if(detailed){detailed.headlamps.visible=!parts.has('headlamps');detailed.bumper.visible=!['bull','autostylenn_bumper_v1'].some(id=>parts.has(id));Object.values(detailed.grilles).forEach(group=>applyGrilleColours(group,design,colour,modelBody));}
    // SKU grille products and the design selection control the same physical grille.
    if(!stock){if(parts.has('autostylenn_big_suzuki_grille'))design.grille='block';else if(parts.has('autostylenn_cursive_grille'))design.grille='script';else if(parts.has('autostylenn_s_grille'))design.grille='smesh';}
    effectiveDesign={...design};
    mats.upholstery.color.set(({tan:'#a38b69',saddle:'#854d31',olive:'#59624d',stone:'#b3b1a5',black:'#303332'})[design.cabin]||'#a38b69');
    const lacquer=paintFinish(design.finish);finishMaterial.color.set(colour);finishMaterial.roughness=lacquer.roughness;
    // Solid colours have a dielectric lacquer; silver retains a metallic base coat.
    finishMaterial.metalness=['#727973','#8a9099'].includes(colour.toLowerCase())?.35:['#364b72','#5a6fd6','#8d1c25'].includes(colour.toLowerCase())?.10:0;
    finishMaterial.clearcoat=lacquer.clearcoat;finishMaterial.clearcoatRoughness=lacquer.clearcoatRoughness;finishMaterial.bumpScale=design.finish==='matte'?.00055:.00008;
    roofMaterial.copy(finishMaterial);if(design.finish==='twotone'){roofMaterial.color.set(/^#[0-9a-f]{6}$/i.test(design.roofColour||'')?design.roofColour:'#141b22');}
    [finishMaterial,roofMaterial].forEach(mat=>{const cutaway=cutawayViews.has(cameraView);if(mat.transparent!==cutaway)mat.needsUpdate=true;mat.transparent=cutaway;mat.opacity=cutaway?.12:1;mat.depthWrite=!cutaway;});mats.glass.opacity=cutawayViews.has(cameraView)||isInside()?.12:.6;mats.glass.envMapIntensity=isInside()?.12:1;
    // Keep the overhead net/rails below 1.63 m, cut the authored headliner
    // (bottom 1.6325 m) as well as the exterior roof, not just the roof shell.
    renderer.clippingPlanes=cutawayViews.has(cameraView)?[new THREE.Plane(new THREE.Vector3(0,-1,0),cameraView==='headliner-cutaway'?1.631:1.48)]:[];
    for(const name of ['BodyShell','RoofShell','SpareWheel']){const assembly=detailRig.getObjectByName(name);if(assembly)assembly.visible=!['cargo','doors-cutaway','headliner-cutaway','touring'].includes(cameraView);}
    cabinFill.position.set(0,1.48,cameraView==='cargo'?-1.28:-.15);
    // A close, off-axis inspection light makes dark footwell equipment
    // readable without adding a uniform light wash to the normal garage.
    if(cameraView==='footwell')cabinFill.position.set(.39,1.08,.25-(modelBody==='3door'?.17:0));
    garageCabinControls?.setVisible(isInside()||cutawayViews.has(cameraView));
    cabinFill.intensity=isInside()?.85:['cargo','doors-cutaway','touring'].includes(cameraView)?.95:cutawayViews.has(cameraView)?.35:0;
    clear(baseRig);buildBase();const r=buildWheels(parts);bodyRig.position.y=(parts.has('lift')?.055:0)+(r-(detailed?.3465:.335));
    if(detailed){for(const group of [detailed.stockWheels,detailed.atWheels,detailRig.getObjectByName('SpareWheel')]){if(design.partColours?.wheels)applyWheelColour(group,design.partColours.wheels);else applyWheelFinish(group,design.wheelFinish);applyCatalogueWheel(group,modelBody==='5door'&&parts.has('suzuki_nomade_steelwheel'));applyTyreType(group,design.tyreType);}}
    applyCabinUpgrades(detailRig.getObjectByName('Cabin'),{body:modelBody,seats:parts.has('seats'),fabric:design.seatFabric,colour:'#'+mats.upholstery.color.getHexString(),touring:parts.has('touring'),camp:design.touringMode==='camp'});
    buildAccessories(parts,design);consolidateAccessories();
    if(cutawayViews.has(cameraView)){
      const cabinParts=new Set(['doortrim','seats','touring','armrest','mats','steering','ambient','molle','drawer','shelf','mod_reardoor_molle','mod_halfmolly_5door','exploresetups_drawer_5door','armoro_seat_organizer','jimsa_door_pockets','jimsa_dash_tray','jimsa_console_tray','jimsa_cargo_pouch_5door','jimsa_tiedowns','fr_wolfpack','fr_watercan20','arb_airkit','arb_repairkit','kap_fire']);
      for(const [id,spec]of Object.entries(globalThis.JimnyPracticalParts||{}))if(spec.category==='Interior')cabinParts.add(id);
      accessoryRig.traverse(obj=>{const target=obj.userData.finishTarget;if(target&&!cabinParts.has(target))obj.visible=false;});
    }
    markSurfaceMaterials(mats,lampEmitters);surfaceStyler.apply([car],design);selectedLightProfiles=activeLightProfiles(parts);updateLamps();dirty=true;
    if(detailed&&modelBody==='5door'&&parts.has('suzuki_nomade_steelwheel'))visiblePartIds.push('suzuki_nomade_steelwheel');
    const visibleCount=visiblePartIds.length;
    status.textContent=assetError?'Simplified preview · detailed model unavailable':!detailed?'Loading detailed Jimny…':stock?'Stock preview':visibleCount?`${visibleCount} fitted · click a part to edit`:mount.dataset.touchMode==='scroll'?'Live 3D · expand to rotate':'Click a part · drag to rotate';
    if(isInside())status.textContent='Click an accessory · drag to look around';
    renderer.domElement.setAttribute('aria-label',(isInside()?'Rotatable enclosed Jimny cabin. Drag to look around, Shift-drag to move, scroll to zoom.':canvasLabel)+` ${visibleCount} visible modifications.`);
    mount.dataset.parts=visiblePartIds.join(',');mount.dataset.finish=design.finish||'oem';mount.dataset.grille=design.grille||'oem';mount.dataset.decal=design.decal||'none';
    updateInputMode();
  }
  function consolidateAccessories(){
    // Share one draw call per material instead of one per LED cell, fin or bolt.
    accessoryRig.updateWorldMatrix(true,true);const inverse=accessoryRig.matrixWorld.clone().invert(),groups=new Map();
    accessoryRig.traverse(obj=>{if(!obj.isMesh||obj.userData.disposableMaterial||Array.isArray(obj.material))return;let target='';for(let p=obj;p&&p!==accessoryRig;p=p.parent)if(p.userData.finishTarget){target=p.userData.finishTarget;break;}const key=target+':'+obj.material.uuid+':'+obj.castShadow+':'+obj.receiveShadow+':'+Object.keys(obj.geometry.attributes).sort().join(',');if(!groups.has(key))groups.set(key,{material:obj.material,objects:[],target});groups.get(key).objects.push(obj);});
    for(const {material,objects,target} of groups.values()){if(objects.length<2)continue;const geometries=objects.map(obj=>{const g=obj.geometry.index?obj.geometry.toNonIndexed():obj.geometry.clone();g.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inverse,obj.matrixWorld));return g;});
      const merged=mergeGeometries(geometries,false);geometries.forEach(g=>g.dispose());if(!merged)continue;objects.forEach(obj=>{obj.geometry.dispose();obj.removeFromParent();});const combined=mesh(merged,material,accessoryRig);combined.userData.finishTarget=target;combined.castShadow=objects[0].castShadow;combined.receiveShadow=objects[0].receiveShadow;
    }
  }
  function updateLamps(){
    headlightGlow.visible=night&&lightingPrefs.headlights;
    beams.forEach(light=>{light.intensity=0;});
    mats.white.emissiveIntensity=night&&lightingPrefs.headlights?2.8:0;
    mats.ambient.emissiveIntensity=night?2:.35;
    Object.values(lampEmitters).forEach(m=>m.emissiveIntensity=0);
    auxiliaryBeams.forEach(light=>light.intensity=0);
    selectedLightProfiles.forEach((id,i)=>{const p=LIGHT_PROFILES[id],light=auxiliaryBeams[i];if(!light)return;const tint=id==='dual'&&!lightingPrefs.dualAmber?'#f1f6ff':p.colour;
      const y=id==='bar'?1.85:id==='work'?1.79:['fog','dual'].includes(id)?.62:id==='combo'?1.22:.87;
      light.intensity=0;
      lampEmitters[id].color.set(tint);lampEmitters[id].emissive.set(tint);lampEmitters[id].emissiveIntensity=night&&lightingPrefs.auxiliary?3:0;
    });
    document.querySelectorAll('[data-light-toggle]').forEach(b=>{const on=lightingPrefs[b.dataset.lightToggle];b.setAttribute('aria-pressed',String(on));b.classList.toggle('active',on);});
    const info=document.getElementById('lightSelectionStatus');if(info)info.textContent=selectedLightProfiles.length?selectedLightProfiles.map(id=>LIGHT_PROFILES[id].label).join(' · '):'Factory headlamps only. Add a lamp below to compare.';
    if(night)status.textContent='Night appearance · lens glow only, no light-throw simulation';
    dirty=true;
  }
  function setNight(value){
    night=!!value;mount.parentElement.classList.toggle('lighting-night',night);document.getElementById('viewNight').classList.toggle('active',night);document.getElementById('viewNight').setAttribute('aria-pressed',String(night));
    applyEnvironment();
    updateLamps();if(!night){if(cameraView==='beam')view('orbit');else status.textContent=stock?'Stock preview':visiblePartIds.length?`${visiblePartIds.length} representative parts in 3D`:'Click a part · drag to rotate';}dirty=true;
  }
  document.addEventListener('click',event=>{const toggle=event.target.closest('[data-light-toggle]');if(toggle){lightingPrefs[toggle.dataset.lightToggle]=!lightingPrefs[toggle.dataset.lightToggle];updateLamps();}});
  function fitCameraToVehicle(){
    if(isInside()){applyInsideCamera();return controls.target.clone();}
    const bounds=new THREE.Box3(),visibleMeshes=[];car.updateMatrixWorld(true);
    car.traverse(obj=>{
      if(!obj.isMesh)return;
      for(let parent=obj;parent&&parent!==car;parent=parent.parent)if(!parent.visible)return;
      // A rotated, batched windscreen's local bounding box invents empty
      // corners above the roof. Fit actual world-space vertices instead.
      bounds.expandByObject(obj,true);
      visibleMeshes.push(obj);
    });
    if(bounds.isEmpty())return controls.target.clone();
    const center=bounds.getCenter(new THREE.Vector3()),direction=camera.position.clone().sub(controls.target).normalize();
    const right=new THREE.Vector3().crossVectors(camera.up,direction).normalize(),up=new THREE.Vector3().crossVectors(direction,right);
    const tanY=Math.tan(THREE.MathUtils.degToRad(camera.fov/2)),tanX=tanY*camera.aspect;
    let distance=0;
    // Fit the actual silhouette, not empty corners of a car-sized box. The old
    // box fit made the car unnecessarily small on short landscape screens.
    const offset=new THREE.Vector3();
    for(const obj of visibleMeshes){
      const positions=obj.geometry.attributes.position;
      for(let i=0;i<positions.count;i++){
        offset.fromBufferAttribute(positions,i).applyMatrix4(obj.matrixWorld).sub(center);
        const depth=offset.dot(direction);
        distance=Math.max(distance,Math.abs(offset.dot(right))/tanX+depth,Math.abs(offset.dot(up))/tanY+depth);
      }
    }
    camera.position.copy(center).addScaledVector(direction,Math.max(controls.minDistance,distance*1.06));
    camera.lookAt(center);
    return center;
  }
  function view(name){
    if(name==='beam')name='orbit';
    cameraView=name;
    mount.dataset.cameraMode=isInside()?'inside':cutawayViews.has(name)?'cutaway':'exterior';mount.dataset.cameraView=name;
    configureCameraControls();
    fitViewport(camera.aspect);
    const poses={front:[0,1.25,6.7],side:[6.6,1.3,0],rear:[-4,1.62,-5.5],orbit:[4.25,1.62,5.35],roof:[3.9,4.2,-4.5],cabin:[3.9,3.4,-3.3],cargo:[0,2.8,-5.5],underside:[3.8,-1.5,4.5],beam:[8,9,-6],'reference-front':[.7,1.45,8],'reference-rear':[-.7,1.45,-8],'reference-side':[-8,1.3,0]};
    camera.position.set(...(poses[name]||poses.orbit));controls.target.set(0,.9,0);updateCameraControls();sync();
    if(isInside())resetInsideCamera();else {controls.target.copy(fitCameraToVehicle());updateCameraControls();}
    if(name==='cargo'){camera.position.set(1.65,2.25,-3.4);controls.target.set(0,1.01,modelBody==='3door'?-1.23:-1.40);updateCameraControls();}
    if(name==='touring'){camera.position.set(2.55,3.15,-3.1);controls.target.set(0,.93,-.60);updateCameraControls();status.textContent='Touring interior · cutaway inspection';}
    if(name==='doors-cutaway'){camera.position.set(-2.3,2.5,-1.5);controls.target.set(0,.91,modelBody==='3door'?-.17:-.32);updateCameraControls();status.textContent='Door cutaway · optional inspection';}
    if(name==='headliner-cutaway'){camera.position.set(2.3,2.6,-2.8);controls.target.set(0,1.46,modelBody==='3door'?-.64:-.81);updateCameraControls();status.textContent='Roof removed · overhead storage inspection';}
    if(name==='cabin'||name==='cutaway')status.textContent='Cabin cutaway · optional inspection, not the normal interior view';
    if(name==='cargo')status.textContent='Cargo cutaway · body and spare hidden for inspection, not an open-door simulation';
    if(isInside())status.textContent='Click an accessory · drag to look around';
    if(night)status.textContent='Night appearance · lens glow only, no light-throw simulation';
    document.querySelectorAll('[data-camera]').forEach(b=>b.classList.toggle('active',b.dataset.camera===name));dirty=true;
  }
  function fitViewport(aspect){camera.aspect=aspect;const lens=isInside()?68:scenery==='studio'?28:42;camera.fov=THREE.MathUtils.radToDeg(2*Math.atan(Math.tan(THREE.MathUtils.degToRad(lens/2))*Math.max(1,1.25/aspect)));if(isInside())camera.fov=Math.min(92,camera.fov);camera.updateProjectionMatrix();}
  const observer=new ResizeObserver(()=>{const {width,height}=mount.getBoundingClientRect();if(!width||!height)return;setRenderSize(width,height);fitViewport(width/height);controls.target.copy(fitCameraToVehicle());updateCameraControls();dirty=true;});observer.observe(mount);
  new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible)dirty=true;},{rootMargin:'100px'}).observe(mount);
  controls.addEventListener('change',()=>{dirty=true;});
  renderer.domElement.addEventListener('pointerdown',e=>{
    if(!isInside()||mount.dataset.touchMode==='scroll')return;
    insideCamera.drag={id:e.pointerId,x:e.clientX,y:e.clientY,pan:e.shiftKey||e.button===2};
    renderer.domElement.setPointerCapture(e.pointerId);e.preventDefault();
  });
  renderer.domElement.addEventListener('pointermove',e=>{
    const drag=insideCamera.drag;if(!isInside()||!drag||drag.id!==e.pointerId)return;
    const dx=e.clientX-drag.x,dy=e.clientY-drag.y;drag.x=e.clientX;drag.y=e.clientY;
    if(drag.pan){
      const offset=modelBody==='3door'?-.17:0;
      insideCamera.eye.x=THREE.MathUtils.clamp(insideCamera.eye.x-dx*.0012,-.52,.52);
      insideCamera.eye.z=THREE.MathUtils.clamp(insideCamera.eye.z+dy*.0012,-.78+offset,.16+offset);
    }else {insideCamera.yaw-=dx*.004;insideCamera.pitch=THREE.MathUtils.clamp(insideCamera.pitch+dy*.003,-1.15,.8);}
    applyInsideCamera();e.preventDefault();
  });
  function endInsideDrag(e){if(insideCamera.drag?.id===e.pointerId)insideCamera.drag=null;}
  installPartPicker({canvas:renderer.domElement,camera,root:car,planes:()=>renderer.clippingPlanes,enabled:()=>!!detailed&&!modelLoading&&!previewRestore&&!stock,onPick:detail=>window.dispatchEvent(new CustomEvent('jimny-part-pick',{detail}))});
  renderer.domElement.addEventListener('pointerup',endInsideDrag);renderer.domElement.addEventListener('pointercancel',endInsideDrag);
  renderer.domElement.addEventListener('contextmenu',e=>{if(isInside())e.preventDefault();});
  renderer.domElement.addEventListener('wheel',e=>{if(!isInside()||mount.dataset.touchMode==='scroll')return;e.preventDefault();camera.fov=THREE.MathUtils.clamp(camera.fov+e.deltaY*.025,38,94);camera.updateProjectionMatrix();dirty=true;},{passive:false});
  renderer.domElement.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)){e.preventDefault();if(isInside()){insideCamera.yaw+=e.key==='ArrowLeft'?.12:e.key==='ArrowRight'?-.12:0;insideCamera.pitch=THREE.MathUtils.clamp(insideCamera.pitch+(e.key==='ArrowUp'?.08:e.key==='ArrowDown'?-.08:0),-1.15,.8);applyInsideCamera();return;}const delta=e.key==='ArrowLeft'?.16:e.key==='ArrowRight'?-.16:0;const pos=camera.position.clone().sub(controls.target);if(delta)pos.applyAxisAngle(new THREE.Vector3(0,1,0),delta);else pos.multiplyScalar(e.key==='ArrowUp'?.92:1.08);camera.position.copy(controls.target).add(pos);updateCameraControls();dirty=true;}});
  renderer.domElement.addEventListener('webglcontextlost',()=>{status.textContent='3D paused. Reload to restore the preview. Your build is saved.';});
  window.addEventListener('jimny-build-change',event=>{stock=false;sync(event.detail);});
  window.addEventListener('jimny-preview-mode',event=>{stock=event.detail==='stock';sync();});
  window.addEventListener('jimny-preview-night',event=>setNight(event.detail));
  window.addEventListener('jimny-preview-colour',event=>sync({colour:event.detail}));
  document.addEventListener('click',event=>{const button=event.target.closest('[data-camera]');if(button)view(button.dataset.camera);});
  document.querySelectorAll('[data-viewer-zoom]').forEach(button=>button.addEventListener('click',()=>{
    const action=button.dataset.viewerZoom;
    if(isInside()){if(action==='fit'){fitViewport(camera.aspect);resetInsideCamera();}else {camera.fov=THREE.MathUtils.clamp(camera.fov*(action==='in'?.85:1.17),38,94);camera.updateProjectionMatrix();}dirty=true;return;}
    if(action==='fit'){controls.target.copy(fitCameraToVehicle());}
    else {const offset=camera.position.clone().sub(controls.target),distance=THREE.MathUtils.clamp(offset.length()*(action==='in'?.8:1.25),controls.minDistance,controls.maxDistance);camera.position.copy(controls.target).add(offset.setLength(distance));}
    updateCameraControls();dirty=true;
  }));
  function snapshot(){
    const size=renderer.getSize(new THREE.Vector2()),ratio=renderer.getPixelRatio(),aspect=camera.aspect,fov=camera.fov,position=camera.position.clone(),quaternion=camera.quaternion.clone();
    setRenderSize(1600,1200,1);fitViewport(4/3);
    // A close inspection zoom should not crop wheels/racks from the saved build sheet.
    fitCameraToVehicle();draw();
    const data=renderer.domElement.toDataURL('image/png');
    setRenderSize(size.x,size.y,ratio);camera.position.copy(position);camera.quaternion.copy(quaternion);fitViewport(aspect);camera.fov=fov;camera.updateProjectionMatrix();draw();return data;
  }
  function beginPreview(payload){
    if(!previewRestore)previewRestore={payload:structuredClone(current),stock,night,view:cameraView,position:camera.position.clone(),target:controls.target.clone(),fov:camera.fov,inside:captureInsideCamera()};
    stock=false;setNight(false);sync(payload);view('orbit');
  }
  function endPreview(){
    if(!previewRestore)return;
    const saved=previewRestore;previewRestore=null;stock=saved.stock;sync(saved.payload);view(saved.view);setNight(saved.night);
    restoreInsideCamera(saved.inside);camera.position.copy(saved.position);controls.target.copy(saved.target);camera.fov=saved.fov;camera.updateProjectionMatrix();updateCameraControls();dirty=true;
  }
  function renderPreset(payload,angle='orbit'){
    // Render from the actual configurable model, then restore the live build in
    // the same frame. This is also the reproducible source of preset thumbnails.
    const saved={payload:structuredClone(current),stock,night,scenery,view:cameraView,position:camera.position.clone(),target:controls.target.clone(),fov:camera.fov,inside:captureInsideCamera(),size:renderer.getSize(new THREE.Vector2()),ratio:renderer.getPixelRatio(),near:camera.near,far:camera.far,bodyVisible:bodyRig.visible};
    try{
      stock=false;night=false;scenery='studio';applyEnvironment();sync(payload);view(angle==='seat-detail'?'cabin':angle==='grille-detail'?'front':angle);
      // Supersample the small card render so sub-pixel shut lines, tread and
      // chrome edges do not break into dotted outlines in the downscaled image.
      setRenderSize(1600,1200,1);fitViewport(4/3);controls.target.copy(fitCameraToVehicle());updateCameraControls();
      if(angle==='wheel-detail'){
        const z=modelBody==='3door'?1.125:1.295;
        // Close-up inspection exposure keeps dark rubber and graphite spokes
        // readable on small cards. The live garage exposure restores below.
        renderer.toneMappingExposure=1.3;
        bodyRig.visible=false;camera.position.set(2.4,.60,z+1.30);camera.lookAt(.705,.36,z);camera.near=.1;camera.far=2.7;camera.updateProjectionMatrix();
      }
      if(angle==='grille-detail'){
        const front=modelBody==='3door'?1.79:1.96;
        camera.position.set(.32,1.16,front+3.15);camera.lookAt(0,1.04,front-.1);
      }
      if(angle==='seat-detail'){
        camera.position.set(1.35,1.90,1.00);camera.lookAt(.26,1.01,-.10);
      }
      if(angle==='touring'){camera.position.set(2.55,3.15,-3.1);camera.lookAt(0,.94,-.60);}
      if(angle==='doors'){view('doors-cutaway');camera.position.set(-2.3,2.5,-1.5);camera.lookAt(0,.91,-.32);}
      // Product cards show the relevant area at useful scale, not thirty
      // almost identical whole-car pictures. Retain the fitted context.
      if(payload.detail){
        const id=payload.parts?.[0],product=window.JIMNY_MARKET_PRODUCTS?.find(p=>p.id===id),part=product?.visual||id;
        const frames={
          exea_cupholder:[[.12,1.35,-.09],[.57,1.17,.25]],exea_phone_mount:[[.02,1.43,-.11],[-.18,1.36,.345]],
          armoro_console_organizer:[[.02,1.30,-.11],[0,.84,.22]],exea_switch_extensions:[[.015,1.15,.01],[0,.965,.282]],maruti_at_mats:[[.39,1.13,.16],[.40,.698,.49]],
          skinnyjim_backbone:[[-1.85,1.38,-3.4],[-.49,1.04,-1.88]],skinnyjim_jerry_tray:[[-1.7,1.30,-3.4],[-.50,.91,-1.98]],suzuki_nomade_flatrack:[[2.5,3.0,-3.1],[0,1.82,-.52]],
          mod_reardoor_molle:[[0,1.78,-.90],[0,.96,-1.73]],mod_halfmolly_5door:[[1.7,1.85,-2.5],[0,1.23,-1.36]],exploresetups_drawer_5door:[[1.55,2.10,-3.05],[0,.83,-1.43]],
          rack:[[2.8,3.4,-3.4],[0,1.85,-.3]],msga_roofbasket:[[2.8,3.4,-3.4],[0,1.85,-.3]],prad_roofrack:[[2.8,3.4,-3.4],[0,1.85,-.3]],
          bull:[[1.65,1.38,4.65],[0,.80,1.90]],autostylenn_bumper_v1:[[1.65,1.32,4.65],[0,.70,1.90]],winch:[[1.4,1.15,4.1],[0,.64,1.97]],
          snorkel:[[-2.6,1.8,2.05],[-.76,1.36,.80]],led:[[1.4,2.6,3.8],[0,1.95,.55]],pods:[[1.65,1.65,4.2],[0,1.03,1.98]],headlamps:[[.35,1.2,4.85],[0,1.02,1.91]],
          sparecover:[[-1.65,1.5,-4.3],[0,1.08,-1.98]],ladder:[[-2.4,2,-4.5],[-.5,1.2,-1.94]],spoiler:[[-2.0,2.5,-4.0],[0,1.65,-1.68]],
          seats:[[2.45,2.65,1.45],[0,.96,-.18]],molle:[[2.65,2.28,-1.45],[0,.93,-.30]],armrest:[[1.6,2.0,-1.35],[0,.85,-.18]],
          lift:[[2.7,.75,2.9],[.45,.52,1.18]],mudflaps:[[2.7,.8,-2.8],[.65,.38,-1.25]],flares:[[3,1.15,2.8],[.7,.79,1.1]]
        };
        let frame=frames[part];
        if(frame&&modelBody==='3door'&&['exea_cupholder','exea_phone_mount','armoro_console_organizer','exea_switch_extensions'].includes(part))frame=frame.map(point=>[point[0],point[1],point[2]-.17]);
        if(product?.lightProfile)frame=product.lightProfile==='work'?[[1.8,2.7,-4],[0,1.9,-1.45]]:product.lightProfile==='bar'?frames.led:product.lightProfile==='headlamps'?frames.headlamps:frames.pods;
        if(frame){camera.position.set(...frame[0]);camera.lookAt(...frame[1]);}
      }
      draw();
      const card=document.createElement('canvas');card.width=800;card.height=600;
      const context=card.getContext('2d');context.imageSmoothingQuality='high';context.drawImage(renderer.domElement,0,0,800,600);return card.toDataURL('image/webp',.90);
    }finally{
      bodyRig.visible=saved.bodyVisible;camera.near=saved.near;camera.far=saved.far;camera.updateProjectionMatrix();
      stock=saved.stock;night=saved.night;scenery=saved.scenery;cameraView=saved.view;configureCameraControls();sync(saved.payload);applyEnvironment();
      restoreInsideCamera(saved.inside);setRenderSize(saved.size.x,saved.size.y,saved.ratio);fitViewport(saved.size.x/saved.size.y);camera.fov=saved.fov;camera.updateProjectionMatrix();camera.position.copy(saved.position);controls.target.copy(saved.target);updateCameraControls();draw();dirty=true;
      document.querySelectorAll('[data-camera]').forEach(b=>b.classList.toggle('active',b.dataset.camera===saved.view));
    }
  }
  window.jimny3D={ready:true,snapshot,getState:()=>({modelVersion:detailed?'blender-lwb-3':'procedural-fallback',detailedReady:!!detailed,assetError,studioEnvironmentReady:sceneryCache.has('studio')||sceneryFailed,assemblies:detailed?{grilles:Object.entries(detailed.grilles).filter(([,group])=>group.visible).map(([id])=>id),wheels:detailed.atWheels.visible?'all-terrain':'stock',stockBumper:detailed.bumper.visible}:null,parts:[...visiblePartIds],colour,stock,night,lighting:{...lightingPrefs,profiles:[...selectedLightProfiles],activeBeams:[...beams,...auxiliaryBeams].filter(l=>l.intensity>0).length},view:cameraView,design:{...effectiveDesign},touchMode:mount.dataset.touchMode,renderCalls:renderer.info.render.calls,triangles:renderer.info.render.triangles,meshCount:car.children.reduce((sum,g)=>{let count=0;g.traverse(o=>{if(o.isMesh)count++;});return sum+count;},0)}),view};
  const previousGetState=window.jimny3D.getState;
  Object.assign(window.jimny3D,{beginPreview,endPreview,renderPreset});
  window.jimny3D.getState=()=>({...previousGetState(),quality:quality.id,body:modelBody,modelLoading,surfaceStyles:surfaceStyler.snapshot(),modelVersion:detailed?(modelBody==='3door'?'blender-swb-5':'blender-lwb-10'):'procedural-fallback',previewing:!!previewRestore,scenery,sceneryLoading,sceneryFailed,sceneryVisible:!!sceneryCache.get(scenery)?.skybox?.visible,camera:{position:camera.position.toArray(),target:controls.target.toArray(),fov:camera.fov,mode:isInside()?'enclosed-look-around':cutawayViews.has(cameraView)?'cutaway':'exterior-orbit',rotate:true,pan:isInside(),zoom:true}});
  sync(window.getJimnyBuildState?.()||current);
  let savedScenery='studio';try{savedScenery=localStorage.getItem('thatsuvmod-scenery');}catch{/* Private mode fallback. */}
  setScenery(savedScenery);
  mount.classList.add('ready');
  async function loadModel(body='5door'){
    const request=++modelRequest;modelLoading=true;assetError=false;
    mount.setAttribute('aria-busy','true');car.visible=false;status.textContent=`Loading ${body==='3door'?'three':'five'}-door Jimny…`;
    const modelURL=body==='3door'?(typeof __JIMNY_SWB_URL__==='string'?__JIMNY_SWB_URL__:'assets/models/jimny-swb-blender.glb'):(typeof __JIMNY_MODEL_URL__==='string'?__JIMNY_MODEL_URL__:'assets/models/jimny-lwb-blender.glb');
    try{
    const gltf=await loadBodyModel(modelURL);
    if(request!==modelRequest){gltf.scene.traverse(o=>{o.geometry?.dispose();if(o.material)o.material.dispose();});return;}
    const names=['BodyShell','RoofShell','OEMGrille','BlockGrille','RhinoGrille','ScriptGrille','GlossGrille','DeleteGrille','ClassicGrille','MeshGrille','StockBumper','StockHeadlamps','StockWheels','AllTerrainWheels','Cabin','SpareWheel'];
    const objects=Object.fromEntries(names.map(name=>[name,gltf.scene.getObjectByName(name)]));
    if(names.some(name=>!objects[name]))throw new Error('Incomplete Jimny model');
    surfaceStyler.clear();
    if(detailed){car.remove(detailed.stockWheels,detailed.atWheels);for(const group of [detailed.stockWheels,detailed.atWheels]){disposeCatalogueWheels(group);group.traverse(o=>o.geometry?.dispose());}detailed.sBadgeGeometry?.dispose();}
    garageCabinControls?.dispose();garageCabinControls=null;
    clear(detailRig);detailed=null;modelBody=body;
    gltf.scene.traverse(obj=>{if(!obj.isMesh)return;obj.castShadow=true;obj.receiveShadow=true;
      const material=obj.material;applyMaterialProfile(material);
      // Millimetre-wide panel-gap tubes are already dark. Shadow-map texels
      // turn their self-shadow into a jagged zipper along otherwise clean doors.
      if(material.name==='IntakeShadow')obj.castShadow=false;
      // Keep the authored cavity bake for tyres/plastics. Sparse baked vertex
      // occlusion makes clean lacquer look mottled, especially at phone scale.
      if(material.name==='BodyPaint'){finishMaterial.vertexColors=false;obj.material=finishMaterial;}
      else if(material.name==='RoofPaint'){roofMaterial.vertexColors=false;obj.material=roofMaterial;}
      else if(material.name==='WindowGlass'){obj.material=mats.glass;obj.castShadow=false;}
      else if(material.name==='TyreRubber'){mats.rubber.vertexColors=!!obj.geometry.attributes.color;mats.rubber.name='TyreRubber';obj.material=mats.rubber;}
      else if(material.name==='LampEmitter')obj.material=mats.white;
      else if(material.transparent){material.depthWrite=false;material.side=THREE.FrontSide;obj.castShadow=false;}
      if(['BrightChrome','MachinedAlloy','GrilleLettering','OpticalGlass'].includes(material.name))material.vertexColors=false;
    });
    applyCabinMaterials(objects.Cabin);
    for(const name of names)(['StockWheels','AllTerrainWheels'].includes(name)?car:detailRig).add(objects[name]);
    detailed={grilles:{oem:objects.OEMGrille,block:objects.BlockGrille,rhino:objects.RhinoGrille,script:objects.ScriptGrille,chrome:objects.GlossGrille,delete:objects.DeleteGrille,classic:objects.ClassicGrille,mesh:objects.MeshGrille},bumper:objects.StockBumper,stockWheels:objects.StockWheels,atWheels:objects.AllTerrainWheels};
    detailed.headlamps=objects.StockHeadlamps;
    // Reuse the accurate raised factory emblem with the replacement mesh
    // grille. Its seller card must not silently select a five-slot OEM fascia.
    detailed.sBadgeGeometry=extractFactoryBadge(objects.OEMGrille,detailRig.matrixWorld.clone().invert());
    fitSteeringBadge(objects.Cabin,detailed.sBadgeGeometry,body);
    garageCabinControls=createCabinControls(detailRig,separateCabinControls(objects.Cabin,detailRig,body),body);
    garageCabinControls.update({gear:'P',range:'2H',parking:true,rpm:0,speed:0});
    protectMirrorSurfaces(detailRig,body);
    detailed.paintMeshes=[];objects.BodyShell.traverse(obj=>{if(obj.isMesh&&obj.material===finishMaterial)detailed.paintMeshes.push(obj);});
    Object.values(detailed.grilles).forEach(group=>group.traverse(obj=>{if(obj.isMesh&&['BrightChrome','GrilleLettering'].includes(obj.material.name))obj.userData.brightGrilleMaterial=obj.material;}));
    mount.dataset.model='blender';mount.dataset.body=body;car.visible=true;modelLoading=false;mount.setAttribute('aria-busy','false');
    beams.forEach(light=>light.position.z=body==='3door'?1.79:1.96);
    sync();if(isInside())resetInsideCamera();else {controls.target.copy(fitCameraToVehicle());updateCameraControls();}
    window.dispatchEvent(new CustomEvent('jimny-model-ready',{detail:{body}}));
    }catch(error){if(request!==modelRequest)return;modelLoading=false;assetError=true;mount.setAttribute('aria-busy','false');car.visible=false;dirty=true;status.textContent='This model could not load. Switch model or reload to retry; your build is saved.';}
  }
  window.jimny3D.setBody=loadModel;
  window.addEventListener('jimny-model-change',e=>{endPreview();loadModel(e.detail);});
  loadModel(window.getJimnyBuildState?.().body||'5door');
  renderer.setAnimationLoop(()=>{if(!visible||document.hidden)return;updateCameraControls();if(dirty){draw();dirty=false;mount.dataset.rendered='true';}});
}
