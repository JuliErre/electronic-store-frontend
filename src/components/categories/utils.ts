import { CategoryEntity } from "@/models";
import { AccordionData, BreadcrumbItem } from "./types";

export const getAccordionItems = (
    categories: CategoryEntity[]
): AccordionData[] => {
    const categoriesByParent = categories.reduce<
        Record<string, CategoryEntity[]>
    >((grouped, category) => {
        const parentId = category.parentId ?? null;
        const currentGroup = grouped[parentId] || [];
        return {
            ...grouped,
            [parentId]: [...currentGroup, category],
        };
    }, {});

    const rootCategories = categoriesByParent["null"] || [];

    return rootCategories.map((rootCategory) => ({
        parentID: rootCategory.id,
        parentName: rootCategory.name,
        children: (categoriesByParent[rootCategory.id] || []).map((child) => ({
            childID: child.id,
            childName: child.name, // This was missing
        })),
    }));
};

export const getBreadcrumbItems = (
    accordionItems: AccordionData[],
    categoryId: string | null
): BreadcrumbItem[] => {
    if (!categoryId) return [];

    const currentCategory = accordionItems.find(
        (item) =>
            item.parentID === categoryId ||
            item.children?.some((child) => child.childID === categoryId)
    );

    if (!currentCategory) return [];

    const currentChild = currentCategory.children?.find(
        (child) => child.childID === categoryId
    );

    const parentItem = {
        id: currentCategory.parentID,
        name: currentCategory.parentName,
    };

    if (!currentChild) return [parentItem];

    const childItem = {
        id: currentChild.childID,
        name: currentChild.childName,
    };

    return [parentItem, childItem];
};
