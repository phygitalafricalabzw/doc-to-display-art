## Goal
Produce a single zip of the entire website — every HTML page, image, CSS, JS, font reference, and the 404 page — structured so you can upload the contents straight into a cPanel `public_html/` folder (or any static host like GoDaddy, Namecheap, Hostinger) and have the site work with no missing links.

## What you'll get
`stellar-foods-cpanel.zip` in `/mnt/documents/`, containing:

```text
index.html                     ← home page
404.html                       ← shown on unknown URLs
.htaccess                      ← pretty URLs + custom 404 for Apache/cPanel
assets/                        ← hashed CSS + JS bundles
images/                        ← all 10 product photos + hero art (local copies)
products/
  buckwheat-seed/index.html
  buckwheat-groats/index.html
  buckwheat-kasha/index.html
  buckwheat-flour/index.html
  buckwheat-meal/index.html
  buckwheat-meal-blend/index.html
  buckwheat-peanut-butter/index.html
  buckwheat-honey/index.html
  buckwheat-tea/index.html
  instant-porridge/index.html
README-UPLOAD.md               ← step-by-step cPanel upload guide
```

All internal links are relative (`../index.html`, `./images/...`), so it works whether served from the domain root or a subfolder.

## Steps
1. Run a fresh production build so hashed assets are current.
2. Serve the build locally and crawl all 11 routes (home + 10 products + 404) with Playwright, saving full HTML.
3. Download every product image from the Lovable CDN into a local `images/` folder and rewrite `src` / `srcset` / `og:image` / CSS `url(...)` references to point to it.
4. Rewrite every internal link to a relative path that resolves from the file it's in (fixes home hash links like `#story` when viewed from `/products/xyz/`).
5. Add a cPanel-friendly `.htaccess`:
   - Serves `index.html` from clean folder URLs
   - Points 404s at `/404.html`
   - Sets long cache headers on `/assets/` and `/images/`
6. Add `README-UPLOAD.md` with exact cPanel steps: File Manager → `public_html` → Upload zip → Extract → done.
7. Run the same integrity check we ran on v2 (284 refs) against the new export to confirm 0 broken links / 0 missing images before delivery.
8. Emit the artifact tag for the final zip.

## Notes
- Google Fonts stays loaded via `<link>` from Google's CDN (same as the live site). If you want the site to work fully offline / with zero external requests, tell me and I'll bundle the font files locally too — it adds ~400KB.
- Forms/CTAs on the site are `mailto:` links, so no server code is needed on cPanel — pure static hosting is enough.
- If you later want a custom domain on cPanel, just point the domain at the hosting account; no changes to these files are needed.