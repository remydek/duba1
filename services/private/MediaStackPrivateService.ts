
import { MediaStackPrivateRepo } from "@/repository/private/MediaStackPrivateRepo";
import { MediaStackPagination, MediaStackReturnData, NewsArticle } from "@/schemas/news";
import { mediastack_news_params } from "@/constants/parameters/mediastack_news";
import { BasePrivateServiceInterface } from "@/interface/service_interfaces";
import { MediaStackQueryParams } from "@/interface/mediastack_query_params";


export class MediaStackPrivateService implements BasePrivateServiceInterface<MediaStackReturnData> {
  constructor(private repo: MediaStackPrivateRepo = new MediaStackPrivateRepo()) { }

  async getData(params: MediaStackQueryParams = mediastack_news_params): Promise<MediaStackReturnData> {
  params = params.keywords !== mediastack_news_params.keywords && params.keywords ? { ...params, keywords: "Dubai,"+ params.keywords } : { ...params, keywords: "Dubai" };
  const mergedParams = Object.fromEntries([
    ...Object.entries(mediastack_news_params),
    ...Object.entries(params),
  ]);
    const raw = await this.repo.getMediaStackNews(mergedParams);
    if (raw.error) {
      return {
        pagination: {} as MediaStackPagination,
        data: [] as NewsArticle[],
      } as MediaStackReturnData;
    }
    const data = await raw
    return data
  }
}
