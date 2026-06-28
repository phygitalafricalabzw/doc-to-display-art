## Direction

Move from the muted cream/forest scheme to a richer, high-contrast **Emerald Prestige** palette with a luxe gold accent, and swap the type stack to a dramatic editorial serif. Goal: less "wellness-brochure," more "premium food house."

### Palette (replace tokens in `src/styles.css`)
- `--background`: deep ivory `oklch(0.96 0.02 88)` for most surfaces
- `--ink`: near-black emerald `oklch(0.18 0.04 160)` (new foreground)
- `--forest`: rich emerald `oklch(0.32 0.09 158)` (deepened, more chroma)
- `--emerald-deep`: `oklch(0.22 0.07 160)` for hero/footer slabs
- `--gold`: vivid honey-gold `oklch(0.78 0.15 80)` (replaces dull honey)
- `--gold-bright`: `oklch(0.86 0.17 88)` for hover/glow
- `--cream`: warm bone `oklch(0.93 0.035 85)`
- Add gradient + shadow tokens: `--gradient-gold`, `--gradient-emerald`, `--shadow-luxe` (soft emerald-tinted drop)

### Typography
- Display: **DM Serif Display** (heavy editorial serif, bold by default) — replaces Fraunces
- Body: **Fira Sans** at 400/500/600
- Italic accent: **DM Serif Display Italic** for the "sub" treatment
- Load via `<link>` in `src/routes/__root.tsx` (remove Fraunces/Inter links)
- Update `--font-display` / `--font-sans` tokens
- Rework `.h-display`: tighter leading (0.82), heavier optical sizing, slight slant variant for hero word
- `.h-eyebrow`: gold bar accent (was muted), upper-case, 0.4em tracking

### Components to repaint

1. **Hero (`src/routes/index.tsx`)**
   - Left slab: deep emerald (`--emerald-deep`) with a faint gold grain overlay
   - Right slab: ivory with rotated product image and a gold ring/medallion behind it
   - Headline: DM Serif Display, ivory, italic accent word in gold
   - Primary CTA: solid gold pill with emerald text + luxe shadow
   - Secondary CTA: ivory ghost with gold underline
   - Proof strip: emerald on gold hairline divider

2. **Marquee** — ivory text on emerald, gold star separators instead of dots

3. **About / Mission** — cream background, oversized italic pull quote in emerald, gold drop-cap on opening paragraph

4. **Values** — 3-up cards on emerald with gold numerals (01 / 02 / 03) and thin gold rules

5. **Product grid** — cards get cream background, emerald frame, gold tag pill ("Gluten-free", etc.), hover lifts with luxe shadow + gold underline on title

6. **Directors** — split portrait blocks with gold serif name + emerald rule

7. **Contact / footer** — full emerald-deep slab, gold logotype, gold CTA repeat

8. **Product detail page (`src/routes/products.$slug.tsx`)**
   - Match new tokens
   - Hero image card gets gold frame + emerald backplate
   - Section headers use new display serif with italic accent
   - CTA cards: one solid gold ("Find a stockist"), one outlined emerald ("Wholesale")
   - Sticky mobile bar: emerald with gold action

### Technical notes
- All color changes go through `src/styles.css` tokens — no hardcoded hex in components
- Keep existing component structure/copy; this is a paint + type pass, not a re-architecture
- Verify no Tailwind utilities like `text-white` slipped into JSX during repaint
- Run a quick Playwright screenshot pass on `/` and one product route after the change to confirm contrast and that no text falls on same-tone backgrounds

### Out of scope
- No new sections, no copy rewrites, no routing/data changes
- No new dependencies beyond the Google Fonts swap