import { EndpointProducts } from "@/models";
import axiosInstance from "@/utils/axiosInstance";
import { API_ROUTES } from "@/utils/constants";

export const getProducts = async () => {
    const response = await axiosInstance.get<EndpointProducts>(
        API_ROUTES.products
    );
    return response;
};
