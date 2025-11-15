import { Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer id="kontakt" className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo-white.webp"
                alt="Nemez Transporte"
                width={180}
                height={50}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-sm text-primary-foreground/80">
              Ihr Partner für Transporte und Umzüge in Stuttgart und deutschlandweit.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#leistungen" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link href="#uber-uns" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#kontakt" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Leistungen</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/80">Kleintransporte</li>
              <li className="text-primary-foreground/80">Expresslieferungen</li>
              <li className="text-primary-foreground/80">Umzugsservice</li>
              <li className="text-primary-foreground/80">Entrümpelungen</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">+49 (0) 711 123456</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">info@nemez-transporte.de</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent mt-1" />
                <span className="text-primary-foreground/80">
                  Stuttgart-Weilimdorf
                  <br />
                  Deutschland
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Nemez Transporte. Alle Rechte vorbehalten.</p>
          <div className="flex items-center justify-center gap-4 mt-2">
            <Link href="/impressum" className="hover:text-accent transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-accent transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
