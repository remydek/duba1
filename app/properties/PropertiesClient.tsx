'use client'

import { PropertyCard } from '@/components/PropertyCard'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Search, SlidersHorizontal } from 'lucide-react'
import { CurrencyProvider } from '@/contexts/CurrencyContext'
import { PageCoinSelector } from '@/components/PageCoinSelector'
import type { Property } from '@/types/database'
import type { CoinGeckoData } from '@/lib/coingecko'

interface PropertiesClientProps {
  properties: Property[]
  coins: CoinGeckoData[]
}

export function PropertiesClient({ properties, coins }: PropertiesClientProps) {
  const defaultCoin = coins.find(c => c.symbol === 'btc') || coins[0] || null

  return (
    <CurrencyProvider defaultCoin={defaultCoin}>
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              Luxury Properties in Dubai
            </h1>
            <p className="text-muted-foreground text-lg">
              Discover {properties.length} exclusive properties available for crypto purchase
            </p>
          </div>

          {/* Filters & Crypto Selector - Sticky */}
          <div className="sticky top-4 z-40 mb-8">
            <Card className="border-primary/20 shadow-[0_0_20px_-5px_rgba(212,175,55,0.2)] bg-background/95 backdrop-blur-sm">
              <CardContent className="p-6">
                {/* Crypto Selector */}
                <div className="mb-4 flex justify-end">
                  <PageCoinSelector coins={coins} />
                </div>

                {/* Search and Price Filters */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-2 bg-background rounded-lg px-3 py-2 border border-border">
                      <Search className="h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search by location, area, or developer..."
                        className="border-0 focus-visible:ring-0 px-0 bg-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      placeholder="Min Price (AED)"
                      type="number"
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Max Price (AED)"
                      type="number"
                      className="bg-background"
                    />
                  </div>
                </div>

                {/* Property Type Filter Pills */}
                <div className="flex gap-3 mt-4">
                  <Button variant="outline" size="sm" className="hover:text-white">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    More Filters
                  </Button>
                  <Button variant="outline" size="sm" className="hover:text-white">Villa</Button>
                  <Button variant="outline" size="sm" className="hover:text-white">Apartment</Button>
                  <Button variant="outline" size="sm" className="hover:text-white">Penthouse</Button>
                  <Button variant="outline" size="sm" className="hover:text-white">Townhouse</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </div>
    </CurrencyProvider>
  )
}
