import {COURSES,getMissions,DIFFICULTIES} from './courses.js';

// Local game achievements, derived from completed v2 scored missions. Replays,
// body variants and difficulty variants never inflate distinct mission counts.
export const BADGE_LEVELS=Object.freeze([
 {id:'first-track',rank:1,name:'First Track',label:'STARTER',requirement:'Finish your first training-ground lesson.',summary:'First training lesson completed.'},
 {id:'trail-ready',rank:2,name:'Trail Ready',label:'FOUNDATION',requirement:'Score 70+ on all four lessons, at any difficulty.',summary:'All four lessons completed with 70+.'},
 {id:'terrain-explorer',rank:3,name:'Terrain Explorer',label:'EXPLORER',requirement:'Earn Trail Ready, then score 70+ on a mission in each of the three expedition worlds.',summary:'Foundation earned. All three terrains explored with 70+.'},
 {id:'line-finder',rank:4,name:'Line Finder',label:'ADVANCED',requirement:'Earn Trail Ready and score 70+ on 12 different expedition missions at Trail or Expert difficulty.',summary:'12 expedition missions at Trail or higher with 70+.'},
 {id:'summit-club',rank:5,name:'Summit Club',label:'EXPERT',requirement:'Score 90+ on 16 different missions, including all four lessons, at Expert difficulty.',summary:'16 missions, including all lessons, at Expert with 90+.'}
].map(Object.freeze));

export function badgeProgress(records={}){
 const valid=[];
 for(const course of COURSES)for(const mission of getMissions(course))for(const difficulty of Object.keys(DIFFICULTIES))for(const body of ['3door','5door']){
  const key=`${course.worldId}-${mission.id}-${difficulty}-${body}`,r=records?.[key];
  if(!r||r.version!==2||r.course!==course.id||r.mission!==mission.id||r.difficulty!==difficulty||!Number.isFinite(r.score)||r.score<0||r.score>100||!Number.isFinite(r.seconds)||r.seconds<0||!Number.isInteger(r.recoveries)||r.recoveries<0)continue;
  valid.push({...r,key:course.id+'/'+mission.id});
 }
 const count=filter=>new Set(valid.filter(filter).map(r=>r.key)).size;
 const lessons=count(r=>r.course==='school'&&r.score>=70),foundation=lessons===4;
 const terrains=new Set(valid.filter(r=>r.course!=='school'&&r.score>=70).map(r=>r.course)).size;
 const expedition=count(r=>r.course!=='school'&&r.score>=70&&r.difficulty!=='explorer');
 const expert=count(r=>r.score>=90&&r.difficulty==='expert');
 const expertLessons=count(r=>r.course==='school'&&r.score>=90&&r.difficulty==='expert');
 const progress=[[Math.min(1,count(r=>r.course==='school')),1,true],[lessons,4,true],[terrains,3,foundation],[expedition,12,foundation],[expert,16,expertLessons>=4]];
 // Adding routes must never relock an achievement when a count exceeds its target.
 return BADGE_LEVELS.map((badge,i)=>{const [current,total,prerequisite]=progress[i];return {...badge,current:Math.min(current,total),total,prerequisite,unlocked:current>=total&&prerequisite};});
}

export function newlyUnlocked(before,after){const old=new Set(badgeProgress(before).filter(b=>b.unlocked).map(b=>b.id));return badgeProgress(after).filter(b=>b.unlocked&&!old.has(b.id));}
export function badgeName(value){return Array.from(String(value||'Trail driver').replace(/[\u0000-\u001f\u007f-\u009f]/g,'').trim()).slice(0,32).join('')||'Trail driver';}
export const escapeXML=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));

export function badgeEmblem(badge,{locked=false}={}){
 const ink=locked?'#9ca6aa':'#ed9a65',rank=badge.rank;
 const stripes=Array.from({length:rank},(_,i)=>`<path d="m${86+i*22-(rank-1)*11} 211 8-12h12l-8 12z"/>`).join('');
 return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 270" role="img" aria-label="${escapeXML(badge.name)} level ${rank}${locked?' locked':''}"><path d="M120 8 222 65v135L120 260 18 200V65z" fill="#252e32" stroke="${ink}" stroke-width="5"/><path d="m120 23 89 49v121l-89 51-89-51V72z" fill="none" stroke="${ink}" opacity=".45"/><g fill="none" stroke="${ink}" stroke-width="4" stroke-linejoin="round"><path d="m48 160 43-66 29 35 25-47 49 78z"/><path d="m77 115 14-21 14 17m29-9 11-20 13 23"/><path d="m111 175 13-19-6-13 15-18" stroke="#f1e9dc"/></g><text x="120" y="65" text-anchor="middle" fill="#f1e9dc" font-family="Arial,sans-serif" font-size="15" letter-spacing="4">LEVEL ${rank}</text><g fill="${ink}">${stripes}</g></svg>`;
}

export function badgeArtwork(badge,name,format='square'){
 if(!badge?.unlocked)throw new Error('Complete this badge’s requirements before exporting it.');
 const paper=format==='print',story=format==='story',width=paper?1240:1080,height=paper?1754:story?1920:1080;
 const bg=paper?'#faf8f1':'#1d2529',ink=paper?'#253036':'#f2eee4',muted=paper?'#4b585e':'#bfcacc',accent=paper?'#95532b':'#ee9b65';
 const cx=width/2,top=story?300:paper?260:190,size=story?540:paper?520:310,ey=top+size;
 const emblem=badgeEmblem(badge).replace('<svg ','<svg x="'+(cx-size/2)+'" y="'+top+'" width="'+size+'" height="'+size+'" ');
 return {width,height,svg:`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="100%" height="100%" fill="${bg}"/><rect x="32" y="32" width="${width-64}" height="${height-64}" rx="8" fill="none" stroke="${accent}" stroke-width="3"/><g font-family="Arial,sans-serif" text-anchor="middle"><text x="${cx}" y="100" fill="${ink}" font-weight="700" font-size="31">jimnygami / BUILD &amp; TRAIL</text><text x="${cx}" y="${top-30}" fill="${accent}" font-size="19" letter-spacing="5">${paper?'GAME ACHIEVEMENT':'EARNED ON THE TRAIL'}</text>${emblem}<text x="${cx}" y="${ey+64}" fill="${accent}" font-size="20" letter-spacing="5">${badge.label} / LEVEL ${badge.rank}</text><text x="${cx}" y="${ey+142}" fill="${ink}" font-size="64" font-weight="700">${escapeXML(badge.name)}</text><text x="${cx}" y="${ey+207}" fill="${ink}" font-size="30">${escapeXML(badgeName(name))}</text><text x="${cx}" y="${ey+270}" fill="${muted}" font-size="20">${escapeXML(badge.summary)}</text><path d="M${cx-90} ${ey+313}h180" stroke="${accent}" stroke-width="3"/><text x="${cx}" y="${height-138}" fill="${ink}" font-size="24" font-weight="700">jimnygami</text><text x="${cx}" y="${height-94}" fill="${muted}" font-size="18">Game achievement · based on locally saved progress</text><text x="${cx}" y="${height-64}" fill="${muted}" font-size="18">Not real-world driving training or certification.</text></g></svg>`};
}
