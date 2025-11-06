import { getTopCoins } from '@/repository/coingecko'
import { PropertiesClient } from './PropertiesClient'
import { getProperties } from '@/repository/properties'

async function getCoins() {
  try {
    return await getTopCoins()
  } catch (error) {
    console.error('Error fetching coins:', error)
    return []
  }
}

export default async function PropertiesPage() {
  const [properties, coins] = await Promise.all([
    getProperties(),
    getCoins()
  ])

  return <PropertiesClient properties={properties} coins={coins} />
}
