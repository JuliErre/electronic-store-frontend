import { EndpointProduct, EndpointProducts, ProductsParams } from "@/models";
import axiosInstance from "@/utils/axiosInstance";
import { API_ROUTES } from "@/utils/constants";

export const getProducts = async (params: ProductsParams) => {
    const response = await axiosInstance.get<EndpointProducts>(
        API_ROUTES.products,
        { params }
    );
    return response;
};

export const getProductById = async (id: string) => {
    const response = await axiosInstance.get<EndpointProduct>(
        `${API_ROUTES.products}/${id}`
    );
    return response;
};
