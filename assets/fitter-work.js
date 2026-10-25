/* Which jobs a workshop lists, which jobs a part needs, and the quote request.
   Pure and deterministic: no requests, no ratings. Work tags are read from each
   listing's own description; nothing is added that the description does not say.
   Loaded before the Parts and Fitters screens. */
(() => {
  const JOBS = [
    {id:'snorkels',noun:'snorkel',label:'Snorkels',re:/snorkel/},
    {id:'racks',noun:'rack',label:'Racks',re:/\brack|carrier/},
    {id:'suspension',noun:'suspension',label:'Suspension',re:/suspension|\blift\b/},
    {id:'protection',noun:'protection',label:'Protection',re:/protection|rock slider|underbody|skid plate/},
    {id:'recovery',noun:'recovery',label:'Recovery',re:/recovery/},
    {id:'bumpers',noun:'bumper',label:'Bumpers',re:/bumper/},
    {id:'lighting',noun:'lighting',label:'Lighting',re:/\blights?\b|lighting|\blamps?\b/},
    {id:'wheels',noun:'wheel',label:'Wheels',re:/\bwheels?\b|\btyres?\b|\btires?\b/},
    {id:'interior',noun:'interior',label:'Interior',re:/interiors?\b|\bseat/},
    {id:'grilles',noun:'grille',label:'Grilles',re:/grille/},
    {id:'wraps',noun:'wrap',label:'Wraps',re:/\bwraps?\b|\bppf\b/},
    {id:'audio',noun:'audio',label:'Audio',re:/\baudio\b/}
  ];
  const JOB_BY_ID = Object.fromEntries(JOBS.map(j => [j.id, j]));
  // Parts catalogue category → the job a fitter would do for it.
  const CATEGORY_JOB = {Intake:'snorkels','Roof & carrying':'racks',Suspension:'suspension',Protection:'protection',Recovery:'recovery',Lighting:'lighting',Wheels:'wheels',Interior:'interior',Grilles:'grilles'};
  // Garage design groups that are workshop jobs.
  const DESIGN_JOB = {wheel:'wheels',grille:'grilles',decal:'wraps',finish:'wraps'};
  // Owner-decided exceptions go here: {'Workshop name': ['job-id', …]}.
  const OVERRIDES = {};
  // A sentence that says "not …" never adds a tag ("not suspension expertise").
  const NEGATED = /\b(not|isn't|aren't|never|no longer)\b/i;

  function deriveWork(shop) {
    const review = [];
    const sentences = String(shop.desc || '').split(/(?<=[.!?])\s+/);
    const found = new Set();
    for (const sentence of sentences) {
      const text = sentence.toLowerCase();
      const hits = JOBS.filter(j => j.re.test(text)).map(j => j.id);
      if (NEGATED.test(sentence)) { if (hits.length) review.push('negated-mention'); continue; }
      hits.forEach(id => found.add(id));
    }
    const override = OVERRIDES[shop.name];
    const jobs = (override || JOBS.map(j => j.id).filter(id => found.has(id)));
    if (!jobs.length) review.push('no-work-named');
    if (/market/i.test(shop.tag || '') && jobs.length) review.push('market-wide');
    if (jobs.some(id => id === 'wraps' || id === 'audio')) review.push('non-part-work');
    return {jobs, review};
  }

  function jobsForPart(part) {
    const jobs = new Set();
    if (CATEGORY_JOB[part.category]) jobs.add(CATEGORY_JOB[part.category]);
    const name = String(part.name || '').toLowerCase();
    for (const j of JOBS) if (j.id !== 'wraps' && j.id !== 'audio' && j.re.test(name)) jobs.add(j.id);
    return JOBS.map(j => j.id).filter(id => jobs.has(id));
  }

  // Curated entries have no category field; give them one from their name so the
  // Parts pills cover every entry.
  const NAME_CATEGORY = [
    [/snorkel/,'Intake'],[/suspension|\blift\b|shock|spring/,'Suspension'],[/\bwheels?\b|\btyres?\b|\btires?\b/,'Wheels'],
    [/\brack|carrier|roof|ladder|basket/,'Roof & carrying'],[/winch|recovery|shackle|tow|traction/,'Recovery'],
    [/light|lamp|\bled\b|pods/,'Lighting'],[/grille/,'Grilles'],
    [/bumper|skid|slider|guard|protection|cladding|mud ?flap|bash/,'Protection'],
    [/tent|awning|drawer|storage|fridge|shelf|camp|molle|cargo/,'Camping & storage']
  ];
  function partCategory(part) {
    if (part.category) return part.category;
    if (part.interior) return 'Interior';
    const name = String(part.name || '').toLowerCase();
    return NAME_CATEGORY.find(([re]) => re.test(name))?.[1] || 'Exterior';
  }

  // City pills. India is grouped by the city or state a listing names; BigDaddy
  // lists two cities and counts in both. Other countries use the listing's region.
  const AREA_RULES = [
    [/delhi|ncr|gurugram|gurgaon|noida|ghaziabad|faridabad/i,'Delhi NCR'],
    [/bengaluru|bangalore/i,'Bengaluru'],
    [/himachal|shimla|solan|mandi|kangra|kullu/i,'Himachal'],
    [/mumbai/i,'Mumbai'],
    [/hyderabad|secunderabad/i,'Hyderabad'],
    [/chennai/i,'Chennai'],
    [/kolkata/i,'Kolkata'],
    [/punjab|jalandhar/i,'Punjab']
  ];
  function areasFor(shop) {
    if ((shop.country || 'IN') !== 'IN') return [shop.region || String(shop.city || '').split(',')[0].trim() || 'Elsewhere'];
    const text = `${shop.city || ''} ${shop.region || ''}`;
    const hits = AREA_RULES.filter(([re]) => re.test(text)).map(([, label]) => label);
    return hits.length ? hits : [shop.region || String(shop.city || '').split(',')[0].trim() || 'Elsewhere'];
  }

  function monogram(name) {
    const words = String(name).split(/[^A-Za-z0-9]+/).filter(Boolean);
    return ((words[0] || '?')[0] + (words[1] ? words[1][0] : (words[0] || '')[1] || '')).toUpperCase();
  }
  const shopId = shop => String(shop.name).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  const joinList = items => items.length < 2 ? items.join('') : items.slice(0, -1).join(', ') + ' and ' + items[items.length - 1];
  function buildQuoteRequest({body = '5-door', parts = []}) {
    const names = [...new Set(parts.filter(Boolean))];
    if (!names.length) return `Hi, I'm planning modifications for my ${body} Jimny and would like an itemised parts-and-labour quote. Do you have Jimny experience with this kind of work?`;
    const shown = names.slice(0, 8), extra = names.length - shown.length;
    return `Hi, I'd like an itemised parts-and-labour quote for my ${body} Jimny: ${joinList(shown)}${extra ? ` and ${extra} more` : ''}. Do you have Jimny experience with these?`;
  }

  window.JIMNY_FITTER_WORK = {JOBS, JOB_BY_ID, CATEGORY_JOB, DESIGN_JOB, deriveWork, jobsForPart, partCategory, areasFor, monogram, shopId, buildQuoteRequest};
})();
