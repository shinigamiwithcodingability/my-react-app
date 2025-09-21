// import { BrowserRouter } from 'react-router-dom';
// import MainRoutingComponent from './components/routingapp/mainroutingcmponent.tsx';
// import FirstComponent from './components/firstcomponent.tsx';




import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { productReducer } from './reduxapp/reducers';
import createSagaMiddleware from 'redux-saga';
import MainReduxSagaComponent from './components/reduxappsagaapp/views/mainreduxcomponent';
import {globalWatcherEffects} from './components/reduxappsagaapp/effects/index'

// The SAGA Middleware Object that is responsible for 
// running the middleare at global level
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    products: productReducer
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware) // Adding the saga middleware to the store as per old definition (as it support thunk middleware by default hence type casting it to saga middleware)
});


// Running the saga middleware at global level
sagaMiddleware.run(globalWatcherEffects);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <MainReduxSagaComponent />
    </Provider>
  </StrictMode>
)
