import { z } from "zod"

export const formSchema = z.object({
  name: z.string().min(2, "Bitte geben Sie Ihren vollständigen Namen ein"),
  email: z.string().min(1, "Bitte geben Sie Ihre E-Mail-Adresse ein").email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  phone: z.string().min(1, "Bitte geben Sie Ihre Telefonnummer ein").refine((val) => val.replace(/\D/g, "").length > 5, {
    message: "Bitte geben Sie eine gültige Telefonnummer ein",
  }),
  serviceType: z.enum(["kleintransport", "umzug", "entruempelung"], {
    required_error: "Bitte wählen Sie einen Service aus",
  }),
  requestedDate: z.coerce.date({
    errorMap: (issue, ctx) => {
      return { message: "Bitte wählen Sie ein Wunschdatum aus" };
    },
  }),
  isExpress: z.boolean().default(false),
  pickupAddress: z.string().optional(),
  pickupZip: z.string().optional(),
  pickupCity: z.string().optional(),
  deliveryAddress: z.string().optional(),
  deliveryZip: z.string().optional(),
  deliveryCity: z.string().optional(),
  message: z.string().min(10, "Bitte beschreiben Sie Ihre Anforderungen etwas genauer"),
  acceptDataPolicy: z.literal(true, {
    errorMap: () => ({ message: "Bitte akzeptieren Sie die Datenschutzerklärung" }),
  }),
})

export type FormValues = z.infer<typeof formSchema>

export type ActionResponse = {
  success: boolean
  message: string
  requestId?: string
  errors?: Record<string, string[]>
}
