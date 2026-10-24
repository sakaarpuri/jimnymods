import {Matrix4,Mesh,MeshStandardMaterial,Vector3} from 'three';
import {triangleSubset} from './grille-colours.js';

// Reuse the raised vehicle emblem, not a typeset letter. Bake into the cabin
// frame before wheel extraction so the emblem turns with the wheel in-game.
export function fitSteeringBadge(cabin,factoryBadge,body='5door'){
 if(!cabin||!factoryBadge?.attributes.position.count||cabin.userData.steeringBadgeFitted)return null;
 cabin.userData.steeringBadgeFitted=true;cabin.updateWorldMatrix(true,true);
 const offset=body==='3door'?-.17:0,meshes=[];cabin.traverse(o=>{if(o.isMesh&&o.material.name==='BrightChrome')meshes.push(o);});
 for(const mesh of meshes){
  const source=mesh.geometry,p=source.attributes.position,index=source.index,keep=[],v=new Vector3(),matrix=new Matrix4().copy(cabin.parent?.matrixWorld||new Matrix4()).invert().multiply(mesh.matrixWorld);
  for(let i=0;i<(index?.count||p.count);i+=3){const ids=[0,1,2].map(j=>index?index.getX(i+j):i+j);const oldBadge=ids.every(id=>{v.fromBufferAttribute(p,id).applyMatrix4(matrix);return Math.abs(v.x+.38)<.04&&Math.abs(v.y-1.16)<.04&&v.z>.218+offset&&v.z<.232+offset;});if(!oldBadge)keep.push(...ids);}
  if(keep.length<(index?.count||p.count)){mesh.geometry=triangleSubset(source,keep);source.dispose();}
 }
 const geometry=factoryBadge.clone();geometry.computeBoundingBox();const center=geometry.boundingBox.getCenter(new Vector3()),width=geometry.boundingBox.max.x-geometry.boundingBox.min.x;
 geometry.translate(-center.x,-center.y,-center.z);geometry.scale(.044/width,.044/width,.044/width);geometry.rotateY(Math.PI);geometry.translate(-.38,1.16,.222+offset);
 const material=new MeshStandardMaterial({name:'SteeringEmblem',color:'#c7cbcc',metalness:.65,roughness:.27});
 const emblem=new Mesh(geometry,material);emblem.name='SteeringSuzukiEmblem';emblem.userData.disposableMaterial=true;emblem.castShadow=false;
 // The exported RHD cabin has a mirrored node transform. Cancel that transform
 // for the already vehicle-space emblem, rather than putting it on the passenger side.
 emblem.applyMatrix4(cabin.matrix.clone().invert());cabin.add(emblem);return emblem;
}
