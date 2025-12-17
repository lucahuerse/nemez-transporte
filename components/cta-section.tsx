import CustomButton from "@/components/custom-button"
import { Star } from "lucide-react"
import Image from "next/image"

export function CTASection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-2xl text-primary-foreground">
          <div className="absolute inset-0 z-0">
            <Image src="/images/hero-van.webp" alt="Nemez Transporte Van" fill className="object-cover" />
            <div className="absolute inset-0 bg-primary/85" />
          </div>

          <div className="relative z-10 py-20 px-6 text-center">
            <h2 className="text-4xl sm:text-5xl font-semibold mb-6 text-balance">Wir kümmern uns um Ihr Anliegen!</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-4xl mx-auto">
              Wir sind ein familiengeführtes Unternehmen aus Stuttgart-Weilimdorf mit langjähriger Erfahrung. Ob Umzug,
              Entrümpelung oder Kleintransport, bei uns kommt alles aus einer Hand.
            </p>

            <div className="flex justify-center mb-8">
              <CustomButton primaryText="Jetzt kostenlos Angebot anfordern" className="max-w-xs sm:max-w-md" />
            </div>

            <div className="flex flex-col items-center gap-2 text-lg">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-primary-foreground/90"><strong>4,9</strong> / 5 basierend auf 23 Bewertungen</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
