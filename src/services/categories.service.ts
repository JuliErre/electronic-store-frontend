import { EndpointCategory } from "@/models";
import axiosInstance from "@/utils/axiosInstance";

export const getCategories = async () => {
    const response = await axiosInstance.get<EndpointCategory[]>("/categories");
    return response;
};
