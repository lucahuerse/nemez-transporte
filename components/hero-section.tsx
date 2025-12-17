import Image from "next/image"
import CTAButton from "@/components/cta-button"

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-20">
      <div className="absolute inset-0 z-0">
        <Image fetchPriority="high" src="/images/hero-van.webp" alt="Nemez Transporte Van" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl leading-tight md:text-4xl lg:text-[64px] font-semibold text-primary-foreground mb-6 text-balance animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
          Transporte und Umzüge in Stuttgart und Umgebung
        </h1>
        <p className="text-lg md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-both">
          Ob Expresslieferung, Umzug oder komplette Haushaltsauflösung - wir denken mit!
        </p>

        <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500 fill-mode-both">
          <CTAButton primaryText="Jetzt Angebot einholen!" secondaryText="100% unverbindlich" href="#contact"/>
          <CTAButton variant="outline" primaryText="Mehr erfahren" href="#services"/>
        </div>
      </div>
    </section>
  )
}
