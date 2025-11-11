export interface CryptoPrices {
  BTC: number
  ETH: number
  USDT: number
}

export function formatAED(amount: number): string {
  return new Intl.NumberFormat('en-AE', {
    style: 'currency',
    currency: 'AED',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatCrypto(amount: number, decimals: number = 2): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(amount)
}

export function convertAEDtoCrypto(aedAmount: number, prices: CryptoPrices) {
  return {
    BTC: aedAmount / prices.BTC,
    ETH: aedAmount / prices.ETH,
    USDT: aedAmount / prices.USDT,
  }
}

export function convertCryptoToAED(
  cryptoAmount: number,
  currency: keyof CryptoPrices,
  prices: CryptoPrices
): number {
  return cryptoAmount * prices[currency]
}

export async function fetchCryptoPrices(): Promise<CryptoPrices> {
  try {
    const response = await fetch('/api/crypto-prices', {
      cache: 'no-store'
    })
    const data = await response.json()
    return data.prices
  } catch (error) {
    console.error('Failed to fetch crypto prices:', error)
    // Return fallback prices
    return {
      BTC: 250000,
      ETH: 9000,
      USDT: 3.67
    }
  }
}
