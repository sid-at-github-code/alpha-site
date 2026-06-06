import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — AlphaFirms" },
      { name: "description", content: "AlphaFirms Terms of Service." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: TermsPage,
});

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing or using AlphaFirms, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our service.",
  },
  {
    title: "2. Use of the Platform",
    body: "AlphaFirms is a marketplace connecting homeowners, interior designers, architects, and suppliers. You agree to use the platform only for lawful purposes and in a manner consistent with these terms. You may not use the platform to engage in fraudulent, abusive, or harmful activity.",
  },
  {
    title: "3. User Accounts",
    body: "You are responsible for maintaining the confidentiality of your account credentials. You agree to provide accurate and complete information when registering. AlphaFirms reserves the right to suspend or terminate accounts that violate these terms.",
  },
  {
    title: "4. Listings and Content",
    body: "Users are solely responsible for the accuracy of content they post, including portfolio items, project descriptions, and pricing. AlphaFirms does not verify or guarantee the accuracy of user-submitted content.",
  },
  {
    title: "5. Intellectual Property",
    body: "The AlphaFirms name, logo, and platform design are the intellectual property of AlphaFirms. User-submitted content remains the property of its creator; by submitting content you grant AlphaFirms a non-exclusive license to display it on the platform.",
  },
  {
    title: "6. Limitation of Liability",
    body: "AlphaFirms is a marketplace platform. We are not a party to any agreement between users and do not accept liability for any disputes, losses, or damages arising from transactions or interactions between users.",
  },
  {
    title: "7. Changes to Terms",
    body: "AlphaFirms reserves the right to modify these Terms of Service at any time. Continued use of the platform following any changes constitutes acceptance of the updated terms.",
  },
  {
    title: "8. Contact",
    body: "For questions regarding these terms, contact us at hello@alphafirms.com.",
  },
];

function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="mx-auto max-w-[760px] px-6 pt-32 pb-24">
        <p className="eyebrow">Legal</p>
        <h1
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "clamp(32px, 5vw, 56px)",
            fontWeight: 600,
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
            color: "var(--foreground)",
            marginTop: 16,
          }}
        >
          Terms of Service
        </h1>
        <p style={{ color: "var(--muted-foreground)", fontSize: 14, marginTop: 10, fontFamily: "Poppins, sans-serif" }}>
          Last updated: June 2026
        </p>

        <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 36 }}>
          {sections.map((s) => (
            <div key={s.title}>
              <h2
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 17,
                  fontWeight: 600,
                  color: "var(--foreground)",
                  marginBottom: 10,
                  letterSpacing: "-0.01em",
                }}
              >
                {s.title}
              </h2>
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: 14,
                  color: "var(--muted-foreground)",
                  lineHeight: 1.75,
                }}
              >
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
