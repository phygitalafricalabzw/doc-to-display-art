## Direction

Keep the confidence of the poster look but dial it into **Bold Corporate Elegant** — think a modern food-tech brand (Notion x Whole Foods x Aesop). White canvas, decisive black type, fresh green as the brand color, orange as a single sharp accent. No stickers, no rotations, no marquees, no hard offset shadows.

## Palette — `src/styles.css`

Replace the sun/leaf/tomato/soot/bone tokens with:

- `--canvas` `oklch(0.99 0.003 120)` — near-white
- `--ink` `oklch(0.17 0.01 160)` — near-black
- `--fresh` `oklch(0.62 0.17 148)` — fresh vivid green (brand)
- `--fresh-deep` `oklch(0.38 0.11 150)` — deep green for slabs
- `--fresh-tint` `oklch(0.96 0.03 148)` — pale green wash
- `--ember` `oklch(0.70 0.19 47)` — sharp orange accent (used sparingly)
- `--line` `oklch(0.90 0.005 150)` — hairline grey

Map: `--background`→canvas, `--foreground`→ink, `--primary`→fresh-deep, `--primary-foreground`→canvas, `--secondary`→fresh-tint, `--accent`→ember, `--muted`→fresh-tint, `--border`→line, `--ring`→fresh.

Section rhythm: canvas → fresh-tint → canvas → fresh-deep (slab) → canvas. Orange only on hover states, one hero underline, one CTA arrow, one stat marker — never as a background block.

## Typography — `src/styles.css` + `__root.tsx`

Swap fonts to **Söhne-substitute pairing**: **Bricolage Grotesque** (display, wide corporate presence) + **Inter** (body, 400/500/600). Drop Archivo Black + Space Grotesk.

- `--font-display`: Bricolage Grotesque
- `--font-sans`: Inter
- Body 16px / 1.55 / 400, ink on canvas
- `.h-display`: 700 weight, `clamp(3rem, 9vw, 8rem)`, line-height 0.92, tracking -0.035em, mixed-case (not uppercase)
- `.h-sub`: 600, `clamp(1.5rem, 2.6vw, 2.5rem)`, tracking -0.02em, mixed-case
- `.h-eyebrow`: Inter 600, 12px, tracking 0.14em, uppercase, ember color, no pill background — just a short leading rule + label
- `.lead`: 20px / 1.5, ink-soft
- Replace `.chunky-btn` → `.btn-primary`: fresh-deep bg, canvas text, rounded-full, 14px 22px, medium weight, subtle hover lift (translateY -1px, ring)
- Replace `.chunky-btn-outline` → `.btn-ghost`: transparent, 1.5px ink border, ink text, rounded-full, hover fill ink
- New `.btn-link`: ember text, small arrow, animated underline on hover
- Remove `.sticker`, `.tape`, `.marquee-track`, `.poster-card`, `--shadow-hard*`
- Add `.soft-card`: canvas bg, 1px line border, rounded-2xl, subtle `0 1px 2px rgba(0,0,0,0.04), 0 8px 24px -12px rgba(0,0,0,0.08)`, hover lifts border to ink and shadow deepens
- Add `.slab`: fresh-deep bg, canvas text — reserved for one dark section
- Add `.rule-eyebrow`: 24px ember horizontal rule before eyebrow label

## Homepage — `src/routes/index.tsx`

Full rebuild, no marquees, no rotations, no sticker orbits.

1. **Top bar** — canvas bg, 1px bottom line. Left: wordmark (Bricolage 700 "Stellar." with ember period). Center: quiet nav links (Range / Wholesale / Story / Contact). Right: `.btn-primary` "Shop".
2. **Hero** — canvas bg, full viewport minus top bar. Two-column grid.
   - Left (7/12): tiny ember eyebrow "HIGHLAND BUCKWHEAT · EST. 2020", massive h-display headline "Buckwheat, done properly." with the word "properly" underlined in ember (hand-drawn SVG stroke). Lead paragraph, then two CTAs side-by-side: `.btn-primary` "Explore the range →" and `.btn-ghost` "Wholesale enquiry".
   - Right (5/12): single clean product image inside a rounded-3xl `--fresh-tint` panel, no rotation. Below the panel: a slim row of three metrics (each = ember number + Inter caption): "7 · Products", "100% · Natural", "ZW · Highlands".
