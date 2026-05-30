import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { fadeUp, viewportOnce } from "@/lib/motionVariants";

const stats = [
  { value: 500, suffix: "+", label: "Projects" },
  { value: 120, suffix: "+", label: "Professionals" },
  { value: 50, suffix: "+", label: "Suppliers" },
  { value: 15, suffix: "+", label: "Cities" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toString());

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, { duration: 1.6, ease: [0.25, 0.1, 0.25, 1] });
    return () => controls.stop();
  }, [inView, to, count]);

  return (
    <span
      className="font-display font-light text-foreground"
      style={{ fontSize: "clamp(56px, 9vw, 96px)", lineHeight: 1 }}
    >
      <motion.span ref={ref}>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="py-32 md:py-40 border-t border-border">
      <div className="mx-auto max-w-[1120px] px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <p className="eyebrow">By the Numbers</p>
          <h2
            className="font-display font-light text-foreground mt-4"
            style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05 }}
          >
            The numbers speak for themselves.
          </h2>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 md:divide-x divide-border">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={fadeUp}
              transition={{ delay: i * 0.08 }}
              className="px-2 md:px-8 py-6"
            >
              <Counter to={s.value} suffix={s.suffix} />
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
