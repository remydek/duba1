'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import { CoinGeckoData } from '@/lib/coingecko'

interface CurrencyContextType {
  selectedCoin: CoinGeckoData | null
  setSelectedCoin: (coin: CoinGeckoData | null) => void
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined)

export function CurrencyProvider({ children, defaultCoin }: { children: ReactNode; defaultCoin?: CoinGeckoData | null }) {
  const [selectedCoin, setSelectedCoin] = useState<CoinGeckoData | null>(defaultCoin || null)

  return (
    <CurrencyContext.Provider value={{ selectedCoin, setSelectedCoin }}>
      {children}
    </CurrencyContext.Provider>
  )
}

export function useCurrency() {
  const context = useContext(CurrencyContext)
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider')
  }
  return context
}
