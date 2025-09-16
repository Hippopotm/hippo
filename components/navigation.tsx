"use client"

import { Button } from "@/components/ui/button"
import { AnimatedLogo } from "./animated-logo"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <AnimatedLogo />
          <span className="text-3xl font-bold text-primary flex">
            {["H", "i", "p", "p", "o", " ", "H", "o", "m", "e", "s"].map((letter, index) => (
              <span
                key={index}
                className={`transition-transform duration-200 hover:-translate-y-1 ${letter === " " ? "w-2" : ""}`}
              >
                {letter === " " ? "\u00A0" : letter}
              </span>
            ))}
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => {
              const featuresSection = document.getElementById("features")
              featuresSection?.scrollIntoView({ behavior: "smooth" })
            }}
            className="text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            Fonctionnalités
          </button>
          <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors font-medium">
            Comment ça marche
          </a>
        </div>

        {/* CTA Button */}
        <Button
          className="hidden sm:inline-flex animate-pulse-glow"
          onClick={() => {
            const emailSection = document.getElementById("coming-soon")
            emailSection?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          Être notifié
        </Button>
      </div>
    </nav>
  )
}
