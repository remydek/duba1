'use client'
import Image from 'next/image'
import { Calendar } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useDispatch } from 'react-redux'
import { selectArticle } from '@/stores/slices/news-slice'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { NewsArticle } from '@/schemas/news'

interface NewsCardProps {
  news: NewsArticle
}

export function NewsCard({ news }: NewsCardProps) {
  const router = useRouter()
  const [mediaVisible, setMediaVisible] = useState(true)

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
    return { __html: news.ai_description || '' }
  }

  function handleCardClick() {
    router.push('/news/'+news.slug)
  }

  function isVideo(url: string) {
    return /\.(mp4|webm|ogg|mov|m3u8)(\?|$)/i.test(url)
  }

  if (!news.image || !mediaVisible) return null

  return (
    <Card
      onClick={handleCardClick}
      className="overflow-hidden hover:border-primary transition-colors group p-0 cursor-pointer"
    >
      <div className="relative h-64 w-full overflow-hidden bg-muted">
        <div className="relative w-full h-full overflow-hidden">
          {isVideo(news.image) ? (
            <video
              src={news.image}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              muted
              playsInline
              preload="metadata"
              onError={() => setMediaVisible(false)}
            />
          ) : (
            <Image
              src={news.image}
              alt={news.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
              onError={() => setMediaVisible(false)}
            />
          )}
        </div>

        {news.category && (
          <Badge className="absolute top-3 right-3 bg-primary/90 backdrop-blur-sm">
            {news.category.toUpperCase()}
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
            <span>
              {formattedDate} at {formattedTime}
            </span>
          </div>
        </div>

        <div
          className="text-sm text-muted-foreground line-clamp-6 mb-4"
          dangerouslySetInnerHTML={createMarkup()}
        />
      </CardContent>
    </Card>
  )
}
