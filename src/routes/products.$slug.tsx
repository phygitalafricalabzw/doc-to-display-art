import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getProduct, products, type Product } from "@/data/products";
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
  const { product } = Route.useLoaderData() as { product: Product };
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);
  const wholesaleMail = `mailto:stellarfoods25@gmail.com?subject=${encodeURIComponent(`Wholesale enquiry — ${product.name}`)}&body=${encodeURIComponent(`Hello Stellar Foods,\n\nI'd like to request wholesale pricing and availability for ${product.name}.\n\nQuantity required:\nDelivery location:\nContact name:\n\nThanks,`)}`;

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

      <section className="mx-auto max-w-7xl px-6 pt-10 pb-24 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-5 flex flex-col space-y-5">
          <div className="relative aspect-[4/5] bg-primary rounded-3xl overflow-hidden shadow-xl">
            <img src={product.img} alt={product.name} className="h-full w-full object-cover" width={1600} height={2000} />
            <span className="absolute top-5 left-5 bg-accent text-accent-foreground px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] rounded-full">
              {product.tag}
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {related.slice(0, 3).map((r) => (
              <Link key={r.slug} to="/products/$slug" params={{ slug: r.slug }} className="aspect-square overflow-hidden rounded-xl bg-cream group">
                <img src={r.img} alt={r.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" loading="lazy" />
              </Link>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7 space-y-8">
          <div>
            <div className="h-eyebrow text-muted-foreground mb-5">{product.tag}</div>
            <h1 className="font-display font-black text-primary leading-[0.9] tracking-tighter text-[clamp(2.75rem,6vw,5rem)]">
              {product.name}
            </h1>
            <p className="mt-4 font-display text-2xl md:text-3xl italic font-light text-accent">{product.tagline}</p>
          </div>

          <div className="space-y-5 text-foreground/80 leading-relaxed text-lg max-w-2xl">
            {product.description.map((para: string, i: number) => <p key={i}>{para}</p>)}
          </div>

          <div className="grid sm:grid-cols-2 gap-5 pt-2">
            <a href="#contact" className="group p-7 border-2 border-primary rounded-2xl flex flex-col justify-between hover:bg-primary transition-colors">
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-accent font-bold mb-2 group-hover:text-accent">Retail</div>
                <h3 className="font-display font-bold text-primary group-hover:text-primary-foreground text-2xl mb-2 leading-tight">Find a stockist</h3>
                <p className="text-sm text-foreground/60 group-hover:text-primary-foreground/70">Individual packs available across Zimbabwe.</p>
              </div>
              <span className="mt-6 inline-flex items-center justify-between w-full py-3 px-5 bg-primary group-hover:bg-accent text-primary-foreground group-hover:text-accent-foreground font-bold rounded-lg transition-colors text-sm uppercase tracking-widest">
                Order from stockist <span aria-hidden>→</span>
              </span>
            </a>

            <a href={wholesaleMail} className="group p-7 border-2 border-accent bg-accent/10 rounded-2xl flex flex-col justify-between hover:bg-accent/20 transition-colors">
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-primary/70 font-bold mb-2">Bulk</div>
                <h3 className="font-display font-bold text-primary text-2xl mb-2 leading-tight">Wholesale & bulk</h3>
                <p className="text-sm text-foreground/70">For bakeries, hotels, distributors and export partners.</p>
              </div>
              <span className="mt-6 inline-flex items-center justify-between w-full py-3 px-5 bg-accent text-accent-foreground font-bold rounded-lg hover:brightness-105 transition-all text-sm uppercase tracking-widest">
                Request pricing <span aria-hidden>→</span>
              </span>
            </a>
          </div>

          <div className="pt-4 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs font-bold uppercase tracking-[0.25em] text-foreground/50">
            <a href="#ways-to-enjoy" className="hover:text-accent transition-colors underline decoration-2 underline-offset-4 decoration-accent/40">Recipe inspiration</a>
            <Link to="/" hash="contact" className="hover:text-accent transition-colors underline decoration-2 underline-offset-4 decoration-accent/40">Talk to us</Link>
            <Link to="/" hash="products" className="hover:text-accent transition-colors">← Back to range</Link>
          </div>
        </div>
      </section>

      <section id="ways-to-enjoy" className="bg-cream/50 border-y border-border/60 py-20 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-12">
          <div>
            <div className="h-eyebrow text-muted-foreground mb-4">Why it matters</div>
            <h3 className="font-display text-3xl text-primary mb-6 leading-none">Real <em className="italic font-light text-accent">reasons.</em></h3>
            <ul className="space-y-4">
              {product.highlights.map((h: string) => (
                <li key={h} className="flex gap-3 items-start">
                  <span className="text-accent mt-1.5">✦</span>
                  <span className="font-display text-xl text-primary leading-snug">{h}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="h-eyebrow text-muted-foreground mb-4">Ways to enjoy</div>
            <h3 className="font-display text-3xl text-primary mb-6 leading-none">Everyday <em className="italic font-light text-accent">uses.</em></h3>
            <ul className="space-y-4">
              {product.uses.map((u: string) => (
                <li key={u} className="border-t border-border/60 pt-4 text-foreground/80">{u}</li>
              ))}
            </ul>
          </div>
          <div>
            <div className="h-eyebrow text-muted-foreground mb-4">Pack & supply</div>
            <h3 className="font-display text-3xl text-primary mb-6 leading-none">Pack <em className="italic font-light text-accent">&amp; supply.</em></h3>
            <dl className="space-y-5">
              {product.pack.map((p: { label: string; value: string }) => (
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
          <h2 className="font-display text-5xl md:text-7xl text-primary leading-none">More from <em className="italic font-light text-accent">the range.</em></h2>
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

      {/* Mobile sticky action bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-primary border-t border-primary-foreground/15 shadow-2xl px-4 py-3 flex gap-3">
        <a href={wholesaleMail} className="flex-1 inline-flex items-center justify-center py-3 px-4 bg-accent text-accent-foreground font-bold rounded-full text-sm uppercase tracking-wider">
          Wholesale
        </a>
        <Link to="/" hash="contact" className="flex-1 inline-flex items-center justify-center py-3 px-4 border-2 border-primary-foreground/30 text-primary-foreground font-bold rounded-full text-sm uppercase tracking-wider">
          Contact
        </Link>
      </div>
    </div>
  );
}