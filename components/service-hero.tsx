import Image from "next/image"
import { Button } from "@/components/ui/button"

interface ServiceHeroProps {
  title: string
  subtitle: string
  image: string
  imageAlt: string
}

export function ServiceHero({ title, subtitle, image, imageAlt }: ServiceHeroProps) {
  return (
    <section className="pt-28 pb-12 md:py-24 bg-[#e8f4f8] dark:bg-muted/10 min-h-[100dvh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="flex-1 text-left">
            <h1 className="text-4xl sm:text-5xl font-semibold mb-6 text-foreground leading-tight">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {subtitle}
            </p>
            {/* Button removed as per user request */}
            
            <div className="mt-8 flex items-center gap-2">
              <div className="flex text-amber-400">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <p className="text-sm font-medium text-foreground">
                <span className="font-bold">4,9</span> / 5 basierend auf <span className="font-bold">23 Bewertungen</span>
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 w-full">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
