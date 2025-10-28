import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { formatAED } from '@/lib/crypto'
import {
  Bitcoin,
  Bed,
  Bath,
  Maximize,
  MapPin,
  Building2,
  Check,
  ArrowLeft,
  MessageCircle,
} from 'lucide-react'
import { getPropertyById } from '@/lib/queries/properties'

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const property = await getPropertyById(id)

  if (!property) {
    notFound()
  }

  const btcPrice = (property.price_aed / 250000).toFixed(2)
  const ethPrice = (property.price_aed / 12000).toFixed(2)

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link href="/properties">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Properties
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="grid grid-cols-2 gap-4">
              {property.images && property.images[0] && (
                <div className="col-span-2 relative h-[500px] rounded-xl overflow-hidden">
                  <Image
                    src={property.images[0]}
                    alt={property.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                </div>
              )}
              {property.images &&
                property.images.slice(1, 3).map((image: string, index: number) => (
                  <div
                    key={index}
                    className="relative h-[240px] rounded-xl overflow-hidden"
                  >
                    <Image
                      src={image}
                      alt={`${property.title} - Image ${index + 2}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                ))}
            </div>

            {/* Property Details */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{property.area}</span>
                    </div>
                  </div>
                  {property.crypto_verified && (
                    <Badge className="bg-primary/90 shadow-[0_0_15px_-3px_rgba(212,175,55,0.5)]">
                      <Bitcoin className="h-3 w-3 mr-1" />
                      Crypto Verified
                    </Badge>
                  )}
                </div>

                <div className="grid grid-cols-4 gap-4 py-6 border-y border-border">
                  <div className="text-center">
                    <Bed className="h-5 w-5 mx-auto mb-2 text-primary" />
                    <p className="text-sm text-muted-foreground">Bedrooms</p>
                    <p className="font-semibold">{property.bedrooms}</p>
                  </div>
                  <div className="text-center">
                    <Bath className="h-5 w-5 mx-auto mb-2 text-primary" />
                    <p className="text-sm text-muted-foreground">Bathrooms</p>
                    <p className="font-semibold">{property.bathrooms}</p>
                  </div>
                  <div className="text-center">
                    <Maximize className="h-5 w-5 mx-auto mb-2 text-primary" />
                    <p className="text-sm text-muted-foreground">Square Feet</p>
                    <p className="font-semibold">{property.sqft?.toLocaleString()}</p>
                  </div>
                  <div className="text-center">
                    <Building2 className="h-5 w-5 mx-auto mb-2 text-primary" />
                    <p className="text-sm text-muted-foreground">Type</p>
                    <p className="font-semibold capitalize">{property.property_type}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-semibold text-lg mb-3">Description</h3>
                  <p className="text-muted-foreground">{property.description}</p>
                </div>

                {property.amenities && property.amenities.length > 0 && (
                  <div className="mt-6">
                    <h3 className="font-semibold text-lg mb-3">Amenities</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {property.amenities.map((amenity: string, index: number) => (
                        <div key={index} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-6 p-4 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Developer</p>
                  <p className="font-semibold">{property.developer}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20 border-primary/20 shadow-[0_0_20px_-5px_rgba(212,175,55,0.2)]">
              <CardContent className="p-6">
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground mb-2">Price</p>
                  <p className="text-4xl font-bold text-primary drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]">
                    {formatAED(property.price_aed)}
                  </p>
                </div>

                <div className="space-y-3 mb-6 p-4 bg-muted rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Bitcoin className="h-4 w-4 text-primary" />
                      <span className="text-sm">Bitcoin</span>
                    </div>
                    <span className="font-semibold">≈ {btcPrice} BTC</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Bitcoin className="h-4 w-4 text-primary" />
                      <span className="text-sm">Ethereum</span>
                    </div>
                    <span className="font-semibold">≈ {ethPrice} ETH</span>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Contact Agent
                </Button>

                {property.golden_visa_eligible && (
                  <div className="mt-6 p-4 border border-primary/30 rounded-lg bg-primary/5">
                    <p className="text-sm font-semibold text-primary mb-1">
                      Golden Visa Eligible
                    </p>
                    <p className="text-xs text-muted-foreground">
                      This property qualifies for UAE Golden Visa
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
