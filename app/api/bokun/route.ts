import { BokunPrivateService } from '@/services/private/BokunPrivateService'
import { NextResponse } from 'next/server'

export async function GET() {
  const service = new BokunPrivateService()

  const experience = await service.getFeatured()
  return NextResponse.json(experience) 
}