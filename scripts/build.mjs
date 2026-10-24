import { build } from 'esbuild';
import { mkdir, cp, copyFile, readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

const hash=async file=>createHash('sha256').update(await readFile(file)).digest('hex');
const modelFull=await hash('assets/models/jimny-lwb-blender.glb'),swbFull=await hash('assets/models/jimny-swb-blender.glb');
const modelHash=modelFull.slice(0,12),swbHash=swbFull.slice(0,12);
const previews=JSON.parse(await readFile('assets/previews/manifest.json','utf8'));
const worldPreviews=await readFile('assets/previews/world-manifest.json','utf8').then(JSON.parse).catch(()=>null);
const sources={};for(const file of Object.keys(previews.renderSources))sources[file]=await hash(file);
const stale=previews.modelSha256!==modelFull||previews.swbModelSha256!==swbFull||worldPreviews?.modelSha256!==modelFull||Object.entries(sources).some(([f,h])=>previews.renderSources[f]!==h);
if(stale&&!process.argv.includes('--preview-refresh'))throw new Error('Model-derived previews are stale. Build with --preview-refresh for rendering only, regenerate/finalize previews, then run the normal release build.');
if(stale)console.warn('Preview-refresh build: not a finished release until previews are finalized.');
const previewVersion=createHash('sha256').update(JSON.stringify({modelFull,swbFull,sources,previews,worldPreviews})).digest('hex').slice(0,12);
await writeFile('assets/visual-release.js','/* Generated model/preview identity. */\nwindow.JIMNY_VISUAL_RELEASE='+JSON.stringify({previewVersion,models:{'5door':modelHash,'3door':swbHash}})+';\n');
await build({entryPoints:['src/viewer3d.js'],bundle:true,minify:true,format:'esm',outfile:'assets/viewer3d.js',logLevel:'info',define:{__JIMNY_MODEL_URL__:JSON.stringify(`assets/models/jimny-lwb-blender.glb?v=${modelHash}`),__JIMNY_SWB_URL__:JSON.stringify(`assets/models/jimny-swb-blender.glb?v=${swbHash}`)}});
await build({entryPoints:['src/trail-game.js'],bundle:true,minify:true,format:'esm',outfile:'assets/trail-game.js',logLevel:'info',define:{__JIMNY_MODEL_URL__:JSON.stringify(`assets/models/jimny-lwb-blender.glb?v=${modelHash}`),__JIMNY_SWB_URL__:JSON.stringify(`assets/models/jimny-swb-blender.glb?v=${swbHash}`)}});
await mkdir('dist',{recursive:true});
await cp('assets','dist/assets',{recursive:true});
for(const file of ['index.html','design.css','game.html','game.css','trip-planner.html','robots.txt','_headers'])await copyFile(file,`dist/${file}`);
// Returning owners must receive the matching viewer and styles, not a cached previous release.
let html=await readFile('dist/index.html','utf8');
// A direct Netlify deployment can have a different public origin from a future
// custom domain. Social crawlers need working absolute URLs in the built HTML.
const publicOrigin=process.env.PUBLIC_SITE_URL;
if(publicOrigin){
 const site=new URL(publicOrigin);
 if(site.protocol!=='https:'||site.username||site.password)throw new Error('PUBLIC_SITE_URL must be a public HTTPS origin without credentials.');
 const home=new URL('/',site).href,image=new URL('/assets/previews/design-finish-oem.webp',site).href;
 html=html.replace(/(<link rel="canonical" href=")[^"]+/,(_,prefix)=>prefix+home).replace(/(<meta property="og:image" content=")[^"]+/,(_,prefix)=>prefix+image);
}
for(const file of ['assets/visual-release.js','assets/visual-assets.js','assets/viewer3d.js','assets/market-catalog.js','assets/practical-accessories-data.js','assets/interior-products.js','assets/look-packages.js','assets/build-kits.js','assets/build-kits-ui.js','assets/global-mod-guide.js','assets/mod-guide-ui.js','assets/regions.js','assets/region-ui.js','assets/directory.js','assets/directory-ui.js','assets/ui-theme.js','assets/site-header.js','assets/direction-a.css','assets/surface-style-state.js','assets/trip-planner.js','assets/trip-planner-ui.js','assets/trip-planner-garage.js','assets/on-car-editor.js','assets/on-car-editor.css','assets/workbench-flow.js','assets/workbench-flow.css','assets/product-photos.js','assets/catalogue-ui.js','assets/catalogue-ui.css','assets/owner-tools-state.js','assets/owner-workspace.js','assets/owner-workspace.css','assets/trip-planner.css','design.css','assets/jimnygami-brand.css']){const hash=createHash('sha256').update(await readFile(file)).digest('hex').slice(0,12);html=html.replace(`"${file}"`,`"${file}?v=${hash}"`);}
await writeFile('dist/index.html',html);
let game=await readFile('dist/game.html','utf8');
for(const file of ['assets/visual-release.js','assets/visual-assets.js','assets/trail-game.js','assets/market-catalog.js','assets/ui-theme.js','assets/site-header.js','assets/direction-a.css','game.css','assets/jimnygami-brand.css']){const hash=createHash('sha256').update(await readFile(file)).digest('hex').slice(0,12);game=game.replace(`"${file}"`,`"${file}?v=${hash}"`);}
await writeFile('dist/game.html',game);
let trip=await readFile('dist/trip-planner.html','utf8');
for(const file of ['assets/trip-planner.css','assets/trip-page.css','assets/direction-a.css','assets/site-header.js','assets/ui-theme.js','assets/trip-planner.js','assets/trip-planner-ui.js','assets/trip-page.js','assets/trip-destinations.js','assets/trip-photos.js','assets/market-catalog.js','assets/product-photos.js','assets/practical-accessories-data.js'])trip=trip.replace(`"${file}"`,`"${file}?v=${(await hash(file)).slice(0,12)}"`);
await writeFile('dist/trip-planner.html',trip);
console.log(stale?'Preview-refresh build ready in dist/; regenerate previews before release.':'Static release ready in dist/.');
