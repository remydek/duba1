'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, Home, Anchor, Car } from 'lucide-react'
import { dummyProperties, dummyYachts, dummySupercars } from '@/fixtures/dummy-data'
import { formatAED } from '@/repository/crypto'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

type SupercarSpecs = {
  engine?: string
  horsepower?: number
  topSpeed?: string
  acceleration?: string
  transmission?: string
  type?: string
}

export default function DummyDataPage() {
  const [showProperties, setShowProperties] = useState(true)
  const [showYachts, setShowYachts] = useState(false)
  const [showSupercars, setShowSupercars] = useState(false)

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-2 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
          Dummy Data Viewer
        </h1>
        <p className="text-center text-muted-foreground mb-12">
          Toggle sections to view development data
        </p>

        {/* Properties Section */}
        <div className="mb-8">
          <Button
            onClick={() => setShowProperties(!showProperties)}
            variant="outline"
            className="w-full justify-between text-lg font-semibold mb-4 p-6 hover:bg-primary/10"
          >
            <div className="flex items-center gap-3">
              <Home className="h-5 w-5 text-primary" />
              <span>Properties ({dummyProperties.length})</span>
            </div>
            {showProperties ? <ChevronUp /> : <ChevronDown />}
          </Button>

          {showProperties && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dummyProperties.map((property) => (
                <div
                  key={property.id}
                  className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all"
                >
                  {/* Image */}
                  <div className="relative h-48 w-full">
                    <Image
                      src={property.images?.[0] || '/placeholder.jpg'}
                      alt={property.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-2 right-2 flex gap-2">
                      {property.crypto_verified && (
                        <Badge className="bg-primary/90">Crypto Verified</Badge>
                      )}
                      {property.golden_visa_eligible && (
                        <Badge className="bg-secondary/90">Golden Visa</Badge>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 line-clamp-1">
                      {property.title}
                    </h3>
                    <p className="text-2xl font-bold text-primary mb-3">
                      {formatAED(property.price_aed)}
                    </p>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>📍 {property.area}</p>
                      <p>🏗️ {property.developer}</p>
                      <p>🛏️ {property.bedrooms} Bed • 🚿 {property.bathrooms} Bath</p>
                      <p>📐 {property.sqft?.toLocaleString()} sqft</p>
                      <p>🏠 Type: {property.property_type}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {property.amenities?.slice(0, 3).map((amenity) => (
                          <Badge key={amenity} variant="outline" className="text-xs">
                            {amenity}
                          </Badge>
                        ))}
                        {property.amenities && property.amenities.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{property.amenities.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Yachts Section */}
        <div className="mb-8">
          <Button
            onClick={() => setShowYachts(!showYachts)}
            variant="outline"
            className="w-full justify-between text-lg font-semibold mb-4 p-6 hover:bg-primary/10"
          >
            <div className="flex items-center gap-3">
              <Anchor className="h-5 w-5 text-primary" />
              <span>Yachts ({dummyYachts.length})</span>
            </div>
            {showYachts ? <ChevronUp /> : <ChevronDown />}
          </Button>

          {showYachts && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dummyYachts.map((yacht) => (
                <div
                  key={yacht.id}
                  className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all"
                >
                  {/* Image */}
                  <div className="relative h-48 w-full">
                    <Image
                      src={yacht.images?.[0] || '/placeholder.jpg'}
                      alt={yacht.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{yacht.name}</h3>
                    <p className="text-2xl font-bold text-primary mb-3">
                      {formatAED(yacht.price_per_day_aed)}/day
                    </p>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {yacht.description}
                    </p>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>⛵ {yacht.length_ft} ft {yacht.yacht_type}</p>
                      <p>👥 Max Guests: {yacht.guests_max}</p>
                      <p>📱 WhatsApp: {yacht.whatsapp_booking}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {yacht.amenities?.slice(0, 3).map((amenity) => (
                          <Badge key={amenity} variant="outline" className="text-xs">
                            {amenity}
                          </Badge>
                        ))}
                        {yacht.amenities && yacht.amenities.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{yacht.amenities.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Supercars Section */}
        <div className="mb-8">
          <Button
            onClick={() => setShowSupercars(!showSupercars)}
            variant="outline"
            className="w-full justify-between text-lg font-semibold mb-4 p-6 hover:bg-primary/10"
          >
            <div className="flex items-center gap-3">
              <Car className="h-5 w-5 text-primary" />
              <span>Supercars ({dummySupercars.length})</span>
            </div>
            {showSupercars ? <ChevronUp /> : <ChevronDown />}
          </Button>

          {showSupercars && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dummySupercars.map((car) => (
                <div
                  key={car.id}
                  className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all"
                >
                  {/* Image */}
                  <div className="relative h-64 w-full">
                    <Image
                      src={car.images?.[0] || '/placeholder.jpg'}
                      alt={`${car.brand} ${car.model}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-semibold text-xl mb-1">
                      {car.brand} {car.model}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">{car.year}</p>
                    <p className="text-2xl font-bold text-primary mb-4">
                      {formatAED(car.price_per_day_aed)}/day
                    </p>
                    
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="space-y-2">
                        <p className="text-muted-foreground">
                          <span className="font-medium">Engine:</span> {(car.specs as SupercarSpecs)?.engine}
                        </p>
                        <p className="text-muted-foreground">
                          <span className="font-medium">Power:</span> {(car.specs as SupercarSpecs)?.horsepower} HP
                        </p>
                        <p className="text-muted-foreground">
                          <span className="font-medium">Top Speed:</span> {(car.specs as SupercarSpecs)?.topSpeed}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-muted-foreground">
                          <span className="font-medium">0-100:</span> {(car.specs as SupercarSpecs)?.acceleration}
                        </p>
                        <p className="text-muted-foreground">
                          <span className="font-medium">Trans:</span> {(car.specs as SupercarSpecs)?.transmission}
                        </p>
                        {(car.specs as SupercarSpecs)?.type && (
                          <p className="text-muted-foreground">
                            <span className="font-medium">Type:</span> {(car.specs as SupercarSpecs)?.type}
                          </p>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3">
                      📱 Book: {car.whatsapp_booking}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Data Summary */}
        <div className="mt-12 p-6 bg-card border border-border rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-primary">Data Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="font-medium mb-2">Properties:</p>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Total: {dummyProperties.length} listings</li>
                <li>• Crypto Verified: {dummyProperties.filter(p => p.crypto_verified).length}</li>
                <li>• Golden Visa: {dummyProperties.filter(p => p.golden_visa_eligible).length}</li>
                <li>• Price Range: {formatAED(Math.min(...dummyProperties.map(p => p.price_aed)))} - {formatAED(Math.max(...dummyProperties.map(p => p.price_aed)))}</li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-2">Yachts:</p>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Total: {dummyYachts.length} available</li>
                <li>• Size Range: {Math.min(...dummyYachts.map(y => y.length_ft || 0))}ft - {Math.max(...dummyYachts.map(y => y.length_ft || 0))}ft</li>
                <li>• Guest Capacity: {Math.min(...dummyYachts.map(y => y.guests_max || 0))} - {Math.max(...dummyYachts.map(y => y.guests_max || 0))} people</li>
                <li>• Daily Rate: {formatAED(Math.min(...dummyYachts.map(y => y.price_per_day_aed)))} - {formatAED(Math.max(...dummyYachts.map(y => y.price_per_day_aed)))}</li>
              </ul>
            </div>
            <div>
              <p className="font-medium mb-2">Supercars:</p>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Total: {dummySupercars.length} cars</li>
                <li>• Brands: {[...new Set(dummySupercars.map(c => c.brand))].join(', ')}</li>
                <li>• Max HP: {Math.max(...dummySupercars.map(c => (c.specs as SupercarSpecs)?.horsepower || 0))} HP</li>
                <li>• Daily Rate: {formatAED(Math.min(...dummySupercars.map(c => c.price_per_day_aed)))} - {formatAED(Math.max(...dummySupercars.map(c => c.price_per_day_aed)))}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}