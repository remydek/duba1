import { createClient } from "@supabase/supabase-js"


export function query_builder(params: string, query) {
    for (const [key, values] of Object.entries(params)) {
        switch (key) {
            // Flexible text search
            case 'search':
            case 'name_like':
                query = query.ilike('name', `%${values[0]}%`)
                break

            // Date range
            case 'date_from':
                query = query.gte('date', values[0])
                break
            case 'date_to':
                query = query.lte('date', values[0])
                break

            // Multiple match filters (e.g. tag=tech&tag=music)
            default:
                if (values.length > 1) {
                    query = query.in(key, values)
                } else {
                    query = query.eq(key, values[0])
                }
                break
        }
    }

    return query
}