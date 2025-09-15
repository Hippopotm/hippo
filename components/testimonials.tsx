import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Marie Dubois",
    role: "Étudiante à Paris",
    avatar: "/young-woman-smiling.png",
    content:
      "Incroyable ! J'ai trouvé mon studio en 2 jours grâce aux visites 3D. Plus besoin de courir partout dans Paris !",
    rating: 5,
  },
  {
    name: "Jean-Pierre Martin",
    role: "Propriétaire",
    avatar: "/middle-aged-man-professional.jpg",
    content: "Les profils vérifiés me donnent confiance. Je sais exactement à qui je loue mon appartement.",
    rating: 5,
  },
  {
    name: "Sofia Rodriguez",
    role: "Expatriée",
    avatar: "/young-professional-woman.png",
    content:
      "L'interface multilingue et les templates de messages m'ont aidée à faire une excellente première impression.",
    rating: 5,
  },
  {
    name: "Thomas Leroy",
    role: "Jeune actif",
    avatar: "/young-man-casual.jpg",
    content:
      "Le système de matching est bluffant. Il ne me propose que des appartements qui correspondent vraiment à mes critères.",
    rating: 5,
  },
  {
    name: "Amélie Chen",
    role: "Architecte",
    avatar: "/asian-woman-professional.png",
    content: "Les mesures précises dans les visites 3D m'ont permis de planifier l'aménagement avant même de signer !",
    rating: 5,
  },
  {
    name: "Lucas Moreau",
    role: "Développeur",
    avatar: "/young-man-tech.png",
    content: "L'app est fluide et intuitive. Le système de notification en temps réel est un game-changer.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-6">Ils nous font déjà confiance</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Découvrez les témoignages de nos premiers utilisateurs qui ont révolutionné leur expérience de location.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>

                {/* Author */}
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-muted-foreground text-xs">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
