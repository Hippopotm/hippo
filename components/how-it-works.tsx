import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { UserPlus, Search, Eye, MessageCircle, Handshake as HandShake } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    title: "Créez votre profil",
    description: "Inscrivez-vous et créez un profil complet avec vos références et critères de recherche.",
    color: "bg-blue-500",
  },
  {
    icon: Search,
    title: "Recherche intelligente",
    description: "Notre IA trouve automatiquement les appartements qui correspondent à vos besoins.",
    color: "bg-green-500",
  },
  {
    icon: Eye,
    title: "Visitez en 3D",
    description: "Explorez les appartements avec nos visites virtuelles immersives et mesures précises.",
    color: "bg-purple-500",
  },
  {
    icon: MessageCircle,
    title: "Communiquez facilement",
    description: "Contactez directement les propriétaires via notre messagerie intégrée.",
    color: "bg-orange-500",
  },
  {
    icon: HandShake,
    title: "Signez en confiance",
    description: "Finalisez votre location avec des profils vérifiés et des garanties sécurisées.",
    color: "bg-red-500",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
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
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-green-500 via-purple-500 via-orange-500 to-red-500 opacity-20" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="relative group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20"
              >
                <CardContent className="p-6 text-center">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-full ${step.color} text-white flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <step.icon className="h-8 w-8" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-3 text-balance">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
