# Market catalogue and light-preview provenance

Expanded 2026-10-21. Product titles/URLs are sourced from public seller listings; current stock and shipping are not guaranteed. No seller photos or descriptive marketing copy were imported in this pass. Existing manually curated lamp records keep their 2026-10-20 check date; a feed refresh does not silently re-verify unrelated pages.

## Expansion checkpoint

- Imported market products: **70 → 305** (235 additions, 4.36× baseline). All original 70 IDs remain; all 305 product URLs are distinct. Core hand-authored MODS entries are separate and unchanged by this data pass.
- Categories: 29 wheels/tyres, 35 suspension, 44 protection, 46 lighting, 41 roof/carrying, 43 interior, 30 camping/storage, 12 intake, 9 recovery, 6 grilles, 8 exterior and 2 drivetrain listings.
- Product sources: Australia, India, South Africa, Japan, Indonesia, UK and USA. Country means supplier market, not shipping eligibility or local approval. Existing India catalogue remains seven PRAD records plus the separate core catalogue; this expansion primarily broadens international choice.
- Region selector: **8 → 10**, adding Indonesia and Brazil. Regional stores **10 → 20**; service/fitting/directory resources **12 → 15**; club/community resources **7 → 9**.
- The 235 additions are **research-only**, with no invented exact geometry. Existing representative/reference-guided mappings remain explicitly labelled. Increasing catalogue size is not a claim that 235 new product models have been built.
- Public feeds reported 273 items available at import; 8 existing listings unavailable; 24 manually inspected/unresolved stock states. `stockAtCheck` is a dated observation, not live inventory. Do not promise delivery, legality or fitment from this field.

### Verification and selection method

`scripts/refresh-market-catalog.mjs` fetches the seller-owned public feeds, requires valid responses, retains original selection IDs and refuses an unexpectedly small result. Editorial category rules include genuine equipment variants with distinct seller product IDs/URLs; they exclude merchandise, complete cars, old-generation-only products and catalyst-delete listings. New feed records must be reported available at the time of import. Category caps avoid filling the catalogue with one family of near-identical products.

`bodyStyles` contains only title/page-supported `3door` / `5door` values. An empty array explicitly means unresolved body style, not universal compatibility. JB74 and JC74 references do not establish India-market compatibility. `previewKind` is `research-only`, `representative` or `reference-guided`; no record claims manufacturer CAD. Core preview geometry and core fitment restrictions remain separate.

The manually inspected Japanese, Indonesian and UK pages below keep their explicit 2026-10-21 date. Their stock is `unknown`. APIO requires choosing chassis-specific variants on the manufacturer page; the Indonesian catalogue does not resolve body style, so none was invented. Brazil is represented by verified local supplier/service resources, not unverified Sierra part-fitment claims.

## Product sources

- OZ Jimny public Shopify catalogue: `https://ozjimny.com/collections/all/products.json?limit=250&page=1` (also pages 2 and 3). Legacy editorial selections plus expanded current-generation equipment categories; three-door and five-door scopes are recorded separately from seller titles. This remains a seller claim. Individual product URLs are retained in every record.
- JimSA public product feed: https://www.jimsa.co.za/products.json?limit=250 and [seller homepage](https://www.jimsa.co.za/). 64 current-generation records added; an unspecified body is not assumed to fit both.
- PRAD: https://shop.prad4x4.com/collections/maruti-suzuki-jimny and its public product feed. Existing roof-rack entry excluded from the new import to avoid duplication.
- STEDI round spot: https://www.roofracksgalore.com.au/stedi-type-x-evo-7inch-spot-st-01-evo-701
- STEDI round flood: https://www.roofracksgalore.com.au/stedi-type-x-evo-7inch-flood-st-01-evo-702
- STEDI manufacturer context: https://www.stediusa.com/blog/post/type-x-evo-7-led-driving-lights
- Diode Dynamics yellow fog: https://www.diodedynamics.com/ss3-sae-yellow-sport-led-pod-pair.html
- Diode Dynamics dual-colour fog: https://www.diodedynamics.com/ss3-dual-color-led-pod-pair.html
- Diode Dynamics rear-work example: https://www.diodedynamics.com/ssc1-white-sport-led-pod-pair.html (select Flood variant).
- Lazer compact driving lamp: https://www.lazerlamps.com/en/triple-r-750.html
- Baja Designs pod: https://www.bajadesigns.com/products/squadron-sport-black-led-auxiliary-light-pod-universal/?sku=550003

### Individually inspected regional product pages

