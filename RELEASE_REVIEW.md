# that SUV Mod product review and release evidence

Reviewed 20 October 2026. Scope: repository and local browser, mobile and desktop. The release replaces the photo-frame preview with a live 3D scene and improves the complete discovery-to-sourcing journey.

## A. Executive summary

The previous site was a prototype presented as a finished planner. Its mobile navigation did not hide inactive modes, all sourcing routes reused a generic directory, the “360°” preview could not represent individual modifications, and the budget planner could exceed its selected ceiling. The new version is a usable modification planning tool with a coherent visual system and tested user journeys. It is conditionally ready as a concept planner, not as an exact fitment configurator or a live quotation service.

## B. Scoring framework

Scores assess this release against the stated concept-planning purpose. They are judgments supported by the checks below, not a certification.

| Area | Before | Release | Evidence / limit |
| --- | --- | --- | --- |
| Visual design | 4 | 8 | Readable light palette, local fonts, large unobscured look images |
| UX clarity | 4 | 8 | One active mode on all devices; explicit internal sourcing step |
| Information architecture | 4 | 8 | Forty unified entries, relevant sources, build sidebar |
| Functional reliability | 5 | 8 | Browser-tested model changes, persistence, export and filters |
| Accessibility | 5 | 7 | Focus styles, skip link, labelled controls, inert closed drawer, keyboard 3D controls; no full assistive-technology audit |
| Performance | 5 | 7 | No frame-sequence downloads or render loop while offscreen; bundled engine and local fonts; no field Core Web Vitals data |
| SEO | 5 | 6 | Stable title, canonical and useful static copy; catalogue still rendered by JavaScript |
| Security | 6 | 7 | Static client-only app, sanitised shared build state, pinned dependencies; no penetration test |
| Mobile responsiveness | 3 | 8 | Single mode, sticky compact parts preview, tested overflow |
| Content quality | 5 | 7 | Clear concept labels and sourcing context; source data remains dated |
| Conversion readiness | 4 | 7 | Build → relevant buying options → fitter checklist; no checkout is implied |
| Trust | 4 | 6 | Exact model/price boundaries exposed; image rights and source rechecks remain operational work |
| Maintainability | 4 | 7 | Isolated viewer, deterministic release build, pinned dependencies; planner remains one large script |
| Production readiness | 4 | 7 | Ready for concept planning with stated limits |

## C. Deep audit

### UI / visual design

Observed, high confidence: the old interface used many small labels with dark nested cards. It now has a warm neutral background, forest-green text/actions, terracotta identity, a clear heading scale and consistent content spacing. Cards represent actual selectable looks, products and businesses. Supporting labels retain a deliberate hierarchy.

### UX / journey / information architecture

Observed, high confidence: mobile previously displayed all modes concurrently because visibility rules only existed in a desktop media query. It now displays only the selected mode. Preset selection hides the custom studio. Parts and sources have separate focused views, and browser history tracks the workspace.

### Functional QA

Observed, high confidence: actual canvas output changes when geometry is selected and removed. Save/load and reload restore parts and paint. Specific seller results do not include unrelated selected looks. Empty catalogue and directory states provide reset controls. Budget recommendations stay below the chosen ceiling.

### Accessibility

Observed improvements: semantic navigation and heading structure, explicit focus rings, an inert closed build drawer, focus restoration after dismissal, modal focus trapping, reduced-motion CSS and arrow-key orbit/zoom. Remaining validation: full screen-reader and switch-control coverage, particularly WebGL canvas interpretation. Product photos and build lists remain the accessible counterpart to the model.

### Performance

Observed improvements: the previous image sequence is no longer preloaded; the viewer uses an invalidation-based render loop and stops rendering offscreen or in background tabs. Device pixel ratio is capped. Snapshot export temporarily renders at 1600×1200, then restores the viewport. Dependencies and fonts are self-hosted. Further work should use production field metrics rather than claim a Lighthouse score from this review.

### SEO

Observed: title, description, social tags, canonical and favicon are present. Risk: catalogue discovery depends on JavaScript and individual products do not yet have dedicated indexable pages. The custom domain must serve this deployment before it is treated as a completed domain migration.

### Security

Observed: no login, payment handling or backend is introduced. Shared state is restricted to known part/design IDs and valid tyre choices. Existing frame, MIME and permission headers remain. Dependency installation reported no known vulnerabilities. Further validation: CSP, rate-limited backend/upload policy if user submissions are introduced, and dependency monitoring over time. This review is not a security certification.

### Content / messaging / credibility

