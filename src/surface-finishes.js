import '../assets/surface-style-state.js';
import {Mesh,MeshStandardMaterial,DoubleSide} from 'three';
import {extractMirrorLenses} from './trail/mirrors.js';
const {BLACK,clean}=globalThis.JimnySurfaceStyles;
const grilles=new Set(['OEMGrille','BlockGrille','RhinoGrille','ScriptGrille','GlossGrille','DeleteGrille','ClassicGrille','MeshGrille']);
const optical=/Glass|Lens|Lamp|Emitter|Reflector|Indicator|RearLamp|Instrument|LCD|Display|Needle|Mirror/i;
const cloth=/Fabric|SeatInsert|SeatCover|Carpet|Woven|Upholstery/i;
export function markSurfaceMaterials(mats,emitters={}){
 for(const [key,material]of Object.entries(mats))if(material?.userData)material.userData.surfaceKind=key;
 for(const material of Object.values(emitters))material.userData.surfaceKind='optic';
}
export function targetFor(mesh){
 if(mesh.userData.grilleBadge)return 'grille';
 for(let p=mesh;p;p=p.parent){if(p.userData.finishTarget)return p.userData.finishTarget;if(grilles.has(p.name))return 'grille';
  if(['StockWheels','AllTerrainWheels','SpareWheel'].includes(p.name))return 'wheels';if(p.name==='RoofShell')return 'roof';if(p.name==='StockBumper')return 'bumpers';if(p.name==='StockHeadlamps')return 'headlamps';if(p.name==='Cabin')return 'cabin';if(p.name==='BodyShell')return mesh.material?.userData.vehiclePaint||mesh.material?.name==='BodyPaint'?'body':'trim';}
 return null;
}
export function protectMirrorSurfaces(root,body){
 for(const spec of extractMirrorLenses(root,body)){
  const material=new MeshStandardMaterial({name:'MirrorGlass',color:'#c4cccf',metalness:1,roughness:.12,side:DoubleSide});
  const mesh=new Mesh(spec.geometry,material);mesh.name='ProtectedMirror-'+spec.id;mesh.userData.disposableMaterial=true;root.add(mesh);
  (root.getObjectByName(spec.id==='centre'?'Cabin':'BodyShell')||root).attach(mesh);
 }
}
export function surfaceProperties(material){
 const kind=material.userData.surfaceKind||'',fabric=cloth.test(material.name)||['seat','canvas','upholstery'].includes(kind)||material.userData.ownsTextures;
 const protectedSurface=optical.test(material.name)||['glass','lens','smoked','reflector','white','red','orange','ambient','optic','rubber'].includes(kind)||/TyreRubber|IntakeShadow|Brake/.test(material.name)||(material.emissiveIntensity>0&&material.emissive?.getHex()>0)||material.isMeshBasicMaterial||(!fabric&&material.map);
 return {fabric,protectedSurface};
}
// Every edit is reversible. Clones share textures but never own/dispose them.
// Restore before any wheel/grille/upholstery adapter replaces its materials.
export function createSurfaceStyler(){
 const originals=new Map(),owned=new Set();let summary={materials:0,targets:[]};
 function clear(){for(const [mesh,material]of originals)mesh.material=material;originals.clear();for(const m of owned)m.dispose();owned.clear();summary={materials:0,targets:[]};}
 function apply(roots,design={}){
  clear();const spec=clean(design),cache=new Map(),targets=new Set();
  for(const root of roots)root?.traverse(mesh=>{
   if(!mesh.isMesh||Array.isArray(mesh.material))return;
   const original=mesh.material,target=targetFor(mesh),mode=spec.partFinishes[target],{fabric,protectedSurface}=surfaceProperties(original),solidRim=target==='wheels'&&original.name==='CatalogueSteelWheel',colour=!fabric&&(target!=='wheels'||solidRim)?spec.partColours[target]:null;
   if(!target||protectedSurface||(original.name==='BrightChrome'&&['headlamps','bumpers'].includes(target))||(!spec.allBlack&&!colour&&(!mode||fabric)))return;
   // Wheel tinting owns a vertex mask that excludes drums, discs and hubs.
   // Explicit grille/logo colours take precedence over the blackout base.
   const black=spec.allBlack&&(target!=='wheels'||solidRim)&&!(fabric&&design.cabin&&design.cabin!=='black')&&!original.userData.explicitSurfaceColour&&!original.userData.vehiclePaint&&!['BodyPaint','RoofPaint'].includes(original.name),finish=fabric?null:mode;
   if(!black&&!finish&&!colour)return;
   const key=original.uuid+':'+target+':'+black+':'+finish+':'+colour;let material=cache.get(key);
   if(!material){material=original.clone();material.userData={...material.userData,surfaceStyle:{target,black,finish}};
    if(black){material.color.set(BLACK);material.vertexColors=false;material.metalness=Math.min(material.metalness||0,.12);}
    if(colour){material.color.set(colour);material.vertexColors=false;}
    if(finish){material.roughness=finish==='matte'?.85:.14;material.roughnessMap=null;
     if('clearcoat'in material){material.clearcoat=finish==='matte'?.02:.95;material.clearcoatRoughness=finish==='matte'?.7:.09;}}
    material.needsUpdate=true;cache.set(key,material);owned.add(material);
   }
   originals.set(mesh,original);mesh.material=material;targets.add(target);
  });
  summary={materials:owned.size,targets:[...targets]};return summary;
 }
 return {apply,clear,snapshot:()=>({...summary,targets:[...summary.targets]})};
}
