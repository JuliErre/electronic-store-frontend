export interface EndpointProductsEntity {
    items: ProductEntity[];
    total: number;
    limit?: number;
    page?: number;
    totalPages: number;
}
export interface ProductEntity {
    id: string;
    name: string;
    price: number;
    stock: number;
    image: string;
    categories: string[];
}
