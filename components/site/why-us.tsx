import { Zap, BadgeDollarSign, ShieldCheck, Cpu } from "lucide-react"
import { SectionHeader } from "@/components/site/section-header"

const reasons = [
  {
    icon: Zap,
    title: "Fast Service",
    description:
      "Most repairs done same-day. Critical fixes in under an hour. We respect your time.",
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable Pricing",
    description:
      "Transparent flat-rate pricing — no surprise fees, ever. Diagnosis is always free.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Technicians",
    description:
      "Certified, background-checked, and rated 4.9/5 by 1,800+ customers across the region.",
  },
  {
    icon: Cpu,
    title: "Modern Technology",
    description:
      "Lab-grade tools, genuine parts, and software-driven diagnostics for precision repairs.",
  },
]

export function WhyUs() {
  return (
    <section id="why-us" className="relative py-20 sm:py-28">
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-72 bg-[radial-gradient(ellipse_at_bottom,_color-mix(in_oklab,var(--primary)_12%,transparent),transparent_70%)]"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Premium service. Honest pricing. Real expertise."
          description="We've engineered every step of the repair experience to feel effortless."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="group relative overflow-hidden rounded-2xl border border-border/80 glass p-6 hover:-translate-y-1 transition-transform duration-300"
            >
              <span
                aria-hidden
                className={`absolute -top-12 -right-12 h-32 w-32 rounded-full blur-3xl transition-opacity ${
                  i % 2 === 0 ? "bg-primary/20" : "bg-accent/20"
                } opacity-40 group-hover:opacity-80`}
              />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/30">
                <r.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="relative mt-5 font-mono text-xs text-muted-foreground">
                0{i + 1}
              </div>
              <h3 className="relative mt-1 text-lg font-semibold tracking-tight">
                {r.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
