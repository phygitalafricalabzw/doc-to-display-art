import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Leaf, Users, Lightbulb, Award, HeartHandshake, ChevronLeft, ChevronRight } from "lucide-react";
import flourFamily from "@/assets/about/flour-family.png.asset.json";
import flourBaking from "@/assets/about/flour-baking.png.asset.json";
import groatsDish from "@/assets/about/groats-dish.png.asset.json";
import honey from "@/assets/about/honey.png.asset.json";
import tea from "@/assets/about/tea.png.asset.json";
import peanutButter from "@/assets/about/peanut-butter.png.asset.json";

const gallery = [
  { src: flourFamily.url, alt: "Family sharing a meal with Stellar Foods Buckwheat Flour", wide: true },
  { src: flourBaking.url, alt: "Home baker mixing Stellar Foods Buckwheat Flour", wide: false },
  { src: groatsDish.url, alt: "Prepared buckwheat groats served on a wooden table", wide: false },
  { src: honey.url, alt: "Stellar Foods buckwheat honey jar nestled in the crop", wide: false },
  { src: tea.url, alt: "Man enjoying Stellar Foods buckwheat herbal tea", wide: false },
  { src: peanutButter.url, alt: "Stellar Foods peanut butter in a swirl of creamy spread", wide: true },
];

