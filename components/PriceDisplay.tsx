'use client'

import { useState } from 'react'
import { formatAED } from '@/lib/crypto'
import { convertAED, formatCurrency, convertToCrypto, formatCryptoAmount, EXCHANGE_RATES } from '@/lib/currency'
import { useCurrency } from '@/contexts/CurrencyContext'

interface PriceDisplayProps {
  priceAED: number
  className?: string
  cryptoClassName?: string
  showCrypto?: boolean
}

export function PriceDisplay({ priceAED, className = '', cryptoClassName = '', showCrypto = true }: PriceDisplayProps) {
  const [showTooltip, setShowTooltip] = useState(false)
  const { selectedCoin } = useCurrency()

  const cryptoAmount = selectedCoin
    ? convertToCrypto(priceAED, selectedCoin.current_price)
    : 0

  return (
    <div>
      <div
        className="relative inline-block"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <p className={className}>
          {formatAED(priceAED)}
        </p>

        {/* Currency Tooltip */}
        {showTooltip && (
          <div className="absolute z-50 bottom-full left-0 mb-2 bg-card border border-primary/30 rounded-lg p-3 shadow-[0_0_20px_-5px_rgba(212,175,55,0.4)] backdrop-blur-md min-w-[200px]">
            <div className="text-xs space-y-1">
              {(Object.keys(EXCHANGE_RATES) as Array<keyof typeof EXCHANGE_RATES>).map((currency) => (
                <div key={currency} className="flex justify-between gap-4">
                  <span className="text-muted-foreground">{currency}:</span>
                  <span className="font-semibold text-foreground">
                    {formatCurrency(convertAED(priceAED, currency), currency)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Crypto Price */}
      {showCrypto && selectedCoin && (
        <p className={cryptoClassName}>
          ≈ {formatCryptoAmount(cryptoAmount)} {selectedCoin.symbol.toUpperCase()}
        </p>
      )}
    </div>
  )
}
