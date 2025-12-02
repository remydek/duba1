export interface MediaStackQueryParams {
  access_key?: string;
  sources?: string;
  categories?: string;
  countries?: string;
  languages?: string;
  keywords?: string;
  date?: string;
  sort?: "published_desc" | "published_asc" | "popularity";
  limit?: number;
  offset?: number;
}

