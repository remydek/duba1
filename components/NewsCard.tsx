import Image from 'next/image'
import { Calendar } from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { NewsArticle } from '@/schemas/news'
interface NewsCardProps {
  news: NewsArticle
}

export function NewsCard({ news }: NewsCardProps) {

  const newsDate = new Date(news.published_at)
  const formattedDate = newsDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })

  const formattedTime = newsDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  })

  function createMarkup() {
    return { __html: news.description || '' };
  }
  return (
    <Card className="overflow-hidden hover:border-primary transition-colors group p-0">
      <div className="relative h-64 w-full overflow-hidden bg-muted">
        <Image
          src={
            typeof news.image === 'string'
              ? news.image
              : Array.isArray(news.image) && (news.image as string[]).length
                ? news.image[0]
                : 'https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg'
          }
          alt={news.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
        {news.category && (
          <Badge className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm">
            {news.category && news.category.toUpperCase()}
          </Badge>
        )}
        {news.source && (
          <Badge className="absolute top-3 left-3 bg-background/90 backdrop-blur-sm text-foreground">
            {news.source.toUpperCase()}
          </Badge>
        )}
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {news.title}
        </h3>

        <div className="space-y-2 text-sm text-muted-foreground mb-3">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{formattedDate} at {formattedTime}</span>
          </div>

        </div>

        <div className="text-sm text-muted-foreground line-clamp-6 mb-4" dangerouslySetInnerHTML={createMarkup()} />
      </CardContent>

      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <Link href={`${news.url}`} target='_blank' className="text-primary hover:underline">
          <Button size="sm" className='cursor-pointer hover:bg-amber-600'>
            View Full Article
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
