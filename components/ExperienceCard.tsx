import Image from 'next/image'
import { MapPin, Ticket } from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { Experience } from '@/schemas/experience'
import Link from 'next/link'
import { PriceDisplay } from './PriceDisplay'
interface ExperienceCardProps {
  experience: Experience
}

export function ExperienceCard({ experience }: ExperienceCardProps) {

  function createMarkup() {
    return { __html: experience.description || '' };
  }
  return (
    <Card className="overflow-hidden hover:border-primary transition-colors group p-0">
      <div className="relative h-64 w-full overflow-hidden bg-muted">
        <Image
          src={
            typeof experience.images === 'string'
              ? experience.images
              : Array.isArray(experience.images) && experience.images.length
                ? experience.images[0]
                : '/placeholder.jpg'
          }
          alt={experience.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
        {experience.category && (
          <Badge className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm">
            {experience.category && experience.category.toUpperCase()}
          </Badge>
        )}
        {experience.source && (
          <Badge className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm text-foreground">
            {experience.source.toUpperCase()}
          </Badge>
        )}
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {experience.title}
        </h3>

        <div className="space-y-2 text-sm text-muted-foreground mb-3">
          {experience.location && (
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="line-clamp-1">{experience.location}</span>
            </div>
          )}

        </div>

        <div className="text-sm text-muted-foreground line-clamp-6 mb-4" dangerouslySetInnerHTML={createMarkup()} />
      </CardContent>

      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Ticket className="h-4 w-4 text-primary" />
          <span className="text-lg font-bold text-primary">
            <PriceDisplay priceAED={typeof experience.price_aed === 'string' ? 0 : experience.price_aed} showCrypto={false} />
            </span>
        </div>
        <Link href={`${experience.url}`} target='_blank' className="text-primary hover:underline">
          <Button size="sm" className='cursor-pointer hover:bg-amber-600'>
            Book Now
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
