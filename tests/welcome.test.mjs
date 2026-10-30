import test from'node:test';import assert from'node:assert/strict';import{readFileSync}from'node:fs';
import vm from 'node:vm';
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8');
const html=read('index.html'),welcome=read('assets/welcome.js'),css=read('assets/welcome.css');

test('welcome uses current customised previews for both bodies and protects existing builds',()=>{
 assert.match(welcome,/const featuredLook='retro'/);
 assert.match(welcome,/preset-\$\{featuredLook\}\.webp\?v=/);
 assert.match(welcome,/JIMNY_VISUAL_RELEASE\?\.previewVersion/);
 assert.match(welcome,/Customise this Jimny/);assert.match(welcome,/Start with stock instead/);
 assert.match(welcome,/if\(featured&&startFeatured\)applyPkg\(featuredLook,'replace'\)/);
 const fn=welcome.match(/function canStartFeatured\(\)\{[\s\S]*?\n  \}/)[0];
 const check=({seen=false,region=false,parts=[],hash='',search='',blocked=false}={})=>vm.runInNewContext(fn+';canStartFeatured()',{
  SEEN_KEY:'seen',URLSearchParams,location:{hash,search},window:{getJimnyBuildState:()=>({parts})},
  localStorage:{getItem:key=>{if(blocked)throw Error('Unavailable');return key==='seen'?seen:region;}}
 });
 assert.equal(check(),true);
 for(const state of [{seen:true},{region:true},{parts:['rack']},{hash:'#welcome'},{search:'?build=shared'},{blocked:true}])assert.equal(check(state),false);
});

test('first-visit welcome uses the brief copy and asks only region and body',()=>{
 assert.match(welcome,/Build it<br>here first\./);
 assert.match(welcome,/Explore modifications in 3D, find parts and fitters, and play the 4×4 driving game/);
 assert.match(welcome,/Open the Garage/);assert.match(welcome,/Play & learn Jimny 4×4 controls/);assert.match(welcome,/Plan a trip/);
 assert.match(welcome,/Start building/);assert.match(welcome,/Just look around/);
 const fields=[...welcome.matchAll(/<(select|input) /g)].length;assert.equal(fields,2,'one radio group and one region select');
 // Answers go through the existing controls, so there is one source of truth.
 assert.match(welcome,/regionSelect\.dispatchEvent\(new Event\('change'/);assert.match(welcome,/bodySelect\.dispatchEvent\(new Event\('change'/);
});

test('welcome is decided before first paint and skipped for returning visitors',()=>{
 const head=html.split('</head>')[0];
 assert.match(head,/assets\/welcome\.css/);
 assert.match(head,/dataset\.welcome=deep\?'sheet':'page'/);
 for(const key of ['thatsuvmod-welcomed','thatsuvmod-region','thatsuvmod-build','thatsuvmod-snapshots'])assert(head.includes(key),key);
 assert.match(head,/build\?\.parts\?\.length/,'an autosaved stock build is not a returning visitor');
 assert.match(head,/has\('build'\)/,'share links get the sheet, not the page');
 assert.match(css,/:root\[data-welcome=page\] body>:not\(\.welcome-page\)/);
 assert.doesNotMatch(html,/class="hero-intro"/,'the unused hidden hero is gone');
});

test('the welcome can be seen again from the header and footer',()=>{
 assert.match(read('assets/site-header.js'),/#welcome">What is jimnygami\?<\/a>/);
 assert.match(html,/<a href="#welcome">What is jimnygami\?<\/a>/);
 assert.match(welcome,/a\[href\$="#welcome"\]/);
 assert.match(read('scripts/build.mjs'),/'assets\/welcome\.js'/);
});
