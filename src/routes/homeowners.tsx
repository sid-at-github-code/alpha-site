import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import homeOwnersLight from "@/assets/home-owners.jpg";
const homeOwnersDark = new URL("../assets/hoome-owners-dark .png", import.meta.url).href;
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FeatureSteps } from "@/components/ui/feature-steps";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { fadeUp, stagger, viewportOnce } from "@/lib/motionVariants";

export const Route = createFileRoute("/homeowners")({
  head: () => ({
    meta: [
      { title: "For Homeowners — Alpha Firms" },
      { name: "description", content: "Tell Alpha Firms what you're building. We match you with verified interior professionals whose track record fits your exact project." },
      { property: "og:title", content: "For Homeowners — Alpha Firms" },
      { property: "og:description", content: "The right designer exists. We find them." },
    ],
  }),
  component: HomeownersPage,
});

const fears = [
  { worry: "How do I know they're actually good?", answer: "Every designer on Alpha Firms is reviewed before they join. Portfolio verified. References checked. You see their real work, not their highlight reel." },
  { worry: "What if they go over budget?", answer: "Projects on Alpha Firms start with a clear brief and a quoted scope. You agree before anything begins. No surprises. No renegotiation mid-project." },
  { worry: "What if they don't understand what I want?", answer: "Our matching considers your style, your budget, and your project type — not just location. You're matched on fit, not availability." },
];

