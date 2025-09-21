import { put, call, all, takeLatest } from 'redux-saga/effects';
import { GET_PRODUCTS, CREATE_PRODUCT, getProductsSuccess, createProductSuccess, getProductsFailed } from '../actions';
import { ProductHttpService } from '../../../services/producthttpseriveproductinfo';
import type { ProductInfo } from '../../dataschemas/productinfo';

//worker saga
//fetch all products

function* fetchProductsSaga() {
    try{
        const serv : ProductHttpService = new ProductHttpService();

        const products : Array<ProductInfo> = yield call([serv, serv.getProducts]);

        yield put(getProductsSuccess(products));
    }catch(error : unknown){
        yield put(getProductsFailed((error as Error).message));
    }
}

//Create product
function* createProductSaga(action : any) {
    try {

        // Create an instance of the ProductHttpService
        const serv: ProductHttpService = new ProductHttpService();
        // Call the postProduct method of the service to create a new product
        const product : ProductInfo = yield call([serv, serv.postProduct], action.payload.product);
        // Dispatch the success action with the created product
        yield put(createProductSuccess(product));
    } catch (error : unknown) {
        console.log('Error occurred while creating product:', error);
    }
}


// Lets create a global generator that maps every
// input action to the geerator functions those are handling
// effects aka async calls
//watcher saga
export function* globalWatcherEffects() {
    yield all([
        takeLatest(GET_PRODUCTS, fetchProductsSaga),
        // The takeLatest also reads the action payload dispatched from the View
        takeLatest(CREATE_PRODUCT, createProductSaga)
    ]);
}