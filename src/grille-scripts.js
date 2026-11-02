import {Box3,BufferGeometry,CatmullRomCurve3,Float32BufferAttribute,Group,Matrix4,Mesh,SphereGeometry,TubeGeometry,Uint32BufferAttribute,Vector3} from 'three';
import lettering from './grille-script-data.js';
const variantsByGrille=new WeakMap();

function decode(text){const raw=atob(text),bytes=new Uint8Array(raw.length);for(let i=0;i<raw.length;i++)bytes[i]=raw.charCodeAt(i);return bytes.buffer;}
function makeGeometry(data){
 const values=new Float32Array(decode(data.vertices)),indices=new Uint32Array(decode(data.indices)),positions=[],normals=[];
 for(let i=0;i<values.length;i+=6){positions.push(values[i],values[i+1],values[i+2]);normals.push(values[i+3],values[i+4],values[i+5]);}
 const geo=new BufferGeometry();geo.setAttribute('position',new Float32BufferAttribute(positions,3));geo.setAttribute('normal',new Float32BufferAttribute(normals,3));geo.setIndex(new Uint32BufferAttribute(indices,1));return geo;
}

// Single-line, rounded chrome strokes inspired by the reference badge. The
// individual strokes stay real geometry, so finishes and lighting still work.
function makeVintageBadge(material,centre,size,toLocal){
 const badge=new Group();badge.name='Suzuki slim vintage script badge';
 const strokes=[
  [[.17,.30],[.14,.53],[.105,.58],[.085,.43],[.11,.24],[.15,.04],[.17,-.15],[.14,-.35],[.09,-.42],[.035,-.39],[.02,-.28],[.055,-.19],[.13,-.17],[.19,-.15]],
  [[.18,-.15],[.21,.08],[.23,.08],[.215,-.10],[.22,-.17],[.25,-.15],[.28,.08],[.26,-.11],[.27,-.16],[.30,-.13]],
  [[.30,.04],[.34,.07],[.37,.08],[.32,-.13],[.36,-.15],[.39,-.11]],
  [[.39,.06],[.375,-.10],[.385,-.15],[.41,-.13],[.44,.07],[.425,-.11],[.435,-.15],[.46,-.12]],
  [[.46,-.12],[.50,.42],[.49,.13],[.48,-.14]],
  [[.49,-.04],[.54,.10],[.51,-.03],[.55,-.13],[.58,-.12]],
  [[.59,.06],[.575,-.11],[.59,-.14],[.63,-.12]],
  [[.02,-.25],[.20,-.20],[.42,-.16],[.66,-.13],[.76,-.11]]
 ];
 const point=([x,y])=>new Vector3(centre.x+(x-.39)*size.x*1.35,centre.y+y*size.y*1.25,centre.z+.004).applyMatrix4(toLocal);
 for(const stroke of strokes){const points=stroke.map(point),curve=new CatmullRomCurve3(points,false,'centripetal');const mesh=new Mesh(new TubeGeometry(curve,Math.max(12,points.length*7),.003,8,false),material.clone());mesh.userData.grilleBadge=true;mesh.userData.disposableMaterial=true;badge.add(mesh);}
 const dot=new Mesh(new SphereGeometry(.0034,8,6),material.clone());dot.position.copy(point([.605,.29]));dot.userData.grilleBadge=true;dot.userData.disposableMaterial=true;badge.add(dot);
 return badge;
}

// Both script badges are authored 3D shapes, positioned over the existing
// mesh grille and sharing its colour/finish controls. They are representative
// letterforms, not scans or exact tooling of a supplier's badge.
export function configureScriptGrille(group,variant='script'){
 if(!group)return;
 let state=variantsByGrille.get(group);
 if(!state){
  const original=group.getObjectByName('ScriptGrille__GrilleLettering');if(!original)return;
  group.updateWorldMatrix(true,true);const bounds=new Box3().setFromObject(original,true);if(bounds.isEmpty())return;
  const centre=bounds.getCenter(new Vector3()),size=bounds.getSize(new Vector3()),toLocal=new Matrix4().copy(group.matrixWorld).invert();
  const variants={modern:original};
  for(const [id,source] of [['heritage',lettering.heritage]]){
   const geometry=makeGeometry(source);geometry.scale(size.x,id==='loop'?size.y*1.08:size.y*1.14,size.z);geometry.translate(centre.x,centre.y,centre.z+.001);geometry.applyMatrix4(toLocal);
   const mesh=new Mesh(geometry,original.material.clone());mesh.name=`Suzuki ${id} script badge`;mesh.userData.grilleBadge=true;mesh.userData.disposableMaterial=true;mesh.castShadow=true;mesh.receiveShadow=true;group.add(mesh);variants[id]=mesh;
  }
  variants.loop=makeVintageBadge(original.material,centre,size,toLocal);group.add(variants.loop);
  state=variants;variantsByGrille.set(group,state);
 }
 const chosen=variant==='script-loop'?'loop':variant==='script-modern'?'modern':'heritage';
 for(const [id,mesh] of Object.entries(state))mesh.visible=id===chosen;
 // This separate mesh is the bold script's rectangular plaque, not the grille.
 const backing=group.getObjectByName('ScriptGrille__GlossBlackGrille');if(backing)backing.visible=chosen!=='loop';
}
