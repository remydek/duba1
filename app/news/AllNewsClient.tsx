'use client'
import { useState, useEffect, useRef, startTransition, useCallback } from 'react'
import { NewsCard } from '@/components/NewsCard'
import { MediaStackPagination, NewsArticle } from '@/schemas/news'
import { useSearchParams } from 'next/navigation'
import { buildQuery } from '@/utils/utils'


export default function AllNewsClient({ initial, meta }: { initial: NewsArticle[], meta: { total: number; limit: number; offset: number; page: number; totalPages: number } }) {
  const [news, setNews] = useState(initial)
  const [page, setPage] = useState(meta.page)
  const [loading, setLoading] = useState(false)
  const loadingRef = useRef(false)
  const loader = useRef<HTMLDivElement | null>(null)
  const searchParams = useSearchParams()
  const loadMore = useCallback(async () => {
    if (loadingRef.current || page >= (meta.total / meta.limit)) return
    loadingRef.current = true
    setLoading(true)
    try {
      const params: Record<string, string> = {};
        searchParams.forEach((value, key) => {
          params[key] = value;
        });
      const baseUrl =
        typeof window !== "undefined"
          ? window.location.origin
          : process.env.NEXT_PUBLIC_BASE_URL!
      params.offset = (page * meta.limit).toString();
      const data_url =buildQuery(params, new URL(`${baseUrl}/api/news_article/dubai`))
      const res = await fetch(data_url)
      const data = await res.json()
      startTransition(() => {
        setNews(prev => [...prev, ...data.data.data.filter((  n:NewsArticle)=> n.image !== null)])
        setPage(page + 1)
      })
    } catch (error) {
      console.error(error)
    } finally {
      loadingRef.current = false
      setLoading(false)
    }
  }, [page, meta.total, meta.limit, searchParams])

  useEffect(() => {
    if (!loader.current) return
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) loadMore()
    })
    observer.observe(loader.current)
    return () => observer.disconnect()
  }, [loadMore])

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.filter(n=> n.image !== null).map(news => <NewsCard key={news.url} news={news} />)}
      </div>

      <div ref={loader} className="py-10 text-center">
        {loading && <span>Loading...</span>}
      </div>
    </>
  )
}
