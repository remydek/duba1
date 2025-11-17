import { FeaturedEventsSection } from '@/components/FeaturedEventsSection'
import { PlatinumListService } from '@/services/private/platinumListPrivateService'
import { Suspense } from 'react'

export default async function HomePage() {
  const eventPlatinumListPrivateService = new PlatinumListService()
  const [{ data: featuredEvents }] = await Promise.all([
    eventPlatinumListPrivateService.getEvents(),
  ])
  return (
    <div className="min-h-screen">
      <Suspense fallback={<div>Loading featured events...</div>}>
        {<FeaturedEventsSection events={featuredEvents} />}
      </Suspense>
    </div>
  )
}
