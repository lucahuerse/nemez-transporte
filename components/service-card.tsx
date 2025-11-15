import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image";
import CtaButton from "@/components/cta-button"

interface ServiceCardProps {
  title: string
  description: string
  image: string
}

export function ServiceCard({ title, description, image }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden shadow-none border-none pt-0">
      <div className="relative h-72 w-full">
        <Image
          src={image}
          alt={title}
          width={1200}
          height={800}
          className="object-cover w-full h-full"
        />
      </div>
      <CardContent className="p-8">
        <h2 className="text-3xl font-bold mb-3">{title}</h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
        <CtaButton primaryText="Mehr erfahren"/>
      </CardContent>
    </Card>
  )
}
