import { EventPublicRepository } from "@/repository/public/events"
import type { Event } from "@/schemas/event"
import { dummyEvents } from '@/fixtures/dummy-data'

export class EventPublicService {
  
  constructor(private repository: EventPublicRepository = new EventPublicRepository()) {
      // add supabase Auth if private else left blank: tada
   }
   
  /**
   * Fetch all events
  */
  async getAllEvents(params = { page: ['1'], limit: ['20'] }, get_count: boolean = false): Promise<{ data: Event[], count?: number }> {
    const { data, error, count } = await this.repository.getEvents(params)
    if (error) {
      console.error('Error fetching events:', error)
      console.log('Using dummy data as fallback')
      return {
        data: dummyEvents,
        count: get_count ? dummyEvents.length : undefined
      }
    }
    return {
      data,
      count: get_count ? count ?? 0 : undefined
    }
  }

  /**
   * Fetch events happening today
   */
  async getTodayEvents(
    params: Record<string, string[]> = (() => {
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
    })(), get_count: boolean = false
  ): Promise<{ data: Event[], count?: number }> {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    const { data, error, count } = await this.repository.getEvents(params)
    if (error) {
      console.error('Error fetching events:', error)
      console.log('Using dummy data as fallback')
      return {
        data: dummyEvents,
        count: get_count ? dummyEvents.length : undefined
      }
    }
    return {
      data,
      count: get_count ? count ?? 0 : undefined
    }
  }

  async getThisWeekEvents(
    params: Record<string, string[]> = (() => {
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
    })(),
    get_count: boolean = false
  ): Promise<{ data: Event[], count?: number }> {
    const { data, error, count } = await this.repository.getEvents(params)
    if (error) {
      console.error('Error fetching events:', error)
      console.log('Using dummy data as fallback')
      return {
        data: dummyEvents,
        count: get_count ? dummyEvents.length : undefined
      }
    }
    return {
      data,
      count: get_count ? count ?? 0 : undefined
    }

  }

  /**
   * Fetch featured events (next 3 upcoming events)
   */
  async getFeaturedEvents(params: Record<string, string[]> = {
    page: ['1'], limit: ['3'], event_date_from: [new Date().toISOString().split('T')[0]
    ]
  }, get_count: boolean = false): Promise<{ data: Event[], count?: number }> {
    const { data, error, count } = await this.repository.getEvents(params)
    if (error) {
      console.error('Error fetching events:', error)
      console.log('Using dummy data as fallback')
      return {
        data: dummyEvents,
        count: get_count ? dummyEvents.length : undefined
      }
    }
    return {
      data,
      count: get_count ? count ?? 0 : undefined
    }
  }


}
