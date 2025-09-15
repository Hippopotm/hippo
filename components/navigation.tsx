import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Image src="/hippo-logo.png" alt="HIPPO Logo" width={40} height={40} className="w-10 h-10" />
          <span className="text-2xl font-bold text-primary">HIPPO</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Fonctionnalités
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
            Comment ça marche
          </a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
            Témoignages
          </a>
        </div>

        {/* CTA Button */}
        <Button className="hidden sm:inline-flex">Être notifié</Button>
      </div>
    </nav>
  )
}
