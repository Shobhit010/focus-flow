import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-muted border border-border rounded-full px-4 py-1.5 mb-8">
            <span className="text-emerald text-sm font-medium">New</span>
            <span className="text-muted-foreground text-sm">AI-Powered Focus Mode is here</span>
            <ArrowRight className="w-4 h-4 text-muted-foreground" />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground tracking-tight text-balance mb-6">
            The complete platform to <span className="text-emerald">maximize focus</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty leading-relaxed">
            Empower your entire team to achieve deep work at the speed of thought, while ensuring productivity remains
            at the forefront.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-medium"
            >
              Start Free Trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 text-base font-medium border-border hover:bg-muted text-foreground bg-transparent"
            >
              <Play className="w-4 h-4 mr-2 fill-current" />
              Watch Demo
            </Button>
          </div>
        </div>

        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-2xl">
            <div className="bg-muted border-b border-border px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-background/50 rounded-md px-4 py-1 text-xs text-muted-foreground">
                  app.focusflow.com/dashboard
                </div>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-muted rounded-lg p-4">
                  <h3 className="text-sm font-medium text-foreground mb-3">{"Today's Tasks"}</h3>
                  <div className="space-y-2">
                    {["Design review meeting", "Update documentation", "Code review PR #42"].map((task, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div
                          className={`w-4 h-4 rounded border ${i === 0 ? "bg-emerald border-emerald" : "border-border"}`}
                        />
                        <span className={i === 0 ? "line-through" : ""}>{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-muted rounded-lg p-4 flex flex-col items-center justify-center">
                  <span className="text-xs text-muted-foreground mb-2">Focus Session</span>
                  <span className="text-4xl font-bold text-emerald">24:35</span>
                  <span className="text-xs text-muted-foreground mt-2">Deep Work Mode Active</span>
                </div>
                <div className="bg-muted rounded-lg p-4">
                  <h3 className="text-sm font-medium text-foreground mb-3">This Week</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Focus Time</span>
                        <span className="text-foreground font-medium">32h</span>
                      </div>
                      <div className="h-2 bg-background rounded-full overflow-hidden">
                        <div className="h-full bg-emerald w-4/5" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Tasks Done</span>
                        <span className="text-foreground font-medium">47</span>
                      </div>
                      <div className="h-2 bg-background rounded-full overflow-hidden">
                        <div className="h-full bg-emerald w-2/3" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
