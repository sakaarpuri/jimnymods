# Reference-guided catalogue geometry — 22 October 2026

The geometry in `src/catalogue-parts.js` is locally authored. Product photographs were viewed as dimensional/construction references, not copied into runtime textures or shipped as thumbnails. All selectable thumbnails must be rendered from these actual meshes. These are representative visualisations, not manufacturer CAD, fitment approval or load simulations.

| Visual ID | Primary reference and measured specification | Authored interpretation / limits |
| --- | --- | --- |
| `skinnyjim_backbone` | [Skinny Jim Backbone](https://www.skinny-jim.com/shop/p/backbone-rear-door-cargo-mount), 315 × 585 mm plate, 112 mm door clearance; JB74 / JC74 title | Concave perforated plate, folded outer edge, two hinge-side standoffs, bridge under spare mount. Slot locations, fold depths, hardware and vehicle offsets estimated from product/install photos. No copied wordmark. |
| `skinnyjim_jerry_tray` | [Skinny Jim Jerry+](https://www.skinny-jim.com/shop/p/jerry-can-gas-cargo-carrier), internal 370 × 205 mm tray, 75 mm upstand | Open slotted folded tray, neoprene pad, two loose webbing bands and cam buckles. Empty because a fuel container is not included. Backbone is rendered as a required mounting component even when the tray alone is selected. Does not simulate door opening or load limits. |
| `suzuki_nomade_flatrack` | [Suzuki Nomade accessories](https://www.suzuki.co.jp/accessory_car/jimny_nomade-accessory.html), 1,509 × 1,430 × 177 mm; 20 kg; overall roof height +91 mm | Five broad slats, shallow rounded perimeter and six gutter legs from official photo. Published platform footprint retained; clamps follow the authored vehicle gutter and extend beyond that footprint. No cargo capacity inference from the rack's 20 kg mass. Five-door only. |
| `suzuki_nomade_steelwheel` | [Suzuki Nomade accessories](https://www.suzuki.co.jp/accessory_car/jimny_nomade-accessory.html), matte black steel 15 × 5½J | Ten real ventilation openings, five lug holes, stamped dished disc and rolled rim/barrel. 381 mm diameter. Offset is unverified and recorded as null, so mesh uses the existing vehicle's visual wheel face location. Stock and wider visual tyres may be shown but this does not certify tyre compatibility. Five-door only. |

## Photograph references inspected

- Backbone: `Jimny Rear Door Mounting Brackets.webp` and `Backbone Install.webp` on Skinny Jim's official Squarespace image host.
- Jerry+: `Jimny Jerry Carrier.webp` on the same official host.
- Suzuki flat rack: `/accessory_car/img/jimny_nomade/craggy/thumbs/16.webp`.
- Suzuki steel wheel: `/accessory_car/img/jimny_nomade/revival/thumbs/17.webp` (not thumbnail 13, which is a body decal).

Source availability is distinct from visual readiness: the Skinny Jim pages displayed notify/out-of-stock controls when checked. The market records carry the sourcing status; geometry must not imply immediate inventory.

## Runtime ownership

Accessory builders borrow the existing shared material palette; their geometries are owned/disposed by the accessory rig. `applyCatalogueWheel` hides original alloy material batches without altering their buffers, creates per-root geometry and one owned steel material, and preserves the tyre/brake/barrel meshes. `disposeCatalogueWheels` restores original visibility and disposes only those added resources. Game meshes attach to the rotating wheel pivot, not the stationary body.

Tests cover finite geometry/normals, published visible dimensions, actual open vent holes, mount dependency/deduplication, clean removal, both tyre/brake preservation and actual extracted driving-wheel position. They do not replace visual inspection or validate real-world installation.

## Actual-render review

`modeling/verification/catalogue-5door-*.png` contains the four actual fitted meshes. `catalogue-3door-skinnyjim_*.png` verifies the two short-body carriers. Browser capture reported no page errors. A real renderer pixel comparison verified that fitting the steel wheel changes the image and removing it restores the exact stock image.

The first steel-wheel attempt showed diagonal shading creases. It was rejected, subdivided before shaping, and given analytic surface normals. The final pressed dish is smooth; the ten ventilation holes remain true geometry. Its coating uses a satin charcoal diffuse response rather than the initial near-black exposed-metal response, which obscured the dish in the garage lighting. This does not make the asset manufacturer CAD or photographic quality. The rear black carrier remains relatively dark under the accepted two-source garage lighting; edges, slots, mounting connections and tray are nevertheless distinct in the final captures.
