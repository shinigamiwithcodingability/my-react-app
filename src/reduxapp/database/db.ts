import { ProductInfo } from "../../components/dataschemas/productinfo";

export const ProductDb : Array<ProductInfo> = new Array<ProductInfo>();

ProductDb.push(new ProductInfo(1, 'P001', 'Laptop', 'Electronics', 'High performance laptop', 1200.00));
ProductDb.push(new ProductInfo(2, 'P002', 'Smartphone', 'Electronics', 'Latest model smartphone', 800.00));
ProductDb.push(new ProductInfo(3, 'P003', 'Washing Machine', 'Home Appliances', 'Energy-efficient washing machine', 500.00));
ProductDb.push(new ProductInfo(4, 'P004', 'Refrigerator', 'Home Appliances', 'Double-door refrigerator', 700.00));


export default ProductDb;