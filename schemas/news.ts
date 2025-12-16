import z from "zod";


export const NewsArticle = z.object({
  id: z.string().uuid().optional(),
  author: z.string().nullable().optional(),
  title: z.string(),
  slug: z.string().optional(),
  description: z.string().nullable().optional(),
  ai_title: z.string().nullable().optional(),
  ai_generated_summary: z.string().nullable().optional(),
  ai_description: z.string().nullable(),
  url: z.string().url(),
  source: z.string(),
  image: z.nullable(z.string().url()),
  category: z.string(),
  language: z.string(),
  country: z.string(),
  published_at: z.date(),
  created_at: z.date().optional()
});
export const MediaStackPagination = z.object({
  limit: z.number().int().positive(),
  offset: z.number().int().nonnegative(),
  count: z.number().int().positive(),
  total: z.number().int().positive(),
});
export const MediaStackReturnData = z.object({
  pagination: MediaStackPagination,
  data: z.array(NewsArticle),
})
export type NewsArticle = z.infer<typeof NewsArticle>;
export type MediaStackReturnData = z.infer<typeof MediaStackReturnData>;
export type MediaStackPagination = z.infer<typeof MediaStackPagination>;