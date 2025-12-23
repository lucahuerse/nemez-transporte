import Image from "next/image"
import CustomButton from "@/components/custom-button"
import { Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] pt-20 flex flex-col justify-center bg-background overflow-hidden">
      
      <div className="container px-4 mx-auto flex flex-col md:flex-row items-stretch gap-8 lg:gap-12 py-12 md:py-0">
        {/* Left Content */}
        <div className="w-full md:flex-[1.5] flex flex-col justify-center items-center md:items-start text-center md:text-left z-10 transition-all">
          <h1 className="text-4xl leading-tight md:text-5xl lg:text-[64px] font-semibold text-primary mb-6 text-balance animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
            Transporte und Umzüge in Stuttgart und Umgebung
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-both leading-relaxed">
            Seit über 20 Jahren Ihr zuverlässiger Partner für Kleintransporte und Umzüge. Alles aus einer Hand.
          </p>

          {/* Social Proof / Reviews */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
            <div className="flex -space-x-3">
               {[1, 2, 3, 4].map((i) => (
                 <div key={i} className="relative w-10 h-10 rounded-full border-2 border-background overflow-hidden bg-gray-200">
                    <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" fill className="object-cover" unoptimized/>
                 </div>
               ))}
            </div>
            <div className="flex flex-col items-center sm:items-start">
               <div className="flex gap-0.5 text-yellow-400">
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
                href="#contact" 
                className="w-full sm:w-fit bg-primary text-primary-foreground hover:bg-primary/90"
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:flex-1 flex flex-col justify-center items-center md:items-stretch overflow-hidden">
             {/* Mobile: 3/2 aspect ratio fixed. Desktop: h-full (match left col) and w-auto (intrinsic 3/2) but shrinkable */}
             <div className="relative w-full md:w-auto md:h-full md:max-w-[45vw] rounded-3xl overflow-hidden animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 fill-mode-both flex-shrink shadow-2xl"> 
                {/* On mobile we use aspect ratio wrapper. On desktop we rely on h-full of the image. */}
                <div className="md:hidden aspect-[3/2] relative w-full">
                  <Image 
                    fetchPriority="high" 
                    src="/images/hero-van.webp" 
                    alt="Nemez Transporte Van" 
                    fill 
                    className="object-cover" 
                    priority 
                  />
                </div>
                
                <Image 
                  fetchPriority="high" 
                  src="/images/hero-van.webp" 
                  alt="Nemez Transporte Van" 
                  width={900}
                  height={600}
                  className="hidden md:block h-full w-auto object-cover max-w-full" 
                  priority 
                />
             </div>
        </div>
      </div>
    </section>
  )
}
