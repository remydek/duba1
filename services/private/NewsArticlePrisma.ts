import { prisma_news_params } from "@/constants/parameters/mediastack_news";
import { MediaStackQueryParams } from "@/interface/mediastack_query_params";
import { BasePrivateServiceInterface } from "@/interface/service_interfaces";
import { NewsArticle } from "@/schemas/news";
import { prisma } from "@/utils/prisma";

export class NewsArticlePrisma
  implements
    BasePrivateServiceInterface<{
      pagination: {
        total: number;
        limit: number;
        offset: number;
        page: number;
        totalPages: number;
      };
      data: NewsArticle[];
    }>
{
  constructor() {}

  async getData(
    params: MediaStackQueryParams = prisma_news_params
  ): Promise<{
    pagination: {
      total: number;
      limit: number;
      offset: number;
      page: number;
      totalPages: number;
    };
    data: NewsArticle[];
  }> {
    params =
      params.keywords !== prisma_news_params.keywords && params.keywords
        ? { ...params, keywords: params.keywords }
        : { ...params, keywords: "" };
    const mergedParams = Object.fromEntries([
      ...Object.entries(prisma_news_params),
      ...Object.entries(params),
    ]);
    const limit = Number(
      mergedParams.limit ? mergedParams.limit : prisma_news_params.limit
    );
    const offset = Number(
      mergedParams.offset ? mergedParams.offset : prisma_news_params.offset
    );
    const where = {
      OR: [
        {
          title: {
            contains: String(mergedParams.keywords),
          },
        },
        {
          ai_title: {
            contains: String(mergedParams.keywords),
          },
        },
        {
          description: {
            contains: String(mergedParams.keywords),
          },
        },
        {
          ai_description: {
            contains: String(mergedParams.keywords),
          },
        },
      ],
    };
    const [data, total] = await prisma.$transaction([
      prisma.news_articles.findMany({
        where,
        take: limit,
        skip: offset,
        orderBy: { published_at: "desc" },
      }),
      prisma.news_articles.count({ where }),
    ]);
    return {
      pagination: {
        total,
        limit,
        offset,
        page: Math.floor(offset / limit) + 1,
        totalPages: Math.ceil(total / limit),
      },
      data: data,
    };
  }
}
