import { getTopCoins } from '@/repository/public/coingecko'
import { YachtsClient } from './YachtsClient'
import { YachtPublicService } from '@/services/public/yachts'

async function getCoins() {
  try {
    return await getTopCoins()
  } catch (error) {
    console.error('Error fetching coins:', error)
    return []
  }
}

export default async function YachtsPage() {
  const yachtPublicService = new YachtPublicService()
  const [{ data:yachts}, coins] = await Promise.all([
    yachtPublicService.getAllYachts(),
    getCoins()
  ])

  return <YachtsClient yachts={yachts} coins={coins} />
}
