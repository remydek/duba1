'use client'

import { CurrencyProvider } from '@/contexts/CurrencyContext'
import { Card, CardContent } from './ui/card'
import { PageCoinSelector } from './PageCoinSelector'
import { useState, useMemo, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import debounce from 'lodash.debounce'
import type { CoinGeckoData } from '@/repository/public/coingecko'
import type { Experience } from '@/schemas/experience'

export function LocalSearchMinMax({ children, experience, coins }: {
    children: (filtered: Experience[]) => React.ReactNode
    experience: Experience[]
    coins: CoinGeckoData[]
}) {

    const defaultCoin = coins.find(c => c.symbol === 'btc') || coins[0]
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('')
    const [minBudget, setMinBudget] = useState<number | ''>('')
    const [maxBudget, setMaxBudget] = useState<number | ''>('')

    const debounceSetQuery = useMemo(
        () => debounce((value: string) => setQuery(value), 500),
        []
    )
    const handleSearch = (value: string) => {
        setSearch(value)
        debounceSetQuery(value)
    }
    useEffect(() => {
        if (typeof window === 'undefined') return
        const urlParams = new URLSearchParams(window.location.search)
        const searchParam = urlParams.get('search')
        if (searchParam) {
            setSearch(searchParam)
            debounceSetQuery(searchParam)
        }
            
    }, [debounceSetQuery])

    const filtered = useMemo(() => {
        const q = query.toLowerCase()

        return experience.filter(e => {
            const matchesSearch =
                e.title.toLowerCase().includes(q) ||
                (e.description || '').toLowerCase().includes(q)

            const price = typeof e.price_aed === 'string' ? 0 : e.price_aed
            const matchesMin = minBudget === '' || price >= minBudget
            const matchesMax = maxBudget === '' || price <= maxBudget

            return matchesSearch && matchesMin && matchesMax
        })
    }, [query, experience, minBudget, maxBudget])

    return (
        <CurrencyProvider defaultCoin={defaultCoin}>
            <div className="min-h-screen py-12">
                <div className="container mx-auto px-4">

                    <div className="sticky top-4 z-40 mb-8">
                        <Card>
                            <CardContent className="p-6">

                                <div className="mb-4 flex justify-end">
                                    <PageCoinSelector coins={coins} />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                                    <div className="flex items-center gap-2 rounded-lg px-3 py-2 border">
                                        <Search className="h-4 w-4" />
                                        <Input
                                            placeholder="Search experience..."
                                            value={search}
                                            onChange={e => handleSearch(e.target.value)}
                                            className="border-0 px-0"
                                        />
                                    </div>
                                    <div className="flex items-center gap-2 rounded-lg px-3 py-2 border">
                                        <Input
                                            type="number"
                                            placeholder="Min Budget"
                                            value={minBudget}
                                            onChange={e => setMinBudget(e.target.value ? Number(e.target.value) : '')}
                                        />
                                    </div>
                                    <div className="flex items-center gap-2 rounded-lg px-3 py-2 border">
                                        <Input
                                            type="number"
                                            placeholder="Max Budget"
                                            value={maxBudget}
                                            onChange={e => setMaxBudget(e.target.value ? Number(e.target.value) : '')}
                                        />
                                    </div>
                                </div>

                            </CardContent>
                        </Card>
                    </div>
                    {children(filtered)}
                </div>
            </div>
        </CurrencyProvider>
    )
}
