import { ServiceHero } from "@/components/service-hero"
import { MovingStepsSection } from "@/components/moving-steps-section"
import { MovingFAQSection } from "@/components/moving-faq-section"
import { MovingRequestForm } from "@/components/moving-request-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Umzugsservice Stuttgart | Nemez Transporte",
  description: "Professioneller Umzugsservice in Stuttgart und Umgebung. Stressfrei, zuverlässig und kompetent. Jetzt Angebot für Ihren Umzug anfordern.",
}

export default function UmzugPage() {
  return (
    <main>
      <Header 
        theme="dark" 
        navItems={[
          { label: "Ablauf", href: "#process" },
          { label: "FAQ", href: "#faq" }
        ]}
        ctaText="Jetzt Angebot anfordern" 
        ctaHref="#contact-form"
      />
      <ServiceHero
        title="Umzugsservice in Stuttgart und Umgebung"
        subtitle="Wir unterstützen Sie bei Ihrem Umzug – egal ob Privatumzug oder Firmenumzug. Unser erfahrenes Team kümmert sich um den sicheren Transport Ihres Hab und Guts, damit Sie entspannt in Ihr neues Zuhause oder Büro starten können."
        image="/images/umzug.webp"
        imageAlt="Umzugsservice Stuttgart"
      />
      
      <MovingStepsSection />
      
      <MovingFAQSection />

      <MovingRequestForm />
      <Footer />
    </main>
  )
}
