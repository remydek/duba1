import { supabase } from '@/lib/supabase'
import type { Supercar } from '@/schemas/supercar'
import { dummySupercars } from '@/fixtures/dummy-data'
import { query_builder } from '@/utils/supabase_query_builder'
import { pagination } from '@/utils/supabase_pagination'

export async function getSupercars(params: Record<string, string[]>) {
  let query = supabase
    .from('supercars')
    .select('*', { count: 'exact' })
  query = query_builder(params, query)
  query.order('created_at', { ascending: true })

  const { start, end } = pagination(params)
  query = query.range(start, end)
  return query
}

/**
 * Fetch a single supercar by ID
 */


export async function getSupercarById(id: string): Promise<Supercar | null> {
  const { data, error } = await supabase
    .from('supercars')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching supercar:', error)
    console.log('Using dummy data as fallback')
    return dummySupercars.find((e: Supercar)  => e.id == id) || dummySupercars[0]
  }
  return data
}
