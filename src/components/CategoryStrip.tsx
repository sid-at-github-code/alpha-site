const CATEGORIES = [
  { label: "Furnitures", bg: "linear-gradient(145deg, #F87B54 0%, #fa9a7a 100%)" },
  { label: "Interior",   bg: "linear-gradient(145deg, #405364 0%, #6B8095 100%)" },
  { label: "Home Decor", bg: "linear-gradient(145deg, #c9a96e 0%, #e8c99a 100%)" },
  { label: "Lighting",   bg: "linear-gradient(145deg, #f5c842 0%, #fde68a 100%)" },
];

const DURATION = 20; // seconds for one full orbit

export function CategoryStrip() {
  return (
    <section className="border-b border-border" style={{ backgroundColor: "var(--surface)" }}>
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "72px 24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0,
        }}
      >
        {/* ── Orbit ring ── */}
        <div
          className="orbit-pause-on-hover"
          style={{ position: "relative", width: 380, height: 380, flexShrink: 0 }}
        >
          {/* Faint guide ring */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: 296,
              height: 296,
              transform: "translate(-50%, -50%)",
              border: "1px dashed var(--border)",
              borderRadius: "50%",
              opacity: 0.5,
              pointerEvents: "none",
            }}
          />

          {/* Orbit anchor — cards fan out from here */}
          <div style={{ position: "absolute", top: "50%", left: "50%" }}>
            {CATEGORIES.map((cat, i) => (
              <div
                key={cat.label}
                className="card-orbit-item"
                style={{ animationDelay: `${-(i * (DURATION / CATEGORIES.length))}s` }}
              >
                {/* Card — positioned so its center sits on the orbit path */}
                <div
                  style={{
                    position: "absolute",
                    top: -54,
                    left: -54,
                    width: 108,
                    height: 108,
                    borderRadius: "50%",
                    background: cat.bg,
                    boxShadow:
                      "0 8px 28px rgba(64,83,100,0.22), inset 0 1px 0 rgba(255,255,255,0.35)",
                    border: "3px solid rgba(255,255,255,0.55)",
                    cursor: "default",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── Category labels ── */}
        <div
          style={{
            display: "flex",
            gap: 48,
            marginTop: 36,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {CATEGORIES.map((cat) => (
            <a
              key={cat.label}
              href="#"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: 11,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.16em",
                color: "var(--muted-foreground)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "var(--muted-foreground)")
              }
            >
              {cat.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