The new interface describes the model as approximate and the images as concepts. Unsupported popularity copy was reduced. Workshop “Verified” labels were softened because an official website is not an independent service-quality audit. Existing source references and prices remain explicitly dated July 2026 and need refresh before a claim of current availability.

### Conversion / effectiveness

The owner can try a visible upgrade, build a shortlist, compare its relevant resources, find local fitting help and export a plan. No fake checkout, ratings, community profiles or unimplemented upload controls have been added. The site is positioned as a planning and discovery tool.

### Frontend engineering / codebase findings

The viewer is isolated in `src/viewer3d.js`; it consumes immutable planner events and maintains its own scene. Three.js and esbuild versions are locked. Static deployment copies only public assets into `dist/`, avoiding accidental deployment of source metadata or `node_modules`. Remaining debt: the planner and data share a long script, and the legacy CSS base is overridden by the new design layer. Follow-up extraction should preserve the verified behaviour.

### Analytics / observability

No advertising, behavioural analytics or error-reporting service is added without an account/configuration choice. Runtime tests inspect console and page errors. Production funnel and performance telemetry remain future instrumentation, not claims in the UI.

### Compliance / legal

The requested Suzuki/Maruti independence disclaimer is retained. Original procedural 3D geometry avoids a third-party vehicle-model download. Font and Three.js licences are included. The repository does not document permission for existing seller photographs; establish a rights register, supplier approvals and takedown contact before scaling commercial use. Legal road-use text should be periodically checked by an appropriate professional.

## D. Page / workspace review

| Workspace | Purpose | Release behaviour | Remaining boundary |
| --- | --- | --- | --- |
| Looks | Choose an exterior direction | Four visual concepts, real selection state, clear ingredients and internal sources | Concept photos are not exact SKU renders |
| Live studio | Try modifications | Original 3D meshes, orbit/zoom, paint, finishes, decals, grille, interior cutaway, stock and night views | Approximate proportions and schematic parts |
| Purpose builds | Plan by use and budget | Conservative price ceiling, staged recommendations, editable packages | Not professional engineering advice |
| Parts | Discover individual upgrades | Eight popular, All 40, category/search/saved/compare, toggles linked to scene | Reference prices require confirmation |
| Buying options | Find resources | Relevant stores/product URLs for the current item or package | Availability is not checked live |
| Fitters | Find local help | Search region/name, type filter, count, directions and website | Listings are not service endorsements |
| Tools | Understand constraints | Tyre calculator, dependency warnings and guides | Not a fitment guarantee |
| Build drawer | Save, edit and share | Remove individual entries, undo, local versions, export live 3D image, print | Storage is browser/device specific |

## E. Key-flow verification

1. Start empty → add roof rack → canvas changes → remove rack → geometry disappears. Verified using both scene state and changed rendered image output.
2. Select Retro → paint/stripes/script grille update → custom studio remains hidden → buying options contain exact grille resource. Verified.
3. Open All → forty entries including ten interior entries → search bonnet → one result → impossible search → useful empty state → reset. Verified.
4. Select SUZUKI grille → internal source view → only its referenced seller appears, with exact listing URL. No external navigation occurs on the source action. Verified.
5. Choose Delhi NCR → nine entries. Unknown location → empty state → reset directory. Verified.
6. Choose Trail at ₹25k / ₹50k / ₹1L → upper estimates ₹15k / ₹50k / ₹95k. Verified below each ceiling.
7. Edit build name → save version → remove part → load version → part restored in model → change paint → reload → paint and parts restored. Verified.
8. Change camera, cabin cutaway, stock comparison, night lighting and export. Verified; export is a non-empty JPEG of the live model with a build sheet.

## F. Issue log

| ID | Issue | Severity / confidence | Outcome | User / business impact | Effort |
| --- | --- | --- | --- | --- | --- |
| 01 | Photo sequence represented as live modification preview | High / high | Replaced with actual procedural WebGL scene | Core product now supports trying combinations | High |
| 02 | Every mode visible on phones | High / high | Fixed universal workspace visibility | Removes very long confusing page | Medium |
| 03 | Generic buying options for specific parts | High / high | Grouped real references by chosen part/look/package | More useful sourcing handoff | Medium |
| 04 | Small, dense dark UI | High / high | New design system and layout | Better reading and exploration | High |
| 05 | No per-item removal in build summary | Medium / high | Editable rail and drawer | Easier revision of shortlist | Medium |
| 06 | Budget ceiling bypassed for first two parts | High / high | Enforced conservative upper estimate | More honest financial expectations | Low |
| 07 | Closed drawer contained focusable controls | Medium / high | Inert while closed, focus restored | Better keyboard usability | Low |
| 08 | Image export ignored actual preview | High / high | Exports live 3D canvas at high resolution | Useful sharing artifact | Medium |
| 09 | Alternative products could stack as duplicate installed parts | Medium / high | Exclusive rack/snorkel/bumper/grille choices | More coherent model and total | Medium |
| 10 | Exact fitment / photo-rights / data freshness not established | Medium / high | Clear concept boundary and dated references; operational work documented | Avoids overpromising precision/current inventory | Ongoing |

