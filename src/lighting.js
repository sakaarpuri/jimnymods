// Art-directed comparison presets, NOT photometric data or claimed product performance.
export const LIGHT_PROFILES = Object.freeze({
  spot:{label:'Focused driving spot',colour:'#f0f5ff',angle:.12,reach:40,intensity:190,aim:22},
  flood:{label:'Wide driving flood',colour:'#f0f5ff',angle:.48,reach:26,intensity:85,aim:10},
  fog:{label:'Low, wide yellow fog',colour:'#ffcb49',angle:.75,reach:16,intensity:45,aim:5},
  dual:{label:'Switchable white / yellow fog',colour:'#ffcb49',angle:.75,reach:16,intensity:45,aim:5},
  bar:{label:'Wide light-bar spread',colour:'#eff6ff',angle:.48,reach:36,intensity:140,aim:14},
  driving:{label:'Compact driving beam',colour:'#f7f4e9',angle:.24,reach:36,intensity:150,aim:18},
  combo:{label:'Pod driving / spread mix',colour:'#f2f5ff',angle:.38,reach:28,intensity:100,aim:12},
  work:{label:'Rear work flood',colour:'#fff0d4',angle:.8,reach:14,intensity:35,aim:-6},
});
export function resolvePreviewParts(ids,products=[]){
  const registry=new Map((Array.isArray(products)?products:[]).filter(p=>p&&typeof p.id==='string').map(p=>[p.id,p]));
  return [...new Set((Array.isArray(ids)?ids:[]).filter(id=>typeof id==='string').flatMap(id=>registry.has(id)?registry.get(id).visual?[registry.get(id).visual]:[]:[id]))];
}
export function activeLightProfiles(parts){
  const set=new Set(parts),active=[];
  if(set.has('lamp_round_spot'))active.push('spot');
  if(set.has('lamp_round_flood'))active.push('flood');
  if(set.has('lamp_fog'))active.push('fog');
  if(set.has('lamp_dual'))active.push('dual');
  if(set.has('led')||set.has('lamp_bar20'))active.push('bar');
  if(set.has('lamp_compact_bar'))active.push('driving');
  if(set.has('pods')||set.has('lamp_cube'))active.push('combo');
  if(set.has('lamp_work'))active.push('work');
  return active;
}
