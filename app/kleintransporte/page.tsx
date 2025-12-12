import { ServiceHero } from "@/components/service-hero"
import { StepsSection } from "@/components/steps-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { TransportRequestForm } from "@/components/transport-request-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Kleintransporte Stuttgart | Nemez Transporte",
  description: "Professionelle Kleintransporte in Stuttgart und Umgebung. Schnell, zuverlässig und günstig. Jetzt Angebot anfordern.",
}

export default function KleintransportePage() {
  return (
    <main>
      <Header 
        theme="dark" 
        navItems={[
          { label: "Ablauf", href: "#process" },
          { label: "Preise", href: "#pricing" },
          { label: "FAQ", href: "#faq" }
        ]}
        ctaText="Jetzt Angebot anfordern" 
        ctaHref="#contact-form"
      />
      <ServiceHero
        title="Kleintransporte in Stuttgart und Umgebung"
        subtitle="Wir bieten Ihnen professionelle Dienstleistungen für Kleintransporte, um Ihnen den Transport von sperrigen Gegenständen oder Kleinigkeiten, die nicht in einen herkömmlichen PKW passen, zu erleichtern."
        image="/images/kleintransport.webp"
        imageAlt="Kleintransport Stuttgart"
      />
      
      <StepsSection />
      
      <PricingSection />
      
      <FAQSection />

      <TransportRequestForm />
      <Footer />
    </main>
  )
}
