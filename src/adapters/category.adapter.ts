import { CategoryEntity, EndpointCategory } from "@/models";

export const createCategoryAdapter = (
    category: EndpointCategory
): CategoryEntity => {
    return {
        id: category.id,
        parentId: category.parentId,
        name: category.name,
    };
};
