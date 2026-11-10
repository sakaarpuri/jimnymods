// Standard-layout controller support. Analog triggers and the stick produce the
// same input shape as the keyboard and touch pedals; nothing here alters grip,
// power or any shift guard. Unknown layouts are ignored instead of guessed.
const clamp=(v,min=-1,max=1)=>Math.max(min,Math.min(max,v));
const dead=(value,zone)=>{const a=Math.abs(value);return a<=zone?0:Math.sign(value)*(a-zone)/(1-zone);};
const value=(pad,index)=>{const b=pad.buttons?.[index];return typeof b==='number'?b:b?.value??0;};
// Button index → game action, fired once per press.
export const GAMEPAD_ACTIONS=Object.freeze({0:'handbrake',1:'recover',3:'camera',4:'gearDown',5:'gearUp',8:'map',9:'pause',12:'rangeUp',13:'rangeDown'});
export function gamepadInput(pad,{deadzone=.14}={}){
  if(!pad||pad.connected===false||pad.mapping!=='standard')return null;
  const stick=dead(pad.axes?.[0]||0,deadzone),dpad=(value(pad,15)>.5?1:0)-(value(pad,14)>.5?1:0);
  // Progressive curve: small stick movements make small corrections.
  const right=dpad||Math.sign(stick)*Math.abs(stick)**1.5;
  // The game steers positive to the driver's left, so screen-right is negative.
  return {steer:-clamp(right)||0,throttle:clamp(dead(value(pad,7),.04),0,1),brake:clamp(dead(value(pad,6),.04),0,1),handbrake:value(pad,0)>.5};
}
export function mergeInputs(base,extra){
  if(!extra)return base;
  return {steer:Math.abs(extra.steer)>Math.abs(base.steer)?extra.steer:base.steer,throttle:Math.max(base.throttle,extra.throttle),brake:Math.max(base.brake,extra.brake),handbrake:!!(base.handbrake||extra.handbrake)};
}
export class GamepadDriver{
  constructor(source=()=>globalThis.navigator?.getGamepads?.()||[]){this.source=source;this.held=new Set();this.pad=null;this.active=false;}
  poll(){
    let pad=null;
    try{for(const candidate of this.source())if(candidate&&candidate.connected!==false&&candidate.mapping==='standard'){pad=candidate;break;}}catch{}
    const pressed=[],changed=this.active!==!!pad;this.active=!!pad;this.pad=pad;
    if(!pad){this.held.clear();return {input:null,pressed,connected:false,changed};}
    for(const [index,action] of Object.entries(GAMEPAD_ACTIONS)){const down=value(pad,index)>.5;if(down&&!this.held.has(action))pressed.push(action);if(down)this.held.add(action);else this.held.delete(action);}
    return {input:gamepadInput(pad),pressed,connected:true,changed};
  }
  rumble(strength=.4,milliseconds=120){
    try{this.pad?.vibrationActuator?.playEffect?.('dual-rumble',{duration:milliseconds,strongMagnitude:clamp(strength,0,1),weakMagnitude:clamp(strength*.6,0,1)})?.catch?.(()=>{});}catch{}
  }
}
