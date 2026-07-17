import { useState, useEffect, useRef } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/stellar-foods-logo.png.asset.json";

const nav = [
  { label: "Range", to: "/", hash: "range" },
  { label: "Story", to: "/", hash: "story" },
  { label: "About", to: "/about" as const },
  { label: "Wholesale", to: "/", hash: "wholesale" },
  { label: "Contact", to: "/", hash: "contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    previouslyFocusedRef.current =
      (document.activeElement as HTMLElement | null) ?? null;

    const panel = panelRef.current;
    if (!panel) return;

    const getFocusable = () =>
      Array.from(
        panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => !el.hasAttribute("aria-hidden"));

    // Move focus into the panel
    const focusables = getFocusable();
    (focusables[0] ?? panel).focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      const items = getFocusable();
      if (items.length === 0) {
        e.preventDefault();
        panel.focus();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey) {
        if (active === first || !panel.contains(active)) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      const toRestore =
        previouslyFocusedRef.current ?? toggleBtnRef.current ?? null;
      toRestore?.focus?.();
    };
  }, [open]);

  return (
    <>
    <header className="sticky top-0 z-40 bg-canvas/90 backdrop-blur border-b border-line">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="Stellar Foods home">
          <img src={logoAsset.url} alt="" className="h-10 w-auto" />
          <span className="font-display font-bold text-xl tracking-tight text-ink hidden sm:inline">
            Stellar<span className="text-ember"> Foods.</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-ink-soft">
          {nav.map((item) =>
            item.hash ? (
              <Link
                key={item.label}
                to={item.to}
                hash={item.hash}
                className="hover:text-ink transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                className="hover:text-ink transition-colors"
                activeProps={{ className: "text-ink font-semibold" }}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <div className="flex items-center gap-2 shrink-0">
          <Link to="/" hash="range" className="btn-primary text-sm hidden sm:inline-flex">
            Shop the range
          </Link>
          <button
            type="button"
            ref={toggleBtnRef}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav-panel"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center h-11 w-11 rounded-full border border-ink text-ink"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </header>

    {/* Mobile panel — sibling of header so backdrop-filter doesn't create a containing block */}
    {open && (
      <div
        id="mobile-nav-panel"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        tabIndex={-1}
        className="md:hidden fixed inset-x-0 top-16 h-[calc(100dvh-4rem)] z-40 bg-canvas border-t border-line overflow-y-auto focus:outline-none"
      >
          <nav className="mx-auto max-w-[1280px] px-6 py-6 flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                hash={item.hash}
                onClick={() => setOpen(false)}
                className="font-display font-semibold text-3xl text-ink py-4 border-b border-line rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/"
              hash="range"
              onClick={() => setOpen(false)}
              className="btn-primary mt-8 justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            >
              Shop the range <span aria-hidden>→</span>
            </Link>
            <a
              href="mailto:stellarfoods25@gmail.com?subject=Wholesale%20enquiry"
              onClick={() => setOpen(false)}
              className="btn-ghost mt-3 justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            >
              Wholesale enquiry
            </a>
          </nav>
        </div>
      )}
    </>
  );
}