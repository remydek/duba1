import { getTopCoins } from '@/lib/coingecko'
import { YachtsClient } from './YachtsClient'
import { getYachts } from '@/lib/queries/yachts'

async function getCoins() {
  try {
    return await getTopCoins()
  } catch (error) {
    console.error('Error fetching coins:', error)
    return []
  }
}

export default async function YachtsPage() {
  const [yachts, coins] = await Promise.all([
    getYachts(),
    getCoins()
  ])

  return <YachtsClient yachts={yachts} coins={coins} />
}
