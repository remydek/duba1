'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Building, Ship, Car } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CoinSelector } from '@/components/CoinSelector'
import { CoinGeckoData } from '@/repository/public/coingecko'
import { formatAED } from '@/repository/public/crypto'
import { useRouter } from 'next/navigation'
import { cn } from '@/utils/utils'

interface HeroCalculatorProps {
  coins: CoinGeckoData[]
}

type Category = 'properties' | 'yachts' | 'supercars'

export function HeroCalculator({ coins }: HeroCalculatorProps) {
  const router = useRouter()
  const [amount, setAmount] = useState('')
  const [selectedCoin, setSelectedCoin] = useState<CoinGeckoData | null>(
    coins.find(c => c.symbol === 'btc') || coins[0] || null
  )
  const [totalAED, setTotalAED] = useState(0)
  const [selectedCategories, setSelectedCategories] = useState<Set<Category>>(new Set())

  useEffect(() => {
    const value = parseFloat(amount) || 0
    if (selectedCoin) {
      setTotalAED(value * selectedCoin.current_price)
    }
  }, [amount, selectedCoin])

  const toggleCategory = (category: Category) => {
    setSelectedCategories(prev => {
      const newSet = new Set(prev)
      if (newSet.has(category)) {
        newSet.delete(category)
      } else {
        newSet.add(category)
      }
      return newSet
    })
  }

  const handleShowResults = () => {
    if (selectedCategories.size === 0) {
      // No categories selected, redirect to properties by default
      router.push('/properties')
    } else if (selectedCategories.size === 1) {
      // Single category, redirect to that category page
      const category = Array.from(selectedCategories)[0]
      router.push(`/${category}`)
    } else {
      // Multiple categories, redirect to aggregated search
      const categories = Array.from(selectedCategories).join(',')
      router.push(`/search?categories=${categories}`)
    }
  }

  return (
   <div className="inline-block bg-card/50 backdrop-blur-md border border-primary/30 rounded-xl p-3 sm:p-4 mb-6 sm:mb-8 shadow-[0_0_25px_-5px_rgba(212,175,55,0.3)] w-full max-w-[600px] relative z-50">
  <div className="flex flex-wrap sm:flex-nowrap gap-2 items-center justify-center sm:justify-start">
    <span className="text-base sm:text-lg font-bold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] whitespace-nowrap">
      I Want to spend
    </span>

    <Input
      type="number"
      step="0.000001"
      placeholder="0.00"
      value={amount}
      onChange={(e) => {
        const val = e.target.value
        if (val.length <= 10 || val === '') {
          setAmount(val)
        }
      }}
      maxLength={10}
      className="w-full sm:w-[120px] text-base font-semibold bg-background/80 backdrop-blur border-primary/20"
    />

    <CoinSelector
      coins={coins}
      selectedCoin={selectedCoin}
      onSelect={setSelectedCoin}
      compact
    />

    <Button onClick={handleShowResults} size="sm" className="w-full sm:w-auto shrink-0">
      Show Results <ArrowRight className="ml-1 h-3 w-3" />
    </Button>
  </div>

  <div className="flex flex-wrap sm:flex-nowrap gap-2 mt-4 justify-center">
    <button
      onClick={() => toggleCategory('properties')}
      className={cn(
        "inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all",
        selectedCategories.has('properties')
          ? "bg-primary text-primary-foreground shadow-[0_0_15px_-3px_rgba(212,175,55,0.6)]"
          : "bg-background/80 text-foreground border border-primary/30 hover:bg-primary/10 hover:text-white"
      )}
    >
      <Building className="h-4 w-4" />
      REAL ESTATE
    </button>

    <button
      onClick={() => toggleCategory('yachts')}
      className={cn(
        "inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all",
        selectedCategories.has('yachts')
          ? "bg-primary text-primary-foreground shadow-[0_0_15px_-3px_rgba(212,175,55,0.6)]"
          : "bg-background/80 text-foreground border border-primary/30 hover:bg-primary/10 hover:text-white"
      )}
    >
      <Ship className="h-4 w-4" />
      YACHTS
    </button>

    <button
      onClick={() => toggleCategory('supercars')}
      className={cn(
        "inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all",
        selectedCategories.has('supercars')
          ? "bg-primary text-primary-foreground shadow-[0_0_15px_-3px_rgba(212,175,55,0.6)]"
          : "bg-background/80 text-foreground border border-primary/30 hover:bg-primary/10 hover:text-white"
      )}
    >
      <Car className="h-4 w-4" />
      SUPERCARS
    </button>
  </div>

  {totalAED > 0 && (
    <div className="mt-3 text-center">
      <p className="text-base sm:text-lg font-bold text-primary drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]">
        ≈ {formatAED(totalAED)}
      </p>
    </div>
  )}
</div>

  )
}
