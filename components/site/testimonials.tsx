"use client"

import { useEffect, useState, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { SectionHeader } from "@/components/site/section-header"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Tolasa",
    role: "Designer",
    rating: 5,
    quote:
      "My MacBook was completely dead and they had it back to me the same afternoon. The price was honest and the work was flawless. Easily the best repair experience I've had.",
    initials: "MC",
  },
  {
    name: "Daniel Wakuma",
    role: "Startup Founder",
    rating: 5,
    quote:
      "We hired NeonFix to build our marketing site and integrate an AI assistant. Shipped on time, looks incredible, and conversion is up 40% from our old site.",
    initials: "DO",
  },
  {
    name: "Wendimu Abebe",
    role: "Photographer",
    rating: 5,
    quote:
      "They picked up my laptop, recovered every photo from a failing drive, and delivered it back the next day. I can't recommend them enough.",
    initials: "PS",
  },
  {
    name: "Firaol Abera",
    role: "IT Manager",
    rating: 5,
    quote:
      "We use NeonFix for our entire 80-person office. Fast, reliable, and the on-site service has saved us countless hours. True partners.",
    initials: "MR",
  },
  {
    name: "Mekdes Alemayew",
    role: "Architect",
    rating: 5,
    quote:
      "Bought a refurbished workstation from them — runs better than new and saved me a fortune. The 90-day warranty was a nice peace of mind too.",
    initials: "SA",
  },
]

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
  })
  const [selected, setSelected] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap())
    emblaApi.on("select", onSelect)
    onSelect()
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  // Auto-advance
  useEffect(() => {
    if (!emblaApi) return
    const id = setInterval(() => emblaApi.scrollNext(), 5000)
    return () => clearInterval(id)
  }, [emblaApi])

  return (
    <section id="testimonials" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <SectionHeader
            eyebrow="Testimonials"
            title="Loved by 1,800+ customers"
            description="Real stories from people who trust us with their tech."
            align="left"
          />
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              aria-label="Previous"
              className="border-border/80 glass"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              aria-label="Next"
              className="border-border/80 glass"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-10 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="min-w-0 shrink-0 grow-0 basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <article className="relative h-full rounded-2xl border border-border/80 glass p-6">
                  <Quote className="h-8 w-8 text-primary/30" />
                  <div className="mt-3 flex gap-0.5" aria-label={`${t.rating} out of 5`}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                    {t.quote}
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-accent/30 ring-1 ring-border text-sm font-semibold">
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-sm font-medium">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-1.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              className={`h-1.5 rounded-full transition-all ${
                selected === i ? "w-8 bg-primary" : "w-1.5 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
