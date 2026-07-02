import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProduct, products, type Product } from "@/data/products";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    if (!p) return { meta: [{ title: "Product not found — Stellar Foods" }] };
    return {
      meta: [
        { title: `${p.name} — Stellar Foods` },
        { name: "description", content: p.copy },
        { property: "og:title", content: `${p.name} — Stellar Foods` },
        { property: "og:description", content: p.copy },
        { property: "og:image", content: p.img },
        { name: "twitter:image", content: p.img },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-canvas text-ink flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <span className="h-eyebrow rule-eyebrow mb-4">404</span>
        <h1 className="h-sub mt-4 mb-6">This product isn't on the shelf.</h1>
        <Link to="/" className="btn-primary">Back to the range</Link>
      </div>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-screen bg-canvas text-ink flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="h-sub mb-6">Something went wrong.</h1>
        <button onClick={reset} className="btn-primary">Try again</button>
      </div>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData() as { product: Product };
  const index = products.findIndex((p) => p.slug === product.slug);
  const n = String(index + 1).padStart(2, "0");
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);
  const wholesaleMail = `mailto:stellarfoods25@gmail.com?subject=${encodeURIComponent(`Wholesale — ${product.name}`)}&body=${encodeURIComponent(`Hi Stellar Foods,\n\nI'd like wholesale pricing for ${product.name}.\n\nQuantity:\nLocation:\nName:\n\nThanks!`)}`;

  const words = product.name.split(" ");
  const lastWord = words[words.length - 1];
  const leadWords = words.slice(0, -1).join(" ");

  return (
    <div className="min-h-screen bg-canvas text-ink">
      {/* Nav */}
      <header className="sticky top-0 z-40 bg-canvas/90 backdrop-blur border-b border-line">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 h-16 flex items-center justify-between">
          <Link to="/" className="font-display font-bold text-xl tracking-tight text-ink">
            Stellar<span className="text-ember">.</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-ink-soft">
            <Link to="/" hash="range" className="hover:text-ink transition-colors">Range</Link>
            <Link to="/" hash="story" className="hover:text-ink transition-colors">Story</Link>
            <Link to="/" hash="wholesale" className="hover:text-ink transition-colors">Wholesale</Link>
          </nav>
          <a href={wholesaleMail} className="btn-primary text-sm">Enquire</a>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="border-b border-line">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-4 text-sm text-ink-soft flex items-center gap-2">
          <Link to="/" hash="range" className="hover:text-ember transition-colors inline-flex items-center gap-1">
            <span className="text-ember" aria-hidden>←</span> Range
          </Link>
          <span aria-hidden>/</span>
          <span className="text-ink">{product.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <span className="h-eyebrow rule-eyebrow mb-6">N°{n} · {product.tag}</span>
            <h1 className="h-display mt-6 text-ink">
              {leadWords && <>{leadWords} </>}
              <span className="relative inline-block">
                {lastWord}
                <svg className="absolute -bottom-2 left-0 w-full" height="14" viewBox="0 0 300 14" fill="none" preserveAspectRatio="none">
                  <path d="M2 8 Q 75 2, 150 7 T 298 6" stroke="var(--ember)" strokeWidth="4" strokeLinecap="round" fill="none" />
                </svg>
              </span>
            </h1>
            <p className="lead mt-8 max-w-xl">{product.tagline}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={wholesaleMail} className="btn-primary">Wholesale enquiry <span aria-hidden>→</span></a>
              <Link to="/" hash="range" className="btn-ghost">Find a stockist</Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden bg-fresh-tint aspect-square">
              <img src={product.img} alt={product.name} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-start mb-14">
            <div className="lg:col-span-5">
              <span className="h-eyebrow rule-eyebrow mb-6">Why it matters</span>
              <h2 className="h-sub mt-6">The story behind the pack.</h2>
            </div>
            <div className="lg:col-span-7 space-y-5 text-ink-soft text-lg leading-relaxed">
              {product.description.map((para, i) => <p key={i}>{para}</p>)}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {product.highlights.map((h, i) => (
              <div key={h} className="soft-card p-6">
                <div className="text-xs font-semibold tracking-[0.14em] text-ember">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="font-display font-semibold text-lg mt-3 text-ink leading-snug">{h}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pack & supply */}
      <section className="bg-fresh-tint border-b border-line">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-end mb-12">
            <div className="lg:col-span-8">
              <span className="h-eyebrow rule-eyebrow mb-6">Pack &amp; supply</span>
              <h2 className="h-sub mt-6">How it ships.</h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <a href={wholesaleMail} className="btn-primary">Request a quote <span aria-hidden>→</span></a>
            </div>
          </div>
          <div className="border-y border-line divide-y divide-line">
            {product.pack.map((p) => (
              <div key={p.label} className="grid grid-cols-[1fr_2fr] gap-6 py-6 items-baseline">
                <div className="text-xs uppercase tracking-[0.14em] text-ember font-semibold">{p.label}</div>
                <div className="font-display font-semibold text-xl md:text-2xl text-ink">{p.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to enjoy */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-24 lg:py-32">
          <span className="h-eyebrow rule-eyebrow mb-6">Ways to enjoy</span>
          <h2 className="h-sub mt-6 max-w-2xl">Practical, everyday uses.</h2>

          <div className="mt-14 border-t border-line">
            {product.uses.map((u, i) => (
              <div key={u} className="grid grid-cols-[auto_1fr] gap-8 items-baseline py-8 border-b border-line">
                <div className="font-display font-bold text-4xl md:text-5xl text-ink leading-none w-16">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="font-display font-semibold text-xl md:text-2xl text-ink">{u}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-24 lg:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <span className="h-eyebrow rule-eyebrow mb-6">Keep exploring</span>
              <h2 className="h-sub mt-6">More from the range.</h2>
            </div>
            <Link to="/" hash="range" className="btn-link">See all seven <span aria-hidden>→</span></Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.slug}
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="soft-card block overflow-hidden group"
              >
                <div className="aspect-[4/3] overflow-hidden bg-fresh-tint">
                  <img src={p.img} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold tracking-[0.14em] uppercase text-ember">{p.tag}</span>
                  <h3 className="font-display font-semibold text-xl mt-2 text-ink">{p.name}</h3>
                  <span className="btn-link mt-4">View product <span aria-hidden>→</span></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-canvas">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-10 flex flex-wrap items-center justify-between gap-4 border-t border-line">
          <div className="font-display font-bold text-xl text-ink">Stellar<span className="text-ember">.</span></div>
          <div className="text-xs text-ink-soft">© {new Date().getFullYear()} Stellar Seeds (Pvt) Ltd · Product of Zimbabwe</div>
        </div>
      </footer>
    </div>
  );
}