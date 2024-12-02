import { ProductEntity } from "@/models";
export interface CardLIstProps {
    products: ProductEntity[] | [];
}
export interface CardProps {
    title: string;
    price: number;
    image: string;
    cartCount: number;
    onAdd: (e: React.MouseEvent) => void;
    onClick: (e: React.MouseEvent) => void;
}

export interface CardSkeletonListProps {
    length: number;
}

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
}

export interface CardProductDetailProps {
    product: ProductEntity;
}
