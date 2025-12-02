import { Ticket } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PlatinumListService } from '@/services/private/platinumListPrivateService'
import { CurrencyProvider } from '@/contexts/CurrencyContext'

import { getTopCoins } from '@/repository/public/coingecko'
import { ApiParamSearchMinMax } from '@/components/ApiParamSearchMinMax'
import AllEventsClient from '../events/AllEventsClient'
import { BokunPrivateService } from '@/services/private/BokunPrivateService'
import { ExperiencesClient } from '../experiences/ExperiencesClient'
async function getCoins() {
  try {
    return await getTopCoins()
  } catch (error) {
    console.error('Error fetching coins:', error)
    return []
  }
}

export default async function EventsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const eventService = new PlatinumListService()
  const bokunPrivateService = new BokunPrivateService()
  const [{ data: allEventsData, meta: allEventsMeta }, coins, experience] = await Promise.all([
    eventService.getData(Object.keys(await searchParams).length ? await searchParams : undefined),
    getCoins(),
    bokunPrivateService.getFeatured(),
  ])

  const defaultCoin = coins.find(c => c.symbol === 'btc') || coins[0] || null


  return (

    <CurrencyProvider defaultCoin={defaultCoin}>
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Ticket className="h-5 w-5" />
              <span className="font-semibold">Listings</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Events & Experiences
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse and book available events and experiences. Check availability, details, and pricing in real time.
            </p>
          </div>

          <Tabs defaultValue="events" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">

              <TabsTrigger value="experience" className="flex items-center gap-2">
                <Ticket className="h-4 w-4" />
                All Experience
              </TabsTrigger>

              <TabsTrigger value="events" className="flex items-center gap-2">
                <Ticket className="h-4 w-4" />
                All Events
              </TabsTrigger>
            </TabsList>


            <TabsContent value="experience">
              <ExperiencesClient experience={experience} coins={coins} />
            </TabsContent>

            <TabsContent value="events">
              <ApiParamSearchMinMax coins={coins} >
                <AllEventsClient initial={allEventsData} meta={allEventsMeta} />
              </ApiParamSearchMinMax>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </CurrencyProvider>
  )
}
