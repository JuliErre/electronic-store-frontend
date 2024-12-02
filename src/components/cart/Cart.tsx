"use client";
import { useCartStore } from "@/store/cart.store";
import { getPriceFormat } from "@/utils/format";
import { Button } from "@nextui-org/react";
import Icon from "../shared/Icon";
import CartProducts from "./CartProduct";

const Cart = () => {
    const products = useCartStore((state) => state.products);
    const addProduct = useCartStore((state) => state.addProduct);
    const removeProduct = useCartStore((state) => state.removeProduct);
    const clearCart = useCartStore((state) => state.clearCart);

    const hasProducts = products.length > 0;
    const totalPrice = products.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
    );
    const totalPriceFormatted = getPriceFormat(totalPrice.toFixed(2));

    return (
        <div className="flex flex-col flex-1">
            <div className="flex justify-between mb-5">
                <h5 className="text-2xl text-black font-bold ">Cart</h5>
                <Button
                    className="bg-transparent  text-lg text-orange-500"
                    startContent={<Icon icon="Trash" />}
                    onClick={clearCart}></Button>
            </div>
            {hasProducts ? (
                <div className=" border-y border-gray-300 flex-1  py-5">
                    {products.map((product) => (
                        <CartProducts
                            key={product.id}
                            product={product}
                            onIncrement={() => addProduct(product)}
                            onDecrement={() => removeProduct(product)}
                        />
                    ))}
                </div>
            ) : (
                <p className="text-center text-black">The cart is empty</p>
            )}
            {hasProducts && (
                <div className="justify-end flex pt-4 w-full ">
                    <p className=" text-black text-2xl font-semibold ">
                        Total: ${totalPriceFormatted}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Cart;
