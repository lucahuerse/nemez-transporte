import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { CTASection } from "@/components/cta-section"
import { FounderSection } from "@/components/founder-section"
import { FAQSection } from "@/components/faq-section"
import { HelpSection } from "@/components/help-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header theme="light" />
      <HeroSection />
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
