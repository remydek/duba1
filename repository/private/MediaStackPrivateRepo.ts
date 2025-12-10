import { mediastack_news_params } from "@/constants/parameters/mediastack_news";
import { MediaStackQueryParams } from "@/interface/mediastack_query_params";
import { buildQuery } from "@/utils/utils";

export class MediaStackPrivateRepo {
  private baseUrl = process.env.MEDIA_STACK_API_URL;
  private apiKey = process.env.MEDIA_STACK_API_KEY;

  async getMediaStackNews(params: MediaStackQueryParams = mediastack_news_params) {
    params = { ...params, access_key: this.apiKey };
    const url = buildQuery<MediaStackQueryParams>(params, new URL(this.baseUrl!));
      const res = await fetch(url, {
        cache: "force-cache",
        next: {
          revalidate: 21600, // 6 hours
        },
      },);
      return res.json();
    }
}
