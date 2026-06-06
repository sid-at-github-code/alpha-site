import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — AlphaFirms" },
      { name: "description", content: "AlphaFirms Privacy Policy." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    title: "1. Information We Collect",
    body: "We collect information you provide directly when you create an account, such as your name, email address, and professional details. We also collect usage data including pages visited, search queries, and interaction patterns to improve the platform.",
  },
  {
    title: "2. How We Use Your Information",
    body: "We use the information we collect to operate and improve AlphaFirms, match homeowners with designers and suppliers, send you relevant updates and notifications, and comply with legal obligations. We do not sell your personal data to third parties.",
  },
  {
    title: "3. Information Sharing",
    body: "Your profile information is visible to other users on the platform as part of the marketplace functionality. We may share data with service providers who help us operate the platform, subject to confidentiality obligations. We will disclose information when required by law.",
  },
  {
    title: "4. Data Security",
    body: "We implement industry-standard security measures to protect your information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security of your data.",
  },
  {
    title: "5. Cookies",
    body: "We use cookies and similar technologies to remember your preferences (such as dark mode), maintain your session, and understand how the platform is used. You can control cookies through your browser settings.",
  },
  {
    title: "6. Your Rights",
    body: "You have the right to access, correct, or delete your personal data at any time. You may also withdraw consent for certain processing activities. To exercise these rights, contact us at hello@alphafirms.com.",
  },
  {
    title: "7. Data Retention",
    body: "We retain your information for as long as your account is active or as needed to provide services. You may request deletion of your account and associated data by contacting us.",
  },
  {
    title: "8. Changes to This Policy",
    body: "We may update this Privacy Policy periodically. We will notify you of significant changes via email or a notice on the platform. Continued use of AlphaFirms after changes take effect constitutes acceptance of the updated policy.",
  },
  {
    title: "9. Contact",
    body: "For privacy-related inquiries, contact us at hello@alphafirms.com.",
  },
];

function PrivacyPage() {
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
          Privacy Policy
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
