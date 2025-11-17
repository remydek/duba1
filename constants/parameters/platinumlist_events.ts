export const platinum_list_params = {
    start_from: new Date(new Date().toISOString().split('T')[0]).getTime() / 1000,
    per_page: 20,
    page: 1,
    sort: "-rating",
}