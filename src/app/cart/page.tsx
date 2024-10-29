import Cart from "@/components/cart/Cart";

const page = () => {
    return (
        <div className="flex flex-1 items-center justify-center flex-col">
            <div className="flex flex-col bg-white rounded-xl p-10">
                <Cart />
            </div>
        </div>
    );
};

export default page;
