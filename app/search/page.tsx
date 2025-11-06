import { getTopCoins } from '@/repository/coingecko'
import { SearchClient } from './SearchClient'
import { getProperties } from '@/repository/properties'
import { getYachts } from '@/repository/yachts'
import { getSupercars } from '@/repository/supercars'

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
