
export function get_url_params(searchParams: Record<string, string>) {
    const params: Record<string, string[]> = {}
    Object.entries(searchParams).forEach(([k, v]) => {
        if (!params[k]) params[k] = []
        params[k].push(v)
    })

    return params
}