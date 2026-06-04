import { useState, useEffect, useRef, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motionVariants";

import furnitureImg from "@/assets/furniture.jpg";
import interiorImg  from "@/assets/interior.jpg";
import homeDecorImg from "@/assets/home-decor.jpg";
import lightsImg    from "@/assets/lights.jpg";

const CATEGORIES = [
  { label: "Furnitures", tilt: -8,  image: furnitureImg },
  { label: "Interior",   tilt:  5,  image: interiorImg  },
  { label: "Home Decor", tilt: -4,  image: homeDecorImg },
  { label: "Lighting",   tilt:  9,  image: lightsImg    },
];

const RADIUS     = 155;
const CARD_W     = 270;
const CARD_H     = 196;
const DEG_PER_MS = 0.007;

/* ── Hover text item with animated orange underline ── */
function CategoryLabel({ label, delay }: { label: string; delay: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={{ hidden: { opacity: 0, x: 24 }, show: { opacity: 1, x: 0, transition: { duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] } } }}
      whileHover="hovered"
      style={{ cursor: "pointer" }}
    >
      <motion.p
        variants={{ hovered: { color: "var(--accent)" } }}
        transition={{ duration: 0.18 }}
        style={{
          fontFamily:    "Poppins, sans-serif",
          fontSize:      "clamp(28px, 3.2vw, 48px)",
          fontWeight:    600,
          lineHeight:    1.1,
          letterSpacing: "-0.03em",
          color:         "var(--foreground)",
          margin:        0,
          transition:    "color 0.18s",
        }}
      >
        {label}
      </motion.p>

      {/* Orange loading-bar underline */}
      <div style={{ position: "relative", height: 3, marginTop: 8, borderRadius: 2, overflow: "hidden", background: "var(--border)" }}>
        <motion.div
          variants={{ hovered: { scaleX: 1 }, hidden: { scaleX: 0 }, show: { scaleX: 0 } }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          style={{
            position:        "absolute",
            inset:            0,
            background:      "var(--accent)",
            transformOrigin: "left",
            borderRadius:     2,
          }}
        />
      </div>
    </motion.div>
  );
}

export function FeaturedCategories() {
  const anglesRef  = useRef(CATEGORIES.map((_, i) => i * (360 / CATEGORIES.length)));
  const pausedRef  = useRef(false);
  const lastRef    = useRef(0);
  const rafRef     = useRef(0);
  const [angles,   setAngles]   = useState(anglesRef.current.slice());
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const tick = (now: number) => {
      if (lastRef.current && !pausedRef.current) {
        const dt = now - lastRef.current;
        anglesRef.current = anglesRef.current.map(a => (a + dt * DEG_PER_MS) % 360);
        setAngles(anglesRef.current.slice());
      }
      lastRef.current = now;
      rafRef.current  = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height });
  };

  return (
    <section className="border-t border-border" style={{ padding: "96px 0", overflow: "hidden" }}>
      <div
        className="mx-auto px-6"
        style={{ maxWidth: 1280, display: "flex", alignItems: "center", gap: 0 }}
      >

        {/* ── LEFT: orbit stage ── */}
        <div
          onMouseMove={handleMouseMove}
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; setMousePos({ x: 0.5, y: 0.5 }); }}
          style={{
            position:    "relative",
            flexShrink:   0,
            width:        520,
            height:       520,
            perspective:  900,
          }}
        >
          {/* Guide ring */}
          <div style={{
            position:      "absolute",
            top:           "50%",
            left:          "50%",
            width:         RADIUS * 2,
            height:        RADIUS * 2,
            transform:     "translate(-50%, -50%)",
            border:        "1px dashed var(--border)",
            borderRadius:  "50%",
            opacity:        0.35,
            pointerEvents: "none",
          }} />

          {CATEGORIES.map((cat, i) => {
            const rad = angles[i] * (Math.PI / 180);
            const x   = Math.cos(rad) * RADIUS;
            const y   = Math.sin(rad) * RADIUS;
            const pX  = (mousePos.x - 0.5) * 14;
            const pY  = (mousePos.y - 0.5) * 14;

            return (
              <div
                key={cat.label}
                style={{
                  position:       "absolute",
                  top:            "50%",
                  left:           "50%",
                  width:          CARD_W,
                  height:         CARD_H,
                  transform:      `translate(calc(${x}px - 50%), calc(${y}px - 50%)) rotateX(${pY}deg) rotateY(${pX}deg) rotateZ(${cat.tilt}deg)`,
                  transformStyle: "preserve-3d",
                }}
              >
                <a
                  href="#"
                  style={{
                    display:        "block",
                    position:       "relative",
                    width:          "100%",
                    height:         "100%",
                    borderRadius:   16,
                    overflow:       "hidden",
                    border:         "1px solid var(--border)",
                    boxShadow:      "rgba(64,83,100,0.18) 0px 10px 32px 0px",
                    textDecoration: "none",
                    transition:     "box-shadow 0.2s, border-color 0.2s",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.boxShadow   = "0 0 0 2px rgba(248,123,84,0.4), rgba(248,123,84,0.14) 0px 10px 32px";
                    el.style.borderColor = "rgba(248,123,84,0.5)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.boxShadow   = "rgba(64,83,100,0.18) 0px 10px 32px 0px";
                    el.style.borderColor = "var(--border)";
                  }}
                >
                  <img
                    src={cat.image}
                    alt={cat.label}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                  <div style={{
                    position:   "absolute",
                    inset:       0,
                    background: "linear-gradient(to top, rgba(15,24,35,0.72) 0%, transparent 55%)",
                    display:    "flex",
                    alignItems: "flex-end",
                    padding:    "12px 14px",
                  }}>
                    <span style={{
                      fontFamily:    "Poppins, sans-serif",
                      fontSize:       13,
                      fontWeight:     600,
                      color:          "#ffffff",
                      textTransform:  "uppercase",
                      letterSpacing:  "0.1em",
                    }}>
                      {cat.label}
                    </span>
                  </div>
                </a>
              </div>
            );
          })}
        </div>

        {/* ── RIGHT: stacked category labels ── */}
        <div
          style={{
            flex:          1,
            paddingLeft:   72,
            display:       "flex",
            flexDirection: "column",
            gap:           36,
          }}
        >
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
            className="eyebrow"
            style={{ marginBottom: 4 }}
          >
            Featured categories
          </motion.p>

          {CATEGORIES.map((cat, i) => (
            <CategoryLabel key={cat.label} label={cat.label} delay={i * 0.1} />
          ))}

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } } }}
            style={{ fontSize: 13, color: "var(--muted-foreground)", margin: 0 }}
          >
            Didn't find what you're looking for?{" "}
            <a href="#" style={{ color: "var(--accent)", textDecoration: "none" }}>View all →</a>
          </motion.p>
        </div>

      </div>
    </section>
  );
}
