import { z } from 'zod';

export const EventRow = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  price_aed: z.number().or(z.string()),
  event_date: z.string().or(z.string().refine((val) => {
    const isoTZRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?$/
    return isoTZRegex.test(val)
  }, {
    message: 'Invalid datetime with timezone'
  })),
  venue: z.string().nullable(),
  location: z.string().nullable(),
  category: z.string().nullable(),
  images: z.array(z.string()).nullable(),
  tickets_available: z.number().nullable().or(z.string().nullable()),
  source: z.string().nullable(),
  url: z.string().nullable(),
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
