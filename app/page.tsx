import { FeaturedEventsSection } from '@/components/FeaturedEventsSection'
import { FeaturedExperienceSection } from '@/components/FeaturedExperienceSection'
import { getTopCoins } from '@/repository/public/coingecko'
import { Experience } from '@/schemas/experience'
import { BokunPrivateService } from '@/services/private/BokunPrivateService'
// import { PropertyPublicService } from '@/services/public/properties'
import { PlatinumListService } from '@/services/private/platinumListPrivateService'
// import { SupercarPublicService } from '@/services/public/supercars'
// import { YachtPublicService } from '@/services/public/yachts'

async function getCoins() {
  try {
    return await getTopCoins()
  } catch (error) {
    console.error('Error fetching coins:', error)
    return []
  }
}

export default async function HomePage() {
  const eventPlatinumListPrivateService = new PlatinumListService()
  const experiencebokunPrivateService = new BokunPrivateService()

  // const propertyPublicService = new PropertyPublicService()
  // const supercarPublicService = new SupercarPublicService()
  // const yachtPublicService = new YachtPublicService()
  const [{ data: featuredEvents}, featuredExperiences, coins] = await Promise.all([
    // propertyPublicService.getFeaturedProperties(),
    eventPlatinumListPrivateService.getEvents(),
    experiencebokunPrivateService.getFeaturedExperiences(),
    // supercarPublicService.getFeaturedSupercars(),
    // yachtPublicService.getFeaturedYachts(),
    getCoins()
  ])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* <section className="relative bg-gradient-to-br from-background via-background to-secondary/20 py-20 md:py-32 overflow-hidden">
        Background Image Slideshow with Overlay
        <HeroSlideshow />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 border-primary/30 shadow-[0_0_20px_-5px_rgba(212,175,55,0.4)]">
              <Bitcoin className="h-3 w-3 mr-1" />
              Crypto Payments Accepted
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(212,175,55,0.5)]">
              Dubai&apos;s Crypto Luxury Lifestyle
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Events • Properties • Supercars • Yachts
            </p>

            Quick Crypto Calculator
            <HeroCalculator coins={coins} />

            Search Bar
            <div className="inline-block bg-card/50 backdrop-blur-md border border-primary/30 rounded-xl p-4 shadow-[0_0_25px_-5px_rgba(212,175,55,0.3)] w-[600px] max-w-full">
              <div className="flex gap-2 items-center">
                <div className="flex items-center gap-2 bg-background/80 backdrop-blur rounded-lg px-3 py-2 border-primary/20 flex-1">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by location (e.g. Dubai Marina)"
                    className="border-0 focus-visible:ring-0 px-0 flex-1"
                  />
                </div>
                <Button asChild size="sm">
                  <Link href="/properties">
                    Search <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Quick Links */}
      {/* <section className="py-12 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/events" className="group">
              <Card className="hover:border-primary transition-colors">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Ticket className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Events</h3>
                    <p className="text-sm text-muted-foreground">Exclusive Experiences</p>
                  </div>
                  <ArrowRight className="ml-auto h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </CardContent>
              </Card>
            </Link>

            <Link href="/properties" className="group">
              <Card className="hover:border-primary transition-colors">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Properties</h3>
                    <p className="text-sm text-muted-foreground">Villas, Apartments & More</p>
                  </div>
                  <ArrowRight className="ml-auto h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </CardContent>
              </Card>
            </Link>

            <Link href="/supercars" className="group">
              <Card className="hover:border-primary transition-colors">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Car className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Supercars</h3>
                    <p className="text-sm text-muted-foreground">Exotic Car Rentals</p>
                  </div>
                  <ArrowRight className="ml-auto h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </CardContent>
              </Card>
            </Link>

            <Link href="/yachts" className="group">
              <Card className="hover:border-primary transition-colors">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Ship className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Yachts</h3>
                    <p className="text-sm text-muted-foreground">Luxury Yacht Rentals</p>
                  </div>
                  <ArrowRight className="ml-auto h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section> */}

      {/* Featured Events */}
      {<FeaturedEventsSection events={featuredEvents.filter((event) => event.category === 'featured' || event.category === 'top seller').slice(0, 3)} coins={coins} />}
      {/* Featured Experiences */}
      {<FeaturedExperienceSection experiences={featuredExperiences} coins={coins} />}


{/* 

      Featured Supercars
      <FeaturedSupercarsSection supercars={featuredSupercars} coins={coins} />

      Featured Properties
      <FeaturedPropertiesSection properties={featuredProperties} coins={coins} />

      Featured Yachts
      <FeaturedYachtsSection yachts={featuredYachts} coins={coins} /> */}
    </div>
  )
}
