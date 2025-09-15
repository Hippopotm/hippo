import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Mail } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image src="/hippo-logo.png" alt="HIPPO Logo" width={32} height={32} className="w-8 h-8" />
              <h3 className="text-2xl font-bold text-primary">HIPPO</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              L'application qui révolutionne la location d'appartements avec des technologies innovantes et une
              expérience utilisateur exceptionnelle.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline" size="sm">
                <Mail className="h-4 w-4 mr-2" />
                contact@hippo.fr
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#features" className="hover:text-primary transition-colors">
                  Fonctionnalités
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-primary transition-colors">
                  Comment ça marche
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-primary transition-colors">
                  Témoignages
                </a>
              </li>
              <li>
                <a href="#coming-soon" className="hover:text-primary transition-colors">
                  Lancement
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Légal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  CGU
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© 2024 HIPPO. Tous droits réservés.</p>
          <p>Fait avec ❤️ pour révolutionner la location</p>
        </div>
      </div>
    </footer>
  )
}
