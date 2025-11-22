import { Experience, ExperienceRow } from "@/schemas/experience"


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const transformBokuntoExperience = (data: any): Experience => {
    const experience_data = data.activity
    const location = experience_data.agendaItems
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .map((i: any) => i.location.wholeAddress)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .filter((v: any) => v.trim() !== '')
        .join('|| ');
    const mapped = {
        id: String(experience_data.id),
        title: experience_data.title,
        description: experience_data.description,
        price_aed: experience_data.nextDefaultPrice,
        location: location,
        category: data.productCategory,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        images: experience_data.photos.map((photo: any) => photo.originalUrl),
        source: experience_data.vendor.title,
        url: "https://widgets.bokun.io/online-sales/c3e0bdd7-5977-459e-b4e1-8dbb00711c88/experience/" + experience_data.id,
        created_at: experience_data.creationDate
    }

    return ExperienceRow.parse(mapped)
}