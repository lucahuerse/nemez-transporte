import CTAButton from "@/components/cta-button"
import { Star } from "lucide-react"
import Image from "next/image"

export function CTASection() {
  return (
    <section className="relative py-20 text-primary-foreground">
      <div className="absolute inset-0 z-0">
        <Image src="/images/hero-van.webp" alt="Nemez Transporte Van" fill className="object-cover" />
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Wir kümmern uns um Ihr Anliegen!</h2>
        <p className="text-lg text-primary-foreground/90 mb-8 max-w-3xl mx-auto text-balance">
          Wir sind ein familiengeführtes Unternehmen aus Stuttgart-Weilimdorf mit langjähriger Erfahrung. Ob Umzug,
          Entrümpelung oder Kleintransport, bei uns kommt alles aus einer Hand.
        </p>

        <div className="flex justify-center mb-8">
          <CTAButton primaryText="Jetzt kostenlos Angebot anfordern" />
        </div>

        <div className="flex items-center justify-center gap-2 text-sm">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-accent text-accent" />
            ))}
          </div>
          <span className="text-primary-foreground/90">4,9 / 5 basierend auf 23 Bewertungen</span>
        </div>
      </div>
    </section>
  )
}
