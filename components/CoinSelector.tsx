'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/utils/utils'
import { CoinGeckoData } from '@/repository/public/coingecko'
import Image from 'next/image'

interface CoinSelectorProps {
  coins: CoinGeckoData[]
  selectedCoin: CoinGeckoData | null
  onSelect: (coin: CoinGeckoData) => void
  compact?: boolean
}

export function CoinSelector({ coins, selectedCoin, onSelect, compact = false }: CoinSelectorProps) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Coin Selector Button */}
      <Button
        variant="outline"
        role="combobox"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className={cn(
          "justify-between bg-background border-primary/30 hover:text-primary/90 hover:border-primary/50",
          compact ? "w-[140px]" : "w-[180px]"
        )}
      >
        {/* Selected Coin Display */}
        {selectedCoin ? (
          <div className="flex items-center gap-2 overflow-hidden">
            <Image
              src={selectedCoin.image}
              alt={selectedCoin.name}
              width={20}
              height={20}
              className="shrink-0 rounded-full"
            />
            <span className="font-semibold uppercase truncate">{selectedCoin.symbol}</span>
          </div>
        ) : (
          "Select coin..."
        )}
        <ChevronDown className={cn("ml-2 h-4 w-4 shrink-0 opacity-50 transition-transform", open && "rotate-180")} />
      </Button>

      {/* Crypto Dropdown Menu */}
      {open && (
        <div className="absolute z-[100] mt-2 w-[320px] rounded-lg border border-border bg-card shadow-lg">
          {/* Search Input */}
          <div className="p-3 border-b border-border">
            <div className="flex items-center gap-2 bg-background rounded-md px-3 py-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search crypto..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border-0 focus-visible:ring-0 px-0 bg-transparent h-auto py-0"
              />
            </div>
          </div>

          {/* Coin List (Top 50) */}
          <div className="max-h-[300px] overflow-y-auto p-2">
            {filteredCoins.length === 0 ? (
              <div className="py-6 text-center text-sm text-muted-foreground">
                No cryptocurrency found.
              </div>
            ) : (
              filteredCoins.slice(0, 50).map((coin) => (
                <button
                  key={coin.id}
                  onClick={() => {
                    onSelect(coin)
                    setOpen(false)
                    setSearch('')
                  }}
                  className={cn(
                    "w-full flex items-center gap-3 p-3 rounded-md hover:bg-accent transition-colors text-left group",
                    selectedCoin?.id === coin.id && "bg-accent"
                  )}
                >
                  {/* Coin Image */}
                  <Image
                    src={coin.image}
                    alt={coin.name}
                    width={28}
                    height={28}
                    className="shrink-0 rounded-full"
                  />

                  {/* Coin Name & Symbol */}
                  <div className="flex-1 overflow-hidden">
                    <div className="font-medium text-foreground group-hover:text-white transition-colors">{coin.name}</div>
                    <div className="text-xs text-muted-foreground uppercase group-hover:text-white transition-colors">
                      {coin.symbol}
                    </div>
                  </div>

                  {/* Coin Price & Rank */}
                  <div className="text-right text-sm">
                    <div className="font-semibold text-xs text-foreground group-hover:text-white transition-colors">AED {coin.current_price.toLocaleString()}</div>
                    {coin.market_cap_rank && (
                      <div className="text-xs text-muted-foreground group-hover:text-white transition-colors">
                        #{coin.market_cap_rank}
                      </div>
                    )}
                  </div>
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}
