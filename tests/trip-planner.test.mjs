import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import vm from 'node:vm';
const context=vm.createContext({});
vm.runInContext(readFileSync(new URL('../assets/trip-planner.js',import.meta.url),'utf8'),context);
const P=context.JIMNY_TRIP_PLANNER;
const plain=v=>JSON.parse(JSON.stringify(v));

test('seven India corridors have distinct IDs, positive bounded ranges, seasonal context and primary sources',()=>{
  assert.equal(P.routes.length,7);assert.equal(new Set(P.routes.map(r=>r.id)).size,7);
  for(const r of P.routes){
    assert.ok(r.distance[0]>0&&r.distance[1]>=r.distance[0]);
    assert.ok(r.gap>0&&r.gap<=r.distance[1]);
    assert.ok(r.months.length&&r.months.every(m=>m>=1&&m<=12));
    assert.ok(r.scope&&r.note&&r.permit&&r.via);
    assert.ok(r.sources.length>=2);assert.ok(r.sources.every(s=>new URL(s.url).protocol==='https:'));
  }
  for(const id of ['manali-leh','srinagar-leh','spiti','rajasthan','kutch','konkan','tawang'])assert.ok(P.routes.some(r=>r.id===id));
});
test('default fuel gap / consumption are examples and do not receive clearance',()=>{
  const c=P.calculate(P.defaults());
  assert.equal(c.valid,true);assert.equal(c.fuelLitres,36);assert.equal(c.totalFuelLitres,44);
  assert.equal(c.shortfallLitres,4);assert.equal(c.planningRange,320);
  assert.match(c.status,/not a travel clearance/);
  assert.ok(c.warnings.some(w=>/unverified planning placeholder/.test(w)));
  assert.ok(c.warnings.some(w=>/example \/ unverified/.test(w)));
  assert.ok(c.warnings.some(w=>/not yet confirmed/.test(w)));
});
test('each corridor supplies real route stages and its own persistent packing / vehicle checklist',()=>{
 for(const r of P.routes){
  assert.equal(r.guide.stages.length,3);assert(r.guide.carry.length>=7);assert.equal(r.guide.prepare.length,3);
  const list=P.checksFor(r.id);assert.equal(new Set(list.map(c=>c.id)).size,list.length);
  assert(list.some(c=>c.id===r.id+'-vehicle-0'));assert(list.some(c=>c.id==='pack-tyre'));
  const checked={...P.defaults(r.id),checks:{'pack-tyre':true,[r.id+'-vehicle-0']:true}};
  assert.equal(P.normalize(checked).checks['pack-tyre'],true);assert.equal(P.calculate(checked).completed,2);
  const text=P.exportText(checked);assert(text.includes(r.guide.stages[0]));assert(text.includes(r.guide.prepare[0]));
 }
 assert(P.checksFor('spiti').some(c=>c.id==='pack-warm'));
 assert(!P.checksFor('rajasthan').some(c=>c.id==='pack-warm'));
 assert(P.checksFor('rajasthan').some(c=>c.id==='pack-sun'));
 assert.equal(P.changeRoute({...P.defaults('spiti'),checks:{'pack-warm':true}},'kutch').checks['pack-warm'],undefined);
});
test('fuel reserve is a litre allowance rather than an inflated consumption calculation',()=>{
  const c=P.calculate({...P.defaults(),gap:240,kmpl:12,reserve:7,tank:40,extraFuel:0});
  assert.equal(c.totalFuelLitres,27);assert.equal(c.shortfallLitres,0);assert.equal(c.planningRange,396);
  const extra=P.calculate({...P.defaults(),gap:400,kmpl:8,extraFuel:20});
  assert.equal(extra.totalFuelLitres,58);assert.equal(extra.shortfallLitres,0);
  assert.ok(extra.warnings.some(w=>/legal requirements/.test(w)));
});
test('input validation rejects empty, nonfinite, boolean, negative and oversized values',()=>{
  for(const bad of ['',NaN,Infinity,-1,0,31,true,null,{},'Infinity']){
    assert.ok(P.validate({...P.defaults(),kmpl:bad}).kmpl,String(bad));
  }
  assert.ok(P.validate({...P.defaults(),people:5}).people);
  assert.ok(P.validate({...P.defaults(),people:2.4}).people);
  assert.ok(P.validate({...P.defaults(),routeId:'arbitrary'}).routeId);
  assert.ok(P.validate({...P.defaults(),reserve:40}).reserve);
  assert.equal(P.calculate({...P.defaults(),kmpl:0}).valid,false);
  assert.ok(Number.isFinite(P.calculate({...P.defaults(),kmpl:0}).totalFuelLitres));
  assert.throws(()=>P.exportText({...P.defaults(),kmpl:0}),/Correct invalid/);
});
test('normalisation strips unknown state and malicious checklist identifiers',()=>{
  const c=P.normalize(JSON.parse('{"v":1,"routeId":"unknown","people":500,"fuelVerified":"yes","notes":"a\\u0000b","checks":{"load":true,"access":"true","__proto__":true},"evil":"x"}'));
  assert.equal(c.routeId,'manali-leh');assert.equal(c.people,2);assert.equal(c.fuelVerified,false);
  assert.equal(c.notes,'ab');assert.deepEqual(plain(c.checks),{load:true});assert.equal(c.evil,undefined);
  assert.equal(P.normalize({notes:'x'.repeat(2000)}).notes.length,1600);
});
test('route change clears stale confirmations and checklist but keeps personal assumptions',()=>{
  const c=P.changeRoute({...P.defaults(),month:9,kmpl:8.5,tank:40,extraFuel:5,notes:'Keep my notes',fuelVerified:true,accessVerified:true,consumptionVerified:true,checks:{fuel:true,load:true}},'spiti');
  assert.equal(c.routeId,'spiti');assert.equal(c.gap,250);assert.equal(c.days,9);
  assert.equal(c.month,9);assert.equal(c.kmpl,8.5);assert.equal(c.extraFuel,5);
  assert.equal(c.notes,'Keep my notes');assert.equal(c.fuelVerified,false);assert.equal(c.accessVerified,false);
  assert.deepEqual(plain(c.checks),{});
});
test('fuel assumptions and departure changes invalidate related checks',()=>{
  const initial={...P.defaults(),fuelVerified:true,accessVerified:true,consumptionVerified:true,checks:{fuel:true,access:true,weather:true,permits:true,load:true,rest:true,water:true}};
  const gap=P.revise(initial,{gap:200});assert.equal(gap.fuelVerified,false);assert.equal(gap.checks.fuel,undefined);assert.equal(gap.checks.load,true);
  const consumption=P.revise(initial,{kmpl:8});assert.equal(consumption.consumptionVerified,false);assert.equal(consumption.checks.fuel,undefined);
  const month=P.revise(initial,{month:9});assert.equal(month.accessVerified,false);assert.equal(month.checks.permits,undefined);assert.equal(month.checks.weather,undefined);
  const water=P.revise(initial,{people:4});assert.equal(water.checks.water,undefined);assert.equal(water.checks.load,undefined);
  assert.equal(P.revise(initial,{notes:'updated'}).fuelVerified,true);
});
test('water worksheet uses resupply days, not all trip days; it is not a hydration prescription',()=>{
  const c=P.calculate({...P.defaults(),people:3,days:15,waterPerPerson:4,resupplyDays:2,water:20});
  assert.equal(c.waterLitres,24);assert.equal(c.waterShortfall,4);
  assert.match(P.exportText(c.state),/Personal planning input, not medical advice/);
});
test('weighed vehicle mass is optional and never inferred from parts',()=>{
  const initial=P.calculate(P.defaults());assert.equal(initial.remainingPayload,null);assert.ok(initial.warnings.some(w=>/not been weighed/.test(w)));
  const c=P.calculate({...P.defaults(),loadedKg:1600,gvm:1545});assert.equal(c.remainingPayload,-55);
  assert.ok(c.warnings.some(w=>/exceeds the entered GVM/.test(w)));
});
test('winter mountain and monsoon inputs receive explicit warnings',()=>{
  const winter=P.calculate({...P.defaults(),month:1});assert.ok(winter.warnings.some(w=>/outside this worksheet/.test(w)));
  const monsoon=P.calculate({...P.defaults('spiti'),month:7});assert.ok(monsoon.warnings.some(w=>/Monsoon/.test(w)));
});
test('completed checklist does not certify route or equipment safety',()=>{
  const checks=Object.fromEntries(P.checksFor('manali-leh').map(c=>[c.id,true]));
  const c=P.calculate({...P.defaults(),checks,fuelVerified:true,accessVerified:true,consumptionVerified:true});
  assert.equal(c.completed,c.total);assert.match(c.status,/not a travel clearance/);
  assert.ok(c.warnings.length>0);
  const text=P.exportText(c.state);assert.match(text,/does not make a route or water crossing safe/);
  assert.match(text,/no acclimatisation schedule or medical clearance/);
  assert.ok(P.checks.some(c=>/A snorkel or 4WD is not/.test(c.note)));
});
test('local persistence round-trips state and never edits garage build storage',()=>{
  const entries=new Map(),store=P.createStore(()=>({getItem:k=>entries.get(k),setItem:(k,v)=>entries.set(k,v),removeItem:k=>entries.delete(k)}));
  const state={...P.defaults('kutch'),month:12,notes:'Check with host',checks:{water:true}};
  assert.equal(store.save(state).ok,true);assert.equal(entries.size,1);assert.ok(entries.has(P.key));
  assert.equal(store.read().state.routeId,'kutch');assert.equal(store.read().state.checks.water,true);
  assert.equal(store.remove().ok,true);assert.equal(store.read().state.routeId,'manali-leh');
});
test('corrupt / unsupported persisted state returns a warning and does not silently overwrite',()=>{
  for(const raw of ['{','[]','null','{"v":2}']){
    let writes=0;const store=P.createStore(()=>({getItem:()=>raw,setItem:()=>writes++}));
    const result=store.read();assert.equal(result.ok,false);assert.ok(result.error);assert.equal(writes,0);
  }
});
test('storage denied / quota errors leave export available',()=>{
  const store=P.createStore(()=>{throw Error('denied');});
  assert.equal(store.read().ok,false);assert.equal(store.save(P.defaults()).ok,false);assert.equal(store.remove().ok,false);
  assert.ok(P.exportText(P.defaults()).includes('jimnygami'));
});
test('invalid save does not overwrite an existing plan',()=>{
  let writes=0;const store=P.createStore(()=>({setItem:()=>writes++}));
  assert.equal(store.save({...P.defaults(),reserve:40}).ok,false);assert.equal(writes,0);
});
test('export includes confirmed / unverified distinctions, scope, sources and unchecked items',()=>{
  const text=P.exportText({...P.defaults('konkan'),month:11,notes:'Ratnagiri overnight'});
  assert.match(text,/UNVERIFIED placeholder/);assert.match(text,/One-way coastal/);
  assert.match(text,/\[ \] Confirm operating fuel sources/);assert.match(text,/Ratnagiri overnight/);
  assert.match(text,/goatourism\.gov\.in/);assert.match(text,/mausam\.imd\.gov\.in/);
  assert.match(text,/not live routing or verified resources/);
});
test('kit product IDs exist and stay advisory, without silently selecting parts',()=>{
  const catalogContext=vm.createContext({window:{}});vm.runInContext(readFileSync(new URL('../assets/market-catalog.js',import.meta.url),'utf8'),catalogContext);
  const ids=new Set(catalogContext.window.JIMNY_MARKET_PRODUCTS.map(p=>p.id));
  for(const k of P.kits)for(const id of k.productIds)assert.ok(ids.has(id),id);
  assert.match(P.kits.find(k=>k.id==='tyres').items,/bracket is not a compressor/);
  const ui=readFileSync(new URL('../assets/trip-planner-ui.js',import.meta.url),'utf8');
  assert.match(ui,/jimny:trip-kit-request/);assert.doesNotMatch(ui,/selectedParts\.add|applyPkg\(/);
  assert.match(ui,/data-source-part/);
});
