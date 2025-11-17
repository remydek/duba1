import { platinum_list_params } from "@/constants/parameters/platinumlist_events";
import { transformPlatinumlistToEvent } from "@/data_transformers/platinumlist_transform";
import { PlatinumlistQueryParams } from "@/interface/platinumlist_query_params";
import { PlatinumListPrivateRepo } from "@/repository/private/platinumListPrivateRepo";
import { PlatinumlistMeta } from "@/schemas/platinumlist-events";
import type { Event } from "@/schemas/event";

export class PlatinumListService {
  constructor(private repo: PlatinumListPrivateRepo = new PlatinumListPrivateRepo()) {}

  async getEvents(params: PlatinumlistQueryParams = platinum_list_params): Promise<{ data: Event[], count?: number, meta?: PlatinumlistMeta }> {
    const raw = await this.repo.getPlatinumListEvents(params);
    if (raw.error) {
      return { data: [], count: 0, meta: {} as PlatinumlistMeta };
    }
    const data = raw.data.map(transformPlatinumlistToEvent);
    return { data, count: raw.meta.pagination.count, meta: raw.meta };
  }

  async getToday(params: PlatinumlistQueryParams = platinum_list_params): Promise<{ data: Event[], count?: number, meta?: PlatinumlistMeta }> {
    const raw = await this.repo.getPlatinumListEvents(params);
    if (raw.error) {
      return { data: [], count: 0, meta: {} as PlatinumlistMeta };
    }
    const data = raw.data.map(transformPlatinumlistToEvent);
    const todayUTC = new Date().toISOString().split('T')[0];
    const todayEvents = data.filter((event: Event) => new Date(event.event_date).toISOString().split('T')[0] === todayUTC);
    return { data: todayEvents, count: raw.meta.pagination.count, meta: raw.meta };
  }

  async getWeeklyEvents(params: PlatinumlistQueryParams = platinum_list_params): Promise<{ data: Event[], count?: number, meta?: PlatinumlistMeta }> {
    const raw = await this.repo.getPlatinumListEvents(params);
    if (raw.error) {
      return { data: [], count: 0, meta: {} as PlatinumlistMeta };
    }
    const data = raw.data.map(transformPlatinumlistToEvent);
    const today = new Date();
    const weekFromNow = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    const weeklyEvents = data.filter((event: Event) => {
      const eventDate = new Date(event.event_date);
      return eventDate >= today && eventDate <= weekFromNow;
    });
    return { data: weeklyEvents, count: raw.meta.pagination.count, meta: raw.meta };
  }
}
