import { ProductEntity } from "./product.model";

export type ProductCart = ProductEntity & { quantity: number };
