import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/homeowners", label: "For Homeowners" },
  { href: "/designers", label: "For Designers" },
  { href: "/suppliers", label: "For Suppliers" },
  { href: "#about", label: "About Us" },
  { href: "#trends", label: "Trends" },
  { href: "#contact", label: "Contact Us" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-9 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border" : "border-b border-transparent"
      }`}
      style={{
        backgroundColor: scrolled
          ? "rgba(10, 9, 7, 0.92)"
          : "rgba(10, 9, 7, 0.65)",
        backdropFilter: "blur(24px) saturate(1.4)",
        WebkitBackdropFilter: "blur(24px) saturate(1.4)",
      }}
    >
      <nav className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6">
        <Link
          to="/"
          className="font-display text-[20px] tracking-wide text-foreground hover:text-accent transition-colors duration-300"
        >
          Alpha Firms
        </Link>

        <ul className="hidden lg:flex items-center gap-6 text-[13px] text-muted-foreground">
          {links.map((l) =>
            l.href.startsWith("#") ? (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="hover:text-foreground transition-colors duration-200"
                >
                  {l.label}
                </a>
              </li>
            ) : (
              <li key={l.href}>
                <Link
                  to={l.href}
                  className="hover:text-foreground transition-colors duration-200"
                  activeProps={{ className: "text-foreground" }}
                >
                  {l.label}
                </Link>
              </li>
            )
          )}
        </ul>

        <div className="hidden lg:flex items-center gap-5">
          <a
            href="#"
            className="text-[13px] text-muted-foreground hover:text-foreground transition-colors"
          >
            Log In
          </a>
          <a
            href="#"
            className="text-[13px] text-muted-foreground hover:text-foreground transition-colors"
          >
            Register
          </a>
          <Link
            to="/homeowners"
            className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-[11px] font-mono uppercase tracking-[0.12em] text-background hover:opacity-90 transition-opacity glow-btn"
          >
            Get Started
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div
          className="lg:hidden border-t border-border"
          style={{ backgroundColor: "rgba(10,9,7,0.97)", backdropFilter: "blur(24px)" }}
        >
          <ul className="flex flex-col px-6 py-5 gap-4">
            {links.map((l) =>
              l.href.startsWith("#") ? (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-[14px] text-muted-foreground hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ) : (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    onClick={() => setOpen(false)}
                    className="text-[14px] text-muted-foreground hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              )
            )}
            <li className="pt-3 border-t border-border flex gap-5">
              <a href="#" className="text-[13px] text-muted-foreground hover:text-foreground">
                Log In
              </a>
              <a href="#" className="text-[13px] text-muted-foreground hover:text-foreground">
                Register
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
