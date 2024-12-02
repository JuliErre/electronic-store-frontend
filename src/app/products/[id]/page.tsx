import CardProductDetail from "@/components/products/CardProductDetail";
import { handleGetProductById } from "@/useCases/products/products";

const getProduct = async (id: string) => {
    try {
        const product = await handleGetProductById(id);
        return product;
    } catch (error) {
        console.error(error);
    }
};

const ProductPage = async ({ params }: { params: { id: string } }) => {
    const product = await getProduct(params.id);
    return (
        <div className="flex justify-center items-center p-4">
            {product ? (
                <div className="flex-1 max-w-[1000px]">
                    <CardProductDetail product={product} />
                </div>
            ) : (
                <p>Product not found</p>
            )}
        </div>
    );
};

export default ProductPage;
