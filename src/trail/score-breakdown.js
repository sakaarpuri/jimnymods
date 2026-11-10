// Explains a control score. The score formula itself is unchanged
// (courses.js resultFor): 100 − penalty × 0.32 − recoveries × 8.
export const LOSS_LABELS=Object.freeze({speeding:'Over the speed target',impacts:'Impacts',wheelspin:'Wheelspin',tilt:'Heavy side lean',driveline:'4WD on dry tarmac',recoveries:'Recoveries'});
export function createLossLedger(){return {speeding:0,impacts:0,wheelspin:0,tilt:0,driveline:0};}
// The vehicle model adds one combined penalty per step. Share it between the
// conditions that were active, using the same weights as the model.
export function attributeVehiclePenalty(ledger,delta,{slip=0,roll=0,surface='',range='2H'}={}){
  if(!(delta>0))return ledger;
  const weights={wheelspin:slip>.3?1:0,tilt:Math.abs(roll)>.32?2:0,driveline:surface==='tarmac'&&range!=='2H'?3:0},sum=weights.wheelspin+weights.tilt+weights.driveline;
  if(!sum){ledger.wheelspin+=delta;return ledger;}
  for(const key of Object.keys(weights))ledger[key]+=delta*weights[key]/sum;
  return ledger;
}
// Whole points per cause that add up exactly to the points dropped.
export function lossSummary(ledger,recoveries=0,score=100){
  const raw=Object.entries({...ledger,recoveries:0}).map(([id,penalty])=>({id,value:id==='recoveries'?recoveries*8:Math.max(0,penalty||0)*.32})),total=raw.reduce((sum,item)=>sum+item.value,0),lost=Math.max(0,Math.min(100,Math.round(100-score)));
  if(!lost||!total)return [];
  const scaled=raw.map(item=>({...item,exact:item.value/total*lost})).map(item=>({...item,points:Math.floor(item.exact)}));
  let spare=lost-scaled.reduce((sum,item)=>sum+item.points,0);
  for(const item of [...scaled].sort((a,b)=>(b.exact-b.points)-(a.exact-a.points))){if(spare<=0)break;item.points++;spare--;}
  return scaled.filter(item=>item.points>0).sort((a,b)=>b.points-a.points).map(({id,points})=>({id,label:LOSS_LABELS[id],points}));
}
const TIPS={speeding:'Most points went on speed. Brake before each marker and hold a steady pedal under the target.',impacts:'Impacts cost the most. Slow down before obstacles and leave more room around posts and rocks.',wheelspin:'Wheelspin cost the most. Use the gentle pedal on loose ground and select 4H or 4L earlier.',tilt:'Side lean cost the most. Take slopes straighter and slower.',driveline:'Most points went on four-wheel drive on dry tarmac. Return to 2H before paved sections.',recoveries:'Recoveries cost the most. Stop and use Show me to read the line before committing.'};
export function coachingTip(items=[]){return TIPS[items[0]?.id]||'';}
