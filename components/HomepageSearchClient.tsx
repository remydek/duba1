'use client'

import dynamic from 'next/dynamic'

const HomepageSearch = dynamic(
  () => import('@/components/HomepageSearch').then(m => m.HomepageSearch),
  { ssr: false }
)

export default function HomepageSearchClient() {
  return <HomepageSearch />
}
