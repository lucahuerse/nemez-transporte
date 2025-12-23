import Image from "next/image"
import { Star } from "lucide-react"

import { cn } from "@/lib/utils"

interface SocialProofProps {
  className?: string
  variant?: "default" | "light"
}

export function SocialProof({ className, variant = "default" }: SocialProofProps) {
  const isLight = variant === "light"
  
  return (
    <div className={cn("flex flex-col sm:flex-row items-center gap-4 mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both", className)}>
      <div className="flex -space-x-3">
         {[1, 2, 3, 4].map((i) => (
           <div key={i} className={cn("relative w-10 h-10 rounded-full border-2 overflow-hidden bg-gray-200", isLight ? "border-transparent" : "border-background")}>
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
         <span className={cn("text-sm font-medium", isLight ? "text-white/90" : "text-muted-foreground")}>
            <span className={cn("font-bold", isLight ? "text-white" : "text-foreground")}>4.9</span> von 5 (2000+ Bewertungen)
         </span>
      </div>
    </div>
  )
}
