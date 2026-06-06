import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Suspense, lazy } from "react";
import { Navbar } from "@/components/Navbar";
import { WhyAlphaFirms } from "@/components/WhyAlphaFirms";
import { PlatformValue } from "@/components/PlatformValue";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { BlogNews } from "@/components/BlogNews";
import { Newsletter } from "@/components/Newsletter";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { ClientOnly } from "@/components/ClientOnly";

const RetroGrid = lazy(() =>
  import("@/components/ui/retro-grid").then(m => ({ default: m.RetroGrid }))
);

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us - AlphaFirms" },
      { name: "description", content: "Learn why Alpha Firms is India's most trusted interior ecosystem — our platform, numbers, client stories, and news." },
      { property: "og:title", content: "About Us - AlphaFirms" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:site_name", content: "AlphaFirms" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const pills = [
  "Founded 2024",
  "15+ Cities",
  "500+ Projects",
  "Verified Network",
  "India-first",
];

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] } },
};

function AboutHero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: "100svh", minHeight: 560 }}>

      {/* RetroGrid canvas — SSR-guarded */}
      <ClientOnly fallback={<div className="absolute inset-0" style={{ background: "#0a0204" }} />}>
        <Suspense fallback={<div className="absolute inset-0" style={{ background: "#0a0204" }} />}>
          <div className="absolute inset-0">
            <RetroGrid gridColor="#F87B54" showScanlines={true} glowEffect={true} />
          </div>
        </Suspense>
      </ClientOnly>

      {/* Gradient overlays — pull text area dark without killing the grid */}
      <div className="pointer-events-none absolute inset-0" style={{
        background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.10) 40%, rgba(0,0,0,0.55) 80%, rgba(0,0,0,0.85) 100%)",
      }} />
      {/* Top fade into navbar */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24" style={{
        background: "linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)",
      }} />

      {/* Content */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
      >
        {/* Eyebrow */}
        <motion.p variants={fadeUp} style={{
          fontFamily: "Poppins,sans-serif",
          fontSize: 11, fontWeight: 700,
          textTransform: "uppercase", letterSpacing: "0.22em",
          color: "#F87B54", marginBottom: 24,
        }}>
          About Alpha Firms
        </motion.p>

        {/* Headline */}
        <motion.h1 variants={fadeUp} style={{
          fontFamily: "Poppins,sans-serif",
          fontSize: "clamp(38px, 7vw, 96px)",
          fontWeight: 600,
          letterSpacing: "-0.04em",
          lineHeight: 1.06,
          color: "#F87B54",
          maxWidth: 900,
          marginBottom: 28,
        }}>
          We built the room
          <br />
          <span style={{ color: "#F8FAFD" }}>where deals happen.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p variants={fadeUp} style={{
          fontFamily: "Poppins,sans-serif",
          fontSize: "clamp(15px, 1.8vw, 20px)",
          color: "rgba(248,250,253,0.72)",
          lineHeight: 1.65,
          maxWidth: 640,
          marginBottom: 48,
        }}>
          Great interiors were happening despite the platforms — not because of one.
          Homeowners guessing. Designers cold-pitching. Suppliers invisible until too late.
          Alpha Firms fixed that.
        </motion.p>

        {/* Stat pills */}
        <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-2">
          {pills.map(p => (
            <span key={p} style={{
              fontFamily: "Poppins,sans-serif",
              fontSize: 11, fontWeight: 600,
              textTransform: "uppercase", letterSpacing: "0.12em",
              color: "rgba(248,250,253,0.85)",
              border: "1px solid rgba(248,123,84,0.35)",
              backgroundColor: "rgba(248,123,84,0.08)",
              backdropFilter: "blur(8px)",
              padding: "6px 14px", borderRadius: 999,
            }}>
              {p}
            </span>
          ))}
        </motion.div>

      </motion.div>

    </section>
  );
}

function About() {
  return (
    <main className="min-h-screen text-foreground">
      <Navbar />

      {/* Hero is always dark (RetroGrid canvas drives its own background) */}
      <AboutHero />

      {/* Remaining sections inherit the theme bg */}
      <div className="bg-background">

      <WhyAlphaFirms />
      <PlatformValue />
      <Stats />
      <Testimonials />
      <BlogNews />
      <Newsletter />
      <CTA />

      </div>

      <Footer />
    </main>
  );
}
