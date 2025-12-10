import { mediastack_news_params } from "@/constants/parameters/mediastack_news";
import { MediaStackPrivateService } from "@/services/private/MediaStackPrivateService";
import { prisma } from "@/utils/prisma";
import slugify from "slugify";
import { NextResponse } from "next/server";
import { generateAIText } from "@/utils/generate_ai";

const service = new MediaStackPrivateService();

export async function GET(req: Request): Promise<NextResponse> {
  // Authorization
  // if (req.headers.get("Authorization") !== process.env.CRON_API_KEY) {
  //   return NextResponse.json({ message: "Unauthorized", status: 401 });
  // }

  const params = { ...mediastack_news_params, limit: 100 };
  const data = await service.getData(params);
  const news_data = data.data;
  // console.table({ limit: params.limit, totalFetched: news_data.length });

  for (const news of news_data) {
    // Check if the article already exists
    const existing = await prisma.news_articles.findUnique({
      where: { url: news.url },
    });
    let aiDescription = existing?.ai_description ?? "";
    let aiSummary = existing?.ai_generated_summary ?? "";
    let aiTitle = existing?.ai_title ?? "";

    // Only generate AI if it doesn't exist yet
    if (
      !existing?.ai_description ||
      !existing?.ai_generated_summary ||
      !existing?.ai_title
    ) {
      try {
        const [desc, summary, title] = await Promise.all([
          generateAIText(
            `Rewrite the following news article into a detailed, engaging, and factually accurate English description. Make it dense and informative, suitable for a detailed article page. OUTPUT ONLY the description text, do not add labels, phrases like "Here is...", or summaries:\nTitle: ${
              news.title
            }\nDescription: ${news.description ?? ""}`
          ),
          generateAIText(
            `Write a concise summary (2-3 sentences) of the news article in English. OUTPUT ONLY the summary, no extra labels, no "Summary:" or introductory phrases:\nTitle: ${
              news.title
            }\nDescription: ${news.description ?? ""}`
          ),
          generateAIText(
            `Translate the title into English if needed. OUTPUT ONLY the title text, no extra labels or commentary:\nTitle: ${news.title}`
          ),
        ]);

        aiDescription = desc.text ?? aiDescription;
        aiSummary = summary.text ?? aiSummary;
        aiTitle = title.text ?? aiTitle;
      } catch (err) {
        console.error("AI generation failed for article:", news.title, err);
      }
    }

    const baseSlug = slugify(news.title, { lower: true });
    let slug = baseSlug;
    let counter = 1;
    while (await prisma.news_articles.findUnique({ where: { slug } })) {
      slug = `${baseSlug}-${counter++}`;
    }

    try {
      await prisma.news_articles.upsert({
        where: { url: news.url },
        update: {
          title: news.title,
          ai_title: aiTitle,
          slug,
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

      console.log(`Inserted/Updated: ${news.title}`);
    } catch (err) {
      console.warn(`Skipped due to unique constraint: ${news.title}`, err);
      continue;
    }
  }

  return NextResponse.json({
    message: "News articles synced successfully.",
    status: 200,
    count: news_data.length,
  });
}
