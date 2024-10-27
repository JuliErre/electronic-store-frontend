import { getPriceFormat } from "@/utils/format";
import { Image } from "@nextui-org/react";
import Counter from "./Counter";
import { ProductCartProps } from "./types";

const ProductCart = ({
    product,
    onIncrement,
    onDecrement,
}: ProductCartProps) => {
    const finalPrice = product.price * product.quantity;
    const formattedPrice = getPriceFormat(finalPrice);
    return (
        <div className="flex gap-7 items-center text-zinc-700">
            <Image src={product.image} alt="" />

            <h6 className="font-semibold">{product.name}</h6>

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

export default ProductCart;
