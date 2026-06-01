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

export function Testimonials() {
  return (
    <section className="py-32 md:py-40 border-t border-border">
      <div className="mx-auto max-w-[1120px] px-6">
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
            <motion.div
              key={t.name}
              variants={fadeUp}
              className="rounded-2xl border border-border bg-surface p-8"
            >
              <p className="text-[15px] text-muted-foreground" style={{ lineHeight: 1.7 }}>
                "{body}"
              </p>
              <div className="mt-6 pt-6 border-t border-border">
                <p style={{ fontFamily: "Poppins", fontSize: 17, fontWeight: 600, color: "var(--foreground)" }}>{t.name}</p>
                <p className="mt-1" style={{ fontFamily: "Poppins", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--accent)" }}>
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
