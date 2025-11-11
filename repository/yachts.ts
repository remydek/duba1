import { supabase } from '@/lib/supabase'
import type { Yacht } from '@/schemas/yacht'
import { dummyYachts } from '@/fixtures/dummy-data'
import { query_builder } from '@/utils/supabase_query_builder'
import { pagination } from '@/utils/supabase_pagination'

export async function getYachts(params: Record<string, string[]>) {
  let query = supabase
    .from('yachts')
    .select('*', { count: 'exact' })
  query = query_builder(params, query)
  query.order('created_at', { ascending: true })

  const { start, end } = pagination(params)
  query = query.range(start, end)
  return query
}

/**
 * Fetch a single yacht by ID
 */


export async function getYachtById(id: string): Promise<Yacht | null> {
  const { data, error } = await supabase
    .from('yachts')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching yacht:', error)
    console.log('Using dummy data as fallback')
    return dummyYachts.find((e: Yacht)  => e.id == id) || dummyYachts[0]
  }
  return data
}
