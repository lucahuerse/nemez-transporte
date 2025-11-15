import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function HelpSection() {
  const services = [
    {
      image: "/images/kleintransport.webp",
      title: "Kleintransport",
      href: "#kleintransport",
    },
    {
      image: "/images/umzug.webp",
      title: "Umzugsservice",
      href: "#umzug",
    },
    {
      image: "/images/entruempelung.webp",
      title: "Entrümpelung",
      href: "#entrumpelung",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Wie können wir Ihnen helfen?</h2>
        <p className="text-muted-foreground text-center mb-12">Wählen Sie die gewünschte Dienstleistung aus.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="pt-0 cursor-pointer overflow-hidden group">
              <CardContent className="p-0">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 bg-white text-center">
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
