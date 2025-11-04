import { z } from 'zod';

export const PropertyRow = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  price_aed: z.number(),
  property_type: z.enum(['villa', 'apartment', 'penthouse', 'townhouse']).nullable(),
  bedrooms: z.number().nullable(),
  bathrooms: z.number().nullable(),
  sqft: z.number().nullable(),
  area: z.string().nullable(),
  developer: z.string().nullable(),
  crypto_verified: z.boolean().nullable(),
  golden_visa_eligible: z.boolean().nullable(),
  images: z.array(z.string()).nullable(),
  amenities: z.array(z.string()).nullable(),
  status: z.string().nullable(),
  latitude: z.number().nullable(),
  longitude: z.number().nullable(),
  created_at: z.string().nullable(),
});

export const PropertyInsert = PropertyRow.partial().extend({
  title: z.string(),
  price_aed: z.number(),
});

export const PropertyUpdate = PropertyRow.partial();

export type Property = z.infer<typeof PropertyRow>;
export type PropertyCreateInput = z.infer<typeof PropertyInsert>;
export type PropertyUpdateInput = z.infer<typeof PropertyUpdate>;