const steps = [
  { step: "Step 01", title: "Describe Your Project", content: "Space type, scope, budget, timeline. A 3-minute brief that does all the heavy lifting.", image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=900&q=80" },
  { step: "Step 02", title: "We Match You", content: "Alpha Firms surfaces 2–4 designers whose expertise, style, and availability align with your project. Not 200 profiles to scroll. Just the right ones.", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&q=80" },
  { step: "Step 03", title: "Review & Connect", content: "See each designer's portfolio, past projects, and approach. When you're ready, connect directly — no gatekeeping.", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&q=80" },
  { step: "Step 04", title: "Project Begins", content: "Agree on scope, sign off on a quote, and move forward with clarity. Alpha Firms stays in the background if you need us.", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80" },
];

const matchingFeatures = [
  "Matched on specialty, not just availability",
  "Verified portfolio — see real completed projects",
  "Transparent pricing from day one",
  "One point of contact. No coordination chaos.",
];

const testimonials = [
  { quote: "I had a shortlist of two designers within a day. Both were exactly right for what I needed. I've never had that experience before.", name: "Neha R.", meta: "3BHK Renovation, Bangalore" },
  { quote: "I was terrified of picking the wrong designer. Alpha Firms matched me with someone who had done three similar apartments. The result was beyond what I imagined.", name: "Anand P.", meta: "New Home Design, Mumbai" },
  { quote: "The brief process made me think clearly about what I actually wanted. And the designer I was matched with clearly read it. No back and forth.", name: "Kavita S.", meta: "Office Interior, Hyderabad" },
];

function HomeownerHeroImage() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const el = document.documentElement;
    setIsDark(el.classList.contains("dark"));
    const observer = new MutationObserver(() => setIsDark(el.classList.contains("dark")));
    observer.observe(el, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);
  return (
    <img src={isDark ? homeOwnersDark : homeOwnersLight} alt="For Homeowners"
      style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
  );
}

function HomeownersPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden min-h-screen pt-16 pb-28 md:pt-20 md:pb-36">
        {/* Ambient glows */}
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 55% at 75% 15%, rgba(248,123,84,0.10), transparent 65%), radial-gradient(ellipse 50% 45% at 5% 85%, rgba(248,123,84,0.06), transparent 60%)" }} />
        <div className="pointer-events-none absolute -top-32 -right-32 w-[560px] h-[560px] rounded-full" style={{ background: "radial-gradient(circle, rgba(248,123,84,0.08) 0%, transparent 70%)", filter: "blur(60px)" }} />

        <div className="relative mx-auto max-w-[1120px] px-6 flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Text */}
          <motion.div variants={stagger} initial="hidden" animate="show" className="flex-1 min-w-0">
            <motion.p variants={fadeUp} className="eyebrow" style={{ letterSpacing: "0.14em" }}>
              For Homeowners & Property Owners
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-display font-light text-foreground mt-6"
              style={{ fontSize: "clamp(54px, 7vw, 96px)", lineHeight: 0.92, letterSpacing: "-0.02em" }}>
              The right designer
              <br />exists. We find them.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-8 text-[18px] text-muted-foreground" style={{ maxWidth: 520, lineHeight: 1.65 }}>
              Tell Alpha Firms what you're building. We match you with verified interior
              professionals whose track record fits your exact project — not just whoever's available.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-6">
              <a href="/signup"
                className="inline-flex items-center rounded-full bg-accent px-7 py-3.5 text-[11px] font-mono uppercase tracking-[0.12em] text-white transition"
                style={{ boxShadow: "0 0 0 0 rgba(248,123,84,0.4), 0 4px 20px rgba(248,123,84,0.3)" }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 0 5px rgba(248,123,84,0.18), 0 8px 28px rgba(248,123,84,0.38)")}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 0 0 0 rgba(248,123,84,0.4), 0 4px 20px rgba(248,123,84,0.3)")}>
                Find My Designer
              </a>
              <a href="#how" className="text-[14px] text-accent border-b border-transparent hover:border-accent transition">
                How matching works →
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className="hidden md:block flex-shrink-0" style={{ width: 420, height: 520 }}>
            <div style={{ width: "100%", height: "100%", borderRadius: 28, overflow: "hidden",
              boxShadow: "0 40px 100px rgba(0,0,0,0.22), 0 8px 32px rgba(248,123,84,0.08), 0 0 0 1px var(--border)",
            }}>
              <HomeownerHeroImage />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Three fears ── */}
      <section className="py-28 border-t border-border" style={{ background: "linear-gradient(180deg, var(--surface) 0%, var(--background) 100%)" }}>
        <div className="mx-auto max-w-[1120px] px-6">
          <SectionHeading title="Every homeowner has the same three worries." subtitle="We built Alpha Firms to solve all three." />
          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={stagger}
            className="mt-14 grid gap-6 md:grid-cols-3">
            {fears.map((f) => (
              <motion.div key={f.worry} variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.22 } }}
                className="rounded-2xl bg-surface-raised p-8 relative overflow-hidden"
                style={{
                  border: "1px solid var(--border)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)",
                }}>
                {/* Accent top sweep */}
                <div className="absolute inset-x-0 top-0 h-[2px]" style={{ background: "linear-gradient(90deg, var(--accent), transparent)" }} />
                <p className="font-display italic text-muted-foreground" style={{ fontSize: 18, lineHeight: 1.45 }}>
                  "{f.worry}"
                </p>
                <div className="my-5 h-px" style={{ background: "linear-gradient(90deg, var(--accent), transparent)", opacity: 0.5 }} />
                <p className="text-[15px] text-foreground" style={{ lineHeight: 1.6 }}>{f.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how" className="py-28 border-t border-border">
        <div className="mx-auto max-w-[1120px] px-6">
          <SectionHeading eyebrow="How It Works" title="From idea to matched professional in 24 hours." />
          <FeatureSteps features={steps} autoPlayInterval={4000} />
        </div>
      </section>

      {/* ── Right matching ── */}
      <section className="py-28 border-t border-border relative overflow-hidden" style={{ background: "linear-gradient(135deg, var(--surface) 0%, var(--background) 100%)" }}>
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(248,123,84,0.05), transparent)" }} />
        <div className="relative mx-auto max-w-[1120px] px-6 grid gap-16 md:grid-cols-2 items-center">
          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp}
            className="rounded-2xl p-8 md:p-10"
            style={{ border: "1px solid rgba(248,123,84,0.2)", background: "rgba(248,123,84,0.03)", boxShadow: "0 0 60px rgba(248,123,84,0.07), inset 0 0 40px rgba(248,123,84,0.03)" }}>
            <p className="font-display italic text-accent" style={{ fontSize: "clamp(26px, 3.5vw, 44px)", lineHeight: 1.15 }}>
              "Most platforms give you a list.<br />We give you a match."
            </p>
          </motion.div>
          <motion.ul initial="hidden" whileInView="show" viewport={viewportOnce} variants={stagger} className="space-y-0">
            {matchingFeatures.map((f) => (
              <motion.li key={f} variants={fadeUp}
                className="border-t border-border py-5 text-[16px] text-foreground flex items-center gap-4">
                <span className="shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
                {f}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-28 border-t border-border">
        <div className="mx-auto max-w-[1120px] px-6">
          <SectionHeading title="What happens when the right people find each other." />
          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={stagger}
            className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={fadeUp}
                whileHover={{ y: -5, transition: { duration: 0.22 } }}
                style={{ borderRadius: 16, boxShadow: "0 4px 24px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)" }}>
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
