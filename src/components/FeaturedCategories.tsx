import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motionVariants";

const categories = ["Furnitures", "Interior", "Home Decor", "Lighting"];

export function FeaturedCategories() {
  return (
    <section className="py-32 md:py-40 border-t border-border">
      <div className="mx-auto max-w-[1120px] px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <p className="eyebrow">Featured categories</p>
          <h2
            className="font-display font-light text-foreground mt-4"
            style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05 }}
          >
            Discover from INDIA's only trusted Interior &amp; Living Space Ecosystem
          </h2>
          <p className="mt-3 text-[15px] text-muted-foreground">
            INDIA's first trusted Interior &amp; Living Space Platform
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {categories.map((cat) => (
            <motion.a
              key={cat}
              href="#"
              variants={fadeUp}
              className="group flex items-center justify-center rounded-2xl border border-border bg-surface p-10 text-center card-hover"
              style={{ minHeight: 140 }}
            >
              <span className="font-display text-[22px] text-foreground group-hover:text-accent transition-colors">
                {cat}
              </span>
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mt-8 text-[14px] text-muted-foreground"
        >
          Didn't find the category you're looking for?{" "}
          <a href="#" className="text-accent hover:underline">
            View all
          </a>
        </motion.p>
      </div>
    </section>
  );
}
