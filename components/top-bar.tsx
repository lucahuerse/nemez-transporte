import Link from "next/link"
import { Phone, Mail, Instagram } from "lucide-react"

export default function TopBar() {
  return (
    <div className="bg-[#1a1a1a] text-white py-2 text-xs md:text-sm relative z-50">
      <div className="container mx-auto px-4 flex flex-row justify-between items-center md:gap-2">
        {/* Social Links */}
        <div className="flex items-center gap-4">
          <Link 
            href="https://www.instagram.com/nemez_transporte/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            <Instagram className="h-4 w-4 text-accent" />
            <span>@nemez_transporte</span>
          </Link>
        </div>
        {/* Contact Info */}
        <div className="flex items-center gap-4 md:gap-6">
          <Link 
            href="tel:+491622618418" 
            className="flex items-center gap-2 hover:text-accent transition-colors"
          >
            <Phone className="h-4 w-4 text-accent" />
            <span>+49 162 2618418</span>
          </Link>
          <Link 
            href="mailto:m.nemez@nemez-transporte.de" 
            className="hidden md:flex items-center gap-2 hover:text-accent transition-colors"
          >
            <Mail className="h-4 w-4 text-accent" />
            <span>m.nemez@nemez-transporte.de</span>
          </Link>
        </div>

      </div>
    </div>
  )
}
