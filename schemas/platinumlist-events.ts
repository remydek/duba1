import { z } from "zod";

const imageSchema = z.object({
  src: z.string().url(),
  width: z.number(),
  height: z.number(),
});

const priceSchema = z.object({
  data: z.object({
    price: z.number(),
    is_sold_out: z.boolean(),
    currency: z.string(),
  }),
});
const venueSchema = z.object({
  data: z.array(z.object({
    id: z.number(),
    name: z.string(),
    info: z.string().nullable(),
    location: z.string(),
    phone: z.string().nullable(),
    website: z.string().nullable(),
    latitude: z.string(),
    longitude: z.string(),
    image_big: imageSchema,
    image_small: imageSchema,
  }))
})

const eventSchema = z.object({
  id: z.number(),
  name: z.string(),
  start: z.number(),
  end: z.number(),
  timezone: z.string(),
  vat: z.number(),
  image_big: imageSchema,
  image_medium: imageSchema,
  image_small: imageSchema,
  image_full: imageSchema,
  is_extra_security_mode_on: z.boolean(),
  has_tickets: z.boolean(),
  has_sales_started: z.boolean(),
  description: z.string(),
  text_teaser: z.string(),
  entry_gate_mode: z.number(),
  url: z.string().url(),
  white_label_url: z.string().nullable(),
  is_attraction: z.boolean(),
  is_online: z.boolean(),
  status: z.string(),
  rating: z.number(),
  artwork_label: z.string().nullable(),
  has_dynamic_tickets: z.boolean(),
  favorite_url: z.string().url(),
  iframe_url: z.string().url(),
  iframe_whitelabel_url: z.string().nullable(),
  price: priceSchema,
  venues: venueSchema,
});

const paginationSchema = z.object({
  total: z.number(),
  count: z.number(),
  per_page: z.number(),
  current_page: z.number(),
  total_pages: z.number(),
  links: z.object({
    previous: z.string().url(),
    next: z.string().url(),
  }),
});

const metaSchema = z.object({
  pagination: paginationSchema,
});

export const platinumlistResponseSchema = z.object({
  data: z.array(eventSchema),
  meta: metaSchema,
});

// Type inference
export type PlatinumlistResponse = z.infer<typeof platinumlistResponseSchema>;

export type PlatinumlistEvent = z.infer<typeof eventSchema>;
export type PlatinumlistMeta = z.infer<typeof metaSchema>;
export type PlatinumlistPagination  = z.infer<typeof paginationSchema>;