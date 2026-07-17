## Goal
Make the mobile hamburger menu fully keyboard accessible with proper focus management and focus trapping.

## Changes (all in `src/components/SiteHeader.tsx`)

1. **Focus the panel on open**
   - Add a ref to the mobile panel container and move focus to the first nav link (or the panel) when `open` becomes true.
   - Save the previously focused element (the hamburger button) and restore focus to it when the panel closes.

2. **Trap focus inside the panel while open**
   - Add a `keydown` listener on the panel:
     - `Tab` / `Shift+Tab` cycles between the first and last focusable elements (nav links + Shop CTA + Wholesale link + close button reference).
     - `Escape` closes the menu and returns focus to the hamburger button.
   - Query focusable elements dynamically so ordering stays correct.

3. **Semantics / ARIA**
   - Add `role="dialog"`, `aria-modal="true"`, `aria-label="Site navigation"` to the panel.
   - Give the hamburger button `aria-controls="mobile-nav-panel"` and assign that `id` to the panel.
   - Keep `aria-expanded` toggling (already present).

4. **Visible focus styles**
   - Ensure mobile nav links have a clear `focus-visible:outline` / ring so keyboard users can see focus (currently no focus style on the large links).

## Out of scope
Desktop nav, styling changes beyond focus rings, and any other pages/components.

## Verification
- Tab through: hamburger → open → focus lands in panel → Tab cycles only inside panel → Shift+Tab wraps → Escape closes and returns focus to hamburger.
- Screen reader announces the panel as a dialog labeled "Site navigation".
