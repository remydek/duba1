'use client'

import { CurrencyProvider } from '@/contexts/CurrencyContext'
import { Card, CardContent } from './ui/card'
import { PageCoinSelector } from './PageCoinSelector'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { Button } from './ui/button'
import { useEffect, useState } from 'react'
import { CoinGeckoData } from '@/repository/public/coingecko'
import { platinum_list_params } from '@/constants/parameters/platinumlist_events'

export function ApiParamSearchMinMax({
    children,
    coins
}: {
    children: React.ReactNode
    coins: CoinGeckoData[]
}) {
    const defaultCoin = coins.find(c => c.symbol === 'btc') || coins[0]
    const [searchInput, setSearchInput] = useState('')

    useEffect(() => {
        if (typeof window === 'undefined') return
        const urlParams = new URLSearchParams(window.location.search)
        const searchParam = urlParams.get('search')
        if (searchParam) setSearchInput(searchParam)
    }, [])

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (typeof window === 'undefined') return

        const url = new URL(window.location.href)
        url.searchParams.set('search', searchInput)

        Object.entries(platinum_list_params).forEach(([key, value]) => {
            url.searchParams.set(key, String(value))
        })

        window.location.assign(url.toString())
    }
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

                                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">

                                    <form onSubmit={(e) => {
                                        e.preventDefault();
                                        handleSearch(e);
                                    }}>
                                        <div className="flex items-center gap-2 rounded-lg px-3 py-2 border grid-cols-3">
                                            <Search className="h-4 w-4" />
                                            <Input
                                                placeholder="Search experience..."
                                                value={searchInput}
                                                onChange={(e) => setSearchInput(e.target.value)}
                                                className="border-0 px-0"
                                            />
                                        </div>
                                        <div className="flex justify-end mt-4">
                                            <Button className='w-36' type="submit">Search</Button>
                                        </div>
                                    </form>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    {children}
                </div>
            </div>
        </CurrencyProvider>
    )
}
