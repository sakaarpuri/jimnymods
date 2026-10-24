// Brief 4 front-end correction, the same displacement field modeling/correct_front_end.py
// applies to the exported model. Code-built parts that sit against the front face
// (bull bars, aftermarket bumpers and lamps, bonnet guard, snorkel) go through it so
// they keep their fit to the lowered fascia. Website coordinates: x left, y up, z forward.
import {Matrix4,Vector3} from 'three';

export const FRONT_AXLE_Z=Object.freeze({'5door':1.295,'3door':1.125});
const smoothstep=(a,b,v)=>{const t=Math.min(1,Math.max(0,(v-a)/(b-a)));return t*t*(3-2*t);};

// `rigid` treats the point as part of a unit that moves wholly with the front face
// (bumper, grille, lamps). `lateral` includes the grille narrowing and lamp move.
export function correctFrontEnd([x,y,z],{frontAxleZ=FRONT_AXLE_Z['5door'],rigid=false,lateral=true}={}){
  const zr=z-frontAxleZ;
  const front=rigid?1:smoothstep(.255,.455,zr),bonnet=smoothstep(-.445,.455,zr);
  const faceDrop=.055*smoothstep(.30,.445,y)+.060*smoothstep(.445,.86,y);
  const upperDrop=.115*smoothstep(1.00,1.15,y);
  const dy=-(front*faceDrop+(1-front)*bonnet*upperDrop);
  let dx=0;
  if(lateral&&x){
    const u=Math.abs(x),inboard=smoothstep(.405,.44,u);
    const shift=.10*u*(1-inboard)+.055*inboard*(1-smoothstep(.68,.80,u));
    const band=smoothstep(.78,.84,y)*(1-smoothstep(1.12,1.17,y)),depth=rigid?1:smoothstep(.38,.50,zr);
    dx=-Math.sign(x)*shift*band*depth;
  }
  return [x+dx,y+dy,z];
}

// Factory headlamp centres after the correction, for beam and glow positions.
export function stockHeadlampCentre(side,body='5door'){
  const [x,y]=correctFrontEnd([side*.550,.977,FRONT_AXLE_Z[body]+.6],{frontAxleZ:FRONT_AXLE_Z[body],rigid:true});
  return {x,y};
}

const local=new Matrix4(),inverse=new Matrix4(),point=new Vector3();
// Bakes the field into every mesh below `object`, measured in `space` (the rig whose
// coordinates match the model). Meshes the field does not move are left untouched.
export function correctObject(object,space,options={}){
  space.updateWorldMatrix(true,false);object.updateWorldMatrix(true,true);
  const toSpace=new Matrix4().copy(space.matrixWorld).invert();
  object.traverse(mesh=>{
    if(!mesh.isMesh||mesh.isInstancedMesh||!mesh.geometry?.attributes.position)return;
    local.multiplyMatrices(toSpace,mesh.matrixWorld);inverse.copy(local).invert();
    const source=mesh.geometry.attributes.position,moved=new Float32Array(source.count*3);let changed=false;
    for(let i=0;i<source.count;i++){
      point.fromBufferAttribute(source,i).applyMatrix4(local);
      const [x,y,z]=correctFrontEnd([point.x,point.y,point.z],options);
      if(Math.abs(x-point.x)+Math.abs(y-point.y)>1e-7)changed=true;
      point.set(x,y,z).applyMatrix4(inverse);moved[i*3]=point.x;moved[i*3+1]=point.y;moved[i*3+2]=point.z;
    }
    if(!changed)return;
    // Primitives may share geometry; give this mesh its own corrected copy.
    mesh.geometry=mesh.geometry.clone();mesh.geometry.attributes.position.array.set(moved);
    mesh.geometry.attributes.position.needsUpdate=true;mesh.geometry.computeBoundingBox();mesh.geometry.computeBoundingSphere();
  });
}
