import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Using dummy data for now - will connect to real API & Supabase later
    // Try to fetch from CoinGecko, but fallback to dummy data
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether&vs_currencies=aed',
        {
          headers: {
            'Content-Type': 'application/json',
          },
          next: { revalidate: 300 } // Cache for 5 minutes
        }
      )

      if (response.ok) {
        const data = await response.json()

        const prices = {
          BTC: data.bitcoin?.aed || 250000,
          ETH: data.ethereum?.aed || 9000,
          USDT: data.tether?.aed || 3.67
        }

        return NextResponse.json({ prices, cached: false })
      }
    } catch {
      console.log('CoinGecko API unavailable, using dummy prices')
    }

    // Return dummy/fallback prices
    return NextResponse.json({
      prices: {
        BTC: 250000,
        ETH: 9000,
        USDT: 3.67
      },
      cached: false
    }, { status: 200 })
  } catch (error) {
    console.error('Error fetching crypto prices:', error)
    
    // Return fallback prices
    return NextResponse.json({
      prices: {
        BTC: 250000,
        ETH: 9000,
        USDT: 3.67
      },
      cached: false,
      error: 'Using fallback prices'
    }, { status: 200 })
  }
}

export const dynamic = 'force-dynamic'
