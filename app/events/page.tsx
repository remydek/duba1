import { Ticket, Calendar, TrendingUp } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { EventCard } from '@/components/EventCard'
import { getEvents, getTodayEvents, getThisWeekEvents } from '@/lib/queries/events'

export default async function EventsPage() {
  const [allEvents, todayEvents, weekEvents] = await Promise.all([
    getEvents(),
    getTodayEvents(),
    getThisWeekEvents(),
  ])

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Ticket className="h-5 w-5" />
            <span className="font-semibold">Premium Events</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Exclusive Dubai Events
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the best of Dubai&apos;s luxury lifestyle. From VIP concerts to exclusive galas,
            book your tickets with cryptocurrency.
          </p>
        </div>

        {/* Tabs for filtering events */}
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

          {/* TODAY EVENTS */}
          <TabsContent value="today">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Happening Today</h2>
              <p className="text-muted-foreground">
                Don&apos;t miss out on these exciting events happening today
              </p>
            </div>
            {todayEvents.length === 0 ? (
              <div className="text-center py-12 bg-secondary/20 rounded-lg">
                <Calendar className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">No Events Today</h3>
                <p className="text-muted-foreground">Check out our upcoming events this week!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {todayEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            )}
          </TabsContent>

          {/* THIS WEEK EVENTS */}
          <TabsContent value="week">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">This Week</h2>
              <p className="text-muted-foreground">
                Upcoming events in the next 7 days
              </p>
            </div>
            {weekEvents.length === 0 ? (
              <div className="text-center py-12 bg-secondary/20 rounded-lg">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">No Events This Week</h3>
                <p className="text-muted-foreground">Check back soon for new events!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {weekEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            )}
          </TabsContent>

          {/* ALL EVENTS */}
          <TabsContent value="all">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">All Upcoming Events</h2>
              <p className="text-muted-foreground">
                Browse our complete collection of exclusive Dubai events
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
