import { createFileRoute, Link } from "@tanstack/react-router";
import heroBowl from "@/assets/hero-bowl.jpg";
import field from "@/assets/field.jpg";
import { products } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stellar Foods — The Smart Supergrain from Zimbabwe" },
      { name: "description", content: "Stellar Foods cultivates and markets high-quality, gluten-free buckwheat products grown in Zimbabwe — groats, flour, porridge, kasha, tea, honey and more." },
      { property: "og:title", content: "Stellar Foods — The Smart Supergrain from Zimbabwe" },
      { property: "og:description", content: "Nutritious, sustainable buckwheat products from the highlands of Zimbabwe." },
      { property: "og:image", content: heroBowl },
      { name: "twitter:image", content: heroBowl },
    ],
  }),
  component: Index,
});

const values = [
  { k: "01", t: "Sustainability", d: "Environmentally friendly cultivation and production practices, from field to finished pack." },
  { k: "02", t: "Community", d: "Empowering local farmers and communities through job creation, education and fair trade." },
  { k: "03", t: "Innovation", d: "Continuously improving our products, processes and the science behind buckwheat." },
  { k: "04", t: "Quality", d: "Premium ingredients sourced from trusted producers, held to a single uncompromising standard." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <MissionVision />
      <Values />
      <Products />
      <Directors />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-tight text-primary">Stellar</span>
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Foods</span>
        </a>
        <nav className="hidden md:flex items-center gap-9 text-sm text-foreground/80">
          <a href="#about" className="hover:text-primary transition">About</a>
          <a href="#products" className="hover:text-primary transition">Products</a>
          <a href="#directors" className="hover:text-primary transition">Leadership</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </nav>
        <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm hover:bg-primary/90 transition">
          Order wholesale
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative bg-primary text-primary-foreground">
      <div className="grid lg:grid-cols-2 min-h-[calc(100vh-77px)]">
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-20 py-20 lg:py-28 space-y-8">
          <span className="text-accent font-semibold tracking-[0.3em] uppercase text-xs">Zimbabwean Grown · Est. 2024</span>
          <h1 className="font-display font-black text-primary-foreground leading-[0.88] tracking-tighter text-[clamp(4rem,12vw,9rem)]">
            Purely<br/>
            <span className="italic font-light text-accent">Stellar.</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-md leading-relaxed">
            Premium, single-origin buckwheat grown in the highlands of Zimbabwe. Nutrient-dense, naturally gluten-free, and ethically sourced for the modern kitchen.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#products" className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground font-bold rounded-full hover:scale-[1.03] transition-transform text-base shadow-lg shadow-black/20">
              Shop the range
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-bold rounded-full hover:border-primary-foreground hover:bg-primary-foreground/5 transition-colors text-base">
              Wholesale inquiry
            </a>
            <a href="#about" className="inline-flex items-center gap-2 px-2 py-4 text-primary-foreground/70 font-medium hover:text-accent transition-colors text-sm underline underline-offset-4 decoration-accent/60">
              Our story
            </a>
          </div>
          <div className="pt-8 flex flex-wrap gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.25em] text-primary-foreground/60 border-t border-primary-foreground/15 mt-4">
            <span className="pt-6">✦ Gluten-free</span>
            <span className="pt-6">✦ Locally grown</span>
            <span className="pt-6">✦ Family-run</span>
          </div>
        </div>
        <div className="relative bg-emerald-deep flex items-center justify-center overflow-hidden min-h-[420px] py-16 lg:py-0">
          <div className="absolute inset-0 opacity-[0.18] mix-blend-overlay" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/natural-paper.png')" }} />
          <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(circle at 70% 40%, var(--gold) 0%, transparent 55%)" }} />
          <div className="absolute z-0 size-[62%] rounded-full border-[3px] border-gold/60" />
          <div className="relative z-10 w-[72%] aspect-square rounded-full shadow-luxe ring-8 ring-gold/30 overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-700">
            <img src={heroBowl} alt="A wooden bowl filled with raw buckwheat groats on linen" className="h-full w-full object-cover" width={1600} height={1600} />
          </div>
          <div className="absolute bottom-8 right-8 z-20 bg-accent text-accent-foreground rounded-full size-28 sm:size-32 flex flex-col items-center justify-center text-center shadow-xl">
            <span className="font-display text-3xl leading-none font-black">100%</span>
            <span className="text-[10px] uppercase tracking-[0.2em] mt-1 font-bold">Natural</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["NATURALLY GLUTEN-FREE", "SINGLE-ORIGIN", "ZIMBABWE-GROWN", "HIGH PROTEIN", "ANTIOXIDANT RICH", "FIELD TO PACK"];
  return (
    <div className="border-y border-border/60 bg-cream/40 py-5 overflow-hidden">
      <div className="flex gap-12 animate-[scroll_30s_linear_infinite] whitespace-nowrap font-display text-2xl text-primary font-bold tracking-tight">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            {t}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-28 grid md:grid-cols-12 gap-12">
      <div className="md:col-span-5">
        <div className="h-eyebrow text-muted-foreground mb-6">About</div>
        <h2 className="h-display text-primary">
          Rooted in<br/>
          <span className="italic font-light text-accent normal-case">the highlands.</span>
        </h2>
        <p className="h-sub mt-6 text-foreground/70 max-w-md">A family farm turned national pantry staple.</p>
      </div>
      <div className="md:col-span-6 md:col-start-7 space-y-6 text-lg leading-relaxed text-foreground/80">
        <p>
          Stellar Foods is a food processing and supply company dedicated to delivering nutritious, high-quality products that meet the needs of modern consumers.
        </p>
        <p>
          We partner with local farmers and trusted producers to source premium ingredients — ensuring freshness, safety and sustainability across our value chain. Driven by innovation and a commitment to excellence, we continue to develop reliable, wholesome food solutions that support healthy living and contribute to the growth of our communities and the broader agricultural sector.
        </p>
        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/60 mt-10">
          <Stat n="20+" l="Years of leadership" />
          <Stat n="7" l="Buckwheat products" />
          <Stat n="100%" l="Product of Zimbabwe" />
        </div>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-display text-4xl text-primary">{n}</div>
      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">{l}</div>
    </div>
  );
}

function MissionVision() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <img src={field} alt="" className="h-full w-full object-cover" loading="lazy" width={1600} height={1000} />
        <div className="absolute inset-0 bg-primary/85" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-28 text-primary-foreground">
        <div className="mb-16 max-w-4xl">
          <div className="h-eyebrow opacity-70 mb-6">What drives us</div>
          <h2 className="h-display">
            We grow <span className="italic font-light text-accent normal-case">what nourishes.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-16">
        <div>
          <div className="text-xs uppercase tracking-[0.3em] opacity-70 mb-6">Mission</div>
          <p className="font-display text-3xl md:text-4xl leading-snug italic">
            “To cultivate and market high-quality buckwheat products that nourish and inspire our customers — prioritising sustainability, community development and innovation.”
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.3em] opacity-70 mb-6">Vision</div>
          <p className="font-display text-3xl md:text-4xl leading-snug italic">
            “To be the leading provider of nutritious and sustainable buckwheat products in Africa.”
          </p>
        </div>
        </div>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <div className="flex items-end justify-between mb-16">
        <div>
          <div className="h-eyebrow text-muted-foreground mb-6">What we stand on</div>
          <h2 className="h-display text-primary">
            Core<br/><span className="italic font-light text-accent normal-case">values.</span>
          </h2>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 border border-border/60">
        {values.map((v) => (
          <div key={v.k} className="bg-background p-10 hover:bg-cream/40 transition group">
            <div className="font-display text-accent text-sm mb-8">{v.k}</div>
            <h3 className="font-display text-2xl text-primary mb-3">{v.t}</h3>
            <p className="text-sm text-foreground/70 leading-relaxed">{v.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="bg-cream/50 py-28 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-12 gap-8 mb-16 items-end">
          <div className="md:col-span-7">
            <div className="h-eyebrow text-muted-foreground mb-6">Seven · Gluten-free · Single-origin</div>
            <h2 className="h-display text-primary">
              The<br/><span className="italic font-light text-accent normal-case">range.</span>
            </h2>
          </div>
          <p className="md:col-span-4 md:col-start-9 h-sub text-foreground/70">
            From whole groats to dark apiary honey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <Link
              key={p.slug}
              to="/products/$slug"
              params={{ slug: p.slug }}
              className={`group bg-background border border-border/60 overflow-hidden block ${i === 0 ? "lg:col-span-2" : ""}`}
            >
              <div className={`relative overflow-hidden ${i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                <img src={p.img} alt={p.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" width={1200} height={900} />
                <span className="absolute top-4 left-4 bg-background/90 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary">
                  {p.tag}
                </span>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl text-primary mb-2 group-hover:text-accent transition">{p.name}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{p.copy}</p>
                <span className="mt-4 inline-block text-xs uppercase tracking-[0.25em] text-accent">Discover →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Directors() {
  return (
    <section id="directors" className="mx-auto max-w-7xl px-6 py-28">
      <div className="h-eyebrow text-muted-foreground mb-6">Leadership</div>
      <h2 className="h-display text-primary">
        The <span className="italic font-light text-accent normal-case">people</span><br/>behind it.
      </h2>
      <p className="h-sub mt-6 mb-16 text-foreground/70">Two founders. One harvest.</p>

      <div className="grid md:grid-cols-2 gap-16">
        <Director
          name="Kumbirai Zephaniah Mudadada"
          role="Co-Founder & Director"
          bio="With over 20 years of managerial expertise and an MBA in Accounting and Human Resources, Kumbirai has shaped Stellar Seeds into a trusted name in agriculture. He also directs Apee Construction and One Touch Electrical Services, and serves as General Manager of Wengara Estates — a farming venture focused on small grains and food security."
          initials="KM"
        />
        <Director
          name="Pardon Mugari"
          role="Co-Founder & Director"
          bio="An educationist and chemistry teacher, Pardon holds a BSc and MSc in Chemistry and is pursuing a PhD in Natural Products Chemistry focused on anti-diabetic phytocompounds. He founded the Hilbright Group of Science Colleges and dedicates much of his time to farming, apiculture and community empowerment."
          initials="PM"
        />
      </div>
    </section>
  );
}

function Director({ name, role, bio, initials }: { name: string; role: string; bio: string; initials: string }) {
  return (
    <article className="border-t border-primary/20 pt-8">
      <div className="flex items-center gap-5 mb-6">
        <div className="size-16 rounded-full bg-primary text-primary-foreground font-display text-xl flex items-center justify-center">
          {initials}
        </div>
        <div>
          <h3 className="font-display text-2xl text-primary leading-tight">{name}</h3>
          <div className="text-sm text-muted-foreground italic">{role}</div>
        </div>
      </div>
      <p className="text-foreground/75 leading-relaxed">{bio}</p>
    </article>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-28 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-6">
          <div className="h-eyebrow opacity-70 mb-6">Get in touch</div>
          <h2 className="h-display">
            Let's <span className="italic font-light text-accent normal-case">talk</span><br/>trade.
          </h2>
          <p className="h-sub mt-8 max-w-md opacity-85">
            Wholesale, export and private-label enquiries.
          </p>
        </div>
        <div className="md:col-span-5 md:col-start-8 space-y-8 text-lg">
          <ContactRow label="Address" value="290 Mt. Olympus, Arcturus, Zimbabwe" />
          <ContactRow label="Telephone" value="+263 71 923 2075" href="tel:+263719232075" />
          <ContactRow label="Email" value="stellarfoods25@gmail.com" href="mailto:stellarfoods25@gmail.com" />
          <ContactRow label="Registered" value="Stellar Seeds (Private) Limited · No. 4395/2024" />
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href?: string }) {
  const content = href ? (
    <a href={href} className="hover:text-accent transition">{value}</a>
  ) : (
    <span>{value}</span>
  );
  return (
    <div className="border-t border-primary-foreground/20 pt-4">
      <div className="text-[10px] uppercase tracking-[0.25em] opacity-60 mb-2">{label}</div>
      <div className="font-display text-2xl">{content}</div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground/70 border-t border-primary-foreground/10">
      <div className="mx-auto max-w-7xl px-6 py-8 flex flex-wrap items-center justify-between gap-4 text-xs">
        <div className="flex items-baseline gap-2">
          <span className="font-display text-xl text-primary-foreground">Stellar</span>
          <span className="uppercase tracking-[0.25em]">Foods</span>
        </div>
        <div>© {new Date().getFullYear()} Stellar Seeds (Pvt) Ltd · Product of Zimbabwe</div>
      </div>
    </footer>
  );
}
