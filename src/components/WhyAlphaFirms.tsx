import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motionVariants";

const features = [
  {
    title: "Verified Network",
    body: "Every member is reviewed. Every connection is intentional.",
    wide: true,
  },
  {
    title: "Intelligent Matching",
    body: "The right project finds the right professional — not just any professional.",
  },
  {
    title: "Zero Wasted Time",
    body: "No cold outreach. No guesswork. Just qualified introductions.",
  },
  {
    title: "Unified Workflow",
    body: "Briefs, quotes, timelines, and communication — one place.",
  },
  {
    title: "Built to Scale",
    body: "From solo designers to large suppliers, the platform grows with your business.",
  },
  {
    title: "Three-Sided Value",
    body: "Customers, designers, and suppliers all win — by design.",
  },
];

export function WhyAlphaFirms() {
  return (
    <section id="why" className="py-32 md:py-40 border-t border-border">
      <div className="mx-auto max-w-[1120px] px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="max-w-3xl"
        >
          <p className="eyebrow">Why Alpha Firms</p>
          <h2 className="mt-4 h2-spec text-foreground">
            Built for professionals who don't have time to waste.
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
              className={`group relative overflow-hidden rounded-2xl border border-border bg-surface p-8 card-hover ${
                f.wide ? "md:col-span-2" : ""
              }`}
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100"
              />
              <h3 className="text-foreground h3-spec">{f.title}</h3>
              <p className="mt-3 text-[15px] text-muted-foreground" style={{ lineHeight: 1.65 }}>
                {f.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
