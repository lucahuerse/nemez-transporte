import { formSchema } from "@/lib/schemas"

export const runtime = "edge"

export async function POST(req: Request) {
  const requestId = crypto.randomUUID()
  
  console.info(`[${requestId}] Starting form submission processing`)

  try {
    const data = await req.json()

    // 1. Server-side validation
    const validation = formSchema.safeParse(data)
    if (!validation.success) {
      console.warn(`[${requestId}] Validation failed`, validation.error.flatten().fieldErrors)
      return Response.json({
        success: false,
        message: "Anfrage ungültig. Bitte überprüfen Sie Ihre Eingaben.",
        errors: validation.error.flatten().fieldErrors,
        requestId
      }, { status: 400 })
    }

    const validatedData = validation.data

    // 2. Supabase Integration
    const SUPABASE_URL = process.env.SUPABASE_URL
    const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY
    const SUPABASE_TABLE_NAME = process.env.SUPABASE_TABLE_NAME || "requests"

    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      console.error(`[${requestId}] Supabase configuration missing`)
      return Response.json({
        success: false,
        message: "Server-Konfigurationsfehler. Bitte versuchen Sie es später erneut.",
        requestId
      }, { status: 500 })
    }

    // Map form service to DB enum values
    // Form uses: transport_only, transport_carry, transport_assembly
    // DB allows: kleintransport, umzug, entruempelung
    // Since the form currently only has variations of transport, we default to 'kleintransport'
    // but in a real scenario we'd match the page/intent.
    let dbService = "kleintransport"
    if (validatedData.service.includes("umzug")) dbService = "umzug"
    if (validatedData.service.includes("entruempelung")) dbService = "entruempelung"

    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/${SUPABASE_TABLE_NAME}`,
      {
        method: "POST",
        headers: {
          apikey: SUPABASE_SERVICE_ROLE_KEY,
          Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
          "Content-Type": "application/json",
          Prefer: "return=minimal",
        },
        body: JSON.stringify({
          id: requestId,
          service: dbService,
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone,
          description: validatedData.message,
          is_express: validatedData.isExpress,
          details: {
            variant: validatedData.service, // Store the specific form variant
            pickup: {
              address: validatedData.pickupAddress,
              zip: validatedData.pickupZip,
              city: validatedData.pickupCity,
            },
            delivery: {
              address: validatedData.deliveryAddress,
              zip: validatedData.deliveryZip,
              city: validatedData.deliveryCity,
            }
          },
        }),
      }
    )

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`[${requestId}] Supabase API error`, {
        status: response.status,
        statusText: response.statusText,
        body: errorText,
      })
      return Response.json({
        success: false,
        message: "Fehler beim Speichern der Anfrage. Bitte versuchen Sie es später erneut.",
        requestId
      }, { status: 502 })
    }

    console.info(`[${requestId}] Successfully saved to Supabase`)

    return Response.json({
      success: true,
      message: "Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns in Kürze bei Ihnen!",
      requestId
    })

  } catch (error) {
    console.error(`[${requestId}] Unexpected error during Supabase submission`, error)
    return Response.json({
      success: false,
      message: "Ein unerwarteter Fehler ist aufgetreten.",
      requestId
    }, { status: 500 })
  }
}
