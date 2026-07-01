## Direction

Complete reset. Drop the fresh-green look and rebuild as a high-end **editorial print magazine** — a food journal spread. Off-white paper, ink black, one warm terracotta accent. Instrument Serif headlines against tight Work Sans metadata. Layout shifts from generic app sections to a real magazine grid with numbered rules, byline strips, drop caps, pull quotes, index-style product list.

## Palette — `src/styles.css`

Replace all tokens. Strip `--forest`, `--emerald-deep`, `--green-soft`, `--honey`, `--gold`, `--gold-bright`, `--cream` and every reference.

- `--paper` `oklch(0.965 0.008 85)` — warm off-white bg
- `--paper-2` `oklch(0.93 0.012 80)` — alternating band
- `--ink` `oklch(0.16 0.01 60)` — body/foreground
- `--ink-soft` `oklch(0.42 0.015 60)` — secondary text
- `--terracotta` `oklch(0.58 0.15 40)` — accent (links, folios, tags)
- `--terracotta-deep` `oklch(0.44 0.14 38)` — hover
- Map: `--background`→paper, `--foreground`→ink, `--primary`→ink, `--primary-foreground`→paper, `--accent`→terracotta, `--muted`→paper-2, `--border` low-alpha ink, `--ring`→terracotta

## Typography — `src/styles.css` + `src/routes/__root.tsx`

Swap Google Fonts link to Instrument Serif (regular + italic) + Work Sans (300;400;500;600).

- `--font-display`: `"Instrument Serif", ui-serif, Georgia, serif`
- `--font-sans`: `"Work Sans", ui-sans-serif, system-ui, sans-serif`
- Body 17px / 1.6 / 400
- `.h-display`: Instrument Serif regular, `clamp(3.5rem, 11vw, 11rem)`, line-height 0.92, tracking -0.02em
- `.h-sub`: italic, `clamp(1.5rem, 2.5vw, 2.5rem)`, line-height 1.15
- `.h-eyebrow`: Work Sans 600, 11px, tracking 0.24em, uppercase, terracotta bar
- Add `.dropcap` (float, ~5.5em, terracotta), `.byline` (Work Sans 500, 12px, tracking 0.15em, uppercase), `.folio` (tabular-nums), `.pull-quote` (italic 2.5rem with terracotta bar), `.rule` (1px ink hairline)

## Homepage — `src/routes/index.tsx`

Rebuild in this order (new sections, not just repaint):

1. **Masthead bar** — top+bottom rule, folio "Issue N°01 · Highland Journal" left, nav right (About · Range · Stockists · Wholesale). Sticky paper.
2. **Cover** — full-viewport. Left 7/12: eyebrow, giant stacked h-display "Stellar / Foods." with one italic word, byline strip. Right 5/12: full-bleed hero image with terracotta "N°01" folio overlay. Bottom rule + 3 metadata cells (Est · Origin · Range).
3. **Contents / Index** — 7 products as 01–07 rows with dotted leaders, each linking to product page. Print-index feel.
4. **Feature story (About)** — eyebrow "Feature", h-display, drop-cap opener, two-column body, pull-quote breaking the grid.
5. **The Range** — one hero tile (terracotta bg) + 6 asymmetric grid tiles. Each: image, folio, serif name, one-line caption, hairline top rule.
6. **Pull-quote band** — paper-2 background, centered oversized italic quote, attribution.
7. **Directors / Provenance** — two-col: bio with drop cap + numbered credentials list with rules.
8. **Wholesale / Contact** — split: ink-black slab with paper text and terracotta CTA link left; paper contact index (Email · Phone · Address) as label/value rows right.
9. **Colophon footer** — ink bg, paper text, 3 columns (Sections · Contact · Colophon), bottom rule with "Set in Instrument Serif & Work Sans".

Replace every button pill with **terracotta text links + arrow →**. Kill `rounded-full`.

## Product page — `src/routes/products.$slug.tsx`

- Masthead + breadcrumb rendered as "N°0X / Product Name"
- Cover: left = eyebrow + folio + h-display + italic sub + byline; right = full-bleed image with terracotta folio overlay
- Two-column body: left "Why it matters" with drop cap; right = pull-quote + metadata index (Pack · Format · Origin · Shelf) as label/value rows with rules
- "Ways to enjoy" as numbered 01–0N with serif terracotta numerals
- "More from the range" as index rows (not cards)
- Replace dual CTA cards with two terracotta text links: "Find a stockist →", "Wholesale inquiry →"
- Remove mobile sticky action bar

## Rhythm

- `py-32 lg:py-44` vertical padding
- paper → paper-2 → paper → ink slab (wholesale) → paper
- Every section: full-width hairline + eyebrow
- 12-col grid, 8-col text measure

## Verification

- `rg` for `forest|emerald|green-soft|honey|gold|rounded-full` in both route files — strip leftovers
- Playwright screenshots at 852-wide + desktop 1440, `/` and one `/products/<slug>`

## Out of scope

No data, routing, image regen, or PDF re-parse. Existing images and copy stay; only palette, type, layout, section composition change.
