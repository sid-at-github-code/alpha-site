import { ArrowRight } from "lucide-react";
import { useState, Suspense, lazy } from "react";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
);

export function CTA() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-12 w-full flex justify-center items-center px-4 md:px-6">
      <div
        className="w-full max-w-7xl relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden rounded-[48px] border border-border bg-surface shadow-sm min-h-[600px] flex flex-col items-center justify-center duration-500">

          {/* Dithering shader background */}
          <ErrorBoundary fallback={<div className="absolute inset-0 bg-accent/5" />}>
            <Suspense fallback={<div className="absolute inset-0 bg-accent/5" />}>
              <div className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen">
                <Dithering
                  colorBack="#00000000"
                  colorFront="#F87B54"
                  shape="warp"
                  type="4x4"
                  speed={isHovered ? 0.6 : 0.2}
                  className="size-full"
                  minPixelRatio={1}
                />
              </div>
            </Suspense>
          </ErrorBoundary>

          <div className="relative z-10 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">

            {/* Eyebrow pill */}
            <div
              className="mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold backdrop-blur-sm"
              style={{
                border: "1px solid rgba(248,123,84,0.2)",
                backgroundColor: "rgba(248,123,84,0.08)",
                color: "var(--accent)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontSize: 11,
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: "var(--accent)" }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: "var(--accent)" }} />
              </span>
              Get Started
            </div>

            {/* Headline */}
            <h2
              className="mb-8 leading-[1.08]"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "clamp(36px, 6vw, 80px)",
                fontWeight: 600,
                letterSpacing: "-0.05em",
                color: "var(--foreground)",
              }}
            >
              Your next project
              <br />
              <span style={{ color: "var(--muted-foreground)", fontWeight: 500 }}>starts here.</span>
            </h2>

            {/* Description */}
            <p
              className="mb-12 max-w-2xl leading-relaxed"
              style={{ color: "var(--muted-foreground)", fontSize: "clamp(15px, 1.5vw, 18px)" }}
            >
              Whether you're a homeowner, a designer, or a supplier — Alpha Firms is where
              interior projects begin. Join a verified network built for real work.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="/homeowners"
                className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full px-10 text-base font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "#fff",
                  boxShadow: "0 0 0 0 var(--accent-glow)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 0 6px var(--accent-glow)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 0 0 var(--accent-glow)")}
              >
                Get Started
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="mailto:hello@alphafirms.com"
                className="inline-flex h-14 items-center justify-center rounded-full px-10 text-base font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  border: "1.5px solid var(--accent)",
                  color: "var(--accent)",
                  backgroundColor: "transparent",
                }}
              >
                Talk to Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
