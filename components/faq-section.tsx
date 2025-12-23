import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Was kostet ein Umzug bei Ihnen?",
      answer:
        "Die Kosten hängen vom Umfang, der Entfernung und den gewünschten Zusatzleistungen ab. Am besten einfach kurz anfragen, dann erstellen wir ein individuelles Angebot.",
    },
    {
      question: "Machen Sie auch kurzfristige Transporte?",
      answer:
        "Ja, wir versuchen auch kurzfristige Anfragen möglich zu machen, wenn es unser Terminplan zulässt. Einfach anrufen oder das Anfrageformular nutzen.",
    },
    {
      question: "Führen Sie auch Transporte außerhalb von Stuttgart durch?",
      answer:
        "Ja, wir fahren für unsere Kunden in ganz Deutschland. Egal ob innerhalb Baden-Württemberg oder bis nach Hamburg. Wir sind flexibel einsetzbar.",
    },
    {
      question: "Wie läuft ein Transport bei Ihnen ab?",
      answer:
        "Nach Ihrer Anfrage stimmen wir alle Details ab. Am vereinbarten Tag kommen wir pünktlich vorbei, laden alles sicher ein und bringen es zuverlässig ans Ziel.",
    },
    {
      question: "Können Sie auch Möbel abbauen und wieder aufbauen?",
      answer:
        "Ja, unser Team übernimmt auch den Abbau und Aufbau von Möbeln, wenn das gewünscht ist. Einfach bei der Anfrage angeben.",
    },
    {
      question: "Bieten Sie auch Expresslieferungen an?",
      answer:
        "Ja, wir übernehmen auch kurzfristige Direktfahrten und Expresszustellungen – ideal, wenn etwas schnell und zuverlässig ankommen muss. Einfach kurz anrufen, wir finden eine Lösung.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-4 text-center">Häufig gestellte Fragen</h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Sie haben Fragen? Vielleicht ist die passende Antwort schon dabei.
          </p>

          <Accordion type="single" collapsible className="w-full px-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-xl py-6 hover:cursor-pointer">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-lg leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
