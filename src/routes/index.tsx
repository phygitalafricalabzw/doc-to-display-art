import { createFileRoute, Link } from "@tanstack/react-router";
import heroBowl from "@/assets/hero-bowl.jpg";
import { products } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stellar Foods — Highland Buckwheat, Done Properly" },
      { name: "description", content: "Single-origin buckwheat from the Zimbabwean highlands. Ten products — seed, groats, kasha, porridge, meal, meal blend, flour, tea, honey and peanut butter — grown, milled and packed on one family farm." },
      { property: "og:title", content: "Stellar Foods — Highland Buckwheat" },
      { property: "og:description", content: "Single-origin buckwheat from the Zimbabwean highlands." },
      { property: "og:image", content: heroBowl },
      { name: "twitter:image", content: heroBowl },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Hero />
      <TrustStrip />
      <Range />
      <Story />
      <WholesaleSlab />
      <Contact />
      <Footer />
    </div>
  );
}

function TopBar() {
  return (
    <header className="sticky top-0 z-40 bg-canvas/90 backdrop-blur border-b border-line">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="font-display font-bold text-xl tracking-tight text-ink">
          Stellar<span className="text-ember">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-ink-soft">
          <a href="#range" className="hover:text-ink transition-colors">Range</a>
          <a href="#story" className="hover:text-ink transition-colors">Story</a>
          <a href="#wholesale" className="hover:text-ink transition-colors">Wholesale</a>
          <a href="#contact" className="hover:text-ink transition-colors">Contact</a>
        </nav>
        <a href="#range" className="btn-primary text-sm">Shop the range</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <span className="h-eyebrow rule-eyebrow mb-8">STELLAR FOODS · EST. 2024</span>
          <h1 className="h-display mt-6 text-ink">
            Buckwheat,<br />
            done{" "}
            <span className="relative inline-block">
              properly
              <svg className="absolute -bottom-2 left-0 w-full" height="14" viewBox="0 0 300 14" fill="none" preserveAspectRatio="none">
                <path d="M2 8 Q 75 2, 150 7 T 298 6" stroke="var(--ember)" strokeWidth="4" strokeLinecap="round" fill="none" />
              </svg>
            </span>
            .
          </h1>
          <p className="lead mt-8 max-w-xl">
            Single-origin buckwheat grown, milled and packed on a family farm in the Zimbabwean highlands. Ten honest products from one family farm — nothing added, nothing hidden.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#range" className="btn-primary">Explore the range <span aria-hidden>→</span></a>
            <a href="#wholesale" className="btn-ghost">Wholesale enquiry</a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-3xl overflow-hidden bg-fresh-tint aspect-square">
            <img src={heroBowl} alt="Bowl of highland buckwheat groats" className="h-full w-full object-cover" />
          </div>
          <div className="mt-6 grid grid-cols-3 divide-x divide-line border-y border-line">
            {[
              { n: "7", label: "Products" },
              { n: "100%", label: "Natural" },
              { n: "ZW", label: "Highlands" },
            ].map((m) => (
              <div key={m.label} className="py-4 px-3 text-center">
                <div className="font-display text-2xl text-ink"><span className="text-ember">·</span> {m.n}</div>
                <div className="text-xs text-ink-soft uppercase tracking-widest mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = ["Single Origin", "Family Farmed", "Naturally Gluten-Free", "Traceable", "Highland Grown", "Small Batch"];
  return (
    <section className="border-b border-line bg-canvas">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
        {items.map((i) => (
          <span key={i} className="text-xs font-medium tracking-[0.2em] uppercase text-ink-soft">{i}</span>
        ))}
      </div>
    </section>
  );
}

function Range() {
  return (
    <section id="range" className="bg-fresh-tint border-b border-line">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-8">
            <span className="h-eyebrow rule-eyebrow mb-6">The range</span>
            <h2 className="h-display mt-4 text-ink" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
              Ten products. One field.
            </h2>
          </div>
          <p className="lg:col-span-4 lead">
            Each product traces back to the same field — cleaned, milled or roasted with care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
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
                <h3 className="font-display font-semibold text-2xl mt-2 text-ink">{p.name}</h3>
                <p className="text-sm text-ink-soft mt-3 leading-relaxed">{p.copy}</p>
                <span className="btn-link mt-5">View product <span aria-hidden>→</span></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Story() {
  const stats = [
    { n: "0%", label: "Gluten", note: "Naturally gluten-free, safe for coeliac diets." },
    { n: "100%", label: "Single origin", note: "Grown, hulled and packed on one family farm." },
    { n: "7", label: "Products", note: "Groats, meal, flour, porridge, kasha, tea and honey." },
  ];
  return (
    <section id="story" className="border-b border-line">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-6">
          <span className="h-eyebrow rule-eyebrow mb-6">The story</span>
          <h2 className="h-sub mt-6 text-ink">
            A grain built for the way we eat now.
          </h2>
          <p className="lead mt-6">
            Buckwheat is not a wheat — it is a resilient seed that thrives at altitude, needs almost nothing to grow, and gives back a complete plant protein with the fibre and minerals modern diets are missing.
          </p>
          <a href="#wholesale" className="btn-ghost mt-8">Read the full story</a>
        </div>
        <div className="lg:col-span-6 lg:pl-8">
          <div className="divide-y divide-line border-y border-line">
            {stats.map((s) => (
              <div key={s.label} className="py-8 grid grid-cols-[auto_1fr] gap-6 items-baseline">
                <div className="font-display font-bold text-5xl lg:text-6xl text-ink leading-none">
                  {s.n}
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.14em] text-ember font-semibold">{s.label}</div>
                  <p className="text-ink-soft mt-2">{s.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WholesaleSlab() {
  return (
    <section id="wholesale" className="slab border-b border-line">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <span className="h-eyebrow rule-eyebrow mb-6" style={{ color: "var(--ember)" }}>Wholesale</span>
          <h2 className="h-display mt-6 text-canvas">
            Built for kitchens, retailers &amp; exporters.
          </h2>
        </div>
        <div className="lg:col-span-5">
          <p className="text-lg leading-relaxed text-canvas/85">
            We pack from 500&nbsp;g retail to 25&nbsp;kg sacks. Single-origin, fully traceable, packed and shipped from Arcturus.
          </p>
          <ul className="mt-8 space-y-3">
            {["Bulk packs 5–25 kg", "Private label available", "Export documentation ready"].map((line) => (
              <li key={line} className="flex items-center gap-3 text-canvas/90">
                <span className="w-1.5 h-1.5 rounded-full bg-ember" aria-hidden />
                {line}
              </li>
            ))}
          </ul>
          <a
            href="mailto:stellarfoods25@gmail.com?subject=Wholesale%20enquiry"
            className="btn-primary mt-10"
            style={{ background: "var(--canvas)", color: "var(--ink)", borderColor: "var(--canvas)" }}
          >
            Start a conversation <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-b border-line">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-24 lg:py-28 grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <span className="h-eyebrow rule-eyebrow mb-6">Get in touch</span>
          <h2 className="h-sub mt-6 text-ink">Talk to us.</h2>
          <p className="lead mt-4">For orders, wholesale, private label or a farm visit — we reply within a working day.</p>
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          <ContactCard label="Email" value="stellarfoods25@gmail.com" href="mailto:stellarfoods25@gmail.com" />
          <ContactCard label="Phone" value="+263 71 923 2075" href="tel:+263719232075" />
          <ContactCard label="Farm" value="290 Mt. Olympus, Arcturus, ZW" />
          <ContactCard label="Registration" value="Stellar Seeds (Pvt) Ltd" />
        </div>
      </div>
    </section>
  );
}

function ContactCard({ label, value, href }: { label: string; value: string; href?: string }) {
  const body = href ? (
    <a href={href} className="inline-flex items-center gap-2 hover:text-ember transition-colors">
      {value} <span aria-hidden className="text-ember">→</span>
    </a>
  ) : (
    value
  );
  return (
    <div className="soft-card p-6">
      <div className="text-xs uppercase tracking-[0.14em] text-ember font-semibold">{label}</div>
      <div className="mt-2 font-display font-semibold text-lg text-ink">{body}</div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-canvas">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="font-display font-bold text-2xl text-ink">Stellar<span className="text-ember">.</span></div>
          <p className="mt-4 text-ink-soft max-w-sm">Highland buckwheat from Zimbabwe. Ten products, one field, since 2024.</p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.14em] text-ink-soft mb-4">Shop</div>
          <ul className="space-y-2">
            {products.slice(0, 4).map((p) => (
              <li key={p.slug}>
                <Link to="/products/$slug" params={{ slug: p.slug }} className="text-ink hover:text-ember transition-colors">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.14em] text-ink-soft mb-4">Company</div>
          <ul className="space-y-2 text-ink">
            <li><a href="#story" className="hover:text-ember transition-colors">Our story</a></li>
            <li><a href="#wholesale" className="hover:text-ember transition-colors">Wholesale</a></li>
            <li><a href="#contact" className="hover:text-ember transition-colors">Contact</a></li>
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
