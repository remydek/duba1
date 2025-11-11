import { getTodayYachts } from "@/services/yachts"
import { Yacht } from "@/schemas/yacht"
import { NextRequest, NextResponse } from "next/server"
import { get_url_params } from "@/utils/get_url_params"

export async function GET(req: NextRequest) {
  const params : Record<string, string[]> = get_url_params(req.nextUrl.searchParams)
  const yachts: { data: Yacht[], count?: number } = await getTodayYachts(params)
  return NextResponse.json(yachts)
}
// export async function POST(req: Request) {
//     const body = await req.json()
//     return
// }