## G. Prioritised action plan

Immediate: ship verified concept planner and retain accurate product boundaries. Next: clear seller image rights, refresh dated listings, and connect the intended domain. Medium term: commissioned or explicitly licensed production-quality Jimny CAD plus brand-specific accessory geometry; dedicated product pages; fitment metadata by model-year. Longer term: owner submissions with moderation/rights records, supplier feeds and privacy-conscious reliability instrumentation.

## H. Verdict and closing addendum

Go for the stated concept-planning experience. No-go for claims of exact product geometry, guaranteed fitment, independently verified fitters or live stock/pricing.

Top ten remaining risks: approximate model proportions; generic accessory geometry; schematic interior; seller photo permissions; old price references; stale vendor availability; no service-quality verification; client-rendered catalogue SEO; browser-local persistence; no field performance/error metrics.

Top ten improvements delivered: original live 3D; per-part mesh updates; paint/material/decal/grille changes; stock and camera controls; readable visual system; mobile single-mode navigation; sticky mobile preview; relevant internal sourcing; individually editable saved builds; high-resolution export.

The release now signals a coherent product with useful working interactions rather than a long catalogue demo. The strongest next investment is asset and data quality: accurate licensed vehicle/accessory models, permissioned real builds and refreshed sourcing evidence. Those are content and partnership requirements, not something visual polish alone can establish.

## October 20, 2026: detailed 3D studio follow-up

Rebuilt the original model's body shell, glazing, wheel wells, wheels, lamps, grille emblem and accessory mountings. Paint finishes use clear-coat/roughness differences; textured lower panels preserve glossy upper paint. This remains approximate original geometry, not manufacturer CAD or exact seller meshes.

Mobile has scroll-first compact previews, expanded touch rotation/pinch zoom, portrait-safe framing, 44px camera/paint/mode controls and keyboard-safe expanded view. Fixed broken inch-size labels, saved-city fitter restoration and grille/export summary mismatch. Verified all 40 part connections, 30 mode/width combinations without overflow, touch scroll and rotation, sourcing, nine Delhi NCR results, budget stage/undo, save/load, share and image download. Final browser run had no warnings/errors. Full local evidence: `.gstack/qa-reports/qa-report-jimny-mobile-2026-10-20.md`.

No new third-party vehicle assets were imported. Physical-device Safari/Android performance and seller image permissions remain unverified. Prior pricing/source caveats above still apply.

## October 20, 2026: original Blender asset

Replaced the main procedural shell with an original Blender-authored mesh, using only free tools and reusable references. The native `modeling/jimny-lwb.blend` and reproducible `modeling/build_jimny.py` are included. A 2,387,508-byte meshopt-compressed GLB supplies separate shell, roof, cabin, stock/AT wheels, stock bumper, spare and eight selectable grille assemblies. Reference photographs are not embedded as textures. Model download URLs are content-fingerprinted.

The CC0 Poly Haven studio HDR is served locally for reflections. Font and decoder licences are included. `modeling/ASSET_SOURCES.md` records sources, licences, download limitations and free-model search findings. No paid vehicle asset, subscription or generation API was used.

Verified: the native project reopens in Blender; five asset regression tests pass; all 40 catalogue items retain their scene connection; all eight grille choices show exactly one corresponding assembly; six finishes produce distinct rendered images; stock/AT wheels and bumper switches work; touch orbit/pinch and scroll-first phone previews work; 25 mode/width combinations show no horizontal overflow; internal sourcing, nine Delhi NCR listings, saved-version restoration and complete-vehicle image export work. An intentionally blocked model download correctly shows a labelled simplified fallback while build controls remain usable. Normal browser runs have no warnings/errors.

This is an original approximation of the five-door Jimny, not manufacturer CAD or exact seller-specific accessory geometry. Real iOS/Android hardware performance and external seller data/rights remain outside this verification. Local evidence and test notes: `.gstack/qa-reports/blender-jimny-2026-10-20.md`.
