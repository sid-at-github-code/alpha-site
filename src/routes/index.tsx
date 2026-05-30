import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { HeroSearch } from "@/components/HeroSearch";
import { CategoryStrip } from "@/components/CategoryStrip";
import { Hero } from "@/components/Hero";
import { FeaturedCategories } from "@/components/FeaturedCategories";
import { FeaturedAds } from "@/components/FeaturedAds";
import { EcosystemDiagram } from "@/components/EcosystemDiagram";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyAlphaFirms } from "@/components/WhyAlphaFirms";
import { PlatformValue } from "@/components/PlatformValue";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { BlogNews } from "@/components/BlogNews";
import { Newsletter } from "@/components/Newsletter";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Home - AlphaFirms" },
      {
        name: "description",
        content:
          "Alpha Firms is the interior economy, organized — connecting customers, designers, and material suppliers in a single trusted network.",
      },
      { property: "og:title", content: "Home - AlphaFirms" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:site_name", content: "AlphaFirms" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Navbar />
      <HeroSearch />
      <CategoryStrip />
      <Hero />
      <FeaturedCategories />
      <FeaturedAds />
      <EcosystemDiagram />
      <HowItWorks />
      <WhyAlphaFirms />
      <PlatformValue />
      <Stats />
      <Testimonials />
      <BlogNews />
      <Newsletter />
      <CTA />
      <Footer />
    </main>
  );
}
