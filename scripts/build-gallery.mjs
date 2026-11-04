import {readFile, writeFile, mkdir, access} from 'node:fs/promises';
import {join} from 'node:path';
import vm from 'node:vm';

const partNames = {
  sparecover:'Spare wheel cover', mudflaps:'Mud flaps', seats:'Seat upholstery', doortrim:'Upholstered door inserts',
  mats:'All-weather mats', visors:'Door visors', armrest:'Armrest console', rack:'Roof rack', rtt:'Rooftop tent',
  awning:'Side awning', ladder:'Rear ladder', boards:'Recovery boards', drawer:'Boot storage drawer', molle:'MOLLE panels',
  pods:'LED spot lamps', skid:'Underbody skid plates', sliders:'Rock sliders', snorkel:'Raised air intake',
  touring:'Touring interior with solo sleeper', lift:'Suspension lift kit', flares:'Wide wheel arches',
  spoiler:'Rear roof spoiler', dashcam:'Front and rear dashcam', headunit:'Android head unit',
  ambient:'Footwell lighting', bull:'Off-road front bumper', winch:'Electric winch', led:'LED light bar', shelf:'Rear parcel shelf'
};
const finishes={oem:'Factory gloss',twotone:'Two-tone',satin:'Satin',raptor:'Textured',blackout:'Blackout'};
const grilles={classic:'Classic',block:'Block lettering',script:'Script lettering',smesh:'Mesh with S emblem',rhino:'Rhino',mesh:'Mesh',delete:'Debadged',oem:'Factory'};
const tyres = {highway:'Road tyres',allterrain:'All-terrain tyres',mudterrain:'Mud-terrain tyres'};
const escape = value => String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const pathFor = build => '/builds/'+build.id+'/';
const stylePath = style => '/builds/styles/'+style.toLowerCase()+'/';
const preview = (build,short=false) => '/assets/previews/'+(short?'swb/':'')+'preset-'+build.id+'.webp';
const linkTag = tag => '<a class="chip" href="'+stylePath(tag)+'">'+escape(tag)+'</a>';

export async function buildGallery(destination,origin){
  const site=new URL(origin).origin;
  const context={window:{}};
  for(const name of ['look-packages','build-styles']){
    vm.runInNewContext(await readFile('assets/'+name+'.js','utf8'),context);
  }
  const builds=context.window.JIMNY_LOOK_PACKAGES, styles=context.window.JIMNY_BUILD_STYLES;
  const tags=[...new Set(Object.values(styles).flat())].sort();
  const urls=[];
  async function page(path,title,description,image,body){
    const url=site+path;
    const html=`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escape(title)} · JimnyGami</title><meta name="description" content="${escape(description)}"><link rel="canonical" href="${url}">
<meta property="og:type" content="website"><meta property="og:title" content="${escape(title)} · JimnyGami"><meta property="og:description" content="${escape(description)}"><meta property="og:url" content="${url}"><meta property="og:image" content="${site+image}"><meta name="twitter:card" content="summary_large_image">
<link rel="stylesheet" href="/assets/build-gallery.css"></head><body><header><a href="/" aria-label="JimnyGami home"><img src="/assets/jimnygami-logo-sticker.webp" width="1550" height="341" alt="JimnyGami"></a><nav aria-label="Main navigation"><a href="/builds/">Build gallery</a><a href="/#garage">Garage ↗</a></nav></header><main>${body}</main></body></html>`;
    const dir=join(destination,path);await mkdir(dir,{recursive:true});await writeFile(join(dir,'index.html'),html);urls.push(url);
  }
  for(const b of builds){
    if(!styles[b.id]?.length)throw new Error('Missing style tags for '+b.id);
    await Promise.all([preview(b),preview(b,true)].map(file=>access('.'+file)));
    const parts=b.parts.map(id=>{
      const label=id==='tires'?tyres[b.design.tyreType]+' and alloy wheels':partNames[id];
      if(!label)throw new Error('Missing part label for '+id);
      return '<li>'+escape(label)+'</li>';
    }).join('');
    const garage='/?look='+encodeURIComponent(b.id);
    await page(pathFor(b),b.name+' Jimny build',b.tag,preview(b),`
<a href="/builds/" class="back">← All builds</a>
<section class="hero"><div><p class="eyebrow">Jimny build gallery</p><h1>${escape(b.name)}</h1>
<p class="lead">${escape(b.tag)}.</p><div class="tags">${styles[b.id].map(linkTag).join('')}</div>
<p class="model">Suzuki Jimny · 5-door</p><a class="button" href="${garage}#garage">Open this build in 3D ↗</a> <button class="share" data-share-build hidden>Share build</button><span id="shareStatus" role="status"></span><script src="/assets/build-share.js" defer></script>
</div><figure><img class="car" src="${preview(b)}" width="800" height="600" alt="${escape(b.name)} on the five-door Jimny"></figure></section>
<section class="details"><div><h2>Included modifications</h2><ul>${parts}</ul><p class="model">Paint · ${escape(b.colour.toUpperCase())} · ${escape(finishes[b.design.finish]||b.design.finish)}<br>Grille · ${escape(grilles[b.design.grille]||b.design.grille)}<br>Cabin · ${escape(b.design.cabin)} ${escape(b.design.seatFabric)}<br>Wheels · ${escape(b.design.wheelFinish)} finish</p></div>
<div><h2>On a 3-door Jimny</h2><img class="car small" src="${preview(b,true)}" width="800" height="600" loading="lazy" alt="${escape(b.name)} styling on the three-door Jimny"><p>Preview the styling on a Sierra (JB74). Equipment varies by body. Check accessory fitment with the supplier.</p><a href="${garage}&amp;body=3door#garage">Try the 3-door version ↗</a></div></section>`);
  }
  for(const style of [null,...tags]){
    const listed=builds.filter(b=>!style||styles[b.id].includes(style));
    const title=style?style+' Jimny builds':'Jimny build gallery';
    const filters=[['All styles','/builds/'],...tags.map(tag=>[tag,stylePath(tag)])].map(([name,path])=>
      `<a class="chip" href="${path}"${name===(style||'All styles')?' aria-current="page"':''}>${escape(name)}</a>`).join('');
    const cards=listed.map((b,i)=>`<article><a href="${pathFor(b)}"><img class="car" src="${preview(b)}" width="800" height="600" ${i?'loading="lazy"':''} alt="${escape(b.name)} five-door Jimny"><h2>${escape(b.name)}</h2></a><p>${escape(b.tag)}.</p><div class="tags">${styles[b.id].map(linkTag).join('')}</div></article>`).join('');
    await page(style?stylePath(style):'/builds/',title,'Explore premade Suzuki Jimny builds by style and open each setup in the 3D Garage.',preview(listed[0]),`<p class="eyebrow">Ready-made looks</p><h1>${escape(title)}</h1><p class="lead">Find a look you like, see what went into it, then make it yours in 3D.</p><nav aria-label="Filter builds by style" class="filters">${filters}</nav><p class="model">${listed.length} ${listed.length===1?'build':'builds'}</p><section class="grid" aria-label="Builds">${cards}</section>`);
  }
  await writeFile(join(destination,'builds/sitemap.xml'),'<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+urls.map(url=>'<url><loc>'+escape(url)+'</loc></url>').join('')+'</urlset>');
}
