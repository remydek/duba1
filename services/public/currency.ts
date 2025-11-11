// Exchange rates as of approximate values (AED to other currencies)
// In production, these should be fetched from a live API
export const EXCHANGE_RATES = {
  USD: 0.272, // 1 AED = 0.272 USD
  EUR: 0.25,  // 1 AED = 0.25 EUR
  GBP: 0.21,  // 1 AED = 0.21 GBP
  AUD: 0.42,  // 1 AED = 0.42 AUD
  JPY: 40.5,  // 1 AED = 40.5 JPY
  CNH: 1.97,  // 1 AED = 1.97 CNH (Offshore Chinese Yuan)
  HKD: 2.12,  // 1 AED = 2.12 HKD
  CHF: 0.24,  // 1 AED = 0.24 CHF
}

export const CURRENCY_SYMBOLS = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  AUD: 'A$',
  JPY: '¥',
  CNH: '¥',
  HKD: 'HK$',
  CHF: 'CHF',
}

export function convertAED(amountAED: number, toCurrency: keyof typeof EXCHANGE_RATES): number {
  return amountAED * EXCHANGE_RATES[toCurrency]
}

export function formatCurrency(amount: number, currency: keyof typeof EXCHANGE_RATES): string {
  const symbol = CURRENCY_SYMBOLS[currency]
  const formatted = amount.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })

  return `${symbol}${formatted}`
}

export function convertToCrypto(amountAED: number, coinPriceInAED: number): number {
  return amountAED / coinPriceInAED
}

export function formatCryptoAmount(amount: number, decimals: number = 4): string {
  if (amount >= 1) {
    return amount.toFixed(2)
  }
  return amount.toFixed(decimals)
}
