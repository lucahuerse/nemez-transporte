import Image from "next/image"
import { Phone } from "lucide-react"
import CustomButton from "./custom-button" // Ensuring we use the requested component
import { Button } from "@/components/ui/button" // Keeping for the secondary/icon button if CustomButton is too rigid, or using it if possible.

export function TransportStepsSection() {
  const steps = [
    {
      number: "01",
      title: "Anfrage",
      description: "Sie senden uns Ihre Anfrage über das Formular und wir melden uns innerhalb von 24 Stunden zur Termin- und Leistungsabstimmung.",
      details: ["Kurzes Telefonat", "Klärung von Termin & Strecke"]
    },
    {
      number: "02",
      title: "Planung",
      description: "Wir bereiten den Transport vor: Route, Zeitplan und benötigtes Equipment. Alles transparent und ohne Überraschungen.",
    },
    {
      number: "03",
      title: "Durchführung",
      description: "Wir erscheinen pünktlich, erledigen den Transport zuverlässig und bestätigen gemeinsam die Übergabe.",
      details: ["Sicherer Transport", "Abschluss & Zahlung", "buttons"], // Using a marker for buttons layout
      images: ["/images/step-planning-1.png", "/images/step-planning-2.jpg"]
    }
  ]

  return (
    <section id="process" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-4">Ihr Transport in 3 einfachen Schritten</h2>
          <p className="text-lg text-muted-foreground">So einfach und unkompliziert läuft Ihr Transport bei uns ab.</p>
        </div>
        <div className="relative border-l-2 border-foreground/30 ml-4 md:ml-12 pl-8 md:pl-16 space-y-24">
          {steps.map((step, index) => (
            <div key={index} className="relative pl-0">
               {/* Marker Container - Absolute wrapper to define the track for this step */}
               <div className="absolute -left-[41px] md:-left-[75px] top-0 h-full w-4 md:w-5 flex flex-col justify-start">
                  {/* Sticky Marker */}
                  <div className="sticky top-1/2 -translate-y-1/2 bg-foreground w-4 h-4 md:w-5 md:h-5 rounded-sm ring-4 ring-background z-10 mt-6" />
               </div>
               
               {/* Content */}
               <div className="space-y-6">
                 <div>
                    <span className="text-5xl font-semibold block leading-none mb-2">{step.number}</span>
                    <h3 className="text-2xl md:text-3xl font-semibold">{step.title}</h3>
                 </div>
                 <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">{step.description}</p>
                 
                 {/* Bullet Points / Details */}
                 {step.details && !step.details.includes("buttons") && (
                   <ul className="space-y-3 pt-2">
                     {step.details.map((detail, idx) => (
                       <li key={idx} className="flex items-center gap-3">
                         <span className="bg-black text-white p-0.5 rounded-sm flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                         </span>
                         <span className="font-medium text-lg">{detail}</span>
                       </li>
                     ))}
                   </ul>
                 )}

                 {/* Step 3 Specific Layout (Details + Buttons) */}
                 {step.details && step.details.includes("buttons") && (
                    <div className="space-y-8">
                       <ul className="space-y-3 pt-2">
                         {step.details.filter(d => d !== "buttons").map((detail, idx) => (
                           <li key={idx} className="flex items-center gap-3">
                             <span className="bg-black text-white p-0.5 rounded-sm flex-shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                             </span>
                             <span className="font-medium text-lg">{detail}</span>
                           </li>
                         ))}
                       </ul>
                       <div className="flex flex-col sm:flex-row gap-3 pt-4">
                           <CustomButton 
                               primaryText="Jetzt Anfrage senden" 
                               href="#contact-form"
                               className="bg-[#1a1a1a] text-white hover:bg-[#333] w-full sm:w-auto px-8"
                           />
                           <CustomButton 
                               primaryText="Telefonisch kontaktieren" 
                               href="tel:01621218418"
                               icon={Phone}
                               className="bg-transparent border border-black text-black hover:border-black/10 hover:text-black hover:bg-transparent font-medium px-6 h-14 rounded-sm"
                           />
                       </div>
                    </div>
                 )}

                 {/* Images for Step 3 */}
                 {step.images && (
                   <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {step.images.map((imgSrc, imgIdx) => (
                        <div key={imgIdx} className="relative h-64 w-full overflow-hidden rounded-2xl">
                           <Image src={imgSrc} alt={`Step image ${imgIdx + 1}`} fill className="object-cover" />
                        </div>
                      ))}
                   </div>
                 )}
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
