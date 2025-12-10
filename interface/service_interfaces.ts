export interface BasePrivateServiceInterface<T> {
    getData(): Promise<T>
}

export interface FeaturedPublicServiceInterface<T> {
    getFeatured(): Promise<T>
}