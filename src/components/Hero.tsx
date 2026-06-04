import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motionVariants";

const columns = [
  {
    n: "01",
    eyebrow: "For Homeowners",
    headline: "Your vision deserves the right hands.",
    body: "Stop scrolling through portfolios and hoping for the best. Tell us what you're building — we'll surface verified designers who've done exactly this before.",
    features: ["Pre-vetted professionals only", "Transparent project quoting", "End-to-end project visibility"],
    cta: "Find My Designer",
    href: "/homeowners",
  },
  {
    n: "02",
    eyebrow: "For Designers & Contractors",
    headline: "Spend less time finding work. Do more of it.",
    body: "Your next client is already on Alpha Firms. We match projects to your specialty, your location, and your capacity — no cold pitching required.",
    features: ["Qualified inbound leads", "Portfolio-driven profile", "Direct client communication"],
    cta: "Join as a Designer",
    href: "/designers",
  },
  {
    n: "03",
    eyebrow: "For Material Suppliers",
    headline: "Your catalog, in front of every active project.",
    body: "Designers specify materials at the start of every project. Be in the room when that decision is made — with a supplier profile that works as hard as you do.",
    features: ["Direct access to active designers", "Catalog and pricing showcase", "B2B lead generation"],
    cta: "List Your Products",
    href: "/suppliers",
  },
];

export function Hero() {
  return (
    <section className="relative pt-24 md:pt-28 border-t border-border">
      {/* Headline block */}
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
          className="mt-6 mx-auto"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "clamp(44px, 6.5vw, 80px)",
            fontWeight: 600,
            lineHeight: 1.15,
            letterSpacing: "-0.05em",
            color: "var(--foreground)",
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
          className="mt-8 mx-auto"
          style={{ maxWidth: 500, lineHeight: 1.65, color: "var(--muted-foreground)" }}
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
            className="group relative block px-8 md:px-10 py-16 md:py-20 min-h-[520px] border-b md:border-b-0 md:border-r border-border last:border-r-0 last:border-b-0"
            style={{ textDecoration: "none", backgroundColor: "transparent", transition: "background 0.3s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "rgba(0,0,238,0.03)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "transparent")}
          >
            {/* Decorative number */}
            <span
              aria-hidden
              style={{
                pointerEvents: "none",
                position: "absolute",
                bottom: 24,
                right: 24,
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(72px, 9vw, 130px)",
                color: "var(--accent)",
                opacity: 0.07,
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              {c.n}
            </span>

            {/* Top sweep on hover */}
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
              style={{ backgroundColor: "var(--accent)" }}
            />

            <div className="relative flex h-full flex-col">
              <p className="eyebrow">{c.eyebrow}</p>
              <h3
                className="mt-5 group-hover:translate-x-1 transition-transform duration-500"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "clamp(22px, 2.8vw, 36px)",
                  fontWeight: 500,
                  lineHeight: 1.3,
                  letterSpacing: "-0.025em",
                  color: "var(--foreground)",
                }}
              >
                {c.headline}
              </h3>
              <motion.ul
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { delayChildren: 0.6 + i * 0.1, staggerChildren: 0.08 } } }}
                className="mt-7 space-y-2"
                style={{ paddingLeft: 0, listStyle: "none" }}
              >
                {c.features.map((f) => (
                  <motion.li
                    key={f}
                    variants={fadeUp}
                    style={{
                      paddingLeft: 12,
                      borderLeft: "2px solid var(--accent)",
                      fontSize: 13,
                      fontWeight: 500,
                      color: "var(--foreground)",
                      lineHeight: 1.5,
                    }}
                  >
                    {f}
                  </motion.li>
                ))}
              </motion.ul>

              <div className="mt-auto pt-10">
                <span
                  className="inline-flex items-center gap-1.5 group-hover:gap-3 transition-all"
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "var(--accent)",
                    borderBottom: "1px solid transparent",
                  }}
                >
                  {c.cta} →
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Trust line */}
      <div className="border-b border-border">
        <p
          className="text-center py-5"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: 11,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            color: "var(--muted-foreground)",
            opacity: 0.7,
          }}
        >
          Trusted by professionals across 15+ cities · 500+ projects connected · Verified members only
        </p>
      </div>
    </section>
  );
}
