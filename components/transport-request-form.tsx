"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import * as React from "react"

export function TransportRequestForm() {
  return (
    <section className="py-20 bg-background" id="contact-form">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-none border dark:border-border">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-3 tracking-tight">Transportanfrage stellen</h2>
            <p className="text-muted-foreground text-lg">
              Beantworte uns ein paar Fragen und wir melden uns schnellstmöglich mit einem Preis zurück.
            </p>
          </div>

          <form className="space-y-8">
            {/* Row 1: Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base font-medium">Vollständiger Name</Label>
                <Input id="name" placeholder="Max Mustermann" className="h-12 bg-background" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base font-medium">E-Mail</Label>
                <Input id="email" type="email" placeholder="beispiel@gmail.com" className="h-12 bg-background" />
              </div>
            </div>

            {/* Row 2: Phone and Service */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-base font-medium">Telefon</Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center justify-center">
                    <span className="text-xl leading-none">🇩🇪</span>
                  </div>
                  <Input id="phone" type="tel" placeholder="Geben Sie Ihre Telefonnummer ein" className="h-12 pl-12 bg-background" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="service" className="text-base font-medium">Welchen Service benötigen Sie?</Label>
                <Select>
                  <SelectTrigger id="service" className="h-12 bg-background">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="kleintransport">Kleintransport</SelectItem>
                    <SelectItem value="umzug">Umzug</SelectItem>
                    <SelectItem value="entruempelung">Entrümpelung</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Row 3: Pickup Address */}
            <div>
              <Label className="text-base font-medium mb-3 block">Abholadresse</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <Input placeholder="Adresse" className="h-12 bg-background" />
                 <Input placeholder="Adresse (Zusatz)" className="h-12 bg-background hidden" /> {/* Hidden/Optional or just one line? Screenshot shows 3 inputs block.*/}
                 {/* Actually screenshot shows: [Adresse], [PLZ], [City]. All visible?
                     Let's do:
                     [Adresse (Full)]
                     [PLZ] [City]
                  */}
                 <div className="col-span-1 md:col-span-2">
                    <Input placeholder="Adresse" className="h-12 bg-background" />
                 </div>
                 <Input placeholder="Postleitzahl" className="h-12 bg-background" />
                 <Input placeholder="Stadt" className="h-12 bg-background" />
              </div>
            </div>

             {/* Row 4: Delivery Address */}
             <div>
              <Label className="text-base font-medium mb-3 block">Lieferadresse</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="col-span-1 md:col-span-2">
                    <Input placeholder="Adresse" className="h-12 bg-background" />
                 </div>
                 <Input placeholder="Postleitzahl" className="h-12 bg-background" />
                 <Input placeholder="Stadt" className="h-12 bg-background" />
              </div>
            </div>

            {/* Row 5: Description */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-base font-medium">Beschreiben Sie Ihre Anforderungen</Label>
              <Textarea 
                id="message" 
                placeholder="Was soll transportiert werden? Maße/Anzahl/Gewicht, Etage, Aufzug vorhanden?" 
                className="min-h-[120px] bg-background resize-y"
              />
            </div>

            {/* Submit Button */}
            <div>
              <Button type="submit" className="bg-[#f8d24a] text-black hover:bg-[#e4c145] h-12 px-8 text-base font-semibold shadow-none hover:cursor-pointer">
                Anfrage absenden
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
