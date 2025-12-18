import LegalDocument from "@/components/legal-document";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: 'Impressum | NEMEZ TRANSPORTE',
  description: 'Rechtliche Angaben und Impressum von NEMEZ TRANSPORTE.',
};

export default function ImpressumPage() {
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
          title="Impressum" 
          fileName="impressum.html" 
        />
      </div>
      <Footer />
    </main>
  );
}
