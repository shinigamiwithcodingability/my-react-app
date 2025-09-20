export class ProductInfo {
   [x:string]:any;// indexer for Reading Properties from the class
    // x is the name of the property which is always string and any is the type of the property
    //[x:string] means this is an index based representation for x i.e. property name index

    ProductRecordId: number;
    ProductId: string;
    ProductName: string;
    CategoryName: string;
    Description: string;
    UnitPrice: number;

    constructor(
        ProductRecordId: number,
        ProductId: string,
        ProductName: string,
        CategoryName: string,
        Description: string,
        UnitPrice: number
    ){
        this.ProductRecordId = ProductRecordId;
        this.ProductId = ProductId;
        this.ProductName = ProductName;
        this.CategoryName = CategoryName;
        this.Description = Description;
        this.UnitPrice = UnitPrice;
    }
}

export const Products:Array<ProductInfo> = new Array<ProductInfo>();

// Products.push(new ProductInfo(1, 'Prod-0001', 'Laptop', 'Electronics','Developer Laptop', 54321));
// Products.push(new ProductInfo(2, 'Prod-0002', 'Bulb', 'Electrical', '100 Watt', 450));