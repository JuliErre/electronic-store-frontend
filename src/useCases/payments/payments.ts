import { createPayment } from "@/services/payment.service";
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
export const handlePayment = async (data: PaymentData) => {
    const response = await createPayment(data);
    if (response.status === 401 || response.status === 404) {
        throw new Error("Invalid credentials");
    }
    return response.data;
};
