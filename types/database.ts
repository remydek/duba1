export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      properties: {
        Row: {
          id: string
          title: string
          description: string | null
          price_aed: number
          property_type: 'villa' | 'apartment' | 'penthouse' | 'townhouse' | null
          bedrooms: number | null
          bathrooms: number | null
          sqft: number | null
          area: string | null
          developer: string | null
          crypto_verified: boolean | null
          golden_visa_eligible: boolean | null
          images: string[] | null
          amenities: string[] | null
          status: string | null
          latitude: number | null
          longitude: number | null
          created_at: string | null
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          price_aed: number
          property_type?: 'villa' | 'apartment' | 'penthouse' | 'townhouse' | null
          bedrooms?: number | null
          bathrooms?: number | null
          sqft?: number | null
          area?: string | null
          developer?: string | null
          crypto_verified?: boolean | null
          golden_visa_eligible?: boolean | null
          images?: string[] | null
          amenities?: string[] | null
          status?: string | null
          latitude?: number | null
          longitude?: number | null
          created_at?: string | null
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          price_aed?: number
          property_type?: 'villa' | 'apartment' | 'penthouse' | 'townhouse' | null
          bedrooms?: number | null
          bathrooms?: number | null
          sqft?: number | null
          area?: string | null
          developer?: string | null
          crypto_verified?: boolean | null
          golden_visa_eligible?: boolean | null
          images?: string[] | null
          amenities?: string[] | null
          status?: string | null
          latitude?: number | null
          longitude?: number | null
          created_at?: string | null
        }
      }
      yachts: {
        Row: {
          id: string
          name: string
          description: string | null
          price_per_day_aed: number
          length_ft: number | null
          guests_max: number | null
          yacht_type: string | null
          images: string[] | null
          amenities: string[] | null
          whatsapp_booking: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          price_per_day_aed: number
          length_ft?: number | null
          guests_max?: number | null
          yacht_type?: string | null
          images?: string[] | null
          amenities?: string[] | null
          whatsapp_booking?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          price_per_day_aed?: number
          length_ft?: number | null
          guests_max?: number | null
          yacht_type?: string | null
          images?: string[] | null
          amenities?: string[] | null
          whatsapp_booking?: string | null
          created_at?: string | null
        }
      }
      supercars: {
        Row: {
          id: string
          brand: string
          model: string
          year: number | null
          price_per_day_aed: number
          images: string[] | null
          specs: Json | null
          whatsapp_booking: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          brand: string
          model: string
          year?: number | null
          price_per_day_aed: number
          images?: string[] | null
          specs?: Json | null
          whatsapp_booking?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          brand?: string
          model?: string
          year?: number | null
          price_per_day_aed?: number
          images?: string[] | null
          specs?: Json | null
          whatsapp_booking?: string | null
          created_at?: string | null
        }
      }
      leads: {
        Row: {
          id: string
          name: string
          email: string | null
          whatsapp: string
          interest_type: string[] | null
          budget_max: number | null
          message: string | null
          status: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          name: string
          email?: string | null
          whatsapp: string
          interest_type?: string[] | null
          budget_max?: number | null
          message?: string | null
          status?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          email?: string | null
          whatsapp?: string
          interest_type?: string[] | null
          budget_max?: number | null
          message?: string | null
          status?: string | null
          created_at?: string | null
        }
      }
      crypto_prices: {
        Row: {
          currency: string
          price_aed: number
          updated_at: string | null
        }
        Insert: {
          currency: string
          price_aed: number
          updated_at?: string | null
        }
        Update: {
          currency?: string
          price_aed?: number
          updated_at?: string | null
        }
      }
      events: {
        Row: {
          id: string
          title: string
          description: string | null
          price_aed: number
          event_date: string
          venue: string | null
          location: string | null
          category: string | null
          images: string[] | null
          tickets_available: number | null
          source: string | null
          created_at: string | null
        }
        Insert: {
          id?: string
          title: string
          description?: string | null
          price_aed: number
          event_date: string
          venue?: string | null
          location?: string | null
          category?: string | null
          images?: string[] | null
          tickets_available?: number | null
          source?: string | null
          created_at?: string | null
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          price_aed?: number
          event_date?: string
          venue?: string | null
          location?: string | null
          category?: string | null
          images?: string[] | null
          tickets_available?: number | null
          source?: string | null
          created_at?: string | null
        }
      }
    }
  }
}

export type Property = Database['public']['Tables']['properties']['Row']
export type Yacht = Database['public']['Tables']['yachts']['Row']
export type Supercar = Database['public']['Tables']['supercars']['Row']
export type Lead = Database['public']['Tables']['leads']['Row']
export type CryptoPrice = Database['public']['Tables']['crypto_prices']['Row']
export type Event = Database['public']['Tables']['events']['Row']
