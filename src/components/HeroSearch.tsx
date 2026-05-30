import { useState } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motionVariants";

const popularTags = ["interior-designing", "Interior", "furnitures-decors", "Bathroom"];

export function HeroSearch() {
  const [location, setLocation] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <section className="relative min-h-[86vh] flex items-center border-b border-border overflow-hidden">
      {/* Warm ambient glow from top */}
      <div className="pointer-events-none absolute inset-0 ambient-top" />

      {/* Dot grid — tech texture */}
      <div
        className="pointer-events-none absolute inset-0 dot-grid"
        style={{ opacity: 0.035 }}
      />

      {/* Vignette edges */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 50%, var(--background) 100%)",
        }}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative mx-auto max-w-[960px] w-full px-6 py-36 text-center"
      >
        <motion.p variants={fadeUp} className="eyebrow">
          India's Premium Interior Marketplace
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="text-gradient font-display font-light mt-6 mx-auto"
          style={{
            fontSize: "clamp(54px, 9vw, 112px)",
            lineHeight: 0.93,
            letterSpacing: "-0.025em",
            maxWidth: 860,
          }}
        >
          Find Anything
          <br />
          For Your
          <br />
          Dream Space.
        </motion.h1>

        <motion.div
          variants={fadeUp}
          className="mt-12 flex gap-3 max-w-lg mx-auto"
          style={{
            borderRadius: 999,
            transition: "box-shadow 0.3s",
            boxShadow: focused ? "0 0 0 1px rgba(200,169,106,0.4), 0 0 28px rgba(200,169,106,0.15)" : "none",
          }}
        >
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="flex-1 rounded-full border border-border bg-surface px-5 py-3.5 text-[14px] text-foreground placeholder:text-muted-foreground outline-none focus:border-accent/50 transition-colors"
          />
          <button className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-[11px] font-mono uppercase tracking-[0.12em] text-background hover:opacity-88 transition-opacity">
            <Search size={13} strokeWidth={2.5} />
            Search
          </button>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-6 flex flex-wrap items-center justify-center gap-2"
        >
          <span className="text-[11px] font-mono uppercase tracking-[0.12em] text-muted-foreground mr-1">
            What's popular:
          </span>
          {popularTags.map((tag) => (
            <a
              key={tag}
              href="#"
              className="text-[11px] font-mono text-accent/65 hover:text-accent border border-border hover:border-accent/40 rounded-full px-3 py-1 transition-all duration-200"
            >
              {tag}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
