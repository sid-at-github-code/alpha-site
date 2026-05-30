import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motionVariants";

const features = [
  {
    title: "Quality over quantity",
    body: "Every listing on AlphaFirms is reviewed before it goes live. No spam, no ghost vendors — just verified businesses you can actually trust with your space.",
  },
  {
    title: "Signal-driven visibility, not bidding wars",
    body: "Your listing ranks by relevance and credibility — not by how much you spend. The best interior professionals rise to the top because of their work, not their wallet.",
  },
  {
    title: "Explore from the best available ads",
    body: "Browse curated listings across Furniture, Interior Design, Home Décor, and Lighting — all in one place, filtered by what you actually need.",
  },
];

export function PlatformValue() {
  return (
    <section className="py-32 md:py-40 border-t border-border">
      <div className="mx-auto max-w-[1120px] px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="max-w-3xl"
        >
          <p className="eyebrow">Why AlphaFirms?</p>
          <h2
            className="font-display font-light text-foreground mt-4"
            style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05 }}
          >
            INDIA's only trusted Interior &amp; Living Space Ecosystem
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="mt-16 grid gap-5 md:grid-cols-3"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-8 card-hover"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"
              />
              <h3 className="font-display text-[22px] text-foreground">{f.title}</h3>
              <p className="mt-3 text-[15px] text-muted-foreground" style={{ lineHeight: 1.65 }}>
                {f.body}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mt-20 rounded-2xl border border-border bg-surface p-10 md:p-14"
        >
          <p className="eyebrow">The Platform</p>
          <h3
            className="font-display font-light text-foreground mt-4"
            style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.1 }}
          >
            India's only curated B2B2C platform — built for the living space industry.
          </h3>
          <p className="mt-5 text-[16px] text-muted-foreground max-w-3xl" style={{ lineHeight: 1.7 }}>
            AlphaFirms connects verified interior designers, furniture brands, manufacturers, and décor firms with customers across India. Whether you're furnishing a home, sourcing for a project, or growing your business — this is where India's interior ecosystem meets.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center rounded-full bg-accent px-7 py-3 text-[11px] font-mono uppercase tracking-[0.12em] text-white hover:opacity-90 transition"
          >
            Explore listings
          </a>
        </motion.div>
      </div>
    </section>
  );
}
