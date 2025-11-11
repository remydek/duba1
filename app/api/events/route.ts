import { EventPublicService } from "@/services/public/events"
import { Event } from "@/schemas/event"
import { NextRequest, NextResponse } from "next/server"
import { get_url_params } from "@/utils/get_url_params"

export async function GET(req: NextRequest) {
  const params : Record<string, string[]> = get_url_params(req.nextUrl.searchParams)
  const eventPublicService = new EventPublicService()
  const events: { data: Event[], count?: number } = await eventPublicService.getTodayEvents(params)
  return NextResponse.json(events)
}
// export async function POST(req: Request) {
//     const body = await req.json()
//     return
// }