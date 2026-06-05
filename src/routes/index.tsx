import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSearch } from "@/components/HeroSearch";
import { Hero } from "@/components/Hero";
import { FeaturedCategories } from "@/components/FeaturedCategories";
import { FeaturedAds } from "@/components/FeaturedAds";
import { EcosystemDiagram } from "@/components/EcosystemDiagram";
import { HowItWorks } from "@/components/HowItWorks";
import { HomeCTA } from "@/components/HomeCTA";
import { Footer } from "@/components/Footer";
import { ClientOnly } from "@/components/ClientOnly";

const ScrollScene = lazy(() => import("@/components/three/ScrollScene"));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Home - AlphaFirms" },
      {
        name: "description",
        content:
          "AlphaFirms — India's only trusted Interior & Living Space Ecosystem.",
      },
      { property: "og:title",     content: "Home - AlphaFirms" },
      { property: "og:type",      content: "website" },
      { property: "og:locale",    content: "en_US" },
      { property: "og:site_name", content: "AlphaFirms" },
      { name: "twitter:card",     content: "summary_large_image" },
      { name: "robots",           content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <HeroSearch />
      <Hero />

      <FeaturedCategories />
      <FeaturedAds />

      {/* Scroll-driven 3D room assembly */}
      <ClientOnly fallback={<div className="h-[60px] border-t border-border" />}>
        <Suspense fallback={<div className="h-[60px] border-t border-border" />}>
          <ScrollScene />
        </Suspense>
      </ClientOnly>

      <EcosystemDiagram />
      <HowItWorks />
      <HomeCTA />
      <Footer />
    </main>
  );
}
