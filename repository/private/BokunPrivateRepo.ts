// app/api/bokun/debug/route.ts
import { transformBokuntoExperience } from '@/data_transformers/bokun_transform'
import { Experience } from '@/schemas/experience'
import crypto from 'crypto'

const ACCESS_KEY = process.env.BOKUN_ACCESS_KEY!
const SECRET_KEY = process.env.BOKUN_SECRET_KEY!

const formatDate = () => {
    const d = new Date()
    const pad = (v: number) => v.toString().padStart(2, '0')
    return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())} ${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())}`
}

const sign = (date: string, method: string, path: string) => {
    const base = `${date}${process.env.BOKUN_ACCESS_KEY}${method.toUpperCase()}${path}`
    return crypto.createHmac('sha1', SECRET_KEY).update(base).digest('base64')
}
export class BokunPrivateRepository {
    async setUpFetch(url: string, method: string) {
        const date = formatDate()

        const signature = sign(date, method, url)
        return Response.json({
            date,
            accessKey: ACCESS_KEY,
            signature
        })
    }
    async getExperience(url: string, method: string = "GET") : Promise<Experience[]> {
        try {
            const response = await this.setUpFetch(url!, method)
            const data = await response.json()
            const bokun_fetch = await fetch("https://api.bokun.io" + url!, {
                headers: {
                    'X-Bokun-Date': data.date,
                    'X-Bokun-AccessKey': data.accessKey,
                    'X-Bokun-Signature': data.signature
                },
                cache: 'force-cache',
                next: { revalidate: 3600 }
            })
            const bokun_response = await bokun_fetch.json()

            return bokun_response.items.map(transformBokuntoExperience)
        } catch (error) {
            console.error(error)
            throw error
        }
    }
}
