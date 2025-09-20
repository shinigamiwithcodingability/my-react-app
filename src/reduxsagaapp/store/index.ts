import { ProductInfo } from "../../components/dataschemas/productinfo";

export interface IState{
    products: ProductInfo[];
    product: ProductInfo | null;
    message: string;
}