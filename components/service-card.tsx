import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image";
import CTAButton from "@/components/cta-button"
import Link from "next/link"

interface ServiceCardProps {
  title: string
  description: string
  image: string
  href?: string
}

export function ServiceCard({ title, description, image, href }: ServiceCardProps) {
  const content = (
    <Card className="overflow-hidden shadow-none border-none pt-0 h-full flex flex-col">
      <div className="relative h-72 w-full flex-shrink-0">
        <Image
          src={image}
          alt={title}
          width={1200}
          height={800}
          className="object-cover w-full h-full"
        />
      </div>
      <CardContent className="p-8 flex-grow flex flex-col">
        <h2 className="text-3xl font-semibold mb-3">{title}</h2>
        <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">{description}</p>
        <CTAButton primaryText="Mehr erfahren" className="w-min" href={href} />
      </CardContent>
    </Card>
  )

  return content
}
