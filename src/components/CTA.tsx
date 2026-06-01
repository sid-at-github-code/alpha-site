import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motionVariants";

export function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden py-44 border-t border-border">
      <div className="pointer-events-none absolute inset-0 ambient-center" />

      {/* Concentric circles — blue tint */}
      <svg
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px]"
        viewBox="0 0 1000 1000"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.4"
        style={{ color: "rgba(0,0,238,0.10)" }}
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

        {/* H2 spec: 48px, 500, -1.92px tracking */}
        <h2
          className="mt-5"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "clamp(32px, 5vw, 64px)",
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: "-0.05em",
            color: "var(--foreground)",
          }}
        >
          Your next project
          <br />
          starts here.
        </h2>

        <p
          className="mt-7 max-w-[520px] mx-auto"
          style={{ color: "var(--muted-foreground)", lineHeight: 1.65 }}
        >
          Whether you're a customer, a designer, or a supplier — Alpha Firms is where
          interior projects begin.
        </p>

        <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
          <a href="#" className="btn-primary">Get Started</a>
          <a href="#" className="btn-secondary">Talk to Us</a>
        </div>
      </motion.div>
    </section>
  );
}
