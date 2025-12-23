"use client"

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"
import CustomButton from "./custom-button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

interface MobileNavProps {
  navItems: NavItem[]
  ctaText?: string
  ctaHref?: string
  isLight?: boolean 
}

export function MobileNav({ navItems, ctaText, ctaHref, isLight }: MobileNavProps) {
  const [open, setOpen] = useState(false)

  // Explicitly use white logo for the mobile menu as requested
  const logoSrc = "/images/logo-white.webp"

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className={cn(
            "lg:hidden size-12", 
            isLight ? "text-white hover:bg-white/10" : "text-foreground hover:bg-black/5"
          )}
        >
          <Menu className="size-8 stroke-[1.5]" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="top" 
        className="bg-foreground border-none text-brand-cream p-0 [&>button]:text-brand-cream [&>button]:top-6 [&>button]:right-4 [&>button>svg]:w-8 [&>button>svg]:h-8 [&>button>svg]:stroke-[1.5] [&>button]:focus:!ring-0 [&>button]:focus:!ring-offset-0 [&>button]:focus:!outline-none [&>button]:focus:!border-none"
      >
        <SheetHeader className="sr-only">
          <SheetTitle>Menü</SheetTitle>
          <SheetDescription>Navigation für Nemez Transporte</SheetDescription>
        </SheetHeader>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
             <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
                <Image 
                    src={logoSrc} 
                    alt="Nemez Transporte" 
                    width={180} 
                    height={50} 
                    className="h-12 w-auto" 
                    priority 
                />
            </Link>
        </div>

        <nav className="flex flex-col gap-6 px-4 pb-8 mt-2">
          <div className="flex flex-col gap-6 p">
          {navItems.map((item) => (
            item.children ? (
              <Accordion type="single" collapsible key={item.label} className="w-full border-b-0">
                <AccordionItem value={item.label} className="border-b-0">
                  <AccordionTrigger className="text-xl font-medium text-brand-cream hover:text-brand-cream/80 py-0 hover:no-underline">
                    {item.label}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-4 pl-4 pt-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="text-xl text-brand-cream/80 hover:text-brand-cream transition-colors"
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-xl font-medium transition-colors text-white hover:text-white/80"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            )
          ))}
          {ctaText && ctaHref && (
            <CustomButton 
                primaryText={ctaText} 
                href={ctaHref} 
                className="sm:w-fit w-full"
                onClick={() => setOpen(false)}
            />
          )}
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
