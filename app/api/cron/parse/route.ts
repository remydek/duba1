import { mediastack_news_params } from "@/constants/parameters/mediastack_news";
import { MediaStackPrivateService } from "@/services/private/MediaStackPrivateService";
import { prisma } from "@/utils/prisma";
import slugify from "slugify";
import { NextResponse } from "next/server";

const service = new MediaStackPrivateService();

export async function GET(req: Request): Promise<NextResponse> {
  if (req.headers.get("Authorization") !== process.env.CRON_API_KEY) {
    return NextResponse.json({ message: "Unauthorized", status: 401 });
  }

  let params = mediastack_news_params;
  params = { ...params, limit: 100 };
  const data = await service.getData(params);
  const news_data = data.data;
  console.table(params);
  for (const news of news_data) {
    const slug = slugify(news.title, { lower: true });
    try {
      await prisma.news_articles.upsert({
        where: { url: news.url },
        update: {
          title: news.title,
          slug: slug,
          description: news.description,
          source: news.source,
          image: news.image,
          category: news.category,
          language: news.language,
          country: news.country,
          published_at: news.published_at,
        },
        create: {
          title: news.title,
          author: news.author,
          slug: slug,
          description: news.description,
          url: news.url,
          source: news.source,
          image: news.image,
          category: news.category,
          language: news.language,
          country: news.country,
          published_at: news.published_at,
        },
      });
      console.log(`Inserted/Updated: ${news.title}`);
    } catch (err) {
      console.warn(`Skipped due to unique constraint: ${news.title}`);
      continue;

    }
  }

  return NextResponse.json({ message: "News articles have been synced successfully.", status: 200, count: news_data.length });
}
