# Brief 2 plan: mobile rework and Direction A redesign

Status: draft for owner go-ahead. No code has changed yet.

**Owner decisions (24 Oct 2026)**
1. Commit the dirty working tree as one baseline commit on `main` before branching.
2. The game is called **Drive**, in the nav and in the game's own title.
3. The welcome uses both variants: the full page on `/`, and the sheet over the Garage for deep links and share links.
4. Push one branch per task and open a PR for each, for the Netlify deploy previews. Nothing is merged without the owner.

## What I found

- **Mockups:** all 10 Direction A frames are in `jimnygami Direction A frames/`. They cover the welcome page and the welcome overlay, the Garage, the "just fitted" toast and My build, on desktop and phone. Every task below follows them.
- **Garage:** `index.html` (2,120 lines) builds the Garage in inline JS: the category strip, quick-fit cards, the surface controls ("All black", "Matte / gloss"), the stage actions and the selection tray. `placeGarageNavigation()` moves the header and category strip between breakpoints. Styling is spread over five layers: inline `<style>`, `design.css` (about 1,000 lines of stacked overrides), `jimnygami-brand.css`, `workbench-flow.css` and `on-car-editor.css`.
- **Hero:** `header .hero-intro` ("Small car. Big possibilities.") is still in the markup, hidden. Its slot and anchor can be reused, but its copy and layout can't. The welcome needs new markup.
- **Region and body type:** these sit in `.market-bar` (`#regionSelect`, `#bodySelect`). JS moves that bar into the header "setup" popover. The values are saved under `thatsuvmod-region` and `thatsuvmod-build` / `thatsuvmod-body-build-*`, which is enough to tell a returning visitor apart.
- **Theme:** `assets/ui-theme.js` already stores `daylight | rally` (default `rally`). The Style picker is only injected on index (`.workbench-nav`) and the game (`.game-header`). The trip planner never loads `ui-theme.js`.
- **Headers:** there are three different headers today. Index is a JS-rearranged `.brandline`. The game has `.game-header` ("BUILD & TRAIL", all caps). The trip planner's `.trip-site-header` has only Garage, Drive and Trip planner.
- **Fonts:** DM Sans and Outfit are both bundled locally (`assets/fonts/`). Outfit isn't wired up yet; headings use Manrope, or Impact in the rally theme.

## Approach

I'll add one **Direction A token and component layer** (`assets/direction-a.css`) and load it last on all three pages. It sets colour tokens (dark ground, lime accent, Daylight values under `[data-ui-theme=daylight]`), Outfit headings, DM Sans body, button tiers (primary lime, secondary outline, tertiary text link), radii and spacing. Old rules are removed only where they fight it. I'm not rewriting `design.css` wholesale: that is the highest-risk way to break features nobody is looking at.

## Tasks (one branch and PR each, in this order)

### 0. Baseline (prerequisite, see question 1)
The working tree on `main` has about 245 uncommitted or untracked files, including scripts the pages load (`assets/directory.js`, `assets/trip-page.css`, models and photos). A branch pushed for a deploy preview would be missing them and break. I'll commit them as one baseline first, after the build and tests pass.

### 4a. Shared header and theme tokens (done first, because 1–3 build on it)
I'm pulling the header and tokens out of Task 4 so the welcome and Garage are built on the final look rather than restyled twice.
- `assets/site-header.js` renders one header into `<header id="siteHeader">` on index, trip-planner and game. It holds the logo, the nav (Garage · Parts · Fitters & sellers · Clubs · Trip planner · Drive · Owner tools), the "India · 5-door" setup chip, the Style picker and **My build (n)**. On phone it collapses to logo + My build + menu (frame 07).
- Off index, My build shows the saved count from `thatsuvmod-build` and links to `index.html#garage?build`. It doesn't open a drawer there.
- `ui-theme.js` is loaded on all three pages, so the Style setting applies everywhere.
- On index, `placeGarageNavigation()` is changed to target the new header instead of `.brandline`.
- Files: new `assets/site-header.js` and `assets/direction-a.css`; edits to `index.html`, `trip-planner.html`, `game.html`, `ui-theme.js`, `scripts/build.mjs` (hashing) and tests.

### 1. First-visit welcome
- **Welcome page** (frames 01/05) for a first-time visitor on `/`. Copy from the brief. It reuses the hidden hero's slot and asks two questions: a 5-door / 3-door radio and a region select. "Open the Garage" is the primary action. Parts, Fitters and Plan a trip are text links. A still render of the car stands in for the live 3D view (see question 3).
- **Welcome sheet** (frames 02/06) for a first-timer who lands on a deep link (`#garage`, a share link). The shared car stays visible behind it. "Start building" and "Just look around" act on the shared build without overwriting it.
- Both write to the existing `#regionSelect` / `#bodySelect`, so there is one source of truth and the header setup chip is no longer a second prompt on first load.
- Returning visitors (saved build or region) skip straight to the Garage. A "What is jimnygami?" link in the menu and footer reopens the welcome.

