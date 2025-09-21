import React,{useCallback} from 'react';
import ProductListReduxSagaComponent from "./profuctlistcomponent"
import ProductCreateSagaComponent from "./productcreatecomponent"
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import type {IState}  from '../store'
import { getProducts } from '../actions';
//subscribe to the store to read products from the state

const MainReduxSagaComponent = () =>{

    // Subscribe to the store to read products from the state
    // this will keep on providing data when the store changed
    const stateData : any = useSelector(
        (state:IState) => state.products,
        shallowEqual //used to compare the state data with new dispatched action output that is mutated in state, 
                     //if change then the corresponding component will be rerendered otherwise it will not
    )

    const dispatch = useDispatch();
    // Dispatch the getProductsSuccess action

    const dispatchGetProduct = useCallback((): void=>{
        dispatch(getProducts());
    },[dispatch]);

    console.log('State Data : ', stateData);
    return(
        <div className="container">
            <h2>Main Redux Saga Component</h2>
            <ProductListReduxSagaComponent products={stateData.products} getData={dispatchGetProduct}/>
            <ProductCreateSagaComponent />
        </div>
    )
};

export default MainReduxSagaComponent;