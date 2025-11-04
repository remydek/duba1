import { z } from 'zod';

export const YachtRow = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  price_per_day_aed: z.number(),
  length_ft: z.number().nullable(),
  guests_max: z.number().nullable(),
  yacht_type: z.string().nullable(),
  images: z.array(z.string()).nullable(),
  amenities: z.array(z.string()).nullable(),
  whatsapp_booking: z.string().nullable(),
  created_at: z.string().nullable(),
});

export const YachtInsert = YachtRow.partial().extend({
  name: z.string(),
  price_per_day_aed: z.number(),
});

export const YachtUpdate = YachtRow.partial();

export type Yacht = z.infer<typeof YachtRow>;
export type YachtCreateInput = z.infer<typeof YachtInsert>;
export type YachtUpdateInput = z.infer<typeof YachtUpdate>;
