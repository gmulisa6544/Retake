import Link from "next/link"
import { ArrowRight, Sparkles, ShieldCheck, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 grid-bg" aria-hidden />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_color-mix(in_oklab,var(--primary)_18%,transparent),transparent_60%)]"
        aria-hidden
      />
      <div
        className="absolute -z-10 top-1/3 -left-20 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-3xl animate-pulse-glow"
        aria-hidden
      />
      <div
        className="absolute -z-10 top-10 -right-20 h-[24rem] w-[24rem] rounded-full bg-accent/20 blur-3xl animate-pulse-glow"
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/80 glass px-3 py-1 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>Trusted by 500+ devices serviced this month</span>
          </div>

          <h1 className="mt-6 text-balance text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
            Smart Tech Repair &{" "}
            <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </h1>

          <p className="mt-6 text-pretty text-base sm:text-lg leading-relaxed text-muted-foreground">
            From cracked laptops to custom AI-powered websites — NeonFix delivers fast,
            reliable repair, on-site service, and modern web development under one roof.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary"
            >
              <Link href="#request">
                Request Service
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border/80 glass hover:bg-secondary"
            >
              <Link href="#services">Explore Services</Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-muted-foreground">
            <div className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span>90-day warranty</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <Zap className="h-4 w-4 text-accent" />
              <span>Same-day diagnostics</span>
            </div>
            <div className="inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>Certified technicians</span>
            </div>
          </div>
        </div>

        {/* Floating preview card */}
        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/40 via-accent/30 to-primary/40 blur-2xl opacity-60" aria-hidden />
          <div className="relative rounded-2xl border border-border/80 glass p-2 animate-float">
            <div className="rounded-xl border border-border/60 bg-card/80 overflow-hidden">
              <div className="flex items-center gap-1.5 border-b border-border/60 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary/80" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">
                  neonfix.dev — diagnostic.live
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6">
                {[
                  { label: "Devices Online", value: "1,284" },
                  { label: "Avg. Repair Time", value: "47m" },
                  { label: "Satisfaction", value: "99.2%" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="rounded-lg border border-border/60 bg-background/40 p-4"
                  >
                    <div className="font-mono text-2xl font-semibold text-primary text-glow">
                      {s.value}
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
