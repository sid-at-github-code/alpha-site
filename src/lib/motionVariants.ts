import type { Variants } from "framer-motion";

export const ease = [0.25, 0.1, 0.25, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const viewportOnce = { once: true, amount: 0.3 } as const;
