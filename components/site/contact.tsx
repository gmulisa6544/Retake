import Link from "next/link"
import { Phone, Mail, MapPin, Github, Twitter, Instagram, Linkedin } from "lucide-react"
import { SectionHeader } from "@/components/site/section-header"

const channels = [
  {
    icon: Phone,
    label: "Phone",
    value: "+251965444334",
    href: "tel:+251965444334",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@GMfix.dev",
    href: "mailto:hello@GMnfix.dev",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Addis Abeba, Mexico",
    href: "#",
  },
]

const socials = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
]

export function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Get in Touch"
          title="Talk to a real human"
          description="Prefer a phone call or quick email? We're here Mon–Sat, 9am–7pm."
        />

        <div className="mt-12 grid lg:grid-cols-3 gap-5">
          {channels.map((c) => (
            <Link
              key={c.label}
              href={c.href}
              className="group rounded-2xl border border-border/80 glass p-6 hover:border-primary/40 transition"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/30 group-hover:ring-primary/60 transition">
                <c.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="mt-4 text-xs font-mono uppercase tracking-wider text-muted-foreground">
                {c.label}
              </div>
              <div className="mt-1 text-base font-medium">{c.value}</div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl border border-border/80 glass p-6">
          <div>
            <div className="text-sm font-medium">Follow us</div>
            <div className="text-sm text-muted-foreground">
              Stay updated with tips, deals, and behind-the-scenes.
            </div>
          </div>
          <div className="flex gap-2">
            {socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/80 bg-background/40 hover:bg-primary/10 hover:border-primary/40 hover:text-primary transition"
              >
                <s.icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
