// Keeps driving smooth by trading render resolution for frame rate. Pure
// controller: feed it an averaged frames-per-second sample and apply the scale.
export function createResolutionGovernor({min=.6,max=1,low=40,high=56,veryLow=27}={}){
  let scale=max,slow=0,fast=0,patience=2,skip=1,reference=0,ineffective=0,locked=false;
  return {
    get scale(){return scale;},
    // At the floor and still slow: the caller may shed other costs, such as shadow resolution.
    get exhausted(){return !locked&&scale<=min+.001&&slow>0;},
    // Lower resolution did not help, so full detail was restored and left alone.
    get locked(){return locked;},
    // Ignore the next sample: it includes shader compilation or a resume hitch.
    settle(){skip=1;slow=fast=0;reference=0;},
    reset(){scale=max;slow=fast=0;patience=2;skip=1;reference=0;ineffective=0;locked=false;},
    sample(fps){
      if(locked||!Number.isFinite(fps)||fps<=0)return scale;
      if(skip>0){skip--;return scale;}
      // A frame rate that ignores resolution is capped (battery saver, 30 Hz) or
      // limited elsewhere. Blurring the picture would cost detail for nothing.
      if(reference){ineffective=fps<reference*1.08?ineffective+1:0;reference=0;if(ineffective>=2){scale=max;locked=true;return scale;}}
      if(fps<low){
        fast=0;slow++;
        if((fps<veryLow||slow>=2)&&scale>min){scale=Math.max(min,+(scale*.85).toFixed(3));slow=0;reference=fps;
          // A step up that had to be undone makes the next one harder to earn.
          patience=Math.min(32,patience*2);}
      }else if(fps>=high){
        slow=0;fast++;
        if(fast>=patience&&scale<max){scale=Math.min(max,+(scale*1.1).toFixed(3));fast=0;}
      }else{slow=0;fast=0;}
      return scale;
    }
  };
}
