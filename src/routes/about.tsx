import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { WhyAlphaFirms } from "@/components/WhyAlphaFirms";
import { PlatformValue } from "@/components/PlatformValue";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { BlogNews } from "@/components/BlogNews";
import { Newsletter } from "@/components/Newsletter";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us - AlphaFirms" },
      {
        name: "description",
        content:
          "Learn why Alpha Firms is India's most trusted interior ecosystem — our platform, numbers, client stories, and news.",
      },
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

function About() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="pt-11">
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
