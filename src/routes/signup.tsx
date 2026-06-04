import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motionVariants";
import logo from "@/assets/Alphafirms-logo-modified.png";
import signupVideoUrl from "@/assets/signuploop.mp4?url";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Sign Up — Alpha Firms" },
      { name: "description", content: "Create your Alpha Firms account." },
    ],
  }),
  component: SignupPage,
});

function SignupVideo() {
  return (
    <video
      src={signupVideoUrl}
      autoPlay
      muted
      loop
      playsInline
      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
    />
  );
}

/* ── Minimal icon-wrapped input ── */
function InputField({
  id, label, type = "text", icon, placeholder,
  value, onChange, right,
}: {
  id: string; label: string; type?: string; icon: React.ReactNode;
  placeholder?: string; value: string; onChange: (v: string) => void;
  right?: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label
        htmlFor={id}
        style={{ fontFamily: "Poppins, sans-serif", fontSize: 11, fontWeight: 600,
          textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--muted-foreground)" }}
      >
        {label}
      </label>
      <div style={{ position: "relative" }}>
        <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)",
          color: "var(--muted-foreground)", pointerEvents: "none", display: "flex" }}>
          {icon}
        </span>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{
            width: "100%", boxSizing: "border-box",
            padding: "12px 40px 12px 40px",
            fontFamily: "Poppins, sans-serif", fontSize: 14, fontWeight: 400,
            color: "var(--foreground)",
            background: "var(--background)",
            border: "1px solid var(--border)",
            borderRadius: 10, outline: "none",
            transition: "border-color 0.2s, box-shadow 0.2s",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = "var(--accent)";
            e.currentTarget.style.boxShadow = "0 0 0 3px rgba(248,123,84,0.12)";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = "var(--border)";
            e.currentTarget.style.boxShadow = "none";
          }}
        />
        {right && (
          <span style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)",
            color: "var(--muted-foreground)", display: "flex", cursor: "pointer" }}>
            {right}
          </span>
        )}
      </div>
    </div>
  );
}

