"use client"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { CustomInput } from "@/components/ui/custom-input"
import { CustomTextarea } from "@/components/ui/custom-textarea"
import { CustomPhoneInput } from "@/components/ui/custom-phone-input"
import { CustomSelect, CustomSelectContent, CustomSelectItem, CustomSelectTrigger, CustomSelectValue } from "@/components/ui/custom-select"
import * as React from "react"
import { z } from "zod"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
  name: z.string().min(2, "Bitte geben Sie Ihren vollständigen Namen ein"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  phone: z.string().min(1, "Bitte geben Sie eine Telefonnummer ein"),
  service: z.string().min(1, "Bitte wählen Sie einen Service aus"),
  pickupAddress: z.string().optional(),
  pickupZip: z.string().optional(),
  pickupCity: z.string().optional(),
  deliveryAddress: z.string().optional(),
  deliveryZip: z.string().optional(),
  deliveryCity: z.string().optional(),
  message: z.string().min(10, "Bitte beschreiben Sie Ihre Anforderungen etwas genauer"),
})

type FormValues = z.infer<typeof formSchema>

interface TransportRequestFormProps {
  defaultService?: string
  onSuccess?: () => void
  onBack?: () => void
  embedded?: boolean
}

export function TransportRequestForm({ defaultService, onSuccess, onBack, embedded = false }: TransportRequestFormProps) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: defaultService || "",
      pickupAddress: "",
      pickupZip: "",
      pickupCity: "",
      deliveryAddress: "",
      deliveryZip: "",
      deliveryCity: "",
      message: "",
    },
  })

  // Helper for error messages to keep layout stable
  const ErrorMessage = ({ error, className }: { error?: { message?: string }, className?: string }) => {
    if (!error?.message) return null
    return (
      <span className={cn("text-xs text-red-500 font-medium absolute -bottom-4 left-0", className)}>
        {error.message}
      </span>
    )
  }

  const onSubmit = (data: FormValues) => {
    console.log("Form data:", data)
    // Here you would typically send the data to your API
    if (onSuccess) {
      onSuccess()
    }
  }

  const content = (
    <>
      {!embedded && (
        <div className="text-left mb-12">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-3 tracking-tight">Transportanfrage stellen</h2>
          <p className="text-muted-foreground text-lg">
            Beantworte uns ein paar Fragen und wir melden uns schnellstmöglich mit einem Preis zurück.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Row 1: Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 relative">
            <Label htmlFor="name" className="text-base font-medium">Vollständiger Name</Label>
            <CustomInput id="name" placeholder="Max Mustermann" {...register("name")} error={!!errors.name} />
            <ErrorMessage error={errors.name} />
          </div>
          <div className="space-y-2 relative">
            <Label htmlFor="email" className="text-base font-medium">E-Mail</Label>
            <CustomInput id="email" type="email" placeholder="beispiel@gmail.com" {...register("email")} error={!!errors.email} />
            <ErrorMessage error={errors.email} />
          </div>
        </div>

        {/* Row 2: Phone and Service */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 relative">
            <Label htmlFor="phone" className="text-base font-medium">Telefon</Label>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <CustomPhoneInput
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Geben Sie Ihre Telefonnummer ein"
                  error={!!errors.phone}
                />
              )}
            />
            <ErrorMessage error={errors.phone} />
          </div>
          <div className="space-y-2 relative">
            <Label htmlFor="service" className="text-base font-medium">Welchen Service benötigen Sie?</Label>
            <Controller
              name="service"
              control={control}
              render={({ field }) => (
                <CustomSelect onValueChange={field.onChange} defaultValue={field.value}>
                  <CustomSelectTrigger id="service" error={!!errors.service}>
                    <CustomSelectValue placeholder="Wählen Sie eine Option" />
                  </CustomSelectTrigger>
                  <CustomSelectContent>
                    <CustomSelectItem value="kleintransport">Kleintransport</CustomSelectItem>
                    <CustomSelectItem value="umzug">Umzug</CustomSelectItem>
                    <CustomSelectItem value="entruempelung">Entrümpelung</CustomSelectItem>
                  </CustomSelectContent>
                </CustomSelect>
              )}
            />
            <ErrorMessage error={errors.service} />
          </div>
        </div>

        {/* Row 3: Pickup Address */}
        <div className="space-y-3">
          <Label className="text-base font-medium">Abholadresse</Label>
          <div className="space-y-4">
            <div className="relative">
              <CustomInput placeholder="Adresse" {...register("pickupAddress")} error={!!errors.pickupAddress} />
              <ErrorMessage error={errors.pickupAddress} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <CustomInput placeholder="Postleitzahl" {...register("pickupZip")} error={!!errors.pickupZip} />
                <ErrorMessage error={errors.pickupZip} />
              </div>
              <div className="relative">
                <CustomInput placeholder="Stadt" {...register("pickupCity")} error={!!errors.pickupCity} />
                <ErrorMessage error={errors.pickupCity} />
              </div>
            </div>
          </div>
        </div>

        {/* Row 4: Delivery Address */}
        <div className="space-y-3">
          <Label className="text-base font-medium">Lieferadresse</Label>
          <div className="space-y-4">
            <div className="relative">
              <CustomInput placeholder="Adresse" {...register("deliveryAddress")} error={!!errors.deliveryAddress} />
              <ErrorMessage error={errors.deliveryAddress} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <CustomInput placeholder="Postleitzahl" {...register("deliveryZip")} error={!!errors.deliveryZip} />
                <ErrorMessage error={errors.deliveryZip} />
              </div>
              <div className="relative">
                <CustomInput placeholder="Stadt" {...register("deliveryCity")} error={!!errors.deliveryCity} />
                <ErrorMessage error={errors.deliveryCity} />
              </div>
            </div>
          </div>
        </div>

        {/* Row 5: Description */}
        <div className="space-y-2 relative">
          <Label htmlFor="message" className="text-base font-medium">Beschreiben Sie Ihre Anforderungen</Label>
          <CustomTextarea 
            id="message" 
            placeholder="Was soll transportiert werden? Maße/Anzahl/Gewicht, Etage, Aufzug vorhanden?"
            {...register("message")}
            error={!!errors.message}
          />
          <ErrorMessage error={errors.message} className="-bottom-6" />
        </div>

        {/* Submit Button */}
        <div className="pt-2 flex gap-4">
          {onBack && (
            <Button 
              type="button" 
              variant="outline" 
              onClick={onBack}
              className="h-12 px-8 text-base font-semibold"
            >
              Zurück
            </Button>
          )}
          <Button type="submit" className="bg-[#f8d24a] text-black hover:bg-[#e4c145] h-12 px-8 text-base font-semibold shadow-none hover:cursor-pointer rounded-md flex-1 md:flex-none">
            Anfrage absenden
          </Button>
        </div>
      </form>
    </>
  )

  if (embedded) {
    return <div className="p-0">{content}</div>
  }

  return (
    <section className="py-20 bg-background" id="contact-form">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-none dark:border-border">
          {content}
        </div>
      </div>
    </section>
  )
}
