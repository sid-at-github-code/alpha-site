import { AnimatePresence, motion } from "framer-motion";
import { useState, lazy, Suspense } from "react";
import { fadeUp, viewportOnce } from "@/lib/motionVariants";
import { ClientOnly } from "@/components/ClientOnly";
import type { NodeKey } from "@/components/three/EcosystemCanvas";

const EcosystemCanvas = lazy(
  () => import("@/components/three/EcosystemCanvas")
);

const details: Record<NodeKey, { title: string; items: string[] }> = {
  customers: {
    title: "Customers",
    items: [
      "Find verified professionals",
      "Request project quotes",
      "Track delivery",
    ],
  },
  designers: {
    title: "Designers",
    items: [
      "Receive qualified leads",
      "Grow your project pipeline",
      "Build your profile",
    ],
  },
  suppliers: {
    title: "Suppliers",
    items: [
      "Reach active professionals",
      "Showcase your catalog",
      "Drive B2B sales",
    ],
  },
};

export function EcosystemDiagram() {
  const [hovered, setHovered] = useState<NodeKey>("designers");

  return (
    <section id="ecosystem" className="py-32 md:py-40">
      <div className="mx-auto max-w-[1120px] px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="max-w-2xl"
        >
          <p className="eyebrow">The Network</p>
          <h2 className="mt-4 h2-spec text-foreground">
            The network that moves projects forward.
          </h2>
          <p className="mt-5 text-muted-foreground" style={{ lineHeight: 1.65 }}>
            Three parties. One platform. Infinite possibilities.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mt-20 grid lg:grid-cols-[1fr_360px] gap-12 items-center"
        >
          {/* 3D network canvas */}
          <div
            className="relative mx-auto w-full max-w-[560px] rounded-2xl overflow-hidden border border-border bg-surface"
            style={{ height: 460 }}
          >
            <ClientOnly
              fallback={
                <div className="flex h-full items-center justify-center">
                  <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-muted-foreground">
                    Loading…
                  </span>
                </div>
              }
            >
              <Suspense
                fallback={
                  <div className="flex h-full items-center justify-center">
                    <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-muted-foreground">
                      Loading…
                    </span>
                  </div>
                }
              >
                <EcosystemCanvas active={hovered} onHover={setHovered} />
              </Suspense>
            </ClientOnly>
          </div>

          {/* Detail card */}
          <div className="min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={hovered}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="rounded-xl border border-border border-l-[3px] bg-surface p-6"
                style={{ borderLeftColor: "var(--accent)" }}
              >
                <p className="eyebrow">For</p>
                <h3 className="mt-2 text-foreground" style={{ fontFamily: "Poppins", fontSize: 26, fontWeight: 500, letterSpacing: "-0.03em" }}>
                  {details[hovered].title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {details[hovered].items.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-3 text-[15px] text-muted-foreground"
                    >
                      <span className="mt-2 h-px w-4 shrink-0 bg-accent" />
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
