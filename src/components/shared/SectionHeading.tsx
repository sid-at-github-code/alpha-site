import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motionVariants";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={fadeUp}
      className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2
        className="font-display font-light text-foreground mt-4"
        style={{ fontSize: "clamp(34px, 4.8vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-[17px] text-muted-foreground" style={{ lineHeight: 1.6 }}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
