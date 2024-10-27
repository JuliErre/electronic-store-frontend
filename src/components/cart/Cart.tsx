"use client";
import { useCartStore } from "@/store/cart.store";
import { getPriceFormat } from "@/utils/format";
import ProductCart from "./ProductCart";

const Cart = () => {
    const products = useCartStore((state) => state.products);
    const addProduct = useCartStore((state) => state.addProduct);
    const removeProduct = useCartStore((state) => state.removeProduct);
    const clearCart = useCartStore((state) => state.clearCart);

    const totalPrice = products.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
    );

    const totalPriceFormatted = getPriceFormat(totalPrice);

    return (
        <div className="flex flex-col min-w-[800px] min-h-96">
            <button onClick={clearCart}>Clear</button>
            {products.length > 0 ? (
                <div>
                    {products.map((product) => (
                        <ProductCart
                            key={product.id}
                            product={product}
                            onIncrement={() => addProduct(product)}
                            onDecrement={() => removeProduct(product)}
                        />
                    ))}
                    <button onClick={clearCart}>Clear Cart</button>
                </div>
            ) : (
                <p>Cart is empty</p>
            )}
            <div className="justify-end flex pt-4 w-full border-t  border-zinc-300">
                <p className=" text-black text-2xl font-semibold ">
                    Total: ${totalPriceFormatted}
                </p>
            </div>
        </div>
    );
};

export default Cart;
