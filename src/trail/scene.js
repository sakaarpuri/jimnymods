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
import {fitSteeringBadge} from '../steering-badge.js';
import {applyCatalogueWheel,disposeCatalogueWheels} from '../catalogue-parts.js';
import {resolveTyreType,applyTyreType,disposeTyreTypes} from '../tyre-types.js';
import {courseLighting} from './course-lighting.js';

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
function dispose(root){const cleanups=[];root.traverse(o=>{if(o.userData.dispose)cleanups.push(o.userData.dispose);});cleanups.forEach(cleanup=>cleanup());const materials=new Set(),geometries=new Set();root.traverse(o=>{if(o.geometry)geometries.add(o.geometry);if(o.material)materials.add(o.material);if(o.isInstancedMesh)o.dispose();});geometries.forEach(g=>g.dispose());materials.forEach(m=>{m.userData.terrainTextures?.forEach(t=>t.dispose());m.dispose();});root.clear();}

function companion(parent,x,z,long=false){const g=companionVehicle(long);parent.add(g);g.position.set(x,0,z);g.rotation.y=long?-.24:.4;return g;}

export function createTrailScene(mount){
  const surfaceStyler=createSurfaceStyler();
  const renderer=new T.WebGLRenderer({antialias:true,powerPreference:'high-performance'});renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFSoftShadowMap;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;
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
    const apply=entry=>{if(request!==skyRequest)return;scene.environment=daylightEnvironment?.texture||entry.environment.texture;scene.environmentIntensity=courseLighting(theme).environment;};
    skyUniforms.turbidity.value=courseLighting(theme).turbidity;
    skyUniforms.cloudCoverage.value=courseLighting(theme).clouds;
    if(skies.has(file)){apply(skies.get(file));return;}
    new T.TextureLoader().load(`assets/environments/india-${file}.webp`,texture=>{if(disposed){texture.dispose();return;}texture.colorSpace=T.SRGBColorSpace;const generator=new T.PMREMGenerator(renderer),environment=generator.fromEquirectangular(texture);generator.dispose();const old=skies.get(file);old?.texture.dispose();old?.environment.dispose();const entry={texture,environment};skies.set(file,entry);apply(entry);},undefined,()=>{});
  }
  const pmrem=new T.PMREMGenerator(renderer),room=new RoomEnvironment(),env=pmrem.fromScene(room,.05);scene.environment=env.texture;scene.environmentIntensity=.45;room.dispose();pmrem.dispose();
  // The low-resolution illustrated backdrop is not a suitable paint reflection.
  // Locally hosted CC0 daylight HDR supplies continuous, colour-neutral highlights.
  let paintEnvironment=env.texture,daylightEnvironment=null;
  new RGBELoader().load('assets/environments/rostock-laage-airport-1k.hdr',texture=>{
    if(disposed){texture.dispose();return;}
    const generator=new T.PMREMGenerator(renderer);daylightEnvironment=generator.fromEquirectangular(texture);generator.dispose();texture.dispose();paintEnvironment=daylightEnvironment.texture;scene.environment=paintEnvironment;scene.environmentIntensity=courseLighting(world?.course.theme).environment;
    bodyRig.traverse(o=>{if(o.material?.userData?.vehiclePaint){o.material.envMap=paintEnvironment;o.material.needsUpdate=true;}});
  },undefined,()=>{});
  const hemisphere=new T.HemisphereLight('#e9f2ff','#5a594b',.55);scene.add(hemisphere);const sun=new T.DirectionalLight('#fff7e8',2.4);sun.castShadow=true;const shadowSize=innerWidth<700?2048:4096;sun.shadow.mapSize.set(shadowSize,shadowSize);Object.assign(sun.shadow.camera,{left:-78,right:78,top:78,bottom:-78,near:1,far:250});sun.shadow.bias=-.00008;sun.shadow.normalBias=.012;scene.add(sun,sun.target);
  const worldRoot=new T.Group(),car=new T.Group(),bodyRig=new T.Group(),wheelRoot=new T.Group();scene.add(worldRoot,car);car.add(bodyRig,wheelRoot);
  const contactCanvas=document.createElement('canvas');contactCanvas.width=contactCanvas.height=64;const context=contactCanvas.getContext('2d'),gradient=context.createRadialGradient(32,32,4,32,32,32);gradient.addColorStop(0,'rgba(22,27,23,.36)');gradient.addColorStop(1,'rgba(22,27,23,0)');context.fillStyle=gradient;context.fillRect(0,0,64,64);const contact=new T.Mesh(new T.PlaneGeometry(2.1,4.1),new T.MeshBasicMaterial({map:new T.CanvasTexture(contactCanvas),transparent:true,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-1}));contact.rotation.x=-Math.PI/2;scene.add(contact);
  let wheels=[],gates=[],world,currentBody='',currentBuildKey='',cameraMode='external',firstCamera=true,paintMeshes=[],playerObjects=[],capturing=false,lastShot='',wheelTravel=0,inspectionWheel=null,inspecting=false,cabinControls=null,thumbnailElapsed=1,cabinMaterials=null,visualWheelRadius=.3465,visibleParts=[],mirrors=null,windowMaterials=[];
  let wheelPreview=null,thumbnailVisible=true,thumbnailFrames=0,tyreType='highway',vegetation=null;
  const cabinCamera=new T.PerspectiveCamera(68,16/10,.025,750),cabinTarget=new T.WebGLRenderTarget(384,240),pixels=new Uint8Array(384*240*4),flipped=new Uint8ClampedArray(pixels.length);
  cabinTarget.texture.colorSpace=T.SRGBColorSpace;
  const cameraPosition=new T.Vector3(),look=new T.Vector3(),aim=new T.Vector3();
  function resize(){if(capturing)return;const {width,height}=mount.getBoundingClientRect();if(!width||!height)return;renderer.setSize(width,height,false);camera.aspect=width/height;camera.updateProjectionMatrix();}
  const observer=new ResizeObserver(resize);observer.observe(mount);
  async function loadVehicle(body,build={}){
    const buildKey=JSON.stringify(build);if(currentBody===body&&currentBuildKey===buildKey)return;
    const path=body==='3door'?__JIMNY_SWB_URL__:__JIMNY_MODEL_URL__;
    const [gltf]=await Promise.all([loadBodyModel(path),preloadRockAssets(),preloadVegetationAssets(),preloadAuthoredPines()]);gltf.scene.updateMatrixWorld(true);surfaceStyler.clear();wheelRoot.userData.finishTarget='wheels';
mirrors?.dispose();mirrors=null;cabinControls?.dispose();cabinMaterials?.dispose();dispose(bodyRig);disposeCatalogueWheels(wheelRoot);disposeWheelDesigns(wheelRoot);disposeTyreTypes(wheelRoot);dispose(wheelRoot);wheels=[];windowMaterials=[];car.position.set(0,0,0);car.rotation.set(0,0,0);bodyRig.position.set(0,0,0);bodyRig.rotation.set(0,0,0);car.updateMatrixWorld(true);
    const design={...(build.design||{}),drivingPreview:true},colour=typeof build.colour==='string'&&/^#[\da-f]{6}$/i.test(build.colour)?build.colour:'#728773';
    const paint=new T.MeshPhysicalMaterial({color:colour,...paintFinish(design.finish),metalness:['#727973','#8a9099'].includes(colour.toLowerCase())?.35:['#364b72','#5a6fd6','#8d1c25'].includes(colour.toLowerCase())?.10:0});
    paint.envMap=paintEnvironment;paint.envMapIntensity=.40;paint.userData.vehiclePaint=true;
    const roof=paint.clone();if(design.finish==='twotone'){roof.color.set(/^#[0-9a-f]{6}$/i.test(design.roofColour||'')?design.roofColour:'#141b22');roof.envMapIntensity=.18;}
    const parts=new Set(resolvePreviewParts(build.parts||[],window.JIMNY_MARKET_PRODUCTS||[]).filter(id=>body!=='3door'||['tires','snorkel','mod_reardoor_molle','skinnyjim_backbone','skinnyjim_jerry_tray','seats','doortrim'].includes(id)||globalThis.JimnyPracticalParts?.[id]?.bodyStyles.includes(body)));
    tyreType=resolveTyreType(design,parts);if(tyreType==='highway')parts.delete('tires');else parts.add('tires');
    // Geometry follows the saved Garage stance. The solver deliberately retains
    // representative stock mechanics; this is not a measured aftermarket tune.
    visualWheelRadius=parts.has('tires')?.368:.3465;
    const visualBodyLift=(parts.has('lift')?.055:0)+(visualWheelRadius-.3465);
    const grille=parts.has('autostylenn_big_suzuki_grille')?'block':parts.has('autostylenn_cursive_grille')?'script':parts.has('autostylenn_s_grille')?'smesh':design.grille;
    const selectedGrille={oem:'OEMGrille',block:'BlockGrille',rhino:'RhinoGrille',script:'ScriptGrille',chrome:'GlossGrille',delete:'DeleteGrille',classic:'ClassicGrille',mesh:'MeshGrille',smesh:'MeshGrille'}[grille]||'OEMGrille';
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
    const steelWheel=body==='5door'&&parts.has('suzuki_nomade_steelwheel');applyCatalogueWheel(wheelRoot,steelWheel);if(!steelWheel)applyWheelDesign(wheelRoot,design);
    applyTyreType(wheelRoot,tyreType);
    const badge=extractFactoryBadge(gltf.scene.getObjectByName('OEMGrille'));
    applyGrilleColours(gltf.scene.getObjectByName(selectedGrille),design,colour,body);
    fitSteeringBadge(gltf.scene.getObjectByName('Cabin'),badge,body);
    for(const name of ['BodyShell','RoofShell',selectedGrille,...(parts.has('bull')||parts.has('autostylenn_bumper_v1')?[]:['StockBumper']),...(parts.has('headlamps')?[]:['StockHeadlamps']),'Cabin','SpareWheel']){const o=gltf.scene.getObjectByName(name);if(o)bodyRig.attach(o);}
    const spare=bodyRig.getObjectByName('SpareWheel');if(design.partColours?.wheels)applyWheelColour(spare,design.partColours.wheels);else applyWheelFinish(spare,design.wheelFinish);applyWheelDesign(spare,design);
    const accessories=new T.Group();accessories.name='GarageAccessories';bodyRig.add(accessories);const materials=accessoryMaterials();materials.upholstery.color.set(({tan:'#a38b69',saddle:'#854d31',olive:'#59624d',stone:'#b3b1a5',black:'#303332'})[design.cabin]||'#a38b69');
    const emitters=Object.fromEntries(Object.entries(LIGHT_PROFILES).map(([id,p])=>[id,new T.MeshStandardMaterial({color:p.colour,roughness:.12,metalness:.1})]));
    visibleParts=accessoryBuilder({accessoryRig:accessories,mats:materials,detailed:{sBadgeGeometry:badge},modelBody:body,colour,effectiveDesign:design,lampEmitters:emitters})(parts,design);
    if(body==='5door'&&parts.has('suzuki_nomade_steelwheel'))visibleParts.push('suzuki_nomade_steelwheel');
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
  }
  function setPlayer(profile){
    for(const o of playerObjects){o.traverse(m=>m.material?.map?.dispose());bodyRig.remove(o);dispose(o);}
    // DecalGeometry expects an unposed vehicle while projecting into local space.
    const cp=car.position.clone(),cr=car.rotation.clone(),br=bodyRig.rotation.clone();car.position.set(0,0,0);car.rotation.set(0,0,0);bodyRig.rotation.set(0,0,0);car.updateMatrixWorld(true);
    // Human avatars are deliberately retired from this phase. Keep player
    // identity/name decals, but never load a saved avatar or a fallback body.
    playerObjects=[createNameDecals(profile.decal?profile.name:'',currentBody,paintMeshes,bodyRig,profile.nameStyle||{})];bodyRig.add(...playerObjects);car.position.copy(cp);car.rotation.copy(cr);bodyRig.rotation.copy(br);car.updateMatrixWorld(true);
  }
  function setWorld(nextWorld,nextGates){
    dispose(worldRoot);world=nextWorld;gates=[];const course=world.course,isSand=course.theme==='sand',isUrban=course.theme==='urban';
    const sky=isSand?'#dfc7aa':isUrban?'#cad3d2':'#c3d2d0';scene.background=new T.Color(sky);
    // A near-white450m fog wall bleached the valley/trees beneath an unfogged
    // mountain backdrop. Extend aerial perspective across the whole valley.
    const daylight=courseLighting(course.theme);scene.fog.color.set(daylight.fog);
    scene.fog.near=daylight.near;scene.fog.far=daylight.far;loadSky(course.theme);
    // Cloud-filtered daylight: broad sky fill keeps shadow-side rock and tread
    // readable without lifting the exposure or bleaching the sunlit gravel.
    hemisphere.intensity=daylight.hemisphere;sun.intensity=daylight.sunIntensity;scene.environmentIntensity=daylight.environment;
    sun.color.set(daylight.sunColour);skyUniforms.sunPosition.value.set(...daylight.sun);
    createLandscape(world,worldRoot);
    vegetation=worldRoot.getObjectByName('Layered vegetation');
    const post=mat('#eae7ce'),active=mat('#d37740'),inactive=mat('#736d55');
    nextGates.forEach((gate,i)=>{const g=new T.Group();worldRoot.add(g);const yaw=gateHeading(nextGates,i);g.position.set(gate.x,gate.elevation??world.height(gate.x,gate.z),gate.z);g.rotation.y=yaw;
      for(const side of [-1,1]){mesh(new T.CylinderGeometry(.035,.035,1.45,6),post,g,side*gate.radius,.725,0);box(g,.36,.33,.035,side*gate.radius,.98,0,(i===0?active:inactive).clone());}
      gates.push(g);
    });
    const end=nextGates.at(-1);if(end){const yaw=gateHeading(nextGates,nextGates.length-1),c=Math.cos(yaw),s=Math.sin(yaw),stripe=(x,z,w,d)=>{const wx=end.x+x*c+z*s,wz=end.z-x*s+z*c,o=box(worldRoot,w,.025,d,wx,world.height(wx,wz)+.025,wz,post);o.rotation.y=yaw;};for(let i=-4;i<=4;i++)for(const side of [-1,1])stripe(side*end.radius,i,.08,.9);for(const offset of [-4,4])stripe(0,offset,end.radius*2,.08);}
    // Base camp remains outside the drivable line.
    const a=companion(worldRoot,-10,-8),b=companion(worldRoot,10,-11,true);a.position.y=world.height(-10,-8);b.position.y=world.height(10,-11);
    for(let i=0;i<7;i++){const x=-13+i*4;mesh(new T.ConeGeometry(.18,.5,8),mat('#b8643c'),worldRoot,x,world.height(x,-3)+.25,-3);}
    firstCamera=true;
  }
  function render(state,index,dt,shot=''){
    car.position.set(state.x,state.y,state.z);car.rotation.y=state.yaw;bodyRig.rotation.set(state.pitch,0,state.roll);contact.position.set(state.x,(world?.height(state.x,state.z)||0)+.015,state.z);contact.rotation.set(-Math.PI/2,0,-state.yaw);
    wheelTravel=state.wheelTravel??(wheelTravel+state.speed*dt);
    wheels.forEach(({pivot,spin,marker},i)=>{const point=state.wheelCenters?.[i];if(point){const dx=point.x-state.x,dz=point.z-state.z,c=Math.cos(state.yaw),n=Math.sin(state.yaw);pivot.position.set(dx*c-dz*n,point.y-state.y+visualWheelRadius-.3465,dx*n+dz*c);}else pivot.position.y=visualWheelRadius+state.wheelHeights[i]-state.y;pivot.rotation.y=i<2?state.steer:0;spin.rotation.x=state.wheelRotations?.[i]??wheelTravel/visualWheelRadius;marker.visible=inspectionWheel===i;});
    cabinControls?.update(state);
    gates.forEach((g,i)=>{g.visible=i>=index||(inspecting&&i===index-1);g.children.forEach(o=>{if(o.geometry?.type==='RoundedBoxGeometry')o.material.color.set(i===index?'#d37740':'#736d55');});});
    const yaw=state.yaw,c=Math.cos(yaw),n=Math.sin(yaw),portrait=camera.aspect<1;
    const internal=['interior','dashboard','controls'].includes(cameraMode)&&!shot,bonnet=cameraMode==='bonnet';
    const fov=internal?(cameraMode==='interior'&&!portrait?65:76):cameraMode==='external'||shot==='chase'?54:47,near=internal?.025:bonnet?.05:.1;
    if(camera.fov!==fov||camera.near!==near){camera.fov=fov;camera.near=near;camera.updateProjectionMatrix();}
    if(cameraMode==='external'||internal)cameraPosition.set(state.x-n*10+c*.5,state.y+(portrait?4.3:3.1),state.z-c*10-n*.5);
    else if(bonnet)cameraPosition.set(state.x+n*1.2,state.y+1.8,state.z+c*1.2);
    else{const o=portrait?OVERVIEW.portrait:OVERVIEW.landscape;cameraPosition.set(state.x+c*o.side-n*o.back,state.y+o.height,state.z-n*o.side-c*o.back);}
    cameraPosition.y=Math.max(cameraPosition.y,(world?.height(cameraPosition.x,cameraPosition.z)||0)+1);
    const ahead=bonnet?12:cameraMode==='overview'?(portrait?OVERVIEW.portrait:OVERVIEW.landscape).ahead:portrait?2:5;
    aim.set(state.x+n*ahead,state.y+(bonnet?1.1:1.6),state.z+c*ahead);
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
    if(firstCamera||shot||internal||bonnet){camera.position.copy(cameraPosition);look.copy(aim);firstCamera=false;}else{camera.position.lerp(cameraPosition,1-Math.exp(-dt*5));look.lerp(aim,1-Math.exp(-dt*7));}
    camera.lookAt(look);skyDome.position.copy(camera.position);const sunOffset=courseLighting(world.course.theme).sun;sun.position.set(state.x+sunOffset[0],state.y+sunOffset[1],state.z+sunOffset[2]);sun.target.position.set(state.x,state.y,state.z);
    windowMaterials.forEach(material=>material.opacity=internal?.16:.63);
    renderer.toneMappingExposure=internal?1.08:courseLighting(world.course.theme).exposure;
    vegetation?.userData.update?.(camera);
    mirrors?.setEnabled(internal);mirrors?.update(camera,dt);
    camera.userData.skipRiverReflection=internal;
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
  return {loadVehicle,setPlayer,setWorld,render,canvas:renderer.domElement,setInspection(index,active=true){inspectionWheel=index;inspecting=active;},
    setWheelPreview(index){const next=Number.isInteger(index)&&index>=0&&index<4?index:null;if(next!==wheelPreview)thumbnailElapsed=1;wheelPreview=next;return wheelPreview;},
    setThumbnailVisible(visible){thumbnailVisible=Boolean(visible);if(thumbnailVisible)thumbnailElapsed=1;return thumbnailVisible;},
    beginCapture(width,height){capturing=true;renderer.setPixelRatio(1);renderer.setSize(width,height,false);camera.aspect=width/height;camera.updateProjectionMatrix();firstCamera=true;},
    endCapture(){capturing=false;renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));resize();firstCamera=true;lastShot='';},
    setCamera(mode){cameraMode=normalizeDrivingCamera(mode);firstCamera=true;return cameraMode;},
    cycleCamera(){const modes=DRIVING_CAMERAS;cameraMode=modes[(modes.indexOf(cameraMode)+1)%modes.length];firstCamera=true;return cameraMode;},
    cameraState:()=>({scannedRocks:rockAssetsReady(),mode:cameraMode,position:camera.position.toArray(),target:look.toArray(),cabin:cabinControls?.snapshot(),mirrors:mirrors?.snapshot(),body:currentBody,parts:[...visibleParts],wheelRadius:visualWheelRadius,bodyLift:bodyRig.position.y,tyreType,surfaceStyles:surfaceStyler.snapshot(),thumbnail:{visible:thumbnailVisible,wheel:wheelPreview,frames:thumbnailFrames,position:cabinCamera.position.toArray()}}),resetCamera(){firstCamera=true;},info:()=>renderer.info.render,dispose(){surfaceStyler.clear();disposed=true;skyRequest++;skies.forEach(entry=>{entry.texture.dispose();entry.environment.dispose();});skies.clear();skyDome.geometry.dispose();skyDome.material.dispose();observer.disconnect();mirrors?.dispose();cabinControls?.dispose();cabinMaterials?.dispose();cabinTarget.dispose();dispose(worldRoot);dispose(bodyRig);disposeCatalogueWheels(wheelRoot);disposeWheelDesigns(wheelRoot);disposeTyreTypes(wheelRoot);dispose(wheelRoot);disposeRockAssets();disposeVegetationAssets();disposeAuthoredPineAssets();env.dispose();daylightEnvironment?.dispose();renderer.dispose();}};
}
