import { pagination } from "@/utils/supabase_pagination";
import z from "zod";


export const NewsArticle = z.object({
  author: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  url: z.string().url(),
  source: z.string(),
  image: z.nullable(z.string().url()),
  category: z.string(),
  language: z.string(),
  country: z.string(),
  published_at: z.string().datetime(),
});
export const MediaStackPagination = z.object({
  limit: z.number().int().positive(),
  offset: z.number().int().nonnegative(),
  count: z.number().int().positive(),
  total: z.number().int().positive(),
});
export const MediaStackReturnData = z.object({
  pagination: pagination,
  data: z.array(NewsArticle),
})
export type NewsArticle = z.infer<typeof NewsArticle>;
export type MediaStackReturnData = z.infer<typeof MediaStackReturnData>;