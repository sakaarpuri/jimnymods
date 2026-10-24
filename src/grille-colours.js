import {BufferGeometry,Float32BufferAttribute,Matrix4,Mesh,Vector3} from 'three';

const states=new WeakMap();
const finishes=new Set(['GrilleAnthracite','MouldedPlastic','GlossBlackGrille','WheelGunmetal','BrightChrome','GrilleLettering']);
export const validGrilleColour=value=>typeof value==='string'&&(value==='body'||/^#[0-9a-f]{6}$/i.test(value))?value:'original';
// Decode quantized GLB attributes before splitting material-batched triangles.
export function triangleSubset(source,indices){
 const out=new BufferGeometry();for(const [name,a]of Object.entries(source.attributes)){const values=[];for(const index of indices)for(let j=0;j<a.itemSize;j++)values.push(a.getComponent(index,j));out.setAttribute(name,new Float32BufferAttribute(values,a.itemSize));}return out;
}
function separateFactoryEmblem(root,body){
 if(root.name!=='OEMGrille'||root.userData.badgeSeparated)return;
 root.userData.badgeSeparated=true;root.updateWorldMatrix(true,true);const meshes=[];root.traverse(o=>{if(o.isMesh&&o.material.name==='BrightChrome')meshes.push(o);});
 for(const mesh of meshes){
  const source=mesh.geometry,p=source.attributes.position,index=source.index,keep=[],badge=[],v=new Vector3(),transform=new Matrix4().copy(root.matrixWorld).invert().multiply(mesh.matrixWorld),offset=body==='3door'?-.17:0;
  for(let i=0;i<(index?.count||p.count);i+=3){const ids=[0,1,2].map(j=>index?index.getX(i+j):i+j);const isBadge=ids.every(id=>{v.fromBufferAttribute(p,id).applyMatrix4(transform);return Math.abs(v.x)<.09&&v.z>1.898+offset;});(isBadge?badge:keep).push(...ids);}
  if(!badge.length)continue;
  const emblem=new Mesh(triangleSubset(source,badge),mesh.material);emblem.name='FactoryGrilleEmblem';emblem.userData.grilleBadge=true;emblem.position.copy(mesh.position);emblem.quaternion.copy(mesh.quaternion);emblem.scale.copy(mesh.scale);emblem.castShadow=mesh.castShadow;emblem.receiveShadow=mesh.receiveShadow;mesh.parent.add(emblem);
  mesh.geometry=triangleSubset(source,keep);source.dispose();
 }
}
export function applyGrilleColours(root,design={},bodyColour='#d9b744',body='5door'){
 if(!root)return;separateFactoryEmblem(root,body);
 root.traverse(mesh=>{
  if(!mesh.isMesh||!finishes.has(mesh.material?.name)&&!mesh.userData.grilleBadge)return;
  let state=states.get(mesh);if(!state){const original=mesh.material;mesh.material=original.clone();mesh.userData.disposableMaterial=true;state={original:original.clone(),badge:!!mesh.userData.grilleBadge||original.name==='GrilleLettering'};states.set(mesh,state);mesh.material.addEventListener('dispose',()=>state.original.dispose());}
  const material=mesh.material;material.copy(state.original);
  const choice=validGrilleColour(design[state.badge?'badgeColour':'grilleColour']);
  // “Original finish” is an edit too. Blackout must not silently undo it.
  material.userData.explicitSurfaceColour=Object.hasOwn(design,state.badge?'badgeColour':'grilleColour');
  if(choice!=='original'){material.color.set(choice==='body'?bodyColour:choice);material.vertexColors=false;material.metalness=.12;material.roughness=.34;}
  else if(design.finish==='blackout'&&['BrightChrome','GrilleLettering'].includes(state.original.name)){material.color.set('#151b1e');material.vertexColors=false;material.metalness=.05;material.roughness=.78;}
  material.needsUpdate=true;
 });
}
