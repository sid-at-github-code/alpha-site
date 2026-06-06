import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motionVariants";

const testimonials = [
  { name: "Adam Jarod", role: "Sales manager" },
  { name: "Emily Rees", role: "Marketing specialist" },
  { name: "John Smith", role: "Office assistant" },
  { name: "Paul Trueman", role: "Designer" },
  { name: "George Davin", role: "Project manager" },
];

const body =
  "Donec nibh nibh, tempus sit amet dignissim finibus ultricies vitae urna. Pellentesque at urna non laoreet. Aenean euismod, et laoreet luctus, justo ligula libero felis.";

function TestimonialCard({ name, role }: { name: string; role: string }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      style={{ perspective: 1200, minHeight: 260 }}
      onHoverStart={() => setFlipped(true)}
      onHoverEnd={() => setFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          minHeight: 260,
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
            filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.10))",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          {/* 5 coral stars */}
          <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ color: "#F87B54", fontSize: 18, lineHeight: 1 }}>★</span>
            ))}
          </div>
          <p
            style={{
              fontSize: 15,
              color: "var(--muted-foreground)",
              lineHeight: 1.7,
              flex: 1,
            }}
          >
            "{body}"
          </p>
          <div
            style={{
              marginTop: 24,
              paddingTop: 24,
              borderTop: "1px solid var(--border)",
            }}
          >
            <p
              style={{
                fontFamily: "Poppins",
                fontSize: 17,
                fontWeight: 600,
                color: "var(--foreground)",
              }}
            >
              {name}
            </p>
            <p
              style={{
                fontFamily: "Poppins",
                fontSize: 11,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "var(--accent)",
                marginTop: 4,
              }}
            >
              {role}
            </p>
          </div>
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
            border: "1px solid rgba(248,123,84,0.30)",
            background: "rgba(248,123,84,0.08)",
            padding: 32,
            filter: "drop-shadow(0 4px 28px rgba(248,123,84,0.16))",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <p
            style={{
              fontFamily: "Poppins",
              fontSize: 28,
              fontWeight: 700,
              color: "var(--foreground)",
              letterSpacing: "-0.025em",
              lineHeight: 1.15,
            }}
          >
            {name}
          </p>
          <p
            style={{
              fontFamily: "Poppins",
              fontSize: 13,
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "#F87B54",
              marginTop: 10,
            }}
          >
            {role}
          </p>
          <span
            style={{
              display: "inline-block",
              marginTop: 20,
              padding: "4px 12px",
              borderRadius: 100,
              border: "1px solid rgba(248,123,84,0.40)",
              background: "rgba(248,123,84,0.12)",
              fontFamily: "Poppins",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#F87B54",
            }}
          >
            Verified member
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section
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
          background: "radial-gradient(ellipse at center, rgba(248,123,84,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="mx-auto max-w-[1120px] px-6" style={{ position: "relative" }}>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <p className="eyebrow">What our clients say</p>
          <h2 className="mt-4 h2-spec text-foreground">Testimonials</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} name={t.name} role={t.role} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
