// /app/api/platinumlist/route.ts
import { PlatinumListService } from "@/services/private/platinumListPrivateService";
import { platinum_list_params } from "@/constants/parameters/platinumlist_events";
import { NextResponse } from "next/server";

const service = new PlatinumListService();

export async function GET(req: Request) {
  const url = new URL(req.url);
  const params = Object.fromEntries(url.searchParams.entries());

  const mergedParams = Object.fromEntries([
    ...Object.entries(platinum_list_params),
    ...Object.entries(params),
  ]);

  const data = await service.getData(mergedParams);
  return NextResponse.json({ data: data.data, count: data.count, meta: data.meta });
}
