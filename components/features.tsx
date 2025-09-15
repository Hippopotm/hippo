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
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
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
              className="relative group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
