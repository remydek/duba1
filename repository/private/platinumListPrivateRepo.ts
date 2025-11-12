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
    console.log(url);
    const res = await fetch(url, {
      headers: {
        "Api-Key": `${process.env.PLATINUMLIST_API_KEY}`,
        "Content-Type": "application/json",
      },
    });
    return res.json();
  }
}
