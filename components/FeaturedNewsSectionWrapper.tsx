
'use client'
import { NewsCard } from './NewsCard'
import { NewsArticle } from '@/schemas/news'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from '@/stores'

interface FeaturedNewsSectionProps {
  news: NewsArticle[]
}

export function FeaturedNewsSectionWrapper({ news }: FeaturedNewsSectionProps) {
  const featured_news: NewsArticle[] = news.filter((news: NewsArticle) => typeof news.image === 'string' && news.image.trim() !== '').slice(0, 3)
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {featured_news.map((news) => (
          <NewsCard key={news.url} news={news} />
        ))}
      </PersistGate>
    </Provider>
  )
}
