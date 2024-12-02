"use client";
import { useFetch } from "@/hooks/useFetch";
import { CategoryEntity } from "@/models";
import { handleGetCategories } from "@/useCases/categories/categories";
import {
    Accordion,
    AccordionItem,
    BreadcrumbItem,
    Breadcrumbs,
} from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import CategoriesSkeleton from "./CategoriesSkeleton";
import { getAccordionItems, getBreadcrumbItems } from "./utils";

const Categories = () => {
    const {
        data: categories,
        error,
        loading,
    } = useFetch<CategoryEntity[]>(handleGetCategories);
    const router = useRouter();
    const searchParams = useSearchParams();

    const accordionItems = useMemo(() => {
        return getAccordionItems(categories ?? []);
    }, [categories]);

    const items = useMemo(() => {
        const categoryId = searchParams.get("category");
        return getBreadcrumbItems(accordionItems, categoryId);
    }, [accordionItems, searchParams]);

    const handleItemClick = (id: string) => {
        const params = new URLSearchParams(window.location.search);
        params.set("category", id);
        const query = params.toString() ? `?${params.toString()}` : "";
        router.push(query);
    };

    if (loading) return <CategoriesSkeleton />;

    return (
        <div>
            <Breadcrumbs
                variant="light"
                className="text-black py-2 pl-6"
                itemClasses={{
                    item: "data-[current=true]: text-black",
                }}>
                <BreadcrumbItem onClick={() => handleItemClick("")}>
                    Products
                </BreadcrumbItem>
                {items
                    ? items.map((item) => (
                          <BreadcrumbItem
                              className="!text-black"
                              key={item?.id}
                              onClick={() => handleItemClick(item.id)}>
                              {item?.name}
                          </BreadcrumbItem>
                      ))
                    : null}
            </Breadcrumbs>
            <div className="flex flex-col bg-white px-4 items-start py-4 rounded-2xl w-64 h-96">
                <h4 className="text-black font-bold text-xl pl-2">
                    Categories
                </h4>
                <Accordion
                    variant="light"
                    itemClasses={{
                        title: "text-black text-base",
                        base: "text-black text-sm",
                    }}>
                    {accordionItems.map((category) => (
                        <AccordionItem
                            onPress={() => handleItemClick(category.parentID)}
                            key={category.parentID}
                            title={category.parentName}>
                            {category.children?.map((child) => (
                                <div
                                    key={child.childID}
                                    className="text-black text-sm cursor-pointer"
                                    onClick={() =>
                                        handleItemClick(child.childID)
                                    }>
                                    {child.childName}
                                </div>
                            ))}
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
};

export default Categories;
