import { useState } from "react";
import { m } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motionVariants";

const features = [
  {
    title: "Verified Network",
    body: "Every member is reviewed. Every connection is intentional.",
    back: "Every member earns their place.",
    wide: true,
  },
  {
    title: "Intelligent Matching",
    body: "The right project finds the right professional — not just any professional.",
    back: "Right project. Right person. Every time.",
  },
  {
    title: "Zero Wasted Time",
    body: "No cold outreach. No guesswork. Just qualified introductions.",
    back: "Introductions only. No noise.",
  },
  {
    title: "Unified Workflow",
    body: "Briefs, quotes, timelines, and communication — one place.",
    back: "One login. Everything you need.",
  },
  {
    title: "Built to Scale",
    body: "From solo designers to large suppliers, the platform grows with your business.",
    back: "Solo to enterprise. One platform.",
  },
  {
    title: "Three-Sided Value",
    body: "Customers, designers, and suppliers all win — by design.",
    back: "Homeowners · Designers · Suppliers",
  },
];

function FlipCard({ title, body, back, wide }: { title: string; body: string; back: string; wide?: boolean }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <m.div
      variants={fadeUp}
      className={wide ? "md:col-span-2" : ""}
      style={{ perspective: 1200, minHeight: 220 }}
      onHoverStart={() => setFlipped(true)}
      onHoverEnd={() => setFlipped(false)}
    >
      <m.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          minHeight: 220,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            borderRadius: 16,
            border: "1px solid var(--border)",
            background: "var(--surface)",
            padding: 32,
            filter: "drop-shadow(0 4px 24px rgba(0,0,0,0.12))",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* accent top stripe */}
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
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "var(--foreground)",
            }}
          >
            {title}
          </h3>
          <p
            style={{
              marginTop: 12,
              fontSize: 15,
              color: "var(--muted-foreground)",
              lineHeight: 1.65,
            }}
          >
            {body}
          </p>
        </div>

        {/* Back */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderRadius: 16,
            border: "1px solid rgba(248,123,84,0.35)",
            background: "linear-gradient(135deg, rgba(248,123,84,0.13) 0%, rgba(248,123,84,0.05) 100%)",
            padding: 32,
            filter: "drop-shadow(0 4px 32px rgba(248,123,84,0.18))",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <span
            aria-hidden
            style={{
              position: "absolute",
              inset: "0 0 auto 0",
              height: 2,
              borderRadius: "16px 16px 0 0",
              background: "#F87B54",
            }}
          />
          <h3
            style={{
              fontFamily: "Poppins",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "-0.025em",
              color: "#F87B54",
              lineHeight: 1.2,
            }}
          >
            {title}
          </h3>
          <p
            style={{
              marginTop: 14,
              fontSize: 17,
              fontFamily: "Poppins",
              fontWeight: 500,
              color: "var(--foreground)",
              lineHeight: 1.5,
            }}
          >
            {back}
          </p>
        </div>
      </m.div>
    </m.div>
  );
}

export function WhyAlphaFirms() {
  return (
    <section
      id="why"
      className="py-32 md:py-40 border-t border-border"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Ambient glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 700,
          height: 400,
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
          <p className="eyebrow">Why Alpha Firms</p>
          <h2 className="mt-4 h2-spec text-foreground">
            Built for professionals who don't have time to waste.
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
            <FlipCard key={f.title} title={f.title} body={f.body} back={f.back} wide={f.wide} />
          ))}
        </m.div>
      </div>
    </section>
  );
}
