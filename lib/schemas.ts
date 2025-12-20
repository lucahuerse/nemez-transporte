import { z } from "zod"

export const formSchema = z.object({
  name: z.string().min(2, "Bitte geben Sie Ihren vollständigen Namen ein"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein").optional().or(z.literal("")),
  phone: z.string().optional(),
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
}).superRefine((data, ctx) => {
  const hasEmail = data.email && data.email.trim().length > 0;
  const hasPhone = data.phone && data.phone.trim().length > 0;
  
  if (!hasEmail && !hasPhone) {
    const message = "Bitte geben Sie eine E-Mail oder Telefonnummer an";
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message,
      path: ["email"],
    });
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message,
      path: ["phone"],
    });
  }
})

export type FormValues = z.infer<typeof formSchema>

export type ActionResponse = {
  success: boolean
  message: string
  requestId?: string
  errors?: Record<string, string[]>
}
