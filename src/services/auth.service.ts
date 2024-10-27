// /services/authService.ts
import { EndpointUser } from "@/models";
import axiosInstance from "@/utils/axiosInstance";
import { API_ROUTES } from "@/utils/constants";

export const loginUser = async (data: {
    email: string | undefined;
    password: string | undefined;
}) => {
    const response = await axiosInstance.post<EndpointUser>(
        API_ROUTES.login,
        data
    );
    return response;
};

export const registerUser = async (data: {
    email: string;
    password: string;
    name: string;
    username: string;
    phone: string;
}) => {
    const response = await axiosInstance.post(API_ROUTES.register, data);
    return response.data;
};
