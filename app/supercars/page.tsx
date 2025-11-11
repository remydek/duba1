import { getTopCoins } from '@/repository/coingecko'
import { SupercarsClient } from './SupercarsClient'
import { getAllSupercars } from '@/services/supercars'

async function getCoins() {
  try {
    return await getTopCoins()
  } catch (error) {
    console.error('Error fetching coins:', error)
    return []
  }
}

export default async function SupercarsPage() {
  const [{ data: supercars}, coins] = await Promise.all([
    getAllSupercars(),
    getCoins()
  ])

  return <SupercarsClient supercars={supercars} coins={coins} />
}
