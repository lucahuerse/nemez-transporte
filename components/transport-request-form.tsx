"use client"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { CustomButton } from "@/components/custom-button"
import { Label } from "@/components/ui/label"
import { CustomInput } from "@/components/ui/custom-input"
import { CustomTextarea } from "@/components/ui/custom-textarea"
import { CustomPhoneInput } from "@/components/ui/custom-phone-input"
import { Switch } from "@/components/ui/switch"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { de } from "date-fns/locale"
import { ArrowLeft, Send, Loader2, Calendar as CalendarIcon } from "lucide-react"
import * as React from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { formSchema, type FormValues, type ActionResponse } from "@/lib/schemas"
import { toast } from "sonner"


interface TransportRequestFormProps {
  serviceType?: "kleintransport" | "umzug" | "entruempelung"
  onSuccess?: () => void
  onBack?: () => void
  embedded?: boolean
}

export function TransportRequestForm({ serviceType = "kleintransport", onSuccess, onBack, embedded = false }: TransportRequestFormProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false)

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceType: serviceType,
      requestedDate: undefined,
      pickupAddress: "",
      pickupZip: "",
      pickupCity: "",
      deliveryAddress: "",
      deliveryZip: "",
      deliveryCity: "",
      message: "",
      isExpress: false,
    },
  })

  React.useEffect(() => {
    if (serviceType) {
      setValue("serviceType", serviceType)
    }
  }, [serviceType, setValue])



  // Helper for error messages to keep layout stable
  const ErrorMessage = ({ error, className }: { error?: { message?: string }, className?: string }) => {
    if (!error?.message) return null
    return (
      <span className={cn("text-xs text-red-500 font-medium absolute -bottom-4 left-0", className)}>
        {error.message}
      </span>
    )
  }

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      
      const result: ActionResponse = await response.json()
      
      if (result.success) {
        toast.success(result.message)
        reset()
        if (onSuccess) {
          onSuccess()
        }
      } else {
        toast.error(result.message || "Ein Fehler ist aufgetreten.")
      }
    } catch (error) {
      toast.error("Ein unerwarteter Fehler ist aufgetreten.")
    } finally {
      setIsSubmitting(false)
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
            <Label htmlFor="date" className="text-base font-medium">Wunschdatum</Label>
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <div className="flex-1">
                <Controller
                  name="requestedDate"
                  control={control}
                  render={({ field }) => (
                    <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal bg-white border-[#d1d5db] h-14 px-4 py-3.5 rounded-lg transition-all",
                            "hover:border-[#d1d5db] hover:shadow-[0_0_0_1px_#d1d5db] hover:bg-white",
                            isCalendarOpen ? "border-accent shadow-[0_0_0_1px_#f8d24a] hover:border-accent hover:shadow-[0_0_0_1px_#f8d24a]" : "",
                            !field.value ? "text-[#9ca3af]" : "text-foreground",
                            errors.requestedDate && "border-red-500 shadow-[0_0_0_1px_#ef4444]"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-5 w-5 opacity-50" />
                          <span className="text-base">
                            {field.value ? (
                              format(field.value, "PPP", { locale: de })
                            ) : (
                              "Datum auswählen"
                            )}
                          </span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={(date) => {
                            field.onChange(date)
                            setIsCalendarOpen(false)
                          }}
                          disabled={(date) =>
                            date < new Date(new Date().setHours(0, 0, 0, 0))
                          }
                          initialFocus
                          locale={de}
                        />
                      </PopoverContent>
                    </Popover>
                  )}
                />
              </div>
              <Controller
                name="isExpress"
                control={control}
                render={({ field }) => (
                  <div className="flex items-center space-x-2 rounded-lg border border-[#d1d5db] bg-white px-4 py-3.5 h-14">
                    <Switch
                      id="express-mode"
                      className="hover:cursor-pointer"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <Label htmlFor="express-mode" className="text-base font-medium cursor-pointer whitespace-nowrap">
                      Express
                    </Label>
                  </div>
                )}
              />
            </div>
            <ErrorMessage error={errors.requestedDate} />
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
                <CustomInput placeholder="Postleitzahl" {...register("pickupZip")} error={!!errors.pickupZip} inputMode="numeric" pattern="[0-9]*" />
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
                <CustomInput placeholder="Postleitzahl" {...register("deliveryZip")} error={!!errors.deliveryZip} inputMode="numeric" pattern="[0-9]*" />
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

        <div className="pt-2 flex flex-row gap-4">
          {onBack && (
            <>
              {/* Mobile Back Button (Square Icon) */}
                  <CustomButton 
                    primaryText=""
                    icon={ArrowLeft}
                    variant="outline"
                    onClick={onBack}
                    disabled={isSubmitting}
                    className="sm:hidden p-0 h-14 w-14 shrink-0 text-foreground border-border hover:text-foreground hover:border-foreground"
                  />

                  {/* Desktop Back Button (Text) */}
                  <CustomButton 
                    primaryText="Zurück"
                    icon={ArrowLeft}
                    variant="outline"
                    onClick={onBack}
                    disabled={isSubmitting}
                    className="hidden sm:flex w-fit text-foreground border-border hover:text-foreground hover:border-foreground"
                  />
                </>
              )}
              <CustomButton 
                primaryText={isSubmitting ? "Sende..." : "Anfrage absenden"}
                icon={isSubmitting ? (props: any) => <Loader2 {...props} className={cn(props.className, "animate-spin")} /> : Send}
                variant="primary"
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "flex-1 w-full max-w-sm sm:w-fit sm:flex-none sm:max-w-none",
                  isSubmitting && "opacity-80"
                )}
              />
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
