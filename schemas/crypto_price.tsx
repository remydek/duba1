import { z } from 'zod';

export const CryptoPriceRow = z.object({
  currency: z.string(),
  price_aed: z.number(),
  updated_at: z.string().nullable(),
});

export const CryptoPriceInsert = CryptoPriceRow.partial().extend({
  currency: z.string(),
  price_aed: z.number(),
});

export const CryptoPriceUpdate = CryptoPriceRow.partial();

export type CryptoPrice = z.infer<typeof CryptoPriceRow>;
export type CryptoPriceCreateInput = z.infer<typeof CryptoPriceInsert>;
export type CryptoPriceUpdateInput = z.infer<typeof CryptoPriceUpdate>;
