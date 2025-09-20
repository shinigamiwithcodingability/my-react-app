import { createReducer } from "@reduxjs/toolkit";
import { ProductInfo } from "../../components/dataschemas/productinfo";
import type { IState } from "../store";

import { getProductsSuccess, getProductByIdSuccess, createProductSuccess } from "../actions";
import { setSelectedProduct } from "../actions";

// Initial state for the product reducer
// This state will be used to manage the products in the application
export const initialState: IState = {
    products: [],
    product: null as ProductInfo | null,
    message: '',
    selectedProduct: null
};

export const productReducer = createReducer(initialState, (builder) => {
    //addCase is simplication of switch case
    //state: The mappig with 'initialState' which will be mutated
    //action: The output data (payload) returned by the dispatched action

    console.log("In productReducer");
    // console.log(`initialState: ${JSON.stringify(initialState)}`);

    builder.addCase(getProductsSuccess, (state, action) => {
        state.products = action.payload.products;
        state.message = action.payload.message;
    })
        .addCase(getProductByIdSuccess, (state, action) => {
            const productId = action.payload.id;
            state.product = state.products.find(product => product.ProductId === productId) || null;
            state.message = action.payload.message;
        })
        .addCase(createProductSuccess, (state, action) => {
            const newProduct = action.payload.product;
            state.products.push(newProduct);
            state.message = action.payload.message;
            state.product = newProduct; // Set the newly created product as the current product
        })
        .addCase(setSelectedProduct, (state, action) => {
            state.selectedProduct = action.payload;
        });
});