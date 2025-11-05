import { supabase } from '../supabase'
import type { Property } from '@/schemas/property'
import { dummyProperties } from '../dummy-data'

/**
 * Fetch all properties from Supabase
 */
export async function getProperties(): Promise<Property[]> {
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching properties:', error)
    console.log('Using dummy data as fallback')
    return dummyProperties
  }

  return data && data.length > 0 ? data : dummyProperties
}

/**
 * Fetch a single property by ID
 */
export async function getPropertyById(id: string): Promise<Property | null> {
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching property:', error)
    console.log('Using dummy data as fallback')
    return dummyProperties.find(p => p.id === id) || dummyProperties[0]
  }

  return data
}

/**
 * Fetch featured properties (can be enhanced with a featured flag later)
 */
export async function getFeaturedProperties(limit: number = 6): Promise<Property[]> {
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error) {
    console.error('Error fetching featured properties:', error)
    console.log('Using dummy data as fallback')
    return dummyProperties.slice(0, limit)
  }

  return data && data.length > 0 ? data : dummyProperties.slice(0, limit)
}

/**
 * Search properties by location
 */
export async function searchPropertiesByLocation(location: string): Promise<Property[]> {
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .ilike('location', `%${location}%`)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error searching properties:', error)
    return []
  }

  return data || []
}
