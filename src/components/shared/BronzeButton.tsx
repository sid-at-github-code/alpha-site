import type { ButtonHTMLAttributes, ReactNode } from "react";

export function BronzeButton({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  children: ReactNode;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 font-mono uppercase tracking-[0.12em] text-[11px] transition";
  const styles =
    variant === "primary"
      ? "bg-accent text-white hover:opacity-90"
      : "border border-accent text-accent hover:bg-accent hover:text-white";
  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}
