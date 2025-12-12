"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface NavItem {
  label: string
  href: string
}

interface MobileNavProps {
  navItems: NavItem[]
  ctaText?: string
  ctaHref?: string
  isLight?: boolean 
}

export function MobileNav({ navItems, ctaText, ctaHref, isLight }: MobileNavProps) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className={cn(
            "lg:hidden", 
            isLight ? "text-white hover:bg-white/10" : "text-foreground hover:bg-black/5"
          )}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-background border-l">
        <nav className="flex flex-col gap-6 mt-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg font-medium transition-colors hover:text-primary"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          {ctaText && ctaHref && (
            <Link href={ctaHref} onClick={() => setOpen(false)}>
               <Button className="w-full mt-4 font-semibold">{ctaText}</Button>
            </Link>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
