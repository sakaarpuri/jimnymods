import {Matrix4,Mesh,Vector3} from 'three';
import {triangleSubset} from './grille-colours.js';

// A replacement front design, including a logo-delete grille, or an explicit
// logo colour makes the rear emblem unnecessary. Resetting both restores it.
export function frontLogoCustomized(design={}){
  return (!!design.grille&&design.grille!=='oem')||!!(design.badgeColour&&design.badgeColour!=='original');
}

// The authored spare batches its small raised S with the alloy mesh. Split only
// the emblem's triangles, leaving the hub and wheel intact and reversible.
export function separateSpareEmblem(root,body='5door'){
  if(!root)return null;
  const existing=root.getObjectByName('SpareHubSuzukiEmblem');if(existing)return existing;
  const sourceMesh=root.getObjectByName('SpareWheel__MachinedAlloy');if(!sourceMesh?.geometry?.attributes.position)return null;
  root.updateWorldMatrix(true,true);
  const transform=new Matrix4().copy(root.matrixWorld).invert().multiply(sourceMesh.matrixWorld);
  const source=sourceMesh.geometry,p=source.attributes.position,index=source.index,keep=[],badge=[],v=new Vector3();
  // SpareWheel is rotated 90°: its local X is the axle and its hub centre
  // is the local origin in Y/Z. The two body assets have different hub depths.
  const axle=body==='3door'?-.08121:.08879;
  for(let i=0;i<(index?.count||p.count);i+=3){
    const ids=[0,1,2].map(j=>index?index.getX(i+j):i+j);
    const isBadge=ids.every(id=>{v.fromBufferAttribute(p,id).applyMatrix4(transform);return Math.abs(v.z)<.015&&Math.abs(v.y)<.016&&Math.abs(v.x-axle)<.002;});
    (isBadge?badge:keep).push(...ids);
  }
  if(!badge.length||!keep.length)return null;
  const emblem=new Mesh(triangleSubset(source,badge),sourceMesh.material);emblem.name='SpareHubSuzukiEmblem';
  emblem.position.copy(sourceMesh.position);emblem.quaternion.copy(sourceMesh.quaternion);emblem.scale.copy(sourceMesh.scale);
  emblem.castShadow=sourceMesh.castShadow;emblem.receiveShadow=sourceMesh.receiveShadow;sourceMesh.parent.add(emblem);
  sourceMesh.geometry=triangleSubset(source,keep);source.dispose();return emblem;
}

export function updateSpareEmblem(root,body,design={}){
  const emblem=separateSpareEmblem(root,body);if(emblem)emblem.visible=!frontLogoCustomized(design)&&root.getObjectByName('SpareWheel__MachinedAlloy')?.visible!==false;return emblem;
}
