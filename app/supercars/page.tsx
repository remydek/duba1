import { getTopCoins } from '@/repository/public/coingecko'
import { SupercarsClient } from './SupercarsClient'
import { SupercarPublicService } from '@/services/public/supercars'

async function getCoins() {
  try {
    return await getTopCoins()
  } catch (error) {
    console.error('Error fetching coins:', error)
    return []
  }
}

export default async function SupercarsPage() {
  const supercarsPublicService = new SupercarPublicService()
  const [{ data: supercars}, coins] = await Promise.all([
    supercarsPublicService.getAllSupercars(),
    getCoins()
  ])

  return <SupercarsClient supercars={supercars} coins={coins} />
}