### 2. Mobile Garage layout (frames 07–10)
- **At rest:** header, the viewer with Exterior/Cabin and the angles button, a chips row, a "Quick fits" heading with a "Ready-made looks" link, and two-column cards. A floating build bar shows "n parts fitted · ₹ est." and "Drive this build".
- **Scrolling:** an `IntersectionObserver` on the viewer docks a thumbnail at the start of the pinned chips row. Only the header and chips stay pinned. Tapping the thumbnail scrolls back up and expands the viewer.
- **Viewer handling:** the same `<canvas>` and renderer stay alive throughout. Collapsing only changes the CSS size of the viewer container and calls the existing resize path, throttled through `ResizeObserver` with rAF, so nothing re-initialises. I'll check frame times in DevTools while scrolling.
- **Just fitted:** a toast with a car preview, Undo and View car (frame 09). The preview is a snapshot from the live renderer (`media-export.js` already captures frames). The build bar updates its count.
- **My build:** a bottom sheet (frame 10) with Share build, Save version and "⋯" (load version, copy list, image, print, kits, clear) as on desktop (frame 04). This is a reskin of the existing drawer. Autosave, snapshots and share links are untouched.
- **Done check:** at 375×812, two full quick-fit cards are visible while scrolling.

### 3. Reduce density (Garage and Parts)
- On desktop, the Garage gets a vertical icon rail of categories between the viewer and a "Quick fits" panel (frame 03). The stage action bar at the bottom holds the build summary, Compare with stock and Drive this build.
- "N ready-made looks", "All black" and "Matte / gloss" appear once. The looks become a link in the panel heading. All black and Matte / gloss move into the Paint category and the on-car editor, under one "More options" disclosure there.
- Per category: the essentials first, then finish, variants, scenery and view tabs behind "More options" or the "Angles & scenery" button on the viewer.
- I'll find the ▶ triangles (native `<details>` markers) and either replace them with a labelled chevron and "Show more" text or remove them.
- The light modals (on-car editor, Try in 3D) become dark. The mockups show no light surfaces except the toast.
- Parts grid: the same card, button and spacing tokens, with fewer borders.
- **Rule:** nothing is removed. Every control that exists today must still be reachable. I'll keep a checklist of controls and tick each one off.

### 4b. Trip planner and game alignment
- The trip planner keeps its photography and spacing, and takes Direction A tokens, type and the shared header.
- The game gets the shared header and tokens, the all-caps rally styling goes, and it's renamed per question 2.

### 5. Parts and Fitters (frames: `jimnygami Parts and Fitters frames/`)
Branch `brief2/5-parts-fitters`. The Parts and Fitters & sellers pages follow the six new frames.
- **Parts:** search first, one row of category pills with counts, a filter column on desktop and a Filters sheet on phone. Cards show image, badge, seller, one fit line and two buttons. The photo toggle, the fitment dropdown and the stacked disclaimers are gone; the 3D explainer and the two archived sources sit behind one "How listings, prices and 3D previews work" link. Counts come from the catalogue, never from the frames.
- **Part detail:** a drawer on desktop and a full screen on phone, with Where to buy and Who can fit it (linking to Fitters). Prices show only where the data has one; otherwise "price on seller site".
- **Fitters:** Fitters/Sellers toggle, city pills with counts, "Can work on my build", cards that list the work each workshop names (build jobs highlighted), a shortlist with "Copy quote request" and a short "Before you book" checklist. "Sellers" is the existing buying-options list in the same look.
- **Work tags** are read from each listing's own description (`assets/fitter-work.js`). A sentence that denies a skill never adds a tag. Listings that name no work show no tags, and an owner override table exists for any decision made later. Wrap and PPF tags highlight when the build has a Garage finish or decal; audio tags never highlight.
- **Departures from the frames:** phone Fitters keeps the search box; phone workshop cards hide the description (the badge still says what kind of listing it is); "Include other body styles" and "Saved" sit under Show only, so no earlier control is lost.

## Verification for every task
- Every task is checked at 375×812 and 1440×900 in the browser pane, in both Rally dark and Daylight.
- **Regression pass:** 3D viewer, part pick, paint, decals, autosave across reload, save/load a version, share link round-trip, the game loading the saved build, directory search and filters, owner-tools calculations.
- `npm test` and `npm run build` pass.
- Before screenshots are taken first, from current `main`. After screenshots come from each deploy preview.
- Text sizes, contrast (lime on near-black, and dark text on lime buttons) and button labels from Brief 1 are checked with JS contrast and accessibility-tree reads.

## Places I expect to depart from the mockups
- **Desktop welcome car:** a still render instead of the live 3D view, so the welcome loads fast. The 3D view starts in the Garage. The caption changes to suit.
- **Price in the build bar:** keeps the existing estimate wording and disclaimer meaning. It isn't shortened.
