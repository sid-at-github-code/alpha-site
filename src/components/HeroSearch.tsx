import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motionVariants";
import lightVideoUrl from "@/assets/main-light.webm?url";
import darkVideoUrl from "@/assets/main-dark.webm?url";

const popularTags = ["interior-designing", "Interior", "furnitures-decors", "Bathroom"];

function HeroVideo() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const el = document.documentElement;
    setIsDark(el.classList.contains("dark"));
    const observer = new MutationObserver(() => setIsDark(el.classList.contains("dark")));
    observer.observe(el, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <video
      key={isDark ? "dark" : "light"}
      src={isDark ? darkVideoUrl : lightVideoUrl}
      autoPlay
      muted
      playsInline
      style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "right center", display: "block" }}
    />
  );
}

export function HeroSearch() {
  const [location, setLocation] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <section
      className="border-b border-border bg-white dark:bg-background"
      style={{ position: "relative", minHeight: "88vh", overflow: "hidden" }}
    >

      {/* Video — 70% wide from the right, full section height, fully visible (no crop) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
        style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "70%" }}
      >
        <HeroVideo />
      </motion.div>

      {/* Text — left side, flows freely, may overlap video */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        style={{
          position: "relative",
          paddingTop: 120,
          paddingBottom: 120,
          paddingLeft: 64,
          maxWidth: 560,
        }}
      >
        <motion.div variants={fadeUp}>
          <span className="eyebrow">India's Premium Interior Marketplace</span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "clamp(38px, 5.2vw, 72px)",
            fontWeight: 600,
            lineHeight: 1.15,
            letterSpacing: "-0.05em",
            color: "var(--foreground)",
            marginTop: 16,
            marginBottom: 0,
          }}
        >
          Find Anything
          <br />
          For Your Dream Space.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 1.75,
            color: "var(--muted-foreground)",
            marginTop: 18,
            marginBottom: 0,
            maxWidth: 420,
          }}
        >
          Connect with top designers, source premium materials, and bring your interior vision to life — all in one place.
        </motion.p>

        {/* Search bar */}
        <motion.div
          variants={fadeUp}
          className="flex gap-3"
          style={{
            marginTop: 36,
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
              backgroundColor: "var(--background)",
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
          style={{ marginTop: 20, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8 }}
        >
          <span style={{ fontFamily: "Poppins", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--muted-foreground)" }}>
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
