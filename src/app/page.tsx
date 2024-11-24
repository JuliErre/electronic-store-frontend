import Categories from "@/components/categories/Categories";
import CardList from "@/components/products/CardList";
import CardSkeletonList from "@/components/products/CardSkeletonList";
import Pagination from "@/components/products/Pagination";
import SortSelect from "@/components/products/SortSelect";
import { ProductsParams } from "@/models";
import { handleGetProducts } from "@/useCases/products/products";
import { auth } from "../../auth";

export default async function Home({
    searchParams,
}: {
    searchParams: Record<string, string>;
}) {
    const session = await auth();
    let isLoading = false;
    const params: ProductsParams = {
        page: Number(searchParams.page || "1"),
        limit: Number(searchParams.limit || "10"),
        sortBy: searchParams.sortBy || "name",
        order: (searchParams.order as ProductsParams["order"]) || "ASC",
        category: searchParams.category || null,
        search: searchParams.search || null,
    };

    const getProducts = async () => {
        try {
            isLoading = true;
            const products = await handleGetProducts(params);
            return products;
        } catch (error) {
            console.error(error);
        } finally {
            isLoading = false;
        }
    };
    const res = await getProducts();
    const products = res?.items ?? [];
    const totalPages = res?.totalPages ?? 0;

    return (
        <div className="flex justify-between flex-col items-center min-h-[calc(100vh-150px)]  font-[family-name:var(--font-geist-sans)]  bg-zinc-300 px-4 py-3">
            {/* <form
                action={async () => {
                    "use server";
                    await signOut({
                        redirectTo: ROUTES.login,
                    });
                }}>
                <button type="submit" className="bg-blue-400">
                    Sign Out
                </button>
            </form> */}
            <div className="flex flex-col w-full">
                <div className=" self-end">
                    <SortSelect />
                </div>

                <div className="flex w-full py-4">
                    <div className="flex  pr-10">
                        <Categories />
                    </div>

                    <div className="flex flex-1 flex-wrap  items-start  gap-4">
                        {isLoading ? (
                            <CardSkeletonList length={6} />
                        ) : (
                            <CardList products={products} />
                        )}
                    </div>
                </div>
            </div>
            <div>
                {!isLoading && totalPages > 1 && (
                    <Pagination
                        currentPage={params.page ?? 0}
                        totalPages={totalPages}
                    />
                )}
            </div>
        </div>
    );
}
