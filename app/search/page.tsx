import { getTopCoins } from '@/lib/coingecko'
import { SearchClient } from './SearchClient'
import { getProperties } from '@/services/properties'
import { getYachts } from '@/services/yachts'
import { getSupercars } from '@/services/supercars'

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

  const [properties, yachts, supercars, coins] = await Promise.all([
    getProperties(),
    getYachts(),
    getSupercars(),
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
