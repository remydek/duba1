import { getTodayEvents } from "@/services/events"
import { Event, EventRow } from "@/schemas/event"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const params = Object.fromEntries(searchParams.entries())
  const events: Event[] = await getTodayEvents()
  const events_data = EventRow.parse(events)
  return NextResponse.json({
    params,
    events: events_data,
  })
}

// export async function POST(req: Request) {
//     const body = await req.json()
//     return
// }