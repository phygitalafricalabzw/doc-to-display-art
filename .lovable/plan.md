## Goal
Swap out the AI-generated product images for the 10 real Valley Green / Stellar Foods product photos you uploaded, and expand the range from 7 to 10 items with dedicated detail pages.

## Product mapping (10 items)

| # | Product | Uploaded image |
|---|---|---|
| 01 | Buckwheat Seed | Buckwheat_Seed.png |
| 02 | Buckwheat Groats | Buckwheat_Groats.png |
| 03 | Buckwheat Kasha | Buckwheat_Kasha.png |
| 04 | Instant Porridge | Instant_Porridge.png |
| 05 | Buckwheat Meal | Buckwheat_Meal.png |
| 06 | Buckwheat Meal Blend | Buckwheat_Meal_Blend.png |
| 07 | Buckwheat Flour | Buckwheat_Flour.png |
| 08 | Buckwheat Tea (Mixed Herbal) | Buckwheat_Tea.png |
| 09 | Buckwheat Honey | Buckwheat_Honey.png |
| 10 | Peanut Butter | Buckwheat_Peanut_Butter.png |

## Changes

1. **Upload images as CDN assets.** Run `lovable-assets create` for each of the 10 uploaded PNGs from `/mnt/user-uploads/`, writing pointer JSONs to `src/assets/products/<name>.png.asset.json`. No binaries copied into the repo.
2. **Remove the old AI-generated product images** in `src/assets/` (`groats.jpg`, `porridge.jpg`, `meal.jpg`, `flour.jpg`, `tea.jpg`, `honey.jpg`, `kasha.jpg`) since they'll be superseded.
3. **Update `src/data/products.ts`:**
   - Import the new asset pointers and use `.url` for `img`.
   - Add three new products: **Buckwheat Seed**, **Buckwheat Meal Blend**, **Peanut Butter** — each with tagline, description, highlights, uses, and pack info consistent with the real product labels (pack sizes taken from the photos: Seed 1 kg, Meal Blend 5 kg, Peanut Butter 1 kg, etc.).
   - Update existing entries where the real pack differs (e.g. Groats 750 g, Kasha 1.25 kg, Tea 150 g, Honey 200 g, Porridge 700 g, Flour 2 kg).
   - Adjust the Tea copy to reflect it being a **mixed herbal** blend.
4. **Homepage (`src/routes/index.tsx`)**: the range grid already maps over `products`, so it auto-expands to 10 tiles. Verify any hardcoded "seven" copy is updated to "ten" (e.g. "See all seven").
5. **Product detail page (`src/routes/products.$slug.tsx`)**: same — data-driven, but update the "See all seven" link label to "See all ten".
6. **Verify** with a build and a quick Playwright screenshot pass of the homepage grid and one new detail page (e.g. `/products/peanut-butter`).

## Notes
- Peanut Butter is branded under Valleygreen Foods (not strictly buckwheat) — I'll present it as a sister product in the range, keeping copy honest.
- Meal vs Meal Blend: treated as two SKUs (plain meal vs a blended cooking meal), with distinct taglines and use cases.
- No design/palette changes — the current corporate-elegant white/green/black/ember system stays.
