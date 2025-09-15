import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bell, Smartphone, Globe, Zap } from "lucide-react"

export function ComingSoon() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <Badge variant="outline" className="mb-6 text-primary border-primary/20">
            <Zap className="h-3 w-3 mr-1" />
            Lancement imminent
          </Badge>

          {/* Main Content */}
          <h2 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            Soyez les premiers à<span className="text-primary"> révolutionner</span>
            <br />
            votre recherche d'appartement
          </h2>

          <p className="text-xl text-muted-foreground text-pretty mb-12 max-w-3xl mx-auto leading-relaxed">
            Inscrivez-vous à notre liste d'attente et recevez un accès prioritaire dès le lancement de l'application.
          </p>

          {/* Email Signup */}
          <Card className="max-w-md mx-auto mb-12 border-2 border-primary/10">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input type="email" placeholder="votre@email.com" className="flex-1" />
                <Button className="whitespace-nowrap">
                  <Bell className="h-4 w-4 mr-2" />
                  Me notifier
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-3">Pas de spam, juste les mises à jour importantes.</p>
            </CardContent>
          </Card>

          {/* Features Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center justify-center p-4 rounded-lg bg-card/50 backdrop-blur-sm">
              <Smartphone className="h-5 w-5 text-primary mr-3" />
              <span className="text-sm font-medium">App mobile native</span>
            </div>
            <div className="flex items-center justify-center p-4 rounded-lg bg-card/50 backdrop-blur-sm">
              <Globe className="h-5 w-5 text-primary mr-3" />
              <span className="text-sm font-medium">Interface multilingue</span>
            </div>
            <div className="flex items-center justify-center p-4 rounded-lg bg-card/50 backdrop-blur-sm">
              <Zap className="h-5 w-5 text-primary mr-3" />
              <span className="text-sm font-medium">IA avancée</span>
            </div>
          </div>

          {/* Timeline */}
          <div className="text-center">
            <p className="text-muted-foreground mb-2">Lancement prévu</p>
            <p className="text-2xl font-bold text-primary">T1 2025</p>
          </div>
        </div>
      </div>
    </section>
  )
}
