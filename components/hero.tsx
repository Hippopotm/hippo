import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card to-muted pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/modern-apartment-building-silhouette.jpg')] bg-cover bg-center opacity-5" />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 text-primary font-medium text-sm mb-8 border border-primary/20 glass-effect">
            <Sparkles className="w-4 h-4 mr-2" />
            Bientôt disponible - Révolution de la location
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-balance mb-6 leading-tight">
            Trouvez votre
            <span className="text-primary animate-gradient bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}
              appartement parfait
            </span>
            <br />
            <span className="text-2xl md:text-4xl text-muted-foreground">grâce à l'IA</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground text-pretty mb-12 max-w-3xl mx-auto leading-relaxed">
            L'application qui révolutionne la location avec des visites virtuelles 3D, des profils vérifiés et un
            matching intelligent entre locataires et propriétaires.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="text-lg px-8 py-4 h-auto animate-pulse-glow">
              Être notifié du lancement
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto glass-effect bg-transparent">
              <Play className="mr-2 h-5 w-5" />
              Voir la démo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center glass-effect p-6 rounded-xl">
              <div className="text-3xl font-bold text-primary mb-2">10x</div>
              <div className="text-muted-foreground">Plus rapide</div>
            </div>
            <div className="text-center glass-effect p-6 rounded-xl">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Profils vérifiés</div>
            </div>
            <div className="text-center glass-effect p-6 rounded-xl">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Visites virtuelles</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
