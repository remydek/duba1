
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { EventCard } from '@/components/EventCard'
import type { Event } from '@/schemas/event'

interface FeaturedEventsSectionProps {
  events: Event[]
}

export function FeaturedEventsSection({ events }: FeaturedEventsSectionProps) {
  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Events</h2>
            <p className="text-muted-foreground">Exclusive experiences and entertainment</p>
          </div>
          <Button asChild variant="outline">
            <Link href="/events">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  )
}
