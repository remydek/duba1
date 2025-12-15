import { mediastack_news_params } from "@/constants/parameters/mediastack_news"
import { MediaStackPrivateService } from "@/services/private/MediaStackPrivateService"
import { Client } from "@upstash/qstash"

const service = new MediaStackPrivateService()
const qstash = new Client({
  baseUrl: process.env.QSTASH_URL!,
  token: process.env.QSTASH_TOKEN!
})

export async function GET(req: Request) {
  if (req.headers.get("authorization") !== `Bearer ${process.env.CRON_SECRET}`) {
    return Response.json({
      header: req.headers.get("authorization"),
      env: process.env.CRON_SECRET ? "present" : "missing"
    })
  }

  const today = new Date().toISOString().slice(0, 10)
  const params = { ...mediastack_news_params, limit: 100, date: today }
  const data = await service.getData(params)

  let baseUrl = process.env.BASE_URL
  if (!baseUrl) {
    const host = req.headers.get("host")
    const proto = req.headers.get("x-forwarded-proto") ?? "https"
    baseUrl = `${proto}://${host}`
  }

  await Promise.all(
    data.data.map(news =>
      qstash.publishJSON({
        url: `${baseUrl}/api/processors/news`,
        body: news
      })
    )
  )

  return Response.json({
    message: "Enqueued news articles",
    count: data.data.length
  })
}
