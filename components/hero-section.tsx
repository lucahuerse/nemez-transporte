import Image from "next/image"
import { SocialProof } from "@/components/social-proof"
import { cn } from "@/lib/utils"

interface HeroSectionProps {
  title: string
  description: string
  image: string
  imageAlt: string
  children?: React.ReactNode
  className?: string
}

export function HeroSection({ 
  title, 
  description, 
  image, 
  imageAlt, 
  children,
  className 
}: HeroSectionProps) {
  return (
    <section className={cn("relative min-h-[calc(100vh-120px)] flex flex-col justify-center bg-background overflow-hidden py-12 md:py-24", className)}>
      
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-stretch gap-8 lg:gap-12">
        {/* Left Content */}
        <div className="w-full md:flex-1 flex flex-col justify-center items-start text-left z-10 transition-all">
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] tracking-tight font-bold text-primary mb-6 text-balance animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-both leading-relaxed">
            {description}
          </p>

          {/* Social Proof / Reviews */}
          <div className="hidden md:block">
            <SocialProof />
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500 fill-mode-both w-full md:w-auto">
            {children}
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:flex-1 flex flex-col justify-center items-center md:items-stretch overflow-hidden relative min-h-[300px] md:min-h-0">
             <div className="relative w-full h-[300px] md:h-full rounded-3xl overflow-hidden animate-in fade-in slide-in-from-right-8 duration-1000 delay-300 fill-mode-both"> 
                <Image 
                  fetchPriority="high" 
                  src={image} 
                  alt={imageAlt} 
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
