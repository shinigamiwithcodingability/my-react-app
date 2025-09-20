import React,{useCallback} from 'react';
import ProductListReduxComponent from "./profuctlistcomponent"
import ProductCreateComponent from "./productcreatecomponent"
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import type {IState}  from '../store'
import { getProductSuccess } from '../actions';
//subscribe to the store to read products from the state

const MainReduxComponent = () =>{

    const stateData : any = useSelector(
        (state:IState) => state.products,
        shallowEqual //used to compare the state data with new dispatched action output that is mutated in state, 
                     //if change then the corresponding component will be rerendered otherwise it will not
    )

    const dispatch = useDispatch();

    const dispatchGetProductSuccess = useCallback((): void=>{
        dispatch(getProductSuccess());
    },[dispatch]);

    console.log('State Data : ', stateData);
    return(
        <div className="container">
            <h2>Main Redux Component</h2>
            <ProductListReduxComponent products={stateData} getData={dispatchGetProductSuccess}/>
            <ProductCreateComponent />
        </div>
    )
};

export default MainReduxComponent;