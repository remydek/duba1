import { FeaturedEventsSection } from '@/components/FeaturedEventsSection'
import { PlatinumListService } from '@/services/private/platinumListPrivateService'

export default async function HomePage() {
  const eventPlatinumListPrivateService = new PlatinumListService()
  const [{ data: featuredEvents}] = await Promise.all([
    eventPlatinumListPrivateService.getEvents(),
  ])
  return (
    <div className="min-h-screen">
      {/* {<FeaturedEventsSection events={featuredEvents} />} */}
    </div>
  )
}
