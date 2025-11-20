import { Phone, Mail, MapPin, Instagram } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer id="kontakt" className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo-white.webp"
                alt="Nemez Transporte"
                height={70}
                width={180}
                className="h-18 w-auto"
              />
            </div>
            <p className="text-sm text-primary-foreground/60 mb-6 max-w-md text-balance">
              Ihr Partner für Kleintransporte und Umzüge in Stuttgart und Umgebung
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Kontakt</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <Link href="tel:01622618418" className="hover:text-accent transition-colors text-primary-foreground/80">0162 2618418</Link>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <Link href="mailto:info@nemez-transporte.de" className="hover:text-accent transition-colors text-primary-foreground/80">info@nemez-transporte.de</Link>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <Link href="https://www.google.com/maps/place/Beim+Fasanengarten+44,+70499+Stuttgart" className="hover:text-accent transition-colors text-primary-foreground/80">Beim Fasanengarten 44, 70499 Stuttgart</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Leistungen</h3>
            <ul className="space-y-4 text-sm">
              <li className="text-primary-foreground/80"><Link className="hover:text-accent transition-colors" href="/kleintransport">Kleintransporte</Link></li>
              <li className="text-primary-foreground/80"><Link className="hover:text-accent transition-colors" href="/umzug">Umzugsservice</Link></li>
              <li className="text-primary-foreground/80"><Link className="hover:text-accent transition-colors" href="/entrumpelung">Entrümpelungen</Link></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Socials</h3>
            <ul className="space-y-4 text-sm">
              <li className="text-primary-foreground/80"><Link className="hover:text-accent transition-colors" href="https://www.instagram.com/nemez_transporte/">Instagram</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-sm text-primary-foreground/60">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} Nemez Transporte. Alle Rechte vorbehalten.</p>
            <div className="flex items-center gap-4">
              <Link href="/impressum" className="hover:text-accent transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-accent transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
