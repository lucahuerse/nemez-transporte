import { ServiceCard } from "@/components/service-card"

export function ServicesSection() {
  const services = [
    {
      title: "Kleintransporte",
      description:
        "Wir holen Ihre Möbel, Kartons oder Waren direkt bei Ihnen ab und liefern sie sicher und termingerecht an den gewünschten Ort. Für Privatpersonen und Gewerbe.",
      image: "/images/kleintransport.webp",
      href: "/kleintransporte"
    },
    {
      title: "Expresslieferungen",
      description:
        "Wenn es schnell gehen muss, sind wir zur Stelle. Wir übernehmen eilige Direktfahrten deutschlandweit und liefern zuverlässig noch am selben Tag.",
      image: "/images/express.webp",
      href: "/express"
    },
    {
      title: "Umzugsservice",
      description:
        "Egal ob Wohnung, Haus oder Büro, wir planen und begleiten Ihren Umzug vom ersten Karton bis zur letzten Schraube. Freundlich, ordentlich und mit Erfahrung.",
      image: "/images/umzug.webp",
      href: "/umzug"
    },
    {
      title: "Entrümpelungen",
      description:
        "Wir helfen Ihnen dabei, schnell und sauber Platz zu schaffen. Vom Keller bis zum Dachboden übernehmen wir die komplette Räumung und Entsorgung.",
      image: "/images/entruempelung.webp",
      href: "/entruempelung"
    },
  ]

  return (
    <section id="services" className="py-20 bg-[#e8f4f8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-4">Unsere Leistungen auf einen Blick</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Unsere Angebote sind so flexibel wie Ihre Anforderungen. Wählen Sie die passende Leistung und wir kümmern
            uns um den Rest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
