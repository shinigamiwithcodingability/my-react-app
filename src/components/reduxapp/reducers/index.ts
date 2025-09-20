import { createReducer } from "@reduxjs/toolkit";
import { ProductInfo } from "../../dataschemas/productinfo";
import type {IState}  from "../store";
import {getProductSuccess,getProductSuccessById,createProductSuccess, updateProductSuccess,selectProductSuccess} from "../actions";


export const initialState: IState = {
    product : null as ProductInfo | null ,
    products : [] as ProductInfo[] ,
    message : ''
}


export const productReducer = createReducer(initialState,(builder) =>{

    //addCase: simplification of switchcase statement
    //state: The mapping with the 'initialState' which will be mutated
    //action: The output data (payload) returned by the dispatched action

    builder.addCase(getProductSuccess,(state,action) => {
        state.products = action.payload.products;
        state.message = action.payload.message;
    }).addCase(getProductSuccessById,(state, action) => {
        const index = state.products.findIndex((p: ProductInfo) => p.ProductId === action.payload.id)
        
        state.product = index != -1 ? state.products[index] : null;
        state.message = action.payload.message;
    }).addCase(createProductSuccess,(state,action) => {
        state.products.push(action.payload.product);
        state.message = action.payload.message;
    }).addCase(selectProductSuccess,(state,action) => {
        state.product = action.payload.product;
        state.message = action.payload.message;
    }).addCase(updateProductSuccess,(state,action) => {
        const index: number = state.products.findIndex((p : ProductInfo) => p.ProductId === action.payload.product.ProductId);
        if(index !== -1){
            state.products[index] = action.payload.product;
            state.message = action.payload.message;
        }
    })

})