import Link from "next/link"
import {
  Laptop,
  Home,
  Truck,
  Recycle,
  Code2,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react"
import { SectionHeader } from "@/components/site/section-header"

type Service = {
  title: string
  description: string
  icon: LucideIcon
  accent: "primary" | "accent"
  href: string
}

const services: Service[] = [
  {
    title: "Computer & Laptop Repair",
    description:
      "Screen replacements, motherboard fixes, OS recovery, and performance tuning for all major brands.",
    icon: Laptop,
    accent: "primary",
    href: "#request",
  },
  {
    title: "Home & On-Site Repair",
    description:
      "Our technicians come to you — diagnostics and repairs done at your home or office, same day.",
    icon: Home,
    accent: "accent",
    href: "#request",
  },
  {
    title: "Pickup & Delivery",
    description:
      "Don't move a thing. We pick up your device, repair it in-lab, and deliver it back fully tested.",
    icon: Truck,
    accent: "primary",
    href: "#request",
  },
  {
    title: "Refurbished Device Sales",
    description:
      "Like-new laptops, phones, and tablets — fully tested with a 90-day warranty at fair prices.",
    icon: Recycle,
    accent: "accent",
    href: "#request",
  },
  {
    title: "Web Development",
    description:
      "Modern business websites, e-commerce, and AI-integrated platforms built for performance.",
    icon: Code2,
    accent: "primary",
    href: "#web-development",
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Services"
          title="Everything your tech needs, in one place"
          description="From rapid repairs to custom-built digital products — premium service end to end."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} featured={i === 4} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, featured }: { service: Service; featured?: boolean }) {
  const Icon = service.icon
  const isAccent = service.accent === "accent"
  return (
    <Link
      href={service.href}
      className={`group relative overflow-hidden rounded-2xl border border-border/80 glass p-6 transition-all duration-300 hover:border-transparent hover:-translate-y-1 ${
        featured ? "sm:col-span-2 lg:col-span-1" : ""
      }`}
    >
      {/* Hover gradient border */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: `linear-gradient(135deg, var(--${
            isAccent ? "accent" : "primary"
          }), transparent 60%)`,
          padding: "1px",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      {/* Glow */}
      <span
        aria-hidden
        className={`absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity ${
          isAccent ? "bg-accent/15" : "bg-primary/15"
        }`}
      />

      <div className="relative flex items-start justify-between">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-xl ring-1 transition-all duration-300 ${
            isAccent
              ? "bg-accent/10 ring-accent/30 group-hover:ring-accent/60"
              : "bg-primary/10 ring-primary/30 group-hover:ring-primary/60"
          }`}
        >
          <Icon className={`h-6 w-6 ${isAccent ? "text-accent" : "text-primary"}`} />
        </div>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
      </div>

      <h3 className="relative mt-5 text-lg font-semibold tracking-tight">
        {service.title}
      </h3>
      <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
        {service.description}
      </p>

      <div className="relative mt-6 inline-flex items-center text-sm font-medium">
        <span
          className={`${
            isAccent ? "text-accent" : "text-primary"
          } group-hover:underline underline-offset-4`}
        >
          Learn More
        </span>
        <ArrowUpRight
          className={`ml-1 h-4 w-4 ${
            isAccent ? "text-accent" : "text-primary"
          } group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition`}
        />
      </div>
    </Link>
  )
}
