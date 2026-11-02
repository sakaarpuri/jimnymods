import * as T from 'three';

// The physics chassis origin is 0.72 m above the model's ground-level origin.
// Keep the painted body and wheel axes in that same coordinate system on slopes.
const chassisHeight=.72;
const up=new T.Vector3(0,1,0),centre=new T.Vector3(),heading=new T.Quaternion(),steering=new T.Quaternion();

export function applyVehicleVisualPose(body,wheels,state,bodyLift=0){
  if(state.quaternion){
    heading.setFromAxisAngle(up,-state.yaw);
    const {x,y,z,w}=state.quaternion;
    body.quaternion.set(x,y,z,w).premultiply(heading).normalize();
  }else{
    body.rotation.set(state.pitch||0,0,state.roll||0);
  }
  centre.set(0,chassisHeight,0).applyQuaternion(body.quaternion);
  body.position.set(-centre.x,chassisHeight-centre.y+bodyLift,-centre.z);
  wheels.forEach(({pivot},i)=>{
    steering.setFromAxisAngle(up,i<2?(state.steer||0):0);
    pivot.quaternion.copy(body.quaternion).multiply(steering);
  });
}
