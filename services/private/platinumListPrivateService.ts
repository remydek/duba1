// /services/platinumlist.service.ts
import { transformPlatinumlistToEvent } from "@/data_transformers/platinumlist_transform";
import { PlatinumlistQueryParams } from "@/interface/platinumlist_query_params";
import { PlatinumListPrivateRepo } from "@/repository/private/platinumListPrivateRepo";
import { PlatinumlistResponse } from "@/schemas/platinumlist-events";


export class PlatinumListService {
  constructor(private repo: PlatinumListPrivateRepo) {}

  async getEvents(params: PlatinumlistQueryParams): Promise<PlatinumlistResponse> {
    const raw = await this.repo.getPlatinumListEvents(params);
    if (raw.error) {
      return raw.error
    }
    const events = await raw.data.map(transformPlatinumlistToEvent)
    return events
  }
}
