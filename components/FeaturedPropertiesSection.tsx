'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PropertyCard } from '@/components/PropertyCard'
import { CurrencyProvider } from '@/contexts/CurrencyContext'
import type { Property } from '@/schemas/property'
import type { CoinGeckoData } from '@/lib/coingecko'

interface FeaturedPropertiesSectionProps {
  properties: Property[]
  coins: CoinGeckoData[]
}

export function FeaturedPropertiesSection({ properties, coins }: FeaturedPropertiesSectionProps) {
  const defaultCoin = coins.find(c => c.symbol === 'btc') || coins[0] || null

  return (
    <CurrencyProvider defaultCoin={defaultCoin}>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Properties</h2>
              <p className="text-muted-foreground">Handpicked luxury properties in Dubai</p>
            </div>
            <Button asChild variant="outline">
              <Link href="/properties">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
    </CurrencyProvider>
  )
}
