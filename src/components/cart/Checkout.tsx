"use client";
import { ProductCart } from "@/models/cart.model";
import { useCartStore } from "@/store/cart.store";
import { handlePayment } from "@/useCases/payments/payments";
import { ROUTES } from "@/utils/constants";
import { Button } from "@nextui-org/react";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const getPaymentLink = async (products: ProductCart[], session: Session) => {
    try {
        const paymentData = products.map((product) => ({
            id: product.id,
            quantity: product.quantity,
            title: product.name,
            price: product.price,
            imageUrl: product.image,
        }));
        const response = await handlePayment({
            products: paymentData,
            email: session.user?.email as string,
            userId: session.user?.id as string,
        });
        return response.link;
    } catch (error) {
        console.error(error);
        toast.error("An error occurred while processing your payment");
    }
};

const Checkout = () => {
    const { data: session, status } = useSession();
    const cartProducts = useCartStore((state) => state.products);
    const router = useRouter();
    const handleClick = async () => {
        if (status === "authenticated") {
            const paymentLink = await getPaymentLink(cartProducts, session);
            if (paymentLink) {
                window.location.href = paymentLink;
            }
            return;
        }
        router.push(ROUTES.login);
    };
    const hasProducts = cartProducts.length > 0;
    return (
        <div>
            <Button
                disabled={!hasProducts}
                className={`bg-orange-500 text-white font-bold text-base ${
                    !hasProducts && "bg-opacity-40"
                }`}
                onClick={handleClick}>
                Checkout
            </Button>
        </div>
    );
};

export default Checkout;
