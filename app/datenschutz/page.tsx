import LegalDocument from "@/components/legal-document";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: 'Datenschutzerklärung | NEMEZ TRANSPORTE',
  description: 'Datenschutzerklärung und Informationen zum Datenschutz von NEMEZ TRANSPORTE.',
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen flex flex-col">
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
          { label: "Über uns", href: "#uber-uns" },
          { label: "FAQ", href: "#faq" }
        ]}
        ctaText="Jetzt unverbindlich anfragen"
        ctaHref="#contact"
      />
      <div className="flex-grow">
        <LegalDocument 
          title="Datenschutzerklärung" 
          fileName="datenschutz.html" 
        />
      </div>
      <Footer />
    </main>
  );
}
