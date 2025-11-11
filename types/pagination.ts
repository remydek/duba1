export type PaginatedResponse<T> = {
  data: T[]
  count: number | null
  error: string | null
}