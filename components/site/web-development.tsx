import Link from "next/link"
import { ArrowUpRight, Bot, Globe, Layout, ShoppingBag } from "lucide-react"
import { SectionHeader } from "@/components/site/section-header"
import { Button } from "@/components/ui/button"

const capabilities = [
  {
    icon: Layout,
    title: "Website Design",
    description: "Custom interfaces crafted to convert and reflect your brand.",
  },
  {
    icon: Globe,
    title: "Business Websites",
    description: "Fast, SEO-optimized marketing sites with content management.",
  },
  {
    icon: Bot,
    title: "AI-Integrated Solutions",
    description: "Chatbots, automations, and AI workflows built into your stack.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    description: "Modern storefronts with secure checkout and analytics.",
  },
]

const portfolio = [
  {
    title: "Lumen Analytics",
    tag: "AI Dashboard",
    accent: "from-primary/40 to-accent/30",
  },
  {
    title: "Qubsa Retail",
    tag: "E-commerce",
    accent: "from-accent/40 to-primary/30",
  },
  {
    title: "Abet Studio",
    tag: "Brand Site",
    accent: "from-primary/30 to-accent/40",
  },
]

export function WebDevelopment() {
  return (
    <section id="web-development" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Web Development"
          title="Beyond repair — we build the future of your business"
          description="From landing pages to AI-powered platforms, our team ships modern web products end to end."
        />

        <div className="mt-12 grid lg:grid-cols-2 gap-10 items-start">
          {/* Capabilities */}
          <div className="grid sm:grid-cols-2 gap-4">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="rounded-xl border border-border/80 glass p-5 hover:border-primary/40 transition"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/30">
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 text-base font-semibold">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                  {c.description}
                </p>
              </div>
            ))}
          </div>

          {/* Portfolio cards */}
          <div className="space-y-4">
            {portfolio.map((p) => (
              <div
                key={p.title}
                className="group relative overflow-hidden rounded-2xl border border-border/80 glass"
              >
                <div className={`relative h-44 bg-gradient-to-br ${p.accent}`}>
                  {/* mock UI */}
                  <div className="absolute inset-0 grid-bg opacity-50" />
                  <div className="absolute inset-x-6 top-6 rounded-lg border border-border/60 bg-background/60 backdrop-blur p-3">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-destructive/70" />
                      <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
                      <span className="h-2 w-2 rounded-full bg-primary/70" />
                    </div>
                    <div className="mt-3 flex gap-2">
                      <div className="h-6 w-16 rounded-md bg-primary/20" />
                      <div className="h-6 w-12 rounded-md bg-accent/20" />
                      <div className="h-6 w-20 rounded-md bg-muted/40" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-5">
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                      {p.tag}
                    </div>
                    <div className="mt-1 font-semibold">{p.title}</div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
                </div>
              </div>
            ))}

            <Button
              asChild
              variant="outline"
              className="w-full border-border/80 glass hover:bg-secondary"
            >
              <Link href="#request">Start a project</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
