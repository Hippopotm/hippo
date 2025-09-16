import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cable as Cube, Shield, Zap, MessageSquare, Star, Smartphone, Search, Users, Clock } from "lucide-react"

const features = [
  {
    icon: Cube,
    title: "Visites Virtuelles 3D",
    description:
      "Explorez chaque appartement avec des tours 3D haute résolution et des mesures précises pour visualiser vos meubles.",
    badge: "Révolutionnaire",
  },
  {
    icon: Shield,
    title: "Profils Vérifiés",
    description:
      "Système de vérification complet avec références, historique de paiement et score de fiabilité pour la confiance mutuelle.",
    badge: "Sécurisé",
  },
  {
    icon: Zap,
    title: "Matching Intelligent",
    description:
      "Algorithme avancé qui vous propose automatiquement les appartements correspondant parfaitement à vos critères.",
    badge: "IA",
  },
  {
    icon: MessageSquare,
    title: "Communication Intégrée",
    description: "Messagerie in-app avec templates polis en français et anglais pour une première impression parfaite.",
    badge: "Pratique",
  },
  {
    icon: Smartphone,
    title: "Interface TikTok-Style",
    description:
      "Navigation fluide et intuitive avec des vidéos courtes et un système de swipe pour découvrir les appartements.",
    badge: "Moderne",
  },
  {
    icon: Search,
    title: "Recherche Automatique",
    description: "Candidature automatique dès qu'un appartement correspondant à vos critères est publié sur le marché.",
    badge: "Automatique",
  },
  {
    icon: Users,
    title: "Égalité des Chances",
    description: "Système équitable qui donne à chacun la même opportunité de postuler au même nombre d'appartements.",
    badge: "Équitable",
  },
  {
    icon: Clock,
    title: "Temps Réel",
    description: "Notifications instantanées des nouvelles annonces et visibilité du nombre de candidats intéressés.",
    badge: "Instantané",
  },
  {
    icon: Star,
    title: "Système de Recommandation",
    description: "Suggestions personnalisées basées sur vos préférences et votre historique de recherche.",
    badge: "Personnalisé",
  },
]

export function Features() {
  return (
    <section className="py-24 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float" />
        <div
          className="absolute bottom-10 right-10 w-48 h-48 bg-accent/5 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">Des fonctionnalités qui changent tout</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Découvrez comment notre technologie révolutionne l'expérience de location pour les locataires et les
            propriétaires.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="relative group hover:shadow-xl transition-all duration-500 border-0 glass-effect hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs bg-accent/20 text-accent-foreground border-accent/30">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
              </CardContent>

              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
