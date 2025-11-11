
export function pagination(params: Record<string, string[]>) {
    if (!params || params.page === undefined || params.limit === undefined) {
        return { page: 1, limit: 10, start: 0, end: 999 }
    }
    const page = Number(params.page?.[0] || 1)
    const limit = Number(params.limit?.[0] || 10)
    const start = (page - 1) * limit
    const end = start + limit - 1
    const newParams = { ...params };
    delete newParams.page;
    delete newParams.limit;
    return {start, end }
}
