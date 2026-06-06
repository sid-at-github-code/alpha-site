import { m } from "framer-motion";
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
    <section
      className="py-32 md:py-40 border-t border-border"
      style={{
        position: "relative",
        background: "linear-gradient(180deg, var(--surface) 0%, var(--background) 100%)",
        overflow: "hidden",
      }}
    >
      {/* Ambient coral glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 500,
          background: "radial-gradient(ellipse at center, rgba(248,123,84,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="mx-auto max-w-[1120px] px-6" style={{ position: "relative" }}>
        <m.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="max-w-3xl"
        >
          <p className="eyebrow">Why AlphaFirms?</p>
          <h2 className="mt-4 h2-spec text-foreground">
            INDIA's only trusted Interior &amp; Living Space Ecosystem
          </h2>
        </m.div>

        <m.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="mt-16 grid gap-5 md:grid-cols-3"
        >
          {features.map((f) => (
            <m.div
              key={f.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-8"
              style={{
                boxShadow: "0 2px 16px rgba(0,0,0,0.10)",
              }}
            >
              {/* Accent top stripe */}
              <span
                aria-hidden
                style={{
                  position: "absolute",
                  inset: "0 0 auto 0",
                  height: 2,
                  borderRadius: "16px 16px 0 0",
                  background: "linear-gradient(90deg, #F87B54, transparent)",
                }}
              />
              <h3
                style={{
                  fontFamily: "Poppins",
                  fontSize: 20,
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                  color: "var(--foreground)",
                }}
              >
                {f.title}
              </h3>
              <p
                className="mt-3 text-[15px] text-muted-foreground"
                style={{ lineHeight: 1.65 }}
              >
                {f.body}
              </p>
            </m.div>
          ))}
        </m.div>

        <m.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mt-20 rounded-2xl border border-border bg-surface p-10 md:p-14"
          style={{
            borderLeft: "3px solid #F87B54",
            boxShadow: "0 0 60px rgba(248,123,84,0.08), 0 4px 24px rgba(0,0,0,0.10)",
          }}
        >
          <p className="eyebrow">The Platform</p>
          <h3
            className="mt-4 text-foreground"
            style={{
              fontFamily: "Poppins",
              fontSize: "clamp(24px, 3.5vw, 40px)",
              fontWeight: 500,
              lineHeight: 1.2,
              letterSpacing: "-0.035em",
            }}
          >
            India's only curated B2B2C platform — built for the living space industry.
          </h3>
          <p
            className="mt-5 text-[16px] text-muted-foreground max-w-3xl"
            style={{ lineHeight: 1.7 }}
          >
            AlphaFirms connects verified interior designers, furniture brands, manufacturers, and décor firms with customers across India. Whether you're furnishing a home, sourcing for a project, or growing your business — this is where India's interior ecosystem meets.
          </p>
          <a href="#" className="btn-primary mt-8">
            Explore listings
          </a>
        </m.div>
      </div>
    </section>
  );
}
