"use client"

import { useEffect, useState } from "react"

interface ParticleProps {
  count?: number
  color?: string
}

interface ParticleStyle {
  width: string
  height: string
  backgroundColor: string
  left: string
  top: string
  animationDelay: string
}

export default function ParticlesSimple({ count = 10, color = "#0ea5e9" }: ParticleProps) {
  const [particles, setParticles] = useState<ParticleStyle[]>([])

  useEffect(() => {
    const generated = Array.from({ length: count }).map(() => ({
      width: `${Math.floor(Math.random() * 30) + 10}px`,
      height: `${Math.floor(Math.random() * 30) + 10}px`,
      backgroundColor: `${color}1A`, // 10% opacity
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
    }))
    setParticles(generated)
  }, [count, color])

  return (
    <div className="particles-container">
      {particles.map((style, index) => (
        <div key={index} className="particle" style={style} />
      ))}
    </div>
  )
}
