import { getEvents } from "@/repository/events"
import type { Event } from "@/schemas/event"
import { dummyEvents } from '@/fixtures/dummy-data'
/**
 * Fetch all events
 */
export async function getAllEvents(params = { page: ['1'], limit: ['10'] }): Promise<Event[]> {
  const { data, error, count } = await getEvents(params)
  if (error) {
    console.error('Error fetching events:', error)
    console.log('Using dummy data as fallback')
    return dummyEvents
  }
  return data
}

/**
 * Fetch events happening today
 */
export async function getTodayEvents(
  params = (() => {
    const now = new Date()
    const start = new Date(Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate(),
      0, 0, 0, 0
    ))
    const end = new Date(Date.UTC(
      now.getUTCFullYear(),
      now.getUTCMonth(),
      now.getUTCDate() + 1,
      0, 0, 0, 0
    ))

    return {
      page: ['1'],
      limit: ['10'],
      event_date_from: [start.toISOString()],
      event_date_to: [end.toISOString()]
    }
  })()
): Promise<Event[]> {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)
  const { data, error, count } = await getEvents(params)
  if (error) {
    console.error('Error fetching events:', error)
    console.log('Using dummy data as fallback')
    return dummyEvents
  }
  return data
}

export async function getThisWeekEvents(
  params = (() => {
    const now = new Date()
    const utcYear = now.getUTCFullYear()
    const utcMonth = now.getUTCMonth()
    const utcDate = now.getUTCDate()
    const dayOfWeek = now.getUTCDay()

    const startOfWeek = new Date(Date.UTC(
      utcYear,
      utcMonth,
      utcDate - dayOfWeek,
      0, 0, 0, 0
    ))

    const endOfWeek = new Date(Date.UTC(
      utcYear,
      utcMonth,
      (utcDate - dayOfWeek) + 7,
      0, 0, 0, 0
    ))

    return {
      page: ['1'],
      limit: ['50'],
      event_date_from: [startOfWeek.toISOString()],
      event_date_to: [endOfWeek.toISOString()]
    }
  })()
): Promise<Event[]> {
  const { data, error, count } = await getEvents(params)
  if (error) {
    console.error('Error fetching events:', error)
    console.log('Using dummy data as fallback')
    return dummyEvents
  }
  return data

}

/**
 * Fetch featured events (next 3 upcoming events)
 */
export async function getFeaturedEvents(params = {
  page: ['1'], limit: ['3'], event_date_from: [new Date().toISOString().split('T')[0]
  ]
}): Promise<Event[]> {
  const { data, error, count } = await getEvents(params)
  if (error) {
    console.error('Error fetching events:', error)
    console.log('Using dummy data as fallback')
    return dummyEvents
  }
  return data
}

