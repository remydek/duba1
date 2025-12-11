import { mediastack_news_params } from "@/constants/parameters/mediastack_news";
import { MediaStackPrivateService } from "@/services/private/MediaStackPrivateService";
import { Client } from "@upstash/qstash";

const service = new MediaStackPrivateService();
const qstash = new Client({ token: process.env.QSTASH_TOKEN! });

export async function GET(req: Request) {
  // if (req.headers.get("Authorization") !== process.env.CRON_API_KEY) {
  //   return new Response(JSON.stringify({ message: "Unauthorized" }), { status: 401 });
  // }

  const today = new Date().toISOString().split("T")[0];
  const params = { ...mediastack_news_params, limit: 100, date: today };
  const data = await service.getData(params);
  const news_data = data.data;
  const host = req.headers.get("host");
  const protocol = req.headers.get("x-forwarded-proto") ?? "http";
  const baseUrl = `${protocol}://${host}`;
  console.log(baseUrl);
  for (const news of news_data) {
    await qstash.publishJSON({
      url: `${baseUrl}/api/news/process`,
      body: news,
    });
  }

  return new Response(
    JSON.stringify({ message: "Enqueued news articles", count: news_data.length }),
    { status: 200 }
  );
}
