import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FeatureSteps } from "@/components/ui/feature-steps";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { fadeUp, stagger, viewportOnce } from "@/lib/motionVariants";
import interiorImg from "@/assets/interior.jpg";

export const Route = createFileRoute("/designers")({
  head: () => ({
    meta: [
      { title: "For Designers & Contractors — Alpha Firms" },
      { name: "description", content: "Stop pitching. Start receiving. Alpha Firms routes qualified interior projects directly to designers and contractors." },
      { property: "og:title", content: "For Designers — Alpha Firms" },
      { property: "og:description", content: "Qualified interior project leads, matched to your specialty and capacity." },
    ],
  }),
  component: DesignersPage,
});

const steps = [
  { step: "Step 01", title: "Build Your Profile", content: "Upload your portfolio, set your specialties, define your project types. Your profile is your pitch — built once, working always.", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80" },
  { step: "Step 02", title: "Set Your Criteria", content: "Tell us your preferred project size, budget range, and geography. You set the filter. We respect it.", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80" },
  { step: "Step 03", title: "Receive Matches", content: "When a client project matches your profile, it arrives in your dashboard — pre-qualified, with a brief already written.", image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=900&q=80" },
  { step: "Step 04", title: "Win Projects", content: "Review the brief. Express interest. Connect directly. No middlemen, no commission on earnings.", image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900&q=80" },
];

const benefits = [
  { title: "Inbound, Not Outbound", body: "Every lead that reaches you has already been filtered against your profile. If it lands in your inbox, it fits." },
  { title: "Your Portfolio, Amplified", body: "Present your work the way it deserves — not buried in a marketplace. A dedicated designer profile with project case studies, specialties, and verified reviews." },
  { title: "Zero Commission", body: "Alpha Firms charges a flat membership. What you earn on a project is yours. Always." },
];

const testimonials = [
  { quote: "I had three qualified briefs in my first week. I've never had that from any platform before.", name: "Arjun M.", meta: "Residential Designer, Bangalore" },
  { quote: "I stopped spending weekends on Instagram trying to get inquiries. Alpha Firms does that for me now.", name: "Priya S.", meta: "Interior Contractor, Mumbai" },
  { quote: "The match quality is genuinely different. These are real clients with real budgets.", name: "Rohan K.", meta: "Commercial Fit-Out, Delhi" },
  { quote: "One project from Alpha Firms paid for my membership twelve times over.", name: "Meera D.", meta: "Hospitality Designer, Pune" },
];

const contrast = [
  { before: "Cold outreach, waiting, uncertainty", after: "Qualified leads arrive in your dashboard" },
  { before: "Competing on price with unknowns", after: "Matched on expertise and portfolio fit" },
  { before: "Discovery calls for bad-fit clients", after: "Only talk to clients who already match your profile" },
];

function DesignersPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden min-h-screen pt-16 pb-28 md:pt-20 md:pb-36">
        {/* Ambient glows */}
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 65% 55% at 80% 20%, rgba(248,123,84,0.09), transparent 65%), radial-gradient(ellipse 45% 40% at 8% 90%, rgba(248,123,84,0.05), transparent 55%)" }} />
        <div className="pointer-events-none absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(248,123,84,0.09) 0%, transparent 70%)", filter: "blur(50px)" }} />
        {/* Blueprint SVG */}
        <svg aria-hidden className="pointer-events-none absolute right-[-120px] top-[10%] w-[820px] h-[820px] hidden md:block"
          viewBox="0 0 800 800" fill="none" stroke="currentColor" strokeWidth="0.5" style={{ opacity: 0.06 }}>
          <rect x="80" y="80" width="640" height="640" />
          <rect x="160" y="160" width="320" height="240" />
          <rect x="480" y="160" width="160" height="120" />
          <rect x="480" y="280" width="160" height="120" />
          <rect x="160" y="400" width="200" height="320" />
          <rect x="360" y="400" width="280" height="200" />
          <rect x="360" y="600" width="280" height="120" />
          <line x1="80" y1="400" x2="720" y2="400" />
          <line x1="400" y1="80" x2="400" y2="720" />
        </svg>

        <div className="relative mx-auto max-w-[1120px] px-6 flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Text */}
          <motion.div variants={stagger} initial="hidden" animate="show" className="flex-1 min-w-0">
            <motion.p variants={fadeUp} className="eyebrow" style={{ letterSpacing: "0.14em" }}>For Designers & Contractors</motion.p>
            <motion.h1 variants={fadeUp} className="font-display font-light text-foreground mt-6"
              style={{ fontSize: "clamp(54px, 7vw, 96px)", lineHeight: 0.92, letterSpacing: "-0.02em" }}>
              Stop pitching.
              <br />Start receiving.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-8 text-[18px] text-muted-foreground" style={{ maxWidth: 500, lineHeight: 1.65 }}>
              Alpha Firms connects your expertise directly to clients who already need exactly what you do. Your next project isn't out there — it's already waiting.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-6">
              <a href="/signup"
                className="inline-flex items-center rounded-full bg-accent px-7 py-3.5 text-[11px] font-mono uppercase tracking-[0.12em] text-white transition"
                style={{ boxShadow: "0 4px 20px rgba(248,123,84,0.30)" }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 0 5px rgba(248,123,84,0.18), 0 8px 28px rgba(248,123,84,0.38)")}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 4px 20px rgba(248,123,84,0.30)")}>
                Apply to Join
              </a>
              <a href="#how" className="text-[14px] text-accent border-b border-transparent hover:border-accent transition">See how matching works →</a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div initial={{ opacity: 0, x: 40, rotate: 2 }} animate={{ opacity: 1, x: 0, rotate: 2 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            className="hidden md:block flex-shrink-0" style={{ width: 420, height: 520 }}>
            <div style={{ width: "100%", height: "100%", borderRadius: 28, overflow: "hidden",
              boxShadow: "0 40px 100px rgba(0,0,0,0.22), 0 8px 32px rgba(248,123,84,0.08), 0 0 0 1px var(--border)" }}>
              <img src={interiorImg} alt="Interior design" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Repositioning ── */}
      <section className="py-28 border-t border-border" style={{ background: "linear-gradient(180deg, var(--surface) 0%, var(--background) 100%)" }}>
        <div className="mx-auto max-w-[1120px] px-6 grid gap-16 md:grid-cols-2 md:gap-20 items-start">
          <motion.h2 initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp}
            className="font-display font-light text-foreground"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.01em" }}>
            Great designers
            <br />shouldn't be great
            <br />at marketing.
          </motion.h2>

          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={stagger} className="space-y-4">
            {contrast.map((c) => (
              <motion.div key={c.before} variants={fadeUp}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="rounded-xl p-5 grid grid-cols-2 gap-4 bg-surface-raised"
                style={{ border: "1px solid var(--border)", boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Before</p>
                  <p className="mt-2 text-[14px] text-muted-foreground" style={{ lineHeight: 1.55 }}>{c.before}</p>
                </div>
                <div className="border-l border-border pl-4" style={{ borderLeftColor: "rgba(248,123,84,0.25)" }}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">After</p>
                  <p className="mt-2 text-[14px] text-foreground font-medium" style={{ lineHeight: 1.55 }}>{c.after}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how" className="py-28 border-t border-border">
        <div className="mx-auto max-w-[1120px] px-6">
          <SectionHeading eyebrow="How It Works" title="From profile to project in days, not months." />
          <FeatureSteps features={steps} autoPlayInterval={4000} />
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-28 border-t border-border relative overflow-hidden" style={{ background: "linear-gradient(135deg, var(--surface) 0%, var(--background) 100%)" }}>
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 50% at 50% 100%, rgba(248,123,84,0.05), transparent)" }} />
        <div className="relative mx-auto max-w-[1120px] px-6">
          <SectionHeading title="A profile that works while you work." />
          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={stagger}
            className="mt-16 grid gap-6 md:grid-cols-3">
            {benefits.map((b) => (
              <motion.div key={b.title} variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.22 } }}
                className="rounded-2xl p-7 relative overflow-hidden"
                style={{ backgroundColor: "var(--surface-raised)", border: "1px solid var(--border)", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
                <div className="absolute inset-x-0 top-0 h-[2px]" style={{ background: "linear-gradient(90deg, var(--accent), transparent)" }} />
                <h3 className="font-display font-light text-foreground" style={{ fontSize: 22 }}>{b.title}</h3>
                <p className="mt-4 text-[15px] text-muted-foreground" style={{ lineHeight: 1.65 }}>{b.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Social proof ── */}
      <section className="py-28 border-t border-border">
        <div className="mx-auto max-w-[1120px] px-6">
          <SectionHeading title="120+ designers. Growing every week." />
          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={stagger}
            className="mt-14 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={fadeUp}
                whileHover={{ y: -5, transition: { duration: 0.22 } }}
                style={{ borderRadius: 16, boxShadow: "0 4px 24px rgba(0,0,0,0.07)" }}>
                <TestimonialCard {...t} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
