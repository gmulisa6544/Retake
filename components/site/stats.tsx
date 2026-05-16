"use client"

import { useEffect, useRef, useState } from "react"
import { Wrench, Users, Star, Clock } from "lucide-react"

const stats = [
  { label: "Devices Repaired", value: 5200, suffix: "+", icon: Wrench },
  { label: "Happy Customers", value: 1800, suffix: "+", icon: Users },
  { label: "Average Rating", value: 4.9, suffix: "/5", icon: Star, decimals: 1 },
  { label: "Avg. Turnaround", value: 24, suffix: "h", icon: Clock },
]

export function Stats() {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border/80 glass p-6 sm:p-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <Counter key={s.label} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Counter({
  label,
  value,
  suffix,
  icon: Icon,
  decimals = 0,
}: {
  label: string
  value: number
  suffix: string
  icon: React.ComponentType<{ className?: string }>
  decimals?: number
}) {
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true
            const duration = 1400
            const start = performance.now()
            const tick = (now: number) => {
              const p = Math.min(1, (now - start) / duration)
              const eased = 1 - Math.pow(1 - p, 3)
              setDisplay(value * eased)
              if (p < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/30">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <div className="font-mono text-2xl sm:text-3xl font-semibold text-foreground">
          {display.toFixed(decimals)}
          <span className="text-primary text-glow">{suffix}</span>
        </div>
        <div className="mt-1 text-xs sm:text-sm text-muted-foreground">{label}</div>
      </div>
    </div>
  )
}
