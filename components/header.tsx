import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import CTAButton from "./cta-button"
import { cn } from "@/lib/utils"

interface HeaderProps {
    theme?: 'light' | 'dark'
}

export function Header({ theme = 'light' }: HeaderProps) {
  const isLight = theme === 'light'
  const textColor = isLight ? "text-white" : "text-foreground"
  const hoverColor = isLight ? "hover:text-accent" : "hover:text-primary/70"
  const logoSrc = isLight ? "/images/logo-white.webp" : "/images/logo-dark.png"

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src={logoSrc} alt="Nemez Transporte" width={180} height={50} className="h-12 w-auto" priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
           {[
             { href: "/", label: "Ablauf" }, 
             { href: "/", label: "Preise" }, 
             { href: "/", label: "FAQ" }
           ].map((link) => (
             <Link 
               key={link.label}
               href={link.href} 
               className={cn("text-base font-medium transition-colors", textColor, hoverColor)}
             >
               {link.label}
             </Link>
           ))}
        </nav>

        {/* CTA Button */}
        <CTAButton 
          primaryText="Jetzt unverbindlich anfragen!" 
          className={cn(
            "hidden md:inline-flex shadow-none border-0",
             isLight 
                ? "bg-white text-black hover:bg-white/90" 
                : "bg-[#1a1a1a] text-white hover:bg-[#333]"
          )} 
        /> 
      </div>
    </header>
  )
}
