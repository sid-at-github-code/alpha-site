import { motion } from "framer-motion";
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
    <section className="py-32 md:py-40 border-t border-border">
      <div className="mx-auto max-w-[1120px] px-6">
        <motion.div
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
          <a href="#" className="hidden md:inline-block text-[13px] text-accent hover:underline transition mb-2">
            View all →
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="mt-14 grid gap-5 sm:grid-cols-2"
        >
          {articles.map((article) => (
            <motion.a
              key={article.id}
              href="#"
              variants={fadeUp}
              className="group rounded-2xl border border-border bg-surface p-8 card-hover"
            >
              <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.14em] text-muted-foreground mb-5">
                <span>{article.author}</span>
                <span aria-hidden>·</span>
                <span>{article.date}</span>
              </div>
              <h3
                style={{ fontFamily: "Poppins", fontSize: "clamp(16px, 1.8vw, 20px)", fontWeight: 500, lineHeight: 1.35, letterSpacing: "-0.02em", color: "var(--foreground)", transition: "color 0.2s" }}
              >
                {article.title}
              </h3>
            </motion.a>
          ))}
        </motion.div>

        <a href="#" className="md:hidden mt-6 inline-block text-[13px] text-accent hover:underline">
          View all →
        </a>
      </div>
    </section>
  );
}
