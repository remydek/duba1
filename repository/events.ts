import { supabase } from '@/lib/supabase'
import type { Event } from '@/schemas/event'
import { dummyEvents } from '@/fixtures/dummy-data'
import { query_builder } from '@/utils/supabase_query_builder'
import { pagination } from '@/utils/supabase_pagination'

/**
 * Fetch all events from Supabase
 */
export async function getEvents(params: Record<string, string[]>): Promise<Event[]> {

  let query = supabase
    .from('events')
    .select('*')

  // Query
  query = query_builder(params, query)
  query.order('event_date', { ascending: true })

  // Pagination
  const { page, limit, start, end } = pagination(params)
  query = query.range(start, end)
  // TODO: Make this much more efficient
  const { data, error } = await query
  if (error) {
    console.error('Error fetching events:', error)
    console.log('Using dummy data as fallback')
    // return dummyEvents
  }
  return data && data.length > 0 ? data : []
}

/**
 * Fetch events happening today
 */
export async function getTodayEvents(): Promise<Event[]> {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)
  const params = { page: ['1'], limit: ['10'], event_date_from: [today.toISOString()], event_date_to: [tomorrow.toISOString()] }
  const events = await getEvents(params)
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

  const dayOfWeek = today.getDay() 
  const startOfWeek = new Date(today)
  startOfWeek.setDate(today.getDate() - dayOfWeek)
  startOfWeek.setHours(0, 0, 0, 0)

  const endOfWeek = new Date(startOfWeek)
  endOfWeek.setDate(startOfWeek.getDate() + 6)
  endOfWeek.setHours(23, 59, 59, 999)

const params = {
  page: ['1'],
  limit: ['10'],
  event_date_from: [startOfWeek.toISOString()],
  event_date_to: [endOfWeek.toISOString()],
}
  const events = await getEvents(params)
  return events
}

/**
 * Fetch featured events (next 3 upcoming events)
 */
export async function getFeaturedEvents(): Promise<Event[]> {
  const params = { page: ['1'], limit: ['3'] , event_date: [new Date().toISOString()] }
  const events = await getEvents(params)
  return events
}

/**
 * Fetch a single event by ID
 */
export async function getEventById(id: object): Promise<Event | null> {
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
