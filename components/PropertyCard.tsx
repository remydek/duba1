'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bitcoin } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PriceDisplay } from '@/components/PriceDisplay'
import type { Property } from '@/schemas/property'

export function PropertyCard({ property }: { property: Property }) {
  const [isHovering, setIsHovering] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (!isHovering || !property.images || property.images.length <= 1) {
      setCurrentImageIndex(0)
      return
    }

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % (property.images?.length || 1)
      )
    }, 1000) // Change image every 1 second

    return () => clearInterval(interval)
  }, [isHovering, property.images])

  return (
    <Link
      key={property.id}
      href={`/properties/${property.id}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Card className="overflow-hidden hover:border-primary transition-all hover:shadow-lg relative h-[420px] group">
        {/* Full Card Background Image */}
        <div className="absolute inset-0 bg-muted">
          {property.images && property.images[currentImageIndex] && (
            <Image
              key={currentImageIndex}
              src={property.images[currentImageIndex]}
              alt={property.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          )}
          {/* Gradient Overlay - Black to Transparent */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative h-full flex flex-col justify-between p-4">
          {/* Top Badge */}
          <div className="flex justify-end">
            {property.crypto_verified && (
              <Badge className="bg-primary/90 backdrop-blur shadow-[0_0_15px_-3px_rgba(212,175,55,0.5)]">
                <Bitcoin className="h-3 w-3 mr-1" />
                Crypto Verified
              </Badge>
            )}
          </div>

          {/* Bottom Content */}
          <div className="text-white">
            <h3 className="font-semibold text-lg mb-1 line-clamp-1 drop-shadow-lg">{property.title}</h3>
            <p className="text-sm text-white/80 mb-3 drop-shadow">{property.area || 'Dubai'}</p>
            <div className="flex items-center justify-between text-sm mb-3 text-white/90 drop-shadow">
              <span>{property.bedrooms || 0} beds</span>
              <span>{property.bathrooms || 0} baths</span>
              <span>{property.sqft?.toLocaleString() || 'N/A'} sqft</span>
            </div>
            <div className="border-t border-white/20 pt-3">
              <PriceDisplay
                priceAED={property.price_aed}
                className="text-2xl font-bold text-primary drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]"
                cryptoClassName="text-xs text-white/70 mt-1 drop-shadow"
              />
            </div>
          </div>
        </div>

        {/* Image Indicators */}
        {property.images && property.images.length > 1 && (
          <div className="absolute top-4 left-4 flex gap-1 z-10">
            {property.images.map((_, index) => (
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
