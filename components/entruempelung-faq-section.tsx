import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function EntruempelungFAQSection() {
  const faqs = [
    {
      question: "Was kostet eine Entrümpelung?",
      answer:
        "Die Kosten hängen stark vom Volumen des Hausrats, der Zugänglichkeit des Objekts und den Entsorgungsgebühren ab. Nach einer kostenlosen Besichtigung erstellen wir Ihnen ein verbindliches Festpreisangebot.",
    },
    {
      question: "Wie funktioniert die Wertanrechnung?",
      answer:
        "Gut erhaltene Möbel, Elektrogeräte oder Sammlungen, die noch einen Wiederverkaufswert haben, rechnen wir direkt gegen die Kosten der Entrümpelung an. Das senkt Ihren Endpreis.",
    },
    {
      question: "Entsorgen Sie auch Sondermüll?",
      answer:
        "Ja, wir kümmern uns um die fachgerechte Entsorgung von Batterien, Lacken, Farben und anderen schadstoffhaltigen Materialien gemäß den gesetzlichen Bestimmungen.",
    },
    {
      question: "Muss ich bei der Entrümpelung dabei sein?",
      answer:
        "Nein, das ist nicht zwingend erforderlich. Viele unserer Kunden übergeben uns einfach den Schlüssel. Wir führen die Arbeiten diskret und zuverlässig durch und informieren Sie nach Abschluss.",
    },
    {
      question: "Was bedeutet 'besenrein'?",
      answer:
        "Besenrein bedeutet, dass wir alle Gegenstände wie vereinbart entfernen und alle Räume sowie Laufwege gründlich kehren. Das Objekt ist danach bereit für eine Übergabe oder Renovierung.",
    },
    {
      question: "Wie kurzfristig sind Termine möglich?",
      answer:
        "Wir versuchen, Besichtigungen innerhalb von 24-48 Stunden zu ermöglichen. Die eigentliche Entrümpelung kann oft schon wenige Tage nach dem Angebot erfolgen.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-4 text-center">Fragen zur Entrümpelung</h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Häufige Fragen rund um unseren Entrümpelungsservice in Stuttgart.
          </p>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-lg py-6 hover:cursor-pointer">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
