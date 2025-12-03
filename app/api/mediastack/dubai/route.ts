// /app/api/platinumlist/route.ts

   
import { MediaStackPrivateService } from "@/services/private/MediaStackPrivateService";
import { NextResponse } from "next/server";

const service = new MediaStackPrivateService();

export async function GET(req: Request) {
  const url = new URL(req.url);
  const params = Object.fromEntries(url.searchParams.entries());

  const data = await service.getData(params);
  return NextResponse.json({ data: data.data, count: data.pagination.count, meta: data.pagination });
}
