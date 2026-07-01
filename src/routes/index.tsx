import { createFileRoute, Link } from "@tanstack/react-router";
import heroBowl from "@/assets/hero-bowl.jpg";
import field from "@/assets/field.jpg";
import { products } from "@/data/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stellar Foods — The Highland Journal, Issue N°01" },
      { name: "description", content: "An editorial pantry from the highlands of Zimbabwe. Seven single-origin buckwheat products — groats, flour, porridge, kasha, tea, honey and meal." },
      { property: "og:title", content: "Stellar Foods — The Highland Journal" },
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
      <Masthead />
      <Cover />
      <Contents />
      <Feature />
      <Range />
      <QuoteBand />
      <Directors />
      <Wholesale />
      <Colophon />
    </div>
  );
}

function Masthead() {
  return (
    <header className="sticky top-0 z-40 bg-background border-y border-ink/20 backdrop-blur">
      <div className="mx-auto max-w-[1400px] px-6 py-4 flex items-center justify-between gap-6">
        <a href="#cover" className="folio text-[11px] uppercase tracking-[0.24em] text-ink-soft">
          <span className="text-terracotta">N°01</span> · The Highland Journal · Summer 2026
        </a>
        <nav className="hidden md:flex items-center gap-8 text-[12px] uppercase tracking-[0.18em] text-ink">
          <a href="#feature" className="hover:text-terracotta transition">About</a>
          <a href="#range" className="hover:text-terracotta transition">Range</a>
          <a href="#directors" className="hover:text-terracotta transition">Editors</a>
          <a href="#wholesale" className="hover:text-terracotta transition">Wholesale</a>
        </nav>
        <a href="#wholesale" className="hidden md:inline-flex text-terracotta hover:text-terracotta-deep text-[12px] uppercase tracking-[0.18em] underline underline-offset-4 decoration-terracotta/40">
          Open account →
        </a>
      </div>
    </header>
  );
}

