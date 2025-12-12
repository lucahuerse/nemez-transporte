import Image from "next/image"
import { Button } from "@/components/ui/button"

export function StepsSection() {
  const steps = [
    {
      number: "01",
      title: "Anfrage",
      description: "Kontaktieren Sie uns telefonisch oder über unser Online-Formular. Wir besprechen Ihr Anliegen und erstellen ein unverbindliches Angebot.",
    },
    {
      number: "02",
      title: "Planung",
      description: "Wir planen gemeinsam mit Ihnen den Ablauf und stimmen den Termin ab. Unsere Experten beraten Sie gerne zu allen Details.",
      image: "/images/kleintransport.webp" // Placeholder, maybe redundant but adds visual interest
    },
    {
      number: "03",
      title: "Durchführung",
      description: "Unser Team erscheint pünktlich zum vereinbarten Termin und führt den Transport zuverlässig und sicher durch.",
    }
  ]

  return (
    <section id="process" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                 <span className="text-6xl font-bold text-foreground block md:w-24 leading-none">{step.number}</span>
              </div>
              <div className="flex-1 space-y-4">
                 <h3 className="text-2xl font-bold">{step.title}</h3>
                 <p className="text-muted-foreground text-lg leading-relaxed">{step.description}</p>
                 {step.image && (
                   <div className="mt-4 relative h-64 w-full md:w-2/3 overflow-hidden rounded-lg">
                      <Image src={step.image} alt="Step Image" fill className="object-cover" />
                   </div>
                 )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
