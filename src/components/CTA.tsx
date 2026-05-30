import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motionVariants";

export function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden py-44 border-t border-border">
      {/* Ambient center glow */}
      <div className="pointer-events-none absolute inset-0 ambient-center" />

      {/* Concentric circles — slightly more visible on dark */}
      <svg
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px]"
        viewBox="0 0 1000 1000"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.4"
        style={{ color: "rgba(200,169,106,0.12)" }}
      >
        <circle cx="500" cy="500" r="490" />
        <circle cx="500" cy="500" r="390" />
        <circle cx="500" cy="500" r="290" />
        <circle cx="500" cy="500" r="190" />
        <circle cx="500" cy="500" r="90" />
      </svg>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={fadeUp}
        className="relative mx-auto max-w-[820px] px-6 text-center"
      >
        <p className="eyebrow">Get Started</p>

        <h2
          className="text-gradient font-display font-light mt-5"
          style={{ fontSize: "clamp(44px, 6.5vw, 88px)", lineHeight: 0.97 }}
        >
          Your next project
          <br />
          starts here.
        </h2>

        <p
          className="mt-7 text-[17px] text-muted-foreground max-w-[520px] mx-auto"
          style={{ lineHeight: 1.65 }}
        >
          Whether you're a customer, a designer, or a supplier — Alpha Firms is where
          interior projects begin.
        </p>

        <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center rounded-full bg-accent px-8 py-3.5 text-[11px] font-mono uppercase tracking-[0.12em] text-background hover:opacity-90 transition glow-btn"
          >
            Get Started
          </a>
          <a
            href="#"
            className="inline-flex items-center rounded-full border border-accent/40 px-8 py-3.5 text-[11px] font-mono uppercase tracking-[0.12em] text-accent hover:bg-accent/10 transition"
          >
            Talk to Us
          </a>
        </div>
      </motion.div>
    </section>
  );
}
