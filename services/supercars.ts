import { getSupercars } from "@/repository/supercars"
import type { Supercar } from "@/schemas/supercar"
import { dummySupercars } from '@/fixtures/dummy-data'
/**
 * Fetch all supercars
 */
export async function getAllSupercars(params = { page: ['1'], limit: ['20'] }, get_count: boolean = false): Promise<{ data: Supercar[], count?: number }> {
  const { data, error, count } = await getSupercars(params)
  if (error) {
    console.error('Error fetching supercars:', error)
    console.log('Using dummy data as fallback')
    return {
      data: dummySupercars,
      count: get_count ? dummySupercars.length : undefined
    }
  }
  return {
    data,
    count: get_count ? count ?? 0 : undefined
  }
}

/**
 * Fetch supercars happening today
 */
export async function getTodaySupercars(
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
): Promise<{ data: Supercar[], count?: number }> {
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const tomorrow = new Date(today)
  tomorrow.setDate(tomorrow.getDate() + 1)
  const { data, error, count } = await getSupercars(params)
  if (error) {
    console.error('Error fetching supercars:', error)
    console.log('Using dummy data as fallback')
  return {
      data: dummySupercars,
      count: get_count ? dummySupercars.length : undefined
    }
  }
  return {
    data,
    count: get_count ? count ?? 0 : undefined
  }
}

export async function getThisWeekSupercars(
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
): Promise<{ data: Supercar[], count?: number }> {
  const { data, error, count } = await getSupercars(params)
  if (error) {
    console.error('Error fetching supercars:', error)
    console.log('Using dummy data as fallback')
   return {
      data: dummySupercars,
      count: get_count ? dummySupercars.length : undefined
    }
  }
  return {
    data,
    count: get_count ? count ?? 0 : undefined
  }

}

/**
 * Fetch featured supercars (next 3 upcoming supercars)
 */
export async function getFeaturedSupercars(params: Record<string, string[]> = {
  page: ['1'], limit: ['3'], created_at_from: [new Date().toISOString().split('T')[0]
  ]
}, get_count: boolean = false): Promise<{ data: Supercar[], count?: number }> {
  const { data, error, count } = await getSupercars(params)
  if (error) {
    console.error('Error fetching supercars:', error)
    console.log('Using dummy data as fallback')
  return {
      data: dummySupercars,
      count: get_count ? dummySupercars.length : undefined
    }
  }
  return {
    data,
    count: get_count ? count ?? 0 : undefined
  }
}

