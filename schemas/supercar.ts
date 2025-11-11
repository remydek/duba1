import { z } from 'zod';

export const SupercarRow = z.object({
  id: z.string(),
  brand: z.string(),
  model: z.string(),
  year: z.number().nullable(),
  price_per_day_aed: z.number(),
  images: z.array(z.string()).nullable(),
  specs: z.json().nullable(),
  whatsapp_booking: z.string().nullable(),
  created_at: z.string().nullable(),
});

export const SupercarInsert = SupercarRow.partial().extend({
  brand: z.string(),
  model: z.string(),
  price_per_day_aed: z.number(),
});

export const SupercarUpdate = SupercarRow.partial();

export type Supercar = z.infer<typeof SupercarRow>;
export type SupercarCreateInput = z.infer<typeof SupercarInsert>;
export type SupercarUpdateInput = z.infer<typeof SupercarUpdate>;
