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
    if (!p) {
      return { meta: [{ title: "Product not found — Stellar Foods" }] };
    }
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
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="text-center">
        <div className="byline mb-4">404 · Not found</div>
        <h1 className="font-display text-5xl text-ink mb-6">This page has been unbound.</h1>
        <Link to="/" className="text-terracotta italic font-display text-xl">← Return to the journal</Link>
      </div>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-display text-4xl text-ink mb-4">Something went wrong</h1>
        <button onClick={reset} className="text-terracotta italic underline">Try again</button>
      </div>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData() as { product: Product };
  const index = products.findIndex((p) => p.slug === product.slug);
  const n = String(index + 1).padStart(2, "0");
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 4);
  const wholesaleMail = `mailto:stellarfoods25@gmail.com?subject=${encodeURIComponent(`Wholesale enquiry — ${product.name}`)}&body=${encodeURIComponent(`Hello Stellar Foods,\n\nI'd like to request wholesale pricing and availability for ${product.name}.\n\nQuantity required:\nDelivery location:\nContact name:\n\nThanks,`)}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 bg-background border-y border-ink/20 backdrop-blur">
        <div className="mx-auto max-w-[1400px] px-6 py-4 flex items-center justify-between gap-6">
          <Link to="/" className="folio text-[11px] uppercase tracking-[0.24em] text-ink-soft">
            <span className="text-terracotta">←</span> The Highland Journal
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-[12px] uppercase tracking-[0.18em] text-ink">
            <Link to="/" hash="feature" className="hover:text-terracotta">About</Link>
            <Link to="/" hash="range" className="hover:text-terracotta">Range</Link>
            <Link to="/" hash="directors" className="hover:text-terracotta">Editors</Link>
            <Link to="/" hash="wholesale" className="hover:text-terracotta">Wholesale</Link>
          </nav>
          <a href={wholesaleMail} className="hidden md:inline-flex text-terracotta hover:text-terracotta-deep text-[12px] uppercase tracking-[0.18em] underline underline-offset-4 decoration-terracotta/40">
            Wholesale →
          </a>
        </div>
      </header>

      <nav aria-label="Breadcrumb" className="mx-auto max-w-[1400px] px-6 pt-10 folio text-[11px] uppercase tracking-[0.24em] text-ink-soft">
        <Link to="/" className="hover:text-terracotta">Journal</Link>
        <span className="mx-3 text-ink/30">/</span>
        <Link to="/" hash="contents" className="hover:text-terracotta">Contents</Link>
        <span className="mx-3 text-ink/30">/</span>
        <span className="text-terracotta">N°{n}</span>
        <span className="mx-2 text-ink/40">·</span>
        <span className="text-ink">{product.name}</span>
      </nav>

      <section className="mx-auto max-w-[1400px] px-6 pt-10 pb-24 lg:pb-32 grid lg:grid-cols-12 gap-10 lg:gap-16 items-stretch border-b border-ink/15">
        <div className="lg:col-span-7 flex flex-col justify-between py-8">
          <div>
            <div className="h-eyebrow mb-8">{product.tag} · Entry N°{n}</div>
            <h1 className="h-display text-ink">
              {product.name.split(" ").map((w, i, arr) => (
                <span key={i} className={i === arr.length - 1 ? "italic text-terracotta" : ""}>
                  {w}
                  {i < arr.length - 1 ? " " : ""}
                </span>
              ))}
            </h1>
            <p className="mt-8 h-sub text-ink-soft max-w-xl">{product.tagline}</p>
          </div>
          <div className="mt-12 pt-6 border-t border-ink/25 byline">
            The Highland Journal · Issue N°01 · Summer 2026
          </div>
        </div>
        <div className="lg:col-span-5 relative min-h-[420px]">
          <img src={product.img} alt={product.name} className="absolute inset-0 h-full w-full object-cover" width={1600} height={2000} />
          <div className="absolute bottom-6 left-6 bg-terracotta text-accent-foreground px-4 py-3">
            <div className="folio text-[10px] uppercase tracking-[0.24em] opacity-80">Entry</div>
            <div className="font-display text-3xl leading-none">N°{n}</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-24 lg:py-32 grid lg:grid-cols-12 gap-10 lg:gap-16 border-b border-ink/15">
        <div className="lg:col-span-7">
          <div className="h-eyebrow mb-8">Why it matters</div>
          <div className="space-y-6 text-lg text-ink leading-relaxed dropcap">
            {product.description.map((para, i) => <p key={i}>{para}</p>)}
          </div>
          <ul className="mt-10 border-t border-ink/25">
            {product.highlights.map((h, i) => (
              <li key={h} className="border-b border-ink/15 py-4 flex items-baseline gap-5">
                <span className="folio text-terracotta w-10 text-sm">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-2xl text-ink">{h}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="lg:col-span-5 lg:pl-8 lg:border-l border-ink/15">
          <blockquote className="pull-quote text-ink mb-12">
            {product.tagline}
          </blockquote>
          <div className="h-eyebrow mb-6">Pack &amp; supply</div>
          <dl className="border-t border-ink/25">
            {product.pack.map((p) => (
              <div key={p.label} className="border-b border-ink/25 py-4 grid grid-cols-12 gap-4 items-baseline">
                <dt className="col-span-5 byline">{p.label}</dt>
                <dd className="col-span-7 font-display text-xl text-ink">{p.value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 flex flex-col gap-4">
            <a href={wholesaleMail} className="font-display italic text-terracotta text-2xl hover:text-terracotta-deep transition-colors">
              Wholesale inquiry →
            </a>
            <Link to="/" hash="wholesale" className="font-display italic text-ink text-2xl hover:text-terracotta transition-colors">
              Find a stockist →
            </Link>
          </div>
        </aside>
      </section>

      <section id="ways-to-enjoy" className="border-b border-ink/15 bg-paper-2">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:py-32">
          <div className="h-eyebrow mb-8">Ways to enjoy</div>
          <h2 className="font-display text-5xl md:text-7xl text-ink leading-[0.95] mb-14">
            Everyday <span className="italic text-terracotta">uses.</span>
          </h2>
          <ol className="grid md:grid-cols-2 gap-x-16">
            {product.uses.map((u, i) => (
              <li key={u} className="border-t border-ink/25 py-6 flex items-baseline gap-6">
                <span className="font-display text-terracotta text-4xl leading-none w-14">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display text-2xl md:text-3xl text-ink leading-tight">{u}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-ink/15">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:py-32">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="h-eyebrow mb-6">Continue reading</div>
              <h2 className="font-display text-5xl md:text-7xl text-ink leading-[0.95]">
                More from <span className="italic text-terracotta">the range.</span>
              </h2>
            </div>
            <Link to="/" hash="contents" className="hidden md:inline byline text-terracotta">All seven titles →</Link>
          </div>
          <ol className="border-t border-ink/25">
            {related.map((p) => {
              const idx = products.findIndex((x) => x.slug === p.slug);
              return (
                <li key={p.slug} className="border-b border-ink/25">
                  <Link
                    to="/products/$slug"
                    params={{ slug: p.slug }}
                    className="group grid grid-cols-12 items-baseline gap-4 py-6 hover:bg-paper-2 transition-colors"
                  >
                    <span className="col-span-1 folio text-terracotta text-lg">{String(idx + 1).padStart(2, "0")}</span>
                    <span className="col-span-6 md:col-span-5 font-display text-2xl md:text-3xl text-ink group-hover:text-terracotta">
                      {p.name}
                    </span>
                    <span className="hidden md:inline-block col-span-4 byline text-ink-soft truncate">{p.tag}</span>
                    <span className="col-span-5 md:col-span-2 text-right folio text-ink-soft text-sm">
                      Read →
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <footer className="bg-ink text-paper">
        <div className="mx-auto max-w-[1400px] px-6 py-10 flex flex-wrap items-center justify-between gap-4 text-xs text-paper/60">
          <div className="font-display text-paper text-xl">Stellar Foods</div>
          <div>© {new Date().getFullYear()} Stellar Seeds (Pvt) Ltd · Product of Zimbabwe</div>
          <div className="folio">N°{n} · {product.name}</div>
        </div>
      </footer>
    </div>
  );
}