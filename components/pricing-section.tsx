import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-semibold mb-4">Unsere Preise für Kleintransporte</h2>
            <p className="text-lg text-muted-foreground">Fair, transparent und ohne versteckte Kosten.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1 */}
          <div className="bg-[#f2f2f2] dark:bg-card p-8 rounded-xl flex flex-col hidden-border dark:border">
            <div className="mb-4">
                <span className="text-sm uppercase tracking-wider font-semibold text-muted-foreground">Standard</span>
                <h3 className="text-3xl font-bold mt-2">ab 0,57 €/km</h3>
                <p className="text-sm text-muted-foreground mt-1">inkl. MwSt. (außerhalb Stuttgart)</p>
            </div>
            <p className="text-muted-foreground mb-6">Pauschalpreise für Transporte innerhalb Stuttgarts möglich.</p>
            
            <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-center gap-3"><span className="bg-black text-white p-0.5 rounded-full"><Check className="h-3 w-3" /></span> <span>Fahrzeug + Fahrer</span></li>
                <li className="flex items-center gap-3"><span className="bg-black text-white p-0.5 rounded-full"><Check className="h-3 w-3" /></span> <span>Laderaum 12m³ (3,2m Länge)</span></li>
                <li className="flex items-center gap-3"><span className="bg-black text-white p-0.5 rounded-full"><Check className="h-3 w-3" /></span> <span>Bis zu 30 Min. Ladezeit inkl.</span></li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1a1a1a] dark:bg-[#1a1a1a] dark:border dark:border-white/10 text-white p-8 rounded-xl flex flex-col relative overflow-hidden">
             <div className="mb-4">
                <span className="text-sm uppercase tracking-wider font-semibold text-white/70">Premium / Helfer</span>
                <h3 className="text-3xl font-bold mt-2">ab 0,65 €/km</h3>
                 <p className="text-sm text-white/50 mt-1">plus Arbeitszeit Helfer</p>
            </div>
             <p className="text-white/70 mb-6">Für sperrige Gegenstände oder wenn Sie Hilfe beim Tragen benötigen.</p>

            <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-center gap-3"><span className="bg-white text-black p-0.5 rounded-full"><Check className="h-3 w-3" /></span> <span>Fahrzeug + Fahrer + Helfer</span></li>
                <li className="flex items-center gap-3"><span className="bg-white text-black p-0.5 rounded-full"><Check className="h-3 w-3" /></span> <span>Trageservice bis in die Wohnung</span></li>
                 <li className="flex items-center gap-3"><span className="bg-white text-black p-0.5 rounded-full"><Check className="h-3 w-3" /></span> <span>Versicherung inklusive</span></li>
            </ul>
          </div>
        </div>
        
         <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
            * Preise können je nach Aufwand, Etage und Entfernung variieren. Kontaktieren Sie uns für ein verbindliches Festpreisangebot.
         </p>
      </div>
    </section>
  )
}
