import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motionVariants";

export type TimelineStep = { n: string; title: string; body: string };

export function Timeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={stagger}
      className="relative mt-16 grid gap-8 md:gap-6 md:grid-cols-4"
    >
      <div
        aria-hidden
        className="hidden md:block absolute top-[18px] left-[12%] right-[12%]"
        style={{ borderTop: "1px solid var(--accent)", opacity: 0.35 }}
      />
      {steps.map((s) => (
        <motion.div key={s.n} variants={fadeUp} className="relative">
          <div className="flex items-center gap-3">
            <span
              className="inline-block h-2 w-2 rounded-full bg-accent"
              style={{ boxShadow: "0 0 0 6px rgba(184,149,106,0.12)" }}
            />
            <span className="font-mono text-[11px] text-accent uppercase tracking-[0.16em]">
              {s.n}
            </span>
          </div>
          <h3 className="mt-5 font-display font-light text-foreground" style={{ fontSize: 22 }}>
            {s.title}
          </h3>
          <p className="mt-3 text-[14px] text-muted-foreground" style={{ lineHeight: 1.65 }}>
            {s.body}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}
