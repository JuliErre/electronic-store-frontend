import { getProducts } from "@/services/products.service";

export const handleGetProducts = async () => {
    const response = await getProducts();
    return response.data;
};
