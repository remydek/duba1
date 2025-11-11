import { YachtPublicRepository } from "@/repository/public/yachts"
import type { Yacht } from "@/schemas/yacht"
import { dummyYachts } from '@/fixtures/dummy-data'


export class YachtPublicService {
  constructor(private repository: YachtPublicRepository = new YachtPublicRepository()) { }
  /**
   * Fetch all yachts
   */
  async getAllYachts(params = { page: ['1'], limit: ['20'] }, get_count: boolean = false): Promise<{ data: Yacht[], count?: number }> {
    const { data, error, count } = await this.repository.getYachts(params)
    if (error) {
      console.error('Error fetching yachts:', error)
      console.log('Using dummy data as fallback')
      return {
        data: dummyYachts,
        count: get_count ? dummyYachts.length : undefined
      }
    }
    return {
      data,
      count: get_count ? count ?? 0 : undefined
    }
  }

  /**
   * Fetch yachts happening today
   */
  async getTodayYachts(
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
  ): Promise<{ data: Yacht[], count?: number }> {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    const { data, error, count } = await this.repository.getYachts(params)
    if (error) {
      console.error('Error fetching yachts:', error)
      console.log('Using dummy data as fallback')
      return {
        data: dummyYachts,
        count: get_count ? dummyYachts.length : undefined
      }
    }
    return {
      data,
      count: get_count ? count ?? 0 : undefined
    }
  }

  async getThisWeekYachts(
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
  ): Promise<{ data: Yacht[], count?: number }> {
    const { data, error, count } = await this.repository.getYachts(params)
    if (error) {
      console.error('Error fetching yachts:', error)
      console.log('Using dummy data as fallback')
      return {
        data: dummyYachts,
        count: get_count ? dummyYachts.length : undefined
      }
    }
    return {
      data,
      count: get_count ? count ?? 0 : undefined
    }

  }

  /**
   * Fetch featured yachts (next 3 upcoming yachts)
   */
  async getFeaturedYachts(params: Record<string, string[]> = {
    page: ['1'], limit: ['3'], created_at_from: [new Date().toISOString().split('T')[0]
    ]
  }, get_count: boolean = false): Promise<{ data: Yacht[], count?: number }> {
    const { data, error, count } = await this.repository.getYachts(params)
    if (error) {
      console.error('Error fetching yachts:', error)
      console.log('Using dummy data as fallback')
      return {
        data: dummyYachts,
        count: get_count ? dummyYachts.length : undefined
      }
    }
    return {
      data,
      count: get_count ? count ?? 0 : undefined
    }
  }

}