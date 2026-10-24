/* Shared, deterministic directory matching. No requests or location tracking. */
window.JIMNY_DIRECTORY = {
  normalise(value) {
    return String(value || '').normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
  },
  matches(text, query) {
    const haystack=this.normalise(text);
    return this.normalise(query).split(/\s+/).filter(Boolean).every(term=>haystack.includes(term));
  },
  countryName(code) {
    return window.JIMNY_REGIONS.find(r=>r.code===code)?.name || 'Location unconfirmed';
  },
  uniqueStores(stores) {
    const seen=new Set();
    return stores.filter(store=>{
      const key=store.country+':'+new URL(store.web).hostname.replace(/^www\./,'');
      if(seen.has(key))return false;
      seen.add(key);return true;
    });
  }
};
