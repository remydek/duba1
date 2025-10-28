import { getTopCoins } from '@/lib/coingecko'
import { SupercarsClient } from './SupercarsClient'
import { getSupercars } from '@/lib/queries/supercars'

async function getCoins() {
  try {
    return await getTopCoins()
  } catch (error) {
    console.error('Error fetching coins:', error)
    return []
  }
}

export default async function SupercarsPage() {
  const [supercars, coins] = await Promise.all([
    getSupercars(),
    getCoins()
  ])

  return <SupercarsClient supercars={supercars} coins={coins} />
}
