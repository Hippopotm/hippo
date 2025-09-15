import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card to-muted pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/modern-apartment-building-silhouette.jpg')] bg-cover bg-center opacity-5" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-8 border border-primary/20">
            🚀 Bientôt disponible - Révolution de la location
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-balance mb-6 leading-tight">
            Trouvez votre
            <span className="text-primary"> appartement parfait</span>
            <br />
            en quelques clics
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground text-pretty mb-12 max-w-3xl mx-auto leading-relaxed">
            L'application qui révolutionne la location avec des visites virtuelles 3D, des profils vérifiés et un
            matching intelligent entre locataires et propriétaires.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="text-lg px-8 py-4 h-auto">
              Être notifié du lancement
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto bg-transparent">
              <Play className="mr-2 h-5 w-5" />
              Voir la démo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10x</div>
              <div className="text-muted-foreground">Plus rapide</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Profils vérifiés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Visites virtuelles</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse delay-1000" />
    </section>
  )
}
