// /app/api/platinumlist/route.ts
import { PlatinumListService } from "@/services/private/platinumListPrivateService";
import { PlatinumListPrivateRepo } from "@/repository/private/platinumListPrivateRepo";
import { NextResponse } from "next/server";

const repo = new PlatinumListPrivateRepo();
const service = new PlatinumListService(repo);

export async function GET(req: Request) {
  const url = new URL(req.url);
  const params = Object.fromEntries(url.searchParams.entries());

  const data = await service.getEvents({
    search: params.search,
    has_tickets: params.has_tickets,
    start_from: params.start_from ? Number(params.start_from) : Date.now() / 1000,
    start_to: params.start_to ? Number(params.start_to) : undefined,
    end_from: params.end_from ? Number(params.end_from) : undefined,
    end_to: params.end_to ? Number(params.end_to) : undefined,
    "event_type.id": params["event_type.id"] ? Number(params["event_type.id"]) : undefined,
    is_online: params.is_online ? Number(params.is_online) : undefined,
    status: params.status as "approved" | "on sale" | "pre-register" | "pre-sale" | "sold out",
    per_page: params.per_page ? Number(params.per_page) : 10,
    page: params.page ? Number(params.page) : 1,
    sort: "-rating",
  });

  return NextResponse.json(data);
}
