import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import CustomButton from "@/components/custom-button"
import { ArrowRight } from "lucide-react"
import { AboutSection } from "@/components/about-section"
import { CTASection } from "@/components/cta-section"
import { FounderSection } from "@/components/founder-section"
import { FAQSection } from "@/components/faq-section"
import { HelpSection } from "@/components/help-section"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Nemez Transporte",
    "image": "https://nemez-transporte.de/images/logo-white.webp",
    "@id": "https://nemez-transporte.de",
    "url": "https://nemez-transporte.de",
    "telephone": "+491622618418",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Beim Fasanengarten 44",
      "addressLocality": "Stuttgart",
      "postalCode": "70499",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.8109,
      "longitude": 9.1023
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "08:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://www.instagram.com/nemez_transporte/"
    ]
  };

  return (
    <main className="min-h-screen">
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
          { label: "Über uns", href: "#uber-uns" },
          { label: "FAQ", href: "#faq" }
        ]}
        ctaText="Jetzt unverbindlich anfragen"
        ctaHref="#contact"
      />
      <HeroSection 
        title="Transporte und Umzüge in Stuttgart und Umgebung"
        description="Seit vielen Jahren Ihr zuverlässiger Partner für Kleintransporte und Umzüge. Alles aus einer Hand."
        image="/images/hero-van.webp"
        imageAlt="Nemez Transporte Van"
      >
        <CustomButton 
            primaryText="Jetzt Angebot einholen!" 
            secondaryText="100% unverbindlich" 
            icon={ArrowRight}
            href="#contact" 
            className="w-full sm:w-fit bg-primary text-primary-foreground hover:bg-primary/90 "
        />
      </HeroSection>
      <ServicesSection />
      <AboutSection />
      <CTASection />
      <FounderSection />
      <FAQSection />
      <HelpSection />
      <Footer />
    </main>
  )
}
