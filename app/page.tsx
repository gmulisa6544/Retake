import { Navbar } from "@/components/site/navbar"
import { Hero } from "@/components/site/hero"
import { BrandMarquee } from "@/components/site/brand-marquee"
import { Services } from "@/components/site/services"
import { Stats } from "@/components/site/stats"
import { ServiceRequestForm } from "@/components/site/service-request-form"
import { WebDevelopment } from "@/components/site/web-development"
import { WhyUs } from "@/components/site/why-us"
import { Testimonials } from "@/components/site/testimonials"
import { Contact } from "@/components/site/contact"
import { Footer } from "@/components/site/footer"

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <BrandMarquee />
      <Services />
      <Stats />
      <ServiceRequestForm />
      <WebDevelopment />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
