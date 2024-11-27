"use client";
import { useCartStore } from "@/store/cart.store";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Divider,
    Image,
} from "@nextui-org/react";
import { CardProductDetailProps } from "./types";

const CardProductDetail = ({ product }: CardProductDetailProps) => {
    const addProduct = useCartStore((state) => state.addProduct);

    const handleAddToCartClick = () => {
        addProduct({ ...product, quantity: 1 });
    };

    return (
        <Card className="flex-1 p-5 text-zinc-800">
            <CardHeader className="flex">
                <Image
                    alt={product.name}
                    // height={300}
                    src={product.image || "https://via.placeholder.com/300"}
                    width={250}
                    className="object-cover rounded-lg"
                />
            </CardHeader>
            <CardBody>
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-semibold">{product.name}</h1>
                    <p className="text-3xl font-bold">
                        ${product.price.toFixed(2)}
                    </p>
                </div>
                <Divider className="my-4" />
                <p className="text-gray-500">
                    {product.description || "No description available"}
                </p>

                {/* {product.specifications && (
                        <div className="mt-4">
                            <h2 className="text-lg font-semibold mb-2">Specifications</h2>
                            <ul className="list-disc list-inside">
                                {Object.entries(product.specifications).map(([key, value]) => (
                                    <li key={key}>{`${key}: ${value}`}</li>
                                ))}
                            </ul>
                        </div>
                    )} */}
            </CardBody>
            <CardFooter className="flex gap-3">
                <Button
                    onClick={handleAddToCartClick}
                    className="bg-green-500"
                    fullWidth>
                    Add to Cart
                </Button>
                <Button
                    color="secondary"
                    variant="bordered"
                    className="border-green-500 text-green-500"
                    fullWidth>
                    Add to Wishlist
                </Button>
            </CardFooter>
        </Card>
    );
};

export default CardProductDetail;
