import Image from 'next/image'
import { Calendar, MapPin, Ticket, Users } from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { Event } from '@/schemas/event'
import Link from 'next/link'
import { PriceDisplay } from './PriceDisplay'
interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {

  const eventDate = new Date(event.event_date)
  const formattedDate = eventDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })

  const formattedTime = eventDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  })

  const priceFormatted = typeof event.price_aed === 'string'
    ? event.price_aed
    : new Intl.NumberFormat('en-AE', {
      style: 'currency',
      currency: 'AED',
      minimumFractionDigits: 0,
    }).format(event.price_aed)
  function createMarkup() {
    return { __html: event.description || '' };
  }
  return (
    <Card className="overflow-hidden hover:border-primary transition-colors group p-0">
      <div className="relative h-64 w-full overflow-hidden bg-muted">
        <Image
          src={
            typeof event.images === 'string'
              ? event.images
              : Array.isArray(event.images) && event.images.length
                ? event.images[0]
                : '/placeholder.jpg'
          }
          alt={event.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
        {event.category && (
          <Badge className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm">
            {event.category && event.category.toUpperCase()}
          </Badge>
        )}
        {event.source && (
          <Badge className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm text-foreground">
            {event.source.toUpperCase()}
          </Badge>
        )}
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {event.title}
        </h3>

        <div className="space-y-2 text-sm text-muted-foreground mb-3">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{formattedDate} at {formattedTime}</span>
          </div>

          {event.venue && (
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="line-clamp-1">{event.venue}, {event.location}</span>
            </div>
          )}

          {event.tickets_available !== null && (
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>{event.tickets_available} tickets available</span>
            </div>
          )}
        </div>

        <div className="text-sm text-muted-foreground line-clamp-6 mb-4" dangerouslySetInnerHTML={createMarkup()} />
      </CardContent>

      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Ticket className="h-4 w-4 text-primary" />
          <span className="text-lg font-bold text-primary">
            <PriceDisplay priceAED={typeof event.price_aed === 'string' ? 0 : event.price_aed} showCrypto={false} />
            {/* {priceFormatted} */}
            </span>
        </div>
        <Link href={`${event.url}`} target='_blank' className="text-primary hover:underline">
          <Button size="sm" className='cursor-pointer hover:bg-amber-600'>
            Book Now
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
