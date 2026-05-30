import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, Heart } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motionVariants";

const filters = ["All", "Furnitures", "Interior", "Lighting", "Home Decor"];

const ads = [
  { id: 1, title: "Looking Good Furniture", badge: "Featured", views: "218 Views", category: "Furnitures", initial: "L" },
  { id: 2, title: "LtdEd", badge: "Featured", views: "253 Views", category: "Interior", initial: "L" },
];

export function FeaturedAds() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? ads : ads.filter((a) => a.category === active);

  return (
    <section className="py-32 md:py-40 border-t border-border">
      <div className="mx-auto max-w-[1120px] px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <p className="eyebrow">Check out what's new</p>
          <h2
            className="font-display font-light text-foreground mt-4"
            style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05 }}
          >
            Featured ads
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <div className="mt-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-[11px] font-mono uppercase tracking-[0.14em] border transition-all duration-200 ${
                active === f
                  ? "bg-accent text-background border-accent glow-btn"
                  : "bg-surface text-muted-foreground border-border hover:border-accent/40 hover:text-accent"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3"
        >
          {filtered.map((ad) => (
            <motion.div
              key={ad.id}
              variants={fadeUp}
              className="group rounded-2xl border border-border bg-surface overflow-hidden card-hover"
            >
              {/* Placeholder image area — dark gradient, ready for real media */}
              <div
                className="relative h-56 flex items-center justify-center overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #1C1916 0%, #222018 50%, #1A1712 100%)",
                }}
              >
                {/* Decorative initial */}
                <span
                  className="font-display font-light text-accent select-none pointer-events-none"
                  style={{ fontSize: "clamp(60px, 8vw, 80px)", opacity: 0.12, lineHeight: 1 }}
                >
                  {ad.title[0]}
                </span>
                {/* Subtle ambient glow in image area */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(200,169,106,0.06) 0%, transparent 100%)",
                  }}
                />
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-background bg-accent px-2.5 py-1 rounded-full">
                    {ad.badge}
                  </span>
                  <span className="flex items-center gap-1.5 text-[12px] font-mono text-muted-foreground">
                    <Eye size={12} strokeWidth={1.5} />
                    {ad.views}
                  </span>
                </div>
                <h3 className="font-display text-[21px] text-foreground mt-2">{ad.title}</h3>
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 py-2 rounded-lg border border-border text-[11px] font-mono uppercase tracking-[0.12em] text-muted-foreground hover:border-accent/50 hover:text-accent transition">
                    Quick View
                  </button>
                  <button
                    aria-label="Add to favorites"
                    className="flex items-center justify-center w-9 h-9 rounded-lg border border-border text-muted-foreground hover:border-accent/50 hover:text-accent transition"
                  >
                    <Heart size={14} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
