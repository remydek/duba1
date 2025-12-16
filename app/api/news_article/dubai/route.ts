
import { NewsArticlePrisma } from "@/services/private/NewsArticlePrisma";
import { NextResponse } from "next/server";

const service = new NewsArticlePrisma();

export async function GET(req: Request) {
  const url = new URL(req.url);
  const params = Object.fromEntries(url.searchParams.entries());

  const data = await service.getData(params);
  return NextResponse.json({ data: data, });
}
