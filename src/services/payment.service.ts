import { EndpointPayments } from "@/models";
import axiosInstance from "@/utils/axiosInstance";
import { API_ROUTES } from "@/utils/constants";

interface PaymentData {
    products: {
        id: string;
        quantity: number;
        title: string;
        price: number;
    }[];
    email: string;
    userId: string;
}

export const createPayment = async (data: PaymentData) => {
    const productsDto = data.products.map((product) => ({
        id: product.id,
        quantity: product.quantity,
        title: product.title,
        price: product.price,
    }));
    const response = await axiosInstance.post<EndpointPayments>(
        API_ROUTES.payments,
        {
            items: productsDto,
            email: data.email,
            userId: data.userId,
        }
    );
    return response;
};
