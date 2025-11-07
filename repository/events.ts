import { supabase } from '@/lib/supabase'
import type { Event } from '@/schemas/event'
import { dummyEvents } from '@/fixtures/dummy-data'
import { query_builder } from '@/utils/supabase_query_builder'
import { pagination } from '@/utils/supabase_pagination'

export async function getEvents(params: Record<string, string[]>) {
  let query = supabase
    .from('events')
    .select('*', { count: 'exact' })
  query = query_builder(params, query)
  query.order('event_date', { ascending: true })

  const { start, end } = pagination(params)
  query = query.range(start, end)
  return query
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
    return dummyEvents.find((e: Event)  => e.id == id) || dummyEvents[0]
  }
  return data
}
