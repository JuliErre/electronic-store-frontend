import Categories from "@/components/categories/Categories";
import CardList from "@/components/products/CardList";
import CardSkeletonList from "@/components/products/CardSkeletonList";
import Pagination from "@/components/products/Pagination";
import SortSelect from "@/components/products/SortSelect";
import { ProductsParams } from "@/models";
import { handleGetProducts } from "@/useCases/products/products";
import { Suspense } from "react";

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 10;
const DEFAULT_SORT = "name";
const DEFAULT_ORDER = "ASC";

export default async function ProductsPage({
    searchParams,
}: {
    searchParams: Record<string, string>;
}) {
    const params: ProductsParams = {
        page: parseInt(searchParams.page ?? DEFAULT_PAGE.toString()),
        limit: parseInt(searchParams.limit ?? DEFAULT_LIMIT.toString()),
        sortBy: searchParams.sortBy ?? DEFAULT_SORT,
        order: (searchParams.order as ProductsParams["order"]) ?? DEFAULT_ORDER,
        category: searchParams.category || null,
        search: searchParams.search || null,
    };
    const getProducts = async () => {
        try {
            const products = await handleGetProducts(params);
            return products;
        } catch (error) {
            console.error(error);
            return { items: [], totalPages: 0 };
        }
    };

    const { items: products, totalPages } = await getProducts();

    const showPagination = totalPages > 1;
    const hasProducts = products.length > 0;

    return (
        <div className="flex justify-between flex-col items-center min-h-[calc(100vh-150px)] font-[family-name:var(--font-geist-sans)] bg-zinc-300 px-4 py-0">
            <div className="flex flex-col w-full">
                <div className="self-end">
                    <SortSelect />
                </div>
                <div className="flex w-full py-4">
                    <div className="flex pr-10">
                        <Categories />
                    </div>
                    <div className="flex flex-1 flex-wrap items-start gap-4 pt-9">
                        {!hasProducts ? (
                            <h1 className="text-xl text-center self-center flex-1 text-gray-500 pr-32">
                                No products found
                            </h1>
                        ) : (
                            <Suspense
                                fallback={<CardSkeletonList length={6} />}>
                                <CardList products={products} />
                            </Suspense>
                        )}
                    </div>
                </div>
            </div>
            {showPagination && (
                <div>
                    <Pagination
                        currentPage={params.page}
                        totalPages={totalPages}
                    />
                </div>
            )}
        </div>
    );
}
