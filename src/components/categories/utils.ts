import { CategoryEntity } from "@/models";
import { AccordionData } from "./types";

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
