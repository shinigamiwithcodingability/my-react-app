// import { BrowserRouter } from 'react-router-dom';
// import MainRoutingComponent from './components/routingapp/mainroutingcmponent.tsx';
// import FirstComponent from './components/firstcomponent.tsx';



// import UserRegistrationComponent from './components/validators/userregistrationcomponent.tsx';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import  {BrowserRouter} from 'react-router-dom';
import MainRoutingComponent from './components/routingapp/mainroutingcmponent';
// import ProductInfoHttpComponent from './components/productinfohttp/productinfoHttpComponent';
// import { configureStore } from '@reduxjs/toolkit';
// import { Provider } from 'react-redux';
// import { productReducer } from './reduxapp/reducers';
// import MainReduxComponent from './reduxapp/views/mainreduxcomponent';

// const store = configureStore({
//   reducer: productReducer
// });
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h2>Welcome to the Product Information</h2>
    <BrowserRouter>
      <MainRoutingComponent />
    </BrowserRouter>
  </StrictMode>,
)
