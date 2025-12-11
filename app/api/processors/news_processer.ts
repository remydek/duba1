import { prisma } from "@/utils/prisma";
import slugify from "slugify";
import { generateAIText } from "@/utils/generate_ai";
import { NextResponse } from "next/server";
import { verifySignatureAppRouter } from "@upstash/qstash/nextjs";

export async function handler(req: Request) {
  const news = await req.json();

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

  if (existing && new Date(existing.published_at).getTime() === new Date(news.published_at).getTime()) {
    return NextResponse.json({ message: "Skipped (unchanged)" });
  }

  let aiDescription = existing?.ai_description ?? "";
  let aiSummary = existing?.ai_generated_summary ?? "";
  let aiTitle = existing?.ai_title ?? "";

  if (!aiDescription || !aiSummary || !aiTitle) {
    const [desc, summary, title] = await Promise.all([
      generateAIText(
        "Rewrite the following news article into a detailed, engaging description.",
        `Title: ${news.title}\nDescription: ${news.description ?? ""}`
      ),
      generateAIText(
        "Write a concise summary (2-3 sentences) of the news article.",
        `Title: ${news.title}\nDescription: ${news.description ?? ""}`
      ),
      generateAIText(
        "Translate the title into English if needed.",
        `Title: ${news.title}`
      ),
    ]);

    aiDescription = desc ?? "";
    aiSummary = summary ?? "";
    aiTitle = title ?? "";
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

  return NextResponse.json({ message: `Processed: ${news.title}` });
}

export const POST = verifySignatureAppRouter(handler);
