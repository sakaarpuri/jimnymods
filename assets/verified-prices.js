/* Supplier snapshots, not live quotes. Only exact five-door India SKUs are
   eligible; automatically expire rather than silently show stale prices. */
(() => {
 const records=Object.freeze({
  mudflaps:{amount:828.50,currency:'INR',sku:'72201M80T00',seller:'Maruti Suzuki Genuine Accessories',url:'https://www.marutisuzuki.com/genuine-accessories/mud-flap-jimny/72201m80t00',checked:'2026-10-30',body:'5door',region:'IN'},
  visors:{amount:1834.50,currency:'INR',sku:'990J0M80TQ0-010',seller:'Maruti Suzuki Genuine Accessories',url:'https://www.marutisuzuki.com/genuine-accessories/door-visor-jimny/990j0m80tq0-010',checked:'2026-10-30',body:'5door',region:'IN'},
  maruti_at_mats:{amount:3390,currency:'INR',sku:'75901M80TK0',seller:'Maruti Suzuki Genuine Accessories',url:'https://www.marutisuzuki.com/genuine-accessories/all-weather-mat-at-tread-metal-jimny/75901m80tk0',checked:'2026-10-30',body:'5door',region:'IN'}
 });
 const maxAgeDays=30,day=86400000;
 function get(id,region,body,now=Date.now()){
  const p=records[id];if(!p||p.region!==region||p.body!==body)return null;
  const age=now-Date.parse(p.checked+'T00:00:00Z');
  return Number.isFinite(age)&&age>=0&&age<(maxAgeDays+1)*day?p:null;
 }
 function money(value){return new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',minimumFractionDigits:2,maximumFractionDigits:2}).format(value);}
 function summarize(items,region,body,extraUnpriced=0,now=Date.now()){
  const priced=[],unpriced=[];
  for(const item of items){const p=get(item.id,region,body,now);(p?priced:unpriced).push(p?{id:item.id,...p}:item);}
  return {priced,unpriced:unpriced.length+extraUnpriced,total:priced.reduce((sum,p)=>sum+p.amount,0)};
 }
 globalThis.JimnyVerifiedPrices=Object.freeze({records,maxAgeDays,get,money,summarize});
})();
