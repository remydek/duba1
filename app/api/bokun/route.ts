import { BokunPrivateService } from '@/services/private/BokunPrivateService'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams

  const url = params.get('url')
  const service = new BokunPrivateService()

  const experience = await service.getFeaturedExperiences()
  return NextResponse.json(experience) 
}