import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function MovingFAQSection() {
  const faqs = [
    {
      question: "Was kostet ein Umzug in Stuttgart?",
      answer:
        "Die Kosten für einen Umzug sind individuell und hängen von verschiedenen Faktoren ab: Wohnungsgröße, Distanz zwischen den Standorten, Etagenzahl und ob ein Aufzug vorhanden ist. Kontaktieren Sie uns für ein unverbindliches Festpreisangebot.",
    },
    {
      question: "Bieten Sie auch einen Packservice an?",
      answer:
        "Ja, auf Wunsch übernehmen wir das professionelle Ein- und Auspacken Ihrer Umzugskartons. So sparen Sie Zeit und stellen sicher, dass alles bruchsicher verstaut ist.",
    },
    {
      question: "Sind meine Möbel während des Umzugs versichert?",
      answer:
        "Selbstverständlich! Als professionelles Umzugsunternehmen verfügen wir über eine Betriebshaftpflicht- und Transportversicherung, damit Ihr Hab und Gut optimal geschützt ist.",
    },
    {
      question: "Kümmert ihr euch um Halteverbotszonen?",
      answer:
        "Ja, wir beantragen bei Bedarf die notwendigen Halteverbotszonen bei der Stadt Stuttgart und stellen die entsprechenden Schilder rechtzeitig auf, damit am Umzugstag alles reibungslos läuft.",
    },
    {
      question: "Kann ich bei euch Umzugskartons leihen oder kaufen?",
      answer:
        "Ja, wir stellen Ihnen gerne hochwertiges Verpackungsmaterial wie Umzugskartons, Kleiderboxen und Polsterfolie zur Verfügung.",
    },
    {
      question: "Führen Sie auch Fernumzüge durch?",
      answer:
        "Ja, wir begleiten Sie nicht nur innerhalb Stuttgarts, sondern führen auch deutschlandweite Fernumzüge zuverlässig durch.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-4 text-center">Fragen zum Umzug</h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Alles Wissenswerte rund um Ihren stressfreien Umzug mit Nemez Transporte.
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
