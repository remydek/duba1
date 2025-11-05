import { Crypto } from '@/schemas/crypto'

export const coinGecko: Crypto[] = [
    {
        id: 'bitcoin',
        symbol: 'btc',
        name: 'Bitcoin',
        image: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png',
        current_price: 250000,
        price_change_24h: 0,
        market_cap_rank: 1,
    },
    {
        id: 'ethereum',
        symbol: 'eth',
        name: 'Ethereum',
        image: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png',
        current_price: 12000,
        price_change_24h: 0,
        market_cap_rank: 2,
    },
    {
        id: 'tether',
        symbol: 'usdt',
        name: 'Tether',
        image: 'https://assets.coingecko.com/coins/images/325/small/Tether.png',
        current_price: 3.67,
        price_change_24h: 0,
        market_cap_rank: 3,
    },
]