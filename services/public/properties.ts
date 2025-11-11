import { PropertyPublicRepository } from "@/repository/public/properties"
import type { Property } from "@/schemas/property"
import { dummyProperties } from '@/fixtures/dummy-data'


export class PropertyPublicService {
  constructor(private repository: PropertyPublicRepository = new PropertyPublicRepository()) {
  }
  /**
* Fetch all properties
*/
  async getAllProperties(params = { page: ['1'], limit: ['20'] }, get_count: boolean = false): Promise<{ data: Property[], count?: number }> {
    const { data, error, count } = await this.repository.getProperties(params)
    if (error) {
      console.error('Error fetching properties:', error)
      console.log('Using dummy data as fallback')
      return {
        data: dummyProperties,
        count: get_count ? dummyProperties.length : undefined
      }
    }
    return {
      data,
      count: get_count ? count ?? 0 : undefined
    }
  }

  /**
   * Fetch properties happening today
   */
  async getTodayProperties(
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
        created_at_from: [start.toISOString()],
        created_at_to: [end.toISOString()]
      }
    })(), get_count: boolean = false
  ): Promise<{ data: Property[], count?: number }> {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    const { data, error, count } = await this.repository.getProperties(params)
    if (error) {
      console.error('Error fetching properties:', error)
      console.log('Using dummy data as fallback')
      return {
        data: dummyProperties,
        count: get_count ? dummyProperties.length : undefined
      }
    }
    return {
      data,
      count: get_count ? count ?? 0 : undefined
    }
  }

  async getThisWeekProperties(
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
        created_at_from: [startOfWeek.toISOString()],
        created_at_to: [endOfWeek.toISOString()]
      }
    })(),
    get_count: boolean = false
  ): Promise<{ data: Property[], count?: number }> {
    const { data, error, count } = await this.repository.getProperties(params)
    if (error) {
      console.error('Error fetching properties:', error)
      console.log('Using dummy data as fallback')
      return {
        data: dummyProperties,
        count: get_count ? dummyProperties.length : undefined
      }
    }
    return {
      data,
      count: get_count ? count ?? 0 : undefined
    }

  }

  /**
   * Fetch featured properties (next 3 upcoming properties)
   */
  async getFeaturedProperties(params: Record<string, string[]> = {
    page: ['1'], limit: ['3'], created_at_from: [new Date().toISOString().split('T')[0]
    ]
  }, get_count: boolean = false): Promise<{ data: Property[], count?: number }> {
    const { data, error, count } = await this.repository.getProperties(params)
    if (error) {
      console.error('Error fetching properties:', error)
      console.log('Using dummy data as fallback')
      return {
        data: dummyProperties,
        count: get_count ? dummyProperties.length : undefined
      }
    }
    return {
      data,
      count: get_count ? count ?? 0 : undefined
    }
  }

  async getPropertyById(id: string): Promise<Property | null> {
    return this.repository.getPropertyById(id)
  }
}