import { z } from "zod"

export const formSchema = z.object({
  name: z.string().min(2, "Bitte geben Sie Ihren vollständigen Namen ein"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  phone: z.string().min(1, "Bitte geben Sie eine Telefonnummer ein"),
  serviceType: z.enum(["kleintransport", "umzug", "entruempelung"], {
    required_error: "Bitte wählen Sie einen Service aus",
  }),
  requestedDate: z.coerce.date({
    required_error: "Bitte wählen Sie ein Wunschdatum aus",
  }),
  isExpress: z.boolean().default(false),
  pickupAddress: z.string().optional(),
  pickupZip: z.string().optional(),
  pickupCity: z.string().optional(),
  deliveryAddress: z.string().optional(),
  deliveryZip: z.string().optional(),
  deliveryCity: z.string().optional(),
  message: z.string().min(10, "Bitte beschreiben Sie Ihre Anforderungen etwas genauer"),
})

export type FormValues = z.infer<typeof formSchema>

export type ActionResponse = {
  success: boolean
  message: string
  requestId?: string
  errors?: Record<string, string[]>
}
