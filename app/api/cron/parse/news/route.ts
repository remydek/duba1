import { mediastack_news_params } from "@/constants/parameters/mediastack_news";
import { MediaStackPrivateService } from "@/services/private/MediaStackPrivateService";
import { Client } from "@upstash/qstash";

const service = new MediaStackPrivateService();
const qstash = new Client({
  baseUrl: process.env.QSTASH_URL!,
  token: process.env.QSTASH_TOKEN!,
});

export async function GET(req: Request) {
  const authHeader = req.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response('Unauthorized', {
      status: 401,
    });
  }
  const today = new Date().toISOString().split("T")[0];
  const params = { ...mediastack_news_params, limit: 100, date: today };
  const data = await service.getData(params);
  let baseUrl = process.env.BASE_URL;
  if (baseUrl === undefined) {
      const host = req.headers.get("host");
      const protocol = req.headers.get("x-forwarded-proto") ?? "http";
      baseUrl = `${protocol}://${host}`;
  }
  for (const news of data.data) {
    await qstash.publishJSON({
      url: `${baseUrl}/api/processors/news`,
      body: news,
    });
  }

  return new Response(JSON.stringify({ message: "Enqueued news articles", count: data.data.length }), { status: 200 });
}
