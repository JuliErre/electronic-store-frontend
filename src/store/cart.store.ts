import { ProductCart } from "@/models/cart.model";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartState {
    products: ProductCart[];
    addProduct: (product: ProductCart) => void;
    removeProduct: (product: ProductCart) => void;
    clearCart: () => void;
}

export const useCartStore = create<CartState>()(
    persist(
        (set) => ({
            products: [],
            addProduct: (product) =>
                set((state) => {
                    const productInCart = state.products.find(
                        (p) => p.id === product.id
                    );
                    if (productInCart) {
                        return {
                            ...state,
                            products: state.products.map((p) =>
                                p.id === product.id
                                    ? { ...p, quantity: p.quantity + 1 }
                                    : p
                            ),
                        };
                    }
                    return {
                        ...state,
                        products: [
                            ...state.products,
                            { ...product, quantity: 1 },
                        ],
                    };
                }),
            removeProduct: (product) =>
                set((state) => {
                    const productInCart = state.products.find(
                        (p) => p.id === product.id
                    );
                    if (!productInCart) return state;
                    if (productInCart.quantity === 1) {
                        return {
                            ...state,
                            products: state.products.filter(
                                (p) => p.id !== product.id
                            ),
                        };
                    }
                    return {
                        ...state,
                        products: state.products.map((p) =>
                            p.id === product.id
                                ? { ...p, quantity: p.quantity - 1 }
                                : p
                        ),
                    };
                }),
            clearCart: () => set({ products: [] }),
        }),
        { name: "cart-storage" }
    )
);

// export const useCartStore = create<CartState>((set) => ({
//     products: [],
//     addProduct: (product) =>
//         set((state) => ({
//             ...state,
//             products: [...state.products, product],
//         })),
//     removeProduct: (product) =>
//         set((state) => ({
//             ...state,
//             products: state.products.filter((p) => p.id !== product.id),
//         })),
//     clearCart: () => set({ products: [] }),
// }));
