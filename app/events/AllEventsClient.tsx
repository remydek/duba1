'use client'
import { useState, useEffect, useRef, startTransition, useCallback } from 'react'
import { EventCard } from '@/components/EventCard'
import type { Event } from '@/schemas/event'

/* eslint-disable @typescript-eslint/no-explicit-any*/
export default function AllEventsClient({ initial, meta }: { initial: Event[], meta: any }) {
  const [events, setEvents] = useState(initial)
  const [page, setPage] = useState(meta.pagination.current_page)
  const [loading, setLoading] = useState(false)
  const loadingRef = useRef(false)
  const loader = useRef<HTMLDivElement | null>(null)

  const loadMore = useCallback(async () => {
    if (loadingRef.current || page >= meta.pagination.total_pages) return
    loadingRef.current = true
    setLoading(true)
    try {
      const res = await fetch(`/api/platinumlist/events?page=${page + 1}&per_page=${meta.pagination.per_page}`)
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
  }, [page, meta.pagination.total_pages, meta.pagination.per_page])

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
