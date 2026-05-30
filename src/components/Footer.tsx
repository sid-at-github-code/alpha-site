const usefulLinks = [
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
  { label: "FAQ", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Subscription Plans", href: "#" },
];

const categoryLinks = [
  { label: "Trends", href: "#" },
];

const newestListings = [
  { label: "Living Shapes", href: "#" },
  { label: "Looking Good Furniture", href: "#" },
  { label: "T&T", href: "#" },
  { label: "Design Code", href: "#" },
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

function FooterCol({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-[11px] font-mono uppercase tracking-[0.18em] text-foreground mb-4">{title}</h4>
      <ul className="space-y-2.5">
        {items.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="text-[13px] text-muted-foreground hover:text-foreground transition-colors">
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
            <p className="font-display text-[22px] text-foreground">Alpha Firms</p>
            <p className="mt-2 text-[13px] text-muted-foreground">
              The platform for the interior economy.
            </p>
            <div className="mt-5">
              <p className="text-[11px] font-mono uppercase tracking-[0.16em] text-muted-foreground mb-3">
                Follow our social media
              </p>
              <div className="flex items-center gap-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <FooterCol title="Useful Links" items={usefulLinks} />
          <FooterCol title="Categories" items={categoryLinks} />
          <FooterCol title="Newest Listings" items={newestListings} />
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-muted-foreground">
            © 2026. AlphaFirms All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[12px] text-muted-foreground">
            {[
              { label: "For Homeowners", href: "/homeowners" },
              { label: "For Designers", href: "/designers" },
              { label: "For Suppliers", href: "/suppliers" },
              { label: "Contact", href: "#contact" },
            ].map((l) => (
              <li key={l.label}>
                <a href={l.href} className="hover:text-foreground transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
