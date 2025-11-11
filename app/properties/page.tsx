import { getTopCoins } from '@/repository/public/coingecko'
import { PropertiesClient } from './PropertiesClient'
import { PropertyPublicService } from '@/services/public/properties'

async function getCoins() {
  try {
    return await getTopCoins()
  } catch (error) {
    console.error('Error fetching coins:', error)
    return []
  }
}

export default async function PropertiesPage() {
  const propertiesService = new PropertyPublicService()
  const [{ data :properties }, coins] = await Promise.all([
    propertiesService.getAllProperties(),
    getCoins()
  ])

  return <PropertiesClient properties={properties} coins={coins} />
}
