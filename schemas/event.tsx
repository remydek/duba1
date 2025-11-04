import { z } from 'zod';

export const EventRow = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  price_aed: z.number(),
  event_date: z.string(),
  venue: z.string().nullable(),
  location: z.string().nullable(),
  category: z.string().nullable(),
  images: z.array(z.string()).nullable(),
  tickets_available: z.number().nullable(),
  source: z.string().nullable(),
  created_at: z.string().nullable(),
});

export const EventInsert = EventRow.partial().extend({
  title: z.string(),
  price_aed: z.number(),
  event_date: z.string(),
});

export const EventUpdate = EventRow.partial();

export type Event = z.infer<typeof EventRow>;
export type EventCreateInput = z.infer<typeof EventInsert>;
export type EventUpdateInput = z.infer<typeof EventUpdate>;
