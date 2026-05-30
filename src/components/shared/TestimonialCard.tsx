export function TestimonialCard({
  quote,
  name,
  meta,
}: {
  quote: string;
  name: string;
  meta: string;
}) {
  return (
    <div
      className="rounded-2xl bg-surface p-8 border border-border"
      style={{ borderLeft: "3px solid var(--accent)" }}
    >
      <p
        className="font-display italic text-foreground"
        style={{ fontSize: 20, lineHeight: 1.45 }}
      >
        “{quote}”
      </p>
      <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
        {name} · {meta}
      </p>
    </div>
  );
}
