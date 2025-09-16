"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import Image from "next/image"

export function AnimatedLogo() {
  const [showFrameSequence, setShowFrameSequence] = useState(false)
  const [currentFrame, setCurrentFrame] = useState(0)
  const [floatCycles, setFloatCycles] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [floatPosition, setFloatPosition] = useState(0) // Track float animation position
  const containerRef = useRef<HTMLDivElement>(null)
  const frameIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const floatTrackingRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (!showFrameSequence && !isHovering) {
      floatTrackingRef.current = setInterval(() => {
        setFloatPosition((prev) => {
          const newPos = (prev + 1) % 200 // Assuming 200 steps for full float cycle
          if (newPos === 0) {
            setFloatCycles((cycles) => {
              const newCycles = cycles + 1
              if (newCycles >= 5) {
                setShowFrameSequence(true)
                setFloatCycles(0)
                return 0
              }
              return newCycles
            })
          }
          return newPos
        })
      }, 20) // 20ms for smooth tracking
    } else {
      if (floatTrackingRef.current) {
        clearInterval(floatTrackingRef.current)
        floatTrackingRef.current = null
      }
    }

    return () => {
      if (floatTrackingRef.current) {
        clearInterval(floatTrackingRef.current)
      }
    }
  }, [showFrameSequence, isHovering])

  useEffect(() => {
    if (showFrameSequence) {
      // Start from current float position equivalent frame
      const startFrame = Math.floor((floatPosition / 200) * 150)
      setCurrentFrame(startFrame)

      frameIntervalRef.current = setInterval(() => {
        setCurrentFrame((prev) => {
          const nextFrame = (prev + 1) % 150
          // If not hovering and we completed one cycle, stop
          if (!isHovering && nextFrame === startFrame) {
            setShowFrameSequence(false)
            return prev
          }
          return nextFrame
        })
      }, 30) // 0.03 seconds = 30ms
    } else {
      if (frameIntervalRef.current) {
        clearInterval(frameIntervalRef.current)
        frameIntervalRef.current = null
      }
    }

    return () => {
      if (frameIntervalRef.current) {
        clearInterval(frameIntervalRef.current)
      }
    }
  }, [showFrameSequence, isHovering, floatPosition])

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true)
    setShowFrameSequence(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false)
    // Continue frame sequence until current cycle completes
  }, [])

  const getFrameFilename = (frameIndex: number) => {
    const paddedIndex = frameIndex.toString().padStart(3, "0")
    return `/components/logo-gif-split-png/frame_${paddedIndex}_delay-0.03s.png`
  }

  return (
    <div
      ref={containerRef}
      className="relative w-12 h-12 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Static Logo with float animation */}
      <Image
        src="/hippo-logo-green.png"
        alt="Hippo Homes Logo"
        width={48}
        height={48}
        className={`w-12 h-12 transition-opacity duration-0 ${
          showFrameSequence ? "opacity-0 absolute" : "opacity-100 animate-float"
        }`}
      />

      {showFrameSequence && (
        <Image
          key={`frame-${currentFrame}`}
          src={getFrameFilename(currentFrame) || "/placeholder.svg"}
          alt="Hippo Homes Logo Animation"
          width={48}
          height={48}
          className="w-12 h-12 absolute top-0 left-0"
          unoptimized
        />
      )}
    </div>
  )
}
