import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Timeline } from "@/components/shared/Timeline";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { FormField, SelectField, TextAreaField } from "@/components/shared/FormField";
import { BronzeButton } from "@/components/shared/BronzeButton";
import { fadeUp, stagger, viewportOnce } from "@/lib/motionVariants";
import interiorImg from "@/assets/interior.jpg";

export const Route = createFileRoute("/designers")({
  head: () => ({
    meta: [
      { title: "For Designers & Contractors — Alpha Firms" },
      {
        name: "description",
        content:
          "Stop pitching. Start receiving. Alpha Firms routes qualified interior projects directly to designers and contractors.",
      },
      { property: "og:title", content: "For Designers — Alpha Firms" },
      {
        property: "og:description",
        content: "Qualified interior project leads, matched to your specialty and capacity.",
      },
    ],
  }),
  component: DesignersPage,
});

const steps = [
  {
    n: "01",
    title: "Build Your Profile",
    body: "Upload your portfolio, set your specialties, define your project types. Your profile is your pitch — built once, working always.",
  },
  {
    n: "02",
    title: "Set Your Criteria",
    body: "Tell us your preferred project size, budget range, and geography. You set the filter. We respect it.",
  },
  {
    n: "03",
    title: "Receive Matches",
    body: "When a client project matches your profile, it arrives in your dashboard — pre-qualified, with a brief already written.",
  },
  {
    n: "04",
    title: "Win Projects",
    body: "Review the brief. Express interest. Connect directly. No middlemen, no commission on earnings.",
  },
];

const benefits = [
  {
    title: "Inbound, Not Outbound",
    body: "Every lead that reaches you has already been filtered against your profile. If it lands in your inbox, it fits.",
  },
  {
    title: "Your Portfolio, Amplified",
    body: "Present your work the way it deserves — not buried in a marketplace. A dedicated designer profile with project case studies, specialties, and verified reviews.",
  },
  {
    title: "Zero Commission",
    body: "Alpha Firms charges a flat membership. What you earn on a project is yours. Always.",
  },
];

const testimonials = [
  {
    quote:
      "I had three qualified briefs in my first week. I've never had that from any platform before.",
    name: "Arjun M.",
    meta: "Residential Designer, Bangalore",
  },
  {
    quote:
      "I stopped spending weekends on Instagram trying to get inquiries. Alpha Firms does that for me now.",
    name: "Priya S.",
    meta: "Interior Contractor, Mumbai",
  },
  {
    quote:
      "The match quality is genuinely different. These are real clients with real budgets.",
    name: "Rohan K.",
    meta: "Commercial Fit-Out, Delhi",
  },
  {
    quote:
      "One project from Alpha Firms paid for my membership twelve times over.",
    name: "Meera D.",
    meta: "Hospitality Designer, Pune",
  },
];

const contrast = [
  { before: "Cold outreach, waiting, uncertainty", after: "Qualified leads arrive in your dashboard" },
  { before: "Competing on price with unknowns", after: "Matched on expertise and portfolio fit" },
  { before: "Discovery calls for bad-fit clients", after: "Only talk to clients who already match your profile" },
];

function DesignersPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-screen pt-16 pb-28 md:pt-20 md:pb-36">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 10% 100%, rgba(184,149,106,0.07), transparent)",
          }}
        />
        <svg
          aria-hidden
          className="pointer-events-none absolute right-[-120px] top-[10%] w-[820px] h-[820px] hidden md:block"
          viewBox="0 0 800 800"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          style={{ opacity: 0.05 }}
        >
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
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex-1 min-w-0"
          >
            <motion.p variants={fadeUp} className="eyebrow" style={{ letterSpacing: "0.14em" }}>
              For Designers & Contractors
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-display font-light text-foreground mt-6"
              style={{ fontSize: "clamp(54px, 7vw, 96px)", lineHeight: 0.92, letterSpacing: "-0.02em" }}
            >
              Stop pitching.
              <br />
              Start receiving.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-8 text-[18px] text-muted-foreground"
              style={{ maxWidth: 500, lineHeight: 1.65 }}
            >
              Alpha Firms connects your expertise directly to clients who already need exactly
              what you do. Your next project isn't out there — it's already waiting.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#apply"
                className="inline-flex items-center rounded-full bg-accent px-7 py-3.5 text-[11px] font-mono uppercase tracking-[0.12em] text-white hover:opacity-90 transition"
              >
                Apply to Join
              </a>
              <a href="#how" className="text-[14px] text-accent border-b border-transparent hover:border-accent transition">
                See how matching works →
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: 2 }}
            animate={{ opacity: 1, x: 0, rotate: 2 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            className="hidden md:block flex-shrink-0"
            style={{ width: 420, height: 520 }}
          >
            <div style={{
              width: "100%", height: "100%",
              borderRadius: 28,
              overflow: "hidden",
              boxShadow: "0 32px 80px rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.10)",
              border: "1px solid var(--border)",
            }}>
              <img
                src={interiorImg}
                alt="Interior design"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* Repositioning */}
      <section className="py-28 border-t border-border">
        <div className="mx-auto max-w-[1120px] px-6 grid gap-16 md:grid-cols-2 md:gap-20 items-start">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
            className="font-display font-light text-foreground"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
          >
            Great designers
            <br />
            shouldn't be great
            <br />
            at marketing.
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={stagger}
            className="space-y-4"
          >
            {contrast.map((c) => (
              <motion.div
                key={c.before}
                variants={fadeUp}
                className="rounded-xl border border-border p-5 grid grid-cols-2 gap-4 bg-surface"
              >
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    Before
                  </p>
                  <p className="mt-2 text-[14px] text-muted-foreground" style={{ lineHeight: 1.55 }}>
                    {c.before}
                  </p>
                </div>
                <div className="border-l border-border pl-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                    After
                  </p>
                  <p className="mt-2 text-[14px] text-foreground" style={{ lineHeight: 1.55 }}>
                    {c.after}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-28 border-t border-border">
        <div className="mx-auto max-w-[1120px] px-6">
          <SectionHeading
            eyebrow="How It Works"
            title="From profile to project in days, not months."
          />
          <Timeline steps={steps} />
        </div>
      </section>

      {/* What you get */}
      <section className="py-28 border-t border-border">
        <div className="mx-auto max-w-[1120px] px-6">
          <SectionHeading title="A profile that works while you work." />
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
                <p
                  className="mt-4 text-[15px] text-muted-foreground"
                  style={{ lineHeight: 1.65 }}
                >
                  {b.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-28 border-t border-border">
        <div className="mx-auto max-w-[1120px] px-6">
          <SectionHeading title="120+ designers. Growing every week." />
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={stagger}
            className="mt-14 grid gap-6 md:grid-cols-2"
          >
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={fadeUp}>
                <TestimonialCard {...t} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section id="apply" className="py-28 border-t border-border">
        <div className="mx-auto max-w-[640px] px-6">
          <SectionHeading
            align="center"
            title="Your next project is a profile away."
            subtitle="Takes 4 minutes. No credit card required to apply."
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
              <FormField label="Full Name" id="name" required />
              <FormField label="Email Address" id="email" type="email" required />
              <FormField label="Phone Number" id="phone" type="tel" required />
              <FormField label="City / Location" id="city" required />
              <SelectField
                label="Design Specialty"
                id="specialty"
                options={["Residential", "Commercial", "Hospitality", "Retail", "Other"]}
                required
              />
              <SelectField
                label="Years of Experience"
                id="experience"
                options={["Under 2", "2–5", "5–10", "10+"]}
                required
              />
              <FormField label="Portfolio URL (optional)" id="portfolio" type="url" />
              <TextAreaField
                label="Brief Bio"
                id="bio"
                rows={4}
                placeholder="Tell us about your work and the types of projects you love."
              />

              <BronzeButton type="submit" className="w-full py-4">
                Submit Application
              </BronzeButton>
              <p className="text-[11px] text-muted-foreground text-center" style={{ lineHeight: 1.5 }}>
                By applying you agree to our Terms. Membership is reviewed within 48 hours.
              </p>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
