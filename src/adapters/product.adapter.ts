import {
    EndpointProduct,
    EndpointProducts,
    EndpointProductsEntity,
    ProductEntity,
} from "@/models";

export const createEndpointProductsAdapter = (
    productsData: EndpointProducts
): EndpointProductsEntity => {
    return {
        items: productsData.items.map(createProductAdapter),
        total: productsData.total,
        limit: productsData.limit,
        page: productsData.page,
        totalPages: productsData.totalPages,
    };
};

export const createProductAdapter = (
    productData: EndpointProduct
): ProductEntity => {
    return {
        id: productData.id,
        name: productData.name,
        price: productData.price,
        stock: productData.stock,
        image: productData.image,
        categories: productData.categories,
    };
};
