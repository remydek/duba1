'use client'
import { useState, useEffect, useRef, startTransition, useCallback } from 'react'
import { EventCard } from '@/components/EventCard'
import type { Event } from '@/schemas/event'
import { useSearchParams } from 'next/navigation'
import { buildQuery } from '@/utils/utils'

/* eslint-disable @typescript-eslint/no-explicit-any*/
export default function AllEventsClient({ initial, meta }: { initial: Event[], meta: any }) {
  const [events, setEvents] = useState(initial)
  const [page, setPage] = useState(meta.pagination.current_page)
  const [loading, setLoading] = useState(false)
  const loadingRef = useRef(false)
  const loader = useRef<HTMLDivElement | null>(null)
  const searchParams = useSearchParams()
  const loadMore = useCallback(async () => {
    if (loadingRef.current || page >= meta.pagination.total_pages) return
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
      params.page = (page + 1).toString();
      const data_url =buildQuery(params, new URL(`${baseUrl}/api/platinumlist/events`))
      const res = await fetch(data_url)
      const data = await res.json()
      startTransition(() => {
        setEvents(prev => [...prev, ...data.data])
        setPage(data.meta.pagination.current_page)
      })
    } catch (error) {
      console.error(error)
    } finally {
      loadingRef.current = false
      setLoading(false)
    }
  }, [page, meta.pagination.total_pages, searchParams])

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
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">All Upcoming Events</h2>
        <p className="text-muted-foreground">Browse our complete collection of exclusive Dubai events</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map(event => <EventCard key={event.id} event={event} />)}
      </div>

      <div ref={loader} className="py-10 text-center">
        {loading && <span>Loading...</span>}
      </div>
    </>
  )
}
