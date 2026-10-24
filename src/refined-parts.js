import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

// Reference-guided visual assets, not manufacturer CAD or fitment certification.
// Published tray size: Front Runner KRSJ007T / KRSJ008T, 1345 x 1964 mm.
export const SLIMLINE_TRAY=Object.freeze({width:1.345,length:1.964,height:.050,legs:8});

export function extractFactoryBadge(grille,referenceMatrix=new THREE.Matrix4()){
  const positions=[],point=new THREE.Vector3();grille.updateWorldMatrix(true,true);
  let front=-Infinity;grille.traverse(obj=>{if(!obj.isMesh||obj.material.name!=='BrightChrome')return;const p=obj.geometry.attributes.position,transform=new THREE.Matrix4().multiplyMatrices(referenceMatrix,obj.matrixWorld);for(let i=0;i<p.count;i++){point.fromBufferAttribute(p,i).applyMatrix4(transform);front=Math.max(front,point.z);}});
  grille.traverse(obj=>{
    if(!obj.isMesh||obj.material.name!=='BrightChrome')return;
    const geometry=obj.geometry,p=geometry.attributes.position,index=geometry.index;
    const transform=new THREE.Matrix4().multiplyMatrices(referenceMatrix,obj.matrixWorld);
    // Read normalized quantized coordinates into floats before transforming.
    // Writing world coordinates back into integer attributes corrupts the mesh.
    for(let i=0;i<(index?.count||p.count);i+=3){
      const triangle=[];
      for(let j=0;j<3;j++){point.fromBufferAttribute(p,index?index.getX(i+j):i+j).applyMatrix4(transform);triangle.push(point.clone());}
      if(triangle.every(v=>v.z>front-.014&&Math.abs(v.x)<.09))for(const v of triangle)positions.push(v.x,v.y,v.z);
    }
  });
  const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geometry.computeVertexNormals();return geometry;
}

function block(group,size,position,material,radius=.002){
  const mesh=new THREE.Mesh(new RoundedBoxGeometry(...size,2,Math.min(radius,...size.map(v=>v/3))),material);
  mesh.position.set(...position);mesh.castShadow=mesh.receiveShadow=true;group.add(mesh);return mesh;
}

export function slimlineRack(materials,tall=false){
  const group=new THREE.Group();group.name=tall?'Slimline II tall reference':'Slimline II reference';
  const {width:w,length:l}=SLIMLINE_TRAY,y=tall?1.88:1.83,z=-.62;
  // Raised perimeter with a recessed T-slot, not a tall cargo basket.
  for(const x of [-w/2+.016,w/2-.016]){
    block(group,[.032,.05,l],[x,y,z],materials.darkmetal);
    block(group,[.006,.003,l-.04],[x,y+.026,z],materials.trim,.0005);
  }
  for(const end of [-1,1])block(group,[w-.032,.05,.032],[0,y,z+end*(l/2-.016)],materials.darkmetal);
  for(let i=0;i<10;i++){
    const crossZ=z-l/2+.10+i*(l-.20)/9;
    block(group,[w-.064,.024,.09],[0,y-.006,crossZ],materials.darkmetal);
    block(group,[w-.08,.003,.006],[0,y+.007,crossZ],materials.trim,.0005);
  }
  // Four separate clamps per side; the old generic platform had only four total.
  for(const side of [-1,1])for(const legZ of [-1.47,-.87,-.27,.27]){
    const h=y-.025-1.695;
    const leg=block(group,[.026,h,.10],[side*.675,1.695+h/2,legZ],materials.darkmetal);
    leg.name='Gutter mounting leg';
    leg.rotation.z=side*.29;
    block(group,[.09,.018,.115],[side*.712,1.690,legZ],materials.rubber);
    block(group,[.018,.052,.103],[side*.751,1.672,legZ],materials.darkmetal);
    for(const dy of [-.015,.015]){
      const bolt=new THREE.Mesh(new THREE.CylinderGeometry(.006,.006,.020,6),materials.metal);
      bolt.rotation.z=Math.PI/2;bolt.position.set(side*.765,1.691+dy,legZ);group.add(bolt);
    }
  }
  const fairing=block(group,[w-.08,.092,.009],[0,y-.075,z+l/2-.015],materials.darkmetal);
  fairing.rotation.x=-.48;
  return group;
}

export function fittedVisors(material){
  const group=new THREE.Group();group.name='Contoured four-door rain visors';
  const profiles=[[[.35,1.641],[-.316,1.641],[-.316,1.598],[.326,1.598],[.458,1.362],[.492,1.382]],
    [[-.435,1.641],[-1.184,1.641],[-1.184,1.595],[-.435,1.595]]];
  for(const side of [-1,1])for(const points of profiles){
    const vertices=[],indices=[],n=points.length;
    for(const offset of [0,.004])for(const [z,y] of points)vertices.push(side*(.746-(y-1.14)*.105+.018+offset),y,z);
    const contour=points.map(([z,y])=>new THREE.Vector2(z,y));
    for(const [a,b,c] of THREE.ShapeUtils.triangulateShape(contour,[]))indices.push(a,b,c,c+n,b+n,a+n);
    for(let i=0;i<n;i++){const j=(i+1)%n;indices.push(i,j,j+n,i,j+n,i+n);}
    const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));geo.setIndex(indices);geo.computeVertexNormals();
    const mesh=new THREE.Mesh(geo,material);mesh.castShadow=false;group.add(mesh);
  }
  return group;
}

export function mouldedSpareCover(materials,badgeGeometry){
  const group=new THREE.Group();group.name='Moulded spare-wheel centre cover';
  group.position.z=.10; // follows revised factory spare/covered-length envelope
  // Retain the visible tyre sidewall, as on the Suzuki hard centre cover.
  const profile=[[0,.035],[.18,.035],[.215,.031],[.232,.020],[.239,.008],[.239,-.017],[.230,-.022]];
  const shell=new THREE.Mesh(new THREE.LatheGeometry(profile.toReversed().map(p=>new THREE.Vector2(...p)),96),materials.trim);
  shell.name='Spare cover shell';
  shell.rotation.x=-Math.PI/2;shell.position.set(0,.995,-2.045);shell.castShadow=true;group.add(shell);
  const band=block(group,[.36,.020,.005],[0,.922,-2.083],materials.darkmetal,.002);band.rotation.z=-.04;
  if(badgeGeometry?.attributes.position.count){
    const badge=badgeGeometry.clone();badge.computeBoundingBox();
    const centre=badge.boundingBox.getCenter(new THREE.Vector3());
    badge.translate(-centre.x,-centre.y,-centre.z);badge.scale(.63,.63,.63);badge.rotateY(Math.PI);badge.translate(0,1.075,-2.086);
    const emblem=new THREE.Mesh(badge,materials.chrome);emblem.name='Spare cover Suzuki emblem';group.add(emblem);
  }
  return group;
}
