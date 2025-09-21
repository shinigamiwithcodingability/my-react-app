import React,{useCallback} from 'react';
import { useSelector,shallowEqual } from 'react-redux';
import ProductListReduxComponent from './profuctlistsagacomponent';
import ProductCreateReduxComponent from './productcreatesagacomponent';
import type { IState } from '../store';
import { getProductsSuccess } from '../actions';
import { useDispatch } from 'react-redux';
const MainReduxSagaComponent = () => {
    //Subscribe to the redux store to get the products state
    //UseSelector is a hook that allows you to extract data from the Redux store state
    const stateData : any = useSelector(
        (state:IState) => state.products,
        shallowEqual//shallowEqual is used to compare the previous and current state(shallowly)
        //that is mutated in state,if change then the corresponding component will be re-rendered
    );
    const dispatch = useDispatch()
    const dispatchGetProductSuccess = useCallback(():void => {
        dispatch(getProductsSuccess());
    },[dispatch]);

    console.log(`MainReduxComponent stateData: ${JSON.stringify(stateData)}`);
    return(
        <div>
            <h1>Main MainRedux Component</h1>
            <ProductCreateReduxComponent />
            <ProductListReduxComponent products={stateData } getData={dispatchGetProductSuccess}/>
        </div>
    )
}

export default MainReduxSagaComponent;