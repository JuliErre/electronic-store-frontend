import { getPriceFormat } from "@/utils/format";
import {
    CardBody,
    Card as CardComponent,
    CardHeader,
    Image,
} from "@nextui-org/react";
import CartCountIcon from "../cart/CartCountIcon";
import { CardProps } from "./types";

const Card = ({
    title,
    price,
    image,
    cartCount,
    onAdd,
    onClick,
}: CardProps) => {
    const priceWithDot = getPriceFormat(price);

    return (
        <div onClick={onClick} className="cursor-pointer">
            <CardComponent
                className="py-4 px-4 bg-white max-w-72 text-zinc-800"
                onClick={onClick}>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-center ">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl x"
                        src={image}
                    />
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <p className="font-normal text-base line-clamp-2">
                        {title}
                    </p>
                    <div className="flex justify-between">
                        <h4 className="font-bold text-2xl pt-6">
                            ${priceWithDot}
                        </h4>

                        <button
                            onClick={onAdd}
                            className="bg-green-500 font-bold py-2 px-4 rounded-xl mt-4">
                            <CartCountIcon count={cartCount} />
                        </button>
                    </div>
                </CardBody>
            </CardComponent>
        </div>
    );
};

export default Card;
