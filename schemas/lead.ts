import { z } from 'zod';

export const LeadRow = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().nullable(),
  whatsapp: z.string(),
  interest_type: z.array(z.string()).nullable(),
  budget_max: z.number().nullable(),
  message: z.string().nullable(),
  status: z.string().nullable(),
  created_at: z.string().nullable(),
});

export const LeadInsert = LeadRow.partial().extend({
  name: z.string(),
  whatsapp: z.string(),
});

export const LeadUpdate = LeadRow.partial();

export type Lead = z.infer<typeof LeadRow>;
export type LeadCreateInput = z.infer<typeof LeadInsert>;
export type LeadUpdateInput = z.infer<typeof LeadUpdate>;
