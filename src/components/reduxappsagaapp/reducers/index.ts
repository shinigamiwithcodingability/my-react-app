import { createReducer } from "@reduxjs/toolkit";
import { ProductInfo } from "../../dataschemas/productinfo";
import type {IState}  from "../store";
import { getProducts,getProductsSuccess,createProduct,createProductSuccess,getProductsFailed } from "../actions";


export const initialState: IState = {
    product : null as ProductInfo | null ,
    products : [] as ProductInfo[] ,
    message : ''
}
    
export const productReducer = createReducer(initialState,(builder) => {
    builder.addCase(getProducts, (state, action) => {
        state.message = action.payload.message;
    }).addCase(getProductsSuccess,(state,action) => {
        state.products = action.payload.products;
        state.message = action.payload.message;
    }).addCase(createProduct,(state,action) => {
        state.product = action.payload.product;
        state.message = action.payload.message;
    }).addCase(createProductSuccess,(state,action) => {
        state.product = action.payload.product;
        state.products.push(action.payload.product);
        state.message = action.payload.message;
    }).addCase(getProductsFailed,(state,action) => {
        state.message = action.payload.error;
    })
})