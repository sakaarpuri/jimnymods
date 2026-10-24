import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFileSync} from 'node:fs';
const context={window:{JIMNY_REGIONS:[{code:'IN',name:'India'}]},URL};
vm.runInNewContext(readFileSync(new URL('../assets/directory.js',import.meta.url),'utf8'),context);
const directory=context.window.JIMNY_DIRECTORY;
test('directory search matches every token across names, locations and services without order or accent sensitivity',()=>{
 assert(directory.matches('São Paulo — roof racks and fitment','roof sao'));
 assert(directory.matches('Shimla suspension workshop','workshop shimla'));
 assert(!directory.matches('Shimla suspension workshop','shimla wiring'));
 assert(directory.matches('Anything','   '));
});
test('duplicate regional supplier records are removed but separate country branches remain',()=>{
 const stores=[{country:'IN',web:'https://www.maker.test/shop'},{country:'IN',web:'https://maker.test/collection'},{country:'AU',web:'https://maker.test/au'}];
 assert.equal(directory.uniqueStores(stores).length,2);
 assert.equal(directory.countryName('IN'),'India');
 assert.equal(directory.countryName('ZZ'),'Location unconfirmed');
});
test('clubs have a separate navigable mode, labelled country/search filters and an explicit listing invitation',()=>{
 const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');
 assert.match(html,/clubs:"clubs-title"/);assert.match(html,/data-mode-select="clubs"/);
 assert.match(html,/id="regionalClubs" data-mode="clubs"/);
 for(const id of ['clubSearch','clubCountry','sourceCountry','shopCountry'])assert(html.includes(`id="${id}"`));
 assert(!html.includes('data-local-tab="clubs"'));
 assert.match(html,/data-listing-invite="club"/);assert.match(html,/data-listing-invite="vendor"/);assert.match(html,/data-listing-invite="fitter"/);
});
test('listing requests have a static detectable form, consent, private contact disclosure and fail-closed local behavior',()=>{
 const html=readFileSync(new URL('../index.html',import.meta.url),'utf8'),js=readFileSync(new URL('../assets/directory-ui.js',import.meta.url),'utf8');
 assert.match(html,/name="directory-listing"[^>]*data-netlify="true"[^>]*netlify-honeypot="company-fax"/);
 for(const field of ['form-name','company-fax','kind','country','name','area','website','email','details','permission'])assert(html.includes(`name="${field}"`));
 assert.match(js,/!form.hasAttribute\('data-netlify'\)/);assert.match(js,/if\(!live\)\{download\(\);return;\}/);
 assert.match(js,/It has not been sent or published/);assert.match(js,/if\(!response.ok\)throw/);
 assert.match(js,/finally\{busy=false;submit.disabled=false;/);
});
