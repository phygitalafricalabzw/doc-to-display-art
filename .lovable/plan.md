## Bold typographic overhaul

Push the site into editorial/fashion-magazine territory — gigantic display type, confident sub-headlines, and tighter rhythm. No structural changes; copy and typography only.

### Typography system (src/styles.css)
- Keep Fraunces, but lean harder: weights 300 + 700, heavy negative tracking (-0.04em) on display sizes, optical sizing tuned for large.
- Add an italic Fraunces cut for sub-headlines (true italic, not synthesized).
- New utility scale used across sections:
  - `.h-display` — clamp(4rem, 11vw, 12rem), weight 700, leading 0.85, tracking -0.05em
  - `.h-eyebrow` — uppercase, 0.7rem, tracking 0.35em, weight 500
  - `.h-sub` — Fraunces italic 300, clamp(1.5rem, 2.6vw, 2.5rem), leading 1.1
- Mixed-weight headlines: pair bold roman with italic light in the same line (e.g. "Grown **bold** & milled *gentle*").

### Headline rewrites (src/routes/index.tsx)
Replace current calm phrasing with punchy, oversized two-line headlines, each with an italic sub-headline beneath:

- **Hero**: "BUCKWHEAT, / *reimagined.*" — sub: "Seven products. One ancient grain. Grown in the Zimbabwean highlands."
- **About**: "ROOTED IN / *the highlands.*" — sub: "A family farm turned national pantry staple."
- **Mission / Vision**: "WE GROW / *what nourishes.*" — sub above the two cards.
- **Products**: "THE / RANGE." — massive stacked, with eyebrow "Seven · Gluten-free · Single-origin" and sub "From whole groats to dark apiary honey."
- **Directors**: "THE / *people* / BEHIND IT." — sub: "Two founders, one harvest."
- **Contact**: "LET'S / *talk* / TRADE." — sub: "Wholesale, export and private-label enquiries."
- Marquee: shorter, all-caps repeating phrases ("NATURALLY GLUTEN-FREE ✦ SINGLE-ORIGIN ✦ ZIMBABWE-GROWN ✦").

### Product detail pages (src/routes/products.$slug.tsx)
- Product name rendered at `.h-display` scale, stacked across two lines where possible.
- Tagline upgraded to large italic Fraunces sub-headline directly under it.
- Section eyebrows ("Why it matters", "Ways to enjoy", "Pack & supply") rendered with new `.h-eyebrow` and paired with a bold mini-headline ("REAL / *reasons.*", "EVERYDAY / *uses.*", "PACK / *& supply.*").

### Visual polish
- Add a thin gold rule under each section eyebrow.
- Allow headlines to break out of the grid (negative left margin on desktop) for editorial impact.
- No new images, no new routes, no data changes.

### Files touched
- `src/styles.css` — typography utilities + font weights
- `src/routes/index.tsx` — headline copy + classes for all sections
- `src/routes/products.$slug.tsx` — product page headline treatment
