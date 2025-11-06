'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Coins } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/utils/utils'
import { CoinGeckoData } from '@/repository/coingecko'
import { useCurrency } from '@/contexts/CurrencyContext'
import Image from 'next/image'

interface PageCoinSelectorProps {
  coins: CoinGeckoData[]
}

export function PageCoinSelector({ coins }: PageCoinSelectorProps) {
  const [open, setOpen] = useState(false)
  const [updateTime, setUpdateTime] = useState<string>('')
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { selectedCoin, setSelectedCoin } = useCurrency()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    // Set initial update time
    const now = new Date()
    setUpdateTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }))
  }, [])

  return (
    <div className="flex items-center gap-3">
      {/* Last Updated Timestamp */}
      <div className="text-sm text-muted-foreground">
        Updated Today on <span className="font-semibold text-foreground">{updateTime}</span>
      </div>

      {/* Coin Selector Dropdown */}
      <div className="relative" ref={dropdownRef}>
      <Button
        variant="outline"
        onClick={() => setOpen(!open)}
        className="bg-card/50 backdrop-blur-md border-primary/30 hover:border-primary/50 shadow-[0_0_15px_-5px_rgba(212,175,55,0.2)]"
      >
        {/* Selected Coin Display */}
        {selectedCoin ? (
          <div className="flex items-center gap-2">
            <Image
              src={selectedCoin.image}
              alt={selectedCoin.name}
              width={20}
              height={20}
              className="rounded-full"
            />
            <span className="font-semibold uppercase">{selectedCoin.symbol}</span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Coins className="h-4 w-4" />
            <span>Select Crypto</span>
          </div>
        )}
        <ChevronDown className={cn("ml-2 h-4 w-4 transition-transform", open && "rotate-180")} />
      </Button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-[280px] rounded-lg border border-border bg-card shadow-lg z-50 max-h-[400px] overflow-y-auto">
          <div className="p-2">
            {/* Coin List (Top 20) */}
            {coins.slice(0, 20).map((coin) => (
              <button
                key={coin.id}
                onClick={() => {
                  setSelectedCoin(coin)
                  setOpen(false)
                }}
                className={cn(
                  "w-full flex items-center gap-3 p-3 rounded-md hover:bg-accent transition-colors text-left group",
                  selectedCoin?.id === coin.id && "bg-accent"
                )}
              >
                <Image
                  src={coin.image}
                  alt={coin.name}
                  width={28}
                  height={28}
                  className="rounded-full"
                />
                {/* Coin Name and Symbol */}
                <div className="flex-1 overflow-hidden">
                  <div className="font-medium text-foreground group-hover:text-white transition-colors">{coin.name}</div>
                  <div className="text-xs text-muted-foreground uppercase group-hover:text-white transition-colors">
                    {coin.symbol}
                  </div>
                </div>

                {/* Coin Price */}
                <div className="text-right text-sm">
                  <div className="font-semibold text-xs text-foreground group-hover:text-white transition-colors">
                    AED {coin.current_price.toLocaleString()}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
      </div>
    </div>
  )
}