function HeroSlider({ images }: { images: { src: string; alt: string }[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (paused || reducedMotion.current) return;
    const id = window.setInterval(() => {
      if (!document.hidden) setIndex((i) => (i + 1) % images.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, [paused, images.length]);

  const go = (n: number) => setIndex((n + images.length) % images.length);
  const next = () => go(index + 1);
  const prev = () => go(index - 1);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Stellar Foods gallery"
      tabIndex={0}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") { e.preventDefault(); next(); }
        if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      }}
      onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchStartX.current == null) return;
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
        touchStartX.current = null;
      }}
      className="relative rounded-3xl overflow-hidden bg-fresh-tint aspect-square lg:aspect-[4/5] outline-none focus-visible:ring-2 focus-visible:ring-ember"
    >
      {images.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          loading={i === 0 ? "eager" : "lazy"}
          aria-hidden={i !== index}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        />
      ))}

      <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => go(i)}
            aria-label={`Show slide ${i + 1}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-ember" : "w-2 bg-canvas/70 hover:bg-canvas"
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-4 right-4 hidden sm:flex gap-2">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-canvas/90 backdrop-blur border border-line text-ink hover:bg-canvas"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-canvas/90 backdrop-blur border border-line text-ink hover:bg-canvas"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Stellar Foods — Buckwheat, Grown & Milled in Zimbabwe" },
      {
        name: "description",
        content:
          "Stellar Foods is a forward-thinking food processing and supply company delivering nutritious, high-quality buckwheat products from the Zimbabwean highlands.",
      },
      { property: "og:title", content: "About Stellar Foods" },
      {
        property: "og:description",
        content:
          "Sustainability, community development, innovation, quality and customer satisfaction — the story behind Zimbabwe's buckwheat brand.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Leaf,
    name: "Sustainability",
    copy: "We prioritise environmentally friendly practices across our cultivation and production processes.",
  },
  {
    icon: Users,
    name: "Community development",
    copy: "We empower local communities through job creation, education and fair-trade practices.",
  },
  {
    icon: Lightbulb,
    name: "Innovation",
    copy: "We continuously seek new ways to improve our products, processes and services.",
  },
  {
    icon: Award,
    name: "Quality",
    copy: "We are committed to delivering high-quality buckwheat products that meet our customers' needs.",
  },
  {
    icon: HeartHandshake,
    name: "Customer satisfaction",
    copy: "We listen to feedback and continuously improve our products and service.",
  },
];

function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <span className="h-eyebrow rule-eyebrow mb-8">About Stellar Foods</span>
            <h1 className="h-display mt-6 text-ink">
              Nourishing food,{" "}
              <span className="relative inline-block">
                honestly grown
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="14"
                  viewBox="0 0 300 14"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8 Q 75 2, 150 7 T 298 6"
                    stroke="var(--ember)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>
              .
            </h1>
            <p className="lead mt-8 max-w-2xl">
              Stellar Foods is a forward-thinking food processing and supply company dedicated to delivering nutritious,
              high-quality products that meet the needs of modern consumers. We partner with local farmers and trusted
              producers to source premium ingredients, ensuring freshness, safety, and sustainability across our value
              chain.
            </p>
            <p className="mt-6 max-w-2xl text-ink-soft leading-relaxed">
              Driven by innovation and a commitment to excellence, Stellar Foods continues to develop reliable, wholesome
              food solutions that support healthy living and contribute to the growth of our communities and the broader
              agricultural sector.
            </p>
          </div>
          <div className="lg:col-span-5">
            <HeroSlider images={gallery} />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="border-b border-line bg-fresh-tint">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-24 lg:py-28 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-3">
            <span className="h-eyebrow rule-eyebrow">Our mission</span>
          </div>
          <blockquote className="lg:col-span-9">
            <p className="font-display font-semibold text-ink leading-[1.1] tracking-tight text-3xl md:text-4xl lg:text-5xl">
              &ldquo;At Stellar Foods our mission is to cultivate and market high-quality buckwheat products that nourish
              and inspire our customers. We prioritise sustainability, community development, and innovation, ensuring
              that our business benefits both our people and the environment.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* Vision slab */}
      <section className="slab border-b border-line">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-24 lg:py-28 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4">
            <span className="h-eyebrow rule-eyebrow" style={{ color: "var(--ember)" }}>
              Our vision
            </span>
          </div>
          <h2 className="lg:col-span-8 h-display text-canvas" style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)" }}>
            To be the leading provider of nutritious &amp; sustainable buckwheat products in Africa.
          </h2>
        </div>
      </section>

      {/* Core values */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-24 lg:py-32">
          <div className="grid lg:grid-cols-12 gap-8 items-end mb-14">
            <div className="lg:col-span-8">
              <span className="h-eyebrow rule-eyebrow mb-6">Core values</span>
              <h2 className="h-display mt-4 text-ink" style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)" }}>
                What we stand for.
              </h2>
            </div>
            <p className="lg:col-span-4 lead">
              Five commitments that shape every seed, sack and shipment leaving our farm.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, name, copy }) => (
              <div key={name} className="soft-card p-8">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-fresh-tint text-ember">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-semibold text-2xl mt-6 text-ink">{name}</h3>
                <p className="text-ink-soft mt-3 leading-relaxed">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health benefits */}
      <section className="bg-fresh-tint border-b border-line">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-24 lg:py-32 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <span className="h-eyebrow rule-eyebrow mb-6">Our products</span>
            <h2 className="h-sub mt-6 text-ink">Food that works quietly on your health.</h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-ink-soft text-lg leading-relaxed">
            <p>
              Studies of the antioxidant activity in buckwheat foods — now believed to play a major role in preventing
              non-communicable diseases such as type&nbsp;2 diabetes, several cancers and hypertension — have shown that
              buckwheat portrays superior antioxidant activity.
            </p>
            <p>
              That is why we work with a single grain: to keep the nutrition intact from field to pack, and to make it
              easy for families, kitchens and retailers to add real, everyday nourishment to the way they eat.
            </p>
            <Link to="/" hash="range" className="btn-link mt-2">
              Explore the ten products <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery placeholder — will fill with the About Us images user is uploading next */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-24 lg:py-32">
          <div className="mb-12">
            <span className="h-eyebrow rule-eyebrow mb-6">From the farm</span>
            <h2 className="h-sub mt-6 text-ink">A look inside Arcturus.</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {gallery.map((img, i) => (
              <div
                key={i}
                className={`rounded-2xl overflow-hidden bg-fresh-tint border border-line ${
                  img.wide ? "col-span-2 aspect-[16/10]" : "aspect-square"
                }`}
              >
                <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10 py-24 lg:py-28 text-center">
          <span className="h-eyebrow rule-eyebrow mb-6 justify-center">Work with us</span>
          <h2 className="h-display mt-6 text-ink" style={{ fontSize: "clamp(2.25rem, 5vw, 4.5rem)" }}>
            Ready to taste it?
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/" hash="range" className="btn-primary">
              Shop the range <span aria-hidden>→</span>
            </Link>
            <a
              href="mailto:stellarfoods25@gmail.com?subject=Wholesale%20enquiry"
              className="btn-ghost"
            >
              Wholesale enquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}