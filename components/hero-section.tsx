import { Button } from "@/components/ui/button"
import Image from "next/image"
import CTAButton from "@/components/cta-button"

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center pt-20">
      <div className="absolute inset-0 z-0">
        <Image fetchPriority="high" src="/images/hero-van.webp" alt="Nemez Transporte Van" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 text-balance">
          Ihr Partner für Transporte und Umzüge
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-balance">
          Ob Expresslieferung, Umzug oder komplette Haushaltsauflösung - wir denken mit!
        </p>

        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4">
          <CTAButton primaryText="Jetzt Angebot einholen!" secondaryText="100% unverbindlich" />
          <Button
            size="lg"
            variant="outline"
            className="border border-white/40 text-white hover:border-white hover:text-white hover:bg-transparent bg-transparent font-medium px-8 h-[60px] rounded-lg"
          >
            Mehr erfahren
          </Button>
        </div>
      </div>
    </section>
  )
}
