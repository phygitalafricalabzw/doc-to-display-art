## Problem

On mobile, tapping the hamburger toggles the icon (Menu ↔ X) but no menu appears. The panel div renders as `fixed inset-x-0 top-16 bottom-0` inside `<header>`, and the header uses `backdrop-blur`. `backdrop-filter` promotes the header to a containing block for `position: fixed` descendants, so `bottom-0` becomes the header's bottom (~64px), collapsing the panel to ~1px tall. Verified via Playwright: computed rect is `{y:64, w:390, h:1}`.

## Fix

**`src/components/SiteHeader.tsx`**

1. Move the mobile panel JSX out of the `<header>` element so it is no longer inside the `backdrop-blur` containing block. Return a fragment `<>...</>` with `<header>...</header>` and the panel as siblings.
2. Replace `bottom-0` with an explicit viewport-height sizing that works regardless of containing block: `top-16 h-[calc(100dvh-4rem)]` (dvh handles mobile browser chrome correctly). Keep `fixed inset-x-0 z-40 bg-canvas border-t border-line overflow-y-auto`.
3. Keep all existing behavior: `open` state, escape-on-route-change effect, body scroll lock, links, "Shop the range" / "Wholesale enquiry" CTAs.

## Verification

- Reload `/` and `/about` at 390×844, tap the hamburger, confirm the full-height panel overlays the page with all nav links visible and tappable.
- Tap a link and confirm it navigates and the panel closes (existing effect on pathname change).
- Confirm no visual regressions on `md+` (panel remains `md:hidden`).
