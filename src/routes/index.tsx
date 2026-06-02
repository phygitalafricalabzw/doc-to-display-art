import { createFileRoute } from "@tanstack/react-router";
import heroBowl from "@/assets/hero-bowl.jpg";
import field from "@/assets/field.jpg";
import groats from "@/assets/groats.jpg";
import porridge from "@/assets/porridge.jpg";
import meal from "@/assets/meal.jpg";
import flour from "@/assets/flour.jpg";
import tea from "@/assets/tea.jpg";
import honey from "@/assets/honey.jpg";
import kasha from "@/assets/kasha.jpg";

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

const products = [
  { name: "Buckwheat Groats", tag: "Whole grain", img: groats, copy: "Clean, hulled whole grains — mild in flavour and rich in complete plant protein. For porridge, soups, salads and snack mixes." },
  { name: "Instant Porridge", tag: "Ready in minutes", img: porridge, copy: "A fast-cooking, nutrient-dense breakfast cereal. Gluten-free, high in fibre, with a smooth nutty finish." },
  { name: "Buckwheat Meal", tag: "Coarse ground", img: meal, copy: "A wholesome, coarse-ground meal with earthy taste — a nourishing alternative to maize or sorghum." },
  { name: "Buckwheat Flour", tag: "Stone-milled", img: flour, copy: "Finely milled from premium Zimbabwean buckwheat. Naturally gluten-free for pancakes, breads and rotis." },
  { name: "Buckwheat Tea", tag: "Loose leaf", img: tea, copy: "A toasted, caffeine-free infusion with a soft amber colour and a clean, malty aroma." },
  { name: "Buckwheat Honey", tag: "Raw apiary", img: honey, copy: "Dark, mineral-rich honey gathered from hives set among our buckwheat fields." },
  { name: "Buckwheat Kasha", tag: "Unroasted", img: kasha, copy: "Gently hulled, unroasted grains preserving full nutritional value and a mild, natural flavour." },
];

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
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-16 md:pt-24 pb-20 grid md:grid-cols-12 gap-10 items-end">
        <div className="md:col-span-7">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
            Est. 2024 · Arcturus, Zimbabwe
          </div>
          <h1 className="font-display font-light text-[clamp(3rem,8vw,7.5rem)] leading-[0.95] tracking-tight text-primary">
            The smart<br/>
            <em className="italic font-normal text-accent">supergrain</em><br/>
            from Zimbabwe.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-foreground/75 leading-relaxed">
            Stellar Foods cultivates, mills and markets nutritious buckwheat products — gluten-free, antioxidant-rich, and grown in partnership with local farmers across the Zimbabwean highlands.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#products" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm hover:bg-primary/90 transition">
              Explore the range
            </a>
            <a href="#about" className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-7 py-3.5 text-sm text-primary hover:bg-primary/5 transition">
              Our story
            </a>
          </div>
        </div>
        <div className="md:col-span-5 relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img src={heroBowl} alt="A wooden bowl filled with raw buckwheat groats on linen" className="h-full w-full object-cover" width={1600} height={1280} />
          </div>
          <div className="absolute -left-6 -bottom-6 bg-accent text-accent-foreground rounded-full size-32 flex flex-col items-center justify-center text-center shadow-lg">
            <span className="font-display text-3xl leading-none">100%</span>
            <span className="text-[10px] uppercase tracking-[0.2em] mt-1">Natural</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Gluten-Free", "High Protein", "Antioxidant Rich", "Locally Grown", "No Preservatives", "Sustainably Sourced"];
  return (
    <div className="border-y border-border/60 bg-cream/40 py-5 overflow-hidden">
      <div className="flex gap-12 animate-[scroll_30s_linear_infinite] whitespace-nowrap font-display text-xl text-primary/80 italic">
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
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">About</div>
        <h2 className="font-display text-5xl md:text-6xl leading-[1.05] text-primary">
          Forward-thinking food, rooted in Zimbabwean soil.
        </h2>
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
      <div className="relative mx-auto max-w-7xl px-6 py-28 grid md:grid-cols-2 gap-16 text-primary-foreground">
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
    </section>
  );
}

function Values() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <div className="flex items-end justify-between mb-16">
        <h2 className="font-display text-5xl md:text-6xl text-primary max-w-2xl">Our core values</h2>
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground hidden md:block">What we stand on</div>
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
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">The range</div>
            <h2 className="font-display text-5xl md:text-6xl text-primary leading-[1.05]">
              Seven ways to discover <em className="italic text-accent">buckwheat.</em>
            </h2>
          </div>
          <p className="md:col-span-4 md:col-start-9 text-foreground/70 leading-relaxed">
            Antioxidant-rich foods play a major role in preventing non-communicable diseases. Buckwheat consistently shows superior antioxidant activity — and tastes wonderful too.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <article
              key={p.name}
              className={`group bg-background border border-border/60 overflow-hidden ${i === 0 ? "lg:col-span-2" : ""}`}
            >
              <div className={`relative overflow-hidden ${i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                <img src={p.img} alt={p.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" width={1200} height={900} />
                <span className="absolute top-4 left-4 bg-background/90 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary">
                  {p.tag}
                </span>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl text-primary mb-2">{p.name}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{p.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Directors() {
  return (
    <section id="directors" className="mx-auto max-w-7xl px-6 py-28">
      <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">Leadership</div>
      <h2 className="font-display text-5xl md:text-6xl text-primary mb-16 max-w-3xl">Meet our directors.</h2>

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
          <div className="text-xs uppercase tracking-[0.3em] opacity-70 mb-6">Get in touch</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
            Let's grow<br/>
            <em className="italic text-accent">something good.</em>
          </h2>
          <p className="mt-8 max-w-md opacity-80 leading-relaxed">
            For wholesale enquiries, farming partnerships, or to bring our buckwheat range to your shelves — we'd love to hear from you.
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
