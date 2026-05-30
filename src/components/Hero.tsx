import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motionVariants";

const columns = [
  {
    n: "01",
    eyebrow: "For Homeowners",
    headline: "Your vision deserves the right hands.",
    body: "Stop scrolling through portfolios and hoping for the best. Tell us what you're building — we'll surface verified designers who've done exactly this before.",
    features: [
      "Pre-vetted professionals only",
      "Transparent project quoting",
      "End-to-end project visibility",
    ],
    cta: "Find My Designer",
    href: "/homeowners",
  },
  {
    n: "02",
    eyebrow: "For Designers & Contractors",
    headline: "Spend less time finding work. Do more of it.",
    body: "Your next client is already on Alpha Firms. We match projects to your specialty, your location, and your capacity — no cold pitching required.",
    features: [
      "Qualified inbound leads",
      "Portfolio-driven profile",
      "Direct client communication",
    ],
    cta: "Join as a Designer",
    href: "/designers",
  },
  {
    n: "03",
    eyebrow: "For Material Suppliers",
    headline: "Your catalog, in front of every active project.",
    body: "Designers specify materials at the start of every project. Be in the room when that decision is made — with a supplier profile that works as hard as you do.",
    features: [
      "Direct access to active designers",
      "Catalog and pricing showcase",
      "B2B lead generation",
    ],
    cta: "List Your Products",
    href: "/suppliers",
  },
];

export function Hero() {
  return (
    <section className="relative pt-24 md:pt-28 border-t border-border">
      {/* Section headline */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-[1120px] px-6 text-center"
      >
        <motion.p variants={fadeUp} className="eyebrow" style={{ letterSpacing: "0.14em" }}>
          The Interior Economy, Organized
        </motion.p>
        <motion.h1
          variants={fadeUp}
          className="font-display font-light text-foreground mt-6 mx-auto"
          style={{
            fontSize: "clamp(52px, 7.5vw, 100px)",
            lineHeight: 0.92,
            letterSpacing: "-0.02em",
          }}
        >
          Every space.
          <br />
          Every professional.
          <br />
          One address.
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-8 text-[17px] text-muted-foreground mx-auto"
          style={{ maxWidth: 500, lineHeight: 1.65 }}
        >
          Alpha Firms is where interior projects are born — connecting the people who need
          spaces designed, the talent who designs them, and the materials that make it real.
        </motion.p>
      </motion.div>

      {/* Three columns */}
      <div className="relative mt-20 grid grid-cols-1 md:grid-cols-3 border-y border-border">
        {columns.map((c, i) => (
          <motion.a
            key={c.n}
            href={c.href}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="group relative block px-8 md:px-10 py-16 md:py-20 min-h-[560px] transition-all duration-500 border-b md:border-b-0 md:border-r border-border last:border-r-0 last:border-b-0"
            style={{ backgroundColor: "transparent" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(200,169,106,0.035)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
            }}
          >
            {/* Decorative number */}
            <span
              aria-hidden
              className="pointer-events-none absolute bottom-6 right-6 font-display font-light text-accent select-none"
              style={{ fontSize: "clamp(80px, 10vw, 140px)", opacity: 0.09, lineHeight: 1 }}
            >
              {c.n}
            </span>

            {/* Top border glow on hover */}
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100"
            />

            <div className="relative flex h-full flex-col">
              <p
                className="font-mono uppercase text-accent"
                style={{ fontSize: 10, letterSpacing: "0.18em" }}
              >
                {c.eyebrow}
              </p>
              <h3
                className="font-display font-light text-foreground mt-6 transition-transform duration-500 group-hover:translate-x-1"
                style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.05 }}
              >
                {c.headline}
              </h3>
              <p
                className="mt-6 text-[15px] text-muted-foreground"
                style={{ lineHeight: 1.7 }}
              >
                {c.body}
              </p>

              <motion.ul
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { delayChildren: 0.6 + i * 0.1, staggerChildren: 0.08 } } }}
                className="mt-8 space-y-2.5"
              >
                {c.features.map((f) => (
                  <motion.li
                    key={f}
                    variants={fadeUp}
                    className="pl-3 border-l text-[13.5px] text-foreground/80"
                    style={{ borderColor: "var(--accent)", lineHeight: 1.5 }}
                  >
                    {f}
                  </motion.li>
                ))}
              </motion.ul>

              <div className="mt-auto pt-10">
                <span className="inline-flex items-center gap-1.5 text-[14px] text-accent border-b border-transparent group-hover:border-accent transition">
                  {c.cta}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Bottom trust line */}
      <div className="border-b border-border">
        <p
          className="text-center py-5 text-[12px] font-mono uppercase tracking-[0.14em] text-muted-foreground"
          style={{ opacity: 0.55 }}
        >
          Trusted by professionals across 15+ cities · 500+ projects connected · Verified members only
        </p>
      </div>
    </section>
  );
}
