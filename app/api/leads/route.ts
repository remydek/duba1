import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const { name, email, whatsapp, interest_type, budget_max, message } = body

    // Validation
    if (!name || !whatsapp) {
      return NextResponse.json(
        { error: 'Name and WhatsApp are required' },
        { status: 400 }
      )
    }

    // Using dummy response for now - will connect to Supabase later
    // For now, just log the lead and return success
    console.log('Lead submission (dummy mode):', {
      name,
      email: email || null,
      whatsapp,
      interest_type: interest_type || [],
      budget_max: budget_max || null,
      message: message || null,
      status: 'new',
      timestamp: new Date().toISOString()
    })

    // Mock successful response
    const mockData = {
      id: `dummy-${Date.now()}`,
      name,
      email: email || null,
      whatsapp,
      interest_type: interest_type || [],
      budget_max: budget_max || null,
      message: message || null,
      status: 'new',
      created_at: new Date().toISOString()
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Lead submitted successfully (dummy mode)',
        data: mockData
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error submitting lead:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export const dynamic = 'force-dynamic'
