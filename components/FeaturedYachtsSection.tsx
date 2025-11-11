'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { YachtCard } from '@/components/YachtCard'
import { CurrencyProvider } from '@/contexts/CurrencyContext'
import type { Yacht } from '@/schemas/yacht'
import type { CoinGeckoData } from '@/repository/public/coingecko'

interface FeaturedYachtsSectionProps {
  yachts: Yacht[]
  coins: CoinGeckoData[]
}

export function FeaturedYachtsSection({ yachts, coins }: FeaturedYachtsSectionProps) {
  const defaultCoin = coins.find(c => c.symbol === 'btc') || coins[0] || null

  return (
    <CurrencyProvider defaultCoin={defaultCoin}>
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Yachts</h2>
              <p className="text-muted-foreground">Luxury yacht rentals for unforgettable experiences</p>
            </div>
            <Button asChild variant="outline">
              <Link href="/yachts">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {yachts.map((yacht) => (
              <YachtCard key={yacht.id} yacht={yacht} />
            ))}
          </div>
        </div>
      </section>
    </CurrencyProvider>
  )
}
