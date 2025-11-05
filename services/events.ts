import { supabase } from '@/lib/supabase'
import type { Event } from '@/schemas/event'
import { dummyEvents } from '@/fixtures/dummy-data'

/**
 * Fetch all events from Supabase
 */
export async function getEvents(): Promise<Event[]> {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .order('event_date', { ascending: true })

  if (error) {
    console.error('Error fetching events:', error)
    console.log('Using dummy data as fallback')
    return dummyEvents
  }

  return data && data.length > 0 ? data : dummyEvents
}

/**
 * Fetch events happening today
 */
export async function getTodayEvents(): Promise<Event[]> {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)

  const events = await getEvents()
  return events.filter(event => {
    const eventDate = new Date(event.event_date)
    return eventDate >= today && eventDate < tomorrow
  })
}

/**
 * Fetch events happening this week
 */
export async function getThisWeekEvents(): Promise<Event[]> {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const nextWeek = new Date(today)
  nextWeek.setDate(nextWeek.getDate() + 7)

  const events = await getEvents()
  return events.filter(event => {
    const eventDate = new Date(event.event_date)
    return eventDate >= today && eventDate < nextWeek
  })
}

/**
 * Fetch featured events (next 3 upcoming events)
 */
export async function getFeaturedEvents(): Promise<Event[]> {
  const events = await getEvents()
  const now = new Date()

  return events
    .filter(event => new Date(event.event_date) >= now)
    .slice(0, 3)
}

/**
 * Fetch a single event by ID
 */
export async function getEventById(id: string): Promise<Event | null> {
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching event:', error)
    console.log('Using dummy data as fallback')
    return dummyEvents.find(e => e.id === id) || dummyEvents[0]
  }

  return data
}
