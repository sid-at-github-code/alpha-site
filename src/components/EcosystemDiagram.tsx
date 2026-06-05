import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { fadeUp, viewportOnce } from "@/lib/motionVariants";
import logo from "@/assets/Alphafirms-logo-modified.png";

/* ─── coordinate space ─── */
const VW = 1000;
const VH = 420;
const HX = VW / 2;  // 500
const HY = VH / 2;  // 210

const BEAM_DUR = 0.82; // seconds — beam traversal time

type NodeDef = { id: string; label: string; sub: string; vx: number; vy: number };

const NODES: NodeDef[] = [
  { id: "suppliers",   label: "Suppliers",            sub: "Materials & Catalog",  vx: 78,  vy: 95  },
  { id: "homeowners",  label: "Homeowners",           sub: "Projects & Briefs",    vx: 78,  vy: HY  },
  { id: "architects",  label: "Architects",           sub: "Design & Planning",    vx: 78,  vy: 325 },
  { id: "designers",   label: "Designers",            sub: "Talent & Portfolio",   vx: 922, vy: 95  },
  { id: "investors",   label: "Investors",            sub: "Capital & Growth",     vx: 922, vy: HY  },
  { id: "electricals", label: "Lights & Electricals", sub: "Fixtures & Systems",   vx: 922, vy: 325 },
];

function beamPath(vx: number, vy: number): string {
  const dx = HX - vx;
  return `M ${vx} ${vy} C ${vx + dx * 0.42} ${vy} ${vx + dx * 0.58} ${HY} ${HX} ${HY}`;
}

