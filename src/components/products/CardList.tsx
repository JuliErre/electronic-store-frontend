"use client";
import { useCartStore } from "@/store/cart.store";
import Card from "./Card";
import { CardLIstProps } from "./types";

const CardList = ({ products }: CardLIstProps) => {
    const addProduct = useCartStore((state) => state.addProduct);
    const productsCart = useCartStore((state) => state.products);

    const productsQuantity = productsCart.reduce(
        (acc, product) => ({
            ...acc,
            [product.id]: product.quantity,
        }),
        {} as Record<string, number>
    );

    return (
        <>
            {products.map((product) => (
                <Card
                    key={product.id}
                    title={product.name}
                    price={product.price}
                    image={product.image}
                    cartCount={productsQuantity[product.id] ?? 0}
                    onAdd={() => addProduct({ ...product, quantity: 1 })}
                />
            ))}
        </>
    );
};

export default CardList;
