import Image from "next/image";

export function AboutSection() {
  return (
    <section id="uber-uns" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-4">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <div className="relative w-full h-auto min-h-[300px] mb-6">
              <Image
                src="/images/team.webp"
                alt="Unser Team"
                fill
                className="rounded-xl object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <p className="text-base leading-relaxed text-xl font-semibold">
              Wir sind kein Konzern, sondern ein Familienunternehmen, das jeden Kunden ernst nimmt.
            </p>
          </div>

          <div>
            <h2 className="text-3xl md:text-3xl font-semibold mb-6">Ein Familienbetrieb mit Herz und Verstand</h2>
            <div className="space-y-6 text-secondary-foreground/90 text-lg border-b border-muted-foreground/30 pb-10 max-w-2xl">
              <p>
                Seit vielen Jahren sind wir im Transport- und Kurierbereich tätig. Als Direktkurier haben wir uns als
                feste Größe auf dem Markt etabliert.
              </p>
              <p>
                Unsere Referenzen reichen von großen Paketdiensten, in deren Auftrag wir tätig waren, bis hin zur
                schnellen Auslieferung von Teilen für die Automobilindustrie. Wir haben deutschlandweit schnellen
                Transport über große Strecken hinweg organisiert.
              </p>
            </div>
            <div className="pt-6">
              <p className="text-muted-foreground/80 text-md">
                <b>Unser Versprechen:</b> Direkter Kontakt, ehrliche Preise, saubere Arbeit. So einfach ist das.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}