3. **Trust strip** — canvas bg, thin lines top/bottom. Quiet row of 5-6 monochrome placeholder retailer names / certification words in Inter 500 uppercase 12px tracking 0.2em, ink-soft.
4. **Range** — fresh-tint bg. Eyebrow "The range". Big h-sub headline "Seven products. One grain." Grid of 7 `.soft-card` product cards (3 cols desktop, 2 tablet, 1 mobile). Each card: image on canvas with generous padding, ember eyebrow category, Bricolage 600 name, one-line description, ember `.btn-link` "View product →". No rotation, no tape, no shadow offset — soft elevated cards, uniform, elegant.
5. **Story / Why buckwheat** — canvas bg. Two-column: left = h-sub "A grain built for the way we eat now.", lead paragraph, `.btn-ghost` "Read the story". Right = 3 stacked stat rows separated by hairlines. Each row: giant Bricolage number in ink, ember unit tick, Inter description. No circles.
6. **Slab: wholesale** — fresh-deep bg, canvas text (`.slab`). Two-column. Left: eyebrow "Wholesale", h-display "Built for kitchens, retailers & exporters." Right: Inter lead paragraph, canvas `.btn-primary` variant (fresh-deep text on canvas), three quiet bullet rows with ember dot markers ("Bulk packs 5–50kg", "Private label", "Export ready").
7. **Contact strip** — canvas bg. Simple two-column: heading "Talk to us." + two clean info blocks (email row, phone row) with ember arrow.
8. **Footer** — canvas bg, 1px top line. Wordmark, three columns of quiet Inter links, small ink-soft copyright row. No marquee.

## Product page — `src/routes/products.$slug.tsx`

- Same top bar
- Breadcrumb: small Inter row "Range / [Product name]" with ember arrow back link, no sticker pill
- Cover: canvas bg, two-column. Left: eyebrow, h-display product name (mixed-case, no ember on last word — instead one ember underline stroke under a key word), lead paragraph, two CTAs (`.btn-primary`, `.btn-ghost`). Right: product image on `.fresh-tint` rounded panel, no rotations, no orbiting stickers.
- **Why it matters**: canvas bg, 3 `.soft-card` blocks in a row, each with ember index number, ink title, Inter body.
- **Pack & supply**: fresh-tint bg, quiet spec table (2 columns of key-value rows separated by hairlines) — no chunky cards.
- **Ways to enjoy**: canvas bg, numbered list (large Bricolage numerals in ink, ember hairline separator, description) — no colored blocks.
- **More from the range**: canvas bg, 3 `.soft-card` mini cards matching homepage.
- Kill every `sticker`, `tape`, `marquee`, rotation, hard offset shadow.

## Rhythm

- Sections `py-24 lg:py-32`
- Interior `max-w-[1280px]` container, 24/48px gutters
- Generous whitespace, hairlines to separate, not boxes
- One accent color per screen area — orange is a highlight, not a fill

## Verification

- `rg` for `sun|leaf|tomato|soot|bone|marquee|sticker|tape|chunky-btn|poster-card|shadow-hard|Archivo Black|Space Grotesk|rotate-\[|rotate-1|rotate-2` in `src/routes/*.tsx` and `src/styles.css` — must be zero
- Playwright screenshot `/` and one `/products/<slug>` at 852 + 1440 to confirm the corporate-elegant look

## Out of scope

Product data, routing, image regeneration. Only palette, typography, utilities, and layout composition change.
