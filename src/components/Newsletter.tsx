import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motionVariants";

export function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="py-24 md:py-32 border-t border-border bg-surface">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={fadeUp}
        className="mx-auto max-w-[640px] px-6 text-center"
      >
        <p className="eyebrow">Stay in the loop</p>
        <h2
          className="font-display font-light text-foreground mt-4"
          style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.1 }}
        >
          Sign up to receive the latest updates and news
        </h2>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-full border border-border bg-background px-5 py-3 text-[14px] text-foreground placeholder:text-muted-foreground outline-none focus:border-accent transition-colors"
          />
          <button
            type="submit"
            className="rounded-full bg-accent px-6 py-3 text-[11px] font-mono uppercase tracking-[0.12em] text-white hover:opacity-90 transition-opacity"
          >
            Subscribe
          </button>
        </form>
      </motion.div>
    </section>
  );
}