/* ── Badge ── */
function NodeBadge({ n, isActive, onEnter, onLeave }: {
  n: NodeDef; isActive: boolean; onEnter: () => void; onLeave: () => void;
}) {
  return (
    <div
      className="absolute"
      style={{ left: `${(n.vx / VW) * 100}%`, top: `${(n.vy / VH) * 100}%`, transform: "translate(-50%,-50%)", zIndex: 10 }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div style={{
        padding: "14px 20px", minWidth: 178, borderRadius: 14,
        backgroundColor: "var(--surface-raised)",
        border: `1px solid ${isActive ? "rgba(248,123,84,0.55)" : "var(--border)"}`,
        boxShadow: isActive ? "0 0 28px rgba(248,123,84,0.16)" : "none",
        transform: isActive ? "scale(1.06)" : "scale(1)",
        transition: "all 0.25s cubic-bezier(0.25,0.1,0.25,1)",
        cursor: "default",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
          <div style={{
            width: 7, height: 7, borderRadius: "50%", flexShrink: 0,
            backgroundColor: isActive ? "#F87B54" : "rgba(248,123,84,0.38)",
            transition: "background 0.2s",
          }} />
          <span style={{ fontFamily: "Poppins,sans-serif", fontSize: 13, fontWeight: 600, color: "var(--foreground)", letterSpacing: "-0.01em", whiteSpace: "nowrap" }}>
            {n.label}
          </span>
        </div>
        <p style={{ fontFamily: "Poppins,sans-serif", fontSize: 11, color: "var(--muted-foreground)", marginLeft: 15, whiteSpace: "nowrap", lineHeight: 1.4 }}>
          {n.sub}
        </p>
      </div>
    </div>
  );
}

export function EcosystemDiagram() {
  const [hovered, setHovered] = useState<string | null>(null);

  /* ── One beam at a time, random node, JS-scheduled ── */
  const [beam, setBeam] = useState<{ idx: number; cycle: number }>({ idx: 0, cycle: 0 });

  useEffect(() => {
    let tid: ReturnType<typeof setTimeout>;

    function fireNext() {
      const next = Math.floor(Math.random() * NODES.length);
      setBeam(prev => ({ idx: next, cycle: prev.cycle + 1 }));
      // wait for beam to finish + random gap (250–700 ms) before next one
      const gap = 250 + Math.random() * 450;
      tid = setTimeout(fireNext, BEAM_DUR * 1000 + gap);
    }

    tid = setTimeout(fireNext, 400); // initial delay
    return () => clearTimeout(tid);
  }, []);

  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto max-w-[1120px] px-6">

        {/* ── Heading ── */}
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp} className="max-w-2xl">
          <p className="eyebrow">The Network</p>
          <h2 className="mt-4" style={{ fontFamily: "Poppins,sans-serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1.15, color: "var(--foreground)" }}>
            The network that moves
            <br />projects forward.
          </h2>
          <p className="mt-5" style={{ color: "var(--muted-foreground)", lineHeight: 1.65 }}>
            Six pillars. One platform. Infinite possibilities.
          </p>
        </motion.div>

        {/* ── Diagram — md+ ── */}
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp} className="mt-8 hidden md:block">
          <div className="relative mx-auto w-full" style={{ maxWidth: VW, aspectRatio: `${VW} / ${VH}` }}>

            {/* SVG layer */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none select-none"
              viewBox={`0 0 ${VW} ${VH}`}
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
            >
              <defs>
                <filter id="ep-beam-glow" filterUnits="userSpaceOnUse" x="-10" y="-12" width="1020" height={VH + 24}>
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <radialGradient id="ep-hub-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%"   stopColor="#F87B54" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#F87B54" stopOpacity="0"    />
                </radialGradient>
              </defs>

              {/* CSS animation — fires immediately on DOM insertion, unlike SMIL begin="0s" */}
              <style>{`
                @keyframes eco-beam-travel {
                  from { stroke-dashoffset: 110; }
                  to   { stroke-dashoffset: -1050; }
                }
                .eco-beam {
                  animation: eco-beam-travel ${BEAM_DUR}s linear forwards;
                }
              `}</style>

              {/* Ambient hub glow */}
              <circle cx={HX} cy={HY} r="160" fill="url(#ep-hub-glow)" />

              {NODES.map((n, i) => {
                const d = beamPath(n.vx, n.vy);
                const firing = beam.idx === i;
                return (
                  <g key={n.id}>
                    {/* Dim static rail — always visible */}
                    <path d={d} fill="none" stroke="rgba(248,123,84,0.08)" strokeWidth="1" />

                    {/* Active beam — CSS animation fires on mount, key forces remount per cycle */}
                    {firing && (
                      <path
                        key={beam.cycle}
                        className="eco-beam"
                        d={d}
                        fill="none"
                        stroke="rgba(248,123,84,0.82)"
                        strokeWidth="2"
                        strokeDasharray="100 1800"
                        strokeLinecap="round"
                        filter="url(#ep-beam-glow)"
                      />
                    )}
                  </g>
                );
              })}
            </svg>

            {/* ── Hub ── */}
            <div className="absolute" style={{ left: `${(HX / VW) * 100}%`, top: `${(HY / VH) * 100}%`, transform: "translate(-50%,-50%)", zIndex: 10 }}>
              <div className="relative flex items-center justify-center" style={{ width: 76, height: 76 }}>
                <div className="absolute rounded-full animate-ping" style={{ width: 108, height: 108, border: "1px solid rgba(248,123,84,0.28)", animationDuration: "2.8s", animationTimingFunction: "ease-out" }} />
                <div className="absolute rounded-full" style={{ width: 92, height: 92, border: "1px solid rgba(248,123,84,0.15)" }} />
                <div className="relative flex items-center justify-center rounded-full" style={{ width: 76, height: 76, backgroundColor: "var(--surface-raised)", border: "1.5px solid rgba(248,123,84,0.55)", boxShadow: "0 0 36px rgba(248,123,84,0.22), inset 0 0 20px rgba(248,123,84,0.07)" }}>
                  <img src={logo} alt="Alpha Firms" style={{ width: 44, height: 44, objectFit: "contain" }} />
                </div>
              </div>
              <p style={{ marginTop: 12, textAlign: "center", fontFamily: "Poppins,sans-serif", fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.22em", color: "var(--accent)", whiteSpace: "nowrap" }}>
                Alpha Firms
              </p>
            </div>

            {/* ── Node badges ── */}
            {NODES.map((n, i) => (
              <NodeBadge
                key={n.id}
                n={n}
                isActive={hovered === n.id || beam.idx === i}
                onEnter={() => setHovered(n.id)}
                onLeave={() => setHovered(null)}
              />
            ))}

          </div>
        </motion.div>

        {/* ── Mobile fallback ── */}
        <div className="mt-12 md:hidden grid grid-cols-2 gap-3">
          {NODES.map(n => (
            <div key={n.id} style={{ padding: "12px 14px", borderRadius: 12, backgroundColor: "var(--surface-raised)", border: "1px solid var(--border)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 3 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#F87B54", flexShrink: 0 }} />
                <span style={{ fontFamily: "Poppins,sans-serif", fontSize: 13, fontWeight: 600, color: "var(--foreground)" }}>{n.label}</span>
              </div>
              <p style={{ fontFamily: "Poppins,sans-serif", fontSize: 11, color: "var(--muted-foreground)", marginLeft: 13 }}>{n.sub}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
