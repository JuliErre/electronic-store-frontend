import { createEndpointProductsAdapter } from "@/adapters";
import { ProductsParams } from "@/models";
import { getProducts } from "@/services/products.service";

export const handleGetProducts = async (params: ProductsParams) => {
    const response = await getProducts(params);
    const endpointProducts = createEndpointProductsAdapter(response.data);
    return endpointProducts;
};
