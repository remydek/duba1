import { z } from "zod";

export const PlatinumlistQueryParams = z.object({
  search: z.string().optional(),
  has_tickets: z.string().optional(),
  start_from: z.number().optional(),
  start_to: z.number().optional(),
  end_from: z.number().optional(),
  end_to: z.number().optional(),
  "event_type.id": z.union([z.number(), z.array(z.number())]).optional(),
  is_online: z.number().optional(),
  status: z.enum(["approved", "on sale", "pre-register", "pre-sale", "sold out"]).optional(),
  per_page: z.number().optional(),
  page: z.number().optional(),
  sort: z.string().optional(),
});

export type PlatinumlistQueryParams = z.infer<typeof PlatinumlistQueryParams>;

export const PlatinumlistFirstKey = Object.keys(PlatinumlistQueryParams.shape)[0]; // "search"