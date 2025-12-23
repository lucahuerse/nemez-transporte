import Image from "next/image"

export function FounderSection() {
  return (
    <section id="founder" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto">
          <div className="grid md:grid-cols-[auto_1fr] gap-8 items-start">
            <div className="flex items-center gap-6 md:block">
              <Image
                src="/images/nemez-portrait.webp"
                alt="Mustafa Nemez"
                width={350}
                height={350}
                className="w-40 h-40 md:w-[350px] md:h-[350px] rounded-xl object-cover shrink-0"
              />
              <div className="md:hidden flex-1">
                <p className="text-base font-semibold text-muted-foreground mb-1">Geschäftsführer</p>
                <h2 className="text-4xl font-semibold">Mustafa Nemez</h2>
              </div>
            </div>

            <div>
              <div className="hidden md:block">
                <p className="text-md font-semibold text-muted-foreground mb-2">Geschäftsführer</p>
                <h2 className="text-5xl font-semibold mb-6">Mustafa Nemez</h2>
              </div>
              <blockquote className="text-xl text-muted-foreground leading-relaxed space-y-4 border-l-2 border-black pl-6">
                <p>
                  <strong className="text-foreground">Jeder kennt es!</strong> Die zu transportierende Fracht ist zu sperrig und für den normalen
                  Versanddienstleister zu groß. Mit einer großen Spedition sind die Transporte zu teuer. Daher bieten
                  wir Ihnen eine optimale Transportmöglichkeit für Ihre Güter an.
                </p>
                <p>
                  Bei uns stimmt das <span className="font-bold text-white rounded-sm bg-accent px-1">Preis-Leistungs-Verhältnis</span> und die{" "}
                  <span className="font-bold text-white rounded-sm bg-accent px-1">Qualität</span>. Wir sind flexibel und zuverlässig.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
