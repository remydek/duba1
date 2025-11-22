import { getTopCoins } from '@/repository/public/coingecko'
import { ExperiencesClient } from './ExperiencesClient'
import { BokunPrivateService } from '@/services/private/BokunPrivateService'

async function getCoins() {
  try {
    return await getTopCoins()
  } catch (error) {
    console.error('Error fetching coins:', error)
    return []
  }
}

export default async function ExperiencesPage() {
  const bokunPrivateService = new BokunPrivateService()
  const [experience, coins] = await Promise.all([
    bokunPrivateService.getAllDubaiExperiences(),
    getCoins()
  ])

  return <ExperiencesClient experience={experience} coins={coins} />
}
