// Optional game challenge, separate from the educational control score.
export function formatTrialTime(seconds){
  const n=Math.max(0,Math.floor(Number.isFinite(seconds)?seconds:0));
  return `${Math.floor(n/60)}:${String(n%60).padStart(2,'0')}`;
}
export function trialResult(seconds,score,oldBest){
  if(!Number.isFinite(seconds)||seconds<0||!Number.isFinite(score)||score<70)return {eligible:false,best:oldBest??null,isNew:false};
  const time=Math.round(seconds),prior=Number.isFinite(oldBest)&&oldBest>=0?oldBest:null;
  return {eligible:true,best:prior===null?time:Math.min(prior,time),isNew:prior===null||time<prior};
}
