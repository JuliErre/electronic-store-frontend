export interface EndpointProducts {
    items: EndpointProduct[];
    total: number;
    limit?: number;
    page?: number;
    totalPages: number;
}

export interface EndpointProduct {
    id: string;
    name: string;
    price: number;
    stock: number;
    image: string;
    categories: string[];
}

export interface ProductsParams {
    page?: number;
    limit?: number;
    sortBy?: string;
    order?: "ASC" | "DESC";
    category?: string | null;
}
