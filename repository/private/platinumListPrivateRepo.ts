// /repositories/platinumlist.repo.ts

import { PlatinumlistQueryParams } from "@/interface/platinumlist_query_params";
import { buildQuery } from "@/utils/utils";

export class PlatinumListPrivateRepo {
  private baseUrl = process.env.PLATINUMLIST_BASE_URL;

  async getPlatinumListEvents(params: PlatinumlistQueryParams) {
    const url = buildQuery<PlatinumlistQueryParams>(params, new URL(this.baseUrl!));
    try {
      const res = await fetch(url, {
        headers: {
          "Api-Key": `${process.env.PLATINUMLIST_API_KEY}`,
          "Content-Type": "application/json",
          "Api-Currency": "AED",
        },
        cache: "force-cache",
        next: {
          revalidate: 3600,
        },
      },);
      return res.json();
    }
    catch (e) {
      throw new Error(e instanceof Error ? e.message : String(e))
    }


  }
}
