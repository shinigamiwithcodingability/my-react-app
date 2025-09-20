import { createAction } from "@reduxjs/toolkit";
import { ProductInfo } from "../../dataschemas/productinfo";
import { ProductDb } from "../database/db";
//Actions
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCT_BY_ID_SUCCESS = "GET_PRODUCT_BY_ID_SUCCESS";
export const CREATE_PRODUCT_SUCCESS = "CREATE_PRODUCT_SUCCESS";
export const UPDATE_PRODUCT_SUCCESS = "UPDATE_PRODUCT_SUCCESS";
export const SELECT_PRODUCT_SUCCESS = "SELECT_PRODUCT_SUCCESS";
//let's define action creators

export const selectProductSuccess = createAction('SELECT_PRODUCT_SUCCESS', (product : ProductInfo) => {
    return {
        payload: {
            product: product,
            message: 'Product selected successfully',
        }
    };
})
export const updateProductSuccess = createAction('UPDATE_PRODUCT_SUCCESS',(prod : ProductInfo) =>{
    const existingProduct = ProductDb.find(p => p.ProductId === prod.ProductId);
    if(!existingProduct)
        throw new Error("Product not found");
    return {
        payload: {
            product : existingProduct,
            message : 'Product updated successfully',
        }
    };
})

export const getProductSuccess = createAction('GET_PRODUCT_SUCCESS', () => {
    const products = ProductDb || [];
    return {
        payload: {
            products : products,
            message : 'Product fetched successfully',
        }       

    };
});

export const getProductSuccessById = createAction('GET_PRODUCT_BY_ID_SUCCESS', (id: string) => {
    if(id === null || id === undefined)
        throw new Error("Invalid product id");
    return {
        payload: {
            id : id,
            message : 'Product received successfully',
        }
    }
})


export const createProductSuccess = createAction('CREATE_PRODUCT_SUCCESS', (product: ProductInfo) => {
    return {
        payload: {
            product : product,
            message : 'Product created successfully',
        }
    };
});