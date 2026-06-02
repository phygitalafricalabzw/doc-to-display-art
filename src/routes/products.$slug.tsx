import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProduct, products } from "@/data/products";
import heroBowl from "@/assets/hero-bowl.jpg";

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
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">404</div>
        <h1 className="font-display text-5xl text-primary mb-6">Product not found</h1>
        <Link to="/" className="text-accent hover:underline">Return home</Link>
      </div>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-display text-4xl text-primary mb-4">Something went wrong</h1>
        <button onClick={reset} className="text-accent hover:underline">Try again</button>
      </div>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-baseline gap-2">
            <span className="font-display text-2xl tracking-tight text-primary">Stellar</span>
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Foods</span>
          </Link>
          <nav className="hidden md:flex items-center gap-9 text-sm text-foreground/80">
            <Link to="/" hash="about" className="hover:text-primary transition">About</Link>
            <Link to="/" hash="products" className="hover:text-primary transition">Products</Link>
            <Link to="/" hash="directors" className="hover:text-primary transition">Leadership</Link>
            <Link to="/" hash="contact" className="hover:text-primary transition">Contact</Link>
          </nav>
          <Link to="/" hash="contact" className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm hover:bg-primary/90 transition">
            Order wholesale <span aria-hidden>→</span>
          </Link>
        </div>
      </header>

      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-6 pt-10 text-xs uppercase tracking-[0.25em] text-muted-foreground">
        <Link to="/" className="hover:text-primary transition">Home</Link>
        <span className="mx-3 opacity-50">/</span>
        <Link to="/" hash="products" className="hover:text-primary transition">Products</Link>
        <span className="mx-3 opacity-50">/</span>
        <span className="text-foreground/70">{product.name}</span>
      </nav>

      <section className="mx-auto max-w-7xl px-6 pt-10 pb-20 grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-6 relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img src={product.img} alt={product.name} className="h-full w-full object-cover" width={1600} height={2000} />
          </div>
          <div className="absolute -left-4 -bottom-4 bg-accent text-accent-foreground rounded-full size-28 flex flex-col items-center justify-center text-center shadow-lg">
            <span className="font-display text-xl leading-none">100%</span>
            <span className="text-[10px] uppercase tracking-[0.2em] mt-1">Natural</span>
          </div>
        </div>

        <div className="md:col-span-6">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">{product.tag}</div>
          <h1 className="font-display font-light text-[clamp(2.5rem,5vw,5rem)] leading-[1] tracking-tight text-primary">
            {product.name}
          </h1>
          <p className="mt-6 font-display italic text-2xl text-accent">{product.tagline}</p>
          <div className="mt-8 space-y-5 text-foreground/80 leading-relaxed text-lg">
            {product.description.map((para, i) => <p key={i}>{para}</p>)}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/" hash="contact" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm hover:bg-primary/90 transition">
              Wholesale enquiry
            </Link>
            <Link to="/" hash="products" className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-7 py-3.5 text-sm text-primary hover:bg-primary/5 transition">
              ← Back to range
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream/50 border-y border-border/60 py-20">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-12">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">Why it matters</div>
            <ul className="space-y-4">
              {product.highlights.map((h) => (
                <li key={h} className="flex gap-3 items-start">
                  <span className="text-accent mt-1.5">✦</span>
                  <span className="font-display text-xl text-primary leading-snug">{h}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">Ways to enjoy</div>
            <ul className="space-y-4">
              {product.uses.map((u) => (
                <li key={u} className="border-t border-border/60 pt-4 text-foreground/80">{u}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">Pack & supply</div>
            <dl className="space-y-5">
              {product.pack.map((p) => (
                <div key={p.label} className="border-t border-border/60 pt-4">
                  <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1">{p.label}</dt>
                  <dd className="font-display text-xl text-primary">{p.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-primary">More from the range</h2>
          <Link to="/" hash="products" className="text-xs uppercase tracking-[0.25em] text-muted-foreground hover:text-primary transition hidden md:inline">View all seven →</Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((p) => (
            <Link
              key={p.slug}
              to="/products/$slug"
              params={{ slug: p.slug }}
              className="group bg-background border border-border/60 overflow-hidden block"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" width={1200} height={900} />
                <span className="absolute top-4 left-4 bg-background/90 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary">
                  {p.tag}
                </span>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl text-primary mb-2">{p.name}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{p.copy}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground/70 border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-xl text-primary-foreground">Stellar</span>
            <span className="uppercase tracking-[0.25em]">Foods</span>
          </div>
          <div>© {new Date().getFullYear()} Stellar Seeds (Pvt) Ltd · Product of Zimbabwe</div>
        </div>
      </footer>
      <img src={heroBowl} alt="" className="hidden" aria-hidden />
    </div>
  );
}