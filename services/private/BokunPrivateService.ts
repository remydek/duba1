
import { BokunPrivateRepository } from "@/repository/private/BokunPrivateRepo";
import { Experience } from "@/schemas/experience";


export class BokunPrivateService {
    constructor(private repo: BokunPrivateRepository = new BokunPrivateRepository()) { }

    async getFeaturedExperiences() {
        const data: Experience[] = await this.repo.getExperience('/product-list.json/99762?currency=AED')
        return data
    }
    async getAllDubaiExperiences() {
        const data: Experience[] = await this.repo.getExperience('/product-list.json/99829?currency=AED')
        return data
    }
}