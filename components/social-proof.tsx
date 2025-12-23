import Image from "next/image"
import { Star } from "lucide-react"

export function SocialProof() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
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
  )
}
