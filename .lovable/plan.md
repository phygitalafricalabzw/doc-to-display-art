## Direction
Lighter, airier site: fresh green + lots of white + warm brown accent. No yellow/gold anywhere. Tighten the type scale so DM Serif Display hits harder and Fira Sans body becomes genuinely readable.

## Palette — `src/styles.css` tokens
All `oklch`, no hex in components.

- `--background`: `oklch(0.99 0.005 100)` — near-white
- `--foreground`: `oklch(0.20 0.04 160)` — deep green-ink for body
- `--cream` → repurpose as `--off-white`: `oklch(0.975 0.008 120)` for alternating sections
- `--forest`: `oklch(0.52 0.13 156)` — fresh, vivid mid-green (replaces dark forest)
- `--green-deep`: `oklch(0.38 0.11 158)` — for slabs/footer (still much lighter than current)
- `--green-soft`: `oklch(0.92 0.04 150)` — pale mint tint for cards/hover surfaces
- `--brown`: `oklch(0.48 0.08 55)` — warm walnut, the only warm accent
- `--brown-soft`: `oklch(0.78 0.05 60)` — for hairlines, eyebrow bars
- `--primary` → `var(--forest)`, `--primary-foreground` → white
- `--accent` → `var(--brown)`, `--accent-foreground` → white
- `--ring` → `var(--forest)`
- Remove `--gold`, `--gold-bright`, `--honey`, `--emerald-deep`, `--gradient-gold` and every reference to them in the two route files

## Typography — `src/styles.css`

Punchier display, calmer body.

- `.h-display`: `clamp(3rem, 9vw, 8.5rem)`, `line-height: 0.88`, `letter-spacing: -0.035em`, `font-weight: 400` (DM Serif is already heavy — let the size do the work, tighten tracking instead of bulking weight)
- `.h-sub`: `clamp(1.25rem, 2vw, 1.875rem)`, `line-height: 1.25`, italic
- `.h-eyebrow`: bar color → `--brown`, tracking `0.32em`
- Body in `@layer base body`: `font-size: 1.0625rem` (17px), `line-height: 1.65`, `font-weight: 400`, `letter-spacing: 0.005em`
- Add `.lead`: `1.25rem / 1.55` for intro paragraphs
- Add `.prose-comfortable` helper: `max-width: 62ch` for long-form blocks
- Headings get tighter `line-height: 1.05` for h2/h3 via base layer

## Section rhythm — `src/routes/index.tsx` & `src/routes/products.$slug.tsx`

Token-only repaint plus spacing pass; no structural changes, no copy edits.

- Increase vertical section padding from `py-24` → `py-32 lg:py-40` for whitespace
- Alternate `--background` (white) → `--off-white` → `--green-deep` slab → `--background`; eliminate any back-to-back colored slabs
- Hero left slab: `--green-deep` with white type; right slab: white with the product photo on a pale `--green-soft` medallion (replaces the gold ring)
- Buttons: primary = solid `--forest` pill, white text, hover lifts to `--green-deep`; secondary = white with `--forest` border, `--brown` text on hover
- Links: `--forest`, hover underline in `--brown`
- Product cards: white surface, `--green-soft` hover wash, `--brown` tag pill, hairline border in `--brown-soft`
- Marquee: white on `--forest`, brown dot separators
- Directors / Contact: white background, `--brown` rule + eyebrow, large breathable margins
- Footer / mobile sticky bar on product page: `--green-deep` with white + brown accent

## Verification

- Grep for `gold`, `honey`, `yellow`, hex literals, `text-white` hardcoded in JSX — strip any leftovers
- Playwright screenshot pass on `/` and one `/products/<slug>` at desktop + the user's 852-wide viewport to confirm contrast and whitespace

## Out of scope

No copy, routing, data, image, or layout-structure changes — paint, type, and spacing only.
