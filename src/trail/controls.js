// Three.js +Z forward means +X is the driver's LEFT, not right.
// Positive steer/yaw turns toward +X. Keyboard and touch share this mapping.
// W / Up Arrow hold a brisk everyday pedal, Shift a gentle one for precision work, F the full pedal.
export const PEDAL=Object.freeze({gentle:.22,normal:.65,full:1});
export function drivingInput(keys=new Set(),touch=new Set()){
  const left=keys.has('ArrowLeft')||keys.has('KeyA')||touch.has('left');
  const right=keys.has('ArrowRight')||keys.has('KeyD')||touch.has('right');
  const full=keys.has('KeyF')||touch.has('full-throttle');
  const accelerator=full||keys.has('ArrowUp')||keys.has('KeyW')||touch.has('gas');
  // Digital keys represent pedal positions, not a speed boost. Normal is
  // brisk; explicit full pedal wins while held, even over gentle mode.
  // Releasing F restores the held normal/gentle input immediately.
  return {
    steer:Number(left)-Number(right),
    throttle:full?PEDAL.full:accelerator?(keys.has('ShiftLeft')||keys.has('ShiftRight')||touch.has('gentle')?PEDAL.gentle:PEDAL.normal):0,
    brake:(keys.has('ArrowDown')||keys.has('KeyS')||keys.has('Space')||touch.has('brake'))?1:0,
    handbrake:keys.has('KeyH')||touch.has('handbrake')
  };
}

export const SELECTOR_ORDER=Object.freeze(['P','R','N','D','2','L']);
// Pure mapping: callers must still pass requested shifts through the physical guards.
export function shortcutAction(code,state={gear:'N'}){
  if(code==='KeyQ'||code==='KeyE'){const i=SELECTOR_ORDER.indexOf(state.gear),next=Math.max(0,Math.min(SELECTOR_ORDER.length-1,i+(code==='KeyE'?1:-1)));return {type:'gear',value:SELECTOR_ORDER[next]};}
  if(['Digit1','Digit2','Digit3','Numpad1','Numpad2','Numpad3'].includes(code))return {type:'range',value:['2H','4H','4L'][Number(code.at(-1))-1]};
  return {KeyC:{type:'camera'},KeyM:{type:'map'},Escape:{type:'pause'},KeyH:{type:'handbrake'}}[code]||null;
}
export function isTypingTarget(target){return !!target&&(target.isContentEditable||['INPUT','TEXTAREA','SELECT'].includes(target.tagName));}
