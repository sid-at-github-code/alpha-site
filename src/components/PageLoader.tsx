import { useEffect, useState } from "react";
import logo from "@/assets/Alphafirms-logo-modified.png";

export function PageLoader() {
  const [fading, setFading] = useState(false);
  const [gone,   setGone]   = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFading(true), 900);
    const t2 = setTimeout(() => setGone(true),  1250);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (gone) return null;

  return (
    <div
      style={{
        position:        "fixed",
        inset:           0,
        zIndex:          99999,
        backgroundColor: "var(--background)",
        display:         "flex",
        flexDirection:   "column",
        alignItems:      "center",
        justifyContent:  "center",
        gap:             16,
        opacity:         fading ? 0 : 1,
        transition:      "opacity 0.35s ease",
        pointerEvents:   fading ? "none" : "all",
      }}
    >
      <img
        src={logo}
        alt="AlphaFirms loading"
        className="logo-spin"
        style={{ width: 80, height: 80 }}
      />
      <p
        style={{
          fontFamily:    "Poppins, sans-serif",
          fontSize:      11,
          fontWeight:    600,
          textTransform: "uppercase",
          letterSpacing: "0.18em",
          color:         "var(--muted-foreground)",
          margin:        0,
        }}
      >
        AlphaFirms
      </p>
    </div>
  );
}
