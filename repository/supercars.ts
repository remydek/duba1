import { supabase } from '@/lib/supabase'
import type { Supercar } from '@/schemas/supercar'
import { dummySupercars } from '@/fixtures/dummy-data'

/**
 * Fetch all supercars from Supabase
 */
export async function getSupercars(): Promise<Supercar[]> {
  const { data, error } = await supabase
    .from('supercars')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching supercars:', error)
    console.log('Using dummy data as fallback')
    return dummySupercars
  }

  return data && data.length > 0 ? data : dummySupercars
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
    return dummySupercars.find(s => s.id === id) || dummySupercars[0]
  }

  return data
}

/**
 * Search supercars by brand or model
 */
export async function searchSupercars(query: string): Promise<Supercar[]> {
  const { data, error } = await supabase
    .from('supercars')
    .select('*')
    .or(`brand.ilike.%${query}%,model.ilike.%${query}%`)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error searching supercars:', error)
    return []
  }

  return data || []
}

/**
 * Fetch featured supercars (first 3)
 */
export async function getFeaturedSupercars(): Promise<Supercar[]> {
  const supercars = await getSupercars()
  return supercars.slice(0, 3)
}
