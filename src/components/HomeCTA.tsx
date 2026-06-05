import { useState, useRef } from "react";
import logo from "@/assets/Alphafirms-logo-modified.png";

export function HomeCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      fireConfetti();
    }, 1500);
  };

  const fireConfetti = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    type Particle = { x: number; y: number; vx: number; vy: number; life: number; color: string; size: number };
    const particles: Particle[] = [];
    const colors = ["#F87B54", "#ffffff", "#fbbf24", "#f472b6", "#10b981"];

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const createParticle = (): Particle => ({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 12,
      vy: (Math.random() - 2) * 10,
      life: 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 4 + 2,
    });

    for (let i = 0; i < 50; i++) particles.push(createParticle());

    const animate = () => {
      if (particles.length === 0) { ctx.clearRect(0, 0, canvas.width, canvas.height); return; }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy; p.vy += 0.5; p.life -= 2;
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.life / 100);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        if (p.life <= 0) { particles.splice(i, 1); i--; }
      }
      requestAnimationFrame(animate);
    };
    animate();
  };

  return (
    <section>
      <style>{`
        @keyframes hcta-spin        { from { transform: rotate(0deg);   } to { transform: rotate(360deg);   } }
        @keyframes hcta-spin-rev    { from { transform: rotate(0deg);   } to { transform: rotate(-360deg);  } }
        .hcta-spin     { animation: hcta-spin     60s linear infinite; }
        .hcta-spin-rev { animation: hcta-spin-rev 60s linear infinite; }

        @keyframes hcta-bounce-in {
          0%   { transform: scale(0.8); opacity: 0; }
          50%  { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .hcta-bounce-in { animation: hcta-bounce-in 0.5s cubic-bezier(0.175,0.885,0.32,1.275) forwards; }

        @keyframes hcta-success-pulse {
          0%   { transform: scale(0.5); opacity: 0; }
          50%  { transform: scale(1.1); }
          70%  { transform: scale(0.95); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes hcta-success-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(248,123,84,0.4); }
          50%       { box-shadow: 0 0 60px rgba(248,123,84,0.8), 0 0 100px rgba(248,123,84,0.4); }
        }
        .hcta-success-pulse { animation: hcta-success-pulse 0.6s cubic-bezier(0.175,0.885,0.32,1.275) forwards; }
        .hcta-success-glow  { animation: hcta-success-glow  2s ease-in-out infinite; }

        @keyframes hcta-checkmark-draw {
          0%   { stroke-dashoffset: 24; }
          100% { stroke-dashoffset: 0;  }
        }
        .hcta-checkmark {
          stroke-dasharray: 24;
          stroke-dashoffset: 24;
          animation: hcta-checkmark-draw 0.4s ease-out 0.3s forwards;
        }

        @keyframes hcta-ring {
          0%   { transform: translate(-50%,-50%) scale(0.8); opacity: 1; }
          100% { transform: translate(-50%,-50%) scale(2);   opacity: 0; }
        }
        .hcta-ring { animation: hcta-ring 0.8s ease-out forwards; }
      `}</style>

      <div
        className="relative w-full h-screen overflow-hidden"
        style={{ backgroundColor: "#0F1823", fontFamily: "Poppins, sans-serif" }}
      >
        {/* Spinning rings */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ transform: "perspective(1200px) rotateX(15deg)", transformOrigin: "center bottom" }}
        >
          <div className="absolute inset-0 hcta-spin">
            <div className="absolute top-1/2 left-1/2" style={{ width: 2000, height: 2000, transform: "translate(-50%,-50%) rotate(279.05deg)" }}>
              <img src="https://framerusercontent.com/images/oqZEqzDEgSLygmUDuZAYNh2XQ9U.png?scale-down-to=2048" alt="" className="w-full h-full object-cover opacity-25" />
            </div>
          </div>
          <div className="absolute inset-0 hcta-spin-rev">
            <div className="absolute top-1/2 left-1/2" style={{ width: 1000, height: 1000, transform: "translate(-50%,-50%) rotate(304.42deg)" }}>
              <img src="https://framerusercontent.com/images/UbucGYsHDAUHfaGZNjwyCzViw8.png?scale-down-to=1024" alt="" className="w-full h-full object-cover opacity-35" />
            </div>
          </div>
          <div className="absolute inset-0 hcta-spin">
            <div className="absolute top-1/2 left-1/2" style={{ width: 800, height: 800, transform: "translate(-50%,-50%) rotate(48.33deg)" }}>
              <img src="https://framerusercontent.com/images/Ans5PAxtJfg3CwxlrPMSshx2Pqc.png" alt="" className="w-full h-full object-cover opacity-50" />
            </div>
          </div>
        </div>

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to top, #0F1823 12%, rgba(15,24,35,0.85) 45%, transparent 100%)" }}
        />

        {/* Content */}
        <div className="relative z-20 w-full h-full flex flex-col items-center justify-end pb-24 gap-6">

          {/* Logo badge */}
          <div className="w-16 h-16 rounded-2xl overflow-hidden mb-2 flex items-center justify-center ring-1 ring-white/10" style={{ backgroundColor: "#182130" }}>
            <img src={logo} alt="Alpha Firms" className="w-10 h-10 object-contain" />
          </div>

          <h1
            className="text-5xl md:text-6xl font-bold text-center"
            style={{ color: "#F8FAFD", letterSpacing: "-0.04em", lineHeight: 1.1 }}
          >
            Discover Us
            <br />Beyond the Website.
          </h1>

          <p className="text-lg font-medium" style={{ color: "#8FA8BC" }}>
            Join the interior ecosystem built for real work.
          </p>

          {/* Form / success container */}
          <div className="w-full max-w-md px-4 mt-4 h-[60px] relative">

            {/* Confetti canvas */}
            <canvas
              ref={canvasRef}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none z-50"
            />

            {/* SUCCESS state */}
            <div
              className={`absolute inset-0 flex items-center justify-center rounded-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                status === "success"
                  ? "opacity-100 scale-100 hcta-success-pulse hcta-success-glow"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
              style={{ backgroundColor: "#F87B54" }}
            >
              {status === "success" && (
                <>
                  <div className="absolute top-1/2 left-1/2 w-full h-full rounded-full border-2 hcta-ring" style={{ borderColor: "#F87B54", animationDelay: "0s" }} />
                  <div className="absolute top-1/2 left-1/2 w-full h-full rounded-full border-2 hcta-ring" style={{ borderColor: "#F8A87B", animationDelay: "0.15s" }} />
                  <div className="absolute top-1/2 left-1/2 w-full h-full rounded-full border-2 hcta-ring" style={{ borderColor: "#F8D0BC", animationDelay: "0.3s" }} />
                </>
              )}
              <div className={`flex items-center gap-2 font-semibold text-lg text-white ${status === "success" ? "hcta-bounce-in" : ""}`}>
                <div className="bg-white/20 p-1 rounded-full">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      className={status === "success" ? "hcta-checkmark" : ""}
                      strokeLinecap="round" strokeLinejoin="round" strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span>You're in the ecosystem!</span>
              </div>
            </div>

            {/* FORM state */}
            <form
              onSubmit={handleSubmit}
              className={`relative w-full h-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                status === "success" ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
              }`}
            >
              <input
                type="email"
                required
                placeholder="name@email.com"
                value={email}
                disabled={status === "loading"}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-[60px] pl-6 pr-[165px] rounded-full outline-none transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: "#182130",
                  color: "#F8FAFD",
                  boxShadow: "inset 0 0 0 1px rgba(248,250,253,0.09)",
                  fontFamily: "Poppins, sans-serif",
                }}
              />
              <div className="absolute top-[6px] right-[6px] bottom-[6px]">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="h-full px-6 rounded-full font-semibold text-white transition-all active:scale-95 hover:brightness-110 disabled:cursor-wait flex items-center justify-center min-w-[145px]"
                  style={{ backgroundColor: "#F87B54", fontFamily: "Poppins, sans-serif" }}
                >
                  {status === "loading" ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  ) : (
                    "Get Early Access"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
