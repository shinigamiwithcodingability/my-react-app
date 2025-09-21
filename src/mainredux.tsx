// import { BrowserRouter } from 'react-router-dom';
// import MainRoutingComponent from './components/routingapp/mainroutingcmponent.tsx';
// import FirstComponent from './components/firstcomponent.tsx';



// import UserRegistrationComponent from './components/validators/userregistrationcomponent.tsx';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { productReducer } from './components/reduxapp/reducers';
import MainReduxComponent from './components/reduxapp/views/mainreduxcomponent';

const store = configureStore({
  reducer: productReducer
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <MainReduxComponent />
    </Provider>
  </StrictMode>
)
