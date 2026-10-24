// Optional closed-course structures. Render and Rapier consume these same solids.
// Metres, top-surface coordinates. No changes to engine power or tyre grip.
const routes=points=>Object.fromEntries(['learn','trail','expert'].map(k=>[k,points.map(p=>({...p}))]));
const gate=(x,z,y,extra={})=>({x,z,elevation:y,heightTolerance:.65,radius:1.45,depth:1.2,precision:true,range:'4L',gear:'L',maxSpeed:9,...extra});
export const PRO_MISSIONS=[
 {id:'pro-skyweave',name:'PRO / Skyweave',expertTrial:true,spawn:{x:140,z:-108,yaw:0},mode:'4L',speedLimit:10,skill:'Elevated steering precision',summary:'Five metres up, no guard rails. Thread the narrow S-bridge in 4L / L at under 9 km/h. Look through each bend; a fall costs points and returns you to the last checkpoint. Same physical challenge at every difficulty.',routes:routes([gate(140,-99,0,{stop:true}),gate(140,-73,5),gate(140,-67,5),gate(142,-61,5,{heading:.32}),gate(144,-55,5,{heading:.32}),gate(144,-49,5),gate(142,-42,5,{heading:-.28}),gate(139,-33,5,{heading:-.32}),gate(136,-26,5,{heading:-.4}),gate(136,-20,5),gate(138,-13,5,{heading:.28}),gate(140,-6,5,{heading:.28}),gate(140,0,5),gate(140,29,0,{stop:true})])},
 {id:'pro-staircase',name:'PRO / Ratchet steps',expertTrial:true,spawn:{x:177,z:-108,yaw:0},mode:'4L',speedLimit:8,skill:'Low-range torque and wheel placement',summary:'Twenty-four short, alternating wheel steps lead to a narrow summit. Use 4L / L, gentle power and precise wheel placement. Stop on the summit before the steep descent; rushing can pitch the car off its line.',routes:routes([gate(177,-98,0,{stop:true}),gate(177,-78,.28),gate(177,-67,1.26),gate(177,-56,2.24),gate(177,-43,3.36),gate(177,-34,3.36,{stop:true}),gate(177,-4,0,{stop:true})])},
 {id:'pro-surge',name:'PRO / Surge & stop',expertTrial:true,spawn:{x:212,z:-112,yaw:0},mode:'4H',speedLimit:26,skill:'Momentum, braking and range change',summary:'Build 14–24 km/h in 4H / 2 at the timing gate, climb the seven-metre ramp, then brake inside the summit box. Stop in N to select 4L, choose L and control the descent. Too much speed sends you beyond the stopping box.',routes:routes([gate(212,-103,0,{stop:true,range:'4H',gear:'2'}),gate(212,-78,0,{range:'4H',gear:'2',minSpeed:14,maxSpeed:24,depth:1.5}),gate(212,-51,7,{range:'4H',gear:'2',maxSpeed:18}),gate(212,-40,7,{stop:true,range:'4H',gear:'2'}),gate(212,-36,7,{stop:true,range:'4L',gear:'L'}),gate(212,-11,.8,{maxSpeed:9}),gate(212,2,0,{stop:true})])},
 {id:'pro-high-pocket',name:'PRO / High pocket',expertTrial:true,spawn:{x:247,z:-108,yaw:0},mode:'4L',speedLimit:8,skill:'Elevated reverse positioning',summary:'Climb to a five-metre-high turning deck. Stop forward, reverse diagonally into the marked pocket in R, then take the offset exit in L. No edge barriers: judge the rear wheels, not just the bonnet.',routes:routes([gate(247,-99,0,{stop:true}),gate(247,-65,5),gate(247,-42,5,{stop:true}),gate(241,-59,5,{stop:true,reverse:true,gear:'R',heading:.5,headingTolerance:.22,radius:1.8,depth:1.6}),gate(238,-48,5,{heading:-.25,radius:1.8}),gate(238,-34,5),gate(238,-24,5),gate(238,9,0,{stop:true})])}
];
export const inProYard=(x,z)=>x>125&&x<260&&z>-123&&z<38;

