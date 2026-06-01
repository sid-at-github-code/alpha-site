import { useState } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motionVariants";

const popularTags = ["interior-designing", "Interior", "furnitures-decors", "Bathroom"];

export function HeroSearch() {
  const [location, setLocation] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <section className="relative min-h-[88vh] flex items-center border-b border-border overflow-hidden">
      {/* Warm ambient glow */}
      <div className="pointer-events-none absolute inset-0 ambient-top" />

      {/* Content */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-[900px] w-full px-6 py-44 text-center"
      >
        <motion.p variants={fadeUp} className="eyebrow">
          India's Premium Interior Marketplace
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="mt-6 mx-auto"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "clamp(44px, 7vw, 80px)",
            fontWeight: 600,
            lineHeight: 1.2,
            letterSpacing: "-0.05em",
            color: "var(--foreground)",
            maxWidth: 820,
          }}
        >
          Find Anything
          <br />
          For Your Dream Space.
        </motion.h1>

        {/* Search bar */}
        <motion.div
          variants={fadeUp}
          className="mt-12 flex gap-3 max-w-lg mx-auto"
          style={{
            borderRadius: 100,
            transition: "box-shadow 0.3s",
            boxShadow: focused
              ? "0 0 0 2px rgba(248,123,84,0.45), 0 4px 24px rgba(248,123,84,0.16)"
              : "rgba(64,83,100,0.10) 0px 4px 20px 0px",
          }}
        >
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            style={{
              flex: 1,
              borderRadius: 100,
              border: "1px solid var(--border)",
              backgroundColor: "var(--surface-raised)",
              padding: "14px 20px",
              fontFamily: "Poppins, sans-serif",
              fontSize: 15,
              fontWeight: 500,
              color: "var(--foreground)",
              outline: "none",
            }}
          />
          <button
            className="btn-primary"
            style={{ minWidth: 120, minHeight: 51, fontSize: 14, padding: "0 24px", gap: 8, display: "inline-flex", alignItems: "center" }}
          >
            <Search size={14} strokeWidth={2.5} />
            Search
          </button>
        </motion.div>

        {/* Popular tags */}
        <motion.div
          variants={fadeUp}
          className="mt-6 flex flex-wrap items-center justify-center gap-2"
        >
          <span style={{ fontFamily:"Poppins", fontSize:11, fontWeight:600, textTransform:"uppercase", letterSpacing:"0.14em", color:"var(--muted-foreground)" }}>
            What's popular:
          </span>
          {popularTags.map((tag) => (
            <a
              key={tag}
              href="#"
              style={{
                fontFamily: "Poppins",
                fontSize: 11,
                fontWeight: 500,
                color: "var(--accent)",
                border: "1px solid var(--border)",
                borderRadius: 100,
                padding: "4px 12px",
                textDecoration: "none",
                transition: "border-color 0.2s",
              }}
            >
              {tag}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
