import { z } from "zod";

export const MediaStackQueryParams = z.object({
  keywords: z.string().optional(),
  access_key: z.string().optional(),
  sources: z.string().optional(),
  categories: z.string().optional(),
  countries: z.string().optional(),
  languages: z.string().optional(),
  date: z.string().optional(),
  sort: z.enum(["published_desc", "published_asc", "popularity"]).optional(),
  limit: z.number().optional(),
  offset: z.number().optional(),
});

export type MediaStackQueryParams = z.infer<typeof MediaStackQueryParams>;


export const MediaStackFirstKey = Object.keys(MediaStackQueryParams.shape)[0];