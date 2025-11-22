
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ExperienceCard } from '@/components/ExperienceCard'
import type { Experience } from '@/schemas/experience'
import { CurrencyProvider } from '@/contexts/CurrencyContext'
import type { CoinGeckoData } from '@/repository/public/coingecko'

interface FeaturedExperiencesSectionProps {
  experiences: Experience[]
  coins: CoinGeckoData[]
}

export function FeaturedExperienceSection({ experiences, coins }: FeaturedExperiencesSectionProps) {
  const defaultCoin = coins.find(c => c.symbol === 'btc') || coins[0] || null
  return (
    <CurrencyProvider defaultCoin={defaultCoin}>
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Experiences</h2>
              <p className="text-muted-foreground">Exclusive experiences and entertainment</p>
            </div>
            <Button asChild variant="outline">
              <Link href="/experiences">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {experiences.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </div>
      </section>
    </CurrencyProvider>
  )
}
