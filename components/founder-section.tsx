import Image from "next/image"

export function FounderSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <Image
                src="/images/nemez-portrait.webp"
                alt="Mustafa Nemez"
                width={400}
                height={400}
                className="rounded-lg w-full"
              />
              <p className="text-center mt-4 font-semibold">Geschäftsführer</p>
            </div>

            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Mustafa Nemez</h2>
              <blockquote className="text-muted-foreground leading-relaxed space-y-4 border-l-4 border-accent pl-6 italic">
                <p>
                  Jeder kennt es! Die zu transportierende Fracht ist zu sperrig und für den normalen
                  Versanddienstleister zu groß. Mit einer großen Spedition sind die Transporte zu teuer. Daher bieten
                  wir Ihnen eine optimale Transportmöglichkeit für Ihre Güter an.
                </p>
                <p>
                  Bei uns stimmt das <strong className="text-foreground">Preis‒Leistungs‒Verhältnis</strong> und die{" "}
                  <strong className="text-foreground">Qualität</strong>. Wir sind flexibel und zuverlässig.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