export function proTrialPlan(){
 const solids=[];
 function slab(id,a,b,width,thickness=.32){
  const dx=b[0]-a[0],dz=b[2]-a[2],dy=b[1]-a[1],run=Math.hypot(dx,dz),yaw=Math.atan2(dx,dz),pitch=-Math.atan2(dy,run),cy=Math.cos(yaw/2),sy=Math.sin(yaw/2),cx=Math.cos(pitch/2),sx=Math.sin(pitch/2);
  // Lower along the rotated normal so a/b remain the top contact surface.
  const normal=[Math.sin(yaw)*Math.sin(pitch),Math.cos(pitch),Math.cos(yaw)*Math.sin(pitch)];
  const center=[(a[0]+b[0])/2-normal[0]*thickness/2,(a[1]+b[1])/2-normal[1]*thickness/2,(a[2]+b[2])/2-normal[2]*thickness/2];
  const o={id,type:'box',x:center[0],y:center[1]-thickness/2,z:center[2],width,height:thickness,depth:Math.hypot(run,dy)+.045,yaw,pitch,quaternion:{x:cy*sx,y:sy*cx,z:-sy*sx,w:cy*cx},a,b,deck:true};solids.push(o);return o;
 }
 function pier(x,z,h){if(h<1)return;solids.push({id:`pro-pier-${solids.length}`,type:'box',x,z,y:0,width:.65,depth:.65,height:h-.32,yaw:0,deck:false});solids.push({id:`pro-cap-${solids.length}`,type:'box',x,z,y:h-.65,width:2.55,depth:.45,height:.33,yaw:0,deck:false});}
 const sky=[[140,0,-98],[140,5,-73],[140,5,-67],[142,5,-61],[144,5,-55],[144,5,-49],[142,5,-42],[139,5,-33],[136,5,-26],[136,5,-20],[138,5,-13],[140,5,-6],[140,5,0],[140,0,25]];
 for(let i=1;i<sky.length;i++){slab(`sky-${i}`,sky[i-1],sky[i],i===1||i===sky.length-1?3.4:2.7);if(i%2===0)pier(...[sky[i][0],sky[i][2],sky[i][1]]);}
 slab('steps-entry',[177,.03,-98],[177,.03,-81],3.4);
 for(let i=0;i<24;i++)for(const side of [-1,1]){const z=-81+i*1.6,h=(i+1)*.14;slab(`ratchet-${i}-${side}`,[177+side*.85,h,z+(side===1?.45:0)],[177+side*.85,h,z+1.6+(side===1?.45:0)],1.7,Math.max(.32,h));}
 slab('steps-summit',[177,3.36,-42.1],[177,3.36,-29],3.4);pier(177,-36,3.36);slab('steps-down',[177,3.36,-29],[177,0,-7],3.4);
 slab('surge-up',[212,0,-76],[212,7,-52],4.2);slab('surge-top',[212,7,-52],[212,7,-34],4.2);pier(212,-48,7);pier(212,-37,7);slab('surge-down',[212,7,-34],[212,0,-8],3.5);
 slab('pocket-up',[247,0,-94],[247,5,-69],3.4);slab('pocket-deck',[243,5,-69],[243,5,-29],14);pier(238,-64,5);pier(248,-37,5);slab('pocket-exit',[238,5,-29],[238,5,-21],3.4);slab('pocket-down',[238,5,-21],[238,0,4],3.4);
 // A solid divider makes the reverse pocket a manoeuvre, not an empty rooftop.
 solids.push({id:'pocket-divider',type:'box',x:242,z:-40,y:5,width:1.1,depth:7,height:.7,yaw:0,deck:false});
 return solids;
}
export function proSupportHeight(solids,x,z){let top=null;for(const o of solids){if(!o.deck)continue;const dx=o.b[0]-o.a[0],dz=o.b[2]-o.a[2],len=Math.hypot(dx,dz),px=x-o.a[0],pz=z-o.a[2],along=(px*dx+pz*dz)/len,across=(px*dz-pz*dx)/len;if(along<-.02||along>len+.02||Math.abs(across)>o.width/2)continue;const y=o.a[1]+(o.b[1]-o.a[1])*along/len;top=Math.max(top??-Infinity,y);}return top;}
