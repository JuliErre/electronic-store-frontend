export interface AccordionData {
    parentName: string;
    parentID: string;
    children: AccordionChild[];
}
export interface AccordionChild {
    childName: string;
    childID: string;
}

export interface CategoriesProps {
    onItemClick: (categoryId: string) => void;
}
