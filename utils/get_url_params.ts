export function get_url_params(
  searchParams: URLSearchParams | Record<string, string | string[] | undefined>
) {
  const params: Record<string, string[]> = {}

  if (searchParams instanceof URLSearchParams) {
    for (const [k, v] of searchParams) {
      if (!params[k]) params[k] = []
      params[k].push(v)
    }
  } else {
    for (const key in searchParams) {
      const value = searchParams[key]
      if (value === undefined) continue
      if (!params[key]) params[key] = []
      if (Array.isArray(value)) params[key].push(...value)
      else params[key].push(value)
    }
  }

  return params
}
