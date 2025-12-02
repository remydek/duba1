
import { MediaStackPrivateRepo } from "@/repository/private/MediaStackPrivateRepo";
import { MediaStackQueryParams } from "@/interface/mediastack_query_params";
import { MediaStackReturnData, NewsArticle } from "@/schemas/news";
import { mediastack_news_params } from "@/constants/parameters/mediastack_news";


export class MediaStackPrivateService {
  constructor(private repo: MediaStackPrivateRepo = new MediaStackPrivateRepo()) { }

  async getEvents(params: MediaStackQueryParams = mediastack_news_params): Promise<MediaStackReturnData> {
    const raw = await this.repo.getMediaStackNews(params);
    if (raw.error) {
      return {
        pagination: {},
        data: [] as NewsArticle[],
      } as MediaStackReturnData;
    }
    // No need to transform derived directly
    const data = await raw.data
    return data
  }
}
