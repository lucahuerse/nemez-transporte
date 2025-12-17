"use client"

import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { TransportRequestForm } from "@/components/transport-request-form"
import { StepProgress } from "@/components/ui/step-progress"
import { CheckCircle2, Truck, Package, Home } from "lucide-react"
import { cn } from "@/lib/utils"

export function HelpSection() {
  const [step, setStep] = useState(1)
  const [selectedService, setSelectedService] = useState<string>("")
  const sectionRef = useRef<HTMLElement>(null)

  const services = [
    {
      image: "/images/kleintransport.webp",
      title: "Kleintransport",
      value: "kleintransport",
      icon: Truck
    },
    {
      image: "/images/umzug.webp",
      title: "Umzugsservice",
      value: "umzug",
      icon: Package
    },
    {
      image: "/images/entruempelung.webp",
      title: "Entrümpelung",
      value: "entruempelung",
      icon: Home
    },
  ]

  // Handle browser back button
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      // If we're going back (state is null or doesn't have step 2), reset to step 1
      const state = event.state as { step?: number } | null
      if (!state || state.step !== 2) {
        setStep(1)
        setSelectedService("")
        if (sectionRef.current) {
          sectionRef.current.scrollIntoView({ behavior: 'smooth' })
        }
      } else if (state.step === 2) {
        // If we moved forward to step 2 (e.g. forward button)
        setStep(2)
        // We might want to restore selectedService if possible, but for now this handles the back case.
        // Ideally we would store the service in the state too.
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const handleServiceSelect = (value: string) => {
    setSelectedService(value)
    setStep(2)
    // Push state so back button works
    window.history.pushState({ step: 2, service: value }, "", "")
    // Scroll handling if needed
  }

  const handleBack = () => {
    // Trigger browser back behavior which is caught by listener
    window.history.back()
  }

  const handleSuccess = () => {
    setStep(3)
    if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="contact" className="py-20 bg-background" ref={sectionRef}>
      <div className="container mx-auto px-4">
        
        {/* Main "White Frame" Container */}
        <div className="max-w-5xl mx-auto bg-card rounded-2xl p-8 md:p-12 min-h-[600px] flex flex-col">
            {/* Top Progress Bar */}
            <StepProgress 
                currentStep={step} 
                steps={[
                    { label: "Auswahl" },
                    { label: "Details" },
                    { label: "Fertig" }
                ]}
                className="mb-4 sm:mb-8"
            />

            <div className="flex-grow">
                {step === 1 && (
                  <div>
                    <div className="text-left mb-12">
                      <h2 className="text-4xl sm:text-5xl font-semibold mb-4 text-center">Wie können wir Ihnen helfen?</h2>
                      <p className="text-lg text-muted-foreground text-center mb-12">Wählen Sie die gewünschte Dienstleistung aus.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
                    {services.map((service, index) => (
                        <div
                        key={index}
                        onClick={() => handleServiceSelect(service.value)}
                        className="block group cursor-pointer h-full"
                        >
                          {/* Desktop View - Original Design */}
                          <div className="hidden md:block h-full">
                            <Card className="py-0 overflow-hidden h-full">
                              <CardContent className="p-0">
                                <div className="relative h-48 w-full overflow-hidden">
                                  <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                  />
                                </div>
                                <div className="p-6 text-center bg-background">
                                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                                </div>
                              </CardContent>
                            </Card>
                          </div>

                          {/* Mobile View - Compact Icon Design */}
                          <div className="md:hidden">
                            <Card className="overflow-hidden bg-background transition-all duration-200 p-0 gap-0">
                              <CardContent className="p-0 flex flex-row items-center">
                                <div className="p-4 bg-accent flex items-center justify-center rounded-xl w-18 shrink-0 border-border min-h-18">
                                  <service.icon className="h-8 w-8 text-foreground" />
                                </div>
                                <div className="px-6 py-4 h-auto text-left flex-1">
                                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                                </div>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                    ))}
                    </div>
                  </div>
                )}

                {step === 2 && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="text-left mb-12">
                            <h2 className="text-4xl sm:text-5xl font-semibold mb-3 tracking-tight text-center break-words hyphens-auto">
                                {selectedService === "kleintransport" ? "Transportanfrage stellen" :
                                 selectedService === "umzug" ? "Umzugsanfrage stellen" :
                                 selectedService === "entruempelung" ? "Entrümpelungsanfrage stellen" : 
                                 "Anfrage stellen"}
                            </h2>
                            <p className="text-muted-foreground text-lg text-center">
                                Beantworte uns ein paar Fragen und wir melden uns schnellstmöglich mit einem Preis zurück.
                            </p>
                        </div>
                        <TransportRequestForm 
                            defaultService={selectedService} 
                            onSuccess={handleSuccess}
                            onBack={handleBack}
                            embedded={true}
                        />
                    </div>
                )}

                {step === 3 && (
                    <div className="flex flex-col items-center justify-center text-center py-10 animate-in fade-in zoom-in duration-500 max-w-2xl mx-auto h-full">
                        <div className="relative mb-8">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-green-100 rounded-full animate-pulse" />
                            <CheckCircle2 className="w-32 h-32 text-green-500 relative z-10 fill-white" />
                        </div>
                        
                        <h2 className="text-3xl sm:text-4xl font-semibold mb-6">Danke für Ihr Vertrauen!</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Wir haben Ihre Anfrage erhalten und werden uns schnellstmöglich bei Ihnen melden. 
                            In der Regel erhalten Sie innerhalb von 24 Stunden eine Rückmeldung von uns.
                        </p>
                        <div className="mt-8">
                            <button 
                                onClick={() => { setStep(1); setSelectedService(""); }}
                                className="text-primary font-medium hover:underline underline-offset-4"
                            >
                                Zurück zur Startseite
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>

      </div>
    </section>
  )
}
