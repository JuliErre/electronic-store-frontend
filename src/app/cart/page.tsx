import Cart from "@/components/cart/Cart";
import Checkout from "@/components/cart/Checkout";
const page = () => {
    return (
        <div className="flex flex-1 items-center justify-center flex-col">
            <div className="flex flex-col bg-white rounded-xl p-10 w-full max-w-[1000px]">
                <Cart />
                <div className="flex justify-end pt-10">
                    <Checkout />
                </div>
            </div>
        </div>
    );
};

export default page;
