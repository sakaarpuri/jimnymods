import {Box3,Group,LatheGeometry,Mesh,Vector2,Vector3,Matrix4} from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {mergeGeometries} from 'three/addons/utils/BufferGeometryUtils.js';

export const TYRE_TYPES=Object.freeze(['highway','allterrain','mudterrain']);
export function resolveTyreType(design={},parts=new Set()){
  return TYRE_TYPES.includes(design.tyreType)?design.tyreType:parts.has('tires')?'allterrain':'highway';
}

// Representative open-void mud tread, not a branded tyre or a handling upgrade.
// Retain the authored assembly radius and bead seat. No physics values change.
export function mudTerrainGeometry(radius=.368,width=.235){
  const half=width/2,bed=radius-.016;
  const profile=[[.193,-half*.72],[.235,-half*.93],[radius*.83,-half],
    [bed*.97,-half*.96],[bed,-half*.77],[bed,half*.77],
    [bed*.97,half*.96],[radius*.83,half],[.235,half*.93],[.193,half*.72]];
  const carcass=new LatheGeometry(profile.map(([r,x])=>new Vector2(r,x)),96);carcass.rotateZ(-Math.PI/2);
  const chunks=[carcass.toNonIndexed()];carcass.dispose();
  // Alternating staggered shoulder lugs and central chevrons create real voids
  // visible in silhouette. Rounded edges avoid a row of sharp rectangular teeth.
  for(let row=0;row<32;row++)for(const side of [-1,1]){
    const angle=(row+(side>0?.5:0))*Math.PI*2/32;
    for(const [x,w,length,slant] of [[side*width*.32,width*.36,.047,side*.38],[side*width*.105,width*.30,.058,-side*.48]]){
      const block=new RoundedBoxGeometry(w,.019,length,1,.003);
      block.rotateY(slant);block.translate(x,radius-.0095,0);block.rotateX(angle);
      chunks.push(block.index?block.toNonIndexed():block);if(block.index)block.dispose();
    }
  }
  const result=mergeGeometries(chunks);chunks.forEach(g=>g.dispose());
  // Rounded-box corners must never silently increase rolling diameter.
  const p=result.attributes.position;
  for(let i=0;i<p.count;i++){const y=p.getY(i),z=p.getZ(i),r=Math.hypot(y,z);if(r>radius){p.setY(i,y*radius/r);p.setZ(i,z*radius/r);}}
  result.computeVertexNormals();result.computeBoundingBox();result.computeBoundingSphere();
  result.userData.tyreType='mudterrain';return result;
}

const states=new WeakMap(),assemblyNames=new Set(['StockWheels','AllTerrainWheels']);
function frameFor(mesh,root){for(let p=mesh.parent;p;p=p.parent){if(assemblyNames.has(p.name))return p;if(p===root)break;}return mesh.parent;}
function restore(frame){const state=states.get(frame);if(!state)return;state.originals.forEach(o=>o.visible=state.visibility.get(o));frame.remove(state.group);state.group.traverse(o=>{o.geometry?.dispose();o.material?.dispose();});states.delete(frame);}
export function disposeTyreTypes(root){const frames=[];root?.traverse(o=>{if(states.has(o))frames.push(o);});frames.forEach(restore);}
export function applyTyreType(root,type='highway'){
  if(!root?.traverse)return 0;
  // Highway and AT use their detailed Blender-authored carcasses/treads. The
  // caller selects StockWheels/AllTerrainWheels consistently with this type.
  if(type!=='mudterrain'){disposeTyreTypes(root);return 0;}
  const groups=new Map();root.updateWorldMatrix(true,true);
  root.traverse(mesh=>{if(mesh.isMesh&&mesh.material?.name==='TyreRubber'){
    const frame=frameFor(mesh,root);if(states.has(frame))return;
    if(!groups.has(frame))groups.set(frame,[]);groups.get(frame).push(mesh);
  }});
  let count=0;
  for(const [frame,originals] of groups){
    const points=[],v=new Vector3(),bounds=new Box3();
    for(const mesh of originals){const matrix=new Matrix4().copy(frame.matrixWorld).invert().multiply(mesh.matrixWorld),p=mesh.geometry.attributes.position;
      for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i).applyMatrix4(matrix);points.push(v.clone());bounds.expandByPoint(v);}}
    const size=bounds.getSize(new Vector3()),multiple=size.z>size.y*2,centre=bounds.getCenter(new Vector3()),clusters=new Map();
    for(const p of points){const key=multiple?`${p.x>centre.x?1:-1},${p.z>centre.z?1:-1}`:'single';if(!clusters.has(key))clusters.set(key,new Box3());clusters.get(key).expandByPoint(p);}
    const group=new Group();group.name='MudTerrainTyres';
    for(const box of clusters.values()){
      const size=box.getSize(new Vector3()),centre=box.getCenter(new Vector3()),material=originals[0].material.clone();
      material.name='MudTerrainRubber';material.vertexColors=false;material.roughness=.97;material.metalness=0;
      const tyre=new Mesh(mudTerrainGeometry(size.y/2,size.x),material);tyre.position.copy(centre);tyre.castShadow=true;tyre.receiveShadow=true;group.add(tyre);count++;
    }
    const visibility=new Map(originals.map(o=>[o,o.visible]));originals.forEach(o=>o.visible=false);frame.add(group);states.set(frame,{group,originals,visibility});
  }
  return count;
}
