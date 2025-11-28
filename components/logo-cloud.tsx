export function LogoCloud() {
  const companies = [
    { name: "Vercel", logo: "VERCEL" },
    { name: "Stripe", logo: "stripe" },
    { name: "Notion", logo: "Notion" },
    { name: "Linear", logo: "Linear" },
    { name: "Figma", logo: "Figma" },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-muted-foreground text-sm mb-8">Trusted by teams at world-class companies</p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16">
          {companies.map((company) => (
            <div
              key={company.name}
              className="text-muted-foreground/60 hover:text-muted-foreground transition-colors font-semibold text-lg sm:text-xl tracking-tight"
            >
              {company.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
