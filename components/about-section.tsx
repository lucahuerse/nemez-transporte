import Image from "next/image";

export function AboutSection() {
  return (
    <section id="uber-uns" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
            <Image
              src="/images/team.webp"
              alt="Unser Team"
              width={1200}
              height={800}
              className="rounded-lg object-cover"
              priority
            />
            </div>

          <div>
            <p className="text-sm text-muted-foreground mb-2">
              Wir sind kein Konzern, sondern ein Familienunternehmen, das jeden Kunden ernst nimmt.
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ein Familienbetrieb mit Herz und Verstand</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Seit vielen Jahren sind wir im Transport- und Kurierbereich tätig. Als Direktkurier haben wir uns als
                feste Größe auf dem Markt etabliert.
              </p>
              <p>
                Unsere Referenzen reichen von großen Paketdiensten, in deren Auftrag wir tätig waren, bis hin zur
                schnellen Auslieferung von Teilen für die Automobilindustrie. Wir haben deutschlandweit schnellen
                Transport über große Strecken hinweg organisiert.
              </p>
              <p className="font-semibold text-foreground">
                Unser Versprechen: Direkter Kontakt, ehrliche Preise, saubere Arbeit. So einfach ist das.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
