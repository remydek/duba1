'use client'

import type { CoinGeckoData } from '@/repository/public/coingecko'
import { Experience } from '@/schemas/experience'
import { ExperienceCard } from '@/components/ExperienceCard'
import { LocalSearchMinMax } from '@/components/LocalSearchMinMax'

interface ExperiencesClientProps {
  experience: Experience[]
  coins: CoinGeckoData[]
}

export function ExperiencesClient({ experience, coins }: ExperiencesClientProps) {
  return (
    <LocalSearchMinMax experience={experience} coins={coins}>
      {(filtered: Experience[]) => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((e: Experience) => (
            <ExperienceCard key={e.id} experience={e} />
          ))}
        </div>
      )}
    </LocalSearchMinMax>
  )
}
