import { createCategoryAdapter } from "@/adapters/category.adapter";
import { getCategories } from "@/services/categories.service";

export const handleGetCategories = async () => {
    const response = await getCategories();
    const categories = response.data.map(createCategoryAdapter);
    return categories;
};
