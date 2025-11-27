'use client'

import { ArrowRight, Search } from 'lucide-react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function HomepageSearch() {
  const router = useRouter()
  const [searchInput, setSearchInput] = useState('')

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(`/search?search=${encodeURIComponent(searchInput)}`)
  }

  return (
    <form onSubmit={handleSearch}>
      <div className="inline-block bg-card/50 backdrop-blur-md border border-primary/30 rounded-xl p-4 w-[600px] max-w-full">
        <div className="flex gap-2 items-center">
          <div className="flex items-center gap-2 bg-background/80 rounded-lg px-3 py-2 flex-1">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
              placeholder="Search directory..."
              className="border-0 px-0 flex-1"
            />
          </div>

          <Button type="submit" size="sm">
            Search <ArrowRight className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </div>
    </form>
  )
}
