## Problem

In `stellar-foods-cpanel.zip`:
- The `images/` folder was created but left empty.
- All 10 product photos were saved under `__l5e/assets-v1/<uuid>/<file>.png` instead.
- Every HTML file points at those `__l5e/...` paths. Some cPanel / static hosts (and casual FTP tools) hide or refuse to serve folders that start with an underscore or contain deeply nested UUID directories, which is why the images don't render for you.
- Bonus bug spotted: the peanut butter route folder is `products/buckwheat-peanut-butter/` but the real product slug is `peanut-butter`, so that page was crawled as a 404 (2.8 KB stub) and its image is missing too.

## Fix

Rebuild the cPanel zip so all imagery lives in the flat `images/` folder promised in the upload guide.

1. Fresh production build + local serve (same as before).
2. Crawl the 11 real routes: `/`, `/products/buckwheat-seed`, `…groats`, `…kasha`, `instant-porridge`, `…meal`, `…meal-blend`, `…flour`, `…tea`, `…honey`, `peanut-butter` (correct slug), plus a synthetic 404.
3. For every product image and the hero:
   - Download once from the Lovable CDN.
   - Save to `images/<original-filename>.png` (e.g. `images/Buckwheat_Seed.png`).
   - Rewrite every `src`, `srcset`, `href`, `content="…png"`, and CSS `url(...)` reference from `__l5e/assets-v1/<uuid>/<file>` → `images/<file>` (using the correct relative prefix per page depth).
4. Delete the `__l5e/` tree from the export entirely.
5. Re-run the 284-reference integrity check; require 0 missing before packaging.
6. Emit `stellar-foods-cpanel-v2.zip` in `/mnt/documents/` and surface it as an artifact.

Structure after fix:

```text
index.html
404.html
.htaccess
README-UPLOAD.md
assets/       ← hashed CSS + JS
images/
  hero-bowl.jpg
  Buckwheat_Seed.png
  Buckwheat_Groats.png
  Buckwheat_Kasha.png
  Buckwheat_Flour.png
  Buckwheat_Meal.png
  Buckwheat_Meal_Blend.png
  Buckwheat_Peanut_Butter.png
  Buckwheat_Honey.png
  Buckwheat_Tea.png
  Instant_Porridge.png
products/
  buckwheat-seed/index.html
  … (9 more, including the corrected peanut-butter/index.html)
```

## Notes

- No source-code changes to the live site — this only affects the exported static bundle.
- Existing `.htaccess`, README, and clean-URL behaviour are preserved.
- Filenames keep their original casing (`Buckwheat_Seed.png`) so alt text and OG image URLs stay meaningful.
