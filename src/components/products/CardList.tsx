"use client";
import { ProductEntity } from "@/models";
import { useCartStore } from "@/store/cart.store";
import { ROUTES } from "@/utils/constants";
import { useRouter } from "next/navigation";
import Card from "./Card";
import { CardLIstProps } from "./types";

const CardList = ({ products }: CardLIstProps) => {
    const router = useRouter();

    const addProduct = useCartStore((state) => state.addProduct);
    const productsCart = useCartStore((state) => state.products);

    const productsQuantity = productsCart.reduce(
        (acc, product) => ({
            ...acc,
            [product.id]: product.quantity,
        }),
        {} as Record<string, number>
    );

    const handleClick = (e: React.MouseEvent, id: string) => {
        console.log("id", id);
        router.push(`${ROUTES.products}/${id}`);
    };

    const handleAddProduct = (e: React.MouseEvent, product: ProductEntity) => {
        e.stopPropagation();
        addProduct({ ...product, quantity: 1 });
    };

    return (
        <>
            {products.map((product) => (
                <Card
                    key={product.id}
                    title={product.name}
                    price={product.price}
                    image={product.image}
                    cartCount={productsQuantity[product.id] ?? 0}
                    onAdd={(e: React.MouseEvent) =>
                        handleAddProduct(e, product)
                    }
                    onClick={(e: React.MouseEvent) =>
                        handleClick(e, product.id)
                    }
                />
            ))}
        </>
    );
};

export default CardList;
