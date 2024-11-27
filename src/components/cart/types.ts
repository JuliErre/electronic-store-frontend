import { ProductCart } from "@/models/cart.model";
import { IconBaseProps } from "react-icons";

export interface CartProps {
    products: ProductCart[];
    addProduct: (product: ProductCart) => void;
    removeProduct: (product: ProductCart) => void;
    clearCart: () => void;
}

export interface CartProductsProps {
    product: ProductCart;
    onIncrement: () => void;
    onDecrement: () => void;
}

export interface CounterProps {
    initialValue: number;
    onIncrement: () => void;
    onDecrement: () => void;
}

export interface CartCountIconProps extends IconBaseProps {
    count: number;
}
