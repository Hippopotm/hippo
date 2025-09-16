import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { UserPlus, Search, Eye, MessageCircle, Handshake as HandShake } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    title: "Créez votre profil",
    description: "Inscrivez-vous et créez un profil complet avec vos références et critères de recherche.",
    color: "bg-primary",
  },
  {
    icon: Search,
    title: "Recherche intelligente",
    description: "Notre IA trouve automatiquement les appartements qui correspondent à vos besoins.",
    color: "bg-accent",
  },
  {
    icon: Eye,
    title: "Visitez en 3D",
    description: "Explorez les appartements avec nos visites virtuelles immersives et mesures précises.",
    color: "bg-primary",
  },
  {
    icon: MessageCircle,
    title: "Communiquez facilement",
    description: "Contactez directement les propriétaires via notre messagerie intégrée.",
    color: "bg-accent",
  },
  {
    icon: HandShake,
    title: "Signez en confiance",
    description: "Finalisez votre location avec des profils vérifiés et des garanties sécurisées.",
    color: "bg-primary",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
            Comment ça marche
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">
            5 étapes pour trouver votre logement idéal
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Un processus simplifié qui vous fait gagner du temps et augmente vos chances de succès.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-20 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="relative group hover:shadow-xl transition-all duration-500 border-2 hover:border-primary/20 glass-effect hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold animate-pulse-glow">
                      {index + 1}
                    </div>
                  </div>

                  <div
                    className={`w-16 h-16 rounded-full ${step.color} text-white flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 animate-float`}
                    style={{ animationDelay: `${index * 500}ms` }}
                  >
                    <step.icon className="h-8 w-8" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-3 text-balance group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </CardContent>

                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
