"use client";
import Icon from "../shared/Icon";
import { CartCountIconProps } from "./types";

const CartCountIcon = ({ count, ...iconProps }: CartCountIconProps) => {
    return (
        <div className="flex relative">
            <Icon icon="Cart" {...iconProps} />
            {count > 0 && (
                <div className="flex size-6 items-center justify-center rounded-full absolute bottom-2 left-3 bg-zinc-400 text-xs font-thin">
                    <div>{count}</div>
                </div>
            )}
        </div>
    );
};

export default CartCountIcon;
