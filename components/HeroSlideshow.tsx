'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const heroImages = [
  'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80', // Dubai skyline at night
  'https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=1920&q=80', // Burj Khalifa
  'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1920&q=80', // Dubai Marina
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80', // Dubai luxury property
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80', // Dubai skyline
]

export function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 z-0">
      {heroImages.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image}
            alt={`Dubai scene ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/40"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-background/10 via-transparent to-background/10"></div>
    </div>
  )
}
