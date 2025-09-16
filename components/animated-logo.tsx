"use client"

import Image from "next/image"

export function AnimatedLogo() {
  return (
    <div className="relative w-12 h-12">
      <Image
        src="/hippo-logo-green.png"
        alt="Hippo Homes Logo"
        width={48}
        height={48}
        className="w-12 h-12 animate-float"
      />
    </div>
  )
}
