import { supabase } from '@/lib/supabase'
import type { Event } from '@/schemas/event'
import { dummyEvents } from '@/fixtures/dummy-data'
import { query_builder } from '@/utils/supabase_query_builder'

/**
 * Fetch all events from Supabase
 */
// TODO: Make this much more efficient, and find a way to apply pagination
export async function getEvents(params: string): Promise<Event[]> {
  let query = supabase
    .from('events')
    .select('*')

  query = query_builder(params, query)
  query.order('event_date', { ascending: true })

  const { data, error } = await query
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
export async function getTodayEvents(params: string): Promise<Event[]> {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)
  const events = await getEvents(params)
  return events.filter(event => {
    const eventDate = new Date(event.event_date)
    return eventDate >= today && eventDate < tomorrow
  })
}

/**
 * Fetch events happening this week
 */
export async function getThisWeekEvents(params: string): Promise<Event[]> {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const nextWeek = new Date(today)
  nextWeek.setDate(nextWeek.getDate() + 7)

  const events = await getEvents(params)
  return events.filter(event => {
    const eventDate = new Date(event.event_date)
    return eventDate >= today && eventDate < nextWeek
  })
}

/**
 * Fetch featured events (next 3 upcoming events)
 */
export async function getFeaturedEvents(params: string): Promise<Event[]> {
  const events = await getEvents(params)
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
