## Scope

1. **Upload images as Lovable Assets** (no binaries in repo) from `/mnt/user-uploads/`:
   - `stellar_foods_logo.png` → `src/assets/stellar-foods-logo.png.asset.json`
   - Six About gallery photos → `src/assets/about/*.png.asset.json`:
     - `Stellar_Foods_Buckwheat_Flour.png` (family at breakfast)
     - `Buckwheat_Flour-2.png` (woman baking)
     - `Buckwheat_Groats-2.png` (groats + prepared dish)
     - `Steallar_Foods_Buckwheat_Tea.png` (man drinking tea)
     - `Stellar_Foods_Buckwheat_Honey.png` (honey jar in buckwheat field)
     - `Stellar_Foods_Peanut_Butter.png` (peanut butter splash)

2. **Logo in `SiteHeader.tsx`**
   - Replace the wordmark-only brand link with `<img src={logo.url}>` + "Stellar Foods." wordmark alongside it. Logo sized ~36–40px tall, preserved aspect ratio. Same treatment inside the mobile hamburger panel header.

3. **Logo in `SiteFooter.tsx`**
   - Add logo above/next to the "Stellar Foods." brand block in the footer's first column.

4. **About page gallery — `src/routes/about.tsx`**
   - Replace the six "Image coming soon" placeholder tiles with the six uploaded photos, keeping the existing asymmetric grid (tiles 1 and 6 span 2 cols at `16/10`, tiles 2–5 are square).
   - Map order: 1=Family/Flour bag (wide), 2=Woman baking, 3=Groats dish, 4=Honey jar, 5=Tea, 6=Peanut butter (wide).
   - Each `<img>` gets `object-cover w-full h-full`, real alt text (e.g., "Family sharing a meal with Stellar Foods Buckwheat Flour"), and `loading="lazy"`.

## Files touched

- **New pointer files**: `src/assets/stellar-foods-logo.png.asset.json`, `src/assets/about/{flour-family,flour-baking,groats-dish,honey,tea,peanut-butter}.png.asset.json`
- **Edited**: `src/components/SiteHeader.tsx`, `src/components/SiteFooter.tsx`, `src/routes/about.tsx`

## Out of scope

- No changes to product data, product pages, or the static cPanel export (can regenerate on request after this lands).
- No re-theming; existing tokens (`--ember`, `--fresh-tint`, etc.) unchanged.
