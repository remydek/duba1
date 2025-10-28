import { supabase } from '../supabase'
import type { Yacht } from '@/types/database'
import { dummyYachts } from '../dummy-data'

/**
 * Fetch all yachts from Supabase
 */
export async function getYachts(): Promise<Yacht[]> {
  const { data, error } = await supabase
    .from('yachts')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching yachts:', error)
    console.log('Using dummy data as fallback')
    return dummyYachts
  }

  return data && data.length > 0 ? data : dummyYachts
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
    return dummyYachts.find(y => y.id === id) || dummyYachts[0]
  }

  return data
}

/**
 * Search yachts by name or location
 */
export async function searchYachts(query: string): Promise<Yacht[]> {
  const { data, error } = await supabase
    .from('yachts')
    .select('*')
    .or(`name.ilike.%${query}%,location.ilike.%${query}%`)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error searching yachts:', error)
    return []
  }

  return data || []
}
