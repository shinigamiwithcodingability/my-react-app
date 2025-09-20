import { ProductInfo } from "../../dataschemas/productinfo";

export const ProductDb: Array<ProductInfo> = new Array<ProductInfo>();

ProductDb.push(new ProductInfo(1,'prod-01', 'Laptop', 'Electronics', 'High performance laptop', 0.00));
ProductDb.push(new ProductInfo(2, 'prod-02','Smartphone', 'Electronics', 'Latest model smartphone', 8001000.0));
ProductDb.push(new ProductInfo(3, 'prod-03','Headphones', 'Electronics', 'Noise cancelling headphones', 300150.0));
