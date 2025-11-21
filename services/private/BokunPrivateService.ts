
import { BokunPrivateRepository } from "@/repository/private/BokunPrivateRepo";


export class BokunPrivateService {
    constructor(private repo: BokunPrivateRepository = new BokunPrivateRepository()) { }

    async getFeaturedExperiences() {
        return await this.repo.getExperience('/product-list.json/99762?currency=AED')
    }
}