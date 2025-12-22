import { ServiceHero } from "@/components/service-hero"
import { TransportStepsSection } from "@/components/transport-steps-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { TransportRequestForm } from "@/components/transport-request-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"

export const metadata = {
  title: "Expresstransport Stuttgart | Nemez Transporte",
  description: "Dringender Eiltransport oder Expresslieferung in Stuttgart? Unser Service ist sofort einsatzbereit. Schnell, zuverlässig und sicher ans Ziel. Jetzt Angebot anfordern.",
}

export default function ExpressPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Expresstransport Stuttgart",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Nemez Transporte"
    },
    "description": "Dringender Eiltransport oder Expresslieferung in Stuttgart. Unser Service ist sofort einsatzbereit.",
    "areaServed": {
      "@type": "City",
      "name": "Stuttgart"
    }
  };

  return (
    <main>
      <JsonLd data={structuredData} />
      <Header 
        theme="dark" 
        navItems={[
          { 
            label: "Leistungen", 
            href: "#",
            children: [
              { label: "Kleintransporte", href: "/kleintransporte" },
              { label: "Expresstransport", href: "/express" },
              { label: "Umzüge", href: "/umzug" },
              { label: "Entrümpelungen", href: "/entruempelung" },
            ]
          },
          { label: "Ablauf", href: "#process" },
          { label: "Preise", href: "#pricing" },
          { label: "FAQ", href: "#faq" }
        ]}
        ctaText="Jetzt Angebot anfordern" 
        ctaHref="#contact-form"
      />
      <ServiceHero
        title="Expresstransport & Kurierfahrten in Stuttgart"
        subtitle="Wenn es schnell gehen muss: Unser Eiltransport und Expressservice für Ihre dringenden Sendungen. Ob Expresslieferung oder Over-night-Transport – wir sind zuverlässig, sicher und sofort einsatzbereit."
        image="/images/kleintransport.webp"
        imageAlt="Expresstransport Stuttgart"
      />
      
      <TransportStepsSection />
      
      <PricingSection />
      
      <FAQSection />

      <TransportRequestForm defaultExpress={true} />
      <Footer />
    </main>
  )
}
