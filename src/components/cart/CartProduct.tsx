import { getPriceFormat } from "@/utils/format";
import { Image } from "@nextui-org/react";
import Counter from "./Counter";
import { CartProductsProps } from "./types";

const CartProducts = ({
    product,
    onIncrement,
    onDecrement,
}: CartProductsProps) => {
    const finalPrice = product.price * product.quantity;
    const formattedPrice = getPriceFormat(finalPrice.toFixed(2));
    return (
        <div className="flex gap-7 items-center text-zinc-700">
            <div className="w-36">
                <Image src={product.image} alt="" />
            </div>

            <h6 className="font-semibold w-96">{product.name}</h6>

            <Counter
                initialValue={product.quantity}
                onDecrement={onDecrement}
                onIncrement={onIncrement}
            />
            <div className="w-64 flex justify-end">
                <p className="text-2xl font-bold ml-10">$ {formattedPrice}</p>
            </div>
        </div>
    );
};

export default CartProducts;
