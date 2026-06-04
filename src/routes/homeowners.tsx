import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, useEffect, type FormEvent } from "react";
import homeOwnersLight from "@/assets/home-owners.jpg";
const homeOwnersDark = new URL("../assets/hoome-owners-dark .png", import.meta.url).href;
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Timeline } from "@/components/shared/Timeline";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { FormField, SelectField, TextAreaField } from "@/components/shared/FormField";
import { BronzeButton } from "@/components/shared/BronzeButton";
import { fadeUp, stagger, viewportOnce } from "@/lib/motionVariants";

export const Route = createFileRoute("/homeowners")({
  head: () => ({
    meta: [
      { title: "For Homeowners — Alpha Firms" },
      {
        name: "description",
        content:
          "Tell Alpha Firms what you're building. We match you with verified interior professionals whose track record fits your exact project.",
      },
      { property: "og:title", content: "For Homeowners — Alpha Firms" },
      {
        property: "og:description",
        content: "The right designer exists. We find them.",
      },
    ],
  }),
  component: HomeownersPage,
});

const fears = [
  {
    worry: "How do I know they're actually good?",
    answer:
      "Every designer on Alpha Firms is reviewed before they join. Portfolio verified. References checked. You see their real work, not their highlight reel.",
  },
  {
    worry: "What if they go over budget?",
    answer:
      "Projects on Alpha Firms start with a clear brief and a quoted scope. You agree before anything begins. No surprises. No renegotiation mid-project.",
  },
  {
    worry: "What if they don't understand what I want?",
    answer:
      "Our matching considers your style, your budget, and your project type — not just location. You're matched on fit, not availability.",
  },
];

const steps = [
  {
    n: "01",
    title: "Describe Your Project",
    body: "Space type, scope, budget, timeline. A 3-minute brief that does all the heavy lifting.",
  },
  {
    n: "02",
    title: "We Match You",
    body: "Alpha Firms surfaces 2–4 designers whose expertise, style, and availability align with your project. Not 200 profiles to scroll. Just the right ones.",
  },
  {
    n: "03",
    title: "Review & Connect",
    body: "See each designer's portfolio, past projects, and approach. When you're ready, connect directly — no gatekeeping.",
  },
  {
    n: "04",
    title: "Project Begins",
    body: "Agree on scope, sign off on a quote, and move forward with clarity. Alpha Firms stays in the background if you need us.",
  },
];

const matchingFeatures = [
  "Matched on specialty, not just availability",
  "Verified portfolio — see real completed projects",
  "Transparent pricing from day one",
  "One point of contact. No coordination chaos.",
];

const testimonials = [
  {
    quote:
      "I had a shortlist of two designers within a day. Both were exactly right for what I needed. I've never had that experience before.",
    name: "Neha R.",
    meta: "3BHK Renovation, Bangalore",
  },
  {
    quote:
      "I was terrified of picking the wrong designer. Alpha Firms matched me with someone who had done three similar apartments. The result was beyond what I imagined.",
    name: "Anand P.",
    meta: "New Home Design, Mumbai",
  },
  {
    quote:
      "The brief process made me think clearly about what I actually wanted. And the designer I was matched with clearly read it. No back and forth.",
    name: "Kavita S.",
    meta: "Office Interior, Hyderabad",
  },
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
    <img
      src={isDark ? homeOwnersDark : homeOwnersLight}
      alt="For Homeowners"
      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
    />
  );
}

function HomeownersPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-screen pt-16 pb-28 md:pt-20 md:pb-36">
        <div className="relative mx-auto max-w-[1120px] px-6 flex flex-col md:flex-row items-center gap-12 md:gap-16">

          {/* Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex-1 min-w-0"
          >
            <motion.p variants={fadeUp} className="eyebrow" style={{ letterSpacing: "0.14em" }}>
              For Homeowners & Property Owners
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="font-display font-light text-foreground mt-6"
              style={{ fontSize: "clamp(54px, 7vw, 96px)", lineHeight: 0.92, letterSpacing: "-0.02em" }}
            >
              The right designer
              <br />
              exists. We find them.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-8 text-[18px] text-muted-foreground"
              style={{ maxWidth: 520, lineHeight: 1.65 }}
            >
              Tell Alpha Firms what you're building. We match you with verified interior
              professionals whose track record fits your exact project — not just whoever's
              available.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#brief"
                className="inline-flex items-center rounded-full bg-accent px-7 py-3.5 text-[11px] font-mono uppercase tracking-[0.12em] text-white hover:opacity-90 transition"
              >
                Find My Designer
              </a>
              <a href="#how" className="text-[14px] text-accent border-b border-transparent hover:border-accent transition">
                How matching works →
              </a>
            </motion.div>
          </motion.div>

          {/* Image — switches with theme, plain no card */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            className="hidden md:block flex-shrink-0"
            style={{ width: 420, height: 520 }}
          >
            <HomeownerHeroImage />
          </motion.div>

        </div>
      </section>

      {/* Three fears */}
      <section className="py-28 border-t border-border">
        <div className="mx-auto max-w-[1120px] px-6">
          <SectionHeading
            title="Every homeowner has the same three worries."
            subtitle="We built Alpha Firms to solve all three."
          />
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={stagger}
            className="mt-14 grid gap-6 md:grid-cols-3"
          >
            {fears.map((f) => (
              <motion.div
                key={f.worry}
                variants={fadeUp}
                className="rounded-2xl border border-border bg-surface p-8"
              >
                <p
                  className="font-display italic text-muted-foreground"
                  style={{ fontSize: 18, lineHeight: 1.45 }}
                >
                  “{f.worry}”
                </p>
                <div className="my-5 h-px" style={{ background: "var(--accent)", opacity: 0.4 }} />
                <p className="text-[15px] text-foreground" style={{ lineHeight: 1.6 }}>
                  {f.answer}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How */}
      <section id="how" className="py-28 border-t border-border">
        <div className="mx-auto max-w-[1120px] px-6">
          <SectionHeading
            eyebrow="How It Works"
            title="From idea to matched professional in 24 hours."
          />
          <Timeline steps={steps} />
        </div>
      </section>

      {/* Right matching */}
      <section className="py-28 border-t border-border">
        <div className="mx-auto max-w-[1120px] px-6 grid gap-16 md:grid-cols-2 items-center">
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
            className="font-display italic text-accent"
            style={{ fontSize: "clamp(32px, 4.4vw, 54px)", lineHeight: 1.1 }}
          >
            “Most platforms give you a list. We give you a match.”
          </motion.p>
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={stagger}
            className="space-y-0"
          >
            {matchingFeatures.map((f) => (
              <motion.li
                key={f}
                variants={fadeUp}
                className="border-t border-border py-5 text-[16px] text-foreground"
              >
                {f}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 border-t border-border">
        <div className="mx-auto max-w-[1120px] px-6">
          <SectionHeading title="What happens when the right people find each other." />
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={stagger}
            className="mt-14 grid gap-6 md:grid-cols-3"
          >
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={fadeUp}>
                <TestimonialCard {...t} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Brief form */}
      <section id="brief" className="py-28 border-t border-border">
        <div className="mx-auto max-w-[680px] px-6">
          <SectionHeading
            align="center"
            title="Tell us about your project."
            subtitle="Free. Takes 3 minutes. We match you within 24 hours."
          />

          {submitted ? (
            <p
              className="mt-14 text-center font-display italic text-foreground"
              style={{ fontSize: 22, lineHeight: 1.45 }}
            >
              We've received your brief. Expect to hear from us within 24 hours.
            </p>
          ) : (
            <form
              onSubmit={(e: FormEvent) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="mt-14 space-y-5"
            >
              <FormField label="Your Name" id="name" required />
              <FormField label="Email Address" id="email" type="email" required />
              <FormField label="Phone Number" id="phone" type="tel" required />
              <FormField label="City / Location" id="city" required />
              <SelectField
                label="Project Type"
                id="type"
                options={["Home Renovation", "New Home", "Office", "Retail Space", "Other"]}
                required
              />
              <SelectField
                label="Approximate Budget"
                id="budget"
                options={["Under ₹5L", "₹5–15L", "₹15–30L", "₹30L+", "Not Sure Yet"]}
                required
              />
              <SelectField
                label="Timeline"
                id="timeline"
                options={["ASAP", "1–3 months", "3–6 months", "Flexible"]}
                required
              />
              <TextAreaField
                label="Describe Your Project"
                id="desc"
                rows={5}
                placeholder="What are you designing? What matters most to you? Any style references or inspirations?"
              />

              <BronzeButton type="submit" className="w-full py-4">
                Find My Match
              </BronzeButton>
              <p className="text-[11px] text-muted-foreground text-center" style={{ lineHeight: 1.5 }}>
                Your brief is reviewed by our team. We'll reach out within 24 hours with your matched designers. No spam, ever.
              </p>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
