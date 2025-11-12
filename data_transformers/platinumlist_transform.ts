
import { DateTime } from 'luxon'
import { EventRow, Event } from '@/schemas/event'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const transformPlatinumlistToEvent = (data: any): Event => {
  const timestamp = typeof data.start === 'number' ? data.start * 1000 : null

  const eventDate = timestamp
    ? DateTime.fromMillis(timestamp, { zone: 'Asia/Dubai' }).toUTC().toISO()
    : null
  const mapped = {
    id: String(data.id),
    title: data.name ?? '',
    description: data.description ?? null,
    price_aed: Number(data.price?.data?.price) || 0,
    event_date: eventDate ?? 'TBD',
    venue: data.venue?.name ?? null,
    location: data.city?.name ?? null,
    category: data.event_type?.name ?? null,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    images: data.images?.map((img: any) => img.url) ?? null,
    tickets_available: data.tickets_left ?? null,
    source: 'platinumlist',
    created_at: new Date().toISOString(),
  }

  return EventRow.parse(mapped)
}
