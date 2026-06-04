import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Sun, Moon } from "lucide-react";
import logo from "@/assets/Alphafirms-logo-modified.png";

const links = [
  { href: "/homeowners", label: "For Homeowners" },
  { href: "/designers",  label: "For Designers"  },
  { href: "/suppliers",  label: "For Suppliers"  },
  { href: "#about",      label: "About Us"       },
  { href: "#trends",     label: "Trends"         },
  { href: "#contact",    label: "Contact Us"     },
];

const linkStyle: React.CSSProperties = {
  fontFamily: "Poppins, sans-serif",
  fontSize: 13,
  fontWeight: 500,
  color: "var(--muted-foreground)",
  textDecoration: "none",
  transition: "color 0.2s",
};

function DarkToggle({ size = 36, iconSize = 15 }: { size?: number; iconSize?: number }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      style={{
        background: "none",
        border: "1px solid var(--border)",
        borderRadius: 100,
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        color: "var(--muted-foreground)",
        transition: "color 0.2s, border-color 0.2s",
        flexShrink: 0,
      }}
    >
      {dark ? <Sun size={iconSize} /> : <Moon size={iconSize} />}
    </button>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`nav-glass fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-11 max-w-[1280px] items-center justify-between px-6">
        <Link to="/" style={{ display:"flex", alignItems:"center", gap:10, textDecoration:"none" }}>
          <img src={logo} alt="AlphaFirms" style={{ height:36, width:36, objectFit:"contain" }} />
          <span style={{ fontFamily:"Poppins,sans-serif", fontSize:18, fontWeight:700, color:"var(--foreground)", letterSpacing:"-0.03em" }}>
            Alpha Firms
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-7" style={{ listStyle:"none" }}>
          {links.map((l) =>
            l.href.startsWith("#") ? (
              <li key={l.href}>
                <a href={l.href} style={linkStyle}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--foreground)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted-foreground)")}
                >{l.label}</a>
              </li>
            ) : (
              <li key={l.href}>
                <Link to={l.href} style={linkStyle}
                  activeProps={{ style: { ...linkStyle, color: "var(--foreground)" } }}
                >{l.label}</Link>
              </li>
            )
          )}
        </ul>

        <div className="hidden lg:flex items-center gap-2">
          <a href="#" style={{ ...linkStyle, fontSize: 10 }}>Log In</a>
          <Link to="/signup" style={{ ...linkStyle, fontSize: 10 }}>Register</Link>
          <DarkToggle size={27} iconSize={11} />
          <Link to="/homeowners" className="btn-primary"
            style={{ minWidth: 98, minHeight: 30, fontSize: 10, padding: "0 15px" }}
          >
            Get Started
          </Link>
        </div>

        <div className="lg:hidden flex items-center gap-3">
          <DarkToggle />
          <button
            aria-label="Toggle menu"
            style={{ background:"none", border:"none", cursor:"pointer", color:"var(--foreground)" }}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="nav-glass-mobile lg:hidden border-t border-border">
          <ul className="flex flex-col px-6 py-5 gap-4" style={{ listStyle:"none" }}>
            {links.map((l) =>
              l.href.startsWith("#") ? (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)}
                    style={{ ...linkStyle, fontSize:14 }}>{l.label}</a>
                </li>
              ) : (
                <li key={l.href}>
                  <Link to={l.href} onClick={() => setOpen(false)}
                    style={{ ...linkStyle, fontSize:14 }}>{l.label}</Link>
                </li>
              )
            )}
            <li style={{ paddingTop:12, borderTop:"1px solid var(--border)", display:"flex", gap:20 }}>
              <a href="#" style={{ ...linkStyle, fontSize:13 }}>Log In</a>
              <a href="#" style={{ ...linkStyle, fontSize:13 }}>Register</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
