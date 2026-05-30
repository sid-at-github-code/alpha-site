const categories = ["Furnitures", "Interior", "Home Decor", "Lighting"];

export function CategoryStrip() {
  return (
    <div className="border-b border-border bg-surface">
      <div className="mx-auto max-w-[1280px] px-6 py-4 flex items-center gap-8 overflow-x-auto">
        {categories.map((cat) => (
          <a
            key={cat}
            href="#"
            className="whitespace-nowrap text-[11px] font-mono uppercase tracking-[0.16em] text-muted-foreground hover:text-accent transition-colors"
          >
            {cat}
          </a>
        ))}
      </div>
    </div>
  );
}
