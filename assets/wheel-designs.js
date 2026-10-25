/* Spoke alloy wheel designs, shared by the Garage picker (SVG thumbnails), the 3D
   viewer and Drive. Each design is a 15-inch face described as 2D window cut-outs
   in metres; the renderer extrudes the same outline that the thumbnail draws.
   Representative styles, not specific products or fitment claims. */
(function(root){
 const FACE=.180,LIP=.190,PCD=.06985;// 15" rim face; Jimny 5×139.7 mm bolt circle.
 // Each spoke: angle a(r) and half-width w(r) as functions of radius.
 // Each gap: the radius its window starts from (a split or Y opens further out).
 const straight=(n,wIn,wOut,phase=0)=>Array.from({length:n},(_,k)=>({a:()=>phase+k*2*Math.PI/n,w:(r,t)=>wIn+(wOut-wIn)*t}));
 const DESIGNS=[
  {id:'factory',name:'Factory alloy',note:'The wheel as modelled',colour:null},
  {id:'six-spoke',name:'6-spoke',note:'Classic off-road',colour:'#b5b9bc',rIn:.066,rOut:.162,spokes:()=>straight(6,.019,.014),gapIn:()=>.066},
  {id:'five-split',name:'5 split-spoke',note:'Paired spokes',colour:'#b5b9bc',rIn:.066,rOut:.162,
   spokes:()=>Array.from({length:10},(_,k)=>{const base=Math.floor(k/2)*2*Math.PI/5,side=k%2?1:-1;return {a:(r,t)=>base+side*(.032+.07*t),w:()=>.0088};}),
   gapIn:i=>i%2===0?.098:.066},
  {id:'y-spoke',name:'5 Y-spoke',note:'Forks at the rim',colour:'#454b50',rIn:.066,rOut:.162,
   spokes:()=>Array.from({length:10},(_,k)=>{const base=Math.floor(k/2)*2*Math.PI/5,side=k%2?1:-1;return {a:(r,t)=>base+side*.26*Math.max(0,(t-.42)/.58)**1.2,w:(r,t)=>t<.42?.016:.0105};}),
   gapIn:i=>i%2===0?.119:.066},
  {id:'ten-spoke',name:'10-spoke',note:'Light and open',colour:'#b5b9bc',rIn:.068,rOut:.163,spokes:()=>straight(10,.0105,.0085),gapIn:()=>.068},
  {id:'beadlock',name:'8-spoke beadlock',note:'Bolted outer ring',colour:'#171b1d',rIn:.066,rOut:.142,ring:{inner:.146,outer:.184,bolts:20,boltRadius:.165},spokes:()=>straight(8,.016,.013,Math.PI/8),gapIn:()=>.066},
  {id:'turbine',name:'12-spoke turbine',note:'Swept spokes',colour:'#987345',rIn:.07,rOut:.163,
   spokes:()=>Array.from({length:12},(_,k)=>({a:(r,t)=>k*Math.PI/6+.32*t*t,w:(r,t)=>.008+.0015*t})),gapIn:()=>.07}
 ];
 const byId=id=>DESIGNS.find(d=>d.id===id)||DESIGNS[0];
 function clean(design={}){return {wheelDesign:byId(design?.wheelDesign).id};}
 // Window outlines [[x,y],…] for one design. Spoke edges are sampled along the
 // radius so tapered, split, forked and swept spokes all share one routine.
 function windows(id){
  const d=byId(id);if(!d.spokes)return [];
  const spokes=d.spokes(),n=spokes.length,steps=10,out=[];
  const t=r=>(r-d.rIn)/(d.rOut-d.rIn),edge=(s,r,sign)=>s.a(r,t(r))+sign*Math.asin(Math.min(.95,s.w(r,t(r))/r));
  for(let i=0;i<n;i++){
   const left=spokes[i],right=spokes[(i+1)%n],wrap=i===n-1?2*Math.PI:0,r0=d.gapIn(i),pts=[];
   for(let k=0;k<=steps;k++){const r=r0+(d.rOut-r0)*k/steps;pts.push([r,edge(left,r,1)]);}
   const a0=edge(left,d.rOut,1),a1=edge(right,d.rOut,-1)+wrap;
   for(let k=1;k<steps;k++){const a=a0+(a1-a0)*k/steps;pts.push([d.rOut,a]);}
   for(let k=steps;k>=0;k--){const r=r0+(d.rOut-r0)*k/steps;pts.push([r,edge(right,r,-1)+wrap]);}
   const b0=edge(right,r0,-1)+wrap,b1=edge(left,r0,1);
   for(let k=1;k<6;k++){const a=b0+(b1-b0)*k/6;pts.push([r0,a]);}
   if(a1-a0<.02)continue;// Spokes touching at the rim leave no window.
   out.push(pts.map(([r,a])=>[r*Math.cos(a),r*Math.sin(a)]));
  }
  return out;
 }
 // Thumbnail: the same face, lip, cap and nuts, drawn in currentColor on a dark tyre.
 function svg(id,size=96){
  const d=byId(id),s=v=>(v*1000).toFixed(1),path=w=>'M'+w.map(([x,y])=>`${s(x)} ${s(-y)}`).join('L')+'Z';
  const tyre=`<circle r="${s(.265)}" fill="#1c2022"/><circle r="${s(.232)}" fill="none" stroke="#2c3134" stroke-width="10"/>`;
  if(!d.spokes)return `<svg viewBox="-270 -270 540 540" width="${size}" height="${size}" aria-hidden="true">${tyre}<circle r="${s(LIP)}" fill="currentColor" opacity=".9"/><circle r="${s(.15)}" fill="#3a4044"/>${Array.from({length:12},(_,k)=>{const a=k*Math.PI/6;return `<circle cx="${s(Math.cos(a)*.115)}" cy="${s(Math.sin(a)*.115)}" r="18" fill="currentColor" opacity=".75"/>`;}).join('')}<circle r="${s(.045)}" fill="currentColor"/></svg>`;
  const holes=windows(id).map(path).join(''),ring=d.ring?`<circle r="${s((d.ring.inner+d.ring.outer)/2)}" fill="none" stroke="currentColor" stroke-width="${s(d.ring.outer-d.ring.inner)}"/>${Array.from({length:d.ring.bolts},(_,k)=>{const a=k*2*Math.PI/d.ring.bolts;return `<circle cx="${s(Math.cos(a)*d.ring.boltRadius)}" cy="${s(Math.sin(a)*d.ring.boltRadius)}" r="5" fill="#0f1213"/>`;}).join('')}`:'';
  const nuts=Array.from({length:5},(_,k)=>{const a=k*2*Math.PI/5-Math.PI/2;return `<circle cx="${s(Math.cos(a)*PCD)}" cy="${s(Math.sin(a)*PCD)}" r="8" fill="#0f1213"/>`;}).join('');
  return `<svg viewBox="-270 -270 540 540" width="${size}" height="${size}" aria-hidden="true">${tyre}<circle r="${s(LIP)}" fill="#3a4044"/><path d="M${s(FACE)} 0A${s(FACE)} ${s(FACE)} 0 1 0 ${s(-FACE)} 0A${s(FACE)} ${s(FACE)} 0 1 0 ${s(FACE)} 0Z${holes}" fill="currentColor" fill-rule="evenodd"/>${ring}<circle r="${s(.04)}" fill="currentColor" stroke="#0f1213" stroke-width="4"/>${nuts}</svg>`;
 }
 root.JimnyWheelDesigns={DESIGNS,FACE,LIP,PCD,clean,design:byId,windows,svg};
})(globalThis);
