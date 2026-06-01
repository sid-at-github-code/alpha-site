const usefulLinks = [
  { label: "About Us",          href: "#about"   },
  { label: "Contact Us",        href: "#contact" },
  { label: "FAQ",               href: "#"        },
  { label: "Terms & Conditions",href: "#"        },
  { label: "Privacy Policy",    href: "#"        },
  { label: "Subscription Plans",href: "#"        },
];
const categoryLinks   = [{ label: "Trends", href: "#" }];
const newestListings  = [
  { label: "Living Shapes",         href: "#" },
  { label: "Looking Good Furniture",href: "#" },
  { label: "T&T",                   href: "#" },
  { label: "Design Code",           href: "#" },
];

const socials = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
      </svg>
    ),
  },
];

function Col({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 style={{ fontFamily: "Poppins", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.16em", color: "var(--foreground)", marginBottom: 16 }}>
        {title}
      </h4>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
        {items.map((l) => (
          <li key={l.label}>
            <a href={l.href} style={{ fontFamily: "Poppins", fontSize: 13, fontWeight: 500, color: "var(--muted-foreground)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--foreground)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted-foreground)")}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border pt-16 pb-10">
      <div className="mx-auto max-w-[1120px] px-6">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <p style={{ fontFamily: "Poppins", fontSize: 22, fontWeight: 700, color: "var(--foreground)", letterSpacing: "-0.03em" }}>
              Alpha Firms
            </p>
            <p className="mt-2" style={{ fontSize: 13, fontWeight: 500, color: "var(--muted-foreground)" }}>
              The platform for the interior economy.
            </p>
            <div className="mt-5">
              <p style={{ fontFamily: "Poppins", fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.16em", color: "var(--muted-foreground)", marginBottom: 12 }}>
                Follow our social media
              </p>
              <div className="flex items-center gap-4">
                {socials.map((s) => (
                  <a key={s.label} href={s.href} aria-label={s.label}
                    style={{ color: "var(--muted-foreground)", transition: "color 0.2s" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--accent)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted-foreground)")}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <Col title="Useful Links"    items={usefulLinks}   />
          <Col title="Categories"      items={categoryLinks} />
          <Col title="Newest Listings" items={newestListings}/>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p style={{ fontFamily: "Poppins", fontSize: 12, fontWeight: 500, color: "var(--muted-foreground)" }}>
            © 2026. AlphaFirms All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6">
            {[
              { label: "For Homeowners", href: "/homeowners" },
              { label: "For Designers",  href: "/designers"  },
              { label: "For Suppliers",  href: "/suppliers"  },
              { label: "Contact",        href: "#contact"    },
            ].map((l) => (
              <a key={l.label} href={l.href}
                style={{ fontFamily: "Poppins", fontSize: 12, fontWeight: 500, color: "var(--muted-foreground)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--foreground)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted-foreground)")}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
