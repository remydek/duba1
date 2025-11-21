import { BokunPrivateRepository } from '@/repository/private/BokunPrivateRepo'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams

  const url = params.get('url')
  const repo = new BokunPrivateRepository()

  const experience = await repo.getExperience(url!, 'GET')
  return NextResponse.json(experience) 
}