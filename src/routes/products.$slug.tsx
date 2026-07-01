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
    <div className="min-h-screen bg-sun text-soot flex items-center justify-center px-6">
      <div className="text-center">
        <div className="sticker mb-6">404 · NOT HERE</div>
        <h1 className="h-display mb-8">WRONG<br /><span className="text-tomato">SHELF.</span></h1>
        <Link to="/" className="chunky-btn">← BACK TO SHOP</Link>
      </div>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-screen bg-sun text-soot flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="h-display mb-6">OOPS.</h1>
        <button onClick={reset} className="chunky-btn">TRY AGAIN →</button>
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

  const heroBgs = ["bg-tomato", "bg-leaf", "bg-sun", "bg-tomato", "bg-leaf", "bg-sun", "bg-tomato"];
  const heroBg = heroBgs[index % heroBgs.length];

  return (
    <div className="min-h-screen bg-sun text-soot overflow-x-hidden">
      {/* Marquee */}
      <div className="bg-soot text-sun py-3 overflow-hidden border-b-2 border-soot">
        <div className="marquee-track font-display text-sm tracking-wider">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i}>★ STELLAR FOODS ★ N°{n} · {product.name.toUpperCase()} ★ HIGHLAND GROWN ★ </span>
          ))}
        </div>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 bg-sun border-b-2 border-soot">
        <div className="mx-auto max-w-[1400px] px-6 py-4 flex items-center justify-between gap-6">
          <Link to="/" className="font-display text-2xl md:text-3xl tracking-tight">
            STELLAR<span className="text-tomato">★</span>FOODS
          </Link>
          <Link to="/" className="sticker !bg-tomato !text-bone">← BACK TO SHOP</Link>
          <a href={wholesaleMail} className="hidden md:inline-flex chunky-btn text-sm !py-2 !px-4">
            WHOLESALE →
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-sun border-b-2 border-soot">
        <div className="mx-auto max-w-[1400px] px-6 py-16 lg:py-24 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="h-eyebrow mb-6">N°{n} · {product.tag}</span>
            <h1 className="h-display mt-6">
              {product.name.toUpperCase().split(" ").map((w, i, arr) => (
                <span key={i} className={i === arr.length - 1 ? "text-tomato" : ""}>
                  {w}
                  {i < arr.length - 1 ? <br /> : ""}
                </span>
              ))}
            </h1>
            <p className="lead mt-8 max-w-xl">{product.tagline}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={wholesaleMail} className="chunky-btn">WHOLESALE INQUIRY →</a>
              <Link to="/" hash="range" className="chunky-btn-outline">FIND A STOCKIST</Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[420px]">
            <div className="relative w-[85%] aspect-square">
              <div className={`absolute inset-0 rounded-full border-2 border-soot ${heroBg}`} style={{ boxShadow: "10px 10px 0 var(--soot)", transform: "rotate(-4deg)" }} />
              <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-soot bg-bone">
                <img src={product.img} alt={product.name} className="h-full w-full object-cover" />
              </div>
              <span className="sticker absolute -top-3 -right-2 !bg-sun rotate-12">N°{n}</span>
              <span className="sticker absolute -bottom-2 -left-2 !bg-leaf !text-sun -rotate-6">{product.tag.toUpperCase()}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="bg-bone border-b-2 border-soot">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:py-32">
          <span className="h-eyebrow mb-6">Why it matters</span>
          <h2 className="h-display mt-6 max-w-4xl">THE<br /><span className="text-tomato">STORY.</span></h2>
          <div className="mt-12 grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7 space-y-6 text-lg leading-relaxed">
              {product.description.map((para, i) => <p key={i}>{para}</p>)}
            </div>
            <div className="lg:col-span-5 space-y-5">
              {product.highlights.map((h, i) => (
                <div key={h} className="poster-card p-5 flex items-center gap-5">
                  <div className="shrink-0 w-14 h-14 rounded-full bg-tomato border-2 border-soot flex items-center justify-center font-display text-lg text-bone" style={{ boxShadow: "3px 3px 0 var(--soot)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="font-display text-xl leading-tight">{h.toUpperCase()}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pack & supply */}
      <section className="bg-leaf text-sun border-b-2 border-soot">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <span className="h-eyebrow mb-6 !bg-sun !text-soot">Pack &amp; supply</span>
              <h2 className="h-display mt-6">HOW IT<br /><span className="text-tomato">SHIPS.</span></h2>
            </div>
            <a href={wholesaleMail} className="chunky-btn !bg-sun !text-soot">GET A QUOTE →</a>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {product.pack.map((p, i) => (
              <div key={p.label} className={`poster-card p-8 text-soot ${i % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]"}`}>
                <span className="tape mb-4">{p.label}</span>
                <div className="font-display text-4xl mt-4 leading-none">{p.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to enjoy */}
      <section className="bg-tomato text-soot border-b-2 border-soot">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:py-32">
          <span className="h-eyebrow mb-6 !bg-sun !text-soot">Ways to enjoy</span>
          <h2 className="h-display mt-6 max-w-4xl">EAT IT<br /><span className="text-bone">EVERYDAY.</span></h2>
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {product.uses.map((u, i) => (
              <div key={u} className="poster-card p-6 flex items-center gap-6 bg-sun">
                <div className="shrink-0 w-20 h-20 rounded-full bg-soot text-sun border-2 border-soot flex items-center justify-center font-display text-3xl" style={{ boxShadow: "3px 3px 0 var(--tomato)" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="font-display text-2xl leading-tight">{u.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-sun border-b-2 border-soot">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <span className="h-eyebrow mb-6">Keep shopping</span>
              <h2 className="h-display mt-6">MORE FROM<br /><span className="text-tomato">THE RANGE.</span></h2>
            </div>
            <Link to="/" hash="range" className="chunky-btn">SEE ALL 7 →</Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {related.map((p, i) => {
              const idx = products.findIndex((x) => x.slug === p.slug);
              const bgs = ["bg-tomato", "bg-leaf", "bg-sun"];
              return (
                <Link
                  key={p.slug}
                  to="/products/$slug"
                  params={{ slug: p.slug }}
                  className={`poster-card block overflow-hidden ${i % 2 === 0 ? "rotate-[-1.5deg]" : "rotate-[1.5deg]"}`}
                >
                  <div className={`relative aspect-square overflow-hidden border-b-2 border-soot ${bgs[i % 3]}`}>
                    <img src={p.img} alt={p.name} className="h-full w-full object-cover mix-blend-multiply" loading="lazy" />
                    <span className="absolute top-3 left-3 sticker !text-xs">N°{String(idx + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="p-5">
                    <span className="tape mb-3">{p.tag}</span>
                    <h3 className="font-display text-2xl mt-3 leading-none">{p.name.toUpperCase()}</h3>
                    <span className="mt-4 inline-block font-display text-sm text-tomato">READ →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-soot text-sun">
        <div className="mx-auto max-w-[1400px] px-6 py-10 flex flex-wrap items-center justify-between gap-4">
          <div className="font-display text-2xl">STELLAR<span className="text-tomato">★</span>FOODS</div>
          <div className="text-xs text-sun/70">© {new Date().getFullYear()} Stellar Seeds (Pvt) Ltd · Product of Zimbabwe</div>
          <div className="sticker !bg-tomato !text-bone">N°{n} · {product.name.toUpperCase()}</div>
        </div>
      </footer>
    </div>
  );
}