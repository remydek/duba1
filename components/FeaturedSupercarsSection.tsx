'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SupercarCard } from '@/components/SupercarCard'
import { CurrencyProvider } from '@/contexts/CurrencyContext'
import type { Supercar } from '@/schemas/supercar'
import type { CoinGeckoData } from '@/services/coingecko'

interface FeaturedSupercarsSectionProps {
  supercars: Supercar[]
  coins: CoinGeckoData[]
}

export function FeaturedSupercarsSection({ supercars, coins }: FeaturedSupercarsSectionProps) {
  const defaultCoin = coins.find(c => c.symbol === 'btc') || coins[0] || null

  return (
    <CurrencyProvider defaultCoin={defaultCoin}>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Supercars</h2>
              <p className="text-muted-foreground">Rent the world&apos;s most exotic cars</p>
            </div>
            <Button asChild variant="outline">
              <Link href="/supercars">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supercars.map((supercar) => (
              <SupercarCard key={supercar.id} supercar={supercar} />
            ))}
          </div>
        </div>
      </section>
    </CurrencyProvider>
  )
}