function Cover() {
  return (
    <section id="cover" className="border-b border-ink/15">
      <div className="mx-auto max-w-[1400px] px-6 grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch min-h-[80vh]">
        <div className="lg:col-span-7 flex flex-col justify-between py-16 lg:py-24">
          <div>
            <div className="h-eyebrow mb-10">The Buckwheat Issue</div>
            <h1 className="h-display text-ink">
              Stellar
              <br />
              <span className="italic text-terracotta">Foods.</span>
            </h1>
            <p className="mt-10 max-w-xl h-sub text-ink-soft">
              A single-origin pantry, gathered from the highlands of Zimbabwe — quiet grains, dark honey, a golden cup of tea.
            </p>
          </div>
          <div className="mt-14 pt-6 border-t border-ink/25 grid grid-cols-3 gap-6">
            <MetaCell label="Est." value="2024" />
            <MetaCell label="Origin" value="Zimbabwe" />
            <MetaCell label="Range" value="Seven titles" />
          </div>
        </div>

        <div className="lg:col-span-5 relative min-h-[420px] lg:min-h-0">
          <img
            src={heroBowl}
            alt="Wooden bowl of raw buckwheat groats on linen"
            className="absolute inset-0 h-full w-full object-cover"
            width={1600}
            height={2000}
          />
          <div className="absolute bottom-6 left-6 bg-terracotta text-accent-foreground px-4 py-3">
            <div className="folio text-[10px] uppercase tracking-[0.24em] opacity-80">Cover</div>
            <div className="font-display text-3xl leading-none">N°01</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetaCell({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="byline">{label}</div>
      <div className="font-display text-2xl text-ink leading-tight mt-1">{value}</div>
    </div>
  );
}

function Contents() {
  return (
    <section id="contents" className="border-b border-ink/15 bg-paper-2">
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-10 mb-14 items-end">
          <div className="lg:col-span-5">
            <div className="h-eyebrow mb-6">Contents</div>
            <h2 className="font-display text-5xl md:text-6xl text-ink leading-none">
              Seven <span className="italic text-terracotta">titles.</span>
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 text-ink-soft max-w-xl">
            The full range, listed in order of appearance. Each entry opens on its own page.
          </p>
        </div>
        <ol className="border-t border-ink/25">
          {products.map((p, i) => (
            <li key={p.slug} className="border-b border-ink/25">
              <Link
                to="/products/$slug"
                params={{ slug: p.slug }}
                className="group grid grid-cols-12 items-baseline gap-4 py-6 hover:bg-paper transition-colors"
              >
                <span className="col-span-1 folio text-terracotta text-lg">{String(i + 1).padStart(2, "0")}</span>
                <span className="col-span-6 md:col-span-5 font-display text-2xl md:text-3xl text-ink group-hover:text-terracotta transition-colors">
                  {p.name}
                </span>
                <span className="hidden md:inline-block col-span-4 byline text-ink-soft truncate">{p.tag}</span>
                <span className="col-span-5 md:col-span-2 text-right folio text-ink-soft text-sm">
                  <span className="hidden md:inline text-ink/30 tracking-[0.5em]">····</span> Page {String((i + 1) * 8).padStart(3, "0")} →
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Feature() {
  return (
    <section id="feature" className="border-b border-ink/15">
      <div className="mx-auto max-w-[1400px] px-6 py-32 lg:py-44">
        <div className="h-eyebrow mb-8">Feature · A Field Report</div>
        <h2 className="font-display text-6xl md:text-8xl lg:text-9xl text-ink leading-[0.95] max-w-5xl">
          Rooted in <span className="italic text-terracotta">the highlands</span> — a family farm, in its second act.
        </h2>

        <div className="mt-16 grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7 space-y-6 text-lg leading-relaxed text-ink dropcap">
            <p>
              Stellar Foods began as a single-crop conviction: that the small, triangular seed of the buckwheat plant — quiet, gluten-free, and quietly complete — deserved a place in the modern Zimbabwean pantry. From the family farm in Arcturus, the harvest now travels to seven separate titles: groats and flour, kasha and meal, an amber tea and a near-black honey.
            </p>
            <p>
              We partner with local growers and hold every batch to a single standard. No shortcuts, no fillers, no imported grain dressed up as our own. What arrives on the shelf is what left the field.
            </p>
          </div>
          <aside className="lg:col-span-5 flex flex-col justify-between gap-10">
            <blockquote className="pull-quote text-ink">
              “The grain is small, but the argument for it is not.”
            </blockquote>
            <div className="border-t border-ink/25 pt-6 grid grid-cols-3 gap-4">
              <MetaCell label="Leadership" value="20+ yrs" />
              <MetaCell label="Titles" value="Seven" />
              <MetaCell label="Origin" value="100%" />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Range() {
  const [hero, ...rest] = products;
  return (
    <section id="range" className="border-b border-ink/15 bg-paper-2">
      <div className="mx-auto max-w-[1400px] px-6 py-32 lg:py-44">
        <div className="grid lg:grid-cols-12 gap-8 mb-14 items-end">
          <div className="lg:col-span-7">
            <div className="h-eyebrow mb-6">The Range · Seven titles</div>
            <h2 className="font-display text-6xl md:text-8xl text-ink leading-[0.95]">
              From <span className="italic text-terracotta">groat</span> to <span className="italic text-terracotta">jar.</span>
            </h2>
          </div>
          <p className="lg:col-span-4 lg:col-start-9 text-ink-soft text-lg">
            One field, one process, seven arrivals — each with its own page.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          <Link
            to="/products/$slug"
            params={{ slug: hero.slug }}
            className="lg:col-span-8 group block bg-terracotta text-accent-foreground overflow-hidden"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src={hero.img} alt={hero.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" loading="lazy" width={1600} height={1000} />
            </div>
            <div className="p-8 flex items-end justify-between gap-6">
              <div>
                <div className="folio text-[11px] uppercase tracking-[0.24em] opacity-80">Featured · N°01</div>
                <h3 className="font-display text-5xl mt-2 leading-none">{hero.name}</h3>
                <p className="mt-3 max-w-md opacity-90">{hero.copy}</p>
              </div>
              <span className="folio text-[12px] uppercase tracking-[0.24em] whitespace-nowrap">Read →</span>
            </div>
          </Link>

          <div className="lg:col-span-4 grid grid-cols-1 gap-6">
            {rest.slice(0, 2).map((p, i) => (
              <RangeCard key={p.slug} p={p} n={i + 2} />
            ))}
          </div>

          {rest.slice(2).map((p, i) => (
            <div key={p.slug} className="lg:col-span-4">
              <RangeCard p={p} n={i + 4} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RangeCard({ p, n }: { p: (typeof products)[number]; n: number }) {
  return (
    <Link
      to="/products/$slug"
      params={{ slug: p.slug }}
      className="group block bg-paper border-t border-ink/25 h-full"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={p.img} alt={p.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" loading="lazy" width={1200} height={900} />
      </div>
      <div className="p-6">
        <div className="flex items-baseline justify-between gap-4">
          <span className="folio text-terracotta text-sm">N°{String(n).padStart(2, "0")}</span>
          <span className="byline">{p.tag}</span>
        </div>
        <h3 className="font-display text-3xl text-ink mt-2 leading-tight group-hover:text-terracotta transition-colors">{p.name}</h3>
        <p className="text-sm text-ink-soft mt-3 leading-relaxed">{p.copy}</p>
        <span className="mt-5 inline-block byline text-terracotta">Read entry →</span>
      </div>
    </Link>
  );
}

function QuoteBand() {
  return (
    <section className="border-b border-ink/15 relative">
      <div className="absolute inset-0 opacity-20">
        <img src={field} alt="" className="h-full w-full object-cover" loading="lazy" />
      </div>
      <div className="relative mx-auto max-w-[1100px] px-6 py-32 lg:py-44 text-center">
        <div className="h-eyebrow justify-center mb-10 inline-flex">Editor's note</div>
        <blockquote className="font-display italic text-ink text-4xl md:text-6xl leading-[1.1]">
          “The best pantry is a quiet one — a shelf of things you trust, arranged with a little ceremony.”
        </blockquote>
        <div className="mt-10 byline">— The Editors · Arcturus, Zimbabwe</div>
      </div>
    </section>
  );
}

function Directors() {
  return (
    <section id="directors" className="border-b border-ink/15">
      <div className="mx-auto max-w-[1400px] px-6 py-32 lg:py-44">
        <div className="h-eyebrow mb-8">Masthead · The Editors</div>
        <h2 className="font-display text-6xl md:text-8xl text-ink leading-[0.95]">
          Two founders. <span className="italic text-terracotta">One harvest.</span>
        </h2>

        <div className="mt-16 grid md:grid-cols-2 gap-16 lg:gap-24">
          <Director
            n="01"
            name="Kumbirai Zephaniah Mudadada"
            role="Co-Founder & Director"
            bio="With over 20 years of managerial expertise and an MBA in Accounting and Human Resources, Kumbirai has shaped Stellar Seeds into a trusted name in agriculture. He also directs Apee Construction and One Touch Electrical Services, and serves as General Manager of Wengara Estates — a farming venture focused on small grains and food security."
            credentials={["MBA · Accounting & HR", "20+ years management", "GM · Wengara Estates", "Director · Apee Construction"]}
          />
          <Director
            n="02"
            name="Pardon Mugari"
            role="Co-Founder & Director"
            bio="An educationist and chemistry teacher, Pardon holds a BSc and MSc in Chemistry and is pursuing a PhD in Natural Products Chemistry focused on anti-diabetic phytocompounds. He founded the Hilbright Group of Science Colleges and dedicates much of his time to farming, apiculture and community empowerment."
            credentials={["MSc · Chemistry", "PhD candidate · Natural Products", "Founder · Hilbright Group", "Apiarist & educator"]}
          />
        </div>
      </div>
    </section>
  );
}

function Director({ n, name, role, bio, credentials }: { n: string; name: string; role: string; bio: string; credentials: string[] }) {
  return (
    <article>
      <div className="flex items-baseline gap-4 border-t border-ink/25 pt-6">
        <span className="folio text-terracotta text-lg">N°{n}</span>
        <span className="byline">{role}</span>
      </div>
      <h3 className="font-display text-4xl md:text-5xl text-ink leading-tight mt-4">{name}</h3>
      <p className="text-ink leading-relaxed mt-6 dropcap">{bio}</p>
      <ul className="mt-8 border-t border-ink/25">
        {credentials.map((c, i) => (
          <li key={c} className="border-b border-ink/15 py-3 flex items-baseline gap-4">
            <span className="folio text-terracotta text-xs w-8">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-ink">{c}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function Wholesale() {
  return (
    <section id="wholesale" className="border-b border-ink/15 grid md:grid-cols-2">
      <div className="bg-ink text-paper px-6 md:px-14 py-24 lg:py-40 flex flex-col justify-center">
        <div className="h-eyebrow mb-8 text-paper/70">Wholesale · Export · Private label</div>
        <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
          Open a <span className="italic text-terracotta">wholesale</span> account.
        </h2>
        <p className="mt-8 max-w-md text-paper/75 text-lg leading-relaxed">
          For bakeries, distributors, hotels and export partners. Bulk pack sizes, single-origin traceability, delivered from Arcturus.
        </p>
        <a
          href="mailto:stellarfoods25@gmail.com?subject=Wholesale%20enquiry"
          className="mt-12 inline-flex items-center gap-3 text-terracotta text-2xl font-display italic hover:text-paper transition-colors"
        >
          Write to the desk <span aria-hidden>→</span>
        </a>
      </div>
      <div className="px-6 md:px-14 py-24 lg:py-40 flex flex-col justify-center">
        <div className="h-eyebrow mb-8">Directory</div>
        <dl className="border-t border-ink/25">
          <ContactRow label="Address" value="290 Mt. Olympus, Arcturus, Zimbabwe" />
          <ContactRow label="Telephone" value="+263 71 923 2075" href="tel:+263719232075" />
          <ContactRow label="Email" value="stellarfoods25@gmail.com" href="mailto:stellarfoods25@gmail.com" />
          <ContactRow label="Registered" value="Stellar Seeds (Pvt) Ltd · No. 4395/2024" />
        </dl>
      </div>
    </section>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href?: string }) {
  const content = href ? (
    <a href={href} className="hover:text-terracotta transition-colors">{value}</a>
  ) : (
    <span>{value}</span>
  );
  return (
    <div className="border-b border-ink/25 py-5 grid grid-cols-12 gap-4 items-baseline">
      <dt className="col-span-4 byline">{label}</dt>
      <dd className="col-span-8 font-display text-xl md:text-2xl text-ink">{content}</dd>
    </div>
  );
}

function Colophon() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-6 py-16 grid md:grid-cols-3 gap-10 border-b border-paper/20">
        <div>
          <div className="font-display text-3xl">Stellar Foods</div>
          <p className="mt-3 text-paper/60 text-sm max-w-xs">The Highland Journal — an editorial pantry from Arcturus, Zimbabwe.</p>
        </div>
        <div>
          <div className="byline text-paper/60 mb-4">Sections</div>
          <ul className="space-y-2 text-paper/85">
            <li><a href="#feature" className="hover:text-terracotta">Feature</a></li>
            <li><a href="#range" className="hover:text-terracotta">The Range</a></li>
            <li><a href="#directors" className="hover:text-terracotta">Editors</a></li>
            <li><a href="#wholesale" className="hover:text-terracotta">Wholesale</a></li>
          </ul>
        </div>
        <div>
          <div className="byline text-paper/60 mb-4">Colophon</div>
          <p className="text-paper/70 text-sm leading-relaxed">
            Set in <span className="italic">Instrument Serif</span> and Work Sans. Printed on the open web from Arcturus, Zimbabwe.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-[1400px] px-6 py-6 flex flex-wrap items-center justify-between gap-3 text-xs text-paper/50">
        <div>© {new Date().getFullYear()} Stellar Seeds (Pvt) Ltd · Product of Zimbabwe</div>
        <div className="folio">N°01 · Summer 2026</div>
      </div>
    </footer>
  );
}
