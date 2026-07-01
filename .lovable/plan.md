## Direction

Rip out the editorial magazine feel. Rebuild as a **Bold Vibrant Poster** — a loud, playful, sticker-shop food brand. Big geometric sans headlines, chunky rounded shapes, marquee scrollers, sticker badges, high-saturation blocks. Feels closer to Oatly / Graza / Liquid Death than a food journal.

## Palette — `src/styles.css`

Strip all `--paper`, `--ink`, `--ink-soft`, `--terracotta*` tokens. Replace with:

- `--sun` `oklch(0.90 0.17 95)` — vivid yellow (#FFE55C)
- `--leaf` `oklch(0.52 0.16 145)` — punchy green (#2E7D3E)
- `--tomato` `oklch(0.65 0.22 32)` — hot red-orange (#FF5B3A)
- `--soot` `oklch(0.16 0.005 60)` — near-black (#111)
- `--bone` `oklch(0.98 0.005 90)` — off-white

Map: `--background`→sun, `--foreground`→soot, `--primary`→soot, `--primary-foreground`→sun, `--accent`→tomato, `--secondary`→leaf, `--muted`→bone, `--border` soot, `--ring`→tomato.

Section rhythm: sun → leaf → sun → tomato → soot. No paper/paper-2 alternation.

## Typography — `src/styles.css` + `__root.tsx`

Swap Google Fonts to **Archivo Black** (display) + **Space Grotesk** (400/500/700) body. Remove Instrument Serif / Work Sans.

- `--font-display`: `"Archivo Black", ui-sans-serif, system-ui, sans-serif`
- `--font-sans`: `"Space Grotesk", ui-sans-serif, system-ui, sans-serif`
- Body 17px / 1.5 / 500
- `.h-display`: Archivo Black, `clamp(4rem, 14vw, 15rem)`, line-height 0.85, tracking -0.04em, uppercase
- `.h-sub`: Archivo Black, `clamp(1.75rem, 3vw, 3rem)`, uppercase, tracking -0.02em
- `.h-eyebrow`: Space Grotesk 700, 12px, tracking 0.18em, uppercase — pill (rounded-full, soot bg, sun text, px-3 py-1)
- Drop: `.dropcap`, `.byline`, `.folio`, `.pull-quote`, `.rule` (magazine-only utilities)
- Add:
  - `.sticker` — rounded-full soot border-2, px-4 py-2, rotate variants
  - `.marquee` — infinite horizontal scroll keyframes
  - `.chunky-btn` — soot bg, sun text, rounded-full, border-2 soot, hard shadow offset (`4px 4px 0 var(--soot)`), uppercase Archivo Black
  - `.tape` — tomato bg rotate-2 rounded-sm px-3 py-1 (label tape)

## Homepage — `src/routes/index.tsx`

Full rebuild. New sections in order:

1. **Marquee ticker** (top, soot bg, sun text) — "STELLAR FOODS ★ HIGHLAND GROWN ★ SINCE 2020 ★" scrolling.
2. **Sticky nav** — sun bg, chunky-btn "SHOP" on right, logo left (Archivo Black caps + tomato asterisk).
3. **Hero** — sun bg full-viewport. Enormous stacked h-display "BUCK / WHEAT / GOODNESS." (last word tomato). Right side: hero product image inside a rotated soot circle badge, orbiting sticker badges ("★ NEW", "100% NATURAL", "MADE IN ZW") with rotation. Two chunky-btn CTAs: soot "SHOP THE RANGE →" and outlined "WHOLESALE".
4. **Marquee #2** — leaf bg, sun text, product names scrolling.
5. **The Range** — leaf bg. Grid of 7 product cards. Each card = bone bg, rounded-3xl, border-2 soot, hard shadow offset, image on tomato/sun blob, Archivo Black name, tape-style tag, chunky arrow link. Cards slightly rotated at random (-2°, +1°).
6. **Why buckwheat** (About) — sun bg. Three big number blocks (01/02/03) with tomato circles, Archivo Black stats + Space Grotesk caption. No drop caps, no columns.
7. **Big quote band** — tomato bg, giant Archivo Black quote in soot, sticker attribution.
8. **How to eat it** — bone bg. Bento-ish grid of usage suggestions with emoji-style icon circles in leaf/sun/tomato.
9. **Wholesale slab** — soot bg, sun text. Giant h-display "LET'S / TALK / BULK.", chunky sun CTA button "EMAIL US →", contact rows.
10. **Footer** — leaf bg, sun text. Big logo, columns, copyright, one more marquee at bottom.

Every button = `chunky-btn` with hard offset shadow. Every card = border-2 + hard shadow. Kill every hairline rule, every dotted leader, every drop cap, every serif italic.

## Product page — `src/routes/products.$slug.tsx`

- Reuse marquee + sticky sun nav
- Breadcrumb → tomato sticker pill "← BACK TO SHOP"
- Cover: sun bg. Left: eyebrow pill, h-display name (last word tomato), Space Grotesk lead paragraph, two chunky-btn CTAs. Right: product image on rotated leaf blob with orbiting sticker badges.
- "Why it matters" section: bone bg, big cards with numbered soot circles
- "Pack & supply": leaf bg, sun text, chunky spec cards
- "Ways to enjoy": tomato bg, sun text, numbered blocks (big Archivo Black numerals in circles)
- "More from the range": sun bg, 3 rotated cards matching homepage
- Remove all `.folio`, `.byline`, `.dropcap`, `.pull-quote`, hairline rules

## Rhythm

- `py-24 lg:py-36` sections
- Full-bleed color blocks, no max-width interior boxes on section bgs
- Interior content max-w-[1400px]
- Random slight rotations on stickers/cards for playful poster feel
- Hard offset shadows everywhere (no soft blur shadows)

## Verification

- `rg` for `terracotta|paper|ink-soft|dropcap|byline|folio|pull-quote|Instrument Serif|Work Sans` across both route files + styles.css — must be zero
- Playwright screenshot `/` and one `/products/<slug>` at 852 + 1440 to confirm vibrant poster look

## Out of scope

Product data, routing, image regeneration, PDF re-parse. Only palette, type, utilities, and layout composition change.
