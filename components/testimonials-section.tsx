import { Star } from "lucide-react"

const testimonials = [
  {
    content:
      "FocusFlow completely transformed how our team works. We've seen a 40% increase in deep work hours since implementing it across our engineering team.",
    author: "Sarah Chen",
    role: "Engineering Lead",
    company: "TechCorp",
  },
  {
    content:
      "The AI-powered focus mode is a game changer. It learns when I'm most productive and automatically shields me from distractions during those times.",
    author: "Michael Rodriguez",
    role: "Product Designer",
    company: "DesignStudio",
  },
  {
    content:
      "Finally, a productivity tool that actually respects my time. The team coordination features have eliminated 90% of unnecessary meeting conflicts.",
    author: "Emily Watson",
    role: "CEO",
    company: "StartupX",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Loved by productive teams everywhere
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our users have to say about their experience with FocusFlow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6 flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-emerald text-emerald" />
                ))}
              </div>

              <p className="text-foreground text-sm leading-relaxed flex-grow mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-emerald/20 flex items-center justify-center">
                  <span className="text-emerald font-semibold text-sm">
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="text-foreground font-medium text-sm">{testimonial.author}</p>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-border">
          {[
            { value: "50K+", label: "Active Users" },
            { value: "2M+", label: "Focus Hours Logged" },
            { value: "4.9", label: "Average Rating" },
            { value: "150+", label: "Countries" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-foreground">{stat.value}</p>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
