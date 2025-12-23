import Image from "next/image"
import CustomButton from "@/components/custom-button"
import { Star, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-120px)] flex flex-col justify-center bg-background overflow-hidden py-12 md:py-24">
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-stretch gap-8 lg:gap-12">
        {/* Left Content */}
        <div className="w-full md:flex-1 flex flex-col justify-center items-start text-left z-10 transition-all">
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] tracking-tight font-bold text-primary mb-6 text-balance animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
            Transporte und Umzüge in Stuttgart und Umgebung
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-both leading-relaxed">
            Seit vielen Jahren Ihr zuverlässiger Partner für Kleintransporte und Umzüge. Alles aus einer Hand.
          </p>

          {/* Social Proof / Reviews */}
          <div className="hidden md:flex flex-col sm:flex-row items-center gap-4 mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
            <div className="flex -space-x-3">
               {[1, 2, 3, 4].map((i) => (
                 <div key={i} className="relative w-10 h-10 rounded-full border-2 border-background overflow-hidden bg-gray-200">
                    <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" fill className="object-cover" unoptimized/>
                 </div>
               ))}
            </div>
            <div className="flex flex-col items-center sm:items-start">
               <div className="flex gap-0.5 text-accent">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
               </div>
               <span className="text-sm font-medium text-muted-foreground"><span className="font-bold text-foreground">4.9</span> von 5 (2000+ Bewertungen)</span>
            </div>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500 fill-mode-both w-full md:w-auto">
            <CustomButton 
                primaryText="Jetzt Angebot einholen!" 
                secondaryText="100% unverbindlich" 
                icon={ArrowRight}
                href="#contact" 
                className="w-full sm:w-fit bg-primary text-primary-foreground hover:bg-primary/90 "
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:flex-1 flex flex-col justify-center items-center md:items-stretch overflow-hidden relative min-h-[300px] md:min-h-0">
             <div className="relative w-full h-[300px] md:h-full rounded-3xl overflow-hidden animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 fill-mode-both"> 
                <Image 
                  fetchPriority="high" 
                  src="/images/hero-van.webp" 
                  alt="Nemez Transporte Van" 
                  fill
                  className="object-cover" 
                  priority 
                />
             </div>
        </div>
      </div>
    </section>
  )
}
