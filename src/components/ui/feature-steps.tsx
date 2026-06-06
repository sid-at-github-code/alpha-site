import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface FeatureStep {
  step: string;
  title: string;
  content: string;
  image: string;
}

interface FeatureStepsProps {
  features: FeatureStep[];
  title?: string;
  autoPlayInterval?: number;
  className?: string;
}

export function FeatureSteps({
  features,
  title,
  autoPlayInterval = 4000,
  className,
}: FeatureStepsProps) {
  const [current, setCurrent] = useState(0);

  // Advance after each interval; resets whenever `current` changes (incl. manual jump)
  useEffect(() => {
    const timer = setTimeout(
      () => setCurrent(c => (c + 1) % features.length),
      autoPlayInterval,
    );
    return () => clearTimeout(timer);
  }, [current, features.length, autoPlayInterval]);

  const jumpTo = (i: number) => setCurrent(i);

  return (
    <div className={cn("w-full", className)}>
      {title && (
        <h2 style={{ fontFamily: "Poppins,sans-serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1.15, color: "var(--foreground)", marginBottom: "2.5rem" }}>
          {title}
        </h2>
      )}

      <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">

        {/* ── Step list ── */}
        <div className="order-2 md:order-1 space-y-5">
          {features.map((f, i) => {
            const isActive = i === current;
            const isDone   = i < current;
            return (
              <m.button
                key={i}
                type="button"
                onClick={() => jumpTo(i)}
                className="w-full text-left flex items-start gap-5"
                animate={{ opacity: isActive ? 1 : 0.38 }}
                transition={{ duration: 0.4 }}
              >
                {/* Circle */}
                <div className="shrink-0 mt-0.5">
                  <m.div
                    className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-sm font-bold"
                    animate={{
                      borderColor:     isActive ? "#F87B54" : isDone ? "rgba(248,123,84,0.4)" : "var(--border)",
                      backgroundColor: isActive ? "#F87B54" : isDone ? "rgba(248,123,84,0.10)" : "transparent",
                      scale: isActive ? 1.12 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ color: isActive ? "#fff" : isDone ? "#F87B54" : "var(--muted-foreground)" }}
                  >
                    {i + 1}
                  </m.div>
                </div>

                {/* Text + progress bar */}
                <div className="flex-1 min-w-0">
                  <p style={{ fontFamily: "Poppins,sans-serif", fontSize: 15, fontWeight: 600, color: "var(--foreground)", marginBottom: 4, letterSpacing: "-0.01em" }}>
                    {f.title}
                  </p>
                  <p style={{ fontFamily: "Poppins,sans-serif", fontSize: 13.5, color: "var(--muted-foreground)", lineHeight: 1.6 }}>
                    {f.content}
                  </p>

                  {/* Smooth framer-motion progress bar — key forces restart on step change */}
                  {isActive && (
                    <div className="mt-3 h-[2px] w-full rounded-full overflow-hidden" style={{ backgroundColor: "rgba(248,123,84,0.12)" }}>
                      <m.div
                        key={current}
                        className="h-full rounded-full"
                        style={{ backgroundColor: "#F87B54" }}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: autoPlayInterval / 1000, ease: "linear" }}
                      />
                    </div>
                  )}
                </div>
              </m.button>
            );
          })}
        </div>

        {/* ── Image panel ── */}
        <div
          className="order-1 md:order-2 relative overflow-hidden rounded-2xl"
          style={{
            height: "clamp(220px, 40vw, 460px)",
            border: "1px solid var(--border)",
            boxShadow: "0 24px 80px rgba(0,0,0,0.14), 0 0 0 1px rgba(248,123,84,0.06)",
          }}
        >
          <AnimatePresence mode="wait">
            {features.map((f, i) => i === current && (
              <m.div
                key={i}
                className="absolute inset-0"
                initial={{ y: 50, opacity: 0, scale: 0.98 }}
                animate={{ y: 0,  opacity: 1, scale: 1    }}
                exit={{   y: -50, opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <img src={f.image} alt={f.title} loading="lazy" decoding="async" className="w-full h-full object-cover" />

                {/* Step label — no gradient */}
                <div className="absolute bottom-4 left-5">
                  <span style={{ fontFamily: "Poppins,sans-serif", fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.22em", color: "#F87B54", backgroundColor: "rgba(0,0,0,0.35)", padding: "3px 8px", borderRadius: 4 }}>
                    {f.step}
                  </span>
                </div>
              </m.div>
            ))}
          </AnimatePresence>

          {/* Pill dots */}
          <div className="absolute bottom-4 right-5 flex gap-1.5 z-10">
            {features.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => jumpTo(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? 18 : 6,
                  height: 6,
                  backgroundColor: i === current ? "#F87B54" : "rgba(255,255,255,0.35)",
                }}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
