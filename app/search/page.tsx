import { getTopCoins } from '@/repository/public/coingecko'
import { SearchClient } from './SearchClient'
import { PropertyPublicService } from '@/services/public/properties'
import { YachtPublicService } from '@/services/public/yachts'
import { SupercarPublicService } from '@/services/public/supercars'

async function getCoins() {
  try {
    return await getTopCoins()
  } catch (error) {
    console.error('Error fetching coins:', error)
    return []
  }
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ categories?: string }>
}) {
  const params = await searchParams
  const categories = params.categories?.split(',') || []
  const propertyPublicService = new PropertyPublicService()
  const yachtPublicService=  new  YachtPublicService()
  const supercarPublicService=  new  SupercarPublicService()
  const [{ data: properties}, { data:yachts }, { data:supercars }, coins] = await Promise.all([
    propertyPublicService.getAllProperties(),
    yachtPublicService.getAllYachts(),
    supercarPublicService.getAllSupercars(),
    getCoins()
  ])

  return (
    <SearchClient
      properties={properties}
      yachts={yachts}
      supercars={supercars}
      coins={coins}
      selectedCategories={categories}
    />
  )
}
