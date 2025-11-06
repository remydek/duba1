// eslint-disable-next-line @typescript-eslint/no-explicit-any

export function query_builder(params: Record<string, string[]>, query) {
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
            query = query.gte(key_value, values[0])
            continue
        }
        else if (key.endsWith('_to')){
            const key_value = key.replace('_to', '')
            query = query.lte(key_value, values[0])
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
