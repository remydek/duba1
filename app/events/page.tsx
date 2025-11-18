import { Ticket, Calendar, TrendingUp } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { EventCard } from '@/components/EventCard'
import { PlatinumListService } from '@/services/private/platinumListPrivateService'
import AllEventsClient from './AllEventsClient'
import { CurrencyProvider } from '@/contexts/CurrencyContext'

import { getTopCoins } from '@/repository/public/coingecko'
async function getCoins() {
  try {
    return await getTopCoins()
  } catch (error) {
    console.error('Error fetching coins:', error)
    return []
  }
}

function formatDateUTC(date: string) {
  return new Date(date).toISOString().split('T')[0]
}

export default async function EventsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const eventService = new PlatinumListService()

  const [{ data: allEventsData, meta: allEventsMeta }, { data: todayEvent }, coins] = await Promise.all([
    eventService.getEvents(Object.keys(await searchParams).length ? await searchParams : undefined),
    eventService.getEvents(),
    getCoins()
  ])

  const todayUTC = new Date().toISOString().split('T')[0]

  const todayEvents = todayEvent.filter(event => formatDateUTC(event.event_date) === todayUTC)

  const weekEvents = todayEvent.filter(event => {
    const eventDate = new Date(formatDateUTC(event.event_date))
    const today = new Date(todayUTC)
    return eventDate >= today && eventDate <= new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)
  })
  const defaultCoin = coins.find(c => c.symbol === 'btc') || coins[0] || null
  return (

    <CurrencyProvider defaultCoin={defaultCoin}>
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Ticket className="h-5 w-5" />
              <span className="font-semibold">Premium Events</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Exclusive Dubai Events</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the best of Dubai&apos;s luxury lifestyle. From VIP concerts to exclusive galas, book your tickets with cryptocurrency.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="today" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Today
                {todayEvents.length > 0 && (
                  <span className="ml-1 bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-xs">
                    {todayEvents.length}
                  </span>
                )}
              </TabsTrigger>

              <TabsTrigger value="week" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                This Week
                {weekEvents.length > 0 && (
                  <span className="ml-1 bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-xs">
                    {weekEvents.length}
                  </span>
                )}
              </TabsTrigger>

              <TabsTrigger value="all" className="flex items-center gap-2">
                <Ticket className="h-4 w-4" />
                All Events
              </TabsTrigger>
            </TabsList>

            <TabsContent value="today">
              {todayEvents.length === 0 ? (
                <div className="text-center py-12 bg-secondary/20 rounded-lg">
                  <Calendar className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-semibold mb-2">No Events Today</h3>
                  <p className="text-muted-foreground">Check out our upcoming events this week!</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {todayEvents.map(event => <EventCard key={event.id} event={event} />)}
                </div>
              )}
            </TabsContent>

            <TabsContent value="week">
              {weekEvents.length === 0 ? (
                <div className="text-center py-12 bg-secondary/20 rounded-lg">
                  <TrendingUp className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-semibold mb-2">No Events This Week</h3>
                  <p className="text-muted-foreground">Check back soon for new events!</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {weekEvents.map(event => <EventCard key={event.id} event={event} />)}
                </div>
              )}
            </TabsContent>

            <TabsContent value="all">
              <AllEventsClient initial={allEventsData} meta={allEventsMeta} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </CurrencyProvider>
  )
}
