export const platinum_list_params = {
    start_from: Date.now() / 1000,
    per_page: 10,
    page: 1,
    include: "price,score,venues,instructions,event_type",
    sort: "-rating",
}