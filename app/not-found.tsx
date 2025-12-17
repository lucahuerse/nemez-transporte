import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import CustomButton from "@/components/custom-button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        theme="dark" 
        navItems={[
          { 
            label: "Leistungen", 
            href: "#",
            children: [
              { label: "Kleintransporte", href: "/kleintransporte" },
              { label: "Umzüge", href: "/umzug" },
              { label: "Entrümpelungen", href: "/entruempelung" },
            ]
          },
          { label: "Über uns", href: "/#uber-uns" },
          { label: "FAQ", href: "/#faq" }
        ]}
        ctaText="Jetzt unverbindlich anfragen"
        ctaHref="/#contact"
      />
      
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 pt-60 pb-20">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Upps! Diese Seite existiert nicht.</h2>
        <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">
          Die von Ihnen gesuchte Seite konnte leider nicht gefunden werden. 
          Vielleicht wurde sie verschoben oder gelöscht.
        </p>
        <CustomButton 
            primaryText="Zurück zur Startseite" 
            href="/"
            className="w-full sm:w-auto"
        />
      </main>

      <Footer />
    </div>
  )
}
