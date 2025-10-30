'use client'

import Image from 'next/image'
import { Calendar, MapPin, Ticket, Users } from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { Event } from '@/types/database'

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

  const priceFormatted = new Intl.NumberFormat('en-AE', {
    style: 'currency',
    currency: 'AED',
    minimumFractionDigits: 0,
  }).format(event.price_aed)

  return (
    <Card className="overflow-hidden hover:border-primary transition-colors group">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={event.images?.[0] || '/placeholder.jpg'}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {event.category && (
          <Badge className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm">
            {event.category}
          </Badge>
        )}
        {event.source && (
          <Badge className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm text-foreground">
            {event.source}
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

        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {event.description}
        </p>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Ticket className="h-4 w-4 text-primary" />
          <span className="text-lg font-bold text-primary">{priceFormatted}</span>
        </div>
        <Button size="sm">
          Book Now
        </Button>
      </CardFooter>
    </Card>
  )
}
