import Cart from "@/components/cart/Cart";
import Checkout from "@/components/cart/Checkout";
import Card from "@/components/shared/Card";
const page = () => {
    return (
        <div className="flex flex-1 items-center justify-center flex-col">
            <Card>
                <Cart />
                <div className="flex justify-end pt-10">
                    <Checkout />
                </div>
            </Card>
        </div>
    );
};

export default page;
