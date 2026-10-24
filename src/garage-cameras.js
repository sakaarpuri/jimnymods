/* Vehicle-space inspection positions. They do not imply left-hand-drive CAD. */
export const INTERIOR_VIEWS=new Set(['interior','passenger','doors','driver-door','passenger-door','seats','seatbacks','storage','console','footwell','headliner']);
export const CUTAWAY_VIEWS=new Set(['cabin','cutaway','cargo','doors-cutaway','headliner-cutaway','touring']);
export function insidePose(view,body='5door'){
 const offset=body==='3door'?-.17:0;
 const poses={
  interior:{eye:[-.38,1.48,-.08],yaw:0,pitch:-.45},
  passenger:{eye:[.38,1.48,-.08],yaw:0,pitch:-.38},
  doors:{eye:[.24,1.40,.20],yaw:-Math.PI/2,pitch:-.30},
  'driver-door':{eye:[.24,1.40,.20],yaw:-Math.PI/2,pitch:-.30},
  'passenger-door':{eye:[-.24,1.40,.20],yaw:Math.PI/2,pitch:-.30},
  seats:{eye:[.04,1.43,.14],yaw:Math.PI,pitch:-.48},
  seatbacks:{eye:[.02,1.43,-.64],yaw:0,pitch:-.60},
  storage:{eye:[.01,1.41,-.38],yaw:Math.PI,pitch:-.43},
  console:{eye:[.02,1.37,-.15],yaw:0,pitch:-.94},
  footwell:{eye:[-.39,1.13,.16],yaw:0,pitch:-.93},
  headliner:{eye:[.02,1.25,-.40],yaw:Math.PI,pitch:.72},
 };
 const p=poses[view]||poses.interior;return {...p,eye:[p.eye[0],p.eye[1],p.eye[2]+offset]};
}
