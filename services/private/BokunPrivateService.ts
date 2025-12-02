
import { BasePrivateServiceInterface, FeaturedPublicServiceInterface } from "@/interface/service_interfaces";
import { BokunPrivateRepository } from "@/repository/private/BokunPrivateRepo";
import { Experience } from "@/schemas/experience";




export class BokunPrivateService implements BasePrivateServiceInterface<Experience[]>, FeaturedPublicServiceInterface<Experience[]> {
    constructor(private repo: BokunPrivateRepository = new BokunPrivateRepository()) { }
    async getFeatured() {
        const data: Experience[] = await this.repo.getExperience('/product-list.json/99762?currency=AED')
        return data
    }
    async getData() {
        const data: Experience[] = await this.repo.getExperience('/product-list.json/99829?currency=AED')
        return data
    }
}
