import { mediastack_news_params } from "@/constants/parameters/mediastack_news";
import { MediaStackPrivateService } from "@/services/private/MediaStackPrivateService";
import { prisma } from "@/utils/prisma";
import slugify from "slugify";
import { NextResponse } from "next/server";
import { generateAIText } from "@/utils/generate_ai";

const service = new MediaStackPrivateService();

export async function GET(req: Request): Promise<NextResponse> {
  // Authorization
  if (req.headers.get("Authorization") !== process.env.CRON_API_KEY) {
    return NextResponse.json({ message: "Unauthorized", status: 401 });
  }
  const params = { ...mediastack_news_params, limit: 100 };
  const data = await service.getData(params);
  const news_data = data.data;

  for (const news of news_data) {
    const existing = await prisma.news_articles.findUnique({
      where: { url: news.url },
      select: {
        id: true,
        published_at: true,
        ai_description: true,
        ai_generated_summary: true,
        ai_title: true,
        slug: true,
      },
    });

    if (
      existing &&
      new Date(existing.published_at).getTime() ===
        new Date(news.published_at).getTime()
    ) {
      console.log(`Skipped (unchanged): ${news.title}`);
      continue;
    }

    let aiDescription = existing?.ai_description ?? "";
    let aiSummary = existing?.ai_generated_summary ?? "";
    let aiTitle = existing?.ai_title ?? "";

    if (!aiDescription || !aiSummary || !aiTitle) {
      const [desc, summary, title] = await Promise.all([
        generateAIText(
          `Rewrite the following news article into a detailed, engaging, and factually accurate English description. Make it dense and informative, suitable for a detailed article page. OUTPUT ONLY the description text:\nTitle: ${
            news.title
          }\nDescription: ${news.description ?? ""}`
        ),
        generateAIText(
          `Write a concise summary (2-3 sentences) of the news article in English. OUTPUT ONLY the summary:\nTitle: ${
            news.title
          }\nDescription: ${news.description ?? ""}`
        ),
        generateAIText(
          `Translate the title into English if needed. OUTPUT ONLY the title text:\nTitle: ${news.title}`
        ),
      ]);

      aiDescription = desc.text ?? "";
      aiSummary = summary.text ?? "";
      aiTitle = title.text ?? "";
    }

    let slug = existing?.slug ?? slugify(news.title, { lower: true });
    if (!existing) {
      const baseSlug = slug;
      let counter = 1;

      while (await prisma.news_articles.findUnique({ where: { slug } })) {
        slug = `${baseSlug}-${counter++}`;
      }
    }

    await prisma.news_articles.upsert({
      where: { url: news.url },
      update: {
        title: news.title,
        ai_title: aiTitle,
        description: news.description,
        ai_description: aiDescription,
        ai_generated_summary: aiSummary,
        author: news.author,
        source: news.source,
        image: news.image,
        category: news.category,
        language: news.language,
        country: news.country,
        published_at: news.published_at,
      },
      create: {
        title: news.title,
        ai_title: aiTitle,
        slug,
        author: news.author,
        description: news.description,
        ai_description: aiDescription,
        ai_generated_summary: aiSummary,
        url: news.url,
        source: news.source,
        image: news.image,
        category: news.category,
        language: news.language,
        country: news.country,
        published_at: news.published_at,
      },
    });

    console.log(`Synced: ${news.title}`);
  }

  return NextResponse.json({
    message: "News articles synced successfully.",
    status: 200,
    count: news_data.length,
  });
}
