import { Ticket } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CurrencyProvider } from '@/contexts/CurrencyContext'
import {MediaStackFirstKey, MediaStackQueryParams} from '@/interface/mediastack_query_params'
import { getTopCoins } from '@/repository/public/coingecko'
import { ApiParamSearchMinMax } from '@/components/ApiParamSearchMinMax'
import { MediaStackPrivateService } from '@/services/private/MediaStackPrivateService'
import AllNewsClient from './AllNewsClient'
import { mediastack_news_params } from '@/constants/parameters/mediastack_news'
async function getCoins() {
  try {
    return await getTopCoins()
  } catch (error) {
    console.error('Error fetching coins:', error)
    return []
  }
}

export default async function NewsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {

  const mediaStackPrivateService = new MediaStackPrivateService()
  const [{ data: allNewsData, pagination: allNewsMeta }, coins] = await Promise.all([
    mediaStackPrivateService.getData(Object.keys(await searchParams).length ? await searchParams : undefined),
    getCoins()
  ])
  const defaultCoin = coins.find(c => c.symbol === 'btc') || coins[0] || null
  return (

    <CurrencyProvider defaultCoin={defaultCoin}>
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                        <Ticket className="h-5 w-5" />
                        <span className="font-semibold">News</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Latest Dubai News</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Stay up to date with the latest news and updates from Dubai.
                    </p>
                </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-1 mb-8">

              <TabsTrigger value="all" className="flex items-center gap-2">
                <Ticket className="h-4 w-4" />
                All News
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <ApiParamSearchMinMax<MediaStackQueryParams> coins={coins} params={mediastack_news_params} search_key={MediaStackFirstKey} >
              <AllNewsClient initial={allNewsData} meta={allNewsMeta} />
              </ApiParamSearchMinMax>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </CurrencyProvider>
  )
}
