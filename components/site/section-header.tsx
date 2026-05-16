export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
}) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left"
  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 rounded-full border border-border/80 glass px-3 py-1 text-xs text-muted-foreground ${
            align === "center" ? "" : ""
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
          <span className="font-mono uppercase tracking-wider">{eyebrow}</span>
        </div>
      )}
      <h2 className="mt-4 text-balance text-3xl sm:text-4xl font-semibold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}
