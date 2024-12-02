import { ProductEntity } from "./product.entity.model";

export type ProductCart = ProductEntity & { quantity: number };
