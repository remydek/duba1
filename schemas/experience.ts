import { z } from 'zod';

export const ExperienceRow = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  price_aed: z.number().or(z.string()),
  location: z.string().nullable(),
  category: z.string().nullable(),
  images: z.array(z.string()).nullable(),
  source: z.string().nullable(),
  url: z.string().optional(),
  created_at: z.string().nullable(),
});

export type Experience = z.infer<typeof ExperienceRow>;
