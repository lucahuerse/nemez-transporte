import { ServiceHero } from "@/components/service-hero"
import { EntruempelungStepsSection } from "@/components/entruempelung-steps-section"
import { EntruempelungFAQSection } from "@/components/entruempelung-faq-section"
import { EntruempelungRequestForm } from "@/components/entruempelung-request-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Entrümpelung Stuttgart | Nemez Transporte",
  description: "Professionelle Entrümpelung und Wohnungsauflösung in Stuttgart und Umgebung. Schnell, diskret und besenrein. Jetzt kostenlose Besichtigung anfordern.",
}

export default function EntruempelungPage() {
  return (
    <main>
      <Header 
        theme="dark" 
        navItems={[
          { label: "Ablauf", href: "#process" },
          { label: "FAQ", href: "#faq" }
        ]}
        ctaText="Besichtigung anfordern" 
        ctaHref="#contact-form"
      />
      <ServiceHero
        title="Entrümpelung & Wohnungsauflösung in Stuttgart"
        subtitle="Wir schaffen Platz! Egal ob Keller, Dachboden oder die komplette Wohnung – wir entrümpeln schnell, zuverlässig und hinterlassen alles besenrein. Inklusive transparenter Festpreisgarantie und Wertanrechnung."
        image="/images/umzug.webp" // Using umzug image as placeholder if no specific entruempelung image exists
        imageAlt="Entrümpelung Stuttgart"
      />
      
      <EntruempelungStepsSection />
      
      <EntruempelungFAQSection />

      <EntruempelungRequestForm />
      <Footer />
    </main>
  )
}
