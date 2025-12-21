"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { CustomButton } from "@/components/custom-button"
import { Label } from "@/components/ui/label"
import { CustomInput } from "@/components/ui/custom-input"
import { CustomTextarea } from "@/components/ui/custom-textarea"
import { CustomPhoneInput } from "@/components/ui/custom-phone-input"
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

interface MovingRequestFormProps {
  onSuccess?: () => void
  onBack?: () => void
  embedded?: boolean
}

export function MovingRequestForm({ onSuccess, onBack, embedded = false }: MovingRequestFormProps) {
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
      serviceType: "umzug",
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

  // Helper for error messages
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
          <h2 className="text-4xl sm:text-5xl font-semibold mb-3 tracking-tight text-center">Umzugsanfrage stellen</h2>
          <p className="text-muted-foreground text-lg text-center">
            Teilen Sie uns die Details Ihres Umzugs mit und wir erstellen Ihnen ein unverbindliches Angebot.
          </p>
        </div>
      )}

      <div className="text-sm text-muted-foreground mb-6">
        <span className="text-red-500 font-bold">*</span> Pflichtfelder
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Row 1: Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 relative">
            <Label htmlFor="name" className="text-base font-medium">
              Vollständiger Name <span className="text-red-500">*</span>
            </Label>
            <CustomInput id="name" placeholder="Max Mustermann" {...register("name")} error={!!errors.name} autoComplete="name" />
            <ErrorMessage error={errors.name} />
          </div>
          <div className="space-y-2 relative">
            <Label htmlFor="email" className="text-base font-medium">
              E-Mail <span className="text-red-500">*</span>
            </Label>
            <CustomInput id="email" type="email" placeholder="beispiel@gmail.com" {...register("email")} error={!!errors.email} autoComplete="email" />
            <ErrorMessage error={errors.email} />
          </div>
        </div>

        {/* Row 2: Phone and Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 relative">
            <Label htmlFor="phone" className="text-base font-medium">
              Telefon <span className="text-red-500">*</span>
            </Label>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <CustomPhoneInput
                  {...field}
                  id="phone"
                  placeholder="Geben Sie Ihre Telefonnummer ein"
                  error={!!errors.phone}
                />
              )}
            />
            <ErrorMessage error={errors.phone} />
          </div>
          <div className="space-y-2 relative">
            <Label htmlFor="date" className="text-base font-medium">
              Wunschdatum <span className="text-red-500">*</span>
            </Label>
            <Controller
              name="requestedDate"
              control={control}
              render={({ field }) => (
                <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-white h-14 px-4 py-3.5 rounded-lg transition-all",
                        "hover:border-[#d1d5db] hover:shadow-[0_0_0_1px_#d1d5db] hover:bg-white",
                        !field.value ? "text-[#9ca3af]" : "text-foreground",
                        errors.requestedDate 
                          ? "border-red-500 shadow-[0_0_0_1px_#ef4444]" 
                          : isCalendarOpen 
                            ? "border-accent shadow-[0_0_0_1px_#f8d24a]" 
                            : "border-[#d1d5db]"
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
            <ErrorMessage error={errors.requestedDate} />
          </div>
        </div>

        {/* Addresses Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
          {/* Auszugsadresse */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent font-medium text-sm">1</div>
              <Label className="text-base font-medium">Auszugsadresse</Label>
            </div>
            <div className="space-y-4">
              <div className="relative">
                <CustomInput placeholder="Straße und Hausnummer" {...register("pickupAddress")} error={!!errors.pickupAddress} autoComplete="address-line1" />
                <ErrorMessage error={errors.pickupAddress} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <CustomInput placeholder="Postleitzahl" {...register("pickupZip")} error={!!errors.pickupZip} inputMode="numeric" pattern="[0-9]*" autoComplete="postal-code" />
                  <ErrorMessage error={errors.pickupZip} />
                </div>
                <div className="relative">
                  <CustomInput placeholder="Stadt" {...register("pickupCity")} error={!!errors.pickupCity} autoComplete="address-level2" />
                  <ErrorMessage error={errors.pickupCity} />
                </div>
              </div>
            </div>
          </div>

          {/* Einzugsadresse */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-sm">2</div>
              <Label className="text-base font-medium">Einzugsadresse</Label>
            </div>
            <div className="space-y-4">
              <div className="relative">
                <CustomInput placeholder="Straße und Hausnummer" {...register("deliveryAddress")} error={!!errors.deliveryAddress} autoComplete="shipping address-line1" />
                <ErrorMessage error={errors.deliveryAddress} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <CustomInput placeholder="Postleitzahl" {...register("deliveryZip")} error={!!errors.deliveryZip} inputMode="numeric" pattern="[0-9]*" autoComplete="shipping postal-code" />
                  <ErrorMessage error={errors.deliveryZip} />
                </div>
                <div className="relative">
                  <CustomInput placeholder="Stadt" {...register("deliveryCity")} error={!!errors.deliveryCity} autoComplete="shipping address-level2" />
                  <ErrorMessage error={errors.deliveryCity} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 5: Description */}
        <div className="space-y-2 relative">
          <Label htmlFor="message" className="text-base font-medium">
            Details zum Umzugsgut <span className="text-red-500">*</span>
          </Label>
          <CustomTextarea 
            id="message" 
            placeholder="Wie viele Zimmer? Welche Etage? Aufzug vorhanden? Gibt es besonders sperrige Möbel (Klavier, Sideboard etc.)?"
            {...register("message")}
            error={!!errors.message}
            className="min-h-[150px]"
          />
          <ErrorMessage error={errors.message} className="-bottom-6" />
        </div>

        <div className="pt-4 flex flex-row gap-4">
          {onBack && (
            <>
              <CustomButton 
                primaryText=""
                icon={ArrowLeft}
                variant="outline"
                onClick={onBack}
                disabled={isSubmitting}
                className="sm:hidden p-0 h-14 w-14 shrink-0 text-foreground border-border hover:text-foreground hover:border-foreground"
              />
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
