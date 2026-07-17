## Scope

1. **Hamburger menu on all pages (mobile-first)**
   - Extract the current `TopBar` from `src/routes/index.tsx` into a shared `src/components/SiteHeader.tsx` and a `SiteFooter.tsx` so every page uses the same chrome.
   - Add a hamburger button visible on `<md` breakpoints (Lucide `Menu` / `X` icons). Tapping it opens a full-width slide-down panel with: Range, Story, About, Wholesale, Contact, and a "Shop the range" CTA.
   - Fix mobile disappearance: the current nav uses `hidden md:flex` and the CTA button gets pushed off-screen at 390px. Replace with a proper mobile menu (always-visible hamburger under `md`, always-visible nav ≥`md`).
   - Cross-page anchors (`#range`, `#story`, `#wholesale`, `#contact`) will use TanStack `Link` with `to="/"` + `hash` so they work from `/about` and product pages too.

2. **Mount shared header/footer on every route**
   - Use `src/routes/__root.tsx` to render `<SiteHeader />` above `<Outlet />` and `<SiteFooter />` below, so home, About, and all product pages share it. Remove the inline `TopBar`/`Footer` from `index.tsx` and product page to avoid duplicates.

3. **About Us page — `src/routes/about.tsx`**
   - Route: `/about`. Add head() metadata (title, description, og:title/description).
   - Sections, using the existing "Bricolage + Inter, white / fresh-green / ember" design language:
     - **Hero eyebrow + display headline**: "About Stellar Foods." with the intro paragraph ("forward-thinking food processing…").
     - **Mission** — pull quote treatment with ember accent rule.
     - **Vision** — one-line hero statement on a fresh-green slab.
     - **Core Values** — 5-card grid (Sustainability, Community Development, Innovation, Quality, Customer Satisfaction) with Lucide icons.
     - **Our Products / Health Benefits** — antioxidant / non-communicable disease copy in a two-column editorial block.
     - **Image gallery** — placeholder grid ready for the user's uploads (see item 5 below); until images arrive, the grid renders empty tiles with an "Image coming soon" state so layout is locked in.
     - CTA footer linking to `/#range` and the wholesale email.

4. **Wire About into navigation**
   - Add "About" link to header nav (desktop + mobile hamburger) and to the footer "Company" column.

5. **Images (deferred to your next upload)**
   - Plan locks in the About-page gallery structure (3 landscape + 2 portrait slots in an asymmetric grid). Once you upload the About Us images in the next message, I'll drop them into `src/assets/about/`, wire them into the gallery, and add alt text.

## Files touched

- **New**: `src/components/SiteHeader.tsx`, `src/components/SiteFooter.tsx`, `src/routes/about.tsx`
- **Edited**: `src/routes/__root.tsx` (mount header/footer), `src/routes/index.tsx` (remove inline TopBar/Footer, keep sections), `src/routes/products.$slug.tsx` (drop any duplicated chrome)

## Out of scope

- No design-system overhaul; About page reuses existing tokens (`--ember`, `--fresh-tint`, `--ink`, `.h-display`, `.soft-card`, `.slab`).
- No changes to product data or the static cPanel export — I'll regenerate that only if you ask after About is live.
