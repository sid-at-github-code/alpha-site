import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motionVariants";

const steps = [
  {
    n: "01",
    title: "Connect",
    body: "Create your profile as a customer, designer, or supplier. You're in the network immediately.",
  },
  {
    n: "02",
    title: "Match",
    body: "Alpha Firms surfaces relevant connections — qualified, verified, ready to move.",
  },
  {
    n: "03",
    title: "Execute",
    body: "Coordinate, communicate, and close projects — from brief to completion.",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-32 md:py-40 border-t border-border">
      <div className="mx-auto max-w-[1120px] px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <p className="eyebrow">How It Works</p>
          <h2 className="mt-4 h2-spec text-foreground">
            Simple for everyone involved.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="relative mt-16 grid gap-6 md:grid-cols-3"
        >
          <div
            aria-hidden
            className="hidden md:block absolute top-[80px] left-[16%] right-[16%] border-t border-dashed border-border"
          />
          {steps.map((s) => (
            <motion.div
              key={s.n}
              variants={fadeUp}
              className="relative rounded-2xl border border-border bg-surface p-8 card-hover"
            >
              <span className="font-mono text-[11px] text-accent">{s.n}</span>
              <h3 className="mt-6 text-foreground" style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em" }}>{s.title}</h3>
              <p className="mt-3 text-[15px] text-muted-foreground" style={{ lineHeight: 1.65 }}>
                {s.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
