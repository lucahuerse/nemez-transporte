"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { CustomInput } from "@/components/ui/custom-input"
import { CustomTextarea } from "@/components/ui/custom-textarea"
import { CustomPhoneInput } from "@/components/ui/custom-phone-input"
import { CustomSelect, CustomSelectContent, CustomSelectItem, CustomSelectTrigger, CustomSelectValue } from "@/components/ui/custom-select"
import * as React from "react"

export function TransportRequestForm() {
  const [phoneNumber, setPhoneNumber] = React.useState<string>()

  return (
    <section className="py-20 bg-background" id="contact-form">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-none dark:border-border">
          <div className="text-left mb-12">
            <h2 className="text-4xl sm:text-5xl font-semibold mb-3 tracking-tight">Transportanfrage stellen</h2>
            <p className="text-muted-foreground text-lg">
              Beantworte uns ein paar Fragen und wir melden uns schnellstmöglich mit einem Preis zurück.
            </p>
          </div>

          <form className="space-y-6">
            {/* Row 1: Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base font-medium">Vollständiger Name</Label>
                <CustomInput id="name" placeholder="Max Mustermann" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base font-medium">E-Mail</Label>
                <CustomInput id="email" type="email" placeholder="beispiel@gmail.com" />
              </div>
            </div>

            {/* Row 2: Phone and Service */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-base font-medium">Telefon</Label>
                <CustomPhoneInput 
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  placeholder="Geben Sie Ihre Telefonnummer ein"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="service" className="text-base font-medium">Welchen Service benötigen Sie?</Label>
                <CustomSelect>
                  <CustomSelectTrigger id="service">
                    <CustomSelectValue placeholder="Select an option" />
                  </CustomSelectTrigger>
                  <CustomSelectContent>
                    <CustomSelectItem value="kleintransport">Kleintransport</CustomSelectItem>
                    <CustomSelectItem value="umzug">Umzug</CustomSelectItem>
                    <CustomSelectItem value="entruempelung">Entrümpelung</CustomSelectItem>
                  </CustomSelectContent>
                </CustomSelect>
              </div>
            </div>

            {/* Row 3: Pickup Address */}
            <div className="space-y-3">
              <Label className="text-base font-medium">Abholadresse</Label>
              <div className="space-y-4">
                <CustomInput placeholder="Adresse" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <CustomInput placeholder="Postleitzahl" />
                  <CustomInput placeholder="Stadt" />
                </div>
              </div>
            </div>

            {/* Row 4: Delivery Address */}
            <div className="space-y-3">
              <Label className="text-base font-medium">Lieferadresse</Label>
              <div className="space-y-4">
                <CustomInput placeholder="Adresse" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <CustomInput placeholder="Postleitzahl" />
                  <CustomInput placeholder="Stadt" />
                </div>
              </div>
            </div>

            {/* Row 5: Description */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-base font-medium">Beschreiben Sie Ihre Anforderungen</Label>
              <CustomTextarea 
                id="message" 
                placeholder="Was soll transportiert werden? Maße/Anzahl/Gewicht, Etage, Aufzug vorhanden?" 
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <Button type="submit" className="bg-[#f8d24a] text-black hover:bg-[#e4c145] h-12 px-8 text-base font-semibold shadow-none hover:cursor-pointer rounded-md">
                Anfrage absenden
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
