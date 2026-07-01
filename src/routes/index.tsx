import { createFileRoute, Link } from "@tanstack/react-router";
import heroBowl from "@/assets/hero-bowl.jpg";
import { products } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stellar Foods — Buckwheat Goodness, Highland Grown" },
      { name: "description", content: "Bold, single-origin buckwheat from the highlands of Zimbabwe. Groats, flour, porridge, kasha, tea, honey and meal — all from one field." },
      { property: "og:title", content: "Stellar Foods — Buckwheat Goodness" },
      { property: "og:description", content: "Single-origin buckwheat from the Zimbabwean highlands." },
      { property: "og:image", content: heroBowl },
      { name: "twitter:image", content: heroBowl },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-sun text-soot overflow-x-hidden">
      <TopMarquee />
      <Nav />
      <Hero />
      <ProductMarquee />
      <Range />
      <Why />
      <BigQuote />
      <HowToEat />
      <Wholesale />
      <Footer />
    </div>
  );
}

function TopMarquee() {
  const text = "STELLAR FOODS ★ HIGHLAND GROWN ★ SINGLE ORIGIN ★ ZIMBABWE ★ BUCKWHEAT GOODNESS ★ ";
  return (
    <div className="bg-soot text-sun py-3 overflow-hidden border-b-2 border-soot">
      <div className="marquee-track font-display text-sm tracking-wider">
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i}>{text}</span>
        ))}
      </div>
    </div>
  );
}

