export interface PlatinumlistQueryParams {
  search?: string;
  has_tickets?: string;
  start_from?: number;
  start_to?: number;
  end_from?: number;
  end_to?: number;
  "event_type.id"?: number | number[];
  is_online?: number;
  status?: "approved" | "on sale" | "pre-register" | "pre-sale" | "sold out";
  per_page?: number;
  page?: number;
  sort?: string;
}
