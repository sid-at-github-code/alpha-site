import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Timeline } from "@/components/shared/Timeline";
import { FormField, SelectField, TextAreaField } from "@/components/shared/FormField";
import { BronzeButton } from "@/components/shared/BronzeButton";
import { fadeUp, stagger, viewportOnce } from "@/lib/motionVariants";

export const Route = createFileRoute("/suppliers")({
  head: () => ({
    meta: [
      { title: "For Suppliers & Manufacturers — Alpha Firms" },
      {
        name: "description",
        content:
          "Your catalog, in front of every active interior project. Alpha Firms surfaces supplier profiles when designers are specifying.",
      },
      { property: "og:title", content: "For Suppliers — Alpha Firms" },
      {
        property: "og:description",
        content: "B2B lead generation built for how materials actually get specified.",
      },
    ],
  }),
  component: SuppliersPage,
});

const problems = [
  {
    n: "01",
    body: "Sales cycles are long because you don't know who's buying until after the decision is made.",
  },
  {
    n: "02",
    body: "Trade shows and catalogs reach professionals once a year, if you're lucky.",
  },
  {
    n: "03",
    body: "Cold outreach to designers has a response rate that barely rounds up.",
  },
  {
    n: "04",
    body: "You compete on price because you can't differentiate on relevance.",
  },
];

const steps = [
  {
    n: "01",
    title: "Build Your Catalog Profile",
    body: "List your products by category, material type, and price range. Add photos, spec sheets, and MOQ information. Your catalog, structured for how designers actually search.",
  },
  {
    n: "02",
    title: "Set Your Target Market",
    body: "Residential? Commercial? Hospitality? Geographic focus? You control who sees you and for what project types.",
  },
  {
    n: "03",
    title: "Surface in Matching",
    body: "When a designer starts a project that needs what you make, your profile appears. No bidding. No cold outreach. Just qualified visibility.",
  },
  {
    n: "04",
    title: "Convert to Business",
    body: "Designers reach out through the platform. Quotes, samples, and orders flow from there. Alpha Firms handles the introduction. The relationship is yours.",
  },
];

const benefits = [
  {
    title: "Precision Visibility",
    body: "Your products are surfaced to designers who need exactly your category — not every designer on the platform. Quality of visibility over quantity.",
  },
  {
    title: "A Catalog, Not Just a Listing",
    body: "Upload full product details: dimensions, finishes, material composition, lead times, pricing tiers. Give designers everything they need to specify with confidence.",
  },
  {
    title: "B2B Lead Generation That Works",
    body: "Every enquiry you receive has already been filtered by project type and material need. These are not cold leads. They are warm, specific, and ready to move.",
  },
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "120+", label: "Active Designers" },
  { value: "₹12Cr+", label: "Material Value" },
  { value: "50+", label: "Suppliers Listed" },
];

const categories = [
  "Tiles & Stone",
  "Furniture",
  "Lighting",
  "Fabric & Upholstery",
  "Hardware & Fixtures",
  "Paint & Finishes",
  "Flooring",
  "Sanitaryware",
  "Other",
];

function SuppliersPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedCats, setSelectedCats] = useState<string[]>([]);

  const toggle = (c: string) =>
    setSelectedCats((s) => (s.includes(c) ? s.filter((x) => x !== c) : [...s, c]));

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-40 pb-28 md:pt-48 md:pb-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 5% 100%, rgba(184,149,106,0.07), transparent)",
          }}
        />
        <svg
          aria-hidden
          className="pointer-events-none absolute right-0 bottom-0 w-[800px] h-[500px] hidden md:block"
          viewBox="0 0 800 500"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          style={{ opacity: 0.035 }}
        >
          {Array.from({ length: 16 }).map((_, r) =>
            Array.from({ length: 26 }).map((__, c) => (
              <rect key={`${r}-${c}`} x={c * 32} y={r * 32} width="28" height="28" />
            )),
          )}
        </svg>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative mx-auto max-w-[1120px] px-6"
        >
          <motion.p variants={fadeUp} className="eyebrow" style={{ letterSpacing: "0.14em" }}>
            For Material Suppliers & Manufacturers
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="font-display font-light text-foreground mt-6"
            style={{ fontSize: "clamp(54px, 7vw, 96px)", lineHeight: 0.92, letterSpacing: "-0.02em" }}
          >
            Your materials are
            <br />
            specified before
            <br />
            you know the project exists.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-8 text-[18px] text-muted-foreground"
            style={{ maxWidth: 540, lineHeight: 1.65 }}
          >
            On Alpha Firms, your supplier profile is in the room when a designer starts a
            project brief — not after they've already decided. Be visible where decisions are
            made.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#apply"
              className="inline-flex items-center rounded-full bg-accent px-7 py-3.5 text-[11px] font-mono uppercase tracking-[0.12em] text-white hover:opacity-90 transition"
            >
              List Your Products
            </a>
            <a href="#how" className="text-[14px] text-accent border-b border-transparent hover:border-accent transition">
              See how it works →
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Problem */}
      <section className="py-28 border-t border-border">
        <div className="mx-auto max-w-[1120px] px-6 grid gap-16 md:grid-cols-2 items-start">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="font-display font-light text-foreground"
              style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
            >
              Great materials don't find designers on their own.
            </motion.h2>
            <div className="mt-10 space-y-6">
              {problems.map((p) => (
                <motion.div key={p.n} variants={fadeUp} className="flex gap-5">
                  <span className="font-mono text-[11px] text-accent uppercase tracking-[0.16em] pt-1 shrink-0">
                    {p.n}
                  </span>
                  <p className="text-[15.5px] text-foreground" style={{ lineHeight: 1.55 }}>
                    {p.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
            className="rounded-2xl border border-border bg-surface p-10"
            style={{ borderLeft: "3px solid var(--accent)" }}
          >
            <p
              className="font-display italic text-accent"
              style={{ fontSize: 24, lineHeight: 1.35 }}
            >
              "Alpha Firms puts your catalog inside the design process — not beside it."
            </p>
            <p className="mt-6 text-[15px] text-muted-foreground" style={{ lineHeight: 1.65 }}>
              When a designer on Alpha Firms begins a project, they see supplier profiles that
              match their material needs. Your catalog, your pricing, your story — at the exact
              moment they're specifying.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How */}
      <section id="how" className="py-28 border-t border-border">
        <div className="mx-auto max-w-[1120px] px-6">
          <SectionHeading
            eyebrow="How It Works"
            title="A supplier profile that generates pipeline."
          />
          <Timeline steps={steps} />
        </div>
      </section>

      {/* Benefits */}
      <section className="py-28 border-t border-border">
        <div className="mx-auto max-w-[1120px] px-6">
          <SectionHeading title="Built for the way materials actually get specified." />
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={stagger}
            className="mt-16 grid gap-8 md:grid-cols-3"
          >
            {benefits.map((b) => (
              <motion.div
                key={b.title}
                variants={fadeUp}
                className="border-t border-accent pt-6"
              >
                <h3 className="font-display font-light text-foreground" style={{ fontSize: 26 }}>
                  {b.title}
                </h3>
                <p className="mt-4 text-[15px] text-muted-foreground" style={{ lineHeight: 1.65 }}>
                  {b.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-28 border-t border-border">
        <div className="mx-auto max-w-[1120px] px-6">
          <SectionHeading align="center" title="The opportunity, in numbers." />
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 md:divide-x divide-border">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial="hidden"
                whileInView="show"
                viewport={viewportOnce}
                variants={fadeUp}
                transition={{ delay: i * 0.08 }}
                className="px-2 md:px-8 py-6 text-center"
              >
                <p
                  className="font-display font-light text-foreground"
                  style={{ fontSize: "clamp(48px, 7vw, 80px)", lineHeight: 1 }}
                >
                  {s.value}
                </p>
                <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="mt-10 text-center text-[13px] text-muted-foreground">
            Every project on Alpha Firms consumes materials. Every designer on the platform is
            your potential specifier.
          </p>
        </div>
      </section>

      {/* Form */}
      <section id="apply" className="py-28 border-t border-border">
        <div className="mx-auto max-w-[660px] px-6">
          <SectionHeading
            align="center"
            title="Join the network."
            subtitle="Get your catalog in front of active designers within 48 hours."
          />

          {submitted ? (
            <p
              className="mt-14 text-center font-display italic text-foreground"
              style={{ fontSize: 22, lineHeight: 1.45 }}
            >
              We've received your application. Expect to hear from us within 48 hours.
            </p>
          ) : (
            <form
              onSubmit={(e: FormEvent) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="mt-14 space-y-5"
            >
              <FormField label="Company / Brand Name" id="company" required />
              <FormField label="Contact Person Name" id="name" required />
              <FormField label="Email Address" id="email" type="email" required />
              <FormField label="Phone Number" id="phone" type="tel" required />
              <FormField label="City / Primary Location" id="city" required />

              <div>
                <p className="block mb-3 font-sans text-[12px] text-muted-foreground">
                  Product Category
                </p>
                <div className="flex flex-wrap gap-2">
                  {categories.map((c) => {
                    const active = selectedCats.includes(c);
                    return (
                      <button
                        type="button"
                        key={c}
                        onClick={() => toggle(c)}
                        className={`rounded-full px-4 py-2 text-[12.5px] transition border ${
                          active
                            ? "bg-accent text-white border-accent"
                            : "bg-[var(--accent-light)] text-foreground border-[var(--accent-light)] hover:border-accent"
                        }`}
                      >
                        {c}
                      </button>
                    );
                  })}
                </div>
              </div>

              <SelectField
                label="Price Segment"
                id="segment"
                options={["Budget", "Mid-Range", "Premium", "Luxury"]}
                required
              />

              <div>
                <p className="block mb-2 font-sans text-[12px] text-muted-foreground">
                  Do you supply nationally or regionally?
                </p>
                <div className="flex gap-6 pt-1">
                  {["National", "Regional", "Both"].map((o) => (
                    <label key={o} className="flex items-center gap-2 text-[14px] text-foreground cursor-pointer">
                      <input type="radio" name="reach" value={o} className="accent-[var(--accent)]" />
                      {o}
                    </label>
                  ))}
                </div>
              </div>

              <FormField label="Catalog / Website URL (optional)" id="url" type="url" />
              <TextAreaField
                label="Tell us about your products"
                id="desc"
                rows={4}
                placeholder="What do you make, what makes it distinctive, and who typically specifies it?"
              />

              <BronzeButton type="submit" className="w-full py-4">
                Submit Supplier Application
              </BronzeButton>
              <p className="text-[11px] text-muted-foreground text-center" style={{ lineHeight: 1.5 }}>
                Applications reviewed within 48 hours. No listing fees until you're approved.
              </p>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
