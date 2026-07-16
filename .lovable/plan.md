## Goal
Produce a static export of the Stellar Foods site (home + 10 product pages) that can be pushed to a GitHub repo and served by GitHub Pages, delivered as a downloadable zip.

## Approach
TanStack Start supports static prerendering. I'll enable prerender for every route, run a production static build, then package the output as a zip with an `index.html` at the root.

### Steps
1. **Enable prerendering** in `vite.config.ts` via the `@lovable.dev/vite-tanstack-config` `nitro`/`prerender` options — enumerate `/` and every `/products/{slug}` route (10 slugs from `src/data/products.ts`).
2. **Add a static preset** so nitro emits plain HTML/JS/CSS (no worker), output directory `dist/`.
3. **Add `.nojekyll`** to the output so GitHub Pages serves `_` prefixed asset folders.
4. **Add `404.html`** (copy of the rendered not-found page) so GitHub Pages handles unknown URLs gracefully.
5. **Run the build** (`bun run build` with the static target) and verify `dist/index.html` plus `dist/products/{slug}/index.html` exist for all 10 products.
6. **Zip the output** to `/mnt/documents/stellar-foods-static.zip` and surface it as an artifact for download.
7. **Include a short `README.md`** in the zip explaining how to push to GitHub and enable Pages (root, `main` branch).

### Deliverable
- `stellar-foods-static.zip` containing `index.html`, per-product folders, hashed JS/CSS assets, product images, `.nojekyll`, `404.html`, and `README.md`.

### Notes
- No design or copy changes.
- Product images are already CDN-hosted, so they'll load fine from any origin.
- If prerender can't statically resolve a route, I'll fall back to rendering each URL via a headless fetch against the local production server and saving the HTML.
