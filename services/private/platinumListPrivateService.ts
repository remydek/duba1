import { platinum_list_params } from "@/constants/parameters/platinumlist_events";
import { transformPlatinumlistToEvent } from "@/data_transformers/platinumlist_transform";
import { PlatinumlistQueryParams } from "@/interface/platinumlist_query_params";
import { PlatinumListPrivateRepo } from "@/repository/private/platinumListPrivateRepo";
import { PlatinumlistMeta } from "@/schemas/platinumlist-events";
import type { Event } from "@/schemas/event";
import { BasePrivateServiceInterface } from "@/interface/service_interfaces";


export class PlatinumListService implements BasePrivateServiceInterface<{ data: Event[], count?: number, meta?: PlatinumlistMeta }> {
  constructor(private repo: PlatinumListPrivateRepo = new PlatinumListPrivateRepo()) { }

  async getData(params: PlatinumlistQueryParams = platinum_list_params): Promise<{ data: Event[], count?: number, meta?: PlatinumlistMeta }> {
    const raw = await this.repo.getPlatinumListEvents(params);
    if (raw.error) {
      return {
        data: [],
        count: 0,
        meta: {} as PlatinumlistMeta
      }
    }
    const data = await raw.data.map(transformPlatinumlistToEvent)
    return {
      data,
      count: raw.meta.pagination.count,
      meta: raw.meta
    }
  }
}
