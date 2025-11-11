import { PropertyPublicService } from "@/services/public/properties"
import { Property } from "@/schemas/property"
import { NextRequest, NextResponse } from "next/server"
import { get_url_params } from "@/utils/get_url_params"

export async function GET(req: NextRequest) {
  const params : Record<string, string[]> = get_url_params(req.nextUrl.searchParams)
  const propertyPublicService = new PropertyPublicService()
  const properties: { data: Property[], count?: number } = await propertyPublicService.getTodayProperties(params)
  return NextResponse.json(properties)
}
// export async function POST(req: Request) {
//     const body = await req.json()
//     return
// }