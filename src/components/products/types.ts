import { ProductEntity } from "@/models";
export interface CardLIstProps {
    products: ProductEntity[];
}
export interface CardProps {
    title: string;
    price: number;
    image: string;
    cartCount: number;
    onAdd: () => void;
}
