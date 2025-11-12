export interface PlatinumlistQueryParams {
  scope: string;
  search?: string;
  has_tickets?: string;
  start_from?: number;
  start_to?: number;
  end_from?: number;
  end_to?: number;
  "city.id"?: number | number[];
  "nearby_city.id"?: number | number[];
  "event_type.id"?: number | number[];
  event_type_recursive?: boolean;
  is_attraction?: number;
  is_online?: number;
  status?: "approved" | "on sale" | "pre-register" | "pre-sale" | "sold out";
  per_page?: number;
  page?: number;
  include?: string;
  sort?: string;
}