function SignupPage() {
  const [name, setName]           = useState("");
  const [email, setEmail]         = useState("");
  const [password, setPassword]   = useState("");
  const [showPass, setShowPass]   = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--background)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
      }}
    >
      {/* Big split card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          display: "flex",
          width: "100%",
          maxWidth: 960,
          height: "calc(100vh - 32px)",
          maxHeight: 680,
          borderRadius: 24,
          overflow: "hidden",
          border: "1px solid var(--border)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.06)",
          background: "var(--surface-raised)",
        }}
      >

        {/* ── LEFT: video panel ── */}
        <div
          className="hidden md:block"
          style={{ flex: "0 0 48%", position: "relative", overflow: "hidden", background: "var(--surface)" }}
        >
          <SignupVideo />

          {/* Gradient overlay so logo is readable */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(160deg, rgba(15,24,35,0.55) 0%, transparent 60%)",
            pointerEvents: "none",
          }} />

          {/* Logo in top-left of video */}
          <div style={{ position: "absolute", top: 28, left: 28, display: "flex", alignItems: "center", gap: 10 }}>
            <img src={logo} alt="AlphaFirms" style={{ height: 34, width: 34, objectFit: "contain" }} />
            <span style={{ fontFamily: "Poppins, sans-serif", fontSize: 17, fontWeight: 700,
              color: "#ffffff", letterSpacing: "-0.03em" }}>
              Alpha Firms
            </span>
          </div>

          {/* Bottom tagline */}
          <div style={{ position: "absolute", bottom: 32, left: 28, right: 28 }}>
            <p style={{ fontFamily: "Poppins, sans-serif", fontSize: 13, fontWeight: 400,
              color: "rgba(255,255,255,0.72)", lineHeight: 1.6, margin: 0 }}>
              India's only trusted interior &<br />living space ecosystem.
            </p>
          </div>
        </div>

        {/* ── RIGHT: form panel ── */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "22px 44px",
            overflowY: "auto",
          }}
        >
          {/* Mobile logo */}
          <div className="flex md:hidden items-center gap-2 mb-8">
            <img src={logo} alt="AlphaFirms" style={{ height: 30, objectFit: "contain" }} />
            <span style={{ fontFamily: "Poppins, sans-serif", fontSize: 16, fontWeight: 700,
              color: "var(--foreground)", letterSpacing: "-0.03em" }}>
              Alpha Firms
            </span>
          </div>

          {submitted ? (
            <motion.div
              variants={stagger} initial="hidden" animate="show"
              style={{ textAlign: "center" }}
            >
              <motion.div variants={fadeUp}
                style={{ fontSize: 40, marginBottom: 16 }}>🎉</motion.div>
              <motion.h2 variants={fadeUp}
                style={{ fontFamily: "Poppins, sans-serif", fontSize: 24, fontWeight: 600,
                  color: "var(--foreground)", margin: "0 0 10px" }}>
                Welcome aboard!
              </motion.h2>
              <motion.p variants={fadeUp}
                style={{ fontFamily: "Poppins, sans-serif", fontSize: 14, color: "var(--muted-foreground)", lineHeight: 1.6 }}>
                Your account is being set up. We'll send a confirmation to <strong>{email}</strong>.
              </motion.p>
            </motion.div>
          ) : (
            <motion.div variants={stagger} initial="hidden" animate="show">

              <motion.p variants={fadeUp} className="eyebrow" style={{ marginBottom: 8 }}>
                Get started free
              </motion.p>
              <motion.h1
                variants={fadeUp}
                style={{ fontFamily: "Poppins, sans-serif", fontSize: "clamp(24px, 3vw, 32px)",
                  fontWeight: 600, color: "var(--foreground)", lineHeight: 1.2,
                  letterSpacing: "-0.03em", margin: "0 0 32px" }}
              >
                Create your account.
              </motion.h1>

              {/* Google OAuth button */}
              <motion.button
                variants={fadeUp}
                type="button"
                style={{
                  width: "100%", display: "flex", alignItems: "center", justifyContent: "center",
                  gap: 10, padding: "12px 20px", borderRadius: 10,
                  border: "1px solid var(--border)", background: "var(--background)",
                  fontFamily: "Poppins, sans-serif", fontSize: 13, fontWeight: 500,
                  color: "var(--foreground)", cursor: "pointer",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                  marginBottom: 24,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(248,123,84,0.4)";
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(248,123,84,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Google G */}
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Continue with Google
              </motion.button>

              {/* Divider */}
              <motion.div
                variants={fadeUp}
                style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}
              >
                <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
                <span style={{ fontFamily: "Poppins, sans-serif", fontSize: 11, fontWeight: 500,
                  color: "var(--muted-foreground)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  or
                </span>
                <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
              </motion.div>

              {/* Email form */}
              <motion.form variants={fadeUp} onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <InputField
                  id="name" label="Full Name"
                  icon={<User size={14} />}
                  placeholder="Siddharth Patil"
                  value={name} onChange={setName}
                />
                <InputField
                  id="email" label="Email Address" type="email"
                  icon={<Mail size={14} />}
                  placeholder="you@example.com"
                  value={email} onChange={setEmail}
                />
                <InputField
                  id="password" label="Password"
                  type={showPass ? "text" : "password"}
                  icon={<Lock size={14} />}
                  placeholder="Min. 8 characters"
                  value={password} onChange={setPassword}
                  right={
                    <span onClick={() => setShowPass((v) => !v)}>
                      {showPass ? <EyeOff size={14} /> : <Eye size={14} />}
                    </span>
                  }
                />

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: "100%", minHeight: 46, fontSize: 13, marginTop: 4,
                    display: "flex", alignItems: "center", justifyContent: "center" }}
                >
                  Create Account
                </button>
              </motion.form>

              <motion.p
                variants={fadeUp}
                style={{ fontFamily: "Poppins, sans-serif", fontSize: 12,
                  color: "var(--muted-foreground)", marginTop: 20, textAlign: "center", lineHeight: 1.6 }}
              >
                Already have an account?{" "}
                <Link to="/" style={{ color: "var(--accent)", textDecoration: "none", fontWeight: 500 }}>
                  Log in
                </Link>
              </motion.p>

              <motion.p
                variants={fadeUp}
                style={{ fontFamily: "Poppins, sans-serif", fontSize: 11,
                  color: "var(--muted-foreground)", marginTop: 16, textAlign: "center", lineHeight: 1.6 }}
              >
                By creating an account you agree to our{" "}
                <a href="#" style={{ color: "var(--accent)", textDecoration: "none" }}>Terms</a>
                {" "}and{" "}
                <a href="#" style={{ color: "var(--accent)", textDecoration: "none" }}>Privacy Policy</a>.
              </motion.p>

            </motion.div>
          )}
        </div>

      </motion.div>
    </div>
  );
}
