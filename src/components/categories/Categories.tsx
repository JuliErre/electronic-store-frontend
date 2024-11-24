"use client";
import { useFetch } from "@/hooks/useFetch";
import { CategoryEntity } from "@/models";
import { handleGetCategories } from "@/useCases/categories/categories";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import CategoriesSkeleton from "./CategoriesSkeleton";
import { getAccordionItems } from "./utils";

const Categories = () => {
    const {
        data: categories,
        error,
        loading,
    } = useFetch<CategoryEntity[]>(handleGetCategories);

    const router = useRouter();

    const accordionItems = categories ? getAccordionItems(categories) : [];
    if (loading) return <CategoriesSkeleton />;

    const handleItemClick = (id: string) => {
        const params = new URLSearchParams(window.location.search);
        params.set("category", id);
        const query = params.toString() ? `?${params.toString()}` : "";
        router.push(query);
    };

    return (
        <div className="flex bg-white px-4 items-start py-4 rounded-2xl w-64 h-96">
            {loading && <CategoriesSkeleton />}
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
                                onClick={() => handleItemClick(child.childID)}>
                                {child.childName}
                            </div>
                        ))}
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
};

export default Categories;
