'use client'
import { useState, useEffect, useRef } from 'react'
import { EventCard } from '@/components/EventCard'
import { Event } from '@/schemas/event'
import { Button } from '@/components/ui/button'

/* eslint-disable @typescript-eslint/no-explicit-any*/
export default function AllEventsClient({ initial, meta }: { initial: Event[], meta: any }) {
    const [events, setEvents] = useState(initial)
    const [page, setPage] = useState(meta.pagination.current_page)
    const [loading, setLoading] = useState(false)
    const loader = useRef(null)

    async function loadMore() {
        if (loading) return
        if (page >= meta.pages) return
        setLoading(true)

        // cancel. since we dont have any Auth. Infinite scrolling is bad making this SSR reactive instead
        // const response = await fetch(`/api/platinumlist/events?page=${page + 1}&per_page=${meta.pagination.per_page}`)
        // const data = await response.json()
        // setEvents([...events, ...data.data])
        // setPage(data.meta.pagination.current_page)
        window.location.href = `/events?page=${page + 1}&per_page=${meta.pagination.per_page}`
        setLoading(false)
    }
    async function loadPrevious() {
        if (loading) return
        if (page <= 1) return
        setLoading(true)
        window.location.href = `/events?page=${page - 1}&per_page=${meta.pagination.per_page}`
        setLoading(false)
    }
    // Canceled Infinite Scrolling
    // useEffect(() => {
    //     const observer = new IntersectionObserver(entries => {
    //         if (entries[0].isIntersecting) {
    //             loadMore()
    //         }
    //     })
    //     if (loader.current) {
    //         observer.observe(loader.current)
    //     }
    //     return () => {
    //         observer.disconnect()
    //     }

    // }, [loader.current])

    return (
        <>
            <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">All Upcoming Events</h2>
                <p className="text-muted-foreground">
                    Browse our complete collection of exclusive Dubai events
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event: Event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>
            <div className="py-10 text-center">
                <div className="flex justify-center">
                    <Button onClick={loadPrevious} variant="outline">Load Previous</Button>
                    <Button onClick={loadMore} variant="default">Load Next</Button>

                </div>
            </div>
            {/* <div ref={loader} className="py-10 text-center">
                {loading && <span>Loading...</span>}
            </div> */}
        </>
    )
}