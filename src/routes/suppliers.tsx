import { createFileRoute } from "@tanstack/react-router";
import { m } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FeatureSteps } from "@/components/ui/feature-steps";
import { fadeUp, stagger, viewportOnce } from "@/lib/motionVariants";
import suppliersImg from "@/assets/suppliers.jpg";

export const Route = createFileRoute("/suppliers")({
  head: () => ({
    meta: [
      { title: "For Suppliers & Manufacturers — Get In Front of Active Interior Projects | AlphaFirms" },
      { name: "description", content: "List your catalog on AlphaFirms and get visibility with designers and architects at the exact moment they're specifying materials. B2B lead generation built for how the interior industry works." },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "For Suppliers — Reach Designers at Point of Specification | AlphaFirms" },
      { property: "og:description", content: "Your catalog, in front of every active interior project. B2B lead generation built for how materials actually get specified." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.alphafirms.com/suppliers" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: "AlphaFirms" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@alphafirms" },
      { name: "twitter:title", content: "Suppliers — Reach Designers at Point of Specification | AlphaFirms" },
      { name: "twitter:description", content: "Get your catalog in front of active interior projects across India." },
    ],
    links: [{ rel: "canonical", href: "https://www.alphafirms.com/suppliers" }],
  }),
  component: SuppliersPage,
});

const problems = [
  { n: "01", body: "Sales cycles are long because you don't know who's buying until after the decision is made." },
  { n: "02", body: "Trade shows and catalogs reach professionals once a year, if you're lucky." },
  { n: "03", body: "Cold outreach to designers has a response rate that barely rounds up." },
  { n: "04", body: "You compete on price because you can't differentiate on relevance." },
];

const steps = [
  { step: "Step 01", title: "Build Your Catalog Profile", content: "List your products by category, material type, and price range. Add photos, spec sheets, and MOQ information. Your catalog, structured for how designers actually search.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80" },
  { step: "Step 02", title: "Set Your Target Market", content: "Residential? Commercial? Hospitality? Geographic focus? You control who sees you and for what project types.", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&q=80" },
  { step: "Step 03", title: "Surface in Matching", content: "When a designer starts a project that needs what you make, your profile appears. No bidding. No cold outreach. Just qualified visibility.", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80" },
  { step: "Step 04", title: "Convert to Business", content: "Designers reach out through the platform. Quotes, samples, and orders flow from there. Alpha Firms handles the introduction. The relationship is yours.", image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=900&q=80" },
];

const benefits = [
  { title: "Precision Visibility", body: "Your products are surfaced to designers who need exactly your category — not every designer on the platform. Quality of visibility over quantity." },
  { title: "A Catalog, Not Just a Listing", body: "Upload full product details: dimensions, finishes, material composition, lead times, pricing tiers. Give designers everything they need to specify with confidence." },
  { title: "B2B Lead Generation That Works", body: "Every enquiry you receive has already been filtered by project type and material need. These are not cold leads. They are warm, specific, and ready to move." },
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "120+", label: "Active Designers" },
  { value: "₹12Cr+", label: "Material Value" },
  { value: "50+", label: "Suppliers Listed" },
];

const suppliersSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.alphafirms.com/suppliers#service",
  "name": "Supplier Visibility Platform for Interior Materials",
  "description": "AlphaFirms surfaces supplier catalogs to active interior designers and architects at the moment of material specification. B2B lead generation built for the Indian interior industry.",
  "provider": { "@id": "https://www.alphafirms.com/#organization" },
  "areaServed": { "@type": "Country", "name": "India" },
  "serviceType": "B2B Interior Supply Chain Platform",
  "audience": { "@type": "Audience", "audienceType": "Material Suppliers, Furniture Manufacturers, Lighting Suppliers" },
  "url": "https://www.alphafirms.com/suppliers",
});

function SuppliersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: suppliersSchema }} />
      <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden min-h-screen pt-16 pb-28 md:pt-20 md:pb-36">
        {/* Ambient glows */}
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 65% 55% at 78% 18%, rgba(248,123,84,0.09), transparent 65%), radial-gradient(ellipse 50% 45% at 5% 88%, rgba(248,123,84,0.06), transparent 55%)" }} />
        <div className="pointer-events-none absolute -top-28 -right-28 w-[520px] h-[520px] rounded-full" style={{ background: "radial-gradient(circle, rgba(248,123,84,0.08) 0%, transparent 70%)", filter: "blur(55px)" }} />
        {/* Grid pattern */}
        <svg aria-hidden className="pointer-events-none absolute right-0 bottom-0 w-[800px] h-[500px] hidden md:block"
          viewBox="0 0 800 500" fill="none" stroke="currentColor" strokeWidth="0.5" style={{ opacity: 0.045 }}>
          {Array.from({ length: 16 }).map((_, r) =>
            Array.from({ length: 26 }).map((__, c) => (
              <rect key={`${r}-${c}`} x={c * 32} y={r * 32} width="28" height="28" />
            ))
          )}
        </svg>

        <div className="relative mx-auto max-w-[1120px] px-6 flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Text */}
          <m.div variants={stagger} initial="hidden" animate="show" className="flex-1 min-w-0">
            <m.p variants={fadeUp} className="eyebrow" style={{ letterSpacing: "0.14em" }}>For Material Suppliers & Manufacturers</m.p>
            <m.h1 variants={fadeUp} className="font-display font-light text-foreground mt-6"
              style={{ fontSize: "clamp(38px, 4.8vw, 68px)", lineHeight: 0.92, letterSpacing: "-0.02em" }}>
              Your materials are
              <br />specified before
              <br />you know the project exists.
            </m.h1>
            <m.p variants={fadeUp} className="mt-8 text-[18px] text-muted-foreground" style={{ maxWidth: 540, lineHeight: 1.65 }}>
              On Alpha Firms, your supplier profile is in the room when a designer starts a project brief — not after they've already decided. Be visible where decisions are made.
            </m.p>
            <m.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-6">
              <a href="/signup"
                className="inline-flex items-center rounded-full bg-accent px-7 py-3.5 text-[11px] font-mono uppercase tracking-[0.12em] text-white transition"
                style={{ boxShadow: "0 4px 20px rgba(248,123,84,0.30)" }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 0 5px rgba(248,123,84,0.18), 0 8px 28px rgba(248,123,84,0.38)")}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 4px 20px rgba(248,123,84,0.30)")}>
                List Your Products
              </a>
              <a href="#how" className="text-[14px] text-accent border-b border-transparent hover:border-accent transition">See how it works →</a>
            </m.div>
          </m.div>

          {/* Image */}
          <m.div initial={{ opacity: 0, x: 40, rotate: -2 }} animate={{ opacity: 1, x: 0, rotate: -2 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            className="hidden md:block flex-shrink-0" style={{ width: 420, height: 520 }}>
            <div style={{ width: "100%", height: "100%", borderRadius: 28, overflow: "hidden",
              boxShadow: "0 40px 100px rgba(0,0,0,0.22), 0 8px 32px rgba(248,123,84,0.08), 0 0 0 1px var(--border)" }}>
              <img src={suppliersImg} alt="Material suppliers" loading="lazy" decoding="async" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          </m.div>
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="py-28 border-t border-border" style={{ background: "linear-gradient(180deg, var(--surface) 0%, var(--background) 100%)" }}>
        <div className="mx-auto max-w-[1120px] px-6 grid gap-16 md:grid-cols-2 items-start">
          <m.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={stagger}>
            <m.h2 variants={fadeUp} className="font-display font-light text-foreground"
              style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.01em" }}>
              Great materials don't find designers on their own.
            </m.h2>
            <div className="mt-10 space-y-5">
              {problems.map((p) => (
                <m.div key={p.n} variants={fadeUp}
                  className="flex gap-5 p-4 rounded-xl"
                  style={{ backgroundColor: "var(--surface-raised)", border: "1px solid var(--border)", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                  <span className="font-mono text-[11px] text-accent uppercase tracking-[0.16em] pt-0.5 shrink-0">{p.n}</span>
                  <p className="text-[15px] text-foreground" style={{ lineHeight: 1.55 }}>{p.body}</p>
                </m.div>
              ))}
            </div>
          </m.div>

          <m.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp}
            className="rounded-2xl p-10 relative overflow-hidden"
            style={{ backgroundColor: "var(--surface-raised)", borderLeft: "3px solid var(--accent)", border: "1px solid var(--border)", borderLeftWidth: 3, borderLeftColor: "var(--accent)", boxShadow: "0 8px 40px rgba(0,0,0,0.10), 0 0 60px rgba(248,123,84,0.06), inset 0 0 40px rgba(248,123,84,0.03)" }}>
            <div className="pointer-events-none absolute top-0 left-0 w-40 h-40" style={{ background: "radial-gradient(circle, rgba(248,123,84,0.08) 0%, transparent 70%)" }} />
            <p className="font-display italic text-accent relative" style={{ fontSize: 24, lineHeight: 1.35 }}>
              "Alpha Firms puts your catalog inside the design process — not beside it."
            </p>
            <p className="mt-6 text-[15px] text-muted-foreground relative" style={{ lineHeight: 1.65 }}>
              When a designer on Alpha Firms begins a project, they see supplier profiles that match their material needs. Your catalog, your pricing, your story — at the exact moment they're specifying.
            </p>
          </m.div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how" className="py-28 border-t border-border">
        <div className="mx-auto max-w-[1120px] px-6">
          <SectionHeading eyebrow="How It Works" title="A supplier profile that generates pipeline." />
          <FeatureSteps features={steps} autoPlayInterval={4000} />
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-28 border-t border-border relative overflow-hidden" style={{ background: "linear-gradient(135deg, var(--surface) 0%, var(--background) 100%)" }}>
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 55% 50% at 50% 100%, rgba(248,123,84,0.05), transparent)" }} />
        <div className="relative mx-auto max-w-[1120px] px-6">
          <SectionHeading title="Built for the way materials actually get specified." />
          <m.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={stagger}
            className="mt-16 grid gap-6 md:grid-cols-3">
            {benefits.map((b) => (
              <m.div key={b.title} variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.22 } }}
                className="rounded-2xl p-7 relative overflow-hidden"
                style={{ backgroundColor: "var(--surface-raised)", border: "1px solid var(--border)", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
                <div className="absolute inset-x-0 top-0 h-[2px]" style={{ background: "linear-gradient(90deg, var(--accent), transparent)" }} />
                <h3 className="font-display font-light text-foreground" style={{ fontSize: 22 }}>{b.title}</h3>
                <p className="mt-4 text-[15px] text-muted-foreground" style={{ lineHeight: 1.65 }}>{b.body}</p>
              </m.div>
            ))}
          </m.div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-28 border-t border-border">
        <div className="mx-auto max-w-[1120px] px-6">
          <SectionHeading align="center" title="The opportunity, in numbers." />
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px" style={{ background: "var(--border)" }}>
            {stats.map((s, i) => (
              <m.div key={s.label} initial="hidden" whileInView="show" viewport={viewportOnce}
                variants={fadeUp} transition={{ delay: i * 0.08 }}
                className="px-6 py-10 text-center"
                style={{ backgroundColor: "var(--background)" }}>
                <p className="font-display font-light"
                  style={{
                    fontSize: "clamp(44px, 6vw, 72px)", lineHeight: 1,
                    background: "linear-gradient(135deg, var(--foreground) 30%, var(--accent) 100%)",
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  }}>
                  {s.value}
                </p>
                <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{s.label}</p>
              </m.div>
            ))}
          </div>
          <p className="mt-10 text-center text-[13px] text-muted-foreground">
            Every project on Alpha Firms consumes materials. Every designer on the platform is your potential specifier.
          </p>
        </div>
      </section>

      <Footer />
    </main>
    </>
  );
}
