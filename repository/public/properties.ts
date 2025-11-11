import { supabase_public } from '@/lib/supabase-client'
import type { Property } from '@/schemas/property'
import { dummyProperties } from '@/fixtures/dummy-data'
import { query_builder } from '@/utils/supabase_query_builder'
import { pagination } from '@/utils/supabase_pagination'

export class PropertyPublicRepository {
  async getProperties(params: Record<string, string[]>) {
    let query = supabase_public
      .from('properties')
      .select('*', { count: 'exact' })
    query = query_builder(params, query)
    query.order('created_at', { ascending: true })

    const { start, end } = pagination(params)
    query = query.range(start, end)
    return query
  }

  /**
   * Fetch a single property by ID
   */


  async getPropertyById(id: string): Promise<Property | null> {
    const { data, error } = await supabase_public
      .from('properties')
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      console.error('Error fetching property:', error)
      console.log('Using dummy data as fallback')
      return dummyProperties.find((e: Property) => e.id == id) || dummyProperties[0]
    }
    return data
  }

}
