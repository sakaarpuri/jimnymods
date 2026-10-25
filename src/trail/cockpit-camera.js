import {Vector3} from 'three';

export const DRIVING_CAMERAS=Object.freeze(['external','interior','bonnet','overview']);
// Overhead follow view, metres. Was back 17 / side 14 / height 15, aimed 5 ahead (2 on portrait screens).
export const OVERVIEW=Object.freeze({back:8,side:5,height:9,ahead:7,aheadPortrait:4.5});
export function normalizeDrivingCamera(mode){return ['dashboard','controls'].includes(mode)?'interior':DRIVING_CAMERAS.includes(mode)?mode:'external';}
// Mount ahead of the windscreen/roof and follow body pitch/roll, rather than
// leaving a world-horizontal camera inside the roof when climbing a slope.
export function bonnetPose(bodyRig){return {position:bodyRig.localToWorld(new Vector3(0,1.48,1.64)),target:bodyRig.localToWorld(new Vector3(0,1.42,18))};}

// A composed cockpit view, rather than a calibrated driver's-eye camera.
// Pull back within the cabin to show hands, instruments and road together.
// The anatomical eye is retained for the separate look-down view.
export function cockpitPose(bodyRig,eye,body='5door',mode='interior'){
  const offset=body==='3door'?-.17:0;
  const local=eye?bodyRig.worldToLocal(eye.clone()):new Vector3(-.38,1.52,.08+offset);
  if(mode==='dashboard')return {position:bodyRig.localToWorld(local),target:bodyRig.localToWorld(new Vector3(-.38,.1,1.1+offset))};
  local.add(new Vector3(.10,-.10,-.23));
  return {position:bodyRig.localToWorld(local),target:bodyRig.localToWorld(new Vector3(.02,.93,.98+offset))};
}
