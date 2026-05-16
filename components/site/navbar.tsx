"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Cpu, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Web Dev", href: "#web-development" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/70 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#top" className="flex items-center gap-2 group">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/30 group-hover:ring-primary/60 transition">
            <Cpu className="h-5 w-5 text-primary" />
            <span className="absolute inset-0 rounded-lg bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition" />
          </span>
          <span className="font-semibold tracking-tight text-lg">
            Neon<span className="text-primary text-glow">Fix</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {item.label}
              <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary">
            <Link href="#request">Request Service</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden rounded-md p-2 text-foreground hover:bg-secondary"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-secondary"
              >
                {item.label}
              </Link>
            ))}
            <Button
              asChild
              className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => setOpen(false)}
            >
              <Link href="#request">Request Service</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
