import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motionVariants";

const logos = ["ATELIER", "MONOLITH", "FORMA", "KINFOLK", "STUDIO ORE"];

export function TrustBar() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={fadeUp}
      className="border-y border-border/60 py-10"
    >
      <div className="mx-auto max-w-[1120px] px-6">
        <p className="text-center text-[12px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
          Trusted by professionals across 15+ cities
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-14 gap-y-4 opacity-40">
          {logos.map((l) => (
            <span
              key={l}
              className="text-[14px] tracking-[0.3em] text-foreground"
              style={{ fontFamily: "var(--font-sans)" }}
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
