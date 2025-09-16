import { Button } from "@/components/ui/button"
import { AnimatedLogo } from "./animated-logo"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <AnimatedLogo />
          <span className="text-3xl font-bold text-primary">Hippo Homes</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-muted-foreground hover:text-primary transition-colors font-medium">
            Fonctionnalités
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors font-medium">
            Comment ça marche
          </a>
        </div>

        {/* CTA Button */}
        <Button className="hidden sm:inline-flex animate-pulse-glow">Être notifié</Button>
      </div>
    </nav>
  )
}
