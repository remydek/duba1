// TODO: research for supabase query types

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function query_builder(params: Record<string, string[]>, query: any) {
    if (!params) {
        return query
    }
    for (const [key, values] of Object.entries(params)) {
        if (key === 'page' || key === 'limit') {
            continue
        }
        if (key.endsWith('_like')){
            const key_value = key.replace('_like', '')
            query = query.ilike(key_value, `%${values[0]}%`)
            continue
        }
        else if (key.endsWith('_from')){
            const key_value = key.replace('_from', '')
            const timestampRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?$/;
            const value = values[0];
            if (!timestampRegex.test(value)) {
                query = query.gte(key_value, `${value}T00:00:00Z`)
            } else {
                query = query.gte(key_value, value)
            }
            continue
        }
        else if (key.endsWith('_to')){
            const key_value = key.replace('_to', '')
            const timestampRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})?$/;
            const value = values[0];
            if (!timestampRegex.test(value)) {
                query = query.lte(key_value, `${value}T23:59:59Z`)
            } else {
                query = query.lte(key_value, value)
            }
            continue
        }else{
            if (values.length > 1) {
                query = query.in(key, values)
            } else {
                query = query.eq(key, values[0])
            }
        }
    }
    return query
}
