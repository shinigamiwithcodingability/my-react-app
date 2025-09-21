import { createAction } from "@reduxjs/toolkit";
import { ProductInfo } from "../../dataschemas/productinfo";
// import { ProductDb } from "../database/db";

//Actions types
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILED = 'GET_PRODUCTS_FAILED';
export const GET_PRODUCT_BY_ID = 'GET_PRODUCT_BY_ID';
export const GET_PRODUCT_BY_ID_SUCCESS = 'GET_PRODUCT_BY_ID_SUCCESS';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';


//let's define action creators
export const getProducts = createAction(GET_PRODUCTS,() =>{
    return{
        payload: {
            message: 'Getting products request initiated'
        }
    }
});

export const getProductsSuccess = createAction(GET_PRODUCTS_SUCCESS, (products : Array<ProductInfo>) => {
    return{
        payload: {
            products: products,
            message: 'All products fetched successfully from the database'
        }
    }

});

export const getProductsFailed = createAction(GET_PRODUCTS_FAILED, (error: string) => {
    return{
        payload:{
            error: error
        }
    }
})

export const getProductById = createAction(GET_PRODUCT_BY_ID, (id: number) => {
    return{
        payload: {
            id: id,
            message: `Getting product by id: ${id} request initiated`
        }
    }
});

export const getProductByIdSuccess = createAction(GET_PRODUCT_BY_ID_SUCCESS, (product: ProductInfo) => {
    return{
        payload:{
            product: product,
            message: `Product with id: ${product.id} fetched successfully from the database`
        }
    }
});

export const createProduct = createAction(CREATE_PRODUCT, (product : ProductInfo) => {
    return{
        payload:{
            product: product,
            message: 'Create product request initiated'
        }
    }
})

export const createProductSuccess = createAction(CREATE_PRODUCT_SUCCESS, (product: ProductInfo) => {
    return{
        payload:{
            product: product,
            message: 'Product created successfully'
        }
    }
});
