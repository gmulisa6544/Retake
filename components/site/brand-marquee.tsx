const brands = [
  "Apple",
  "Dell",
  "HP",
  "Lenovo",
  "ASUS",
  "Microsoft",
  "Acer",
  "Samsung",
  "MSI",
  "Razer",
]

export function BrandMarquee() {
  return (
    <section className="relative py-10 border-y border-border/60 bg-background/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
          We service every major brand
        </p>
        <div className="mt-6 relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max animate-marquee">
            {[...brands, ...brands].map((b, i) => (
              <div
                key={`${b}-${i}`}
                className="px-8 py-2 text-xl font-semibold tracking-tight text-muted-foreground/70 whitespace-nowrap"
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
