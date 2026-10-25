import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFileSync} from 'node:fs';

const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
const context={window:{}};
vm.runInNewContext(read('assets/regions.js'),{window:context.window,localStorage:{getItem(){return null;}}});
vm.runInNewContext(read('assets/fitter-work.js'),context);
const work=context.window.JIMNY_FITTER_WORK;
const html=read('index.html');
const start=html.indexOf('const SHOPS = ['),end=html.indexOf('];',start)+1;
const SHOPS=[...vm.runInNewContext(html.slice(start,end).replace('const SHOPS =','(')+')'),...context.window.JIMNY_REGIONAL_SHOPS];
const plain=v=>JSON.parse(JSON.stringify(v));
const shop=name=>SHOPS.find(s=>s.name===name);
const jobs=name=>plain(work.deriveWork(shop(name)).jobs);

test('work tags come from the listing text and match what the design shows',()=>{
 assert.deepEqual(jobs('Bimbra 4x4'),['snorkels','racks','suspension','protection','recovery']);
 assert.deepEqual(jobs('Azad 4x4'),['snorkels','racks','suspension','protection','bumpers','lighting','grilles']);
 assert.deepEqual(jobs('Performance Auto'),['racks','suspension','bumpers','wheels','interior']);
 assert.deepEqual(jobs('PRAD 4x4'),['snorkels','racks','protection','bumpers']);
 assert.deepEqual(jobs('Auto Stylenn / Jimny 4x4 Products'),['bumpers','lighting','grilles'],'ladders are not racks');
});

test('a sentence that denies a skill never adds its tag',()=>{
 const autosmith=shop('Autosmith India — Windbooster fitting contact');
 assert.match(autosmith.desc,/not suspension/);
 const result=work.deriveWork(autosmith);
 assert.deepEqual(plain(result.jobs),[]);
 assert(result.review.includes('negated-mention'));
});

test('listings that name no work are flagged for review, never guessed',()=>{
 for(const name of ['Motormode','ESSARR 4x4 / Auto Tarun','Futurz 4x4 — Mumbai workshop','Goyal Motors NEXA — Shimla Dhalli','Mallick Bazar']){
  const r=work.deriveWork(shop(name));assert.deepEqual(plain(r.jobs),[],name);assert(r.review.includes('no-work-named'),name);
 }
 assert(work.deriveWork(shop('Karol Bagh Auto Market')).review.includes('market-wide'));
 assert(work.deriveWork(shop('BigDaddy Customs')).review.includes('non-part-work'));
});

test('tags are only ever job ids and never come from the shop name or badge',()=>{
 for(const s of SHOPS)for(const id of work.deriveWork(s).jobs)assert(work.JOB_BY_ID[id],s.name);
 const decoy={name:'Snorkel House',tag:'Suspension specialist',desc:'Confirm the exact Jimny application before booking.'};
 assert.deepEqual(plain(work.deriveWork(decoy).jobs),[]);
});

test('India city pills reproduce the real counts, with two-city listings counted in both',()=>{
 const india=SHOPS.filter(s=>(s.country||'IN')==='IN'),counts={};
 for(const s of india)for(const a of work.areasFor(s))counts[a]=(counts[a]||0)+1;
 assert.equal(india.length,23);
 assert.deepEqual(plain(counts),{'Delhi NCR':9,'Bengaluru':5,'Himachal':4,'Mumbai':2,'Hyderabad':1,'Chennai':1,'Kolkata':1,'Punjab':1});
 assert.deepEqual(plain(work.areasFor(shop('BigDaddy Customs'))),['Delhi NCR','Bengaluru']);
 assert.deepEqual(plain(work.areasFor(shop('ESSARR 4x4 / Auto Tarun'))),['Bengaluru']);
});

test('other countries group by the listing region',()=>{
 assert.deepEqual(plain(work.areasFor(shop('JimnyworX SA'))),['Western Cape']);
 assert.deepEqual(plain(work.areasFor(shop('Suzuki Tepepan'))),['Mexico City']);
});

test('parts map to the job a fitter does, and every part gets a category',()=>{
 assert.deepEqual(plain(work.jobsForPart({category:'Intake',name:'Bimbra Jimny Functional Snorkel'})),['snorkels']);
 assert.deepEqual(plain(work.jobsForPart({category:'Protection',name:'PRAD Front XPD Bumper (non-winch)'})),['protection','bumpers']);
 assert.deepEqual(plain(work.jobsForPart({category:'Roof & carrying',name:'Suzuki Nomade compact flat roof rack'})),['racks']);
 assert.deepEqual(plain(work.jobsForPart({category:'Camping & storage',name:'ALU-CAB 2 Meter 270° Shadow Awning'})),[]);
 assert.equal(work.partCategory({category:'Wheels'}),'Wheels');
 assert.equal(work.partCategory({name:'Suspension Lift Kit (1.5–2 inch)'}),'Suspension');
 assert.equal(work.partCategory({name:'A/T Tyres + Alloy Wheels'}),'Wheels');
 assert.equal(work.partCategory({name:'Seat covers',interior:true}),'Interior');
 assert.equal(work.partCategory({name:'Something else'}),'Exterior');
});

test('quote request lists the build, caps long lists and has a plain empty form',()=>{
 const text=work.buildQuoteRequest({body:'5-door',parts:['all-terrain tyres + alloy wheels','snorkel','Suzuki Nomade compact flat roof rack']});
 assert.equal(text,"Hi, I'd like an itemised parts-and-labour quote for my 5-door Jimny: all-terrain tyres + alloy wheels, snorkel and Suzuki Nomade compact flat roof rack. Do you have Jimny experience with these?");
 assert.match(work.buildQuoteRequest({body:'3-door',parts:Array.from({length:10},(_,i)=>'Part '+i)}),/Part 7 and 2 more\./);
 assert.match(work.buildQuoteRequest({body:'5-door',parts:[]}),/planning modifications for my 5-door Jimny/);
 assert.doesNotMatch(text,/\d{5}|@|\+91/,'no invented contact details');
});

test('monograms and ids are stable',()=>{
 assert.equal(work.monogram('Bimbra 4x4'),'B4');assert.equal(work.monogram('Performance Auto'),'PA');assert.equal(work.monogram('NEXA workshop locator'),'NW');
 assert.equal(work.shopId({name:'ESSARR 4x4 / Auto Tarun'}),'essarr-4x4-auto-tarun');
});
