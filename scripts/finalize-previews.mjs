import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import vm from 'node:vm';
const exec=promisify(execFile);
const manifest=JSON.parse(await readFile('assets/previews/manifest.json','utf8'));
const inventory=JSON.parse(await readFile('/tmp/jimny-preview-inventory.json','utf8'));
for(const [body,stem]of [['5door','lwb'],['3door','swb']]){
 const actual=createHash('sha256').update(await readFile(`assets/models/jimny-${stem}-blender.glb`)).digest('hex').slice(0,12);
 if(inventory.release?.models?.[body]!==actual)throw new Error(`Preview inventory has an outdated ${body} model. Rerender before finalizing.`);
}
const context={window:{}};for(const file of ['market-catalog','practical-accessories-data','interior-products','look-packages'])vm.runInNewContext(await readFile(`assets/${file}.js`,'utf8'),context);const lamps=context.window.JIMNY_MARKET_PRODUCTS.filter(p=>p.lightProfile).map(p=>'lamp-'+p.id);
manifest.presets=context.window.JIMNY_LOOK_PACKAGES.map(p=>p.id);
manifest.parts=[...new Set(inventory.parts)];
await mkdir('assets/previews/swb',{recursive:true});
const wheelVariants=['road-oem','at-graphite','at-bronze','at-silver','road-black','road-bronze'];
const tyreTypes=['highway','allterrain','mudterrain'];
const catalogueParts={ '5door':['market_skinny_backbone','market_skinny_jerry','market_suzuki_nomade_flatrack','market_suzuki_nomade_steelwheel','mod_reardoor_molle','mod_halfmolly_5door','exploresetups_drawer_5door'], '3door':['market_skinny_backbone','market_skinny_jerry','mod_reardoor_molle'] };
for(const body of ['5door','3door'])for(const part of Object.values(context.JimnyPracticalParts))if(part.bodyStyles.includes(body))catalogueParts[body].push(part.existingId||part.id);
// Read the actual completed render inventory, not a hand-maintained duplicate
// of every colour/design option in the application.
manifest.studioPreviews={};
let count=0;
for(const body of ['5door','3door']){
  const studio=inventory.studioPreviews[body];
  manifest.studioPreviews[body]=studio;
  const files=[...new Set(inventory.files.filter(item=>item.body===body).map(item=>item.file))];
  for(const file of files)await exec('/opt/homebrew/bin/cwebp',['-quiet','-q','90',`/tmp/jimny-${body}-${file}.png`,'-o',`assets/previews/${body==='3door'?'swb/':''}${file}.webp`]);
  count+=files.length;
}
const hash=async path=>createHash('sha256').update(await readFile(path)).digest('hex');
manifest.renderSources['src/garage-cameras.js']=await hash('src/garage-cameras.js');
for(const file of ['src/trail/player.js','src/trail/replay.js'])manifest.renderSources[file]=await hash(file);
manifest.modelSha256=await hash('assets/models/jimny-lwb-blender.glb');
manifest.swbModelSha256=await hash('assets/models/jimny-swb-blender.glb');
manifest.swbPresets=[...manifest.presets];manifest.swbParts=['tires','seats','doortrim'];
manifest.wheelVariants=wheelVariants;
manifest.tyreTypes=tyreTypes;
manifest.catalogueParts=catalogueParts;
for(const path of [...Object.keys(manifest.renderSources),'src/viewer3d.js','src/scenery.js','src/physical-materials.js','src/contact-shadow.js','src/practical-accessories.js','assets/practical-accessories-data.js','src/accessories.js','src/surface-finishes.js','assets/surface-style-state.js','src/trail/cabin-materials.js','src/trail/cabin.js','assets/jimnygami-logo-original.png','assets/look-packages.js','src/wheel-finishes.js','src/tyre-types.js','src/catalogue-parts.js','src/interior-storage.js','src/grille-colours.js','src/steering-badge.js','src/interior-fabrics.js','src/cabin-upgrades.js','src/touring-interior.js'])manifest.renderSources[path]=await hash(path);
manifest.generated='2026-10-23';
await writeFile('assets/previews/manifest.json',JSON.stringify(manifest,null,2)+'\n');
console.log(`${count} matching live-model previews encoded and fingerprinted.`);
