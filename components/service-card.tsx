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
        <CTAButton primaryText="Mehr erfahren"/>
      </CardContent>
    </Card>
  )

  if (!href) return content

  return (
    <Link
      href={href}
      className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
      aria-label={`${title} — Mehr erfahren`}
    >
      {content}
    </Link>
  )
}
