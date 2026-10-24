import {Color,Float32BufferAttribute,Matrix4,Vector3} from 'three';

export const WHEEL_FINISHES=Object.freeze([
 {id:'oem',name:'Factory finish',colour:null},
 {id:'graphite',name:'Satin graphite',colour:'#454b50'},
 {id:'bronze',name:'Satin bronze',colour:'#987345'},
 {id:'silver',name:'Machined silver',colour:'#b5b9bc'},
 {id:'black',name:'Black',colour:'#171b1d'}
].map(c=>Object.freeze({...c,description:'Representative cosmetic wheel finish, not a specific product or fitment claim.'})));
const states=new WeakMap(),assemblies=new Set(['StockWheels','AllTerrainWheels','SpareWheel']);
function wheelFrame(mesh,root){
 for(let p=mesh;p;p=p.parent){if(assemblies.has(p.name))return p;if(/Cabin|Grille|BodyShell|Bumper/.test(p.name))return null;if(p===root)break;}
 // The driving renderer extracts individual wheels into unnamed spin groups.
 // Only accept that explicit wheel-only shape, never a named non-wheel mesh.
 return !mesh.name&&!mesh.parent?.name?mesh.parent:null;
}
function prepare(mesh,frame){
 const originalGeometry=mesh.geometry,originalMaterial=mesh.material,position=originalGeometry.attributes.position;if(!position)return null;
 mesh.updateWorldMatrix(true,false);frame.updateWorldMatrix(true,false);
 const matrix=new Matrix4().copy(frame.matrixWorld).invert().multiply(mesh.matrixWorld),points=[],v=new Vector3();let minX=Infinity,maxX=-Infinity,minY=Infinity,maxY=-Infinity,minZ=Infinity,maxZ=-Infinity;
 for(let i=0;i<position.count;i++){v.fromBufferAttribute(position,i).applyMatrix4(matrix);points.push(v.clone());minX=Math.min(minX,v.x);maxX=Math.max(maxX,v.x);minY=Math.min(minY,v.y);maxY=Math.max(maxY,v.y);minZ=Math.min(minZ,v.z);maxZ=Math.max(maxZ,v.z);}
 // Material batches are not wheels: the separate hub batch can be much
 // smaller than the rim. Derive centres from the complete tyre assembly.
 // The driving renderer instead supplies a wheel-centred spin pivot.
 const named=assemblies.has(frame.name),spare=frame.name==='SpareWheel';
 let lowY=Infinity,highY=-Infinity,lowZ=Infinity,highZ=-Infinity,lowX=Infinity,highX=-Infinity;
 if(named){const inverse=frame.matrixWorld.clone().invert();frame.traverse(part=>{
  const p=part.geometry?.attributes.position;if(!p)return;part.updateWorldMatrix(true,false);const transform=inverse.clone().multiply(part.matrixWorld);
  for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i).applyMatrix4(transform);lowY=Math.min(lowY,v.y);highY=Math.max(highY,v.y);lowZ=Math.min(lowZ,v.z);highZ=Math.max(highZ,v.z);lowX=Math.min(lowX,v.x);highX=Math.max(highX,v.x);}
 });}
 const multiple=named&&!spare,cy=named?(lowY+highY)/2:0,cz=named?(lowZ+highZ)/2:0,cx=named?(lowX+highX)/2:0,halfWheelbase=multiple?(highZ-lowZ-highY+lowY)/2:0,mask=new Uint8Array(position.count),base=new Float32Array(position.count*3),attribute=originalGeometry.attributes.color;
 const sideHint=Math.sign(frame.parent?.position.x||1);
 for(let i=0;i<points.length;i++){
  // Spare-wheel rotation is on its parent, so its local axle is also X.
  const p=points[i],wheelZ=multiple?cz+(p.z>=cz?halfWheelbase:-halfWheelbase):cz,radius=Math.hypot(p.y-cy,p.z-wheelZ),side=multiple?Math.sign(p.x):sideHint;
  const outerDistance=side>0?maxX-p.x:p.x-minX;
  // Authored material batches include brake grooves/drums and centre badges.
  // Paint the barrel/rim and outer spoke faces only; retain hubs, nuts, emblems
  // and every brake vertex. The rim radius is 190.5 mm in both shipped bodies.
  mask[i]=+(radius>.165||(radius>.082&&outerDistance<.055));
  for(let j=0;j<3;j++)base[i*3+j]=originalMaterial.color[['r','g','b'][j]]*(originalMaterial.vertexColors&&attribute?attribute.getComponent(i,j):1);
 }
 if(!mask.some(Boolean))return null;
 const geometry=originalGeometry.clone(),material=originalMaterial.clone();geometry.setAttribute('color',new Float32BufferAttribute(base,3));const colours=geometry.attributes.color.array;material.color.set('#ffffff');material.vertexColors=true;
 material.userData.wheelFinishOriginal={name:originalMaterial.name,color:originalMaterial.color.getHexString(),vertexColors:originalMaterial.vertexColors};
 const state={originalGeometry,originalMaterial,geometry,material,mask,base,colours,restoring:false,released:false};
 // Existing scene disposal already disposes the active geometry/material. Also
 // release their preserved OEM resources, unless this is an OEM restoration.
 const release=()=>{if(state.restoring||state.released)return;state.released=true;originalGeometry.dispose();originalMaterial.dispose();};geometry.addEventListener('dispose',release);material.addEventListener('dispose',release);
 mesh.geometry=geometry;mesh.material=material;states.set(mesh,state);return state;
}
function restore(mesh,state){state.restoring=true;mesh.geometry=state.originalGeometry;mesh.material=state.originalMaterial;state.geometry.dispose();state.material.dispose();states.delete(mesh);}
function applyWheelChoice(root,choice){
 let count=0;if(!root?.traverse)return count;
 root.updateWorldMatrix?.(true,true);
 root.traverse(mesh=>{
  if(!mesh.isMesh||Array.isArray(mesh.material))return;
  let state=states.get(mesh);if(choice.id==='oem'){if(state){restore(mesh,state);count++;}return;}
  if(!state){if(!['MachinedAlloy','WheelGunmetal'].includes(mesh.material?.name))return;const frame=wheelFrame(mesh,root);if(!frame)return;state=prepare(mesh,frame);if(!state)return;}
  const tint=new Color(choice.colour);for(let i=0;i<state.mask.length;i++)for(let j=0;j<3;j++)state.colours[i*3+j]=state.mask[i]?tint[['r','g','b'][j]]:state.base[i*3+j];
  state.geometry.attributes.color.needsUpdate=true;state.material.userData.wheelFinish=choice.id;count++;
 });return count;
}
export function applyWheelFinish(root,finish='oem'){return applyWheelChoice(root,WHEEL_FINISHES.find(c=>c.id===finish)||WHEEL_FINISHES[0]);}
export function applyWheelColour(root,colour){return applyWheelChoice(root,/^#[0-9a-f]{6}$/i.test(colour||'')?{id:'custom',colour}:WHEEL_FINISHES[0]);}
export function disposeWheelFinishes(root){let count=0;root?.traverse(mesh=>{const state=states.get(mesh);if(state){restore(mesh,state);count++;}});return count;}
