import { HeroSection } from "@/components/hero-section"
import CustomButton from "@/components/custom-button"
import { ArrowRight } from "lucide-react"
import { MovingStepsSection } from "@/components/moving-steps-section"
import { MovingFAQSection } from "@/components/moving-faq-section"
import { MovingRequestForm } from "@/components/moving-request-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"

export const metadata = {
  title: "Umzugsservice Stuttgart | Nemez Transporte",
  description: "Professioneller Umzugsservice in Stuttgart und Umgebung. Stressfrei, zuverlässig und kompetent. Jetzt Angebot für Ihren Umzug anfordern.",
}

export default function UmzugPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Umzugsservice Stuttgart",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Nemez Transporte"
    },
    "description": "Professioneller Umzugsservice in Stuttgart und Umgebung. Stressfrei, zuverlässig und kompetent.",
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
        ctaText="Jetzt Umzug planen" 
        ctaHref="#contact-form"
      />
      <HeroSection
        title="Umzugsservice in Stuttgart und Umgebung"
        description="Wir unterstützen Sie bei Ihrem Umzug – egal ob Privatumzug oder Firmenumzug. Unser erfahrenes Team kümmert sich um den sicheren Transport Ihres Hab und Guts, damit Sie entspannt in Ihr neues Zuhause oder Büro starten können."
        image="/images/umzug.webp"
        imageAlt="Umzugsservice Stuttgart"
      >
        <CustomButton 
            primaryText="Jetzt Umzug planen" 
            secondaryText="Kostenlos & unverbindlich" 
            icon={ArrowRight}
            href="#contact-form" 
            className="w-full sm:w-fit bg-primary text-primary-foreground hover:bg-primary/90 "
        />
      </HeroSection>
      
      <MovingStepsSection />
      
      <MovingFAQSection />

      <MovingRequestForm />
      <Footer />
    </main>
  )
}
