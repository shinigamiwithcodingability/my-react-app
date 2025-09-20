import axios from 'axios';
import { ProductInfo } from '../components/dataschemas/productinfo';


export class ProductHttpService{
    private apiUrl:string = "https://coreapireact-argvg8edavfrb7fp.centralindia-01.azurewebsites.net/api/products";

    async getProducts() : Promise<ProductInfo[]>{
      try{
          const response = await axios.get<ProductInfo[]>(this.apiUrl);
          return response.data;
      }catch(error : unknown){
          console.error("Error fetching products:", error);
          if (error instanceof Error) {
              throw new Error("Failed to fetch products with error: " + error.message);
          }
          throw new Error("Failed to fetch products due to an unknown error.");
      }
    }

    async getOneProduct(prodId: string  ): Promise<ProductInfo> {
      try{
         if(!prodId){
            throw new Error("Product ID is required");
         }
         const response = await axios.get<ProductInfo>(`${this.apiUrl}/${prodId}`);
         return response.data;
      }catch(error : unknown){
         if (error instanceof Error) {
            throw new Error("Failed to fetch the product with error: " + error.message);
         }
         throw new Error("Failed to fetch the product due to an unknown error.");
      }
   }

   async postProduct(product: ProductInfo): Promise<ProductInfo>{
      try{
         const response = await axios.post<ProductInfo>(this.apiUrl,product, {
            headers:{
                'Content-Type': 'application/json'
            }
         });

         return response.data;
      }catch(error : unknown){ 
         if (error instanceof Error) {
            throw new Error("Failed to create the product with error: " + error.message);
         }
         throw new Error("Failed to create the product due to an unknown error.");
      }
   }

   async putProduct(product: ProductInfo): Promise<ProductInfo>{
      try{
         const response = await axios.put<ProductInfo>(`${this.apiUrl}/${product.ProductId}`, product,{
            headers: {
               'Content-Type': 'application/json'
            }
         });
         return response.data;
      }catch(error : unknown){
         if (error instanceof Error) {
            throw new Error("Failed to create the product with error: " + error.message);
         }
         throw new Error("Failed to create the product due to an unknown error.");
      }
   }

   async deleteProduct(prodId:string): Promise<void>{
      try{
         await axios.delete(`${this.apiUrl}/${prodId}`);
      }catch(error : unknown){
         if (error instanceof Error) {
            throw new Error("Failed to delete the product with error: " + error.message);
         }
         throw new Error("Failed to delete the product due to an unknown error.");
      }
   }
}