
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CurrencyProvider } from '@/contexts/CurrencyContext'
import type { CoinGeckoData } from '@/repository/public/coingecko'
import { NewsCard } from './NewsCard'
import { NewsArticle } from '@/schemas/news'

interface FeaturedNewsSectionProps {
  news: NewsArticle[]
  coins: CoinGeckoData[]
}

export function FeaturedNewsSection({ news, coins }: FeaturedNewsSectionProps) {
  const featured_news: NewsArticle[] = news.filter((news: NewsArticle) => typeof news.image === 'string' && news.image.trim() !== '').slice(0, 3)
  const defaultCoin = coins.find(c => c.symbol === 'btc') || coins[0] || null
  return (
    <CurrencyProvider defaultCoin={defaultCoin}>
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured News</h2>
              <p className="text-muted-foreground">Get the latest news and updates</p>
            </div>
            <Button asChild variant="outline">
              <Link href="/news">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured_news.map((news) => (
              <NewsCard key={news.url} news={news} />
            ))}
          </div>
        </div>
      </section>
    </CurrencyProvider>
  )
}
