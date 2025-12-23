import { HeroSection } from "@/components/hero-section"
import CustomButton from "@/components/custom-button"
import { ArrowRight } from "lucide-react"
import { EntruempelungStepsSection } from "@/components/entruempelung-steps-section"
import { EntruempelungFAQSection } from "@/components/entruempelung-faq-section"
import { EntruempelungRequestForm } from "@/components/entruempelung-request-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"

export const metadata = {
  title: "Entrümpelung Stuttgart | Nemez Transporte",
  description: "Professionelle Entrümpelung und Wohnungsauflösung in Stuttgart und Umgebung. Schnell, diskret und besenrein. Jetzt kostenlose Besichtigung anfordern.",
}

export default function EntruempelungPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Entrümpelung Stuttgart",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Nemez Transporte"
    },
    "description": "Professionelle Entrümpelung und Wohnungsauflösung in Stuttgart und Umgebung. Schnell, diskret und besenrein.",
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
          { label: "FAQ", href: "#faq" }
        ]}
        ctaText="Besichtigung anfordern" 
        ctaHref="#contact-form"
      />
      <HeroSection
        title="Entrümpelung & Wohnungsauflösung in Stuttgart"
        description="Wir schaffen Platz! Egal ob Keller, Dachboden oder die komplette Wohnung – wir entrümpeln schnell, zuverlässig und hinterlassen alles besenrein. Inklusive transparenter Festpreisgarantie und Wertanrechnung."
        image="/images/entruempelung.webp"
        imageAlt="Entrümpelung Stuttgart"
      >
        <CustomButton 
            primaryText="Besichtigung anfordern" 
            secondaryText="Kostenlos & unverbindlich" 
            icon={ArrowRight}
            href="#contact-form" 
            className="w-full sm:w-fit bg-primary text-primary-foreground hover:bg-primary/90 "
        />
      </HeroSection>
      
      <EntruempelungStepsSection />
      
      <EntruempelungFAQSection />

      <EntruempelungRequestForm />
      <Footer />
    </main>
  )
}
