import { Link } from "@tanstack/react-router";
import { products } from "@/data/products";

export function SiteFooter() {
  return (
    <footer className="bg-canvas border-t border-line">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="font-display font-bold text-2xl text-ink">
            Stellar<span className="text-ember">&nbsp;Foods.</span>
          </div>
          <p className="mt-4 text-ink-soft max-w-sm">
            Buckwheat from Zimbabwe. 10+ products , one field, since 2024.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.14em] text-ink-soft mb-4">Shop</div>
          <ul className="space-y-2">
            {products.slice(0, 4).map((p) => (
              <li key={p.slug}>
                <Link
                  to="/products/$slug"
                  params={{ slug: p.slug }}
                  className="text-ink hover:text-ember transition-colors"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.14em] text-ink-soft mb-4">Company</div>
          <ul className="space-y-2 text-ink">
            <li>
              <Link to="/about" className="hover:text-ember transition-colors">About us</Link>
            </li>
            <li>
              <Link to="/" hash="story" className="hover:text-ember transition-colors">Our story</Link>
            </li>
            <li>
              <Link to="/" hash="wholesale" className="hover:text-ember transition-colors">Wholesale</Link>
            </li>
            <li>
              <Link to="/" hash="contact" className="hover:text-ember transition-colors">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-ink-soft">
          <span>© {new Date().getFullYear()} Stellar Seeds (Pvt) Ltd</span>
          <span>Product of Zimbabwe</span>
        </div>
      </div>
    </footer>
  );
}