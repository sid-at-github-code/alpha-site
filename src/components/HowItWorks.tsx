import { m } from "framer-motion";
import { viewportOnce } from "@/lib/motionVariants";

/* ── Per-step SVG icons (pure CSS animated, no SMIL) ── */

function IconConnect() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <style>{`
        @keyframes hiw-orbit-a { from { transform: rotate(0deg)   translateX(22px) rotate(0deg);   } to { transform: rotate(360deg)  translateX(22px) rotate(-360deg);  } }
        @keyframes hiw-orbit-b { from { transform: rotate(120deg) translateX(22px) rotate(-120deg);} to { transform: rotate(480deg)  translateX(22px) rotate(-480deg); } }
        @keyframes hiw-orbit-c { from { transform: rotate(240deg) translateX(22px) rotate(-240deg);} to { transform: rotate(600deg)  translateX(22px) rotate(-600deg); } }
        @keyframes hiw-pulse   { 0%,100%{ r:10; opacity:.18; } 50%{ r:18; opacity:.06; } }
      `}</style>
      {/* Pulse ring */}
      <circle cx="36" cy="36" style={{ animation: "hiw-pulse 2.4s ease-in-out infinite" }} fill="rgba(248,123,84,0.18)" />
      {/* Inner circle */}
      <circle cx="36" cy="36" r="10" fill="rgba(248,123,84,0.12)" stroke="rgba(248,123,84,0.45)" strokeWidth="1.5" />
      {/* Alpha Firms dot */}
      <circle cx="36" cy="36" r="4" fill="#F87B54" />
      {/* Orbit track */}
      <circle cx="36" cy="36" r="22" stroke="rgba(248,123,84,0.14)" strokeWidth="1" strokeDasharray="3 4" />
      {/* Orbiting dots */}
      <g transform="translate(36,36)" style={{ animation: "hiw-orbit-a 3.2s linear infinite" }}>
        <circle cx="0" cy="0" r="4.5" fill="#F87B54" />
      </g>
      <g transform="translate(36,36)" style={{ animation: "hiw-orbit-b 3.2s linear infinite" }}>
        <circle cx="0" cy="0" r="3.5" fill="#F87B54" opacity="0.7" />
      </g>
      <g transform="translate(36,36)" style={{ animation: "hiw-orbit-c 3.2s linear infinite" }}>
        <circle cx="0" cy="0" r="3" fill="#F87B54" opacity="0.45" />
      </g>
    </svg>
  );
}

function IconMatch() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <style>{`
        @keyframes hiw-match-dot {
          0%   { transform: translateX(0px);   opacity:0; }
          10%  { opacity:1; }
          90%  { opacity:1; }
          100% { transform: translateX(30px);  opacity:0; }
        }
        @keyframes hiw-match-dot2 {
          0%   { transform: translateX(0px);   opacity:0; }
          10%  { opacity:1; }
          90%  { opacity:1; }
          100% { transform: translateX(-30px); opacity:0; }
        }
        @keyframes hiw-node-glow {
          0%,100%{ box-shadow:none; } 50%{ opacity:1; }
        }
      `}</style>
      {/* Left node */}
      <circle cx="14" cy="36" r="7" fill="rgba(248,123,84,0.15)" stroke="#F87B54" strokeWidth="1.5" />
      <circle cx="14" cy="36" r="3" fill="#F87B54" />
      {/* Right node */}
      <circle cx="58" cy="36" r="7" fill="rgba(248,123,84,0.15)" stroke="#F87B54" strokeWidth="1.5" />
      <circle cx="58" cy="36" r="3" fill="#F87B54" />
      {/* Rail */}
      <line x1="21" y1="36" x2="51" y2="36" stroke="rgba(248,123,84,0.2)" strokeWidth="1.5" />
      {/* Traveling dot A (left → right) */}
      <circle cx="21" cy="36" r="3.5" fill="#F87B54"
        style={{ animation: "hiw-match-dot 1.8s ease-in-out infinite" }} />
      {/* Traveling dot B (right → left) */}
      <circle cx="51" cy="36" r="3.5" fill="#F87B54" opacity="0.6"
        style={{ animation: "hiw-match-dot2 1.8s ease-in-out infinite 0.9s" }} />
      {/* Top + bottom secondary connections */}
      <circle cx="36" cy="14" r="5" fill="rgba(248,123,84,0.1)" stroke="rgba(248,123,84,0.3)" strokeWidth="1" />
      <circle cx="36" cy="58" r="5" fill="rgba(248,123,84,0.1)" stroke="rgba(248,123,84,0.3)" strokeWidth="1" />
      <line x1="36" y1="19" x2="36" y2="31" stroke="rgba(248,123,84,0.15)" strokeWidth="1" strokeDasharray="2 3" />
      <line x1="36" y1="41" x2="36" y2="53" stroke="rgba(248,123,84,0.15)" strokeWidth="1" strokeDasharray="2 3" />
    </svg>
  );
}

function IconExecute() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <style>{`
        @keyframes hiw-ring {
          from { stroke-dashoffset: 201; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes hiw-check {
          from { stroke-dashoffset: 28; }
          to   { stroke-dashoffset: 0; }
        }
        @keyframes hiw-ring-pulse {
          0%,100%{ opacity:.12; r:30; }
          50%    { opacity:.22; r:34; }
        }
      `}</style>
      {/* Outer pulse */}
      <circle cx="36" cy="36" fill="#F87B54" style={{ animation: "hiw-ring-pulse 2s ease-in-out infinite" }} />
      {/* Track circle */}
      <circle cx="36" cy="36" r="24" stroke="rgba(248,123,84,0.15)" strokeWidth="3" />
      {/* Animating fill ring */}
      <circle cx="36" cy="36" r="24"
        stroke="#F87B54" strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="201"
        style={{ animation: "hiw-ring 2.4s ease-in-out infinite", transformOrigin: "36px 36px", transform: "rotate(-90deg)" }}
      />
      {/* Checkmark */}
      <path d="M24 36 L32 44 L48 28"
        stroke="#F87B54" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        strokeDasharray="28"
        style={{ animation: "hiw-check 0.5s ease-out 2s forwards", strokeDashoffset: 28 }}
      />
    </svg>
  );
}

