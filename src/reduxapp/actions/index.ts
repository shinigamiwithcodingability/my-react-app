// Action creator for selecting a product
// ...existing code...

export const setSelectedProduct = createAction<ProductInfo>('SET_SELECTED_PRODUCT');
import { createAction } from "@reduxjs/toolkit";
import { ProductInfo } from "../../components/dataschemas/productinfo";
import { ProductDb } from "../database/db";
// Action Types
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCT_BY_ID_SUCCESS = 'GET_PRODUCT_BY_ID_SUCCESS';
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';

// Action Creators
export const getProductsSuccess = createAction(GET_PRODUCTS_SUCCESS,() => {
    const products = ProductDb || [];
    return {        
        payload:{ 
            products : products, 
            message: 'Products are received successfully'
        }
       };
}   );

export const getProductByIdSuccess = createAction(GET_PRODUCT_BY_ID_SUCCESS, (id: string) => {
    return{
        payload : {
            id : id,
            message: id ? 'Product is received successfully' : 'Product not found'  
        }
    }
});

export const createProductSuccess = createAction(CREATE_PRODUCT_SUCCESS, (product: ProductInfo) => {
    return { 
        payload: { 
            product: product, 
            message: 'Product is created successfully' 
        }
    };
});