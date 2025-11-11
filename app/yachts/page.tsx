import { getTopCoins } from '@/repository/coingecko'
import { YachtsClient } from './YachtsClient'
import { getAllYachts } from '@/services/yachts'

async function getCoins() {
  try {
    return await getTopCoins()
  } catch (error) {
    console.error('Error fetching coins:', error)
    return []
  }
}

export default async function YachtsPage() {
  const [{ data:yachts}, coins] = await Promise.all([
    getAllYachts(),
    getCoins()
  ])

  return <YachtsClient yachts={yachts} coins={coins} />
}
