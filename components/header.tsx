import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo-white.webp" alt="Nemez Transporte" width={180} height={50} className="h-12 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <Link href="#leistungen" className="text-white hover:text-accent transition-colors">
            Leistungen
          </Link>
          <Link href="#uber-uns" className="text-white hover:text-accent transition-colors">
            Über uns
          </Link>
          <Link href="#faq" className="text-white hover:text-accent transition-colors">
            FAQ
          </Link>
          <Link href="#kontakt" className="text-white hover:text-accent transition-colors">
            Kontakt
          </Link>
        </nav>

        <Button className="hidden md:inline-flex">Jetzt unverbindlich anfragen</Button>
      </div>
    </header>
  )
}
