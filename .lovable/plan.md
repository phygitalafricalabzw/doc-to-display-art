## Goal
Replace the current flat hero and passive product detail pages with the selected "High-contrast split layout" direction: oversized Fraunces headlines, forest-green/honey contrast, and dual-path CTAs that always give the visitor a clear next step.

## Hero (`src/routes/index.tsx`)
Rebuild the hero section only — leave About / Mission / Range / Leadership / Contact intact, but update internal anchors so the new CTAs work.

- Full-viewport split: left forest-green panel (`--forest`) with content, right deeper-green panel framing the existing hero product image (rounded, subtle rotate, hover settles to 0°, paper-texture overlay).
- Left content stack: honey eyebrow "Zimbabwean Grown", massive Fraunces 900 headline "Purely / Stellar.", supporting paragraph, then **two prominent rounded-full CTAs**:
  - Primary (honey on forest): "Shop the range" → `#range`
  - Secondary (ghost): "Our story" → `#about`
- Below CTAs add a thin proof strip (Gluten-free · Locally grown · Family-run) to anchor trust.
- Keep marquee directly after for momentum.

## Product detail (`src/routes/products.$slug.tsx`)
Replace the hero/intro block with the split product layout from the selected direction; keep existing "Why it matters", "Ways to enjoy", "Pack & supply", and "More from the range" sections (restyled lightly for consistency).

- Left column (5/12): large rounded forest-bg image card holding the product photo with soft-light blend; thumbnail strip below (reuses the same image or related-product images — no fake placeholders).
- Right column (7/12):
  - Fraunces 900 product name + honey tagline line (uses existing `tagline` field; no fabricated price).
  - Lead description paragraph.
  - **Dual-path CTA cards** (the clear next step):
    - "Individual packs" → links to `#contact` ("Order from a stockist")
    - "Wholesale & bulk" → links to `mailto:` wholesale inquiry with subject prefilled from product name
  - Secondary link row: "Recipe inspiration" (scrolls to existing Ways-to-enjoy section) · "Talk to us" (→ `#contact`).
- Add a compact sticky bottom action bar on mobile (Wholesale / Contact) so the next step is always one tap away.

## Design tokens (`src/styles.css`)
- Add `--honey: #D9A34A` (or align existing honey to this hex) and ensure `--forest` matches `#1B3022` and `--cream` matches `#F9F5F1` to mirror the chosen prototype exactly.
- Add a small `.btn-honey` / `.btn-ghost-cream` utility pair via `@utility` for the rounded-full CTAs so both pages share styles.

## Out of scope
- No new routes, no e-commerce/cart, no real pricing (the prototype's "$12.50" is illustrative — we will not invent prices).
- No backend, no new data fields beyond what's already in `src/data/products.ts`.
- Other homepage sections keep current styling.

## Verification
After edits, run a Playwright capture of `/` and `/products/buckwheat-groats` at 1280×1800 and confirm: bold split hero, honey CTAs visible above the fold, and the dual-path action cards present on the product page.
