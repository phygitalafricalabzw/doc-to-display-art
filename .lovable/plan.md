## Goal
Produce a truly self-contained static export of the Stellar Foods site — every route, every image, every stylesheet and script — that opens correctly when unzipped locally (VS Code Live Server, double-clicking `index.html`) and when pushed to GitHub Pages, with zero missing links or 404s.

## Why the previous export was incomplete
The last export snapshotted the Vite dev server, which serves CSS/JS as on-the-fly modules and leaves many asset URLs pointing at dev-only paths (`/src/...`, `/__l5e/...`, `/_build/...`). Opened from disk or on Pages, those URLs 404.

## New approach: real production build + static prerender
1. **Run a production build** (`bun run build`) so Vite emits hashed, self-contained CSS/JS bundles in the output directory.
2. **Start the built server locally** and use Playwright to visit every route (`/` + 10 product pages), saving the fully rendered HTML.
3. **Rewrite every asset URL to relative paths**:
   - `/__l5e/assets-v1/...` product images → downloaded into `assets/images/` and rewritten.
   - `/assets/*` (hashed JS/CSS from the build) → copied into the export and rewritten to relative paths (`./assets/...`, `../assets/...` from product subpages).
   - Any `<link rel="modulepreload">`, `<script src>`, `<link rel="stylesheet">`, `<img src>`, and inline `url(...)` in CSS.
4. **Emit clean folder structure** so URLs work without a server:
   ```text
   site/
     index.html
     404.html
     .nojekyll
     README.md
     assets/            (hashed JS/CSS/fonts from Vite build)
     images/            (all product + hero images)
     products/
       buckwheat-seed/index.html
       buckwheat-groats/index.html
       ... (all 10)
   ```
5. **Verify before delivery**: for each of the 11 HTML files, parse it and confirm every `src`/`href`/`url()` resolves to a file that exists in the export. Fail the build if any reference is missing.
6. **Visual QA**: open `index.html` and 2 product pages from disk via `file://` in Playwright and screenshot each to confirm styling and images render with no server running.
7. **Package** as `stellar-foods-static-v2.zip` in `/mnt/documents/` and include a short `README.md` with GitHub Pages instructions (push to `main`, enable Pages from root).

## Deliverable
`stellar-foods-static-v2.zip` — opens correctly from `file://`, VS Code Live Server, and GitHub Pages, with all 11 pages, all 10 product images, hero image, fonts, CSS and JS intact and no broken links.

## Notes
- No design, copy, or source-code changes.
- If the production build surfaces any TanStack Start SSR issue, I'll fall back to prerendering against the dev server but with the stricter asset-rewrite + verification pass above, so the output is still fully self-contained.
