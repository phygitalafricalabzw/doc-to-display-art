## Goal

Replace the static square hero image on `/about` (currently `heroBowl`) with a responsive, auto-playing image slider that cycles through the six About gallery photos already imported at the top of `src/routes/about.tsx`.

## Changes

**`src/routes/about.tsx`**
- Remove the `heroBowl` import (no longer used on this page).
- Extract the existing `gallery` array so the same six photos feed both the hero slider and the "From the farm" grid below (single source of truth).
- Replace the hero's `<div className="rounded-3xl overflow-hidden bg-fresh-tint aspect-square">…</div>` block with a new inline `<HeroSlider images={gallery} />` component defined in the same file.

**HeroSlider behavior**
- Same rounded 3xl container, `aspect-square` on mobile, `aspect-[4/5]` on `lg` for a slightly taller editorial feel; images use `object-cover w-full h-full`.
- Slides stacked absolutely; active slide fades in via `opacity` + `transition-opacity duration-700`. Non-active slides get `aria-hidden` and `pointer-events-none`.
- Auto-advances every 5s using `setInterval` in a `useEffect`; pauses on hover/focus and when `document.hidden` (visibilitychange listener) to respect background tabs.
- Respects `prefers-reduced-motion`: no auto-advance, no fade — just show current slide.
- Prev / Next buttons: circular 40px buttons pinned bottom-right with `bg-canvas/90 backdrop-blur border border-line`, using `ChevronLeft` / `ChevronRight` from `lucide-react` (already used elsewhere). Hidden visually on very small screens (`hidden sm:flex`) but keyboard-accessible via dot nav.
- Dot indicators: row of small pills centered along the bottom, active dot uses `bg-ember`, inactive `bg-canvas/60`. Each dot is a `<button>` with `aria-label={`Show slide ${i+1}`}` and `aria-current` on the active one.
- Keyboard: left/right arrow keys advance when the slider region is focused (`tabIndex={0}`, `role="region"`, `aria-roledescription="carousel"`, `aria-label="Stellar Foods gallery"`).
- Swipe: basic `onTouchStart` / `onTouchEnd` threshold (~40px) to advance on mobile.
- Preloads next image via a hidden `<link rel="preload">`-equivalent (just render the next `<img>` with `loading="eager"` while others stay `loading="lazy"`).

## Out of scope

- No changes to the "From the farm" gallery grid below the fold.
- No new dependencies; uses existing `lucide-react` icons and Tailwind tokens (`--ember`, `--fresh-tint`, `--line`, `--canvas`).
- No changes to header, footer, or other routes.
