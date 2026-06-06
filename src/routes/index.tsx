import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSearch } from "@/components/HeroSearch";
import { Hero } from "@/components/Hero";
import { FeaturedCategories } from "@/components/FeaturedCategories";
import { FeaturedAds } from "@/components/FeaturedAds";
import { EcosystemDiagram } from "@/components/EcosystemDiagram";
import { HowItWorks } from "@/components/HowItWorks";
import { HomeCTA } from "@/components/HomeCTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AlphaFirms — India's Interior & Living Space Ecosystem" },
      { name: "description", content: "AlphaFirms connects homeowners with verified designers, designers with qualified projects, and suppliers with active interior teams. India's only trusted interior ecosystem." },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "AlphaFirms — India's Interior & Living Space Ecosystem" },
      { property: "og:description", content: "India's only trusted platform connecting homeowners, designers, architects, and suppliers." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.alphafirms.com/" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: "AlphaFirms" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@alphafirms" },
      { name: "twitter:title", content: "AlphaFirms — India's Interior Ecosystem" },
      { name: "twitter:description", content: "India's only trusted platform connecting homeowners, designers, architects, and suppliers." },
    ],
    links: [{ rel: "canonical", href: "https://www.alphafirms.com/" }],
  }),
  component: Index,
});

const websiteSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.alphafirms.com/#website",
  "name": "AlphaFirms",
  "url": "https://www.alphafirms.com",
  "description": "India's only trusted interior & living space ecosystem.",
  "publisher": { "@id": "https://www.alphafirms.com/#organization" },
  "inLanguage": "en-IN",
  "potentialAction": {
    "@type": "SearchAction",
    "target": { "@type": "EntryPoint", "urlTemplate": "https://www.alphafirms.com/?q={search_term_string}" },
    "query-input": "required name=search_term_string",
  },
});

function Index() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: websiteSchema }} />
      <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <HeroSearch />
      <Hero />

      <FeaturedCategories />
      <FeaturedAds />

      <EcosystemDiagram />
      <HowItWorks />
      <HomeCTA />
      <Footer />
    </main>
    </>
  );
}
