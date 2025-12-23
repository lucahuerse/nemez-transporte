import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import CustomButton from "./custom-button"
import { cn } from "@/lib/utils"
import { MobileNav } from "./mobile-nav"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import TopBar from "./top-bar"

interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

interface HeaderProps {
  theme?: 'light' | 'dark'
  navItems?: NavItem[]
  ctaText?: string
  ctaHref?: string
}

export function Header({ 
  theme = 'light',
  navItems = [
    { href: "/", label: "Ablauf" }, 
    { href: "/", label: "Preise" }, 
    { href: "/", label: "FAQ" }
  ],
  ctaText = "Jetzt unverbindlich anfragen!",
  ctaHref
}: HeaderProps) {
  const isLight = theme === 'light'
  const textColor = isLight ? "text-white" : "text-foreground"
  const hoverColor = isLight ? "hover:text-accent" : "hover:text-primary/70"
  const logoSrc = isLight ? "/images/logo-white.webp" : "/images/logo-dark.png"

  return (
    <header className="relative z-50 bg-brand-cream">
      <TopBar />
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src={logoSrc} alt="Nemez Transporte" width={180} height={50} className="h-12 w-auto" priority />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center gap-8 flex-1 px-4">
           {navItems.map((link) => (
             link.children ? (
               <DropdownMenu key={link.label}>
                 <DropdownMenuTrigger className={cn("flex items-center gap-1 text-base font-medium transition-colors outline-none hover:cursor-pointer", textColor, hoverColor)}>
                   {link.label}
                   <ChevronDown className="h-4 w-4" />
                 </DropdownMenuTrigger>
                 <DropdownMenuContent align="start" className="bg-transparent backdrop-blur-sm border border-white/20 min-w-[200px] p-2">
                   {link.children.map((child) => (
                     <DropdownMenuItem 
                        key={child.label} 
                        asChild 
                        className={cn(
                          "text-base py-3 px-4 cursor-pointer",
                          textColor,
                          isLight 
                            ? "focus:bg-white/10 focus:text-white" 
                            : "focus:bg-black/5 focus:text-foreground"
                        )}
                      >
                       <Link href={child.href}>
                         {child.label}
                       </Link>
                     </DropdownMenuItem>
                   ))}
                 </DropdownMenuContent>
               </DropdownMenu>
             ) : (
               <Link 
                 key={link.label}
                 href={link.href} 
                 className={cn("text-base font-medium transition-colors", textColor, hoverColor)}
               >
                 {link.label}
               </Link>
             )
           ))}
        </nav>

        <div className="flex items-center gap-4">
            {/* CTA Button */}
            <CustomButton 
              primaryText={ctaText}
              href={ctaHref}
              className={cn(
                "hidden lg:inline-flex shadow-none border-0",
                 isLight 
                    ? "bg-white text-black hover:bg-white/90" 
                    : "bg-foreground text-white hover:bg-foreground/90"
              )} 
            /> 

            {/* Mobile Navigation */}
            <MobileNav 
                navItems={navItems} 
                ctaText={ctaText}
                ctaHref={ctaHref}
                isLight={isLight}
            />
        </div>
      </div>
    </header>
  )
}
