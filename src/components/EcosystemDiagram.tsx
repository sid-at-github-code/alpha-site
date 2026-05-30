import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { fadeUp, viewportOnce } from "@/lib/motionVariants";

type NodeKey = "customers" | "designers" | "suppliers";

const details: Record<NodeKey, { title: string; items: string[] }> = {
  customers: {
    title: "Customers",
    items: ["Find verified professionals", "Request project quotes", "Track delivery"],
  },
  designers: {
    title: "Designers",
    items: ["Receive qualified leads", "Grow your project pipeline", "Build your profile"],
  },
  suppliers: {
    title: "Suppliers",
    items: ["Reach active professionals", "Showcase your catalog", "Drive B2B sales"],
  },
};

function OuterNode({
  label,
  active,
  onHover,
  className,
}: {
  label: string;
  active: boolean;
  onHover: () => void;
  className?: string;
}) {
  return (
    <button
      onMouseEnter={onHover}
      onFocus={onHover}
      className={`group absolute flex flex-col items-center ${className ?? ""}`}
    >
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-full border bg-surface transition-all duration-300 ${
          active ? "border-accent shadow-[0_0_0_6px_rgba(184,149,106,0.08)]" : "border-border"
        }`}
      >
        <div className="h-2 w-2 rounded-full bg-accent" />
      </div>
      <span className="mt-3 text-[12px] tracking-wide text-foreground">{label}</span>
    </button>
  );
}

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
          <h2
            className="font-display font-light text-foreground mt-4"
            style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05 }}
          >
            The network that moves projects forward.
          </h2>
          <p className="mt-5 text-[17px] text-muted-foreground">
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
          {/* Diagram */}
          <div className="relative mx-auto h-[460px] w-full max-w-[560px]">
            <svg
              aria-hidden
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 560 460"
              fill="none"
            >
              <defs>
                <path id="p-top" d="M 280 230 Q 280 130 280 70" />
                <path id="p-right" d="M 280 230 Q 400 230 490 230" />
                <path id="p-bottom" d="M 280 230 Q 280 330 280 390" />
              </defs>
              <use href="#p-top" stroke="#B8956A" strokeOpacity="0.3" strokeWidth="1" />
              <use href="#p-right" stroke="#B8956A" strokeOpacity="0.3" strokeWidth="1" />
              <use href="#p-bottom" stroke="#B8956A" strokeOpacity="0.3" strokeWidth="1" />

              {(["p-top", "p-right", "p-bottom"] as const).map((id, i) => (
                <circle key={id} r="3" fill="#B8956A">
                  <animateMotion dur="3s" repeatCount="indefinite" begin={`${i * 0.6}s`}>
                    <mpath href={`#${id}`} />
                  </animateMotion>
                </circle>
              ))}
            </svg>

            {/* Center node */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="ambient-pulse flex h-20 w-20 items-center justify-center rounded-full border-2 border-accent bg-surface">
                <span className="font-display text-[22px] text-foreground">A</span>
              </div>
              <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Alpha Firms
              </p>
            </div>

            <OuterNode
              label="Customers"
              active={hovered === "customers"}
              onHover={() => setHovered("customers")}
              className="left-1/2 top-0 -translate-x-1/2"
            />
            <OuterNode
              label="Designers"
              active={hovered === "designers"}
              onHover={() => setHovered("designers")}
              className="right-0 top-1/2 -translate-y-1/2"
            />
            <OuterNode
              label="Suppliers"
              active={hovered === "suppliers"}
              onHover={() => setHovered("suppliers")}
              className="left-1/2 bottom-0 -translate-x-1/2"
            />
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
                className="rounded-xl border border-border border-l-[3px] border-l-accent bg-surface p-6 shadow-md"
              >
                <p className="eyebrow">For</p>
                <h3 className="mt-2 font-display text-[28px] text-foreground">
                  {details[hovered].title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {details[hovered].items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-[15px] text-muted-foreground">
                      <span className="mt-2 h-px w-4 bg-accent" />
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
