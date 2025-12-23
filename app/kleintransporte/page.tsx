import { HeroSection } from "@/components/hero-section"
import CustomButton from "@/components/custom-button"
import { ArrowRight } from "lucide-react"
import { TransportStepsSection } from "@/components/transport-steps-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { TransportRequestForm } from "@/components/transport-request-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"

export const metadata = {
  title: "Kleintransporte Stuttgart | Nemez Transporte",
  description: "Professionelle Kleintransporte in Stuttgart und Umgebung. Schnell, zuverlässig und günstig. Jetzt Angebot anfordern.",
}

export default function KleintransportePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Kleintransporte Stuttgart",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Nemez Transporte"
    },
    "description": "Professionelle Kleintransporte in Stuttgart und Umgebung. Schnell, zuverlässig und günstig.",
    "areaServed": {
      "@type": "City",
      "name": "Stuttgart"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock"
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
      <HeroSection
        title="Kleintransporte in Stuttgart und Umgebung"
        description="Wir bieten Ihnen professionelle Dienstleistungen für Kleintransporte, um Ihnen den Transport von sperrigen Gegenständen oder Kleinigkeiten, die nicht in einen herkömmlichen PKW passen, zu erleichtern."
        image="/images/kleintransport.webp"
        imageAlt="Kleintransport Stuttgart"
      >
        <CustomButton 
            primaryText="Jetzt Angebot anfordern" 
            secondaryText="Kostenlos & unverbindlich" 
            icon={ArrowRight}
            iconClassName="hidden md:block"
            href="#contact-form" 
            className="w-full sm:w-fit bg-foreground text-white hover:bg-foreground/90 "
        />
      </HeroSection>
      
      <TransportStepsSection />
      
      <PricingSection />
      
      <FAQSection />

      <TransportRequestForm />
      <Footer />
    </main>
  )
}
