// /repositories/platinumlist.repo.ts

import { PlatinumlistQueryParams } from "@/interface/platinumlist_query_params";

export class PlatinumListPrivateRepo {
  private baseUrl = process.env.PLATINUMLIST_BASE_URL;

  private buildQuery(params: PlatinumlistQueryParams) {
    const url = new URL(this.baseUrl!);
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        if (Array.isArray(value)) {
          value.forEach((v) => url.searchParams.append(`${key}[]`, v.toString()));
        } else {
          url.searchParams.append(key, value.toString());
        }
      }
    });
    return url.toString();
  }

  async getPlatinumListEvents(params: PlatinumlistQueryParams) {
    const url = this.buildQuery(params);
    try {
      const res = await fetch(url, {
        headers: {
          "Api-Key": `${process.env.PLATINUMLIST_API_KEY}`,
          "Content-Type": "application/json",
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
