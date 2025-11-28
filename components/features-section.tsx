import { Zap, BarChart3, Users, Shield, Clock, Sparkles } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "AI-Powered Focus",
    description:
      "Our AI learns your work patterns and automatically blocks distractions during your peak productivity hours.",
    stat: "3x",
    statLabel: "productivity boost",
  },
  {
    icon: BarChart3,
    title: "Deep Analytics",
    description: "Comprehensive insights into your focus patterns, time allocation, and productivity trends over time.",
    stat: "98%",
    statLabel: "accuracy rate",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamlessly coordinate focus sessions with your team. Share availability and respect deep work time.",
    stat: "40%",
    statLabel: "fewer interruptions",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "Your data stays yours. End-to-end encryption ensures your productivity data remains completely private.",
    stat: "100%",
    statLabel: "data ownership",
  },
  {
    icon: Clock,
    title: "Smart Scheduling",
    description: "Intelligent calendar integration that protects your focus time and optimizes meeting schedules.",
    stat: "5hrs",
    statLabel: "saved weekly",
  },
  {
    icon: Sparkles,
    title: "Habit Building",
    description: "Build lasting productivity habits with streaks, achievements, and personalized recommendations.",
    stat: "21",
    statLabel: "days to form habit",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Everything you need to achieve deep focus
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Powerful features designed to help you and your team maximize productivity and minimize distractions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-xl p-6 hover:border-emerald/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald/10 transition-colors">
                <feature.icon className="w-6 h-6 text-emerald" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{feature.description}</p>
              <div className="pt-4 border-t border-border">
                <span className="text-2xl font-bold text-emerald">{feature.stat}</span>
                <span className="text-muted-foreground text-sm ml-2">{feature.statLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
