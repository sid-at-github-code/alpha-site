import { m } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motionVariants";

const articles = [
  {
    id: 1,
    title: "How Scandinavian Minimalism and Indian Craftsmanship Are Redefining Luxury Furniture in Mumbai",
    author: "Chief Editor",
    date: "May 11, 2026",
  },
  {
    id: 2,
    title: "LtdEd's New Collection Blends Couture-Inspired Elegance with Contemporary Craftsmanship",
    author: "Chief Editor",
    date: "May 11, 2026",
  },
  {
    id: 3,
    title: "Inside India's Most Expensive Celebrity Homes: Where Luxury Meets Legacy",
    author: "Chief Editor",
    date: "January 10, 2026",
  },
  {
    id: 4,
    title: "10 Popular Interior Design Styles Every Homeowner Should Know",
    author: "Chief Editor",
    date: "January 1, 2026",
  },
];

export function BlogNews() {
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
          width: 800,
          height: 450,
          background: "radial-gradient(ellipse at center, rgba(248,123,84,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="mx-auto max-w-[1120px] px-6" style={{ position: "relative" }}>
        <m.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="flex items-end justify-between"
        >
          <div>
            <p className="eyebrow">News</p>
            <h2 className="mt-4 h2-spec text-foreground">The latest news</h2>
          </div>
          {/* "View all" — blog section coming soon */}
          <span
            className="hidden md:inline-flex items-center mb-2 px-4 py-2 rounded-full text-[13px] font-medium"
            style={{
              border: "1px solid rgba(248,123,84,0.3)",
              color: "rgba(248,123,84,0.5)",
              fontFamily: "Poppins",
              letterSpacing: "0.01em",
              cursor: "default",
            }}
          >
            More coming soon
          </span>
        </m.div>

        <m.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="mt-14 grid gap-5 sm:grid-cols-2"
        >
          {articles.map((article) => (
            <m.div
              key={article.id}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group relative overflow-hidden rounded-2xl border border-border p-8"
              style={{
                background: "var(--surface-raised)",
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

              {/* NEWS badge + meta row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 20,
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "3px 9px",
                    borderRadius: 100,
                    background: "rgba(248,123,84,0.12)",
                    border: "1px solid rgba(248,123,84,0.30)",
                    fontFamily: "Poppins",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#F87B54",
                  }}
                >
                  NEWS
                </span>
                <span
                  style={{
                    fontSize: 11,
                    fontFamily: "monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: "var(--muted-foreground)",
                  }}
                >
                  {article.author} · {article.date}
                </span>
              </div>

              <m.h3
                whileHover={{ color: "#F87B54" }}
                transition={{ duration: 0.2 }}
                style={{
                  fontFamily: "Poppins",
                  fontSize: "clamp(16px, 1.8vw, 20px)",
                  fontWeight: 500,
                  lineHeight: 1.35,
                  letterSpacing: "-0.02em",
                  color: "var(--foreground)",
                }}
              >
                {article.title}
              </m.h3>
            </m.div>
          ))}
        </m.div>

        {/* Mobile "More coming soon" */}
        <span
          className="md:hidden mt-6 inline-flex items-center px-4 py-2 rounded-full text-[13px] font-medium"
          style={{
            border: "1px solid rgba(248,123,84,0.3)",
            color: "rgba(248,123,84,0.5)",
            fontFamily: "Poppins",
            cursor: "default",
          }}
        >
          More coming soon
        </span>
      </div>
    </section>
  );
}
