import { MediaStackQueryParams } from "@/interface/mediastack_query_params";

export class MediaStackPrivateRepo {
  private baseUrl = process.env.MEDIA_STACK_API_URL;
  private apiKey = process.env.MEDIA_STACK_API_KEY;
  private buildQuery(params: MediaStackQueryParams) {
    const url = new URL(this.baseUrl!);
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        if (Array.isArray(value)) {
          value.forEach((v) => url.searchParams.append(`${key}[]`, v.toString()));
        } else {
          url.searchParams.append(key, value.toString());
        }
      }
    });
    return url.toString();
  }

  async getMediaStackNews(params: MediaStackQueryParams) {
    params = { ...params, access_key: this.apiKey, keywords: "Dubai" };
    const url = this.buildQuery(params);
    try {
      const res = await fetch(url, {
        cache: "force-cache",
        next: {
          revalidate: 3600,
        },
      },);
      return res.json();
    }
    catch (e) {
      throw new Error(e instanceof Error ? e.message : String(e))
    }


  }
}
