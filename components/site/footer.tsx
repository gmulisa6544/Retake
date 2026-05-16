import Link from "next/link"
import { Cpu } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Web Dev", href: "#web-development" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
]

const services = [
  { label: "Laptop Repair", href: "#request" },
  { label: "On-Site Service", href: "#request" },
  { label: "Pickup & Delivery", href: "#request" },
  { label: "Refurbished Devices", href: "#request" },
  { label: "Web Development", href: "#web-development" },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 mt-12">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="col-span-2 lg:col-span-2 max-w-sm">
            <Link href="#top" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/30">
                <Cpu className="h-5 w-5 text-primary" />
              </span>
              <span className="font-semibold tracking-tight text-lg">
                Neon<span className="text-primary text-glow">Fix</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Smart tech repair and digital solutions, engineered for the future.
              Built by technicians and developers who actually care.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold">Quick Links</div>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-primary transition"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold">Services</div>
            <ul className="mt-4 space-y-2">
              {services.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-primary transition"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border/60 pt-6">
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} NeonFix. All rights reserved.
          </div>
          <div className="flex gap-5 text-xs text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition">
              Privacy
            </Link>
            <Link href="#" className="hover:text-foreground transition">
              Terms
            </Link>
            <Link href="#" className="hover:text-foreground transition">
              Status
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
