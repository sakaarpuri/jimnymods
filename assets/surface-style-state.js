/* Shared saved-build schema, also consumed by the Garage and Drive renderer. */
(function(root){
 const BLACK='#171b1d',BASE={body:'Body paint',roof:'Roof',trim:'Exterior trim & badges',wheels:'Wheels & spare rim',grille:'Grille & logo',bumpers:'Factory bumpers',cabin:'Cabin hard trim'};
 function clean(design={}){
  const partFinishes={};
  if(design?.partFinishes&&typeof design.partFinishes==='object'&&!Array.isArray(design.partFinishes))
   for(const [key,value] of Object.entries(design.partFinishes).slice(0,96))
    if(/^[a-z][a-z0-9_]{0,63}$/.test(key)&&!['constructor','prototype'].includes(key)&&['matte','gloss'].includes(value))partFinishes[key]=value;
  const partColours={};
  if(design?.partColours&&typeof design.partColours==='object'&&!Array.isArray(design.partColours))
   for(const [key,value]of Object.entries(design.partColours).slice(0,96))
    if(/^[a-z][a-z0-9_]{0,63}$/.test(key)&&!['constructor','prototype'].includes(key)&&/^#[0-9a-f]{6}$/i.test(value))partColours[key]=value.toLowerCase();
  return {allBlack:design?.allBlack===true,partFinishes,partColours};
 }
 function target(id){return id==='tires'||id==='suzuki_nomade_steelwheel'?'wheels':/^autostylenn_.*grille$/.test(id)?'grille':id;}
 root.JimnySurfaceStyles=Object.freeze({BLACK,BASE:Object.freeze(BASE),clean,target});
})(globalThis);