function ProductMarquee() {
  const names = products.map((p) => p.name.toUpperCase()).join(" ★ ") + " ★ ";
  return (
    <div className="bg-leaf text-sun py-6 overflow-hidden border-y-2 border-soot">
      <div className="marquee-track font-display text-2xl md:text-4xl tracking-tight">
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i}>{names}</span>
        ))}
      </div>
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-sun border-b-2 border-soot">
      <div className="mx-auto max-w-[1400px] px-6 py-4 flex items-center justify-between gap-6">
        <Link to="/" className="font-display text-2xl md:text-3xl tracking-tight">
          STELLAR<span className="text-tomato">★</span>FOODS
        </Link>
        <nav className="hidden md:flex items-center gap-6 font-display text-sm">
          <a href="#range" className="hover:text-tomato">SHOP</a>
          <a href="#why" className="hover:text-tomato">WHY</a>
          <a href="#howto" className="hover:text-tomato">HOW</a>
          <a href="#wholesale" className="hover:text-tomato">WHOLESALE</a>
        </nav>
        <a href="#range" className="chunky-btn text-sm !py-2 !px-4">
          SHOP →
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-sun border-b-2 border-soot relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:py-24 grid lg:grid-cols-12 gap-10 items-center min-h-[80vh]">
        <div className="lg:col-span-7">
          <span className="h-eyebrow mb-6">Est. 2024 · Arcturus, Zimbabwe</span>
          <h1 className="h-display text-soot mt-6">
            BUCK<br />WHEAT<br /><span className="text-tomato">GOODNESS.</span>
          </h1>
          <p className="lead mt-8 max-w-xl">
            Loud, honest, single-origin buckwheat from a family farm in the Zimbabwean highlands. Seven products. One field. Zero shortcuts.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#range" className="chunky-btn">SHOP THE RANGE →</a>
            <a href="#wholesale" className="chunky-btn-outline">WHOLESALE ↓</a>
          </div>
        </div>

        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[420px]">
          <div className="relative w-[85%] aspect-square">
            <div className="absolute inset-0 rounded-full bg-tomato border-2 border-soot" style={{ boxShadow: "10px 10px 0 var(--soot)", transform: "rotate(-4deg)" }} />
            <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-soot bg-bone">
              <img src={heroBowl} alt="Bowl of buckwheat groats" className="h-full w-full object-cover" />
            </div>
            <span className="sticker absolute -top-4 -right-2 !bg-sun rotate-12">★ 100% NATURAL</span>
            <span className="sticker absolute -bottom-2 -left-4 !bg-leaf !text-sun -rotate-6">MADE IN ZW</span>
            <span className="sticker absolute top-1/3 -right-8 rotate-6">GLUTEN FREE</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Range() {
  const rotations = ["rotate-[-2deg]", "rotate-[1deg]", "rotate-[-1deg]", "rotate-[2deg]", "rotate-[-1.5deg]", "rotate-[1.5deg]", "rotate-[-2deg]"];
  return (
    <section id="range" className="bg-leaf text-sun border-b-2 border-soot">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-8 mb-14 items-end">
          <div className="lg:col-span-8">
            <span className="h-eyebrow mb-6 !bg-sun !text-soot">The Range · 7 titles</span>
            <h2 className="h-display mt-6">FROM<br />FIELD<br /><span className="text-tomato">TO JAR.</span></h2>
          </div>
          <p className="lg:col-span-4 text-sun/90 text-lg font-medium">
            One field. One process. Seven ways to eat it. Tap any tin to open its page.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <Link
              key={p.slug}
              to="/products/$slug"
              params={{ slug: p.slug }}
              className={`poster-card block overflow-hidden ${rotations[i]}`}
            >
              <div className={`relative aspect-square overflow-hidden border-b-2 border-soot ${i % 3 === 0 ? "bg-tomato" : i % 3 === 1 ? "bg-sun" : "bg-leaf"}`}>
                <img src={p.img} alt={p.name} className="h-full w-full object-cover mix-blend-multiply" loading="lazy" />
                <span className="absolute top-3 left-3 sticker !text-xs">N°0{i + 1}</span>
              </div>
              <div className="p-5 text-soot bg-bone">
                <span className="tape mb-3">{p.tag}</span>
                <h3 className="font-display text-2xl leading-none mt-2">{p.name.toUpperCase()}</h3>
                <p className="text-sm mt-3 leading-snug">{p.copy}</p>
                <span className="mt-4 inline-flex items-center gap-1 font-display text-sm text-tomato">READ →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  const stats = [
    { n: "01", stat: "0%", label: "GLUTEN. ZERO. NADA.", note: "Naturally gluten-free grain, safe for coeliacs and light on gut." },
    { n: "02", stat: "100%", label: "SINGLE ORIGIN", note: "Grown, hulled and packed at our family farm in Arcturus, Zimbabwe." },
    { n: "03", stat: "7", label: "PRODUCTS · ONE FIELD", note: "Groats, meal, flour, porridge, kasha, tea and dark buckwheat honey." },
  ];
  return (
    <section id="why" className="bg-sun border-b-2 border-soot">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:py-36">
        <span className="h-eyebrow mb-8">Why buckwheat?</span>
        <h2 className="h-display mt-6 max-w-5xl">
          A TINY SEED WITH<br /><span className="text-tomato">BIG ARGUMENTS.</span>
        </h2>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {stats.map((s) => (
            <div key={s.n} className="poster-card p-8">
              <div className="w-16 h-16 rounded-full bg-tomato border-2 border-soot flex items-center justify-center font-display text-xl text-bone mb-6" style={{ boxShadow: "3px 3px 0 var(--soot)" }}>
                {s.n}
              </div>
              <div className="font-display text-6xl leading-none">{s.stat}</div>
              <div className="font-display text-lg mt-3">{s.label}</div>
              <p className="mt-4 text-soot/80">{s.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BigQuote() {
  return (
    <section className="bg-tomato text-soot border-b-2 border-soot">
      <div className="mx-auto max-w-[1200px] px-6 py-28 lg:py-40 text-center">
        <span className="sticker !bg-sun mb-8 rotate-[-3deg]">★ WORD FROM THE FARM</span>
        <blockquote className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] mt-6">
          "SMALL GRAIN.<br />BIG APPETITE.<br /><span className="text-bone">NO NONSENSE."</span>
        </blockquote>
        <div className="mt-10 sticker !bg-soot !text-sun rotate-2">— THE STELLAR CREW</div>
      </div>
    </section>
  );
}

function HowToEat() {
  const uses = [
    { emoji: "🥣", title: "PORRIDGE", note: "Hot bowl, 3 minutes, top with honey.", color: "bg-sun" },
    { emoji: "🥞", title: "PANCAKES", note: "Buckwheat flour + milk + egg. Flip.", color: "bg-tomato" },
    { emoji: "🍵", title: "TEA", note: "Steep, sip, repeat. Caffeine-free.", color: "bg-leaf" },
    { emoji: "🫙", title: "HONEY", note: "Dark, malty, straight from the spoon.", color: "bg-sun" },
    { emoji: "🥗", title: "SALADS", note: "Sprouted kasha over greens.", color: "bg-leaf" },
    { emoji: "🍞", title: "BREAD", note: "Loaves, rotis, chapatis. All good.", color: "bg-tomato" },
  ];
  return (
    <section id="howto" className="bg-bone border-b-2 border-soot">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:py-36">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <span className="h-eyebrow mb-6">How to eat it</span>
            <h2 className="h-display mt-6">EAT IT<br /><span className="text-tomato">ANY WAY.</span></h2>
          </div>
          <p className="max-w-md text-lg">Buckwheat plays nice with sweet, savoury, hot, cold — even the kettle.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {uses.map((u, i) => (
            <div key={u.title} className={`poster-card p-8 ${i % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]"}`}>
              <div className={`w-20 h-20 rounded-full border-2 border-soot flex items-center justify-center text-4xl ${u.color}`} style={{ boxShadow: "3px 3px 0 var(--soot)" }}>
                {u.emoji}
              </div>
              <h3 className="font-display text-3xl mt-6">{u.title}</h3>
              <p className="mt-3 text-soot/80">{u.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Wholesale() {
  return (
    <section id="wholesale" className="bg-soot text-sun border-b-2 border-soot">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:py-36 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <span className="h-eyebrow mb-8 !bg-sun !text-soot">Wholesale · Export · Private label</span>
          <h2 className="h-display mt-6">LET'S<br />TALK<br /><span className="text-tomato">BULK.</span></h2>
          <p className="mt-8 max-w-xl text-lg text-sun/85">
            Bakeries, distributors, hotels, export partners — we pack from 5&nbsp;kg sacks to 25&nbsp;kg. Single-origin, fully traceable, straight from Arcturus.
          </p>
          <a
            href="mailto:stellarfoods25@gmail.com?subject=Wholesale%20enquiry"
            className="chunky-btn !bg-sun !text-soot mt-10"
          >
            EMAIL THE FARM →
          </a>
        </div>
        <div className="lg:col-span-5 space-y-4">
          <ContactRow label="ADDRESS" value="290 Mt. Olympus, Arcturus, ZW" />
          <ContactRow label="PHONE" value="+263 71 923 2075" href="tel:+263719232075" />
          <ContactRow label="EMAIL" value="stellarfoods25@gmail.com" href="mailto:stellarfoods25@gmail.com" />
          <ContactRow label="REG. NO." value="Stellar Seeds (Pvt) Ltd · 4395/2024" />
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href?: string }) {
  const inner = href ? (
    <a href={href} className="hover:text-tomato transition-colors">{value}</a>
  ) : (
    value
  );
  return (
    <div className="bg-sun text-soot border-2 border-soot rounded-2xl px-5 py-4 flex items-center justify-between gap-4" style={{ boxShadow: "4px 4px 0 var(--tomato)" }}>
      <span className="font-display text-xs tracking-wider">{label}</span>
      <span className="font-display text-lg text-right">{inner}</span>
    </div>
  );
}

function Footer() {
  const text = "★ STAY LOUD ★ EAT WHOLE ★ BUY DIRECT ★ ";
  return (
    <footer className="bg-leaf text-sun">
      <div className="mx-auto max-w-[1400px] px-6 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="font-display text-4xl">STELLAR<span className="text-tomato">★</span>FOODS</div>
          <p className="mt-4 text-sun/80 max-w-xs">Buckwheat goodness from the Zimbabwean highlands, since 2024.</p>
        </div>
        <div>
          <div className="font-display text-sm tracking-widest text-sun/70 mb-4">SHOP</div>
          <ul className="space-y-2">
            {products.slice(0, 4).map((p) => (
              <li key={p.slug}>
                <Link to="/products/$slug" params={{ slug: p.slug }} className="hover:text-tomato font-display">
                  {p.name.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-display text-sm tracking-widest text-sun/70 mb-4">FIND US</div>
          <p className="font-display">290 MT. OLYMPUS</p>
          <p className="font-display">ARCTURUS, ZW</p>
          <p className="mt-3">stellarfoods25@gmail.com</p>
        </div>
      </div>
      <div className="bg-soot text-sun py-3 overflow-hidden border-t-2 border-soot">
        <div className="marquee-track font-display text-sm tracking-wider">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i}>{text}</span>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-[1400px] px-6 py-6 text-xs text-sun/70 flex justify-between">
        <span>© {new Date().getFullYear()} Stellar Seeds (Pvt) Ltd</span>
        <span>PRODUCT OF ZIMBABWE</span>
      </div>
    </footer>
  );
