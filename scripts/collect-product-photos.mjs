// Enrich existing records only. Public product media, no new catalogue listings.
// Attribution is provenance, not a licence: publication permissions are unverified.
import{readFile,writeFile,mkdir}from'node:fs/promises';
import vm from'node:vm';
import{execFile}from'node:child_process';
import{promisify}from'node:util';
const exec=promisify(execFile),context={window:{}};
for(const f of ['market-catalog','practical-accessories-data','interior-products'])vm.runInNewContext(await readFile(`assets/${f}.js`,'utf8'),context);
const products=context.window.JIMNY_MARKET_PRODUCTS,manifestPath='assets/product-photos.json';
let previous={};try{previous=JSON.parse(await readFile(manifestPath,'utf8'));}catch{}
let overrides={};try{overrides=JSON.parse(await readFile('assets/product-photo-overrides.json','utf8'));}catch{}
const records={...previous.records},errors=[],only=process.argv.find(a=>a.startsWith('--only='))?.slice(7);
const get=async url=>{const r=await fetch(url,{signal:AbortSignal.timeout(18000),headers:{'User-Agent':'Jimnygami product-reference collection/1.0'}});if(!r.ok)throw Error('HTTP '+r.status);return r;};
const decode=s=>s.replaceAll('&amp;','&').replaceAll('&#39;',"'").replaceAll('&quot;','"');
function safeImage(value,base){try{const url=new URL(decode(value),base);return url.protocol==='https:'&&!/logo|favicon|placeholder|payment|banner|icon/i.test(url.pathname)?url.href:null;}catch{return null;}}
function htmlImages(html,url){
 const found=[];
 for(const match of html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi))try{const walk=x=>{if(Array.isArray(x))return x.forEach(walk);if(!x||typeof x!=='object')return;if([x['@type']].flat().includes('Product'))for(const image of [x.image].flat()){const value=typeof image==='object'?image?.url:image;if(value)found.push(value);}if(x['@graph'])walk(x['@graph']);};walk(JSON.parse(match[1]));}catch{}
 for(const tag of html.matchAll(/<meta\b[^>]+>/gi)){const s=tag[0];if(/(?:property|name)=["'](?:og:image|twitter:image)["']/i.test(s)){const value=s.match(/content=["']([^"']+)/i)?.[1];if(value)found.push(value);}}
 // Product-gallery selectors, not arbitrary first images or site logos.
 for(const tag of html.matchAll(/<img\b[^>]+>/gi)){const s=tag[0],value=s.match(/(?:data-src|src)=["']([^"']+)/i)?.[1];if(!value)continue;if(/aksesoris_product/.test(value)||/product-gallery-thumbnails-item-image/.test(s)||/dxm.contentcenter.michelin.com/.test(value))found.push(value);}
 return [...new Set(found.map(v=>safeImage(v,url)).filter(Boolean))];
}
async function collect(p){
 if(records[p.id]?.local&&!process.argv.includes('--refresh')&&p.id!==only)return;
 const url=new URL(p.url);let candidates=[],method='product-page';
 try{
  if(url.pathname.includes('/products/'))try{
   const js=new URL(url);js.search='';js.pathname=js.pathname.replace(/\/$/,'')+'.js';const d=await(await get(js.href)).json();
   if(d.title&&Array.isArray(d.images)){candidates=[d.featured_image,...d.images].filter(Boolean).map(v=>safeImage(v,url)).filter(Boolean);method='product-json';}
  }catch{}
  if(!candidates.length&&!overrides[p.id]?.image){const html=await(await get(overrides[p.id]?.page||url.href)).text();candidates=htmlImages(html,overrides[p.id]?.page||url.href);}
  if(overrides[p.id]){candidates=[overrides[p.id].image,...candidates];method='manually-matched-product-photo';}
  if(!candidates.length)throw Error('No product image found');
  let last;
  for(const image of candidates.slice(0,3))try{
   const u=new URL(image);if(/shopify|\/cdn\/shop\//.test(u.href))u.searchParams.set('width','900');
   const r=await get(u.href);if(!/image\//i.test(r.headers.get('content-type')||''))throw Error('Not an image');const bytes=Buffer.from(await r.arrayBuffer());if(bytes.length>12000000)throw Error('Image too large');
   const temp=`/tmp/jimny-product-${p.id}`,local=`assets/products/${p.id}.webp`;await writeFile(temp,bytes);
   await exec('/opt/homebrew/bin/cwebp',['-quiet','-q','84','-resize','760','0',temp,'-o',local]);
   records[p.id]={local,original:u.href,page:overrides[p.id]?.page||p.url,credit:overrides[p.id]?.credit||p.seller,method,checked:'2026-10-23',rights:'unverified',kind:overrides[p.id]?.rangePhoto?'manufacturer-range-photo':'supplier-product-photo'};return;
  }catch(e){last=e;}
  throw last||Error('Image unavailable');
 }catch(e){errors.push({id:p.id,name:p.name,url:p.url,error:e.message});}
}
await mkdir('assets/products',{recursive:true});
let index=0,done=0;const queue=process.argv.includes('--metadata-only')?[]:products.filter(p=>only?p.id===only:!records[p.id]?.local||process.argv.includes('--refresh'));
await Promise.all(Array.from({length:4},async()=>{while(index<queue.length){const p=queue[index++];await collect(p);done++;if(done%25===0)console.log(`${done}/${queue.length} processed; ${Object.keys(records).length} photos`);}}));
const valid=new Set(products.map(p=>p.id));for(const id of Object.keys(records))if(!valid.has(id))delete records[id];
const publicationApproval=await readFile('assets/publication-approval.json','utf8').then(JSON.parse).catch(()=>null);
const output={checked:'2026-10-23',publicationRights:publicationApproval?'Site owner authorised publication on '+publicationApproval.approvedOn+'. Third-party licences have not been independently verified; retain source credits.':'Not verified. Attribution does not grant reproduction permission. Confirm supplier permission before public deployment.',publicationApproval,records,errors};
await writeFile(manifestPath,JSON.stringify(output,null,2)+'\n');
await writeFile('assets/product-photos.js','/* Generated product media provenance. No new product records. */\nwindow.JIMNY_PRODUCT_PHOTOS='+JSON.stringify(records)+';\n');
console.log(JSON.stringify({products:products.length,photos:Object.keys(records).length,missing:errors},null,2));
