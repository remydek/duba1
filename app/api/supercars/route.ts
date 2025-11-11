import { SupercarPublicService } from "@/services/public/supercars"
import { Supercar } from "@/schemas/supercar"
import { NextRequest, NextResponse } from "next/server"
import { get_url_params } from "@/utils/get_url_params"

export async function GET(req: NextRequest) {
  const params : Record<string, string[]> = get_url_params(req.nextUrl.searchParams)
  const supercarPublicService = new SupercarPublicService()
  const supercars: { data: Supercar[], count?: number } = await supercarPublicService.getTodaySupercars(params)
  return NextResponse.json(supercars)
}
// export async function POST(req: Request) {
//     const body = await req.json()
//     return
// }