import { coinGecko } from "@/fixtures/coin-gecko"
import { Crypto } from '@/schemas/crypto'

export interface CoinGeckoData {
  id: string
  symbol: string
  name: string
  image: string
  current_price: number
  price_change_24h: number
  market_cap_rank: number
}

// Cache for coin data
let coinCache: CoinGeckoData[] | null = null
let cacheTimestamp: number = 0
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

export async function getTopCoins(): Promise<CoinGeckoData[]> {
  // Return cached data if still fresh
  if (coinCache && Date.now() - cacheTimestamp < CACHE_DURATION) {
    return coinCache
  }

  try {
    const response = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=aed&order=market_cap_desc&per_page=100&page=1&sparkline=false',
      { next: { revalidate: 300 } } // Cache for 5 minutes
    )
    if (!response.ok) {
      throw new Error('Failed to fetch coin data')
    }

    const data = await response.json()
    coinCache = data
    cacheTimestamp = Date.now()

    return data
  } catch (error) {
    console.error('Error fetching CoinGecko data:', error)
    // Return fallback data if API fails
    return getFallbackCoins()
  }
}

export function getFallbackCoins(): Crypto[] {
  return coinGecko
}

export async function getCoinPrice(coinId: string): Promise<number> {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=aed`,
      { next: { revalidate: 60 } } // Cache for 1 minute
    )

    if (!response.ok) {
      throw new Error('Failed to fetch coin price')
    }

    const data = await response.json()
    return data[coinId]?.aed || 0
  } catch (error) {
    console.error('Error fetching coin price:', error)
    return 0
  }
}