- APIO [instrument panel](https://apio.jp/parts/4031-2.html), [wide mirror](https://apio.jp/parts/7109-64.html), [ZERORISE suspension](https://apio.jp/parts/1028-6a.html), [JB74 classic carrier](https://apio.jp/parts/3630-03w.html), [Sierra/Nomade front extension](https://apio.jp/parts/3032-82.html).
- Suzuki Indonesia [roof basket](https://www.suzuki.co.id/aksesori/jimny/200/roof-basket-), [front grille](https://www.suzuki.co.id/aksesori/jimny/199/front-grille-jimny), [surfboard carrier](https://www.suzuki.co.id/aksesori/jimny/183/surfboard-carrier), [bicycle carrier](https://www.suzuki.co.id/aksesori/jimny/182/bicycle-carrier), [roof rack](https://www.suzuki.co.id/aksesori/jimny/180/multi-roof-rack), [luggage mat](https://www.suzuki.co.id/aksesori/jimny/179/luggage-mat), [rear gate net](https://www.suzuki.co.id/aksesori/jimny/178/rear-gate-net). Manufacturer part numbers retained in product names.
- Jimnybits [passenger storage tray](https://www.jimnybits.com/jimny-passenger-side-storage-with-drink-holder-gen-4.html), [transfer brackets](https://www.jimnybits.com/jimny-heavy-duty-transfer-box-brackets-18-on.html), [fuel tank guard](https://www.jimnybits.com/suzuki-jimny-heavy-duty-fuel-tank-guard-2018-on.html).
- Manufacturer tyre ranges: [BFGoodrich All-Terrain T/A KO3](https://www.bfgoodrich.com.au/auto/tyres/bfgoodrich-all-terrain-t-a-ko3) and [Toyo Open Country A/T III](https://www.toyotires.com.au/tyres/toyo-open-country-at-iii). No exact size, vehicle compatibility or availability is asserted; owners must select the proper size/rating with a fitter. These are two real ranges, not multiple synthetic size variants counted as extra products.

### New supplier, support and community resources

- India: [PRAD Jimny range](https://shop.prad4x4.com/collections/maruti-suzuki-jimny), [Maruti genuine accessories](https://www.marutisuzuki.com/genuine-accessories/jimny-accessories).
- Australia: [STEDI manufacturer](https://www.stedi.com.au/). Universal lamps are not treated as plug-and-play kits.
- South Africa: [JimSA](https://www.jimsa.co.za/); existing [JimnyworX](https://www.jimnyworxsa.co.za/) fitment service also rechecked.
- Japan: [DAMD current Suzuki range](https://www.damd.co.jp/products/suzuki/) and [ordering/painting/installation guidance](https://www.damd.co.jp/howto/). The latter is guidance/referral, not a fabricated street-address fitter.
- New Zealand: [Skinny Jim](https://www.skinny-jim.com/shop), with local manufacturing context on its [about page](https://www.skinny-jim.com/about-us).
- UK: [ARB fitting service](https://www.arb4x4.co.uk/services/fitting).
- Indonesia: [official accessories](https://www.suzuki.co.id/aksesori/jimny), [dealer locator](https://www.suzuki.co.id/dealer), [SKIn club-run site](https://skinindonesia.or.id/), [Suzuki official club directory](https://www.suzuki.co.id/club/car). Dealer resources are labelled service/accessory support, not custom fitters.
- Brazil: [Jimneiros Store](https://www.jimneiros.com.br/), [Buffalo 4x4](https://www.buffalo4x4.com.br/), [Suzuki dealer/service directory](https://www.suzukiveiculos.com.br/concessionarias/). Many local listings fit older Jimny 1.3 models rather than JB74 Sierra; this warning is explicit. No Brazilian club was added without a sufficiently clear primary source.

Limitations: no claim of exhaustive market coverage, SKU-specific fitment testing, live stock, licensed seller imagery or exact 3D replicas. The existing Des Sol homepage timed out during this pass; its earlier record was preserved, not newly certified. NZ/Jimnybits sites do not expose the assumed Shopify feed; no products were invented to fill those gaps.

## Geometry and light behaviour

All additional lamp geometry and glow textures are originally authored in code. None is manufacturer's CAD. Approximate envelope sizes distinguish 7-inch round lamps, compact pods, 20-inch bars and a 230 mm compact driving lamp; component geometry and mounts are representative. Selected single-lamp products may be depicted as pairs; the card warning requires confirming quantity.

Spot/flood/fog/work presets are art-directed Three.js lighting, not imported IES/LDT measurements. They cannot establish lumens, lux, visibility distance, fog performance or legal use. Manufacturer standards in one country do not establish legality in India. Avoid adding quantitative performance claims without exact tested photometric data and a calibrated scene.

Public product access is not a photography licence. Keep photos on the seller's page until reproduction permission or an appropriate licence is obtained. Do not use AI images as purported photographs of exact SKUs.
