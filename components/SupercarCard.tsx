'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Car, Zap } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PriceDisplay } from '@/components/PriceDisplay'
import type { Supercar } from '@/schemas/supercar'

type SupercarSpecs = {
  engine?: string
  horsepower?: string
  acceleration?: string
  topSpeed?: string
}

export function SupercarCard({ supercar }: { supercar: Supercar }) {
  const [isHovering, setIsHovering] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (!isHovering || !supercar.images || supercar.images.length <= 1) {
      setCurrentImageIndex(0)
      return
    }

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % supercar.images!.length
      )
    }, 1000)

    return () => clearInterval(interval)
  }, [isHovering, supercar.images])

  const specs = supercar.specs as SupercarSpecs | null

  return (
    <Link
      href={`/supercars/${supercar.id}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Card className="overflow-hidden hover:border-primary transition-all hover:shadow-lg relative h-[420px] group">
        {/* Full Card Background Image */}
        <div className="absolute inset-0 bg-muted">
          {supercar.images && supercar.images[currentImageIndex] && (
            <Image
              key={currentImageIndex}
              src={supercar.images[currentImageIndex]}
              alt={`${supercar.brand} ${supercar.model}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative h-full flex flex-col justify-between p-4">
          {/* Top Badge */}
          <div className="flex justify-end">
            <Badge className="bg-primary/90 backdrop-blur shadow-[0_0_15px_-3px_rgba(212,175,55,0.5)]">
              <Car className="h-3 w-3 mr-1" />
              {supercar.year}
            </Badge>
          </div>

          {/* Bottom Content */}
          <div className="text-white">
            <h3 className="font-semibold text-lg mb-1 line-clamp-1 drop-shadow-lg">
              {supercar.brand} {supercar.model}
            </h3>
            <p className="text-sm text-white/80 mb-3 drop-shadow">
              {specs?.engine || 'High Performance'} • {specs?.horsepower || 'N/A'} HP
            </p>
            <div className="flex items-center justify-between text-sm mb-3 text-white/90 drop-shadow">
              <span className="flex items-center gap-1">
                <Zap className="h-4 w-4" />
                {specs?.acceleration || 'N/A'}
              </span>
              <span>{specs?.topSpeed || 'N/A'}</span>
            </div>
            <div className="border-t border-white/20 pt-3">
              <PriceDisplay
                priceAED={supercar.price_per_day_aed}
                className="text-2xl font-bold text-primary drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]"
                cryptoClassName="text-xs text-white/70 mt-1 drop-shadow"
              />
              <p className="text-xs text-white/70 mt-0.5 drop-shadow">per day</p>
            </div>
          </div>
        </div>

        {/* Image Indicators */}
        {supercar.images && supercar.images.length > 1 && (
          <div className="absolute top-4 left-4 flex gap-1 z-10">
            {supercar.images.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all ${
                  index === currentImageIndex
                    ? 'w-6 bg-primary'
                    : 'w-1 bg-white/50'
                }`}
              />
            ))}
          </div>
        )}
      </Card>
    </Link>
  )
}
