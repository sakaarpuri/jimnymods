// Explicit, repeatable editorial import. Never runs in the owner's browser or during a build.
// Public seller titles/URLs only; no photographs, descriptions, prices or stock guarantees copied.
import { readFile, writeFile } from 'node:fs/promises';
import vm from 'node:vm';
const existingContext={window:{}};
vm.runInNewContext(await readFile('assets/market-catalog.js','utf8'),existingContext);
const previous=existingContext.window.JIMNY_MARKET_PRODUCTS;
const checked = new Date().toISOString().slice(0,10);
const rules = [
  [/^ARB Summit Bull Bar/, 'Protection', 'bull'],
  [/^ARB Deluxe Rock Slider/, 'Protection', 'sliders'],
  [/^ARB Old Man Emu - 40mm/, 'Suspension', null],
  [/^ARB Differential Air Locker/, 'Drivetrain', null],
  [/^ALU-CAB Bonnet Light Brackets/, 'Lighting', null],
  [/^ALU-CAB Rear Tailgate Drop Down Table/, 'Camping & storage', null],
  [/^ALU-CAB Roof Rack Load Bar V2/, 'Roof & carrying', null],
  [/^ALU-CAB 2 Meter/, 'Camping & storage', null],
  [/^AMERICAN RACING Baja - Satin/, 'Wheels', 'tires'],
  [/^DOBINSONS Heavy Duty Steering Damper/, 'Suspension', null],
  [/^DOBINSONS (Front|Rear) Heavy Duty Adjustable Panhard/, 'Suspension', null],
  [/^DYNAMIC WHEEL CO\. (Round Hole|Sunraysia)/, 'Wheels', 'tires'],
  [/^ECB Concealed Winch Mount/, 'Recovery', null],
  [/^ECB Nudge Bar/, 'Protection', null],
  [/^ECB Winch Compatible Big Tube/, 'Protection', 'bull'],
  [/^EEZI-AWN K9 Ladder/, 'Roof & carrying', 'ladder'],
  [/^EFS (Adventure Stockman|Xcape) Bull Bar/, 'Protection', 'bull'],
  [/^EVO CORSE DakarZero 15x7.*ET0/, 'Wheels', 'tires'],
  [/^FRONT RUNNER Cargo Base Deck/, 'Camping & storage', null],
  [/^FRONT RUNNER Light Duty Rear Cargo Shelf/, 'Camping & storage', 'shelf'],
  [/^FRONT RUNNER Slimline II Roof Rack - Taller/, 'Roof & carrying', 'fr_slimline2_tall'],
  [/^FRONT RUNNER Slimline II Roof Rack/, 'Roof & carrying', 'fr_slimline2'],
  [/^FRONT RUNNER Slimline 3 Roof Rack/, 'Roof & carrying', 'rack'],
  [/^FULCRUM SUSPENSIONS Suspension Lift Kit/, 'Suspension', null],
  [/^HAMER 4X4 Rear Ladder/, 'Roof & carrying', 'ladder'],
  [/^IPF 600 S-Series 20.*LED Light Bar/, 'Lighting', 'lamp_bar20'],
  [/^IPF Spotlight Mounting Bar/, 'Lighting', null],
  [/^IPF EXP Rear Ladder/, 'Roof & carrying', 'ladder'],
  [/^IRONMAN 4x4 - 50mm (Performance )?Suspension/, 'Suspension', null],
  [/^IRONMAN 4x4 Snorkel/, 'Intake', 'snorkel'],
  [/^IRONMAN Raid Roof Rack/, 'Roof & carrying', 'rack'],
  [/^JROAD Rear Ladder/, 'Roof & carrying', 'ladder'],
  [/^KAON Out-Back/, 'Recovery', null],
  [/^KAP INDUSTRIES Fire Extinguisher/, 'Interior', null],
  [/^KONI Heavy Track/, 'Suspension', null],
  [/^MAX 4X4 Lightweight Full-Loop/, 'Protection', 'bull'],
  [/^MOD Under Bonnet Air Compressor Bracket/, 'Recovery', null],
  [/^OFFROAD ANIMAL Scout Roof Rack/, 'Roof & carrying', 'rack'],
  [/^SPECTR LED Tail Light Assembly/, 'Lighting', null],
  [/^SPECTR LED Red Brake/, 'Lighting', null],
  [/^STEDI Piggy Back Headlight Adaptor/, 'Lighting', null],
  [/^SUZUKI GENUINE 'Retro' Front Upper Grille/, 'Grilles', 'autostylenn_big_suzuki_grille'],
  [/^SPECTR Front Upper Grille/, 'Grilles', null],
  [/^ROAMING HORIZONS Tactical Suzuki Upper Grille Badge/, 'Grilles', null],
];
async function feed(url){const r=await fetch(url,{signal:AbortSignal.timeout(20000)});if(!r.ok)throw Error(`${r.status}: ${url}`);const d=await r.json();if(!Array.isArray(d.products))throw Error('Invalid public feed');return d.products;}
const oz=(await Promise.all([1,2,3].map(page=>feed(`https://ozjimny.com/collections/all/products.json?limit=250&page=${page}`)))).flat();
const entries=[];
for(const p of oz){
  if(!/5[- ]Door/i.test(p.title))continue;
  const rule=rules.find(([pattern])=>pattern.test(p.title));if(!rule)continue;
  const [,category,visual]=rule;
  entries.push({id:`market_${p.id}`,name:p.title.replace(/\s*\(Jimny Models?.*$/i,'').replace(/\s*Only!$/,''),category,visual,
    fitment:'Seller lists Jimny XL / long-wheelbase fitment. Confirm India model year, mounting kit and variant before ordering.',
    region:'Australia',seller:'OZ Jimny',url:`https://ozjimny.com/products/${p.handle}`,checked,
    ...(visual==='lamp_bar20'?{lightProfile:'bar'}:{}),
    note:visual?.startsWith('fr_slimline2')?'Reference-guided 1345 × 1964 mm tray with eight gutter clamps. Mount height and small hardware are approximate, not manufacturer CAD. Check vehicle roof-load limits and exact mounting kit.':category==='Wheels'?'Confirm PCD, offset, tyre size, clearance and load rating. Preview uses a generic A/T wheel, not this wheel design.':category==='Suspension'?'Select springs for actual axle loads. Geometry, steering, brake hoses and road approval require professional checking.':category==='Roof & carrying'?'Check rack length, mounts and vehicle roof-load limits, including the weight of all carried accessories.':'Exact dimensions, current stock, shipping, customs and installation require seller confirmation.'});
}
const prad=await feed('https://shop.prad4x4.com/collections/maruti-suzuki-jimny/products.json?limit=50');
for(const p of prad){
  if(/Roofrack/i.test(p.title))continue; // Already a directly linked product in the original catalogue.
  const visual=/Bumper/i.test(p.title)?'autostylenn_bumper_v1':/Underbody/i.test(p.title)?'skid':/Rockslider/i.test(p.title)?'sliders':null;
  entries.push({id:`market_prad_${p.id}`,name:`PRAD ${p.title.replace(/ - Maruti Suzuki Jimny| for Maruti Suzuki Jimny/g,'')}`,category:/Clamp/i.test(p.title)?'Lighting':'Protection',visual,region:'India',seller:'PRAD 4x4',url:`https://shop.prad4x4.com/products/${p.handle}`,checked,fitment:'Listed for Maruti Suzuki Jimny. Confirm exact variant and mounting requirements.',note:'Manufacturer lists made-to-order production. Confirm lead time, tax, shipping and fitting before payment.'});
}
const lamps=[
 ['dd_work','Diode Dynamics SSC1 Sport White Flood pair','USA','Diode Dynamics','https://www.diodedynamics.com/ssc1-white-sport-led-pod-pair.html','lamp_work','work'],
 ['stedi_spot','STEDI Type-X EVO 7-inch Spot','Australia','Roof Racks Galore','https://www.roofracksgalore.com.au/stedi-type-x-evo-7inch-spot-st-01-evo-701','lamp_round_spot','spot'],
 ['stedi_flood','STEDI Type-X EVO 7-inch Flood','Australia','Roof Racks Galore','https://www.roofracksgalore.com.au/stedi-type-x-evo-7inch-flood-st-01-evo-702','lamp_round_flood','flood'],
 ['dd_fog','Diode Dynamics SS3 Sport Yellow SAE Fog pair','USA','Diode Dynamics','https://www.diodedynamics.com/ss3-sae-yellow-sport-led-pod-pair.html','lamp_fog','fog'],
 ['dd_dual','Diode Dynamics SS3 Dual-Color Fog pair','USA','Diode Dynamics','https://www.diodedynamics.com/ss3-dual-color-led-pod-pair.html','lamp_dual','dual'],
 ['lazer750','Lazer Triple-R 750','UK','Lazer Lamps','https://www.lazerlamps.com/en/triple-r-750.html','lamp_compact_bar','driving'],
 ['baja_sport','Baja Designs Squadron Sport pod','USA','Baja Designs','https://www.bajadesigns.com/products/squadron-sport-black-led-auxiliary-light-pod-universal/?sku=550003','lamp_cube','combo'],
];
for(const [id,name,region,seller,url,visual,lightProfile] of lamps){
 const old=previous.find(p=>p.id===`market_${id}`);
 entries.push({id:`market_${id}`,name,category:'Lighting',region,seller,url,visual,lightProfile,checked:old?.checked||'2026-10-20',fitment:'Universal lamp, not a Jimny plug-and-play kit. Confirm bracket, wiring, space and local lighting rules.',note:'Choose the exact beam/lens variant on the seller page. Preview shows a representative installation, not tested photometry. Single-lamp listings may require two units for the illustrated pair.'});
}

// Broaden by genuinely different product families, not quantities, invented
// variants, merchandise, whole cars or old-generation Jimny equipment.
const expansionRules=[
 [/\b(Alloy Wheel|Steel Wheel|Wheel Package)\b/i,'Wheels',20],
 [/\b(Suspension Lift Kit|Shock Absorber|Panhard|Coil Spring|Steering Damper|Castor Correction)\b/i,'Suspension',18],
 [/\b(Bull Bar|Bumper|Rock Slider|Rockslider|Bash Plate|Underbody Protection|Radius Arm Protection|Differential Guard|Fuel Tank Guard)\b/i,'Protection',22],
 [/\b(Grille|Grill|Tactical Badge|Upper Grille Badge)\b/i,'Grilles',12],
 [/\b(Roof Rack|Roofrack|Load Bar|Cross Bar|Rear Ladder|K9 Ladder)\b/i,'Roof & carrying',18],
 [/\b(LED|Fog Lamp|Driving Light|Spotlight|Light Bar|Lightbar|Headlight|Headlamp)\b/i,'Lighting',20],
 [/\b(Snorkel|Cold Air Intake|Airbox|Air Box|Air Filter)\b/i,'Intake',10],
 [/\b(Recovery Point|Recovery Device|MAXTRAX|Winch Mount|Air Compressor|INDEFLATE)\b/i,'Recovery',12],
 [/\b(Awning|Tent|Drawer|Cargo|Storage Box|Molle|Drop Down Table|Base Deck|Luggage Divider|Fridge|Jerry Can)\b/i,'Camping & storage',18],
 [/\b(Armrest|Seat Cover|Floor Mat|Floormat|Dash Mat|Storage Tray|Phone Holder|Phone Mount|Cup Holder|Drink Holder|Sunshade|Console|Interior Set|Boot Mat)\b/i,'Interior',20],
 [/\b(Mud Flap|Mudflap|Weather Shield|Wind Deflector|Bonnet Guard|Spare Wheel Cover|Mirror Cover|Body Kit)\b/i,'Exterior',12],
];
function bodies(title){
 const both=/3\s*&\s*5[- ]?door|3\s*(?:and|\/)\s*5[- ]?door/i.test(title);
 return [...(both||/3[- ]?door|JB74/i.test(title)?['3door']:[]),...(both||/5[- ]?door|JC74|Nomade|\bXL\b/i.test(title)?['5door']:[])];
}
function fitment(title){
 const b=bodies(title);
 return b.length?`Seller title specifies ${b.map(x=>x==='3door'?'three-door JB74':'five-door / XL').join(' and ')}. Confirm exact model year, chassis, variant and required mounting kit before ordering.`:'Seller lists a current-generation Jimny product but does not resolve body style in its title. Confirm JB74 / five-door chassis compatibility before ordering.';
}
const stock=p=>p.variants?.some(v=>v.available===true)?'available':p.variants?.length?'unavailable':'unknown';
const jimsa=await feed('https://www.jimsa.co.za/products.json?limit=250');
const sources=[{products:oz,seller:'OZ Jimny',region:'Australia',countryCode:'AU',base:'https://ozjimny.com',prefix:'market_'},{products:jimsa,seller:'JimSA',region:'South Africa',countryCode:'ZA',base:'https://www.jimsa.co.za',prefix:'market_jimsa_'}];
for(const source of sources){
 const counts=new Map();
 for(const p of source.products){
  const id=source.prefix+p.id;
  if(entries.some(e=>e.id===id))continue;
  if(!/Jimny/i.test(p.title)||!/2018|2019|2023|2026|GEN4|JB74|JC74/i.test(p.title)||/1998|2005|2013|GEN3|Catless|Catalytic Converter Delete|No Catalytic/i.test(p.title))continue;
  const rule=expansionRules.find(([pattern])=>pattern.test(p.title));if(!rule)continue;
  const [,category,limit]=rule;
  if((counts.get(category)||0)>=limit||stock(p)!=='available')continue;
  counts.set(category,(counts.get(category)||0)+1);
  entries.push({id,name:p.title,category,visual:null,previewKind:'research-only',bodyStyles:bodies(p.title),fitment:fitment(p.title),region:source.region,countryCode:source.countryCode,seller:source.seller,url:`${source.base}/products/${p.handle}`,checked,stockAtCheck:stock(p),note:'Real seller listing; no exact 3D model is supplied. Stock was checked at import, not live. Confirm price, delivery, installation, vehicle loads and local road requirements.'});
 }
}
// Manually inspected first-party product pages. Their check date is deliberately
// fixed: running a feed refresh is not a new verification of these pages.
const regionalProducts=[
 ['sga_99177_78r01','Suzuki roof basket 99177-78R01-000','Roof & carrying','ID','Indonesia','Suzuki Indonesia','https://www.suzuki.co.id/aksesori/jimny/200/roof-basket-',[]],
 ['sga_72110_78r01','Suzuki front grille 72110-78R01-C48','Grilles','ID','Indonesia','Suzuki Indonesia','https://www.suzuki.co.id/aksesori/jimny/199/front-grille-jimny',[]],
 ['sga_99179_78r00','Suzuki surfboard carrier 99179-78R00-000','Roof & carrying','ID','Indonesia','Suzuki Indonesia','https://www.suzuki.co.id/aksesori/jimny/183/surfboard-carrier',[]],
 ['sga_9917b_78r01','Suzuki bicycle carrier 9917B-78R01-000','Roof & carrying','ID','Indonesia','Suzuki Indonesia','https://www.suzuki.co.id/aksesori/jimny/182/bicycle-carrier',[]],
 ['sga_99176_78r11','Suzuki multi roof rack 99176-78R11-000','Roof & carrying','ID','Indonesia','Suzuki Indonesia','https://www.suzuki.co.id/aksesori/jimny/180/multi-roof-rack',[]],
 ['sga_99150_80t10','Suzuki luggage mat 99150-80T10-000','Interior','ID','Indonesia','Suzuki Indonesia','https://www.suzuki.co.id/aksesori/jimny/179/luggage-mat',[]],
 ['sga_99152_80t30','Suzuki rear gate net 99152-80T30-000','Camping & storage','ID','Indonesia','Suzuki Indonesia','https://www.suzuki.co.id/aksesori/jimny/178/rear-gate-net',[]],
 ['apio_4031_2','APIO Flight Instruments Panel','Interior','JP','Japan','APIO','https://apio.jp/parts/4031-2.html',['3door','5door']],
 ['apio_7109_64','APIO Wide Rear View Blue Mirror','Interior','JP','Japan','APIO','https://apio.jp/parts/7109-64.html',['3door','5door']],
 ['apio_1028_6a','APIO ZERORISE coil spring / suspension kit','Suspension','JP','Japan','APIO','https://apio.jp/parts/1028-6a.html',['3door','5door']],
 ['apio_3630_03w','APIO Classic Carrier roof rack','Roof & carrying','JP','Japan','APIO','https://apio.jp/parts/3630-03w.html',['3door']],
 ['apio_3032_82','APIO Front Wide Extension for Sierra / Nomade','Protection','JP','Japan','APIO','https://apio.jp/parts/3032-82.html',['3door','5door']],
 ['jb_passenger_storage','Jimnybits passenger storage tray with drink holder — Gen 4','Interior','GB','United Kingdom','Jimnybits','https://www.jimnybits.com/jimny-passenger-side-storage-with-drink-holder-gen-4.html',[]],
 ['jb_transfer_brackets','Jimnybits heavy-duty transfer-box brackets — 2018-on','Drivetrain','GB','United Kingdom','Jimnybits','https://www.jimnybits.com/jimny-heavy-duty-transfer-box-brackets-18-on.html',[]],
 ['jb_fuel_guard','Jimnybits heavy-duty fuel-tank guard — 2018-on','Protection','GB','United Kingdom','Jimnybits','https://www.jimnybits.com/suzuki-jimny-heavy-duty-fuel-tank-guard-2018-on.html',[]],
];
for(const [key,name,category,countryCode,region,seller,url,bodyStyles] of regionalProducts)entries.push({id:`market_${key}`,name,category,countryCode,region,seller,url,bodyStyles,visual:null,previewKind:'research-only',checked:'2026-10-21',stockAtCheck:'unknown',fitment:bodyStyles.length?`Manufacturer lists ${bodyStyles.map(x=>x==='3door'?'JB74 Sierra':'JC74 Nomade').join(' / ')} versions. Select the exact chassis-specific SKU and year; JB64 kei parts are not equivalent.`:'Listed in the supplier’s Jimny range. Body style is not confirmed here: ask for written compatibility with your chassis and model year.',note:'Published product page, not a live stock or fitment guarantee. Confirm mounting hardware, delivery, local approval and the installed price. Research shortlist only; no exact 3D model.'});
for(const [id,name,seller,url] of [
 ['bfg_ko3','BFGoodrich All-Terrain T/A KO3 tyre range','BFGoodrich Australia','https://www.bfgoodrich.com.au/auto/tyres/bfgoodrich-all-terrain-t-a-ko3'],
 ['toyo_at3','Toyo Open Country A/T III tyre range','Toyo Tires Australia','https://www.toyotires.com.au/tyres/toyo-open-country-at-iii'],
])entries.push({id:`market_${id}`,name,category:'Wheels',countryCode:'AU',region:'Australia',seller,url,bodyStyles:[],visual:null,previewKind:'research-only',checked:'2026-10-21',stockAtCheck:'unknown',fitment:'Manufacturer tyre range, not a vehicle-specific fitment approval. Confirm available size, load/speed rating, rim width, clearance and local requirements with a tyre fitter.',note:'Choose the exact tyre size and construction with the local dealer. No exact tread model or stock guarantee is supplied; different sizes can have different specifications.'});
// Correct metadata on legacy records without changing saved-build selection IDs
// or claiming that their generic previews are product-specific CAD.
for(const e of entries){
 e.countryCode||=({Australia:'AU',India:'IN',USA:'US',UK:'GB'})[e.region];
 const source=e.seller==='OZ Jimny'?oz:e.seller==='PRAD 4x4'?prad:[];
 const p=source.find(p=>e.url.endsWith('/'+p.handle));
 if(p){e.bodyStyles=e.seller==='PRAD 4x4'?['5door']:bodies(p.title);e.fitment=e.seller==='PRAD 4x4'?e.fitment:fitment(p.title);e.stockAtCheck=stock(p);}
 e.bodyStyles||=[];e.stockAtCheck||='unknown';
 e.previewKind||=e.visual?.startsWith('fr_slimline2')?'reference-guided':e.visual?'representative':'research-only';
}
if(entries.length<210)throw Error('Catalogue unexpectedly incomplete; refusing to replace published data.');
if(new Set(entries.map(x=>x.id)).size!==entries.length)throw Error('Duplicate products');
// Preserve previous IDs if a seller removes a listing; never relabel a missing
// record as freshly verified, nor quietly break an owner's saved shortlist.
for(const old of previous)if(!entries.some(e=>e.id===old.id))entries.push({...old,stockAtCheck:'unknown',note:old.note+' Listing not found in the latest import; reconfirm directly with seller.'});
await writeFile('assets/market-catalog.js',`// Curated public listings. Regenerate explicitly with scripts/refresh-market-catalog.mjs.\nwindow.JIMNY_MARKET_PRODUCTS = ${JSON.stringify(entries,null,2)};\n`);
console.log(`Wrote ${entries.length} real product listings, checked ${checked}. No seller imagery copied.`);
