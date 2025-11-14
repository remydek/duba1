
import { DateTime } from 'luxon'
import { EventRow, Event } from '@/schemas/event'
import { PlatinumlistEvent } from '@/schemas/platinumlist-events'

export const transformPlatinumlistToEvent = (data: PlatinumlistEvent): Event => {
  const timestamp = typeof data.start === 'number' ? data.start * 1000 : null

  const eventDate = timestamp
    ? DateTime.fromMillis(timestamp, { zone: 'Asia/Dubai' }).toUTC().toISO()
    : null
  const images = [
  data.image_big?.src,
  ...(data.venues?.data?.map(v => v.image_small?.src).filter(Boolean) || [])
].filter(Boolean)
  const mapped = {
    id: String(data.id),
    title: data.name ?? '',
    description: data.description ?? null,
    price_aed: data.price?.data?.price < 0
      ? 'FREE'
      : Number(data.price?.data?.price) || 0,
    event_date: eventDate ?? 'TBD',
    venue: data.venues?.data?.map(v => v.name).filter(Boolean).join(', ') ?? null,
    location: data.venues?.data?.map(loc => loc.location).filter(Boolean).join(', ') ?? null,
    category: data.artwork_label ?? null,
    images: images,
    tickets_available: data.has_tickets && data.has_sales_started && data.status != "sold out" ? "Yes" : "No",
    source: 'platinumlist',
    url: data.url ? process.env.PLATINUMLIST_AFFILIATE_URL+data.url : null,
    created_at: new Date().toISOString(),
  }

  return EventRow.parse(mapped)
}
