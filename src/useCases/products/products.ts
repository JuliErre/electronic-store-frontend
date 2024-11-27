import {
    createEndpointProductsAdapter,
    createProductAdapter,
} from "@/adapters";
import { ProductsParams } from "@/models";
import { getProductById, getProducts } from "@/services/products.service";

export const handleGetProducts = async (params: ProductsParams) => {
    const response = await getProducts(params);
    const endpointProducts = createEndpointProductsAdapter(response.data);
    return endpointProducts;
};

export const handleGetProductById = async (id: string) => {
    const response = await getProductById(id);
    const endpointProducts = createProductAdapter(response.data);
    return endpointProducts;
};
