'use client'

import { useState, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Search, Car } from 'lucide-react'
import { CurrencyProvider } from '@/contexts/CurrencyContext'
import { PageCoinSelector } from '@/components/PageCoinSelector'
import type { CoinGeckoData } from '@/repository/public/coingecko'
import { Experience } from '@/schemas/experience'
import { ExperienceCard } from '@/components/ExperienceCard'

interface ExperiencesClientProps {
  experience: Experience[]
  coins: CoinGeckoData[]
}

export function ExperiencesClient({ experience, coins }: ExperiencesClientProps) {
  const defaultCoin = coins.find(c => c.symbol === 'btc') || coins[0] || null
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return experience.filter(e =>
      e.title.toLowerCase().includes(q) ||
      (e.description || '').toLowerCase().includes(q)
    )
  }, [query, experience])

  return (
    <CurrencyProvider defaultCoin={defaultCoin}>
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              {/* <Car className="h-10 w-10 text-primary" /> */}
              <h1 className="text-4xl md:text-5xl font-bold">
                Experiences
              </h1>
            </div>
            <p className="text-muted-foreground text-lg">
              Unique activities and curated experiences across Dubai. {experience.length} experiences available.
            </p>
          </div>

          <div className="sticky top-4 z-40 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="mb-4 flex justify-end">
                  <PageCoinSelector coins={coins} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-1">
                    <div className="flex items-center gap-2 rounded-lg px-3 py-2 border border-border">
                      <Search className="h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search experience..."
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        className="border-0 focus-visible:ring-0 px-0 bg-transparent"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-1">
                    <div className="flex items-center gap-2 rounded-lg px-3 py-2 border border-border">
                      <Input className="border-0 focus-visible:ring-0 px-0 bg-transparent" placeholder="Min Budget (AED)" type="number" />
                    </div>
                  </div>

                  <div className="md:col-span-1">
                    <div className="flex items-center gap-2 rounded-lg px-3 py-2 border border-border">
                      <Input className="border-0 focus-visible:ring-0 px-0 bg-transparent" placeholder="Max Budget (AED)" type="number" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(e => (
              <ExperienceCard key={e.id} experience={e} />
            ))}
          </div>
        </div>
      </div>
    </CurrencyProvider>
  )
}