/* arrow depth in px */
const NOTCH = 36;

const steps = [
  {
    n: "01",
    label: "Connect",
    title: "One profile. Every door.",
    body: "Create your profile as a homeowner, designer, or supplier. You're inside the interior ecosystem — immediately visible to the people who need you.",
    icon: <IconConnect />,
  },
  {
    n: "02",
    label: "Match",
    title: "No scrolling. Just fits.",
    body: "Alpha Firms reads your brief, your portfolio, your catalog — and surfaces the exact right connections. Verified. Qualified. Ready.",
    icon: <IconMatch />,
  },
  {
    n: "03",
    label: "Execute",
    title: "Brief to done. Together.",
    body: "Coordinate, communicate, and close projects on one platform. From first brief to final delivery — every party in the same room.",
    icon: <IconExecute />,
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-32 md:py-40 border-t border-border overflow-hidden">

      {/* Mobile: reset arrow clip to rounded rectangle */}
      <style>{`
        @media (max-width: 767px) {
          .hiw-arrow-card {
            clip-path: none !important;
            margin-left: 0 !important;
            padding-right: 32px !important;
            border-radius: 16px;
          }
        }
      `}</style>

      {/* Ambient section glow */}
      <div className="pointer-events-none absolute inset-0" style={{
        background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(248,123,84,0.05), transparent 70%)",
      }} />

      <div className="relative mx-auto max-w-[1120px] px-6">

        {/* ── Heading ── */}
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="eyebrow" style={{ letterSpacing: "0.14em" }}>How It Works</p>
          <h2 className="mt-4" style={{
            fontFamily: "Poppins,sans-serif",
            fontSize: "clamp(32px,5vw,60px)",
            fontWeight: 600,
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
            color: "var(--foreground)",
          }}>
            Simple for
            <span style={{ color: "var(--accent)" }}> everyone</span> involved.
          </h2>
        </m.div>

        {/* ── Arrow cards ── */}
        {/* On desktop: overlapping pentagons pointing right.
            z-index decreases left→right so each tip sits on top of the next card's left edge. */}
        <div className="flex flex-col md:flex-row items-stretch">
          {steps.map((s, i) => {
            const tint = [0.04, 0.07, 0.11][i];
            const zIndex = steps.length - i; // 3, 2, 1

            return (
              <m.div
                key={s.n}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.55, delay: i * 0.14, ease: [0.25, 0.1, 0.25, 1] }}
                className="hiw-arrow-card relative flex-1 flex flex-col"
                style={{
                  /* Arrow clip — desktop only; on mobile just rounded card */
                  clipPath: `polygon(0 0, calc(100% - ${NOTCH}px) 0, 100% 50%, calc(100% - ${NOTCH}px) 100%, 0 100%)`,
                  /* Overlap the previous card's tip */
                  marginLeft: i > 0 ? -NOTCH : 0,
                  zIndex,
                  padding: `40px ${40 + NOTCH}px 40px 40px`,
                  background: `color-mix(in srgb, var(--surface-raised) 100%, transparent)`,
                  backgroundColor: `rgba(248,123,84,${tint})`,
                  filter: "drop-shadow(0 6px 28px rgba(0,0,0,0.10))",
                  cursor: "default",
                  minHeight: 280,
                  transition: "filter 0.25s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.filter =
                    "drop-shadow(0 12px 40px rgba(0,0,0,0.14)) drop-shadow(0 0 24px rgba(248,123,84,0.18))";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.filter =
                    "drop-shadow(0 6px 28px rgba(0,0,0,0.10))";
                }}
              >
                {/* Watermark number */}
                <span aria-hidden style={{
                  position: "absolute", bottom: -16, right: NOTCH + 8,
                  fontFamily: "Poppins,sans-serif",
                  fontSize: "clamp(90px,12vw,140px)",
                  fontWeight: 700, lineHeight: 1,
                  color: "var(--accent)", opacity: 0.07,
                  userSelect: "none", pointerEvents: "none",
                  letterSpacing: "-0.06em",
                }}>
                  {s.n}
                </span>

                {/* Icon */}
                <div style={{ marginBottom: 20 }}>{s.icon}</div>

                {/* Step label */}
                <p style={{
                  fontFamily: "Poppins,sans-serif", fontSize: 10, fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: "0.2em",
                  color: "var(--accent)", marginBottom: 10,
                }}>
                  {s.n} · {s.label}
                </p>

                {/* Title */}
                <h3 style={{
                  fontFamily: "Poppins,sans-serif",
                  fontSize: "clamp(18px,2vw,24px)",
                  fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.2,
                  color: "var(--foreground)", marginBottom: 12,
                }}>
                  {s.title}
                </h3>

                {/* Body */}
                <p style={{
                  fontFamily: "Poppins,sans-serif", fontSize: 13.5,
                  color: "var(--muted-foreground)", lineHeight: 1.7,
                  marginTop: "auto",
                }}>
                  {s.body}
                </p>
              </m.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
