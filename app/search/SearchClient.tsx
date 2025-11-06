'use client'

import { PropertyCard } from '@/components/PropertyCard'
import { YachtCard } from '@/components/YachtCard'
import { SupercarCard } from '@/components/SupercarCard'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Search, Building, Ship, Car } from 'lucide-react'
import { CurrencyProvider } from '@/contexts/CurrencyContext'
import { PageCoinSelector } from '@/components/PageCoinSelector'
import type { Property } from '@/schemas/property'
import type { Supercar } from '@/schemas/supercar'
import type { Yacht } from '@/schemas/yacht'
import type { CoinGeckoData } from '@/repository/coingecko'

interface SearchClientProps {
  properties: Property[]
  yachts: Yacht[]
  supercars: Supercar[]
  coins: CoinGeckoData[]
  selectedCategories: string[]
}

export function SearchClient({ properties, yachts, supercars, coins, selectedCategories }: SearchClientProps) {
  const defaultCoin = coins.find(c => c.symbol === 'btc') || coins[0] || null

  const showProperties = selectedCategories.includes('properties')
  const showYachts = selectedCategories.includes('yachts')
  const showSupercars = selectedCategories.includes('supercars')

  return (
    <CurrencyProvider defaultCoin={defaultCoin}>
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <Search className="h-10 w-10 text-primary drop-shadow-[0_0_10px_rgba(212,175,55,0.6)]" />
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                Search Results
              </h1>
            </div>
            <p className="text-muted-foreground text-lg">
              Showing results for: {selectedCategories.map(cat => cat.charAt(0).toUpperCase() + cat.slice(1)).join(', ')}
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

                {/* Search and Filters */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-2 bg-background rounded-lg px-3 py-2 border border-border">
                      <Search className="h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search all results..."
                        className="border-0 focus-visible:ring-0 px-0 bg-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      placeholder="Max Budget (AED)"
                      type="number"
                      className="bg-background"
                    />
                  </div>
                </div>

                {/* Category Filter Pills */}
                <div className="flex gap-3 mt-4">
                  <Button
                    variant={showProperties ? "default" : "outline"}
                    size="sm"
                    className="hover:text-white"
                  >
                    <Building className="h-4 w-4 mr-2" />
                    Real Estate
                  </Button>
                  <Button
                    variant={showYachts ? "default" : "outline"}
                    size="sm"
                    className="hover:text-white"
                  >
                    <Ship className="h-4 w-4 mr-2" />
                    Yachts
                  </Button>
                  <Button
                    variant={showSupercars ? "default" : "outline"}
                    size="sm"
                    className="hover:text-white"
                  >
                    <Car className="h-4 w-4 mr-2" />
                    Supercars
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Properties Section */}
          {showProperties && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Building className="h-6 w-6 text-primary" />
                Properties ({properties.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            </div>
          )}

          {/* Yachts Section */}
          {showYachts && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Ship className="h-6 w-6 text-primary" />
                Yachts ({yachts.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {yachts.map((yacht) => (
                  <YachtCard key={yacht.id} yacht={yacht} />
                ))}
              </div>
            </div>
          )}

          {/* Supercars Section */}
          {showSupercars && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Car className="h-6 w-6 text-primary" />
                Supercars ({supercars.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {supercars.map((supercar) => (
                  <SupercarCard key={supercar.id} supercar={supercar} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </CurrencyProvider>
  )
}
