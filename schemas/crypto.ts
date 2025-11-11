import z from "zod";

export const CryptoSchema = z.object({
  id: z.string(),
  symbol: z.string(),
  name: z.string(),
  image: z.string().url(),
  current_price: z.number().int().positive(),
  price_change_24h: z.number().int().default(0),
  market_cap_rank: z.number().int().positive().gte(1),
})

export type Crypto = z.infer<typeof CryptoSchema>;