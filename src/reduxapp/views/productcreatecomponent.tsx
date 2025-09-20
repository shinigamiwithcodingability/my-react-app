import React, {useState, useEffect} from 'react';
import { ProductInfo,Products} from '../../components/dataschemas/productinfo';
import { createProductSuccess } from '../actions';
import { useDispatch } from 'react-redux';
// import DataContext from '../datasschemas/propschemas';

// import SelectComponent from '../reusablecomponents/selectcomponent';
// import { useNavigate } from 'react-router-dom';
const ProductCreateReduxComponent=()=>{
    // Define state for the ProductInfo
    const [product, setProduct] = useState<ProductInfo>(new ProductInfo(0,'','','','',0));
    // const categories = ['Electronics','Electrical','Books','Fashion'];

    const dispatch  = useDispatch();

    const save = () => {
        // Dispatch the createProductSuccess action with the product data
        dispatch(createProductSuccess(product));
    }

    const clear=()=>{
        // Reset the ProductInfo object
        setProduct(new ProductInfo(0,'','','','',0));
    }
    

   

    return (
        <div className='container'>
            <h2>The Product Http Component</h2>
            {/* <form> */}
                <div className='form-group'>
                    <label htmlFor="ProductRecordId">Product Record Id:</label>
                    <input type="number" className='form-control'
                      placeholder='Enter Product record Id'
                      value={product.ProductRecordId}
                      onChange={
                        (evt)=>setProduct({...product, ProductRecordId:parseInt(evt.target.value)})
                      }
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="ProductId">Product Id:</label>
                    <input type="text" className='form-control'
                      placeholder='Enter Product = Id'
                      value={product.ProductId}
                       onChange={
                        (evt)=>setProduct({...product, ProductId:evt.target.value})
                      }
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="ProductName">Product Name:</label>
                    <input type="text" className='form-control'
                      placeholder='Enter Product Name'
                      value={product.ProductName}
                       onChange={
                        (evt)=>setProduct({...product, ProductName:evt.target.value})
                      }
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="CategoryName">Category Name:</label>
                   
                </div>
                <div className='form-group'>
                    <label htmlFor="Description">Product Name:</label>
                    <input type="text" className='form-control'
                      placeholder='Enter Description'
                      value={product.Description}
                       onChange={
                        (evt)=>setProduct({...product, Description:evt.target.value})
                      }
                    />
                </div>
                 <div className='form-group'>
                    <label htmlFor="UnitPrice">Unit Price:</label>
                    <input type="number" className='form-control'
                      placeholder='Enter Unit Price'
                      value={product.UnitPrice}
                      onChange={
                        (evt)=>setProduct({...product, UnitPrice:parseInt(evt.target.value)})
                      }
                    />
                </div>
                <div className='btn-group-lg'>
                    <button className='btn btn-success' onClick={save}>Add</button>
                    <button className='btn btn-warning' onClick={clear}>Clear</button>
                </div>
            {/* </form> */}            
             
        </div>
    );


};



export default ProductCreateReduxComponent;