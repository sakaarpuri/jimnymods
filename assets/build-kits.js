/* Local-only named build / parts-kit persistence. No network or account. */
(function(root){
 const KEY='thatsuvmod-kits-v1',LIMIT=40;
 const name=value=>String(value||'').replace(/[<>\u0000-\u001f]/g,'').trim().slice(0,48);
 function createStore(getStorage,sanitize){
  const clean=entry=>{
   if(!entry||typeof entry!=='object'||!['build','kit'].includes(entry.kind)||!name(entry.name))return null;
   return {id:String(entry.id||'').slice(0,100),name:name(entry.name),kind:entry.kind,updated:Number.isFinite(entry.updated)?entry.updated:0,data:sanitize(entry.data)};
  };
  function read(){try{const raw=getStorage().getItem(KEY);if(!raw)return {ok:true,entries:[]};const parsed=JSON.parse(raw);if(!Array.isArray(parsed))throw new Error();return {ok:true,entries:parsed.slice(0,LIMIT).map(clean).filter(e=>e?.id)};}catch{return {ok:false,entries:[],error:'Saved builds cannot be read in this browser. Your current build is unchanged. Try exporting a parts list.'};}}
  function write(entries){try{getStorage().setItem(KEY,JSON.stringify(entries));return {ok:true,entries};}catch{return {ok:false,error:'Not saved: browser storage is unavailable or full. Download a parts list to keep a copy.'};}}
  function save({id,kind,name:label,data,append=false}){
   if(!name(label))return {ok:false,error:'Give this build or kit a name.'};
   const result=read();if(!result.ok)return result;
   const existing=result.entries.find(e=>e.id===id);
   if(append&&(!existing||existing.kind!=='kit'))return {ok:false,error:'Choose an existing parts kit first.'};
   if(append&&existing.data.body!==data.body)return {ok:false,error:'This kit is for a different Jimny body. Create a separate kit to avoid mixing fitment.'};
   if(kind==='kit'&&!data?.parts?.length)return {ok:false,error:'Select at least one part for this kit.'};
   if(!existing&&result.entries.length>=LIMIT)return {ok:false,error:'You have 40 saved entries. Remove one or export it before saving another.'};
   const merged=append?{...existing.data,parts:[...new Set([...existing.data.parts,...data.parts])],design:{...existing.data.design,partFinishes:{...existing.data.design?.partFinishes,...data.design?.partFinishes},partColours:{...existing.data.design?.partColours,...data.design?.partColours}}}:data;
   const entry=clean({id:existing?.id||`kit-${Date.now()}-${Math.random().toString(36).slice(2,9)}`,kind:existing?.kind||kind,name:existing?.name||label,updated:Date.now(),data:merged});
   if(!entry)return {ok:false,error:'This build could not be saved. Check its name and selections.'};
   const written=write([entry,...result.entries.filter(e=>e.id!==entry.id)]);return {...written,entry:written.ok?entry:undefined};
  }
  function remove(id){const result=read();return result.ok?write(result.entries.filter(e=>e.id!==id)):result;}
  return {read,save,remove};
 }
 root.JIMNY_BUILD_KITS={createStore,key:KEY,limit:LIMIT};
})(globalThis);
