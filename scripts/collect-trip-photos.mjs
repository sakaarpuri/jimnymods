/* Actual destination photography, with redistributable Commons licences.
   This writes downloaded assets/provenance only; no supplier or club records. */
import {mkdir,writeFile} from 'node:fs/promises';
const queries={
 'manali-leh':'intitle:"Baralacha La towards Leh"',
 'srinagar-leh':'intitle:Moonscape intitle:Lamayuru',
 spiti:'intitle:"NH505 Spiti Kaza Losar Jun18 D72 7800"',
 rajasthan:'intitle:"Sam dunes (Jaisalmer)"',
 kutch:'intitle:"Rann of Kutch - White Desert"',
 konkan:'intitle:Ganpatipule intitle:beach',
 tawang:'intitle:"Tawang Monastery view.jpg"',
};
await mkdir('assets/trips',{recursive:true});
const photos={};
for(const [id,q] of Object.entries(queries)){
 const url=new URL('https://commons.wikimedia.org/w/api.php');url.search=new URLSearchParams({action:'query',format:'json',generator:'search',gsrsearch:q+' filetype:bitmap',gsrnamespace:'6',gsrlimit:'6',prop:'imageinfo',iiprop:'url|size|extmetadata',iiurlwidth:'1200'});
 const data=await (await fetch(url)).json();
 const candidates=Object.values(data.query?.pages||{}).sort((a,b)=>a.index-b.index);
 const p=candidates.find(p=>{const i=p.imageinfo?.[0],m=i?.extmetadata;return i?.width>i?.height&&/^(CC BY-SA [234]\.0|CC BY [234]\.0|CC0|Public domain)$/.test(m?.LicenseShortName?.value||'')&&(m?.Artist?.value||'').length<600;});
 if(!p)throw Error('No suitable licensed photo: '+id);
 const i=p.imageinfo[0],m=i.extmetadata,download=new URL(i.thumburl||i.url);download.search='';
 const response=await fetch(download);if(!response.ok)throw Error('Photo download '+response.status+' '+id);
 const local='assets/trips/'+id+'.jpg';await writeFile(local,Buffer.from(await response.arrayBuffer()));
 const plain=s=>s.replace(/<[^>]*>/g,'').replace(/&amp;/g,'&').trim();
 photos[id]={local,alt:plain(m.ObjectName?.value||p.title.replace('File:','')),author:plain(m.Artist.value),licence:m.LicenseShortName.value,licenceUrl:m.LicenseUrl?.value||'https://creativecommons.org/licenses/by-sa/4.0/',page:i.descriptionurl,original:i.url,changes:'Displayed with responsive cropping; no content edits.',checked:'2026-10-23'};
 console.log(id+': '+p.title+' / '+photos[id].author+' / '+photos[id].licence);
}
await writeFile('assets/trips/photos.json',JSON.stringify(photos,null,2)+'\n');
await writeFile('assets/trip-photos.js','/* Licensed destination photo credits; see each Commons source. */\nwindow.JIMNY_TRIP_PHOTOS='+JSON.stringify(photos)+';\n');
