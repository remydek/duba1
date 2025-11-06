'use client'

import { YachtCard } from '@/components/YachtCard'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Search, Ship } from 'lucide-react'
import { CurrencyProvider } from '@/contexts/CurrencyContext'
import { PageCoinSelector } from '@/components/PageCoinSelector'
import type { Yacht } from '@/schemas/yacht'
import type { CoinGeckoData } from '@/repository/coingecko'

interface YachtsClientProps {
  yachts: Yacht[]
  coins: CoinGeckoData[]
}

export function YachtsClient({ yachts, coins }: YachtsClientProps) {
  const defaultCoin = coins.find(c => c.symbol === 'btc') || coins[0] || null

  return (
    <CurrencyProvider defaultCoin={defaultCoin}>
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <Ship className="h-10 w-10 text-primary drop-shadow-[0_0_10px_rgba(212,175,55,0.6)]" />
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                Luxury Yacht Rentals
              </h1>
            </div>
            <p className="text-muted-foreground text-lg">
              Experience Dubai waters in style. {yachts.length} yachts available for crypto booking
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

                {/* Search and Yacht Filters */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-1">
                    <div className="flex items-center gap-2 bg-background rounded-lg px-3 py-2 border border-border">
                      <Search className="h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search yachts..."
                        className="border-0 focus-visible:ring-0 px-0 bg-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      placeholder="Max Guests"
                      type="number"
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Max Budget (AED/day)"
                      type="number"
                      className="bg-background"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Yacht Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {yachts.map((yacht) => (
              <YachtCard key={yacht.id} yacht={yacht} />
            ))}
          </div>
        </div>
      </div>
    </CurrencyProvider>
  )
}
